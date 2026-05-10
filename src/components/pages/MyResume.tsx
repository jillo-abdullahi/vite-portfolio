import { AboutMeTimeline } from "../AboutMeTimeline";
import { PageContainer } from "../shared/PageContainer";
import { SectionHeading } from "../shared/SectionHeading";

import { usePageTitle } from "../../hooks/usePageTitle";
import { SectionContent } from "../shared/SectionContent";
import { DownloadResumeBtn } from "../DownloadResumeBtn";

export const MyResume = () => {
  usePageTitle("Resumé | Jillo Woche");

  return (
    <PageContainer showBreadcrumbs>
      <SectionHeading
        linkText=""
        isContactPage={false}
        rightLink={
          <div className="flex-shrink-0">
            <DownloadResumeBtn isMobile />
          </div>
        }
      >
        <span className="text-xl lg:text-2xl font-medium">
          resumé
        </span>
      </SectionHeading>

      <SectionContent className="py-6 md:py-10 bg-[var(--color-primary)]/3">
        <AboutMeTimeline />
      </SectionContent>
    </PageContainer>
  );
};
