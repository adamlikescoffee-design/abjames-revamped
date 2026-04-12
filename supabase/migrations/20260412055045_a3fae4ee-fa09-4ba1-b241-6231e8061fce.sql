CREATE OR REPLACE FUNCTION public.get_pledge_stats()
RETURNS TABLE(pledge_count bigint, total_amount numeric)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    count(*)::bigint AS pledge_count,
    coalesce(sum(amount), 0)::numeric AS total_amount
  FROM public.pledges;
$$;

GRANT EXECUTE ON FUNCTION public.get_pledge_stats() TO anon, authenticated;