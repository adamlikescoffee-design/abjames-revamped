import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Accessibility } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import angel1 from "@/assets/angel-1.jpg";
import angel2 from "@/assets/angel-2.jpg";

const PayingItForward = () => {
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

      <section className="py-16">
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
