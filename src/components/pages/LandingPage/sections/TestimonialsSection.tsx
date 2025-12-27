import type { FC } from "react";
import { useEffect, useRef } from "react";
import { SectionHeading } from "../../../shared/SectionHeading";
import { HeartIcon } from "../../../ui/HeartIcon";
import type { HeartIconHandle } from "../../../ui/HeartIcon";
import { SlideMeIn } from "../../../shared/SlideMeIn";
import { SectionContent } from "../../../shared/SectionContent";
import Testimonials from "../../../Testimonials";
import { useInView } from "@/hooks/useInView";

const TestimonialsSection: FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const heartRef = useRef<HeartIconHandle | null>(null);

  useEffect(() => {
    if (!heartRef.current) return;
    if (isInView) {
      heartRef.current.startAnimation();
    } else {
      heartRef.current.stopAnimation();
    }
  }, [isInView, heartRef]);

  return (
    <>
      <SectionHeading isContactPage={false}>
        <div className="flex items-center justify-start space-x-2" ref={ref}>
          <HeartIcon
            className="text-[var(--color-primary)]"
            size={20}
            ref={heartRef}
          />
          <span className="text-lg md:text-xl lg:text-2xl font-medium">
            what people say
          </span>
        </div>
      </SectionHeading>
      <SlideMeIn cascade>
        <SectionContent padding="py-6 md:py-10 bg-[var(--color-primary)]/3">
          <Testimonials />
        </SectionContent>
      </SlideMeIn>
    </>
  );
};

export default TestimonialsSection;
