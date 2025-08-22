import type { FC, CSSProperties } from "react";
import {
  FaceSmileIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { SlideMeIn } from "@/components/shared/slideMeIn";
import Stacks from "@/components/Stacks";
import { portfolioProjects, externalLinks } from "@/data";
import ContactLinks from "@/components/ContactLinks";
import { SectionHeading } from "@/components/shared/sectionHeading";
import { AboutMeTimeline } from "@/components/AboutMeTimeline";
import { ProjectCard } from "@/components/shared/projectCard";
import WavingHand from "@/components/WavingHand";
import ContactMeForm from "@/components/ContactMeForm";
import NavBar from "@/components/NavBar";

const LandingPage: FC = () => {
  const dividerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <main>
      <header id="home">
        <div className="h-[10%] w-full max-w-7xl">
          <NavBar />
        </div>
        <div className="flex flex-col items-center justify-center relative w-full max-w-7xl mt-24 md:mt-48 px-4 md:px-0">
          <div className="w-full p-2 rounded-[2rem] border border-gray-800 w-full md:w-[82vw] shadowy bg-[#2A2F3C]">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center header-title justify-center rounded-[1.5rem] bg-[#272F37] p-4 pt-8 md:p-10 w-full">
              <div className="rounded-full bg-yellow border-8 border-[#E7A11A78] flex-shrink-0 md:mr-8">
                <div className="profile-img">
                  <img
                    src={"/src/assets/me.webp"}
                    alt="profile"
                    className="flex-shrink-0 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start content justify-start border-0 md:border-l md:border-t-0 border-gray-900 pl-0 md:pl-8 pt-4 md:pt-0">
                <div className="flex items-center space-x-1 w-full justify-center md:justify-start">
                  <WavingHand />
                  <span className="text-xl text-gray-300 font-medium flex-shrink-0">
                    Hello, I am
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline justify-center space-x-3 pt-2 w-full">
                  <span className="text-4xl text-orange font-bold flex-shrink-0">
                    Jillo Woche
                  </span>
                  <div className="hidden md:flex items-center justify-center md:justify-start space-x-1 w-fit-content md:w-full">
                    <ContactLinks />
                  </div>
                </div>
                <span className="font-semibold pt-1 text-xl text-gray-300 w-full text-center md:text-left">
                  Full Stack Software Engineer
                </span>
                <div className="description w-full max-w-3xl pt-3">
                  <p className="text-gray-200 text-center md:text-left">
                    As a Full Stack Software Engineer, I'm on a mission to build
                    amazing things - with a dash of innovation and a whole lot
                    of precision! From pixel-perfect front-ends to rock-solid
                    back-ends. I genuinely enjoy transforming intricate problems
                    into streamlined, impactful solutions within the dynamic
                    web2 and web3 realms.
                  </p>
                </div>

                <div className="flex items-center justify-center md:justify-start space-x-1 pt-4 w-full">
                  <MapPinIcon className="text-orange h-4 w-4" />{" "}
                  <span className="text-sm text-gray-300">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center justify-center space-x-1 w-full pt-2 md:hidden">
                  <ContactLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About me section  */}
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

      {/* Stacks section  */}
      <section id="stacks" className="border-0">
        <div className="mb-1 mt-20">
          <SectionHeading
            heading={"My"}
            subHeading={"tools of trade"}
            id="stack"
          />
        </div>
        <SlideMeIn>
          <div className="description w-full max-w-4xl pb-2">
            <p className="text-base text-gray-300 text-center">
              I work hard to improve my skills regularly.
            </p>
          </div>
        </SlideMeIn>
        <Stacks />
      </section>

      {/* projects section  */}
      <section id="projects" className="withBubblesBackground">
        <div className="pt-20">
          <div className="mb-1">
            <SectionHeading
              heading={"Featured"}
              subHeading={"projects"}
              id="projects"
            />
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
          <ul className="space-y-12">
            {portfolioProjects.map((project, index) => (
              <SlideMeIn cascade key={index}>
                <ProjectCard project={project} />
              </SlideMeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* contact section  */}
      <section id="contact" className="contact pb-8 withBubblesBackground">
        <div className="pt-20">
          <div className="mb-2">
            <SectionHeading
              heading={"Contact"}
              subHeading={"me"}
              id="contact"
            />
          </div>
          <div className="w-full flex flex-col space-y-4 items-center justify-center pb-4">
            <SlideMeIn>
              <div className="description w-full max-w-4xl">
                <p className="text-base text-gray-200 text-center flex items-center justify-center space-x-2">
                  <span>I would love to hear from you!</span>
                  <FaceSmileIcon className="text-orange w-5 h-5 inline" />
                </p>
              </div>
            </SlideMeIn>
            {/* button to send email and schedule call */}
            <SlideMeIn>
              <div className="flex items-center justify-start space-x-3">
                <a
                  type="button"
                  className="relative inline-flex uppercase items-center gap-x-1.5 rounded-md bg-orange px-3 py-3 text-sm font-semibold text-blue shadow-sm hover:bg-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange/80 cursor-pointer group transition"
                  href="mailto:jayloabdullahi@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EnvelopeIcon
                    className="-ml-0.5 h-5 w-5 group-hover:translate-x-0.5 transition origin-center duration-200"
                    aria-hidden="true"
                  />
                  <span>email me</span>
                </a>
                <a
                  type="button"
                  className="relative inline-flex uppercase items-center gap-x-1.5 rounded-md bg-orange px-3 py-3 text-sm font-semibold text-blue shadow-sm hover:bg-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange/80 cursor-pointer group transition"
                  href={externalLinks.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CalendarDaysIcon
                    className="-ml-0.5 h-5 w-5 group-hover:translate-x-0.5 transition origin-center duration-200"
                    aria-hidden="true"
                  />
                  <span>schedule call</span>
                </a>
              </div>
            </SlideMeIn>
          </div>
        </div>

        <div className="content flex flex-col">
          {/* divider  */}
          <SlideMeIn style={dividerStyle}>
            <div className="relative flex py-5 items-center w-full max-w-2xl self-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400 uppercase">
                or
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
          </SlideMeIn>
          <SlideMeIn>
            <ContactMeForm />
          </SlideMeIn>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
