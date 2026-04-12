import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 pt-28 pb-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/" className="text-primary hover:underline font-heading text-sm tracking-wider">
            ← BACK HOME
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-heading text-sm tracking-wider mb-8"
          >
            <ArrowLeft size={16} />
            BACK TO BLOG
          </Link>

          <img
            src={post.image}
            alt={post.title}
            width={800}
            height={512}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="space-y-5 text-foreground/85 text-base md:text-lg leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">More Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {blogPosts
                .filter((p) => p.slug !== slug)
                .slice(0, 4)
                .map((related) => (
                  <Link
                    key={related.slug}
                    to={`/blog/${related.slug}`}
                    className="group flex gap-4 items-start p-3 rounded-lg hover:bg-card transition-colors"
                  >
                    <img
                      src={related.image}
                      alt={related.title}
                      loading="lazy"
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover rounded shrink-0"
                    />
                    <h4 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {related.title}
                    </h4>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
