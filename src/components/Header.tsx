import { Facebook, Flame, Instagram, Linkedin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/aboutadam" },
    { label: t.nav.payingItForward, href: "/paying-it-forward" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.gallery, href: "/gallery" },
    { label: t.nav.media, href: "/media-publications" },
    { label: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className={cn(
          "font-heading font-bold tracking-wider text-foreground transition-all duration-500 shrink-0",
          scrolled ? "text-2xl lg:text-4xl" : "text-3xl lg:text-5xl xl:text-7xl"
        )}>
          ADAM JAMES
        </Link>

        <div className="flex items-center gap-3 lg:gap-5">
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "font-heading text-xs xl:text-sm font-semibold tracking-wider transition-colors whitespace-nowrap",
                  isActive(link.href) ? "text-primary" : "text-foreground/70 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a href="https://www.facebook.com/adamjameslikescoffee" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Facebook size={18} /></a>
            <a href="https://www.instagram.com/adam_likes_coffee" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Instagram size={18} /></a>
            <a href="https://www.linkedin.com/in/adam-likes-coffee/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Linkedin size={18} /></a>
            <a href="https://www.firesidebusinessadvice.com/panellists/liberty-digital" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Flame size={18} /></a>
          </div>

          <LanguageToggle className="hidden lg:flex" />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center gap-2 font-heading text-sm font-semibold tracking-wider text-foreground hover:text-primary transition-colors"
          >
            {menuOpen ? t.nav.close : t.nav.menu}
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-6 space-y-4 animate-reveal-up">
          <nav className="flex flex-col md:flex-row md:flex-wrap md:gap-x-6 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "font-heading text-sm font-semibold tracking-wider transition-colors",
                  isActive(link.href) ? "text-primary" : "text-foreground/70 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-4">
              <a href="https://www.facebook.com/adamjameslikescoffee" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/adam_likes_coffee" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/in/adam-likes-coffee/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.firesidebusinessadvice.com/panellists/liberty-digital" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Flame size={20} /></a>
            </div>
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
