import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">
              The Blog
            </h1>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Thoughts on community, leadership, social enterprise, and life.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <ScrollReveal key={post.slug} animation="up" delay={idx % 3 * 100}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {post.category && (
                    <span className="text-xs font-heading font-semibold tracking-wider text-primary uppercase">
                      {post.category}
                    </span>
                  )}
                  <h2 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors mt-1 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  {post.date && (
                    <p className="text-muted-foreground/60 text-xs mt-2">{post.date}</p>
                  )}
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
