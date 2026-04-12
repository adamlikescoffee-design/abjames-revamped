
CREATE TABLE public.wheelchair_journal (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.wheelchair_journal ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Journal entries are publicly readable"
ON public.wheelchair_journal
FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can insert journal entries"
ON public.wheelchair_journal
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update journal entries"
ON public.wheelchair_journal
FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete journal entries"
ON public.wheelchair_journal
FOR DELETE
TO authenticated
USING (true);
