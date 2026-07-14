import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { blogPosts } from "@/data/blogPosts";
import { useBlogOverrides, refreshBlogOverrides } from "@/hooks/use-blog-overrides";
import { ArrowLeft, Loader2, Pencil, Search, RotateCcw } from "lucide-react";
import { toast } from "sonner";

const AdminBlog = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const overrides = useBlogOverrides();
  const [query, setQuery] = useState("");
  const [busy, setBusy] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/admin/login", { state: { from: "/admin/blog" } });
    }
  }, [authLoading, user, navigate]);

  const posts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts
      .filter((p) => !p.hidden)
      .filter((p) => !q || p.title.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q))
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [query]);

  const handleReset = async (slug: string) => {
    if (!confirm("Discard all admin edits for this post and restore the original?")) return;
    setBusy(slug);
    const { error } = await supabase.from("blog_post_overrides").delete().eq("slug", slug);
    setBusy(null);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Edits reverted");
    await refreshBlogOverrides();
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <Link to="/admin" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6">
          <ArrowLeft size={16} /> Back to dashboard
        </Link>

        <h1 className="font-heading text-3xl md:text-4xl mb-2">Edit blog posts</h1>
        <p className="text-muted-foreground mb-8">
          Modify titles, paragraphs, images and Spanish translations. Original source files stay untouched — overrides are stored in the database.
        </p>

        <div className="relative mb-6">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by title or slug…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-md focus:outline-none focus:border-primary"
          />
        </div>

        <div className="space-y-2">
          {posts.map((p) => {
            const edited = !!overrides[p.slug];
            return (
              <div key={p.slug} className="flex items-center gap-3 p-3 bg-card/50 border border-border rounded">
                <img src={overrides[p.slug]?.image_url || p.image} alt="" className="w-14 h-14 object-cover rounded shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-heading text-base truncate">{overrides[p.slug]?.title || p.title}</span>
                    {edited && <span className="text-[10px] px-2 py-0.5 rounded bg-primary/20 text-primary uppercase tracking-wider">Edited</span>}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">{p.slug}</div>
                </div>
                {edited && (
                  <button
                    onClick={() => handleReset(p.slug)}
                    disabled={busy === p.slug}
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive px-2 py-1"
                    title="Revert to original"
                  >
                    {busy === p.slug ? <Loader2 size={14} className="animate-spin" /> : <RotateCcw size={14} />}
                    Revert
                  </button>
                )}
                <Link
                  to={`/admin/blog/${p.slug}`}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded text-sm font-heading hover:opacity-90"
                >
                  <Pencil size={14} /> Edit
                </Link>
              </div>
            );
          })}
          {posts.length === 0 && (
            <p className="text-center text-muted-foreground py-10">No posts match your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBlog;
