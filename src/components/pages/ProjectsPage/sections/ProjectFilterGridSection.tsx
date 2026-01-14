import type { FC } from "react";
import { SlideMeIn } from "../../../shared/SlideMeIn";
import { SectionContent } from "../../../shared/SectionContent";
import { ProjectFilter } from "../../../ProjectFilter";
import { PortfolioGrid } from "../../../PortfolioGrid";
import { PortfolioCard } from "../../../PortfolioCard";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectCategory, PortfolioProject } from "@/types";

interface ProjectFilterGridSectionProps {
  activeFilter: ProjectCategory | "All";
  onFilterChange: (cat: ProjectCategory | "All") => void;
  projectCounts: Record<ProjectCategory | "All", number>;
  filteredProjects: PortfolioProject[];
}

const ProjectFilterGridSection: FC<ProjectFilterGridSectionProps> = ({
  activeFilter,
  onFilterChange,
  projectCounts,
  filteredProjects,
}) => (
  <SlideMeIn cascade>
    <SectionContent padding="py-10 bg-[var(--color-primary)]/3">
      {/* Project Filter */}
      <ProjectFilter
        activeFilter={activeFilter}
        onFilterChange={onFilterChange}
        projectCounts={projectCounts}
      />
      {/* other projects */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <PortfolioGrid>
            {filteredProjects.map((project) => (
              <PortfolioCard {...project} key={project.title} />
            ))}
          </PortfolioGrid>
        </motion.div>
      </AnimatePresence>
    </SectionContent>
  </SlideMeIn>
);

export default ProjectFilterGridSection;
