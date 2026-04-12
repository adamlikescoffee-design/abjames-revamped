import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, X } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            Have a question or want to work together? Drop me a message below.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ScrollReveal animation="left" delay={100}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Email</h3>
                  <a href="mailto:hello@abjames.com" className="text-muted-foreground hover:text-primary transition-colors">
                    hello@abjames.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">Sunshine Coast, Queensland, Australia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">Available on request</p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, href: "https://facebook.com" },
                    { icon: X, href: "https://x.com" },
                    { icon: Instagram, href: "https://instagram.com" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/adam-likes-coffee/" },
                  ].map(({ icon: Icon, href }, idx) => (
                    <a
                      key={idx}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
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
                <label htmlFor="name" className="block font-heading text-sm font-semibold tracking-wider text-foreground mb-2">
                  NAME
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-heading text-sm font-semibold tracking-wider text-foreground mb-2">
                  EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-heading text-sm font-semibold tracking-wider text-foreground mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  required
                  maxLength={1000}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              {submitted ? (
                <div className="bg-primary/10 border border-primary/30 rounded-md px-4 py-3 text-primary font-medium text-sm">
                  Thanks for your message! I'll get back to you soon.
                </div>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm px-8 py-3 hover:brightness-110 transition-all"
                >
                  SEND MESSAGE
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
