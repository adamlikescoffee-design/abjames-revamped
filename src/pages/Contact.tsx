import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Facebook, Flame, Instagram, Linkedin, Send, ArrowRight } from "lucide-react";
import TikTokIcon from "@/components/TikTokIcon";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/adamjameslikescoffee", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/adam_likes_coffee", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/adam-likes-coffee/", label: "LinkedIn" },
  { icon: Flame, href: "https://www.firesidebusinessadvice.com/panellists/liberty-digital", label: "Fireside" },
  { icon: () => <TikTokIcon size={18} />, href: "https://www.tiktok.com/@adam_likes_coffee", label: "TikTok" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Page header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
                {t.contactPage.title}
              </h1>
              <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
                {t.contactPage.intro}{" "}
                <a href="mailto:adam@abjames.com" className="text-primary hover:underline font-medium">adam@abjames.com</a>
                {t.contactPage.altIntro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact info sidebar */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <ScrollReveal animation="left" delay={100}>
                <div className="space-y-8">
                  {/* Email */}
                  <a
                    href="mailto:adam@abjames.com"
                    className="group flex items-start gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground/70 font-heading tracking-wider uppercase">Email</p>
                      <p className="text-foreground font-medium text-sm">adam@abjames.com</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-border/50">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground/70 font-heading tracking-wider uppercase">Location</p>
                      <p className="text-foreground font-medium text-sm">{t.contactSection.locationValue}</p>
                    </div>
                  </div>

                  {/* Response time */}
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-semibold font-heading">Quick Response</span>
                      <br />
                      Adam typically responds within 24–48 hours.
                    </p>
                  </div>

                  {/* Social */}
                  <div>
                    <h3 className="font-heading text-xs tracking-wider uppercase text-muted-foreground/70 mb-3">{t.contactPage.followAdam}</h3>
                    <div className="flex gap-2">
                      {socialLinks.map(({ icon: Icon, href, label }, idx) => (
                        <a
                          key={idx}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
                        >
                          <Icon size={18} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <ScrollReveal animation="right">
                <div className="bg-secondary/50 border border-border/50 rounded-2xl p-8 md:p-10">
                  {submitted ? (
                    <div className="py-16 text-center">
                      <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Send size={22} className="text-primary" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{t.contactPage.thankYou}</h3>
                      <p className="text-muted-foreground">{t.contactPage.thankYouText}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-heading font-semibold text-muted-foreground tracking-wider uppercase mb-2">
                            {t.contactPage.name}
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                            placeholder={t.contactPage.namePlaceholder}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-heading font-semibold text-muted-foreground tracking-wider uppercase mb-2">
                            {t.contactPage.email}
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                            placeholder={t.contactPage.emailPlaceholder}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-heading font-semibold text-muted-foreground tracking-wider uppercase mb-2">
                          {t.contactPage.message}
                        </label>
                        <textarea
                          required
                          rows={7}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none text-sm"
                          placeholder={t.contactPage.messagePlaceholder}
                        />
                      </div>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm px-8 py-3.5 hover:brightness-110 transition-all rounded-lg"
                      >
                        {t.contactPage.send}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
