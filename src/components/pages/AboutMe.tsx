import { AboutMeTimeline } from "../AboutMeTimeline";
import { PageContainer } from "../shared/PageContainer";
import { SectionHeading } from "../shared/sectionHeading";
import { SlideMeIn } from "../shared/slideMeIn";

export const AboutMe = () => {
  return (
    <PageContainer>
      <section id="about" className="px-4 bg-[#272F37]">
        <div className="mb-1 mt-20">
          <SectionHeading
            heading={"Education and work experience"}
            id="education"
          />
        </div>
        <SlideMeIn>
          <div className="description w-full max-w-4xl pb-2">
            <p className="text-base text-gray-300 text-center">
              Navigating my journey through academia and the professional world.
            </p>
          </div>
        </SlideMeIn>

        <div className="content pt-6 border-0">
          <div className="flex flex-col space-y-10 items-center w-full">
            <div className="flex flex-col space-y-2">
              <AboutMeTimeline />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
