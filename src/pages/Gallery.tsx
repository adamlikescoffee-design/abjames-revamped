import { useState, useCallback, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import blogCambodia from "@/assets/blog-cambodia.jpg";
import aboutMusic from "@/assets/about-music.jpg";
import aboutCoffee from "@/assets/about-coffee.jpg";
import heroImage from "@/assets/adam-james-hero.webp";
import galleryBg from "@/assets/gallery-bg.jpg";

const galleryImages = [
  { src: heroImage, alt: "Adam James" },
  { src: aboutMusic, alt: "Adam performing music" },
  { src: aboutCoffee, alt: "Coffee and community" },
  { src: blogCambodia, alt: "The Colours of Cambodia" },
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, goPrev, goNext]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-foreground/70 hover:text-foreground transition-colors z-10"
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 text-foreground/70 hover:text-foreground transition-colors z-10"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 text-foreground/70 hover:text-foreground transition-colors z-10"
          >
            <ChevronRight size={40} />
          </button>
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <section
        className="relative pt-28 pb-20 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${galleryBg})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">
              Photo Gallery
            </h1>
            <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
              A collection of moments from community work, travel, music, and life.
            </p>
          </ScrollReveal>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, idx) => (
              <ScrollReveal key={idx} animation="scale" delay={idx * 100}>
                <div
                  className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
