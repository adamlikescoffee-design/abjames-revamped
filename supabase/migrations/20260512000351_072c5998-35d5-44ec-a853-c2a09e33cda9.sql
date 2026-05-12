
-- 1. Roles infrastructure
CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
$$;

CREATE POLICY "Admins can view roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
  ON public.user_roles FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 2. Fix pledges policies (sensitive PII)
DROP POLICY IF EXISTS "Authenticated users can read pledges" ON public.pledges;
DROP POLICY IF EXISTS "Superadmin can delete pledges" ON public.pledges;

CREATE POLICY "Admins can read pledges"
  ON public.pledges FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete pledges"
  ON public.pledges FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- 3. Fix wheelchair_journal policies (lock down writes to admins)
DROP POLICY IF EXISTS "Authenticated users can insert journal entries" ON public.wheelchair_journal;
DROP POLICY IF EXISTS "Authenticated users can update journal entries" ON public.wheelchair_journal;
DROP POLICY IF EXISTS "Authenticated users can delete journal entries" ON public.wheelchair_journal;

CREATE POLICY "Admins can insert journal entries"
  ON public.wheelchair_journal FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update journal entries"
  ON public.wheelchair_journal FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete journal entries"
  ON public.wheelchair_journal FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- 4. Seed admin role for the existing superadmin email
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role
FROM auth.users
WHERE email = 'adamlikescoffee@gmail.com'
ON CONFLICT DO NOTHING;
