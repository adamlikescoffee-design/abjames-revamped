import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Facebook, Flame, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">
              Contact
            </h1>
            <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
              The best way to contact Adam is by email{" "}
              <a href="mailto:adam@abjames.com" className="text-primary hover:underline">
                adam@abjames.com
              </a>
              . Alternatively, you can send a message through the form below.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollReveal animation="left">
              {submitted ? (
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Thank you!
                  </h3>
                  <p className="text-muted-foreground">
                    Your message has been sent. Adam will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm py-3 hover:brightness-110 transition-all rounded-lg"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal animation="right">
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail size={18} className="text-primary" />
                      <a href="mailto:adam@abjames.com" className="hover:text-primary transition-colors">
                        adam@abjames.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin size={18} className="text-primary" />
                      <span>Sunshine Coast, Queensland, Australia</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                    Follow Adam on Social Media
                  </h3>
                  <div className="flex gap-4">
                    <a href="https://www.facebook.com/adamjameslikescoffee" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors">
                      <Facebook size={18} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors">
                      <Instagram size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/adam-likes-coffee/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="https://www.firesidebusinessadvice.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors">
                      <Flame size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
