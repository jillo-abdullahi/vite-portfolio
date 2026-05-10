import { portfolioProjects } from "@/data";
import { PageContainer } from "../../shared/PageContainer";
import ProjectsHeader from "./sections/ProjectsHeader";
import ProjectFilterGridSection from "./sections/ProjectFilterGridSection";
import { usePageTitle } from "@/hooks/usePageTitle";

export const MyProjects = () => {
  usePageTitle("Projects | Jillo Woche");

  return (
    <PageContainer showBreadcrumbs>
      <ProjectsHeader />
      <ProjectFilterGridSection projects={portfolioProjects} />
    </PageContainer>
  );
};
