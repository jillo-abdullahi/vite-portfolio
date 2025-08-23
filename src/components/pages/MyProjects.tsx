import { SlideMeIn } from "../shared/slideMeIn";
import { portfolioProjects, externalLinks } from "@/data";
import { PortfolioGrid } from "../PortfolioGrid";
import { PortfolioCard } from "../PortfolioCard";
import Stacks from "../Stacks";
import { PageContainer } from "../shared/PageContainer";

export const MyProjects = () => {
  return (
    <PageContainer>
      <Stacks />
      <section id="projects" className="withBubblesBackground">
        <div className="pt-20">
          <div className="mb-1">
            {/* <SectionHeading
              heading={"Featured"}
              subHeading={"projects"}
              id="projects"
            /> */}
          </div>
          <div className="w-full flex items-center justify-center">
            <SlideMeIn>
              <div className="description w-full max-w-4xl">
                <p className="text-base text-gray-300 text-center px-5">
                  A sneak peek at my latest creations. Craving more? My{" "}
                  <a
                    href={externalLinks.repositories}
                    className="text-orange hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github profile's
                  </a>{" "}
                  got the goods!
                </p>
              </div>
            </SlideMeIn>
          </div>
        </div>

        <div className="content">
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
