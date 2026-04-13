import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedBlogPosts } from "@/hooks/use-localized-blog";

const BlogSection = () => {
  const { t } = useLanguage();
  const posts = useLocalizedBlogPosts();

  return (
    <section id="blog" className="py-20 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
            {t.blogSection.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 6).map((post, idx) => (
            <ScrollReveal key={post.slug} animation="scale" delay={idx * 100}>
              <Link to={`/blog/${post.slug}`} className="group block bg-card rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all duration-300 h-full">
                <div className="overflow-hidden">
                  <img src={post.image} alt={post.localizedTitle} loading="lazy" width={800} height={512} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">{post.localizedTitle}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.localizedExcerpt}</p>
                  <span className="inline-block text-primary font-heading text-sm font-semibold tracking-wider">{t.blogSection.readMore}</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-10">
            <Link to="/blog" className="inline-block bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm px-8 py-3 rounded-lg hover:brightness-110 transition-all">
              View All Posts →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlogSection;
