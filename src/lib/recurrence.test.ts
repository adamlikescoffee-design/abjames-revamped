import { describe, it, expect } from "vitest";
import { cycleStart, nextReset, isActive, localDate, msUntilLocalMidnight, RecurrenceRule } from "./recurrence";

const daily: RecurrenceRule = { recurrence: "daily", weekly_day: null, monthly_day: null, start_date: "2026-01-01" };
const weeklyMon: RecurrenceRule = { recurrence: "weekly", weekly_day: 1, monthly_day: null, start_date: "2026-01-01" };
const monthly31: RecurrenceRule = { recurrence: "monthly", weekly_day: null, monthly_day: 31, start_date: "2026-01-01" };

describe("timezone (America/Guayaquil, UTC-5)", () => {
  it("is still the previous day at 03:00 UTC", () => {
    expect(localDate(new Date("2026-10-22T03:00:00Z"))).toBe("2026-10-21");
  });
  it("rolls over at 05:00 UTC, not UTC midnight", () => {
    expect(localDate(new Date("2026-10-22T04:59:59Z"))).toBe("2026-10-21");
    expect(localDate(new Date("2026-10-22T05:00:00Z"))).toBe("2026-10-22");
  });
  it("daily cycle key changes at Guayaquil midnight", () => {
    const before = cycleStart(daily, localDate(new Date("2026-10-22T04:59:00Z")));
    const after = cycleStart(daily, localDate(new Date("2026-10-22T05:01:00Z")));
    expect(before).toBe("2026-10-21");
    expect(after).toBe("2026-10-22");
  });
  it("finds next local midnight", () => {
    const ms = msUntilLocalMidnight(new Date("2026-10-22T04:00:00Z"));
    expect(Math.abs(ms - 3600_000)).toBeLessThanOrEqual(1000);
  });
});

describe("weekly", () => {
  it("Monday reset: Sunday belongs to previous Monday's cycle", () => {
    expect(cycleStart(weeklyMon, "2026-10-25")).toBe("2026-10-19"); // Sunday
    expect(cycleStart(weeklyMon, "2026-10-26")).toBe("2026-10-26"); // Monday
    expect(nextReset(weeklyMon, "2026-10-25")).toBe("2026-10-26");
  });
});

describe("monthly with clamping", () => {
  it("Jan 31 -> Feb 28 -> Mar 31", () => {
    expect(cycleStart(monthly31, "2026-01-31")).toBe("2026-01-31");
    expect(nextReset(monthly31, "2026-01-31")).toBe("2026-02-28");
    expect(cycleStart(monthly31, "2026-02-27")).toBe("2026-01-31");
    expect(cycleStart(monthly31, "2026-02-28")).toBe("2026-02-28");
    expect(nextReset(monthly31, "2026-02-28")).toBe("2026-03-31");
    expect(cycleStart(monthly31, "2026-03-30")).toBe("2026-02-28");
  });
  it("leap year clamps to Feb 29", () => {
    expect(nextReset(monthly31, "2028-01-31")).toBe("2028-02-29");
    expect(cycleStart(monthly31, "2028-02-29")).toBe("2028-02-29");
  });
  it("year boundary", () => {
    const m15: RecurrenceRule = { ...monthly31, monthly_day: 15 };
    expect(cycleStart(m15, "2027-01-10")).toBe("2026-12-15");
  });
});

describe("start dates and missed cycles", () => {
  it("future start is not active", () => {
    expect(isActive({ ...daily, start_date: "2026-10-23" }, "2026-10-22")).toBe(false);
    expect(isActive({ ...daily, start_date: "2026-10-22" }, "2026-10-22")).toBe(true);
  });
  it("missed cycles do not accumulate: only the current key exists", () => {
    // a task last done months ago still has just one current cycle key
    expect(cycleStart(weeklyMon, "2026-12-02")).toBe("2026-11-30");
  });
  it("reset is calendar-based, independent of completion time", () => {
    expect(nextReset(daily, "2026-10-22")).toBe("2026-10-23");
  });
});
