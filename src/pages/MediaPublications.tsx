import { useState, useCallback, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { X, ChevronLeft, ChevronRight, ExternalLink, Radio, Newspaper, Tv, Mic } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import galleryBg from "@/assets/gallery-bg.jpg";

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

interface Publication {
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  source: string;
  sourceEs: string;
  year?: string;
  type: "print" | "radio" | "tv" | "online";
  images: string[];
  audioUrl?: string;
  externalUrl?: string;
  featured?: boolean;
}

const publications: Publication[] = [
  {
    title: "Courier Mail Feature — Cup From Above",
    titleEs: "Artículo en Courier Mail — Cup From Above",
    description: "A feature article in the Courier Mail about Adam's social enterprise Cup From Above, highlighting the café's mission to support disadvantaged and disabled community members through hospitality training.",
    descriptionEs: "Un artículo destacado en el Courier Mail sobre la empresa social de Adam, Cup From Above, resaltando la misión del café de apoyar a miembros de la comunidad desfavorecidos y con discapacidades a través de capacitación en hospitalidad.",
    source: "Courier Mail",
    sourceEs: "Courier Mail",
    year: "2013",
    type: "print",
    images: [mediaCmA, mediaCmB],
    featured: true,
  },
  {
    title: "Northside Chronicle — Daily Grind for Ashley",
    titleEs: "Northside Chronicle — El Esfuerzo Diario por Ashley",
    description: "Coverage of the community fundraising initiative launched through Cup From Above to support five-year-old Ashley Kong with her speech and development therapy.",
    descriptionEs: "Cobertura de la iniciativa comunitaria de recaudación de fondos lanzada a través de Cup From Above para apoyar a Ashley Kong, de cinco años, con su terapia del habla y desarrollo.",
    source: "Northside Chronicle",
    sourceEs: "Northside Chronicle",
    year: "2014",
    type: "print",
    images: [mediaNorthside],
  },
  {
    title: "A Little Help From Above — Brisbane Café Changing Lives",
    titleEs: "Una Pequeña Ayuda Desde Arriba — Café de Brisbane Cambiando Vidas",
    description: "An article showcasing how Cup from Above uses coffee as a catalyst for community transformation, providing training opportunities for disadvantaged locals.",
    descriptionEs: "Un artículo que muestra cómo Cup From Above utiliza el café como catalizador para la transformación comunitaria, brindando oportunidades de capacitación a personas desfavorecidas.",
    source: "Local Media",
    sourceEs: "Medios Locales",
    year: "2013",
    type: "print",
    images: [mediaCourierMail, mediaChronicle, mediaChronicleArticle],
    featured: true,
  },
  {
    title: "Silent Writer Finds The Keys to Success",
    titleEs: "El Escritor Silencioso Encuentra las Claves del Éxito",
    description: "The inspiring story of Glen Sheppard, a 33-year-old author and poet born with Down syndrome, featured as part of the community work connected to Cup From Above.",
    descriptionEs: "La inspiradora historia de Glen Sheppard, un autor y poeta de 33 años nacido con síndrome de Down, presentada como parte del trabajo comunitario conectado con Cup From Above.",
    source: "Media Feature",
    sourceEs: "Artículo en Medios",
    year: "2014",
    type: "print",
    images: [mediaSilentWriter, mediaScreenshot, mediaFrontPage],
  },
  {
    title: "Liberty Enterprises — Social Enterprise Creating Opportunity",
    titleEs: "Liberty Enterprises — Empresa Social Creando Oportunidades",
    description: "Coverage of Liberty Enterprises, a social enterprise dedicated to creating real opportunities for women who have experienced domestic violence, homelessness, or other hardships.",
    descriptionEs: "Cobertura de Liberty Enterprises, una empresa social dedicada a crear oportunidades reales para mujeres que han experimentado violencia doméstica, falta de vivienda u otras dificultades.",
    source: "Courier Mail",
    sourceEs: "Courier Mail",
    year: "2015",
    type: "print",
    images: [mediaLiberty],
  },
  {
    title: "Cup From Above on 96five FM",
    titleEs: "Cup From Above en 96five FM",
    description: "Adam James from Cup From Above discussing the current situation in Aspley and what is being done to solve the crisis at hand.",
    descriptionEs: "Adam James de Cup From Above discutiendo la situación actual en Aspley y lo que se está haciendo para resolver la crisis.",
    source: "96five FM",
    sourceEs: "96five FM",
    year: "2014",
    type: "radio",
    images: [],
    audioUrl: "https://soundcloud.com/96five/adam-james-from-a-cup-from-above",
  },
  {
    title: "Local Police Espresso Initiative",
    titleEs: "Iniciativa Policial de Café Local",
    description: "Coverage of the local police-café initiative that brought officers and community members together over coffee, breaking down barriers and fostering genuine human connection.",
    descriptionEs: "Cobertura de la iniciativa policial de café que reunió a oficiales y miembros de la comunidad alrededor de un café, rompiendo barreras y fomentando conexiones humanas genuinas.",
    source: "Local Media",
    sourceEs: "Medios Locales",
    year: "2016",
    type: "print",
    images: [mediaPolice1, mediaPolice2, mediaCommunity1, mediaCommunity2, mediaCfaRn],
    featured: true,
  },
  {
    title: "Cup From Above on ABC Radio National",
    titleEs: "Cup From Above en ABC Radio Nacional",
    description: "Adam was interviewed on ABC Radio National's 'First Bite' program, discussing the suspended coffee movement in Australia and how Cup From Above pioneered the concept locally — using caffeine and kindness to build community.",
    descriptionEs: "Adam fue entrevistado en el programa 'First Bite' de ABC Radio Nacional, discutiendo el movimiento del café suspendido en Australia y cómo Cup From Above fue pionero del concepto localmente, usando cafeína y bondad para construir comunidad.",
    source: "ABC Radio National",
    sourceEs: "ABC Radio Nacional",
    year: "2013",
    type: "radio",
    images: [mediaCfaRn],
  },
  {
    title: "Nominated for Australian of the Year",
    titleEs: "Nominado al Australiano del Año",
    description: "Adam was nominated for the Australian of the Year award in recognition of his years of community work through Cup From Above and other social enterprises — a humbling acknowledgment of the collective effort behind the mission.",
    descriptionEs: "Adam fue nominado al premio Australiano del Año en reconocimiento a sus años de trabajo comunitario a través de Cup From Above y otras empresas sociales — un humilde reconocimiento al esfuerzo colectivo detrás de la misión.",
    source: "National Recognition",
    sourceEs: "Reconocimiento Nacional",
    year: "2015",
    type: "online",
    images: [],
    featured: true,
  },
  {
    title: "Postcard Radio Interview",
    titleEs: "Entrevista en Postcard Radio",
    description: "Adam sat down with Paul Wetzig of Postcard Radio for an in-depth interview about his journey — from community work and social enterprise to the personal growth and lessons learned along the way.",
    descriptionEs: "Adam se sentó con Paul Wetzig de Postcard Radio para una entrevista en profundidad sobre su trayectoria — desde el trabajo comunitario y la empresa social hasta el crecimiento personal y las lecciones aprendidas en el camino.",
    source: "Postcard Radio",
    sourceEs: "Postcard Radio",
    year: "2016",
    type: "radio",
    images: [],
  },
];

const typeIcon = (type: string) => {
  switch (type) {
    case "radio": return <Mic size={14} />;
    case "tv": return <Tv size={14} />;
    case "online": return <ExternalLink size={14} />;
    default: return <Newspaper size={14} />;
  }
};

const MediaPublications = () => {
  const { lang, t } = useLanguage();
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
    setLightboxIndex((prev) => prev !== null ? (prev - 1 + allImages.length) % allImages.length : null);
  }, [allImages.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev + 1) % allImages.length : null);
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

  const getTitle = (pub: Publication) => lang === "es" ? pub.titleEs : pub.title;
  const getDesc = (pub: Publication) => lang === "es" ? pub.descriptionEs : pub.description;
  const getSource = (pub: Publication) => lang === "es" ? pub.sourceEs : pub.source;

  // Separate featured from regular
  const featuredPubs = publications.filter((p) => p.featured);
  const regularPubs = publications.filter((p) => !p.featured);

  // Stats
  const stats = [
    { label: lang === "es" ? "Artículos Publicados" : "Published Features", value: publications.filter((p) => p.type === "print").length.toString() },
    { label: lang === "es" ? "Entrevistas de Radio" : "Radio Interviews", value: publications.filter((p) => p.type === "radio").length.toString() },
    { label: lang === "es" ? "Años de Cobertura" : "Years of Coverage", value: "10+" },
    { label: lang === "es" ? "Reconocimientos" : "Recognitions", value: publications.filter((p) => p.type === "online").length.toString() },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-foreground/70 hover:text-foreground transition-colors z-10"><X size={32} /></button>
          {allImages.length > 1 && (
            <>
              <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-4 text-foreground/70 hover:text-foreground transition-colors z-10"><ChevronLeft size={40} /></button>
              <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-4 text-foreground/70 hover:text-foreground transition-colors z-10"><ChevronRight size={40} /></button>
            </>
          )}
          <img src={allImages[lightboxIndex].src} alt={allImages[lightboxIndex].alt} className="max-h-[90vh] max-w-[90vw] object-contain" onClick={(e) => e.stopPropagation()} />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/50 text-sm font-heading tracking-wider">
            {lightboxIndex + 1} / {allImages.length}
          </div>
        </div>
      )}

      {/* Hero Section with background */}
      <section className="relative pt-28 pb-16">
        <div className="fixed inset-0 -z-10">
          <img src={galleryBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-2 text-primary font-heading text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                <Radio size={14} />
                {lang === "es" ? "Prensa y Medios" : "Press & Media"}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-4">{t.mediaPage.title}</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">{t.mediaPage.subtitle}</p>
            </div>
          </ScrollReveal>

          {/* Stats Row */}
          <ScrollReveal animation="up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-16">
              {stats.map((stat, i) => (
                <div key={i} className="text-center py-6 px-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <span className="block text-3xl md:text-4xl font-heading font-bold text-primary mb-1">{stat.value}</span>
                  <span className="text-muted-foreground text-xs font-heading tracking-wider uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Featured Section */}
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              {lang === "es" ? "Artículos Destacados" : "Featured Coverage"}
            </h2>
          </ScrollReveal>

          <div className="space-y-8 mb-16">
            {featuredPubs.map((pub, idx) => (
              <ScrollReveal key={idx} animation={idx % 2 === 0 ? "left" : "right"} delay={idx * 100}>
                <div className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                  <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Image Grid */}
                    {pub.images.length > 0 && (
                      <div className="lg:w-3/5 shrink-0">
                        <div className={`grid ${pub.images.length === 1 ? 'grid-cols-1' : pub.images.length === 2 ? 'grid-cols-2' : 'grid-cols-2'} gap-0.5 h-full`}>
                          {pub.images.slice(0, 4).map((img, imgIdx) => (
                            <div
                              key={imgIdx}
                              className={`overflow-hidden cursor-pointer ${
                                pub.images.length === 1 ? '' :
                                pub.images.length === 3 && imgIdx === 0 ? 'col-span-2' :
                                pub.images.length >= 5 && imgIdx === 0 ? 'col-span-2' : ''
                              }`}
                              onClick={() => openLightbox(img)}
                            >
                              <img
                                src={img}
                                alt={`${getTitle(pub)} - ${imgIdx + 1}`}
                                loading="lazy"
                                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                            </div>
                          ))}
                          {pub.images.length > 4 && (
                            <div
                              className="relative overflow-hidden cursor-pointer"
                              onClick={() => openLightbox(pub.images[4])}
                            >
                              <img src={pub.images[4]} alt="" loading="lazy" className="w-full h-48 md:h-64 object-cover brightness-50" />
                              <span className="absolute inset-0 flex items-center justify-center text-foreground font-heading font-bold text-lg">+{pub.images.length - 4}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-primary font-heading text-xs font-semibold tracking-wider uppercase">
                          {typeIcon(pub.type)}
                          {getSource(pub)}
                        </span>
                        {pub.year && <span className="text-muted-foreground/50 text-xs font-heading">· {pub.year}</span>}
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">{getTitle(pub)}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{getDesc(pub)}</p>
                      {pub.audioUrl && (
                        <a href={pub.audioUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-primary hover:brightness-110 font-heading text-sm font-semibold tracking-wider transition-all">
                          <Mic size={14} />
                          {t.mediaPage.listenOnSoundcloud}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* All Coverage */}
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              {lang === "es" ? "Toda la Cobertura" : "All Coverage"}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {regularPubs.map((pub, idx) => (
              <ScrollReveal key={idx} animation="up" delay={idx * 80}>
                <div className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 h-full flex flex-col">
                  {pub.images.length > 0 && (
                    <div className={`grid ${pub.images.length >= 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-0.5`}>
                      {pub.images.slice(0, 2).map((img, imgIdx) => (
                        <div key={imgIdx} className="overflow-hidden cursor-pointer" onClick={() => openLightbox(img)}>
                          <img
                            src={img}
                            alt={`${getTitle(pub)} - ${imgIdx + 1}`}
                            loading="lazy"
                            className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Radio/online entries without images get a styled header */}
                  {pub.images.length === 0 && (
                    <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                        {pub.type === "radio" ? <Mic size={28} /> : <ExternalLink size={28} />}
                      </div>
                    </div>
                  )}

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 text-primary font-heading text-xs font-semibold tracking-wider uppercase">
                        {typeIcon(pub.type)}
                        {getSource(pub)}
                      </span>
                      {pub.year && <span className="text-muted-foreground/50 text-xs font-heading">· {pub.year}</span>}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">{getTitle(pub)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{getDesc(pub)}</p>
                    {pub.audioUrl && (
                      <a href={pub.audioUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 text-primary hover:brightness-110 font-heading text-sm font-semibold tracking-wider transition-all">
                        <Mic size={14} />
                        {t.mediaPage.listenOnSoundcloud}
                      </a>
                    )}
                    {pub.externalUrl && (
                      <a href={pub.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 text-primary hover:brightness-110 font-heading text-sm font-semibold tracking-wider transition-all">
                        <ExternalLink size={14} />
                        {lang === "es" ? "VER MÁS →" : "VIEW MORE →"}
                      </a>
                    )}
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
