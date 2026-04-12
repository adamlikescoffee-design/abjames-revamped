import { Link } from "react-router-dom";
import heroImage from "@/assets/adam-james-hero.webp";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <ScrollReveal animation="left">
          <div className="flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Adam James"
              width={600}
              height={900}
              className="w-full max-w-md lg:max-w-lg object-contain"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="right" delay={200}>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
              About Adam
            </h1>

            <div className="space-y-4 text-foreground/85 text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                I'm a musician. I used to be a barista. These days I still appreciate great coffee.
              </p>
              <p>
                I work in{" "}
                <a href="http://www.libertydigital.com.au/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  digital marketing
                </a>
                . I love working with clients to help them succinctly and beautifully communicate what their organisation has to offer.
              </p>
              <p>
                I'm also the founder of{" "}
                <a href="http://www.businessadvice.site/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  Fireside Business Advice
                </a>{" "}
                which is a group supporting men in business. I'm passionate about helping young men succeed in business.
              </p>
            </div>

            <Link
              to="/aboutadam"
              className="inline-block text-primary font-heading font-semibold tracking-wider text-sm hover:underline"
            >
              MORE ABOUT ADAM HERE.
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
