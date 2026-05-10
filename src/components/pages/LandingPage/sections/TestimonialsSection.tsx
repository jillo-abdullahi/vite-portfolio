import type { FC } from "react";
import { SectionHeading } from "../../../shared/SectionHeading";
import { SectionContent } from "../../../shared/SectionContent";
import Testimonials from "../../../Testimonials";

const TestimonialsSection: FC = () => {
  return (
    <>
      <SectionHeading isContactPage={false}>
        <div className="flex items-center justify-start space-x-2">
          <span className="text-lg md:text-xl lg:text-2xl font-medium">
            testimonials
          </span>
        </div>
      </SectionHeading>
      <SectionContent className="py-6 md:py-10 bg-[var(--color-primary)]/3">
        <Testimonials />
      </SectionContent>
    </>
  );
};

export default TestimonialsSection;
