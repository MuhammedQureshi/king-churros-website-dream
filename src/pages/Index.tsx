import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ParallaxDivider from "@/components/ParallaxDivider";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ParallaxDivider />
      <ScrollReveal>
        <MenuSection />
      </ScrollReveal>
      <ParallaxDivider />
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ParallaxDivider />
      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
      <Footer />
    </div>
  );
};

export default Index;
