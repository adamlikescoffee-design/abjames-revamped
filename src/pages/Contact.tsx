import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Facebook, Flame, Instagram, Linkedin, Send, MessageCircle, ArrowRight } from "lucide-react";
import TikTokIcon from "@/components/TikTokIcon";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/adamjameslikescoffee", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/adam_likes_coffee", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/adam-likes-coffee/", label: "LinkedIn" },
    { icon: Flame, href: "https://www.firesidebusinessadvice.com/panellists/liberty-digital", label: "Fireside" },
    { icon: () => <TikTokIcon size={20} />, href: "https://www.tiktok.com/@adam_likes_coffee", label: "TikTok" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-heading font-semibold tracking-wider mb-6">
              <MessageCircle size={16} />
              {t.contactPage.getInTouch}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
              {t.contactPage.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {t.contactPage.intro}{" "}
              <a href="mailto:adam@abjames.com" className="text-primary hover:underline font-medium">adam@abjames.com</a>
              {t.contactPage.altIntro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Form - takes 3 columns */}
            <div className="lg:col-span-3">
              <ScrollReveal animation="left">
                <div className="bg-secondary/50 border border-border/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Send a Message
                  </h2>
                  <p className="text-muted-foreground text-sm mb-8">
                    Fill out the form and Adam will get back to you as soon as possible.
                  </p>

                  {submitted ? (
                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-10 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Send size={24} className="text-primary" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{t.contactPage.thankYou}</h3>
                      <p className="text-muted-foreground">{t.contactPage.thankYouText}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-heading font-semibold text-foreground mb-2 tracking-wider">
                            {t.contactPage.name}
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                            placeholder={t.contactPage.namePlaceholder}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-heading font-semibold text-foreground mb-2 tracking-wider">
                            {t.contactPage.email}
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                            placeholder={t.contactPage.emailPlaceholder}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-heading font-semibold text-foreground mb-2 tracking-wider">
                          {t.contactPage.message}
                        </label>
                        <textarea
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                          placeholder={t.contactPage.messagePlaceholder}
                        />
                      </div>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm px-8 py-4 hover:brightness-110 transition-all rounded-xl"
                      >
                        {t.contactPage.send}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar - takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal animation="right" delay={100}>
                <div className="bg-secondary/50 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-6">{t.contactPage.getInTouch}</h3>
                  <div className="space-y-5">
                    <a
                      href="mailto:adam@abjames.com"
                      className="group flex items-center gap-4 p-3 -m-3 rounded-xl hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Mail size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground/70 font-heading">Email</p>
                        <p className="text-foreground font-medium">adam@abjames.com</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-4 p-3 -m-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground/70 font-heading">Location</p>
                        <p className="text-foreground font-medium">{t.contactSection.locationValue}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="right" delay={200}>
                <div className="bg-secondary/50 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-6">{t.contactPage.followAdam}</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {socialLinks.map(({ icon: Icon, href, label }, idx) => (
                      <a
                        key={idx}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="group aspect-square rounded-xl bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="right" delay={300}>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Adam typically responds within 24–48 hours. For urgent matters, reach out directly via email.
                  </p>
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
