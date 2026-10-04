import HeroSection from "@/components/sections/HeroSection";
import WorksSection from "@/components/sections/WorksSection";
import ProcessSection from "@/components/sections/ProcessSection";
import DesignSystemPlayground from "@/components/sections/DesignSystemPlayground";
import SkillsSection from "@/components/sections/SkillsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <WorksSection />
      <ProcessSection />
      <DesignSystemPlayground />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
