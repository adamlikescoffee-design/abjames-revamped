import blogTrees from "@/assets/blog-trees.jpg";
import blogCommunity from "@/assets/blog-community.jpg";
import blogCafe from "@/assets/blog-cafe.jpg";

const blogPosts = [
  {
    title: "Tree Removal Noosa: What Homeowners on the Sunshine Coast Need to Know",
    excerpt:
      "If you're searching for Tree Removal Noosa or Tree Lopping Noosa, chances are you're dealing with a tree that's become unsafe, overgrown, or storm-damaged...",
    image: blogTrees,
    link: "#",
  },
  {
    title: "Daily Grind for Ashley — A Community United in Kindness",
    excerpt:
      "A heartfelt story about a remarkable five-year-old named Ashley Kong, whose journey touched the hearts of many in Brisbane's northside...",
    image: blogCommunity,
    link: "#",
  },
  {
    title: "A Little Help From Above: How a Brisbane Café is Changing Lives",
    excerpt:
      "Through his social enterprise, Cup from Above, Adam uses coffee as a catalyst for community transformation...",
    image: blogCafe,
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
          My Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <a
              key={idx}
              href={post.link}
              className="group block bg-card rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-block text-primary font-heading text-sm font-semibold tracking-wider">
                  READ MORE »
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
