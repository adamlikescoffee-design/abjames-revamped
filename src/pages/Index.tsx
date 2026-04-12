import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";
import InstagramFeed from "@/components/InstagramFeed";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BlogSection />
      <InstagramFeed />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
