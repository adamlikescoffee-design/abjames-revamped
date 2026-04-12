import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Courier Mail Feature — Cup From Above",
    description:
      "A feature article in the Courier Mail about Adam's social enterprise Cup From Above, highlighting the café's mission to support disadvantaged and disabled community members through hospitality training.",
    source: "Courier Mail",
  },
  {
    title: "Northside Chronicle — Daily Grind for Ashley",
    description:
      "Coverage of the community fundraising initiative launched through Cup From Above to support five-year-old Ashley Kong with her speech and development therapy.",
    source: "Northside Chronicle",
  },
  {
    title: "A Little Help From Above — Brisbane Café Changing Lives",
    description:
      "An article showcasing how Cup from Above uses coffee as a catalyst for community transformation, providing training opportunities for disadvantaged locals.",
    source: "Local Media",
  },
  {
    title: "Silent Writer Finds The Keys to Success",
    description:
      "The inspiring story of Glen Sheppard, a 33-year-old author and poet born with Down syndrome, featured as part of the community work connected to Cup From Above.",
    source: "Media Feature",
  },
  {
    title: "Liberty Enterprises — Social Enterprise Creating Opportunity",
    description:
      "Coverage of Liberty Enterprises, a social enterprise dedicated to creating real opportunities for women who have experienced domestic violence, homelessness, or other hardships.",
    source: "Courier Mail",
  },
  {
    title: "Local Police Espresso Initiative",
    description:
      "Coverage of the local police-café initiative that brought officers and community members together over coffee, breaking down barriers and fostering genuine human connection.",
    source: "Local Media",
  },
];

const MediaPublications = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">
              Media Publications
            </h1>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Adam is featured regularly in the media for the work he and his team do in the community. This is a digital scrapbook with some of the highlights over the years.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <ScrollReveal key={idx} animation="up" delay={idx * 80}>
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-heading font-semibold tracking-wider text-primary uppercase">
                        {pub.source}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-foreground mt-1 mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {pub.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MediaPublications;
