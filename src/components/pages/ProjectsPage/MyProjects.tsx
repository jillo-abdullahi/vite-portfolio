import { useState, useMemo } from "react";
import { portfolioProjects } from "@/data";
import { PageContainer } from "../../shared/PageContainer";
import ProjectsHeader from "./sections/ProjectsHeader";
import { MemeText } from "../../shared/MemeText";
import ProjectFilterGridSection from "./sections/ProjectFilterGridSection";
import type { ProjectCategory } from "@/types";
import { usePageTitle } from "@/hooks/usePageTitle";

export const MyProjects = () => {
  usePageTitle("Projects | Jillo Woche");
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">(
    "All"
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return portfolioProjects;
    }
    return portfolioProjects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  const projectCounts = useMemo(() => {
    const counts: Record<ProjectCategory | "All", number> = {
      All: portfolioProjects.length,
      Web3: 0,
      "Full Stack": 0,
      Frontend: 0,
      Backend: 0,
    };

    portfolioProjects.forEach((project) => {
      if (project.category) {
        counts[project.category]++;
      }
    });

    return counts;
  }, []);

  return (
    <PageContainer showBreadcrumbs>
      <ProjectsHeader />

      <ProjectFilterGridSection
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        projectCounts={projectCounts}
        filteredProjects={filteredProjects}
      />

      <MemeText text={"JavaScript: Where false == true is almost true."} />
    </PageContainer>
  );
};
