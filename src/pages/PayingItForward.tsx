import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Heart, Coffee, Users, HandHeart, Accessibility } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

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
              I believe in the power of giving back. Throughout my journey, I've been fortunate to work with incredible people and organisations dedicated to making a difference in the lives of others.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Coffee,
                  title: "Cup From Above",
                  description:
                    "A social enterprise using coffee as a catalyst for community transformation, giving disadvantaged and disabled locals the opportunity to gain real-world experience and qualifications in hospitality.",
                },
                {
                  icon: Users,
                  title: "Community Building",
                  description:
                    "Creating spaces where people from all walks of life can come together, share stories, and support one another — because real change starts with genuine connection.",
                },
                {
                  icon: HandHeart,
                  title: "Mentoring",
                  description:
                    "Working with young men through Fireside Business Advice to help them navigate the challenges of entrepreneurship, build great businesses, and grow as individuals.",
                },
                {
                  icon: Heart,
                  title: "Suspended Coffees",
                  description:
                    "Championing the suspended coffee movement in Australia — letting customers pre-pay for a coffee that someone in need can later redeem, creating a ripple effect of kindness.",
                },
                {
                  icon: Accessibility,
                  title: "Wheelchair for Angel",
                  description:
                    "A fundraiser to provide a custom wheelchair for Angel, a young community member with limited mobility. Every contribution brings her closer to independence, freedom, and the ability to participate fully in everyday life.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
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
