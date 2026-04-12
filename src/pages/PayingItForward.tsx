import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Accessibility, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import angel1 from "@/assets/angel-1.jpg";
import angel2 from "@/assets/angel-2.jpg";

const PayingItForward = () => {
  const [pledgeData, setPledgeData] = useState({ name: "", email: "", amount: "20" });
  const [pledgeSubmitted, setPledgeSubmitted] = useState(false);

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPledgeSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-heading text-sm tracking-wider mb-8"
          >
            <ArrowLeft size={16} />
            BACK HOME
          </Link>

          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Paying It Forward
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl">
              I believe in the power of paying it forward. To initiate unnecessary generosity void of the expectation to receive anything in return. The highest form is to do this in secret without anyone knowing at all.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mt-4">
              Sometimes it is useful, necessary and beneficial to collaborate with others in collective generosity to coordinate sufficient resources to do something truly great, to reduce suffering and to liberate someone.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Accessibility size={22} className="text-primary" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Wheelchair for Angel
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              A fundraiser to provide a custom wheelchair for Angel, a young community member with limited mobility. Every contribution brings her closer to independence, freedom, and the ability to participate fully in everyday life.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={angel1}
                  alt="Adam with Angel"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={angel2}
                  alt="Meeting with Angel on the street"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pledge Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Pledge Your Support
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Users size={20} className="text-primary" />
                <span className="text-lg font-heading font-semibold text-foreground">
                  Proposed Target: $2,000
                </span>
              </div>
              <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground">
                <p>
                  We're currently taking <strong className="text-foreground">pledges only</strong> — no payment is required right now.
                </p>
                <p>
                  The estimated cost for Angel's wheelchair is approximately <strong className="text-foreground">$2,000</strong>, but we are waiting for final confirmation from the medical professionals on the exact amount needed.
                </p>
                <p>
                  We're looking for <strong className="text-foreground">100 people to pledge $20 each</strong>, but you're welcome to pledge any amount you like.
                </p>
                <p>
                  Once we've confirmed the exact costs and that the wheelchair is definitely going to be beneficial for Angel, we will <strong className="text-foreground">email all pledgers with payment details</strong> at that point.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="up" delay={100}>
            <div className="max-w-md mx-auto">
              {pledgeSubmitted ? (
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                  <Heart size={32} className="text-primary mx-auto mb-3" />
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Thank You for Your Pledge!
                  </h3>
                  <p className="text-muted-foreground">
                    Your pledge of <strong className="text-foreground">${pledgeData.amount}</strong> has been recorded. We'll be in touch via email once costs are confirmed and we're ready to proceed.
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePledgeSubmit} className="space-y-5 bg-secondary border border-border rounded-lg p-6">
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={pledgeData.name}
                      onChange={(e) => setPledgeData({ ...pledgeData, name: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
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
                      value={pledgeData.email}
                      onChange={(e) => setPledgeData({ ...pledgeData, email: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                      Pledge Amount (AUD)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">$</span>
                      <input
                        type="number"
                        required
                        min="1"
                        value={pledgeData.amount}
                        onChange={(e) => setPledgeData({ ...pledgeData, amount: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg pl-8 pr-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                        placeholder="20"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Suggested: $20 — but any amount is appreciated</p>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm py-3 hover:brightness-110 transition-all rounded-lg flex items-center justify-center gap-2"
                  >
                    <Heart size={16} />
                    PLEDGE MY SUPPORT
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    No payment required now. We'll contact you by email when we're ready to proceed.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Want to Get Involved?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you want to volunteer, collaborate, or simply learn more about how you can make a difference in your community — I'd love to hear from you.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm px-8 py-3 hover:brightness-110 transition-all"
              >
                GET IN TOUCH
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PayingItForward;
