import { useState, useCallback, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import galleryBg from "@/assets/gallery-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

import gallery01 from "@/assets/gallery-01.jpeg";
import gallery02 from "@/assets/gallery-02.jpeg";
import gallery03 from "@/assets/gallery-03.jpg";
import gallery04 from "@/assets/gallery-04.jpg";
import gallery05 from "@/assets/gallery-05.jpg";
import gallery06 from "@/assets/gallery-06.jpg";
import gallery07 from "@/assets/gallery-07.jpg";
import gallery08 from "@/assets/gallery-08.jpg";
import gallery09 from "@/assets/gallery-09.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.jpg";
import gallery21 from "@/assets/gallery-21.jpg";
import gallery22 from "@/assets/gallery-22.jpg";
import gallery23 from "@/assets/gallery-23.jpeg";
import gallery24 from "@/assets/gallery-24.jpg";
import galleryAdam1 from "@/assets/gallery-adam-1.webp";
import galleryAdam2 from "@/assets/gallery-adam-2.webp";
import galleryAdam3 from "@/assets/gallery-adam-3.webp";
import galleryAdam4 from "@/assets/gallery-adam-4.jpg";

const galleryImages = [
  { src: gallery01, alt: "Community event" },
  { src: gallery02, alt: "Ned and Sasha" },
  { src: gallery03, alt: "Community gathering" },
  { src: gallery04, alt: "Friends and community" },
  { src: gallery05, alt: "Cup From Above café" },
  { src: gallery06, alt: "Cup From Above team" },
  { src: gallery07, alt: "Cup From Above community" },
  { src: gallery08, alt: "Cup From Above moments" },
  { src: gallery09, alt: "Cup From Above volunteers" },
  { src: gallery10, alt: "Cup From Above setup" },
  { src: gallery11, alt: "Cup From Above service" },
  { src: gallery12, alt: "Community connection" },
  { src: gallery13, alt: "Birthday celebration" },
  { src: gallery14, alt: "Community work" },
  { src: gallery15, alt: "Volunteering" },
  { src: gallery16, alt: "Cup From Above team photo" },
  { src: gallery17, alt: "Community outreach" },
  { src: gallery18, alt: "Community event" },
  { src: gallery19, alt: "Community gathering" },
  { src: gallery20, alt: "Community moments" },
  { src: gallery21, alt: "Community café" },
  { src: gallery22, alt: "Community spirit" },
  { src: gallery23, alt: "Community celebration" },
  { src: gallery24, alt: "Adam James portrait" },
  { src: galleryAdam1, alt: "Adam in blue shirt" },
  { src: galleryAdam2, alt: "Adam in overcoat" },
  { src: galleryAdam3, alt: "Adam portrait" },
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev + 1) % galleryImages.length : null);
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

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-foreground/70 hover:text-foreground transition-colors z-10"><X size={32} /></button>
          <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-4 text-foreground/70 hover:text-foreground transition-colors z-10"><ChevronLeft size={40} /></button>
          <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-4 text-foreground/70 hover:text-foreground transition-colors z-10"><ChevronRight size={40} /></button>
          <img src={galleryImages[lightboxIndex].src} alt={galleryImages[lightboxIndex].alt} className="max-h-[90vh] max-w-[90vw] object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <section className="relative pt-28 pb-20 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${galleryBg})` }}>
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">{t.gallery.title}</h1>
            <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">{t.gallery.subtitle}</p>
          </ScrollReveal>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, idx) => (
              <ScrollReveal key={idx} animation="scale" delay={idx % 6 * 80}>
                <div className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer" onClick={() => setLightboxIndex(idx)}>
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full object-cover hover:scale-105 transition-transform duration-500" />
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
