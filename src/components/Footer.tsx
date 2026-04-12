import { Facebook, Flame, Instagram, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center space-y-6">
        <h2 className="font-heading text-2xl font-bold text-foreground">ADAM JAMES</h2>
        <div className="flex justify-center gap-5">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={22} /></a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><X size={22} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={22} /></a>
          <a href="https://www.linkedin.com/in/adam-likes-coffee/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={22} /></a>
          <a href="https://www.firesidebusinessadvice.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Flame size={22} /></a>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Adam James. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
