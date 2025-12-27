import type { FC } from "react";
import { PageContainer } from "../../shared/PageContainer";
import HeroSection from "./sections/HeroSection";
import StackSection from "./sections/StackSection";
import ToolsSection from "./sections/ToolsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import LandingDisclaimer from "./sections/LandingDisclaimer";
import LandingTimer from "./sections/LandingTimer";

const LandingPage: FC = () => {
  return (
    <PageContainer>
      <HeroSection />
      <StackSection />
      <LandingTimer />
      <ToolsSection />
      <TestimonialsSection />
      <LandingDisclaimer />
    </PageContainer>
  );
};

export default LandingPage;
