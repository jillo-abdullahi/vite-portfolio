import type { FC } from "react";
import { PageContainer } from "../../shared/PageContainer";
import HeroSection from "./sections/HeroSection";
import StackSection from "./sections/StackSection";
import ToolsSection from "./sections/ToolsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import LandingDisclaimer from "./sections/LandingDisclaimer";

const LandingPage: FC = () => {
  return (
    <PageContainer>
      <HeroSection />
      <StackSection />
      <ToolsSection />
      <TestimonialsSection />
      <LandingDisclaimer />
    </PageContainer>
  );
};

export default LandingPage;
