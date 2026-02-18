import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSlider from "@/components/PortfolioSlider";
import ProjectsGallery from "@/components/ProjectsGallery";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSlider />
      <ProjectsGallery />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
