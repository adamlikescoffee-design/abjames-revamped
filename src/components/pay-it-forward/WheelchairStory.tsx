import { Accessibility } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import angel2 from "@/assets/angel-2.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const WheelchairStory = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Accessibility size={22} className="text-primary" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  {t.payingItForward.wheelchairTitle}
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{t.payingItForward.wheelchairDesc}</p>
                <p className="text-muted-foreground leading-relaxed">{t.payingItForward.wheelchairStory1}</p>
                <p className="text-muted-foreground leading-relaxed">{t.payingItForward.wheelchairStory2}</p>
                <p className="text-foreground font-medium leading-relaxed">{t.payingItForward.wheelchairStory3}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="up" delay={150}>
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={angel2}
                alt="Meeting with Angel on the street"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WheelchairStory;
