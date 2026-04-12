import { Instagram } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const InstagramFeed = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            Instagram
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            <a
              href="https://www.instagram.com/adam_likes_coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              @adam_likes_coffee
            </a>
          </p>
        </ScrollReveal>

        <div className="text-center">
          <a
            href="https://www.instagram.com/adam_likes_coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm px-8 py-3 hover:brightness-110 transition-all"
          >
            <Instagram size={18} />
            FOLLOW ON INSTAGRAM
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
