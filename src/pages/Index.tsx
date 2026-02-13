import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import ActiveSectionIndicator from "@/components/ActiveSectionIndicator";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      <ActiveSectionIndicator />
      <main>
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <PhotoGallerySection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
