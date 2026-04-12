import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/adam-james-hero.png";
import musicImage from "@/assets/about-music.jpg";
import coffeeImage from "@/assets/about-coffee.jpg";
import { Coffee, Guitar, Briefcase, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const milestones = [
  {
    icon: Coffee,
    title: "The Barista Years",
    description:
      "Adam's journey began behind the coffee machine. As a barista, he discovered the power of community — how a single cup of coffee could spark meaningful conversations and bring people together. This experience shaped his understanding of hospitality and human connection.",
  },
  {
    icon: Guitar,
    title: "Music & Creativity",
    description:
      "A passionate musician at heart, Adam has always used music as a creative outlet and a way to connect with others. Whether performing live or writing new material, music remains a central part of who he is.",
  },
  {
    icon: Briefcase,
    title: "Digital Marketing",
    description:
      "Today, Adam works in digital marketing through Liberty Digital, helping businesses succinctly and beautifully communicate what they have to offer. He loves collaborating with clients to craft compelling brand stories that resonate with their audiences.",
  },
  {
    icon: Users,
    title: "Fireside Business Advice",
    description:
      "As the founder of Fireside Business Advice, Adam created a supportive group for men in business. He's passionate about mentoring young men and helping them navigate the challenges of entrepreneurship and professional growth.",
  },
];

const AboutAdam = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-28 pb-16 relative">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-heading text-sm tracking-wider mb-8"
          >
            <ArrowLeft size={16} />
            BACK HOME
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                About Adam
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl">
                Musician, entrepreneur, digital marketer, and community builder — Adam James wears many hats, but they all share a common thread: a genuine desire to connect with people and make a positive impact.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={heroImage}
                alt="Adam James"
                width={600}
                height={900}
                className="w-full max-w-sm object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8 text-center">
            The Story So Far
          </h2>
          <div className="space-y-6 text-foreground/80 text-base md:text-lg leading-relaxed">
            <p>
              Based on the Sunshine Coast in Queensland, Australia, Adam's path has been anything but conventional. From pulling espresso shots to performing on stage, from building digital campaigns to mentoring aspiring business owners — every chapter has been driven by a love for people and purpose.
            </p>
            <p>
              His social enterprise, Cup from Above, used coffee as a catalyst for community transformation, giving disadvantaged and disabled locals the opportunity to gain real-world experience and qualifications in hospitality.
            </p>
            <p>
              Today, Adam channels that same energy into his digital marketing work at Liberty Digital and his mentoring community, Fireside Business Advice. He believes that great things happen when people come together with honesty, ambition, and a willingness to help each other grow.
            </p>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-64 md:h-96 overflow-hidden">
          <img
            src={musicImage}
            alt="Adam performing music"
            loading="lazy"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-64 md:h-96 overflow-hidden">
          <img
            src={coffeeImage}
            alt="Coffee and community"
            loading="lazy"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            What Drives Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {milestones.map((item, idx) => (
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Whether you want to collaborate, chat about business, or just grab a coffee — I'd love to hear from you.
          </p>
          <Link
            to="/#contact"
            className="inline-block bg-primary text-primary-foreground font-heading font-semibold tracking-wider text-sm px-8 py-3 hover:brightness-110 transition-all"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutAdam;
