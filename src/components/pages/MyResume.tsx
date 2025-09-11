import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AboutMeTimeline } from "../AboutMeTimeline";
import { PageContainer } from "../shared/PageContainer";
import { SectionHeading } from "../shared/PageTitle";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { externalLinks } from "@/data";
import Testimonials from "../Testimonials";
import { usePageTitle } from "../../hooks/usePageTitle";

export const MyResume = () => {
  usePageTitle("Resumé | Jillo Woche");

  return (
    <PageContainer>
      <section className="w-full">
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

        <div className="pt-4">
          <AboutMeTimeline />
        </div>
      </section>
      <section className="w-full pt-14">
        <div className="w-full">
          <SectionHeading
            isContactPage={false}
            linkText="View on LinkedIn"
            linkHref={externalLinks.linkedIn}
          >
            What People Say.
          </SectionHeading>
        </div>

        <div className="pt-4">
          <Testimonials />
        </div>
      </section>
    </PageContainer>
  );
};
