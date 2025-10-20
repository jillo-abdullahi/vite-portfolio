import type { FC } from "react";
import { LuMapPinHouse } from "react-icons/lu";

import ContactLinks from "@/components/ContactLinks";
import WavingHand from "@/components/WavingHand";
import { SlideMeIn } from "../shared/slideMeIn";
import { PageContainer } from "../shared/PageContainer";
import SkillSplitBar from "../SkillSplitBar";
import { StatusPill, StatusType } from "../shared/StatusPill";
import { IoChevronForward } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { SiSolidity } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SectionContent } from "../shared/SectionContent";
import { Link } from "@tanstack/react-router";

const LandingPage: FC = () => {
  /**
   * A styled React Router Link component that navigates to the "/projects" route.
   *
   * The link displays the text "Projects" with an orange-themed rounded appearance,
   * and includes a forward chevron icon (`IoChevronForward`) that animates slightly on hover.
   *
   * @remarks
   * - Uses Tailwind CSS utility classes for styling and transitions.
   * - Intended for use as a navigation element to the projects page.
   */
  const projectsLink = (
    <Link
      to="/projects"
      className="rounded-full text-orange group py-1 pl-3 pr-2 border border-orange/30 flex items-center space-x-1 font-medium transition-all duration-300 bg-orange/10 hover:bg-orange/20"
    >
      <span className="font-semibold text-sm">Projects</span>
      <IoChevronForward className="inline-block group-hover:translate-x-0.5 transition-all duration-300" />
    </Link>
  );

  return (
    <PageContainer>
      {/* <SlideMeIn>
        <SectionContent>
          <></>
        </SectionContent>
      </SlideMeIn> */}

      <SlideMeIn>
        <SectionContent padding="py-6 md:py-10">
          <div className="group relative border rounded-3xl p-6 pt-8 md:p-8 bg-gray-900/70 hover:bg-gray-900/80 hover:-translate-y-0.5 transition-all duration-300 ease-out border-gray-700/40 hover:border-gray-600/60 w-full">
            {/* Subtle hover overlay */}
            <div className="absolute inset-0 rounded-xl bg-orange/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center">
              <div className="relative rounded-full border-6 border-[#E7A11A78] flex-shrink-0 md:mr-8">
                <div className="profile-img">
                  <img
                    src={"/me.webp"}
                    alt="profile"
                    className="flex-shrink-0 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg"
                  />
                </div>
                {/* Status indicator */}
                <div className="absolute -bottom-2 right-1 md:-bottom-2 md:right-2">
                  <StatusPill status={StatusType.CRAFTING} />
                </div>
              </div>

              <div className="flex flex-col items-start justify-start border-0 md:border-l md:border-t-0 border-gray-700/40 pl-0 md:pl-8 pt-4 md:pt-0">
                <div className="flex items-center space-x-1 w-full justify-center md:justify-start pb-2 sm:pb-4">
                  <WavingHand />
                  <span className="text-xl text-gray-400 font-medium">
                    Hello, I am
                  </span>
                </div>

                <span className="text-2xl md:text-3xl text-orange font-bold flex-shrink-0 text-center md:text-left pt-1 w-full uppercase">
                  Jillo Woche,
                </span>
                <span className="font-semibold pt-1 text-xl sm:text-2xl text-gray-300 w-full text-center md:text-left">
                  Full Stack Software Engineer.
                </span>
                <div className="flex items-center justify-center md:justify-start w-full pt-2">
                  <Link
                    to="/resume"
                    className="group flex items-center justify-center space-x-2 border border-orange/30 rounded-full px-3 py-1 bg-orange/10 hover:bg-orange/20 transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-orange font-semibold text-sm">
                      6+ years of experience
                    </span>
                    <IoChevronForward className="text-orange group-hover:translate-x-0.5 transition-all duration-300" />
                  </Link>
                </div>

                <div className="w-full max-w-3xl pt-6">
                  <p className="text-gray-300/90 text-center md:text-left text-base md:text-xl">
                    I build cool things for the web -{" "}
                    <b>pixel-perfect frontends,</b>
                    <b> rock-solid backends,</b> and the occasional{" "}
                    <b>Web3 magic trick</b>.
                  </p>
                </div>

                <div className="flex items-center justify-center md:justify-start space-x-1 pt-4 w-full">
                  <LuMapPinHouse className="text-orange/80 h-4 w-4" />
                  <span className="text-md text-gray-300 font-semibold">
                    Nairobi, Kenya
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start space-x-1 w-full pt-2">
                  <ContactLinks />
                </div>
              </div>
            </div>
          </div>
        </SectionContent>
      </SlideMeIn>

      <SlideMeIn>
        <SectionContent padding="py-6 md:py-10">
          <div className="group relative border rounded-3xl p-5 bg-gray-900/70 hover:bg-gray-900/80 hover:-translate-y-0.5 transition-all duration-300 ease-out border-gray-700/40 hover:border-gray-600/60 w-full">
            {/* Subtle hover overlay */}
            <div className="absolute inset-0 rounded-xl bg-orange/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              {/* skill split bar  */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="text-center md:text-left md:flex-shrink-0">
                  <p className="text-lg font-medium text-gray-200">Focus</p>
                </div>
                <div className="flex-1 flex justify-center md:justify-end">
                  <SkillSplitBar
                    leftLabel="Frontend"
                    rightLabel="Backend"
                    leftPercent={70}
                    height={35}
                  />
                </div>
              </div>

              {/* Main languages  */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mt-6">
                <div className="text-center md:text-left">
                  <p className="text-lg font-medium text-gray-200">Languages</p>
                </div>

                <div className="flex-1 flex flex-wrap justify-center md:justify-end items-center gap-2">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border border-gray-700/40 rounded-xl px-3 py-1.5 bg-gray-800/60 hover:bg-gray-800/80 hover:border-gray-600/60 transition-all duration-200 cursor-pointer"
                  >
                    <RiJavascriptFill className="text-yellow-400 h-4.5 w-4.5" />
                    <span className="text-gray-300 font-medium text-sm">
                      JavaScript
                    </span>
                  </a>

                  <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border border-gray-700/40 rounded-xl px-3 py-1.5 bg-gray-800/60 hover:bg-gray-800/80 hover:border-gray-600/60 transition-all duration-200 cursor-pointer"
                  >
                    <BiLogoTypescript className="text-blue-400 h-4.5 w-4.5" />
                    <span className="text-gray-300 font-medium text-sm">
                      TypeScript
                    </span>
                  </a>

                  <a
                    href="https://soliditylang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border border-gray-700/40 rounded-xl px-3 py-1.5 bg-gray-800/60 hover:bg-gray-800/80 hover:border-gray-600/60 transition-all duration-200 cursor-pointer"
                  >
                    <SiSolidity className="text-gray-300 h-4.5 w-4.5" />
                    <span className="text-gray-300 font-medium text-sm">
                      Solidity
                    </span>
                  </a>
                  <div className="hidden sm:block">{projectsLink}</div>
                </div>
                <div className="block sm:hidden w-full flex items-center justify-center">
                  {projectsLink}
                </div>
              </div>
            </div>
          </div>
        </SectionContent>
      </SlideMeIn>
    </PageContainer>
  );
};

export default LandingPage;
