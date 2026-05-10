import type { FC } from "react";
import { SectionHeading } from "../../../shared/SectionHeading";
import { SlideMeIn } from "../../../shared/SlideMeIn";
import { SectionContent } from "../../../shared/SectionContent";
import Stacks from "../../../Stacks";

const ToolsSection: FC = () => {
  return (
    <>
      <SectionHeading>
        <div className="flex items-center justify-start space-x-2">
          <span className="text-lg md:text-xl lg:text-2xl font-medium">
            tools
          </span>
        </div>
      </SectionHeading>
      <SlideMeIn>
        <SectionContent className="bg-[var(--color-primary)]/3 py-6 md:py-10">
          <section>
            <Stacks />
          </section>
        </SectionContent>
      </SlideMeIn>
    </>
  );
};

export default ToolsSection;
