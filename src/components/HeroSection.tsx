import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Flame } from "lucide-react";
import TikTokIcon from "@/components/TikTokIcon";
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
              <p>
                {t.hero.p2Before}
                <Link to="/paying-it-forward" className="text-primary hover:underline font-medium">{t.hero.p2Link}</Link>
                {t.hero.p2After}
              </p>
              <p>
                {t.hero.p3}{" "}
                <a href="https://www.firesidebusinessadvice.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  {t.hero.firesideLink}
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <Link to="/aboutadam" className="inline-block text-primary font-heading font-semibold tracking-wider text-sm hover:underline">
                {t.hero.moreAbout}
              </Link>
              <div>
                <span className="block text-xs font-heading font-semibold tracking-[0.2em] text-foreground/50 uppercase mb-3">Follow Adam</span>
                <div className="flex items-center gap-3">
                  <a href="https://www.facebook.com/adamjameslikescoffee" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"><Facebook size={18} /></a>
                  <a href="https://www.instagram.com/adam_likes_coffee" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"><Instagram size={18} /></a>
                  <a href="https://www.linkedin.com/in/adam-likes-coffee/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"><Linkedin size={18} /></a>
                  <a href="https://www.firesidebusinessadvice.com/panellists/liberty-digital" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"><Flame size={18} /></a>
                  <a href="https://www.tiktok.com/@adam_likes_coffee" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"><TikTokIcon size={18} /></a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
