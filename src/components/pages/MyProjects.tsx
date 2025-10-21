import { SlideMeIn } from "../shared/SlideMeIn";
import { portfolioProjects, externalLinks } from "@/data";
import { PortfolioGrid } from "../PortfolioGrid";
import { PortfolioCard } from "../PortfolioCard";
import Stacks from "../Stacks";
import { PageContainer } from "../shared/PageContainer";
import { usePageTitle } from "../../hooks/usePageTitle";
import { FeaturedPresigProject } from "../FeaturedPresigProject";
import { SectionContent } from "../shared/SectionContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SectionHeading } from "../shared/SectionHeading";
import { MemeText } from "../shared/MemeText";

export const MyProjects = () => {
  usePageTitle("Projects | Jillo Woche");

  return (
    <PageContainer showBreadcrumbs>
      <SectionHeading>My Tools</SectionHeading>
      <SlideMeIn>
        <SectionContent>
          <section>
            <Stacks />
          </section>
        </SectionContent>
      </SlideMeIn>

      {/* Projects */}
      <section>
        <div className="pt-10">
          <SectionHeading
            rightLink={
              <a href={externalLinks.github} target="_blank" rel="noreferrer">
                <div className="group rounded-lg bg-gray-700/50 hover:bg-gray-700/90 border-gray-700 border p-1 w-10 h-10 flex items-center justify-center transition duration-300">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-gray-300 group-hover:scale-110 transition-all duration-300 group-hover:text-orange"
                  />
                </div>
              </a>
            }
          >
            Some of My Recent Projects.
          </SectionHeading>
        </div>
        {/* Featured Project Section - Presig */}
        <SlideMeIn marginBottom="mb-0">
          <SectionContent padding="py-10">
            <FeaturedPresigProject />
          </SectionContent>
        </SlideMeIn>

        <div className="pt-6">
          <SlideMeIn cascade>
            <SectionContent padding="py-10">
              {/* other projects */}
              <PortfolioGrid>
                {portfolioProjects.map((project, index) => (
                  <PortfolioCard {...project} key={index} />
                ))}
              </PortfolioGrid>
            </SectionContent>
          </SlideMeIn>
        </div>
      </section>

      <MemeText
        text={
          "Any is the JavaScript inside TypeScript trying to break free."
        }
      />
    </PageContainer>
  );
};
