import type { FC } from "react";
import { SlideMeIn } from "../../../shared/SlideMeIn";
import { SectionContent } from "../../../shared/SectionContent";
import { PortfolioGrid } from "../../../PortfolioGrid";
import { PortfolioCard } from "../../../PortfolioCard";
import type { PortfolioProject } from "@/types";

interface ProjectFilterGridSectionProps {
  projects: PortfolioProject[];
}

const ProjectFilterGridSection: FC<ProjectFilterGridSectionProps> = ({
  projects,
}) => (
  <SectionContent className="py-10 bg-[var(--color-primary)]/3">
    <PortfolioGrid>
      {projects.map((project) => (
        <SlideMeIn key={project.title} cascade>
          <PortfolioCard {...project} />
        </SlideMeIn>
      ))}
    </PortfolioGrid>
  </SectionContent>
);

export default ProjectFilterGridSection;
