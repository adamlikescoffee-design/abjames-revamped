import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// ---------- mocks (test-only) ----------
const OWNER = "7d7f6236-11d0-4f05-b6b6-e1db3791845b";
type Row = Record<string, any>;
const db: { recurring_tasks: Row[]; task_completions: Row[] } = { recurring_tasks: [], task_completions: [] };
const calls: { table: string; op: string; args: any[] }[] = [];
const rpcCalls: any[] = [];
let failNext: { table: string; op: string; network?: boolean } | null = null;

function builder(table: keyof typeof db) {
  let op = "select";
  let payload: any = null;
  let opts: any = null;
  const filters: ((r: Row) => boolean)[] = [];
  let order: [string, boolean] | null = null;
  let limit: number | null = null;
  const b: any = {
    select: () => { calls.push({ table, op: "select", args: [] }); return b; },
    order: (c: string, o?: { ascending?: boolean }) => { order = [c, o?.ascending !== false]; return b; },
    limit: (n: number) => { limit = n; return b; },
    in: (c: string, v: any[]) => { filters.push((r) => v.includes(r[c])); return b; },
    eq: (c: string, v: any) => { filters.push((r) => r[c] === v); return b; },
    is: (c: string, v: any) => { filters.push((r) => (r[c] ?? null) === v); return b; },
    upsert: (p: any, o: any) => { op = "upsert"; payload = p; opts = o; calls.push({ table, op, args: [p, o] }); return b; },
    update: (p: any) => { op = "update"; payload = p; calls.push({ table, op, args: [p] }); return b; },
    delete: () => { op = "delete"; calls.push({ table, op, args: [] }); return b; },
    then: (res: any, rej: any) => Promise.resolve().then(exec).then(res, rej),
  };
  function exec() {
    if (failNext && failNext.table === table && failNext.op === op) {
      const f = failNext; failNext = null;
      return { data: null, error: f.network ? { message: "TypeError: Failed to fetch", code: "" } : { message: "denied", code: "42501" } };
    }
    const rows = db[table];
    if (op === "upsert") {
      const keys = opts.onConflict.split(",");
      if (!rows.some((r) => keys.every((k: string) => r[k] === payload[k]))) {
        rows.push({ id: crypto.randomUUID(), completed_at: new Date().toISOString(), archived_at: null, created_at: new Date().toISOString(), notes: null, ...payload });
      }
      return { data: null, error: null };
    }
    const match = rows.filter((r) => filters.every((f) => f(r)));
    if (op === "update") { match.forEach((r) => Object.assign(r, payload)); return { data: null, error: null }; }
    if (op === "delete") { db[table] = rows.filter((r) => !match.includes(r)); return { data: null, error: null }; }
    let out = [...match];
    if (order) { const [c, asc] = order; out.sort((a, z) => (a[c] < z[c] ? -1 : 1) * (asc ? 1 : -1)); }
    if (limit != null) out = out.slice(0, limit);
    return { data: out, error: null };
  }
  return b;
}

vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    from: (t: any) => builder(t),
    rpc: (...a: any[]) => { rpcCalls.push(a); return Promise.resolve({ data: a[1]._user_id === OWNER, error: null }); },
  },
}));

let authState: any = { user: null, loading: false };
vi.mock("@/contexts/AuthContext", () => ({ useAuth: () => authState }));

const toastError = vi.fn();
vi.mock("sonner", () => ({ toast: Object.assign(vi.fn(), { error: (...a: any[]) => toastError(...a), success: vi.fn() }) }));

import AdminTasks from "./AdminTasks";

class RO { observe() {} unobserve() {} disconnect() {} }
(globalThis as any).ResizeObserver = RO;

const renderPage = () =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={["/admin/tasks"]}>
        <Routes>
          <Route path="/admin/tasks" element={<AdminTasks />} />
          <Route path="/admin/login" element={<div>LOGIN PAGE</div>} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>,
  );

const task = (over: Row): Row => ({
  id: crypto.randomUUID(), owner_id: OWNER, title: "T", notes: null, recurrence: "daily", weekly_day: null,
  monthly_day: null, start_date: "2026-01-01", archived_at: null, created_at: "2026-01-01T00:00:00Z", ...over,
});

