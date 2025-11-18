import { useEffect, useRef } from "react";
import { AboutMeTimeline } from "../AboutMeTimeline";
import { PageContainer } from "../shared/PageContainer";
import { SectionHeading } from "../shared/SectionHeading";

import { usePageTitle } from "../../hooks/usePageTitle";
import { SlideMeIn } from "../shared/SlideMeIn";
import { SectionContent } from "../shared/SectionContent";
import { MemeText } from "../shared/MemeText";
import { DownloadIcon, type DownloadHandle } from "../ui/DownloadIcon";
import { GlobeIcon, type GlobeIconHandle } from "../ui/GlobeIcon";
import { useInView } from "@/hooks/useInView";

export const MyResume = () => {
  const downloadRef = useRef<DownloadHandle>(null);
  const globeRef = useRef<GlobeIconHandle>(null);
  usePageTitle("Resumé | Jillo Woche");

  const { ref: globeTitleRef, isInView: isGlobeTitleInView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (isGlobeTitleInView) {
      globeRef.current?.startAnimation();
    } else {
      globeRef.current?.stopAnimation();
    }
  }, [isGlobeTitleInView]);

  return (
    <PageContainer showBreadcrumbs>
      <section className="w-full">
        <div className="w-full">
          <SectionHeading
            linkText=""
            isContactPage={false}
            rightLink={
              <div
                className="flex-shrink-0"
                onMouseEnter={() => downloadRef.current?.startAnimation()}
                onMouseLeave={() => downloadRef.current?.stopAnimation()}
              >
                <a
                  type="button"
                  className="group relative inline-flex items-center gap-x-1.5 rounded-lg border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 px-3 py-1 text-[var(--color-primary)] hover:text-[var(--color-primary)] shadow-sm hover:border-[var(--color-primary)]/60 transition-all duration-200 cursor-pointer"
                  href="/jillo_woche_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download={true}
                >
                  <DownloadIcon
                    ref={downloadRef}
                    className="-ml-0.5 h-4 w-4 group-hover:scale-110 transition-transform duration-200"
                    aria-hidden="true"
                  />
                  <span className="font-semibold">download cv</span>
                </a>
              </div>
            }
          >
            <div
              className="flex items-center justify-start space-x-2"
              ref={globeTitleRef}
            >
              <GlobeIcon
                className="text-[var(--color-primary)]/80"
                size={20}
                ref={globeRef}
              />
              <span className="text-base sm:text-xl lg:text-2xl font-medium text-gray-200">
                my journey so far
              </span>
            </div>
          </SectionHeading>
        </div>

        <SlideMeIn>
          <SectionContent padding="py-6 md:py-10 bg-[var(--color-primary)]/3">
            <AboutMeTimeline />
          </SectionContent>
        </SlideMeIn>
      </section>

      <MemeText text={"Deploying on Friday? Bold move, Cotton."} />
    </PageContainer>
  );
};
