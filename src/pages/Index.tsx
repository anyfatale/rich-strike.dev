import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { MaterialsSection } from "@/components/MaterialsSection";
import { TierSystem } from "@/components/TierSystem";
import { CommunitySection } from "@/components/CommunitySection";
import { FounderSection } from "@/components/FounderSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SuccessSection } from "@/components/SuccessSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <MaterialsSection />
        <TierSystem />
        <CommunitySection />
        <FounderSection />
        <TestimonialsSection />
        <SuccessSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