beforeEach(() => {
  db.recurring_tasks = []; db.task_completions = [];
  calls.length = 0; rpcCalls.length = 0; failNext = null; toastError.mockReset();
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date("2026-10-21T15:00:00Z")); // Oct 21 in Guayaquil
});
afterEach(() => vi.useRealTimers());

describe("access gate", () => {
  it("signed-out users are redirected and no task data is queried", async () => {
    authState = { user: null, loading: false };
    renderPage();
    expect(await screen.findByText("LOGIN PAGE")).toBeInTheDocument();
    expect(calls).toHaveLength(0);
  });

  it("non-owner sees access denied with no task queries or role check", async () => {
    authState = { user: { id: "00000000-0000-0000-0000-000000000001" }, loading: false };
    renderPage();
    expect(await screen.findByText("Access denied")).toBeInTheDocument();
    expect(calls).toHaveLength(0);
  });

  it("switching from owner to another user never shows the old dashboard", async () => {
    db.recurring_tasks.push(task({ title: "Secret task" }));
    authState = { user: { id: OWNER }, loading: false };
    const r = renderPage();
    expect(await screen.findByText("Secret task")).toBeInTheDocument();
    authState = { user: { id: "00000000-0000-0000-0000-000000000002" }, loading: false };
    r.rerender(
      <HelmetProvider><MemoryRouter initialEntries={["/admin/tasks"]}><Routes><Route path="/admin/tasks" element={<AdminTasks />} /></Routes></MemoryRouter></HelmetProvider>,
    );
    expect(screen.queryByText("Secret task")).not.toBeInTheDocument();
    expect(screen.getByText("Access denied")).toBeInTheDocument();
  });
});

