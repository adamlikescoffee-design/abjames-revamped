import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import angel1 from "@/assets/angel-1.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroBanner = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[70vh] flex items-end">
      <div className="absolute inset-0">
        <img
          src={angel1}
          alt="Adam with Angel"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-16 pt-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors font-heading text-sm tracking-wider mb-8"
        >
          <ArrowLeft size={16} />
          {t.payingItForward.backHome}
        </Link>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 max-w-3xl">
          {t.payingItForward.title}
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl">
          {t.payingItForward.p1}
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
