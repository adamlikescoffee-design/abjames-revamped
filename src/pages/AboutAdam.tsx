import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/adam-james-hero.webp";
import musicImage from "@/assets/about-music.jpg";
import coffeeImage from "@/assets/about-coffee.jpg";
import { Coffee, Guitar, Briefcase, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap = [Coffee, Guitar, Briefcase, Users];

const AboutAdam = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-16 relative">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-heading text-sm tracking-wider mb-8">
            <ArrowLeft size={16} />
            {t.aboutPage.backHome}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">{t.aboutPage.title}</h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl">{t.aboutPage.intro}</p>
            </div>
            <div className="flex justify-center">
              <img src={heroImage} alt="Adam James" width={600} height={900} className="w-full max-w-sm object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8 text-center">{t.aboutPage.storyTitle}</h2>
          <div className="space-y-6 text-foreground/80 text-base md:text-lg leading-relaxed">
            <p>{t.aboutPage.storyP1}</p>
            <p>{t.aboutPage.storyP2}</p>
            <p>{t.aboutPage.storyP3}</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-64 md:h-96 overflow-hidden">
          <img src={musicImage} alt="Adam performing music" loading="lazy" width={1200} height={800} className="w-full h-full object-cover" />
        </div>
        <div className="h-64 md:h-96 overflow-hidden">
          <img src={coffeeImage} alt="Coffee and community" loading="lazy" width={1200} height={800} className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">{t.aboutPage.whatDrivesMe}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.aboutPage.milestones.map((item, idx) => {
              const Icon = iconMap[idx];
              return (
                <div key={idx} className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{t.aboutPage.connectTitle}</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t.aboutPage.connectText}</p>
          <Link to="/#contact" className="inline-block bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm px-8 py-3 hover:brightness-110 transition-all">
            {t.aboutPage.getInTouch}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutAdam;
