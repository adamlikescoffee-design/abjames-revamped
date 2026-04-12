import { Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/aboutadam" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
  { label: "GALLERY", href: "/gallery" },
  { label: "MEDIA", href: "/media-publications" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-foreground">
          ADAM JAMES
        </Link>

        <div className="flex items-center gap-3 md:gap-5">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "font-heading text-sm font-semibold tracking-wider transition-colors",
                  isActive(link.href) ? "text-primary" : "text-foreground/70 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Facebook size={18} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Instagram size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Linkedin size={18} /></a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center gap-2 font-heading text-sm font-semibold tracking-wider text-foreground hover:text-primary transition-colors"
          >
            {menuOpen ? "CLOSE" : "MENU"}
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-6 space-y-4 animate-reveal-up">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
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
          <div className="flex gap-4 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Facebook size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Instagram size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
