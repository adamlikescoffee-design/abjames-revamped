
CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM anon, authenticated;
GRANT USAGE ON SCHEMA private TO authenticated, anon;

-- Elevated logic lives outside the exposed API schema
CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;
REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO authenticated, service_role;

CREATE OR REPLACE FUNCTION private.get_pledge_stats()
RETURNS TABLE (pledge_count bigint, total_amount numeric)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT count(*)::bigint, COALESCE(sum(amount), 0)::numeric FROM public.pledges
$$;
REVOKE ALL ON FUNCTION private.get_pledge_stats() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION private.get_pledge_stats() TO anon, authenticated, service_role;

-- Public API wrappers are SECURITY INVOKER
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT private.has_role(_user_id, _role)
$$;
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

CREATE OR REPLACE FUNCTION public.get_pledge_stats()
RETURNS TABLE (pledge_count bigint, total_amount numeric)
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT * FROM private.get_pledge_stats()
$$;
GRANT EXECUTE ON FUNCTION public.get_pledge_stats() TO anon, authenticated, service_role;

-- Stop clients from listing every file in the public journal-images bucket
DROP POLICY IF EXISTS "Journal images are publicly readable" ON storage.objects;
CREATE POLICY "Admins can list journal images"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'journal-images' AND private.has_role(auth.uid(), 'admin'));
