import { BookOpen, CalendarDays, ChevronLeft, ChevronRight, Link as LinkIcon, X } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import ScrollReveal from "@/components/ScrollReveal";
import { format } from "date-fns";
import { toast } from "sonner";

type JournalImage = { url: string; alt?: string };

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  published_at: string;
  images: JournalImage[];
}

const normalizeImages = (raw: unknown): JournalImage[] => {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((i: any) => (typeof i === "string" ? { url: i } : i?.url ? { url: i.url, alt: i.alt } : null))
    .filter(Boolean) as JournalImage[];
};

const JournalSection = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<{ images: JournalImage[]; index: number } | null>(null);

  useEffect(() => {
    const fetchEntries = async () => {
      const { data } = await supabase
        .from("wheelchair_journal")
        .select("*")
        .order("published_at", { ascending: false });
      setEntries(
        (data || []).map((e: any) => ({ ...e, images: normalizeImages(e.images) }))
      );
      setLoading(false);
    };
    fetchEntries();
  }, []);

  useEffect(() => {
    if (!loading && entries.length > 0 && window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [loading, entries]);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextImage = useCallback(
    () => setLightbox((lb) => (lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : lb)),
    []
  );
  const prevImage = useCallback(
    () => setLightbox((lb) => (lb ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length } : lb)),
    []
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, closeLightbox, nextImage, prevImage]);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) nextImage();
      else prevImage();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  if (loading) return null;
  if (entries.length === 0) return null;

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen size={18} className="text-primary" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Journal Updates</h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {entries.map((entry, idx) => {
              const slug = entry.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              const anchor = `journal-${slug}`;
              const copyLink = () => {
                const url = `${window.location.origin}/paying-it-forward#${anchor}`;
                navigator.clipboard.writeText(url);
                toast.success("Link copied to clipboard!");
              };
              const images = entry.images;
              const gridClass =
                images.length === 1
                  ? "grid grid-cols-1 max-w-sm gap-3"
                  : images.length === 2
                    ? "grid grid-cols-2 max-w-2xl gap-3"
                    : "grid grid-cols-2 sm:grid-cols-3 gap-3";
              return (
                <ScrollReveal key={entry.id} delay={idx * 80}>
                  <div id={anchor} className="md:pl-12 relative scroll-mt-24">
                    <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background hidden md:block" />

                    <div className="bg-secondary/50 border border-border/50 rounded-xl p-6">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <CalendarDays size={12} />
                        {format(new Date(entry.published_at), "MMMM d, yyyy · h:mm a")}
                        <button onClick={copyLink} className="ml-auto text-muted-foreground hover:text-primary transition-colors" title="Copy link to this entry">
                          <LinkIcon size={14} />
                        </button>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2">{entry.title}</h3>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {entry.content.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                          part.match(/^https?:\/\//) ? (
                            <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">{part}</a>
                          ) : part
                        )}
                      </p>
                      {images.length > 0 && (
                        <div className={`mt-4 ${gridClass}`}>
                          {images.map((img, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setLightbox({ images, index: i })}
                              className="group w-full h-48 overflow-hidden rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                              <img
                                src={img.url}
                                alt={img.alt || `${entry.title} photo ${i + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 touch-pan-y"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-secondary/80 hover:bg-secondary text-foreground flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {lightbox.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-secondary/80 hover:bg-secondary text-foreground flex items-center justify-center transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-secondary/80 hover:bg-secondary text-foreground flex items-center justify-center transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <img
            src={lightbox.images[lightbox.index].url}
            alt={lightbox.images[lightbox.index].alt || ""}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />

          {lightbox.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-secondary/80 text-xs font-mono text-foreground">
              {lightbox.index + 1} / {lightbox.images.length}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default JournalSection;
