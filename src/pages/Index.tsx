import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";
import InstagramFeed from "@/components/InstagramFeed";
import Seo, { personJsonLd } from "@/components/Seo";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Adam James — Entrepreneur, Writer & Community Builder"
        description="Adam James writes on business, coffee, faith, family and giving back — plus the Pay It Forward wheelchair initiative and stories from Cup From Above."
        path="/"
        jsonLd={personJsonLd}
      />
      <Header />
      <HeroSection />
      <BlogSection />
      
      
      <Footer />
    </div>
  );
};

export default Index;
