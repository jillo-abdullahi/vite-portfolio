import type { FC } from "react";
import { useEffect, useRef } from "react";
import { SectionHeading } from "../../../shared/SectionHeading";
import { SwordsIcon, type SwordsIconHandle } from "../../../ui/SwordsIcon";
import { SlideMeIn } from "../../../shared/SlideMeIn";
import { SectionContent } from "../../../shared/SectionContent";
import Stacks from "../../../Stacks";
import { useInView } from "@/hooks/useInView";

const ToolsSection: FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const swordsRef = useRef<SwordsIconHandle | null>(null);

  useEffect(() => {
    if (!swordsRef.current) return;
    if (isInView) {
      swordsRef.current.startAnimation();
    } else {
      swordsRef.current.stopAnimation();
    }
  }, [isInView, swordsRef]);

  return (
    <>
      <SectionHeading>
        <div className="flex items-center justify-start space-x-2" ref={ref}>
          <SwordsIcon
            className="text-[var(--color-primary)]"
            size={20}
            ref={swordsRef}
          />
          <span className="text-lg md:text-xl lg:text-2xl font-medium">
            my tools
          </span>
        </div>
      </SectionHeading>
      <SlideMeIn>
        <SectionContent padding="bg-[var(--color-primary)]/3 py-6 md:py-10">
          <section>
            <Stacks />
          </section>
        </SectionContent>
      </SlideMeIn>
    </>
  );
};

export default ToolsSection;
