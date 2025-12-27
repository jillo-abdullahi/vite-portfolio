import type { FC } from "react";
import { SlideMeIn } from "../../../shared/SlideMeIn";
import { SectionContent } from "../../../shared/SectionContent";
import { FeaturedPresigProject } from "../../../FeaturedPresigProject";

const FeaturedProjectSection: FC = () => (
  <SlideMeIn marginBottom="mb-0">
    <SectionContent padding="py-10 bg-[var(--color-primary)]/3">
      <FeaturedPresigProject />
    </SectionContent>
  </SlideMeIn>
);

export default FeaturedProjectSection;
