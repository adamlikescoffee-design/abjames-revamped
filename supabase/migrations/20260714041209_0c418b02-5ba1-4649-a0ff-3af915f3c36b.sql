
CREATE TABLE public.blog_post_overrides (
  slug text PRIMARY KEY,
  title text,
  excerpt text,
  image_url text,
  image_alt text,
  category text,
  content jsonb,
  title_es text,
  excerpt_es text,
  image_alt_es text,
  category_es text,
  content_es jsonb,
  updated_at timestamptz NOT NULL DEFAULT now(),
  updated_by uuid REFERENCES auth.users(id) ON DELETE SET NULL
);

GRANT SELECT ON public.blog_post_overrides TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.blog_post_overrides TO authenticated;
GRANT ALL ON public.blog_post_overrides TO service_role;

ALTER TABLE public.blog_post_overrides ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Overrides are publicly readable"
  ON public.blog_post_overrides FOR SELECT
  USING (true);

CREATE POLICY "Admins can insert overrides"
  ON public.blog_post_overrides FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update overrides"
  ON public.blog_post_overrides FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete overrides"
  ON public.blog_post_overrides FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.set_blog_override_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER blog_post_overrides_updated_at
  BEFORE UPDATE ON public.blog_post_overrides
  FOR EACH ROW EXECUTE FUNCTION public.set_blog_override_updated_at();
