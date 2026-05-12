
-- 1. Add images column to journal entries
ALTER TABLE public.wheelchair_journal
ADD COLUMN IF NOT EXISTS images jsonb NOT NULL DEFAULT '[]'::jsonb;

-- 2. Create public storage bucket for journal photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('journal-images', 'journal-images', true)
ON CONFLICT (id) DO NOTHING;

-- 3. Storage policies
CREATE POLICY "Journal images are publicly readable"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'journal-images');

CREATE POLICY "Admins can upload journal images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'journal-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update journal images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'journal-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete journal images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'journal-images' AND public.has_role(auth.uid(), 'admin'));
