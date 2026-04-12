import { Instagram } from "lucide-react";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";
import insta5 from "@/assets/insta-5.jpg";
import insta6 from "@/assets/insta-6.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const images = [insta1, insta2, insta3, insta4, insta5, insta6];

const InstagramFeed = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            Instagram
          </h2>
          <p className="text-muted-foreground text-center mb-12">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {images.map((img, idx) => (
            <ScrollReveal key={idx} animation="scale" delay={idx * 80}>
              <a
                href="https://www.instagram.com/adam_likes_coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden block"
              >
                <img
                  src={img}
                  alt={`Instagram post ${idx + 1}`}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram size={28} className="text-foreground" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-8">
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
