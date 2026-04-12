CREATE TABLE public.pledges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  amount numeric NOT NULL CHECK (amount >= 1),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.pledges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert pledges"
  ON public.pledges
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read pledges"
  ON public.pledges
  FOR SELECT
  TO authenticated
  USING (true);