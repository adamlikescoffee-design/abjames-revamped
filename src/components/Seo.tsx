import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.abjames.com";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  type?: string;
  jsonLd?: Record<string, unknown>;
}

const Seo = ({ title, description, path, type = "website", jsonLd }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adam James",
  url: SITE_URL,
  description:
    "Australian entrepreneur, community builder and founder of Cup From Above, sharing writing on business, coffee, faith and giving back.",
  jobTitle: "Entrepreneur & Community Builder",
  sameAs: [
    "https://www.facebook.com/adamjameslikescoffee",
    "https://www.instagram.com/adam_likes_coffee",
    "https://www.linkedin.com/in/adam-likes-coffee/",
    "https://www.tiktok.com/@adam_likes_coffee",
  ],
};

export const collectionJsonLd = (name: string, path: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name,
  description,
  url: `${SITE_URL}${path}`,
});

export default Seo;
