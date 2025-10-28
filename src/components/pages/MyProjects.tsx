import { useEffect, useRef } from "react";
import { GithubIcon, type GithubIconHandle } from "../ui/GithubIcon";
import { SlideMeIn } from "../shared/SlideMeIn";
import { portfolioProjects, externalLinks } from "@/data";
import { PortfolioGrid } from "../PortfolioGrid";
import { PortfolioCard } from "../PortfolioCard";
import { PageContainer } from "../shared/PageContainer";
import { usePageTitle } from "../../hooks/usePageTitle";
import { FeaturedPresigProject } from "../FeaturedPresigProject";
import { SectionContent } from "../shared/SectionContent";
import { SectionHeading } from "../shared/SectionHeading";
import { MemeText } from "../shared/MemeText";
import { LayoutGridIcon, type LayoutGridHandle } from "../ui/LayoutGridIcon";
import { useInView } from "@/hooks/useInView";

export const MyProjects = () => {
  const githubRef = useRef<GithubIconHandle>(null);
  const blocksRef = useRef<LayoutGridHandle>(null);
  usePageTitle("Projects | Jillo Woche");

  const { ref: blocksTitleRef, isInView: isBlocksTitleInView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (isBlocksTitleInView) {
      blocksRef.current?.startAnimation();
    } else {
      blocksRef.current?.stopAnimation();
    }
  }, [isBlocksTitleInView]);

  return (
    <PageContainer showBreadcrumbs>
      {/* Projects */}
      <SectionHeading
        rightLink={
          <div
            className="flex-shrink-0"
            onMouseEnter={() => githubRef.current?.startAnimation()}
            onMouseLeave={() => githubRef.current?.stopAnimation()}
          >
            <a
              type="button"
              className="group relative inline-flex items-center gap-x-1.5 rounded-lg border border-orange/40 bg-orange/10 hover:bg-orange/20 px-3 py-1 text-orange hover:text-orange shadow-sm hover:border-orange/60 transition-all duration-200 cursor-pointer"
              href={externalLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon
                ref={githubRef}
                className="-ml-0.5 h-4 w-4 group-hover:scale-110 transition-transform duration-200"
                aria-hidden="true"
              />
              <span className="font-bold">view github</span>
            </a>
          </div>
        }
      >
        <div
          className="flex items-center justify-start space-x-2"
          ref={blocksTitleRef}
        >
          <LayoutGridIcon
            className="text-blue-400/80"
            size={20}
            ref={blocksRef}
          />
          <span className="text-lg md:text-xl lg:text-2xl font-medium text-gray-200">
            My recent projects{" "}
          </span>
        </div>
      </SectionHeading>
      {/* Featured Project Section - Presig */}
      <SlideMeIn marginBottom="mb-0">
        <SectionContent padding="py-10 bg-blue-300/5">
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

      <MemeText text={"JavaScript: Where false == true is almost true."} />
    </PageContainer>
  );
};
