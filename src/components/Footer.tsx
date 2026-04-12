import { Facebook, Instagram, Linkedin, Flame, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import footerBg from "@/assets/footer-bg.jpg";
import { blogPosts } from "@/data/blogPosts";

const Footer = () => {
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <footer>
      {/* Main Footer */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: About */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                ADAM JAMES.
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Welcome to my website. If you have any questions please{" "}
                <Link
                  to="/contact"
                  className="text-primary hover:brightness-110 transition-all"
                >
                  get in touch
                </Link>
                !
              </p>
            </div>

            {/* Column 2: Blog */}
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                BLOG
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.slug}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-foreground/80 text-sm font-heading font-semibold hover:text-primary transition-colors leading-tight block"
                    >
                      {post.title}
                    </Link>
                    {post.date && (
                      <span className="text-foreground/40 text-xs">
                        {post.date}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Menu */}
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                MENU
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-foreground/70 text-sm hover:text-primary transition-colors font-heading"
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.libertydigital.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 text-sm hover:text-primary transition-colors font-heading"
                  >
                    DIGITAL MARKETING
                  </a>
                </li>
                <li>
                  <Link
                    to="/media"
                    className="text-foreground/70 text-sm hover:text-primary transition-colors font-heading"
                  >
                    MEDIA
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="text-foreground/70 text-sm hover:text-primary transition-colors font-heading"
                  >
                    PHOTOS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-foreground/70 text-sm hover:text-primary transition-colors font-heading"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Social */}
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                FOLLOW
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/adam.james"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-foreground/20 transition-all"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/adam_likes_coffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-foreground/20 transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/adam-likes-coffee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-foreground/20 transition-all"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.firesidebusinessadvice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-foreground/20 transition-all"
                >
                  <Flame size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-background border-t border-border">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-foreground/40 text-xs font-heading tracking-wider">
            © ALL RIGHTS RESERVED.
          </p>
          <p className="text-foreground/40 text-xs font-heading tracking-wider flex items-center gap-1">
            MADE WITH{" "}
            <Heart size={12} className="text-red-500 fill-red-500" /> BY{" "}
            <a
              href="https://www.libertydigital.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LIBERTY DIGITAL
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
