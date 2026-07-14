import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Link2, Facebook, Linkedin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedBlogPost, useLocalizedBlogPosts } from "@/hooks/use-localized-blog";

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShare = ({ url, title }: SocialShareProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    { name: "X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, icon: <XIcon size={18} />, label: "Share on X" },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, icon: <Facebook size={18} />, label: "Share on Facebook" },
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, icon: <Linkedin size={18} />, label: "Share on LinkedIn" },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // fallback ignored
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm text-muted-foreground font-heading tracking-wider">Share:</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border bg-card/50 text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors"
        >
          {link.icon}
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        aria-label="Copy link"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border bg-card/50 text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors"
      >
        <Link2 size={18} />
      </button>
    </div>
  );
};

interface KavaCTAProps {
  lang: "en" | "es";
}

const KavaProductCTA = ({ lang }: KavaCTAProps) => {
  const copy = {
    en: {
      headline: "Try authentic noble kava from Vanuatu",
      body: "Pacific Kava supplies traditionally prepared noble kava root. If this article piqued your curiosity, their Vanuatu kava is a great place to start.",
      cta: "Shop Pacific Kava",
    },
    es: {
      headline: "Prueba kava noble auténtico de Vanuatu",
      body: "Pacific Kava suministra raíz de kava noble preparada tradicionalmente. Si este artículo despertó tu curiosidad, su kava de Vanuatu es un excelente punto de partida.",
      cta: "Comprar Pacific Kava",
    },
  }[lang];

  return (
    <a
      href="https://pacifickava.com.au/products/kava"
      target="_blank"
      rel="noopener noreferrer"
      className="group block my-10 p-6 md:p-8 rounded-xl bg-primary/5 border-2 border-primary/30 hover:border-primary/60 transition-colors"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex-1">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
            {copy.headline}
          </h2>
          <p className="text-foreground/80 text-base leading-relaxed max-w-2xl">{copy.body}</p>
        </div>
        <span className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm hover:bg-primary/90 transition-colors shrink-0">
          {copy.cta}
          <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </a>
  );
};

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

  const canonicalUrl = `https://www.abjames.com/blog/${post.slug}`;
  const absImage = post.image.startsWith("http") ? post.image : `https://www.abjames.com${post.image}`;
  const seoTitle = `${post.localizedTitle} | Adam James`;
  const seoDescription = post.localizedExcerpt;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.localizedTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={absImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.localizedTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={absImage} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.localizedTitle,
          description: seoDescription,
          image: absImage,
          datePublished: post.date,
          author: { "@type": "Person", name: "Adam James" },
          mainEntityOfPage: canonicalUrl,
        })}</script>
      </Helmet>
      <Header />


      <article className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 justify-center">
            <div className="w-full max-w-3xl">
              <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-heading text-sm tracking-wider mb-8">
                <ArrowLeft size={16} />
                {t.blogPage.backToBlog}
              </Link>

              <img
                src={post.image}
                alt={post.localizedImageAlt}
                width={1200}
                height={768}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                sizes="(min-width: 1024px) 768px, (min-width: 640px) 90vw, 100vw"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              />

              {(post.localizedCategory || post.date) && (
                <div className="flex items-center gap-3 mb-4">
                  {post.localizedCategory && <span className="text-xs font-heading font-semibold tracking-wider text-primary uppercase">{post.localizedCategory}</span>}
                  {post.date && <span className="text-xs text-muted-foreground">{post.date}</span>}
                </div>
              )}

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">{post.localizedTitle}</h1>

              <div className="mb-10">
                <SocialShare url={canonicalUrl} title={post.localizedTitle} />
              </div>

              {slug === "kava-ancient-tradition-switch-off" && <KavaProductCTA lang={lang} />}

              {(() => {
                const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
                const headings = post.localizedContent
                  .map((b) => (typeof b !== "string" && b.type === "heading" ? b.text : null))
                  .filter((t): t is string => !!t);
                if (headings.length < 2) return null;
                return (
                  <nav aria-label="Table of contents" className="mb-10 bg-card/50 border border-border rounded-lg p-6">
                    <h2 className="font-heading text-sm font-semibold text-primary uppercase tracking-wider mb-4">In this article</h2>
                    <ol className="space-y-2 list-decimal list-inside">
                      {headings.map((text) => (
                        <li key={text} className="text-foreground/85">
                          <a href={`#${slugify(text)}`} className="hover:text-primary transition-colors">{text}</a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                );
              })()}

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
                    const id = block.text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
                    return (
                      <div key={idx} className="flex items-center gap-4 pt-4 scroll-mt-28" id={id}>
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
                <SocialShare url={canonicalUrl} title={post.localizedTitle} />
              </div>

          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-8">{t.blogPage.moreArticles}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {allPosts.filter((p) => p.slug !== slug).slice(0, 4).map((related) => (
                <Link key={related.slug} to={`/blog/${related.slug}`} className="group flex flex-col bg-card/50 border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-colors">
                  <div className="aspect-video w-full overflow-hidden">
                    <img src={related.image} alt={related.localizedImageAlt} loading="lazy" width={400} height={225} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    {related.localizedCategory && (
                      <span className="text-xs font-heading font-semibold tracking-wider text-primary uppercase mb-2">{related.localizedCategory}</span>
                    )}
                    <h4 className="font-heading text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">{related.localizedTitle}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{related.localizedExcerpt}</p>
                  </div>
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
