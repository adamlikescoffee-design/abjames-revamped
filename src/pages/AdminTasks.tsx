import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { z } from "zod";
import { ArrowLeft, Minus, Loader2, Pencil, Plus, Trash2, ShieldAlert, History, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Recurrence, TASK_TIMEZONE, WEEKDAYS, cycleStart, describeRule, formatDate, isActive,
  localDate, msUntilLocalMidnight, nextReset,
} from "@/lib/recurrence";

const OWNER_ID = "7d7f6236-11d0-4f05-b6b6-e1db3791845b";

interface Task {
  id: string;
  title: string;
  notes: string | null;
  recurrence: Recurrence;
  weekly_day: number | null;
  monthly_day: number | null;
  start_date: string;
  archived_at: string | null;
  target_count: number;
}
interface Completion { id: string; task_id: string; cycle_key: string; completed_at: string; slot: number }

const taskSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200, "Keep the title under 200 characters"),
  notes: z.string().trim().max(2000, "Notes must be under 2000 characters"),
  recurrence: z.enum(["daily", "weekly", "monthly"]),
  weekly_day: z.number().int().min(0).max(6),
  monthly_day: z.number().int().min(1).max(31),
  target_count: z.number().int().min(1, "At least 1").max(100, "Max 100"),
  start_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Pick a start date"),
});

type Filter = "all" | Recurrence;

