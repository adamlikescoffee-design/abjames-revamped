// Pure recurrence logic for the private task dashboard.
// All dates are civil "YYYY-MM-DD" strings in TASK_TIMEZONE.
export const TASK_TIMEZONE = "America/Guayaquil";

export type Recurrence = "daily" | "weekly" | "monthly";

export interface RecurrenceRule {
  recurrence: Recurrence;
  weekly_day: number | null; // 0 = Sunday … 6 = Saturday
  monthly_day: number | null; // 1–31, clamped to month length
  start_date: string; // YYYY-MM-DD
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Local civil date in the given IANA timezone for an instant. */
export function localDate(now: Date, tz: string = TASK_TIMEZONE): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)!.value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}

function parse(d: string): [number, number, number] {
  const [y, m, day] = d.split("-").map(Number);
  return [y, m, day];
}
function fmt(y: number, m: number, d: number) {
  return `${y}-${pad(m)}-${pad(d)}`;
}
export function daysInMonth(y: number, m: number) {
  return new Date(Date.UTC(y, m, 0)).getUTCDate();
}
export function addDays(d: string, n: number): string {
  const [y, m, day] = parse(d);
  const dt = new Date(Date.UTC(y, m - 1, day + n));
  return fmt(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate());
}
export function weekday(d: string): number {
  const [y, m, day] = parse(d);
  return new Date(Date.UTC(y, m - 1, day)).getUTCDay();
}
function clampedMonthDate(y: number, m: number, day: number) {
  // m may overflow (0 or 13); normalise
  const dt = new Date(Date.UTC(y, m - 1, 1));
  const yy = dt.getUTCFullYear();
  const mm = dt.getUTCMonth() + 1;
  return fmt(yy, mm, Math.min(day, daysInMonth(yy, mm)));
}

/** Start date of the cycle containing `today` (the cycle key). */
export function cycleStart(rule: RecurrenceRule, today: string): string {
  if (rule.recurrence === "daily") return today;
  if (rule.recurrence === "weekly") {
    const wd = rule.weekly_day ?? 0;
    const diff = (weekday(today) - wd + 7) % 7;
    return addDays(today, -diff);
  }
  const md = rule.monthly_day ?? 1;
  const [y, m] = parse(today);
  const thisMonth = clampedMonthDate(y, m, md);
  return thisMonth <= today ? thisMonth : clampedMonthDate(y, m - 1, md);
}

/** Date (local midnight) the current cycle ends and a fresh one begins. */
export function nextReset(rule: RecurrenceRule, today: string): string {
  const start = cycleStart(rule, today);
  if (rule.recurrence === "daily") return addDays(start, 1);
  if (rule.recurrence === "weekly") return addDays(start, 7);
  const [y, m] = parse(start);
  return clampedMonthDate(y, m + 1, rule.monthly_day ?? 1);
}

/** A task is current once its start date has arrived. */
export function isActive(rule: RecurrenceRule, today: string): boolean {
  return rule.start_date <= today;
}

/** Milliseconds until the next local midnight in TASK_TIMEZONE. */
export function msUntilLocalMidnight(now: Date): number {
  const today = localDate(now);
  let lo = now.getTime();
  let hi = lo + 26 * 3600_000;
  // binary search for the first instant whose local date differs
  while (hi - lo > 1000) {
    const mid = Math.floor((lo + hi) / 2);
    if (localDate(new Date(mid)) === today) lo = mid;
    else hi = mid;
  }
  return hi - now.getTime();
}

export const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function formatDate(d: string): string {
  const [y, m, day] = parse(d);
  return new Date(Date.UTC(y, m - 1, day)).toLocaleDateString("en-US", {
    timeZone: "UTC",
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function describeRule(rule: RecurrenceRule): string {
  if (rule.recurrence === "daily") return "Every day";
  if (rule.recurrence === "weekly") return `Every ${WEEKDAYS[rule.weekly_day ?? 0]}`;
  const d = rule.monthly_day ?? 1;
  const suffix = d % 10 === 1 && d !== 11 ? "st" : d % 10 === 2 && d !== 12 ? "nd" : d % 10 === 3 && d !== 13 ? "rd" : "th";
  return `Monthly on the ${d}${suffix}${d > 28 ? " (or last day)" : ""}`;
}
