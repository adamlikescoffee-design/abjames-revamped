import { Link } from "react-router-dom";
import heroImage from "@/assets/adam-james-hero.webp";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <ScrollReveal animation="left">
          <div className="flex justify-center lg:justify-end">
            <img src={heroImage} alt="Adam James" width={600} height={900} className="w-[80%] max-w-md lg:max-w-lg object-contain" />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="right" delay={200}>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
              {t.hero.title}
            </h1>
            <div className="space-y-4 text-foreground/85 text-base md:text-lg leading-relaxed max-w-xl">
              <p>{t.hero.p1}</p>
              <p>{t.hero.p2}</p>
              <p>
                {t.hero.p3}{" "}
                <a href="https://www.firesidebusinessadvice.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  {t.hero.firesideLink}
                </a>
              </p>
            </div>
            <Link to="/aboutadam" className="inline-block text-primary font-heading font-semibold tracking-wider text-sm hover:underline">
              {t.hero.moreAbout}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
