import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AboutMeTimeline } from "../AboutMeTimeline";
import { PageContainer } from "../shared/PageContainer";
import { SectionHeading } from "../shared/SectionHeading";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { MdOutlineFileDownload } from "react-icons/md";

import { externalLinks } from "@/data";
import Testimonials from "../Testimonials";
import { usePageTitle } from "../../hooks/usePageTitle";
import { SlideMeIn } from "../shared/SlideMeIn";
import { SectionContent } from "../shared/SectionContent";
import { MemeText } from "../shared/MemeText";

export const MyResume = () => {
  usePageTitle("Resumé | Jillo Woche");

  return (
    <PageContainer showBreadcrumbs>
      <section className="w-full">
        <div className="w-full">
          <SectionHeading
            linkHref="/jillo_woche_resume.pdf"
            linkText="Download CV"
            linkTextIcon={
              <MdOutlineFileDownload className="inline-block w-6 h-6" />
            }
            isContactPage={false}
            isDownload={true}
            downloadFileName="Jillo_Woche_Resume.pdf"
            rightLink={
              <a href={externalLinks.linkedIn} target="_blank" rel="noreferrer">
                <div className="group rounded-lg bg-gray-700/50 hover:bg-gray-700/90 border-gray-700 border p-1 w-10 h-10 flex items-center justify-center transition duration-300">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-gray-300 group-hover:scale-110 transition-all duration-300 group-hover:text-orange"
                  />
                </div>
              </a>
            }
          >
            My Journey So Far.
          </SectionHeading>
        </div>

        <SlideMeIn cascade>
          <SectionContent padding="py-6 md:py-10">
            <AboutMeTimeline />
          </SectionContent>
        </SlideMeIn>
      </section>

      <section className="w-full pt-14">
        <div className="w-full">
          <SectionHeading isContactPage={false}>What People Say</SectionHeading>
        </div>
        <SlideMeIn cascade>
          <SectionContent padding="py-6 md:py-10">
            <Testimonials />
          </SectionContent>
        </SlideMeIn>
      </section>

      <MemeText
        text={
          "Deploying on Friday? Bold move, Cotton."
        }
      />
    </PageContainer>
  );
};
