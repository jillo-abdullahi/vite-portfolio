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
  <SectionContent className="py-10 bg-[var(--color-primary)]/3">
    {/* Project Filter */}
    <SlideMeIn delay={0.4} useFade>
      <ProjectFilter
        activeFilter={activeFilter}
        onFilterChange={onFilterChange}
        projectCounts={projectCounts}
      />
    </SlideMeIn>
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
            <SlideMeIn cascade>
              <PortfolioCard {...project} key={project.title} />
            </SlideMeIn>
          ))}
        </PortfolioGrid>
      </motion.div>
    </AnimatePresence>
  </SectionContent>
);

export default ProjectFilterGridSection;
