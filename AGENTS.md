# Project rules

- Recurrence math for the private task dashboard lives in pure functions in `src/lib/recurrence.ts` (civil dates in one fixed IANA timezone) with tests beside it — keeps reset behaviour testable and independent of device timezone.
- Private owner-only data (recurring tasks) is enforced by RLS bound to the owner's auth uid plus row ownership, not by hidden routes — the frontend gate is UX only.
