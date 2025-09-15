import { SlideMeIn } from "../shared/slideMeIn";
import { portfolioProjects, externalLinks } from "@/data";
import { PortfolioGrid } from "../PortfolioGrid";
import { PortfolioCard } from "../PortfolioCard";
import Stacks from "../Stacks";
import { PageContainer } from "../shared/PageContainer";
import { SectionHeading } from "../shared/PageTitle";
import { usePageTitle } from "../../hooks/usePageTitle";
import { RxExternalLink } from "react-icons/rx";

export const MyProjects = () => {
  usePageTitle("Projects | Jillo Woche");

  return (
    <PageContainer>
      {/* Stacks */}
      <section>
        <SectionHeading>My Tools</SectionHeading>
        <Stacks />
      </section>

      {/* Projects */}
      <section>
        <div className="pt-10">
          <SectionHeading
            linkHref={externalLinks.github}
            linkText="See GitHub"
            linkTextIcon={<RxExternalLink className="inline-block" />}
          >
            Some of My Recent Projects.
          </SectionHeading>
        </div>
        <div className="pt-6">
          <PortfolioGrid>
            {portfolioProjects.map((project, index) => (
              <SlideMeIn cascade key={index}>
                <PortfolioCard {...project} />
              </SlideMeIn>
            ))}
          </PortfolioGrid>
        </div>
      </section>
    </PageContainer>
  );
};
