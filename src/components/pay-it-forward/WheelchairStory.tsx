import { Accessibility } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import angel1 from "@/assets/angel-1.jpg";
import angel2 from "@/assets/angel-2.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const WheelchairStory = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Accessibility size={22} className="text-primary" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              {t.payingItForward.wheelchairTitle}
            </h2>
          </div>
        </ScrollReveal>

        {/* Story text */}
        <ScrollReveal>
          <div className="space-y-4 max-w-3xl mb-10">
            <p className="text-muted-foreground leading-relaxed">{t.payingItForward.wheelchairDesc}</p>
            <p className="text-muted-foreground leading-relaxed">{t.payingItForward.wheelchairStory1}</p>
            <p className="text-muted-foreground leading-relaxed">{t.payingItForward.wheelchairStory2}</p>
            <p className="text-foreground font-medium leading-relaxed">{t.payingItForward.wheelchairStory3}</p>
          </div>
        </ScrollReveal>

        {/* Images side by side */}
        <ScrollReveal animation="up" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl shadow-2xl max-h-[520px]">
              <img
                src={angel1}
                alt="Adam with Angel"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-2xl max-h-[520px]">
              <img
                src={angel2}
                alt="Meeting with Angel on the street"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WheelchairStory;
