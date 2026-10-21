ALTER TABLE public.recurring_tasks ADD COLUMN target_count smallint NOT NULL DEFAULT 1 CHECK (target_count BETWEEN 1 AND 100);
ALTER TABLE public.task_completions ADD COLUMN slot smallint NOT NULL DEFAULT 1 CHECK (slot BETWEEN 1 AND 100);
ALTER TABLE public.task_completions ADD CONSTRAINT task_completions_task_cycle_slot_key UNIQUE (task_id, cycle_key, slot);
ALTER TABLE public.task_completions DROP CONSTRAINT task_completions_task_cycle_key;