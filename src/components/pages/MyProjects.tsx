import { SlideMeIn } from "../shared/slideMeIn";
import { portfolioProjects, externalLinks } from "@/data";
import { PortfolioGrid } from "../PortfolioGrid";
import { PortfolioCard } from "../PortfolioCard";
import Stacks from "../Stacks";
import { PageContainer } from "../shared/PageContainer";
import { SectionHeading } from "../shared/PageTitle";

export const MyProjects = () => {
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
          <SectionHeading linkHref={externalLinks.github} linkText="See GitHub">
            Some of My Recent Projects.
          </SectionHeading>
        </div>

        <PortfolioGrid>
          {portfolioProjects.map((project, index) => (
            <SlideMeIn cascade key={index}>
              <PortfolioCard {...project} />
            </SlideMeIn>
          ))}
        </PortfolioGrid>
      </section>
    </PageContainer>
  );
};