describe("owner dashboard", () => {
  beforeEach(() => { authState = { user: { id: OWNER }, loading: false }; });

  it("adds, completes, undoes, edits and archives a task", async () => {
    renderPage();
    expect(await screen.findByText("No tasks yet")).toBeInTheDocument();

    // add — blank title rejected, then trimmed title saved
    fireEvent.click(screen.getAllByRole("button", { name: /add task/i })[0]);
    fireEvent.click(screen.getByRole("button", { name: "Save" }));
    expect(await screen.findByText("Title is required")).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Title"), { target: { value: "  Water plants  " } });
    fireEvent.click(screen.getByRole("button", { name: "Save" }));
    expect(await screen.findByText("Water plants")).toBeInTheDocument();
    const add = calls.find((c) => c.table === "recurring_tasks" && c.op === "upsert")!;
    expect(add.args[0]).toMatchObject({ title: "Water plants", owner_id: OWNER, recurrence: "daily", start_date: "2026-10-21" });

    // complete
    const box = () => screen.getByRole("checkbox");
    fireEvent.click(box());
    await waitFor(() => expect(box()).toHaveAttribute("data-state", "checked"));
    expect(db.task_completions).toHaveLength(1);
    expect(db.task_completions[0]).toMatchObject({ cycle_key: "2026-10-21", owner_id: OWNER });

    // undo
    fireEvent.click(box());
    await waitFor(() => expect(box()).toHaveAttribute("data-state", "unchecked"));
    expect(db.task_completions).toHaveLength(0);

    // edit
    fireEvent.click(screen.getByRole("button", { name: "Edit Water plants" }));
    fireEvent.change(screen.getByLabelText("Title"), { target: { value: "Water garden" } });
    fireEvent.click(screen.getByRole("button", { name: "Save" }));
    expect(await screen.findByText("Water garden")).toBeInTheDocument();
    expect(calls.some((c) => c.table === "recurring_tasks" && c.op === "update" && c.args[0].title === "Water garden")).toBe(true);

    // archive
    fireEvent.click(screen.getByRole("button", { name: "Remove Water garden" }));
    const dialog = await screen.findByRole("alertdialog");
    fireEvent.click(within(dialog).getByRole("button", { name: "Remove" }));
    await waitFor(() => expect(screen.queryByText("Water garden")).not.toBeInTheDocument());
    expect(db.recurring_tasks[0].archived_at).toBeTruthy();
    expect(db.recurring_tasks).toHaveLength(1); // row kept for history
  });

  it("double click creates only one completion", async () => {
    db.recurring_tasks.push(task({ title: "Stretch" }));
    renderPage();
    const box = await screen.findByRole("checkbox");
    fireEvent.click(box);
    fireEvent.click(box);
    await waitFor(() => expect(screen.getByRole("checkbox")).toHaveAttribute("data-state", "checked"));
    expect(calls.filter((c) => c.table === "task_completions" && c.op === "upsert")).toHaveLength(1);
    expect(db.task_completions).toHaveLength(1);
  });

  it("current-cycle monthly completion stays checked even with 600 newer history rows", async () => {
    const monthly = task({ title: "Pay rent", recurrence: "monthly", monthly_day: 1 });
    const daily = task({ title: "Daily thing", start_date: "2026-01-01" });
    db.recurring_tasks.push(monthly, daily);
    db.task_completions.push({ id: "m", task_id: monthly.id, owner_id: OWNER, cycle_key: "2026-10-01", completed_at: "2026-10-01T12:00:00Z" });
    for (let i = 0; i < 600; i++) {
      db.task_completions.push({ id: `d${i}`, task_id: daily.id, owner_id: OWNER, cycle_key: `old-${i}`, completed_at: `2026-10-${String(2 + (i % 19)).padStart(2, "0")}T12:00:${String(i % 60).padStart(2, "0")}Z` });
    }
    renderPage();
    const label = await screen.findByText("Pay rent");
    const row = label.closest("li")!;
    expect(within(row).getByRole("checkbox")).toHaveAttribute("data-state", "checked");
  });

  it("missed previous cycle shows a fresh unchecked box", async () => {
    const t = task({ title: "Journal" });
    db.recurring_tasks.push(t);
    db.task_completions.push({ id: "y", task_id: t.id, owner_id: OWNER, cycle_key: "2026-10-20", completed_at: "2026-10-20T12:00:00Z" });
    renderPage();
    await screen.findByText("Journal");
    expect(screen.getByRole("checkbox")).toHaveAttribute("data-state", "unchecked");
  });

  it("successful save with failed refresh stays checked and reports refresh failure, not a save failure", async () => {
    db.recurring_tasks.push(task({ title: "Read" }));
    renderPage();
    const box = await screen.findByRole("checkbox");
    failNext = null;
    // fail the reconciliation's task fetch
    const origPush = calls.push.bind(calls);
    let armed = false;
    calls.push = (c: any) => {
      const n = origPush(c);
      if (c.table === "task_completions" && c.op === "upsert") armed = true;
      else if (armed && c.table === "recurring_tasks" && c.op === "select") { failNext = { table: "recurring_tasks", op: "select", network: true }; armed = false; }
      return n;
    };
    fireEvent.click(box);
    await waitFor(() => expect(toastError).toHaveBeenCalled());
    expect(toastError.mock.calls[0][0]).toMatch(/Saved, but the list couldn't refresh/);
    expect(screen.getByRole("checkbox")).toHaveAttribute("data-state", "checked");
    calls.push = origPush;
  });

  it("network failure on save says status couldn't be confirmed and offers retry", async () => {
    db.recurring_tasks.push(task({ title: "Walk" }));
    renderPage();
    const box = await screen.findByRole("checkbox");
    failNext = { table: "task_completions", op: "upsert", network: true };
    fireEvent.click(box);
    await waitFor(() => expect(toastError).toHaveBeenCalled());
    expect(toastError.mock.calls[0][0]).toMatch(/Couldn't confirm/);
    expect(toastError.mock.calls[0][1].action.label).toBe("Retry");
  });

  it("rejected save says it was rejected and leaves the box unchecked", async () => {
    db.recurring_tasks.push(task({ title: "Walk" }));
    renderPage();
    const box = await screen.findByRole("checkbox");
    failNext = { table: "task_completions", op: "upsert" };
    fireEvent.click(box);
    await waitFor(() => expect(toastError).toHaveBeenCalled());
    expect(toastError.mock.calls[0][0]).toMatch(/rejected/);
    expect(screen.getByRole("checkbox")).toHaveAttribute("data-state", "unchecked");
  });

  it("future start date is not a current task", async () => {
    db.recurring_tasks.push(task({ title: "Later task", start_date: "2026-11-01" }));
    renderPage();
    expect(await screen.findByText("Starting later")).toBeInTheDocument();
    expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
  });
});
