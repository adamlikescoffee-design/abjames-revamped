import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { blogPosts, type ContentBlock } from "@/data/blogPosts";
import { blogPostsEs } from "@/data/blogPostsEs";
import { useBlogOverrides, refreshBlogOverrides } from "@/hooks/use-blog-overrides";
import {
  ArrowLeft, Loader2, Save, Upload, Trash2, ArrowUp, ArrowDown, Plus,
  Type, Heading as HeadingIcon, Quote, ListOrdered, Youtube, Image as ImageIcon,
} from "lucide-react";
import { toast } from "sonner";

type Lang = "en" | "es";

const blockLabel = (b: ContentBlock) => {
  if (typeof b === "string") return "Paragraph";
  return b.type[0].toUpperCase() + b.type.slice(1);
};

const emptyOf = (type: "paragraph" | "heading" | "quote" | "list" | "youtube"): ContentBlock => {
  if (type === "paragraph") return "";
  if (type === "heading") return { type: "heading", text: "" };
  if (type === "quote") return { type: "quote", text: "" };
  if (type === "list") return { type: "list", items: [""] };
  return { type: "youtube", id: "" };
};

interface BlockEditorProps {
  blocks: ContentBlock[];
  onChange: (blocks: ContentBlock[]) => void;
}

const BlockEditor = ({ blocks, onChange }: BlockEditorProps) => {
  const update = (idx: number, next: ContentBlock) => {
    const copy = [...blocks];
    copy[idx] = next;
    onChange(copy);
  };
  const remove = (idx: number) => onChange(blocks.filter((_, i) => i !== idx));
  const move = (idx: number, dir: -1 | 1) => {
    const j = idx + dir;
    if (j < 0 || j >= blocks.length) return;
    const copy = [...blocks];
    [copy[idx], copy[j]] = [copy[j], copy[idx]];
    onChange(copy);
  };
  const add = (type: Parameters<typeof emptyOf>[0]) => onChange([...blocks, emptyOf(type)]);

  return (
    <div className="space-y-3">
      {blocks.map((block, idx) => (
        <div key={idx} className="border border-border rounded-md bg-card/40 p-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-heading uppercase tracking-wider text-primary">{blockLabel(block)}</span>
            <span className="text-xs text-muted-foreground">#{idx + 1}</span>
            <div className="ml-auto flex gap-1">
              <button type="button" onClick={() => move(idx, -1)} className="p-1 hover:text-primary" title="Move up"><ArrowUp size={14} /></button>
              <button type="button" onClick={() => move(idx, 1)} className="p-1 hover:text-primary" title="Move down"><ArrowDown size={14} /></button>
              <button type="button" onClick={() => remove(idx)} className="p-1 hover:text-destructive" title="Delete"><Trash2 size={14} /></button>
            </div>
          </div>

          {typeof block === "string" && (
            <textarea
              value={block}
              onChange={(e) => update(idx, e.target.value)}
              rows={Math.min(12, Math.max(3, block.split("\n").length + 1))}
              className="w-full p-2 bg-background border border-border rounded text-sm"
              placeholder="Paragraph text…"
            />
          )}

          {typeof block !== "string" && block.type === "heading" && (
            <input
              value={block.text}
              onChange={(e) => update(idx, { ...block, text: e.target.value })}
              className="w-full p-2 bg-background border border-border rounded font-heading text-lg"
              placeholder="Section heading"
            />
          )}

          {typeof block !== "string" && block.type === "quote" && (
            <textarea
              value={block.text}
              onChange={(e) => update(idx, { ...block, text: e.target.value })}
              rows={3}
              className="w-full p-2 bg-background border border-border rounded italic"
              placeholder="Quote text"
            />
          )}

          {typeof block !== "string" && block.type === "youtube" && (
            <div>
              <input
                value={block.id}
                onChange={(e) => update(idx, { ...block, id: e.target.value.trim() })}
                className="w-full p-2 bg-background border border-border rounded text-sm font-mono"
                placeholder="YouTube video ID (e.g. dQw4w9WgXcQ)"
              />
              <p className="text-xs text-muted-foreground mt-1">Just the 11-character ID, not the full URL.</p>
            </div>
          )}

          {typeof block !== "string" && block.type === "list" && (
            <div className="space-y-2">
              {block.items.map((item, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    value={item}
                    onChange={(e) => {
                      const items = [...block.items];
                      items[i] = e.target.value;
                      update(idx, { ...block, items });
                    }}
                    className="flex-1 p-2 bg-background border border-border rounded text-sm"
                    placeholder={`List item ${i + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => update(idx, { ...block, items: block.items.filter((_, j) => j !== i) })}
                    className="p-2 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => update(idx, { ...block, items: [...block.items, ""] })}
                className="text-xs text-primary hover:underline inline-flex items-center gap-1"
              >
                <Plus size={12} /> Add item
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
        <span className="text-xs text-muted-foreground self-center mr-1">Add:</span>
        <button type="button" onClick={() => add("paragraph")} className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-card border border-border rounded hover:border-primary"><Type size={12} /> Paragraph</button>
        <button type="button" onClick={() => add("heading")} className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-card border border-border rounded hover:border-primary"><HeadingIcon size={12} /> Heading</button>
        <button type="button" onClick={() => add("quote")} className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-card border border-border rounded hover:border-primary"><Quote size={12} /> Quote</button>
        <button type="button" onClick={() => add("list")} className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-card border border-border rounded hover:border-primary"><ListOrdered size={12} /> List</button>
        <button type="button" onClick={() => add("youtube")} className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-card border border-border rounded hover:border-primary"><Youtube size={12} /> YouTube</button>
      </div>
    </div>
  );
};

const AdminBlogEdit = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const overrides = useBlogOverrides();

  const original = useMemo(() => blogPosts.find((p) => p.slug === slug), [slug]);
  const originalEs = blogPostsEs[slug];
  const override = overrides[slug];

  const [lang, setLang] = useState<Lang>("en");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [content, setContent] = useState<ContentBlock[]>([]);

  const [titleEs, setTitleEs] = useState("");
  const [excerptEs, setExcerptEs] = useState("");
  const [categoryEs, setCategoryEs] = useState("");
  const [imageAltEs, setImageAltEs] = useState("");
  const [contentEs, setContentEs] = useState<ContentBlock[]>([]);

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) navigate("/admin/login", { state: { from: `/admin/blog/${slug}` } });
  }, [authLoading, user, navigate, slug]);

  useEffect(() => {
    if (!original || initialized) return;
    setTitle(override?.title ?? original.title);
    setExcerpt(override?.excerpt ?? original.excerpt);
    setCategory(override?.category ?? original.category ?? "");
    setImageUrl(override?.image_url ?? original.image);
    setImageAlt(override?.image_alt ?? original.imageAlt ?? "");
    setContent(override?.content ?? original.content);

    setTitleEs(override?.title_es ?? originalEs?.title ?? "");
    setExcerptEs(override?.excerpt_es ?? originalEs?.excerpt ?? "");
    setCategoryEs(override?.category_es ?? originalEs?.category ?? "");
    setImageAltEs(override?.image_alt_es ?? originalEs?.imageAlt ?? "");
    setContentEs(override?.content_es ?? originalEs?.content ?? []);
    setInitialized(true);
  }, [original, originalEs, override, initialized]);

  const handleUpload = async (file: File) => {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop() || "jpg";
      const path = `blog/${slug}/${Date.now()}.${ext}`;
      const { error } = await supabase.storage.from("journal-images").upload(path, file, { contentType: file.type });
      if (error) throw error;
      const { data } = supabase.storage.from("journal-images").getPublicUrl(path);
      setImageUrl(data.publicUrl);
      toast.success("Image uploaded");
    } catch (e: any) {
      toast.error(e.message ?? "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    const payload = {
      slug,
      title: title === original?.title ? null : title,
      excerpt: excerpt === original?.excerpt ? null : excerpt,
      category: category === (original?.category ?? "") ? null : category,
      image_url: imageUrl === original?.image ? null : imageUrl,
      image_alt: imageAlt === (original?.imageAlt ?? "") ? null : imageAlt,
      content: JSON.stringify(content) === JSON.stringify(original?.content) ? null : content,
      title_es: titleEs === (originalEs?.title ?? "") ? null : titleEs || null,
      excerpt_es: excerptEs === (originalEs?.excerpt ?? "") ? null : excerptEs || null,
      category_es: categoryEs === (originalEs?.category ?? "") ? null : categoryEs || null,
      image_alt_es: imageAltEs === (originalEs?.imageAlt ?? "") ? null : imageAltEs || null,
      content_es: JSON.stringify(contentEs) === JSON.stringify(originalEs?.content ?? []) ? null : contentEs,
      updated_by: user.id,
    };
    const { error } = await supabase.from("blog_post_overrides").upsert(payload, { onConflict: "slug" });
    setSaving(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Changes saved");
    await refreshBlogOverrides();
  };

  if (authLoading || !original) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        {original === undefined && !authLoading ? (
          <div className="text-center">
            <p className="mb-4">Post not found: {slug}</p>
            <Link to="/admin/blog" className="text-primary hover:underline">Back to list</Link>
          </div>
        ) : <Loader2 className="animate-spin text-primary" />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <Link to="/admin/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6">
          <ArrowLeft size={16} /> Back to posts
        </Link>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-heading text-2xl md:text-3xl mb-1">Edit post</h1>
            <p className="text-xs text-muted-foreground font-mono">{slug}</p>
          </div>
          <div className="flex gap-2">
            <Link
              to={`/blog/${slug}`}
              target="_blank"
              className="px-4 py-2 border border-border rounded text-sm hover:border-primary"
            >
              Preview
            </Link>
            <button
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded text-sm font-heading disabled:opacity-50"
            >
              {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} Save
            </button>
          </div>
        </div>

        <div className="flex gap-1 mb-6 border-b border-border">
          {(["en", "es"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-4 py-2 text-sm font-heading tracking-wider uppercase border-b-2 ${lang === l ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
            >
              {l === "en" ? "English" : "Español"}
            </button>
          ))}
        </div>

        {/* Featured image applies to both languages */}
        <section className="mb-8">
          <h2 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">Featured image</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <img src={imageUrl} alt="" className="w-full sm:w-56 h-40 object-cover rounded border border-border" />
            <div className="flex-1 space-y-3">
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Image URL"
                className="w-full p-2 bg-card border border-border rounded text-sm font-mono"
              />
              <label className="inline-flex items-center gap-2 px-3 py-2 border border-border rounded cursor-pointer hover:border-primary text-sm">
                {uploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
                Upload new image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) handleUpload(f); e.target.value = ""; }}
                />
              </label>
              <button
                type="button"
                onClick={() => setImageUrl(original.image)}
                className="ml-2 text-xs text-muted-foreground hover:text-primary"
              >
                Reset to original
              </button>
            </div>
          </div>
        </section>

        {lang === "en" ? (
          <div className="space-y-8">
            <section>
              <label className="block text-xs font-heading uppercase tracking-wider text-primary mb-1">Title</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 bg-card border border-border rounded text-lg font-heading" />
            </section>
            <section>
              <label className="block text-xs font-heading uppercase tracking-wider text-primary mb-1">Excerpt</label>
              <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={3} className="w-full p-3 bg-card border border-border rounded text-sm" />
            </section>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-heading uppercase tracking-wider text-primary mb-1">Category</label>
                <input value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 bg-card border border-border rounded text-sm" />
              </div>
              <div>
                <label className="block text-xs font-heading uppercase tracking-wider text-primary mb-1">Image alt text</label>
                <input value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} className="w-full p-2 bg-card border border-border rounded text-sm" />
              </div>
            </div>
            <section>
              <label className="block text-xs font-heading uppercase tracking-wider text-primary mb-3">Content</label>
              <BlockEditor blocks={content} onChange={setContent} />
            </section>
          </div>
        ) : (
          <div className="space-y-8">
            <p className="text-xs text-muted-foreground">Leave any Spanish field blank to fall back to the English version.</p>
            <section>
              <label className="block text-xs font-heading uppercase tracking-wider text-primary mb-1">Título</label>
              <input value={titleEs} onChange={(e) => setTitleEs(e.target.value)} className="w-full p-3 bg-card border border-border rounded text-lg font-heading" />
            </section>
            <section>
              <label className="block text-xs font-heading uppercase tracking-wider text-primary mb-1">Extracto</label>
              <textarea value={excerptEs} onChange={(e) => setExcerptEs(e.target.value)} rows={3} className="w-full p-3 bg-card border border-border rounded text-sm" />
            </section>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-heading uppercase tracking-wider text-primary mb-1">Categoría</label>
                <input value={categoryEs} onChange={(e) => setCategoryEs(e.target.value)} className="w-full p-2 bg-card border border-border rounded text-sm" />
              </div>
              <div>
                <label className="block text-xs font-heading uppercase tracking-wider text-primary mb-1">Texto alt de imagen</label>
                <input value={imageAltEs} onChange={(e) => setImageAltEs(e.target.value)} className="w-full p-2 bg-card border border-border rounded text-sm" />
              </div>
            </div>
            <section>
              <label className="block text-xs font-heading uppercase tracking-wider text-primary mb-3">Contenido</label>
              <BlockEditor blocks={contentEs} onChange={setContentEs} />
              {contentEs.length === 0 && (
                <button
                  type="button"
                  onClick={() => setContentEs(content)}
                  className="mt-3 text-xs text-primary hover:underline"
                >
                  Copy English content as starting point
                </button>
              )}
            </section>
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-border flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded font-heading disabled:opacity-50"
          >
            {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />} Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogEdit;
