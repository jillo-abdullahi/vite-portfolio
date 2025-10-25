import { useRef } from "react";
import { AboutMeTimeline } from "../AboutMeTimeline";
import { PageContainer } from "../shared/PageContainer";
import { SectionHeading } from "../shared/SectionHeading";

import { usePageTitle } from "../../hooks/usePageTitle";
import { SlideMeIn } from "../shared/SlideMeIn";
import { SectionContent } from "../shared/SectionContent";
import { MemeText } from "../shared/MemeText";
import { DownloadIcon, type DownloadHandle } from "../ui/DownloadIcon";

export const MyResume = () => {
  const downloadRef = useRef<DownloadHandle>(null);
  usePageTitle("Resumé | Jillo Woche");

  return (
    <PageContainer showBreadcrumbs>
      <section className="w-full">
        <div className="w-full">
          <SectionHeading
            linkHref="/jillo_woche_resume.pdf"
            linkText=""
            isContactPage={false}
            isDownload={true}
            downloadFileName="Jillo_Woche_Resume.pdf"
            rightLink={
              <div
                className="flex-shrink-0"
                onMouseEnter={() => downloadRef.current?.startAnimation()}
                onMouseLeave={() => downloadRef.current?.stopAnimation()}
              >
                <a
                  type="button"
                  className="group relative inline-flex items-center gap-x-1.5 rounded-lg border border-orange/40 bg-orange/10 hover:bg-orange/20 px-3 py-1 text-orange hover:text-orange shadow-sm hover:border-orange/60 transition-all duration-200 cursor-pointer"
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
                  <span className="font-bold">download cv</span>
                </a>
              </div>
            }
          >
            My journey so far
          </SectionHeading>
        </div>

        <SlideMeIn cascade>
          <SectionContent padding="py-6 md:py-10">
            <AboutMeTimeline />
          </SectionContent>
        </SlideMeIn>
      </section>

      <MemeText text={"Deploying on Friday? Bold move, Cotton."} />
    </PageContainer>
  );
};
