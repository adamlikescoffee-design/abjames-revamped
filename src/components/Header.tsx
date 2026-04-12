import { Facebook, Instagram, Linkedin, Menu, Search, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="/" className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-foreground">
          ADAM JAMES
        </a>

        <div className="flex items-center gap-3 md:gap-5">
          <nav className="hidden md:flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
              <X size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
              <Linkedin size={20} />
            </a>
          </nav>

          <div className="hidden md:flex items-center bg-secondary rounded-full px-4 py-2 gap-2">
            <Search size={16} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-32"
            />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 font-heading text-sm font-semibold tracking-wider text-foreground hover:text-primary transition-colors"
          >
            MENU
            <Menu size={20} />
          </button>

          <a
            href="#contact"
            className="hidden md:inline-block bg-foreground text-background font-heading text-sm font-semibold tracking-wider px-6 py-2.5 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            CONTACT
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-6 space-y-4">
          <div className="flex items-center bg-secondary rounded-full px-4 py-2 gap-2">
            <Search size={16} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
            />
          </div>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Facebook size={20} /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><X size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Instagram size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Linkedin size={20} /></a>
          </div>
          <a href="#contact" className="block bg-foreground text-background font-heading text-sm font-semibold tracking-wider px-6 py-2.5 text-center hover:bg-primary hover:text-primary-foreground transition-colors">
            CONTACT
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
