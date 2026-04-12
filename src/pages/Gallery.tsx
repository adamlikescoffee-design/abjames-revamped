import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
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
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section
        className="relative pt-28 pb-20 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${galleryBg})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto px-4">
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
                <div className="break-inside-avoid overflow-hidden rounded-lg">
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