/** Current Guayaquil date, refreshed on focus, visibility and at local midnight. */
function useToday() {
  const [today, setToday] = useState(() => localDate(new Date()));
  useEffect(() => {
    const update = () => setToday(localDate(new Date()));
    let timer: number;
    const schedule = () => {
      timer = window.setTimeout(() => { update(); schedule(); }, Math.min(msUntilLocalMidnight(new Date()) + 500, 60_000));
    };
    schedule();
    window.addEventListener("focus", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("focus", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return today;
}

const AdminTasks = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  // Role check result is keyed to the user it was checked for, so a changed
  // session can never inherit an earlier "ok".
  const [authz, setAuthz] = useState<{ userId: string; ok: boolean } | null>(null);
  const userId = user?.id ?? null;

  useEffect(() => {
    if (authLoading) return;
    if (!userId) {
      navigate("/admin/login", { state: { from: "/admin/tasks" } });
      return;
    }
    if (userId !== OWNER_ID) return;
    let cancelled = false;
    supabase.rpc("has_role", { _user_id: userId, _role: "admin" }).then(({ data, error }) => {
      if (!cancelled) setAuthz({ userId, ok: !error && data === true });
    });
    return () => { cancelled = true; };
  }, [authLoading, userId, navigate]);

  const isOwner = !!userId && userId === OWNER_ID;
  const checked = isOwner && authz?.userId === userId;
  const state: "loading" | "denied" | "ok" =
    authLoading || !userId ? "loading" : !isOwner ? "denied" : !checked ? "loading" : authz!.ok ? "ok" : "denied";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>My Tasks | Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {state === "loading" ? (
        <div className="min-h-screen flex items-center justify-center" role="status" aria-label="Loading">
          <Loader2 className="animate-spin text-primary" />
        </div>
      ) : state === "denied" ? (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
          <ShieldAlert size={40} className="text-primary" />
          <h1 className="font-heading text-3xl">Access denied</h1>
          <p className="text-muted-foreground max-w-sm">This page is private to the site owner.</p>
          <Link to="/" className="text-primary hover:underline text-sm">← Back to the site</Link>
        </div>
      ) : (
        <TaskDashboard key={userId!} />
      )}
    </div>
  );
};

export const HISTORY_LIMIT = 500;
const TASK_COLS = "id,title,notes,recurrence,weekly_day,monthly_day,start_date,archived_at,target_count";
const COMP_COLS = "id,task_id,cycle_key,completed_at,slot";

/** A PostgREST error with a code is a definite rejection; anything else (network) is uncertain. */
const isDefinite = (e: unknown) => !!(e && typeof e === "object" && "code" in e && (e as { code?: string }).code);

const TaskDashboard = () => {
  const today = useToday();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [counts, setCounts] = useState<Map<string, number[]>>(new Map());
  const [history, setHistory] = useState<Completion[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [pending, setPending] = useState<Set<string>>(new Set());
  const pendingRef = useRef<Set<string>>(new Set());
  const seqRef = useRef(0);
  const todayRef = useRef(today);
  todayRef.current = today;
  const [editing, setEditing] = useState<Task | "new" | null>(null);
  const [removing, setRemoving] = useState<Task | null>(null);
  const [removeBusy, setRemoveBusy] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  /** Loads tasks, current-cycle completions (unlimited by history) and newest history. Stale responses are dropped. */
  const load = useCallback(async (): Promise<boolean> => {
    const seq = ++seqRef.current;
    const day = todayRef.current;
    try {
      const t = await supabase.from("recurring_tasks").select(TASK_COLS).order("created_at");
      if (t.error) throw t.error;
      const list = (t.data ?? []) as Task[];
      const active = list.filter((x) => !x.archived_at && isActive(x, day));
      const wanted = new Set(active.map((x) => `${x.id}|${cycleStart(x, day)}`));
      const keys = [...new Set(active.map((x) => cycleStart(x, day)))];
      const [cur, hist] = await Promise.all([
        keys.length
          ? supabase.from("task_completions").select(COMP_COLS).in("cycle_key", keys).in("task_id", active.map((x) => x.id))
          : Promise.resolve({ data: [] as Completion[], error: null }),
        supabase.from("task_completions").select(COMP_COLS).order("completed_at", { ascending: false }).limit(HISTORY_LIMIT),
      ]);
      if (cur.error) throw cur.error;
      if (hist.error) throw hist.error;
      if (seq !== seqRef.current) return true; // superseded by a newer load
      setTasks(list);
      const m = new Map<string, number[]>();
      for (const c of (cur.data ?? []) as Completion[]) {
        const k = `${c.task_id}|${c.cycle_key}`;
        if (!wanted.has(k)) continue;
        m.set(k, [...(m.get(k) ?? []), c.slot ?? 1]);
      }
      setCounts(m);
      setHistory((hist.data ?? []) as Completion[]);
      setLoadError(null);
      setLoading(false);
      return true;
    } catch {
      if (seq !== seqRef.current) return true;
      setLoadError("Couldn't load your tasks. Check your connection and try again.");
      setLoading(false);
      return false;
    }
  }, []);

  // Initial load, on date rollover, and whenever the page regains focus (picks up other-device changes).
  useEffect(() => { load(); }, [load, today]);
  useEffect(() => {
    const onFocus = () => { if (document.visibilityState !== "hidden") load(); };
    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onFocus);
    return () => {
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onFocus);
    };
  }, [load]);

  const completions = history;

  const current = useMemo(
    () => tasks
      .filter((t) => !t.archived_at && isActive(t, today))
      .map((t) => {
        const key = cycleStart(t, today);
        const slots = counts.get(`${t.id}|${key}`) ?? [];
        const target = t.target_count ?? 1;
        return { task: t, key, reset: nextReset(t, today), slots, target, done: slots.length >= target };
      }),
    [tasks, today, counts],
  );
  const upcoming = useMemo(() => tasks.filter((t) => !t.archived_at && !isActive(t, today)), [tasks, today]);
  const shown = current.filter((r) => filter === "all" || r.task.recurrence === filter);
  const doneCount = shown.filter((r) => r.done).length;


  const retry = () => { load().then((ok) => ok ? toast.success("Status refreshed") : toast.error("Still couldn't reach the server.")); };

  /** add=true records the next occurrence; add=false undoes the latest one. */
  const step = async (task: Task, key: string, slots: number[], add: boolean) => {
    if (pendingRef.current.has(task.id)) return;
    pendingRef.current.add(task.id);
    setPending(new Set(pendingRef.current));
    const k = `${task.id}|${key}`;
    try {
      // 1) Mutation — idempotent (unique task+cycle; delete by key).
      let mutationError: unknown = null;
      let changedSlot = 0;
      try {
        const used = new Set(slots);
        let free = 1; while (used.has(free)) free++;
        const last = slots.length ? Math.max(...slots) : 0;
        if (!add && !last) return;
        const { error } = add
          ? await supabase.from("task_completions")
              .upsert({ task_id: task.id, owner_id: OWNER_ID, cycle_key: key, slot: free }, { onConflict: "task_id,cycle_key,slot", ignoreDuplicates: true })
          : await supabase.from("task_completions").delete().eq("task_id", task.id).eq("cycle_key", key).eq("slot", last);
        changedSlot = add ? free : last;
        mutationError = error;
      } catch (e) {
        mutationError = e;
      }
      if (mutationError) {
        if (isDefinite(mutationError)) {
          toast.error(!add ? "Undo was rejected — nothing changed." : "Save was rejected — nothing changed.");
        } else {
          toast.error("Couldn't confirm whether that change saved.", { action: { label: "Retry", onClick: retry } });
        }
        return;
      }
      // 2) Confirmed: reflect locally, invalidating any in-flight stale load.
      seqRef.current++;
      setCounts((prev) => {
        const next = new Map(prev);
        const cur = next.get(k) ?? [];
        next.set(k, add ? [...cur, changedSlot] : cur.filter((x) => x !== changedSlot));
        return next;
      });
      // 3) Reconcile separately; a failure here doesn't undo the confirmed change.
      const ok = await load();
      if (!ok) {
        setLoadError(null);
        toast.error(!add ? "Undone, but the list couldn't refresh." : "Saved, but the list couldn't refresh.", { action: { label: "Retry", onClick: retry } });
      }
    } finally {
      pendingRef.current.delete(task.id);
      setPending(new Set(pendingRef.current));
    }
  };

  const confirmRemove = async () => {
    if (!removing || removeBusy) return;
    const target = removing;
    setRemoveBusy(true);
    let error: unknown = null;
    try {
      // Archiving is idempotent: only sets archived_at on a still-active row.
      const res = await supabase.from("recurring_tasks").update({ archived_at: new Date().toISOString() }).eq("id", target.id).is("archived_at", null);
      error = res.error;
    } catch (e) {
      error = e;
    }
    setRemoveBusy(false);
    if (error) {
      toast.error(isDefinite(error) ? "Removal was rejected — the task is unchanged." : "Couldn't confirm the removal.", { action: { label: "Retry", onClick: retry } });
      return;
    }
    setRemoving(null);
    seqRef.current++;
    setTasks((prev) => prev.map((t) => (t.id === target.id ? { ...t, archived_at: t.archived_at ?? new Date().toISOString() } : t)));
    toast.success("Task removed. Its history is kept.");
    if (!(await load())) { setLoadError(null); toast.error("Removed, but the list couldn't refresh.", { action: { label: "Retry", onClick: retry } }); }
  };

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: "All" }, { id: "daily", label: "Daily" }, { id: "weekly", label: "Weekly" }, { id: "monthly", label: "Monthly" },
  ];

  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <Link to="/admin" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6">
        <ArrowLeft size={16} /> Back to dashboard
      </Link>
      <div className="flex flex-wrap items-end justify-between gap-4 mb-2">
        <h1 className="font-heading text-4xl md:text-5xl">My Tasks</h1>
        <Button onClick={() => setEditing("new")} className="font-heading tracking-wider">
          <Plus size={16} /> Add task
        </Button>
      </div>
      <p className="text-muted-foreground text-sm mb-8">
        Today is {formatDate(today)} (Ecuador time). Tasks reset at midnight Ecuador time on their schedule — anything
        not ticked simply starts fresh next cycle, with no overdue pile-up.
      </p>

      <div role="tablist" aria-label="Filter by schedule" className="flex gap-2 overflow-x-auto mb-6">
        {filters.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 rounded-full text-sm font-heading tracking-wider border transition-colors whitespace-nowrap ${
              filter === f.id ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-16"><Loader2 className="animate-spin text-primary" /></div>
      ) : loadError ? (
        <div className="bg-secondary border border-border rounded-lg p-6 text-center space-y-3">
          <p>{loadError}</p>
          <Button variant="outline" onClick={() => { setLoading(true); load(); }}><RefreshCw size={16} /> Retry</Button>
        </div>
      ) : (
        <>
          {shown.length > 0 && (
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-heading tracking-wider">{doneCount} of {shown.length} done</span>
                <span className="text-muted-foreground">{shown.length - doneCount} remaining</span>
              </div>
              <Progress value={(doneCount / shown.length) * 100} aria-label="Completion progress" />
            </div>
          )}

          {shown.length === 0 ? (
            <div className="bg-secondary border border-dashed border-border rounded-lg p-10 text-center">
              <p className="font-heading text-xl mb-2">No tasks yet</p>
              <p className="text-muted-foreground text-sm mb-4">
                {filter === "all" ? "Add your first recurring task to get started." : `No ${filter} tasks right now.`}
              </p>
              <Button onClick={() => setEditing("new")}><Plus size={16} /> Add task</Button>
            </div>
          ) : (
            <ul className="space-y-3">
              {shown.map(({ task, key, reset, done, slots, target }) => {
                const id = `task-${task.id}`;
                const busy = pending.has(task.id);
                return (
                  <li key={task.id} className="bg-secondary border border-border rounded-lg p-4 flex items-start gap-4">
                    <div className="pt-1">
                      {busy ? <Loader2 size={18} className="animate-spin text-primary" /> : (
                        <Checkbox
                          id={id}
                          checked={done}
                          disabled={busy}
                          aria-label={target > 1 ? `${task.title}: ${done ? "undo last" : "log one"} (${slots.length} of ${target})` : undefined}
                          onCheckedChange={() => step(task, key, slots, !done)}
                          className="h-5 w-5"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <label htmlFor={id} className={`block font-semibold break-words cursor-pointer ${done ? "line-through text-muted-foreground" : ""}`}>
                        {task.title}
                      </label>
                      {target > 1 && (
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="icon" className="h-8 w-8" aria-label={`Undo one ${task.title}`} disabled={busy || slots.length === 0} onClick={() => step(task, key, slots, false)}><Minus size={14} /></Button>
                          <span className="font-heading tracking-wider text-lg min-w-[3.5rem] text-center" aria-live="polite">{slots.length} / {target}</span>
                          <Button variant="outline" size="icon" className="h-8 w-8" aria-label={`Log one ${task.title}`} disabled={busy || slots.length >= target} onClick={() => step(task, key, slots, true)}><Plus size={14} /></Button>
                          <Progress value={Math.min(100, (slots.length / target) * 100)} className="flex-1 h-1.5" aria-hidden />
                        </div>
                      )}
                      {task.notes && <p className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap break-words">{task.notes}</p>}
                      <p className="text-xs text-muted-foreground mt-2">
                        <span className="text-primary font-heading tracking-wider uppercase mr-2">{task.recurrence}</span>
                        {target > 1 && `${target}× · `}{describeRule(task)} · Resets {formatDate(reset)}, 12:00 AM
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" aria-label={`Edit ${task.title}`} onClick={() => setEditing(task)}><Pencil size={16} /></Button>
                      <Button variant="ghost" size="icon" aria-label={`Remove ${task.title}`} onClick={() => setRemoving(task)}><Trash2 size={16} /></Button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          {upcoming.length > 0 && (filter === "all" || upcoming.some((t) => t.recurrence === filter)) && (
            <section className="mt-10">
              <h2 className="font-heading text-2xl mb-3">Starting later</h2>
              <ul className="space-y-2">
                {upcoming.filter((t) => filter === "all" || t.recurrence === filter).map((t) => (
                  <li key={t.id} className="border border-border rounded-lg p-3 flex items-center gap-3 text-sm">
                    <span className="flex-1 break-words">{t.title}</span>
                    <span className="text-muted-foreground">Starts {formatDate(t.start_date)}</span>
                    <Button variant="ghost" size="icon" aria-label={`Edit ${t.title}`} onClick={() => setEditing(t)}><Pencil size={14} /></Button>
                    <Button variant="ghost" size="icon" aria-label={`Remove ${t.title}`} onClick={() => setRemoving(t)}><Trash2 size={14} /></Button>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-10">
            <button onClick={() => setShowHistory((s) => !s)} className="flex items-center gap-2 font-heading text-xl hover:text-primary" aria-expanded={showHistory}>
              <History size={18} /> History
            </button>
            {showHistory && completions.length >= HISTORY_LIMIT && (
              <p className="text-xs text-muted-foreground mt-2">Showing the newest {HISTORY_LIMIT} completions.</p>
            )}
            {showHistory && (
              completions.length === 0 ? (
                <p className="text-muted-foreground text-sm mt-3">No completed tasks yet.</p>
              ) : (
                <ul className="mt-3 divide-y divide-border border border-border rounded-lg text-sm">
                  {completions.map((c) => {
                    const t = tasks.find((x) => x.id === c.task_id);
                    return (
                      <li key={c.id} className="p-3 flex flex-wrap justify-between gap-2">
                        <span className="break-words">{t?.title ?? "Task"}{t?.archived_at && <span className="text-muted-foreground"> (removed)</span>}</span>
                        <span className="text-muted-foreground">
                          Cycle {formatDate(c.cycle_key)} · done {new Date(c.completed_at).toLocaleString("en-US", { timeZone: TASK_TIMEZONE, dateStyle: "medium", timeStyle: "short" })}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )
            )}
          </section>
        </>
      )}

      {editing && (
        <TaskForm
          task={editing === "new" ? null : editing}
          today={today}
          onClose={() => setEditing(null)}
          onSaved={async () => {
            setEditing(null);
            if (!(await load())) { setLoadError(null); toast.error("Saved, but the list couldn't refresh.", { action: { label: "Retry", onClick: retry } }); }
          }}
        />
      )}

      <AlertDialog open={!!removing} onOpenChange={(o) => !o && !removeBusy && setRemoving(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove "{removing?.title}"?</AlertDialogTitle>
            <AlertDialogDescription>It will stop appearing from now on. Past completions stay in your history.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={removeBusy}>Cancel</AlertDialogCancel>
            <AlertDialogAction disabled={removeBusy} onClick={(e) => { e.preventDefault(); confirmRemove(); }}>
              {removeBusy && <Loader2 size={16} className="animate-spin" />}Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

const TaskForm = ({ task, today, onClose, onSaved }: { task: Task | null; today: string; onClose: () => void; onSaved: () => void }) => {
  const [title, setTitle] = useState(task?.title ?? "");
  const [notes, setNotes] = useState(task?.notes ?? "");
  const [recurrence, setRecurrence] = useState<Recurrence>(task?.recurrence ?? "daily");
  const [weeklyDay, setWeeklyDay] = useState(task?.weekly_day ?? 1);
  const [monthlyDay, setMonthlyDay] = useState(task?.monthly_day ?? 1);
  const [target, setTarget] = useState(String(task?.target_count ?? 1));
  const [startDate, setStartDate] = useState(task?.start_date ?? today);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [newId] = useState(() => crypto.randomUUID());

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (saving) return;
    const parsed = taskSchema.safeParse({ title, notes, recurrence, weekly_day: weeklyDay, monthly_day: monthlyDay, target_count: Number(target), start_date: startDate });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const v = parsed.data;
    const row = {
      title: v.title,
      notes: v.notes || null,
      recurrence: v.recurrence,
      weekly_day: v.recurrence === "weekly" ? v.weekly_day : null,
      monthly_day: v.recurrence === "monthly" ? v.monthly_day : null,
      start_date: v.start_date,
      target_count: v.target_count,
    };
    setSaving(true);
    let error: unknown = null;
    try {
      // New tasks use a stable client id so retrying after an uncertain network failure can't create a duplicate.
      const res = task
        ? await supabase.from("recurring_tasks").update(row).eq("id", task.id)
        : await supabase.from("recurring_tasks").upsert({ ...row, id: newId, owner_id: OWNER_ID }, { onConflict: "id", ignoreDuplicates: true });
      error = res.error;
    } catch (e) {
      error = e;
    }
    setSaving(false);
    if (error) {
      toast.error(isDefinite(error)
        ? "The task was rejected and not saved."
        : "Couldn't confirm the task saved. Press Save again to retry — it won't be duplicated.");
      return;
    }
    toast.success(task ? "Task updated" : "Task added");
    onSaved();
  };

  const selectCls = "w-full bg-background border border-border rounded-md px-3 py-2 text-foreground";

  return (
    <Dialog open onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">{task ? "Edit task" : "Add task"}</DialogTitle>
          <DialogDescription>Resets happen at midnight Ecuador time.</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4" noValidate>
          <div>
            <Label htmlFor="t-title">Title</Label>
            <Input id="t-title" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={200} aria-invalid={!!errors.title} />
            {errors.title && <p className="text-destructive text-sm mt-1">{errors.title}</p>}
          </div>
          <div>
            <Label htmlFor="t-notes">Notes (optional)</Label>
            <Textarea id="t-notes" value={notes} onChange={(e) => setNotes(e.target.value)} maxLength={2000} rows={3} />
            {errors.notes && <p className="text-destructive text-sm mt-1">{errors.notes}</p>}
          </div>
          <div>
            <Label htmlFor="t-rec">Repeats</Label>
            <select id="t-rec" className={selectCls} value={recurrence} onChange={(e) => setRecurrence(e.target.value as Recurrence)}>
              <option value="daily">Daily (every day)</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          {recurrence === "weekly" && (
            <div>
              <Label htmlFor="t-wd">Resets every</Label>
              <select id="t-wd" className={selectCls} value={weeklyDay} onChange={(e) => setWeeklyDay(Number(e.target.value))}>
                {WEEKDAYS.map((d, i) => <option key={d} value={i}>{d}</option>)}
              </select>
            </div>
          )}
          {recurrence === "monthly" && (
            <div>
              <Label htmlFor="t-md">Resets on day</Label>
              <select id="t-md" className={selectCls} value={monthlyDay} onChange={(e) => setMonthlyDay(Number(e.target.value))}>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
              {monthlyDay > 28 && <p className="text-xs text-muted-foreground mt-1">In shorter months it resets on the last day.</p>}
            </div>
          )}
          <div>
            <Label htmlFor="t-target">Times per {recurrence === "daily" ? "day" : recurrence === "weekly" ? "week" : "month"}</Label>
            <Input id="t-target" type="number" inputMode="numeric" min={1} max={100} value={target} onChange={(e) => setTarget(e.target.value)} aria-invalid={!!errors.target_count} />
            {errors.target_count && <p className="text-destructive text-sm mt-1">{errors.target_count}</p>}
          </div>
          <div>
            <Label htmlFor="t-start">Start date</Label>
            <Input id="t-start" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} aria-invalid={!!errors.start_date} />
            {errors.start_date && <p className="text-destructive text-sm mt-1">{errors.start_date}</p>}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={saving}>{saving && <Loader2 size={16} className="animate-spin" />}Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminTasks;
