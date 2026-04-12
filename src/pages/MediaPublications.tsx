import { useState, useCallback, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

import { X, ChevronLeft, ChevronRight } from "lucide-react";

import mediaCourierMail from "@/assets/media-courier-mail.jpg";
import mediaChronicle from "@/assets/media-chronicle.jpg";
import mediaChronicleArticle from "@/assets/media-chronicle-article.jpg";
import mediaNorthside from "@/assets/media-northside.jpg";
import mediaSilentWriter from "@/assets/media-silent-writer.png";
import mediaLiberty from "@/assets/media-liberty.png";
import mediaFrontPage from "@/assets/media-front-page.png";
import mediaScreenshot from "@/assets/media-screenshot.png";
import mediaPolice1 from "@/assets/media-police1.jpg";
import mediaPolice2 from "@/assets/media-police2.jpg";
import mediaCmA from "@/assets/media-cm-a.jpg";
import mediaCmB from "@/assets/media-cm-b.jpg";
import mediaCommunity1 from "@/assets/media-community1.jpg";
import mediaCommunity2 from "@/assets/media-community2.jpg";
import mediaCfaRn from "@/assets/media-cfa-rn.jpg";

const publications = [
  {
    title: "Courier Mail Feature — Cup From Above",
    description:
      "A feature article in the Courier Mail about Adam's social enterprise Cup From Above, highlighting the café's mission to support disadvantaged and disabled community members through hospitality training.",
    source: "Courier Mail",
    images: [mediaCmA, mediaCmB],
  },
  {
    title: "Northside Chronicle — Daily Grind for Ashley",
    description:
      "Coverage of the community fundraising initiative launched through Cup From Above to support five-year-old Ashley Kong with her speech and development therapy.",
    source: "Northside Chronicle",
    images: [mediaNorthside],
  },
  {
    title: "A Little Help From Above — Brisbane Café Changing Lives",
    description:
      "An article showcasing how Cup from Above uses coffee as a catalyst for community transformation, providing training opportunities for disadvantaged locals.",
    source: "Local Media",
    images: [mediaCourierMail, mediaChronicle, mediaChronicleArticle],
  },
  {
    title: "Silent Writer Finds The Keys to Success",
    description:
      "The inspiring story of Glen Sheppard, a 33-year-old author and poet born with Down syndrome, featured as part of the community work connected to Cup From Above.",
    source: "Media Feature",
    images: [mediaSilentWriter, mediaFrontPage],
  },
  {
    title: "Liberty Enterprises — Social Enterprise Creating Opportunity",
    description:
      "Coverage of Liberty Enterprises, a social enterprise dedicated to creating real opportunities for women who have experienced domestic violence, homelessness, or other hardships.",
    source: "Courier Mail",
    images: [mediaLiberty],
  },
  {
    title: "Local Police Espresso Initiative",
    description:
      "Coverage of the local police-café initiative that brought officers and community members together over coffee, breaking down barriers and fostering genuine human connection.",
    source: "Local Media",
    images: [mediaPolice1, mediaPolice2, mediaCommunity1, mediaCommunity2, mediaCfaRn],
  },
];

const MediaPublications = () => {
  // Collect all images flat for lightbox navigation
  const allImages = publications.flatMap((pub) =>
    pub.images.map((img, i) => ({ src: img, alt: `${pub.title} - image ${i + 1}` }))
  );

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (src: string) => {
    const idx = allImages.findIndex((img) => img.src === src);
    setLightboxIndex(idx >= 0 ? idx : null);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + allImages.length) % allImages.length : null
    );
  }, [allImages.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % allImages.length : null
    );
  }, [allImages.length]);

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
          {allImages.length > 1 && (
            <>
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
            </>
          )}
          <img
            src={allImages[lightboxIndex].src}
            alt={allImages[lightboxIndex].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <section className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">
              Media Publications
            </h1>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Adam is featured regularly in the media for the work he and his team do in the community. This is a digital scrapbook with some of the highlights over the years.
            </p>
          </ScrollReveal>

          <div className="space-y-10">
            {publications.map((pub, idx) => (
              <ScrollReveal key={idx} animation="up" delay={idx * 80}>
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-colors">
                  {/* Images */}
                  <div className={`grid ${pub.images.length === 1 ? 'grid-cols-1' : pub.images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'} gap-1`}>
                    {pub.images.map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="overflow-hidden cursor-pointer"
                        onClick={() => openLightbox(img)}
                      >
                        <img
                          src={img}
                          alt={`${pub.title} - image ${imgIdx + 1}`}
                          loading="lazy"
                          className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Text content */}
                  <div className="p-6">
                    <span className="text-xs font-heading font-semibold tracking-wider text-primary uppercase">
                      {pub.source}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-foreground mt-1 mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pub.description}
                    </p>
                  </div>
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

export default MediaPublications;
