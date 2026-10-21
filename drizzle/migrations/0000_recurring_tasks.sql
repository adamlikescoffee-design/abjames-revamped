CREATE TABLE public.recurring_tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid NOT NULL DEFAULT auth.uid(),
  title text NOT NULL CHECK (length(btrim(title)) BETWEEN 1 AND 200),
  notes text CHECK (notes IS NULL OR length(notes) <= 2000),
  recurrence text NOT NULL CHECK (recurrence IN ('daily','weekly','monthly')),
  weekly_day smallint CHECK (weekly_day BETWEEN 0 AND 6),
  monthly_day smallint CHECK (monthly_day BETWEEN 1 AND 31),
  start_date date NOT NULL,
  archived_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT recurring_tasks_id_owner_key UNIQUE (id, owner_id),
  CONSTRAINT recurring_tasks_recurrence_fields CHECK (
    (recurrence = 'daily' AND weekly_day IS NULL AND monthly_day IS NULL) OR
    (recurrence = 'weekly' AND weekly_day IS NOT NULL AND monthly_day IS NULL) OR
    (recurrence = 'monthly' AND monthly_day IS NOT NULL AND weekly_day IS NULL)
  )
);
CREATE INDEX recurring_tasks_owner_idx ON public.recurring_tasks(owner_id);

CREATE TABLE public.task_completions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id uuid NOT NULL,
  owner_id uuid NOT NULL DEFAULT auth.uid(),
  cycle_key date NOT NULL,
  completed_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT task_completions_task_owner_fkey FOREIGN KEY (task_id, owner_id)
    REFERENCES public.recurring_tasks(id, owner_id) ON DELETE CASCADE,
  CONSTRAINT task_completions_task_cycle_key UNIQUE (task_id, cycle_key)
);
CREATE INDEX task_completions_owner_idx ON public.task_completions(owner_id, completed_at DESC);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.recurring_tasks TO authenticated;
GRANT ALL ON public.recurring_tasks TO service_role;
GRANT SELECT, INSERT, DELETE ON public.task_completions TO authenticated;
GRANT ALL ON public.task_completions TO service_role;

ALTER TABLE public.recurring_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.task_completions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owner reads own tasks" ON public.recurring_tasks FOR SELECT TO authenticated
  USING (owner_id = auth.uid() AND auth.uid() = '7d7f6236-11d0-4f05-b6b6-e1db3791845b'::uuid);
CREATE POLICY "Owner inserts own tasks" ON public.recurring_tasks FOR INSERT TO authenticated
  WITH CHECK (owner_id = auth.uid() AND auth.uid() = '7d7f6236-11d0-4f05-b6b6-e1db3791845b'::uuid);
CREATE POLICY "Owner updates own tasks" ON public.recurring_tasks FOR UPDATE TO authenticated
  USING (owner_id = auth.uid() AND auth.uid() = '7d7f6236-11d0-4f05-b6b6-e1db3791845b'::uuid)
  WITH CHECK (owner_id = auth.uid() AND auth.uid() = '7d7f6236-11d0-4f05-b6b6-e1db3791845b'::uuid);
CREATE POLICY "Owner deletes own tasks" ON public.recurring_tasks FOR DELETE TO authenticated
  USING (owner_id = auth.uid() AND auth.uid() = '7d7f6236-11d0-4f05-b6b6-e1db3791845b'::uuid);

CREATE POLICY "Owner reads own completions" ON public.task_completions FOR SELECT TO authenticated
  USING (owner_id = auth.uid() AND auth.uid() = '7d7f6236-11d0-4f05-b6b6-e1db3791845b'::uuid);
CREATE POLICY "Owner inserts own completions" ON public.task_completions FOR INSERT TO authenticated
  WITH CHECK (owner_id = auth.uid() AND auth.uid() = '7d7f6236-11d0-4f05-b6b6-e1db3791845b'::uuid);
CREATE POLICY "Owner deletes own completions" ON public.task_completions FOR DELETE TO authenticated
  USING (owner_id = auth.uid() AND auth.uid() = '7d7f6236-11d0-4f05-b6b6-e1db3791845b'::uuid);

CREATE OR REPLACE FUNCTION public.set_recurring_task_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  NEW.updated_at = now();
  NEW.owner_id = OLD.owner_id;
  RETURN NEW;
END;
$$;
CREATE TRIGGER recurring_tasks_updated_at BEFORE UPDATE ON public.recurring_tasks
  FOR EACH ROW EXECUTE FUNCTION public.set_recurring_task_updated_at();