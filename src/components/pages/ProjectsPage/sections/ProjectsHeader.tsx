import type { FC } from "react";
import { useRef, useEffect } from "react";
import { SectionHeading } from "../../../shared/SectionHeading";
import { GithubIcon, type GithubIconHandle } from "../../../ui/GithubIcon";
import { LayoutGridIcon, type LayoutGridHandle } from "../../../ui/LayoutGridIcon";
import { externalLinks } from "@/data";
import { useInView } from "@/hooks/useInView";

interface ProjectsHeaderProps {}

const ProjectsHeader: FC<ProjectsHeaderProps> = () => {
  const githubRef = useRef<GithubIconHandle>(null);
  const blocksRef = useRef<LayoutGridHandle>(null);
  const { ref: blocksTitleRef, isInView: isBlocksTitleInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (isBlocksTitleInView) {
      blocksRef.current?.startAnimation();
    } else {
      blocksRef.current?.stopAnimation();
    }
  }, [isBlocksTitleInView]);

  return (
    <SectionHeading
      rightLink={
        <div
          className="flex-shrink-0"
          onMouseEnter={() => githubRef.current?.startAnimation()}
          onMouseLeave={() => githubRef.current?.stopAnimation()}
        >
          <a
            type="button"
            className="group relative inline-flex items-center gap-x-1.5 rounded-lg border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 px-3 py-1 text-[var(--color-primary)] hover:text-[var(--color-primary)] shadow-sm hover:border-[var(--color-primary)]/60 transition-all duration-200 cursor-pointer"
            href={externalLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon
              ref={githubRef}
              className="-ml-0.5 h-4 w-4 group-hover:scale-110 transition-transform duration-200"
              aria-hidden="true"
            />
            <span className="font-semibold">github</span>
          </a>
        </div>
      }
    >
      <div className="flex items-center justify-start space-x-2" ref={blocksTitleRef}>
        <LayoutGridIcon className="text-[var(--color-primary)]" size={20} ref={blocksRef} />
        <span className="text-base sm:text-xl lg:text-2xl font-medium">
          my recent projects{" "}
        </span>
      </div>
    </SectionHeading>
  );
};

export default ProjectsHeader;
