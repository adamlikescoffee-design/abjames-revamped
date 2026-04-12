import { Newspaper, Mic, Award } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const MediaHighlights = () => {
  const { t } = useLanguage();

  const items = [
    { icon: <Newspaper size={20} />, title: t.payingItForward.mediaCfa, desc: t.payingItForward.mediaCfaDesc },
    { icon: <Mic size={20} />, title: t.payingItForward.mediaRadio, desc: t.payingItForward.mediaRadioDesc },
    { icon: <Award size={20} />, title: t.payingItForward.mediaAoty, desc: t.payingItForward.mediaAotyDesc },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">
            {t.payingItForward.mediaTitle}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {t.payingItForward.mediaSubtitle}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={i} animation="up" delay={i * 100}>
              <div className="bg-secondary border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
                  {item.icon}
                </div>
                <h3 className="font-heading text-sm font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="up" delay={300}>
          <div className="text-center mt-10">
            <Link
              to="/media"
              className="inline-block text-primary font-heading font-semibold tracking-wider text-sm hover:underline"
            >
              {t.payingItForward.mediaSeeAll}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MediaHighlights;
