CREATE POLICY "Superadmin can delete pledges"
ON public.pledges
FOR DELETE
TO authenticated
USING ((auth.jwt() ->> 'email') = 'adamlikescoffee@gmail.com');