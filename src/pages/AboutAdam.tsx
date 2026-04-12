import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/adam-james-hero.webp";
import musicImage from "@/assets/about-music.jpg";
import coffeeImage from "@/assets/about-coffee.jpg";
import { Heart, Users, Sparkles, Target, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const valueIcons = [Users, Heart, Sparkles, Target];

const AboutAdam = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-heading text-sm tracking-wider mb-8">
            <ArrowLeft size={16} />
            {t.aboutPage.backHome}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">{t.aboutPage.subtitle}</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">{t.aboutPage.title}</h1>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4">{t.aboutPage.intro}</p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{t.aboutPage.introP2}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="up" delay={150}>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-3 bg-primary/10 rounded-2xl -rotate-3" />
                  <img src={heroImage} alt="Adam James" width={600} height={900} className="relative w-full max-w-sm object-contain rounded-xl" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-10 text-center">{t.aboutPage.storyTitle}</h2>
          </ScrollReveal>
          <div className="space-y-6 text-foreground/80 text-base md:text-lg leading-relaxed">
            <ScrollReveal animation="up" delay={50}><p>{t.aboutPage.storyP1}</p></ScrollReveal>
            <ScrollReveal animation="up" delay={100}><p>{t.aboutPage.storyP2}</p></ScrollReveal>
            <ScrollReveal animation="up" delay={150}><p>{t.aboutPage.storyP3}</p></ScrollReveal>
            <ScrollReveal animation="up" delay={200}><p>{t.aboutPage.storyP4}</p></ScrollReveal>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-64 md:h-96 overflow-hidden group">
          <img src={musicImage} alt="Adam performing music" loading="lazy" width={1200} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="h-64 md:h-96 overflow-hidden group">
          <img src={coffeeImage} alt="Coffee and community" loading="lazy" width={1200} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-14 text-center">{t.aboutPage.storyTitle}</h2>
          </ScrollReveal>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            
            {t.aboutPage.timeline.map((item, idx) => (
              <ScrollReveal key={idx} animation="up" delay={idx * 80}>
                <div className={`relative flex items-start gap-6 mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10 ring-4 ring-background" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}>
                    <span className="text-primary font-heading text-xs tracking-[0.2em] uppercase">{item.year}</span>
                    <h3 className="font-heading text-lg font-bold text-foreground mt-1">{item.label}</h3>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">{t.aboutPage.valuesTitle}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.aboutPage.values.map((item, idx) => {
              const Icon = valueIcons[idx];
              return (
                <ScrollReveal key={idx} animation="up" delay={idx * 80}>
                  <div className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary/40 transition-colors h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">{t.aboutPage.quickFacts}</h2>
          </ScrollReveal>
          <ScrollReveal animation="up" delay={100}>
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-3">
              {t.aboutPage.facts.map((fact, idx) => (
                <p key={idx} className="text-foreground/80 text-base leading-relaxed">{fact}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{t.aboutPage.connectTitle}</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t.aboutPage.connectText}</p>
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm px-8 py-3 hover:brightness-110 transition-all rounded-lg">
              {t.aboutPage.getInTouch}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutAdam;
