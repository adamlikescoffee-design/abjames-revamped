import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { z } from "zod";
import { ArrowLeft, Loader2, Pencil, Plus, Trash2, ShieldAlert, History, RefreshCw } from "lucide-react";
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
}
interface Completion { id: string; task_id: string; cycle_key: string; completed_at: string }

const taskSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200, "Keep the title under 200 characters"),
  notes: z.string().trim().max(2000, "Notes must be under 2000 characters"),
  recurrence: z.enum(["daily", "weekly", "monthly"]),
  weekly_day: z.number().int().min(0).max(6),
  monthly_day: z.number().int().min(1).max(31),
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
  const [authz, setAuthz] = useState<"checking" | "ok" | "denied">("checking");

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      navigate("/admin/login", { state: { from: "/admin/tasks" } });
      return;
    }
    if (user.id !== OWNER_ID) { setAuthz("denied"); return; }
    supabase.rpc("has_role", { _user_id: user.id, _role: "admin" }).then(({ data, error }) => {
      setAuthz(!error && data === true ? "ok" : "denied");
    });
  }, [authLoading, user, navigate]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>My Tasks | Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {authLoading || (user && authz === "checking") || !user ? (
        <div className="min-h-screen flex items-center justify-center" role="status" aria-label="Loading">
          <Loader2 className="animate-spin text-primary" />
        </div>
      ) : authz === "denied" ? (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
          <ShieldAlert size={40} className="text-primary" />
          <h1 className="font-heading text-3xl">Access denied</h1>
          <p className="text-muted-foreground max-w-sm">This page is private to the site owner.</p>
          <Link to="/" className="text-primary hover:underline text-sm">← Back to the site</Link>
        </div>
      ) : (
        <TaskDashboard />
      )}
    </div>
  );
};

const TaskDashboard = () => {
  const today = useToday();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completions, setCompletions] = useState<Completion[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [pending, setPending] = useState<Set<string>>(new Set());
  const pendingRef = useRef<Set<string>>(new Set());
  const [editing, setEditing] = useState<Task | "new" | null>(null);
  const [removing, setRemoving] = useState<Task | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  const load = useCallback(async () => {
    setLoadError(null);
    const [t, c] = await Promise.all([
      supabase.from("recurring_tasks").select("id,title,notes,recurrence,weekly_day,monthly_day,start_date,archived_at").order("created_at"),
      supabase.from("task_completions").select("id,task_id,cycle_key,completed_at").order("completed_at", { ascending: false }).limit(500),
    ]);
    if (t.error || c.error) {
      setLoadError("Couldn't load your tasks. Check your connection and try again.");
    } else {
      setTasks(t.data as Task[]);
      setCompletions(c.data as Completion[]);
    }
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const doneSet = useMemo(() => new Set(completions.map((c) => `${c.task_id}|${c.cycle_key}`)), [completions]);

  const current = useMemo(
    () => tasks
      .filter((t) => !t.archived_at && isActive(t, today))
      .map((t) => {
        const key = cycleStart(t, today);
        return { task: t, key, reset: nextReset(t, today), done: doneSet.has(`${t.id}|${key}`) };
      }),
    [tasks, today, doneSet],
  );
  const upcoming = useMemo(() => tasks.filter((t) => !t.archived_at && !isActive(t, today)), [tasks, today]);
  const shown = current.filter((r) => filter === "all" || r.task.recurrence === filter);
  const doneCount = shown.filter((r) => r.done).length;

  const toggle = async (task: Task, key: string, done: boolean) => {
    if (pendingRef.current.has(task.id)) return;
    pendingRef.current.add(task.id);
    setPending(new Set(pendingRef.current));
    try {
      if (!done) {
        const { error } = await supabase
          .from("task_completions")
          .upsert({ task_id: task.id, owner_id: OWNER_ID, cycle_key: key }, { onConflict: "task_id,cycle_key", ignoreDuplicates: true });
        if (error) throw error;
      } else {
        const { error } = await supabase.from("task_completions").delete().eq("task_id", task.id).eq("cycle_key", key);
        if (error) throw error;
      }
      const { data, error } = await supabase
        .from("task_completions").select("id,task_id,cycle_key,completed_at")
        .order("completed_at", { ascending: false }).limit(500);
      if (error) throw error;
      setCompletions(data as Completion[]);
    } catch {
      toast.error(done ? "Couldn't undo — nothing was changed. Try again." : "Couldn't save — the task is still not done. Try again.");
    } finally {
      pendingRef.current.delete(task.id);
      setPending(new Set(pendingRef.current));
    }
  };

  const confirmRemove = async () => {
    if (!removing) return;
    const { error } = await supabase.from("recurring_tasks").update({ archived_at: new Date().toISOString() }).eq("id", removing.id);
    if (error) toast.error("Couldn't remove the task. Try again.");
    else { toast.success("Task removed. Its history is kept."); await load(); }
    setRemoving(null);
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
              {shown.map(({ task, key, reset, done }) => {
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
                          onCheckedChange={() => toggle(task, key, done)}
                          className="h-5 w-5"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <label htmlFor={id} className={`block font-semibold break-words cursor-pointer ${done ? "line-through text-muted-foreground" : ""}`}>
                        {task.title}
                      </label>
                      {task.notes && <p className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap break-words">{task.notes}</p>}
                      <p className="text-xs text-muted-foreground mt-2">
                        <span className="text-primary font-heading tracking-wider uppercase mr-2">{task.recurrence}</span>
                        {describeRule(task)} · Resets {formatDate(reset)}, 12:00 AM
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
          onSaved={async () => { setEditing(null); await load(); }}
        />
      )}

      <AlertDialog open={!!removing} onOpenChange={(o) => !o && setRemoving(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove "{removing?.title}"?</AlertDialogTitle>
            <AlertDialogDescription>It will stop appearing from now on. Past completions stay in your history.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmRemove}>Remove</AlertDialogAction>
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
  const [startDate, setStartDate] = useState(task?.start_date ?? today);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (saving) return;
    const parsed = taskSchema.safeParse({ title, notes, recurrence, weekly_day: weeklyDay, monthly_day: monthlyDay, start_date: startDate });
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
    };
    setSaving(true);
    const { error } = task
      ? await supabase.from("recurring_tasks").update(row).eq("id", task.id)
      : await supabase.from("recurring_tasks").insert({ ...row, owner_id: OWNER_ID });
    setSaving(false);
    if (error) { toast.error("Couldn't save the task. Check your connection and try again."); return; }
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
