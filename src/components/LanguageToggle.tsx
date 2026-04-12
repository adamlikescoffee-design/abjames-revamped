import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle = ({ className }: LanguageToggleProps) => {
  const { lang, setLang } = useLanguage();

  return (
    <div className={cn("flex items-center gap-1 font-heading text-xs font-semibold tracking-wider", className)}>
      <button
        onClick={() => setLang("en")}
        className={cn(
          "px-2 py-1 rounded transition-colors",
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : "text-foreground/60 hover:text-foreground"
        )}
      >
        EN
      </button>
      <span className="text-foreground/30">|</span>
      <button
        onClick={() => setLang("es")}
        className={cn(
          "px-2 py-1 rounded transition-colors",
          lang === "es"
            ? "bg-primary text-primary-foreground"
            : "text-foreground/60 hover:text-foreground"
        )}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageToggle;
