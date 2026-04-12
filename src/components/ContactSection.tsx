import { Facebook, Flame, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import TikTokIcon from "@/components/TikTokIcon";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">{t.contactSection.title}</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">{t.contactSection.subtitle}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ScrollReveal animation="left" delay={100}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{t.contactSection.email}</h3>
                  <a href="mailto:hello@abjames.com" className="text-muted-foreground hover:text-primary transition-colors">hello@abjames.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{t.contactSection.location}</h3>
                  <p className="text-muted-foreground">{t.contactSection.locationValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{t.contactSection.phone}</h3>
                  <p className="text-muted-foreground">{t.contactSection.phoneValue}</p>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{t.contactSection.followMe}</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, href: "https://www.facebook.com/adamjameslikescoffee" },
                    { icon: Instagram, href: "https://www.instagram.com/adam_likes_coffee" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/adam-likes-coffee/" },
                    { icon: Flame, href: "https://www.firesidebusinessadvice.com/panellists/liberty-digital" },
                    { icon: () => <TikTokIcon size={18} />, href: "https://www.tiktok.com/@adam_likes_coffee" },
                  ].map(({ icon: Icon, href }, idx) => (
                    <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="right" delay={200}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-heading text-sm font-semibold tracking-wider text-foreground mb-2">{t.contactSection.name}</label>
                <input id="name" type="text" required maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors" placeholder={t.contactSection.namePlaceholder} />
              </div>
              <div>
                <label htmlFor="email" className="block font-heading text-sm font-semibold tracking-wider text-foreground mb-2">{t.contactSection.emailLabel}</label>
                <input id="email" type="email" required maxLength={255} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors" placeholder={t.contactSection.emailPlaceholder} />
              </div>
              <div>
                <label htmlFor="message" className="block font-heading text-sm font-semibold tracking-wider text-foreground mb-2">{t.contactSection.message}</label>
                <textarea id="message" required maxLength={1000} rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none" placeholder={t.contactSection.messagePlaceholder} />
              </div>
              {submitted ? (
                <div className="bg-primary/10 border border-primary/30 rounded-md px-4 py-3 text-primary font-medium text-sm">{t.contactSection.thanks}</div>
              ) : (
                <button type="submit" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm px-8 py-3 hover:brightness-110 transition-all">
                  {t.contactSection.send}
                  <Send size={16} />
                </button>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
