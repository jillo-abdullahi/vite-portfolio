import { useEffect, useRef, useState, useMemo } from "react";
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
import { ProjectFilter } from "../ProjectFilter";
import type { ProjectCategory } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

export const MyProjects = () => {
  const githubRef = useRef<GithubIconHandle>(null);
  const blocksRef = useRef<LayoutGridHandle>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");
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

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return portfolioProjects;
    }
    return portfolioProjects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  // Calculate project counts for each category
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
              className="group relative inline-flex items-center gap-x-1.5 rounded-lg border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 px-3 py-1 text-[var(--color-primary)] hover:text-[var(--color-primary)] shadow-sm hover:border-[var(--color-primary)]/60 transition-all duration-200 cursor-pointer"
              href={externalLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon
                ref={githubRef}
                className="-ml-0.5 h-4 w-4 group-hover:scale-110 transition-transform duration-200"
                aria-hidden="true"
              />
              <span className="font-semibold">github</span>
            </a>
          </div>
        }
      >
        <div
          className="flex items-center justify-start space-x-2"
          ref={blocksTitleRef}
        >
          <LayoutGridIcon
            className="text-[var(--color-primary)]"
            size={20}
            ref={blocksRef}
          />
          <span className="text-base sm:text-xl lg:text-2xl font-medium">
            my recent projects{" "}
          </span>
        </div>
      </SectionHeading>
      {/* Featured Project Section - Presig */}
      <SlideMeIn marginBottom="mb-0">
        <SectionContent padding="py-10 bg-[var(--color-primary)]/3">
          <FeaturedPresigProject />
        </SectionContent>
      </SlideMeIn>

      <div className="pt-6">
        <SlideMeIn cascade>
          <SectionContent padding="py-10 bg-[var(--color-primary)]/3">
            {/* Project Filter */}
            <ProjectFilter
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
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
      </div>

      <MemeText text={"JavaScript: Where false == true is almost true."} />
    </PageContainer>
  );
};
