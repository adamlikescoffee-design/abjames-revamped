import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedBlogPost, useLocalizedBlogPosts } from "@/hooks/use-localized-blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = useLocalizedBlogPost(slug);
  const allPosts = useLocalizedBlogPosts();
  const { t } = useLanguage();

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 pt-28 pb-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">{t.blogPage.postNotFound}</h1>
          <Link to="/" className="text-primary hover:underline font-heading text-sm tracking-wider">{t.blogPage.backHome}</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 justify-center">
            <div className="w-full max-w-3xl">
              <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-heading text-sm tracking-wider mb-8">
                <ArrowLeft size={16} />
                {t.blogPage.backToBlog}
              </Link>

              <img src={post.image} alt={post.localizedImageAlt} width={800} height={512} className="w-full h-64 md:h-96 object-cover rounded-lg mb-8" />

              {(post.localizedCategory || post.date) && (
                <div className="flex items-center gap-3 mb-4">
                  {post.localizedCategory && <span className="text-xs font-heading font-semibold tracking-wider text-primary uppercase">{post.localizedCategory}</span>}
                  {post.date && <span className="text-xs text-muted-foreground">{post.date}</span>}
                </div>
              )}

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8 leading-tight">{post.localizedTitle}</h1>

              <div className="space-y-6 text-foreground/85 text-base md:text-lg leading-relaxed">
                {post.localizedContent.map((block, idx) => {
                  if (typeof block === "string") {
                    return <p key={idx}>{block}</p>;
                  }
                  if (block.type === "youtube") {
                    return (
                      <div key={idx} className="aspect-video w-full rounded-lg overflow-hidden my-8">
                        <iframe
                          src={`https://www.youtube.com/embed/${block.id}`}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    );
                  }
                  if (block.type === "heading") {
                    return (
                      <div key={idx} className="flex items-center gap-4 pt-4">
                        <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase tracking-wide shrink-0">{block.text}</h2>
                        <div className="h-px w-full bg-primary/20" />
                      </div>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <blockquote key={idx} className="py-10 border-y border-border">
                        <p className="font-heading text-2xl md:text-3xl text-center text-foreground italic leading-tight">"{block.text}"</p>
                      </blockquote>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <div key={idx} className="bg-card/50 p-6 md:p-8 border border-border">
                        <ul className="space-y-4 text-foreground/85">
                          {block.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex gap-3">
                              <span className="text-primary mt-1.5">—</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              {post.localizedReferences.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-6">References</h3>
                  <ul className="space-y-3">
                    {post.localizedReferences.map((ref, idx) => (
                      <li key={idx} className="text-foreground/85 text-base">
                        <span className="font-semibold">{ref.source}:</span>{" "}
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          {ref.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">{t.blogPage.moreArticles}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {allPosts.filter((p) => p.slug !== slug).slice(0, 4).map((related) => (
                    <Link key={related.slug} to={`/blog/${related.slug}`} className="group flex gap-4 items-start p-3 rounded-lg hover:bg-card transition-colors">
                      <img src={related.image} alt={related.localizedImageAlt} loading="lazy" width={80} height={80} className="w-20 h-20 object-cover rounded shrink-0" />
                      <h4 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{related.localizedTitle}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <aside className="w-full lg:w-80 shrink-0">
              <div className="lg:sticky lg:top-28 bg-card/50 border border-border p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
                <h3 className="font-heading text-lg font-semibold text-primary uppercase tracking-wider mb-4">{t.blogPage.postsNavigation}</h3>
                <ul className="space-y-3">
                  {allPosts.map((related) => {
                    const isCurrent = related.slug === slug;
                    return (
                      <li key={related.slug}>
                        {isCurrent ? (
                          <div className="flex gap-3 p-2 rounded bg-primary/10 border-l-2 border-primary">
                            <img src={related.image} alt={related.localizedImageAlt} loading="lazy" width={48} height={48} className="w-12 h-12 object-cover rounded shrink-0" />
                            <span className="font-heading text-sm font-semibold text-foreground leading-snug">{related.localizedTitle}</span>
                          </div>
                        ) : (
                          <Link to={`/blog/${related.slug}`} className="group flex gap-3 p-2 rounded hover:bg-card transition-colors">
                            <img src={related.image} alt={related.localizedImageAlt} loading="lazy" width={48} height={48} className="w-12 h-12 object-cover rounded shrink-0" />
                            <span className="font-heading text-sm text-foreground/80 group-hover:text-primary transition-colors leading-snug">{related.localizedTitle}</span>
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
