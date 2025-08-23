import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AboutMeTimeline } from "../AboutMeTimeline";
import { PageContainer } from "../shared/PageContainer";
import { SectionHeading } from "../shared/SectionHeading";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { externalLinks } from "@/data";

export const MyResume = () => {
  return (
    <PageContainer>
      <section className="px-4 w-full">
        <div className="w-full">
          <SectionHeading
            linkHref="/jillo_woche_resume.pdf"
            linkText="Download resumé"
            isContactPage={false}
            isDownload={true}
            downloadFileName="Jillo_Woche_Resume.pdf"
            rightLink={
              <a href={externalLinks.linkedIn} target="_blank" rel="noreferrer">
                <div className="rounded-md bg-gray-700/50 hover:bg-gray-700/90 border-gray-700 border p-2 w-10 h-10 flex items-center justify-center transition duration-300">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-gray-300 w-5 h-5"
                  />
                </div>
              </a>
            }
          >
            My Journey So Far.
          </SectionHeading>
        </div>

        <div className="flex flex-col space-y-10 items-center w-full pt-4">
          <div className="flex flex-col space-y-2">
            <AboutMeTimeline />
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
