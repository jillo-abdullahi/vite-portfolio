import type { FC } from "react";
import { useEffect, useRef } from "react";
import { LuMapPinHouse } from "react-icons/lu";

import WavingHand from "@/components/WavingHand";
import { SlideMeIn } from "../shared/SlideMeIn";
import { PageContainer } from "../shared/PageContainer";
import SkillSplitBar from "../SkillSplitBar";
import { StatusPill, StatusType } from "../shared/StatusPill";
import { BiLogoTypescript } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SectionContent } from "../shared/SectionContent";

import Typewriter from "@/components/shared/Typewriter";
import { ScheduleCallBtn } from "../ScheduleCallBtn";
import { ViewProjectsBtn } from "../ViewProjectsBtn";
import { SectionHeading } from "../shared/SectionHeading";
import Testimonials from "../Testimonials";
import Stacks from "../Stacks";
import { FlipWords } from "../ui/shadcn-io/flip-words";
import Timer from "../Timer";
import { MemeText } from "../shared/MemeText";
import { SwordsIcon, type SwordsIconHandle } from "../ui/SwordsIcon";
import { HeartIcon, type HeartIconHandle } from "../ui/HeartIcon";
import { useInView } from "@/hooks/useInView";
import { FlickeringGrid } from "../ui/shadcn-io/flickering-grid";

const LandingPage: FC = () => {
  const swordsRef = useRef<SwordsIconHandle>(null);
  const heartRef = useRef<HeartIconHandle>(null);
  const { ref: swordTitleRef, isInView: isSwordTitleInView } = useInView({
    threshold: 0.1,
  });
  const { ref: heartTitleRef, isInView: isHeartTitleInView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (isSwordTitleInView) {
      swordsRef.current?.startAnimation();
    } else {
      swordsRef.current?.stopAnimation();
    }
  }, [isSwordTitleInView]);

  useEffect(() => {
    if (isHeartTitleInView) {
      heartRef.current?.startAnimation();
    } else {
      heartRef.current?.stopAnimation();
    }
  }, [isHeartTitleInView]);

  // words for role description
  const words = ["scalable.", "fast.", "modern."];
  return (
    <PageContainer>
      <SlideMeIn>
        <SectionContent padding="py-6 md:py-10 bg-blue-300/5">
          <div
            className="group relative border rounded-3xl p-6 pt-8 md:p-8 bg-transparent hover:-translate-y-0.5 transition-all duration-300 ease-out border-gray-700/80 hover:border-gray-600/60 w-full overflow-hidden"
            style={{
              backgroundImage: "url('/icon-bg.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Subtle hover overlay */}
            <div className="absolute inset-0 rounded-xl bg-orange/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center">
              <div className="relative rounded-full border-6 border-orange/40 flex-shrink-0 md:mr-8 group-hover:border-orange/50 transition-all duration-300">
                {/* Image and flickering grid wrapper with overflow-hidden */}
                <div className="relative overflow-hidden rounded-full">
                  <img
                    src={"/me.webp"}
                    alt="profile"
                    className="flex-shrink-0 w-56 h-56 md:w-64 md:h-64 rounded-full border-[7px] border-orange transition-all duration-300 group-hover:border-6"
                  />
                  <FlickeringGrid
                    className="-z-100 absolute inset-0 size-full"
                    squareSize={8}
                    gridGap={6}
                    color="#d19115"
                    maxOpacity={0.3}
                    flickerChance={0.4}
                  />
                </div>

                {/* Status pill outside overflow context */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 md:-bottom-2 md:left-1/2 md:transform md:-translate-x-1/2">
                  <StatusPill status={StatusType.CRAFTING} />
                </div>
              </div>

              <div className="flex flex-col items-start justify-start border-0 md:border-l md:border-t-0 border-gray-700/40 pl-0 md:pl-8 pt-4 md:pt-0">
                <div className="flex items-center space-x-1 w-full justify-center md:justify-start pb-2 sm:pb-4">
                  <WavingHand />
                  <span className="text-xl text-gray-400 font-medium pt-1">
                    Hello, I am
                  </span>
                </div>

                <span className="text-2xl md:text-3xl text-orange font-bold flex-shrink-0 text-center md:text-left pt-1 w-full uppercase idle-float">
                  Jillo Woche,
                </span>
                <span className="font-semibold pt-1 text-xl sm:text-2xl text-gray-300 w-full text-center md:text-left">
                  <Typewriter
                    phrases={[
                      "Full Stack Engineer.",
                      "Frontend Engineer.",
                      "Web3 Developer.",
                    ]}
                    speed={40}
                  />
                </span>
                <div className="flex items-center justify-center md:justify-start space-x-1 pt-1 w-full">
                  <LuMapPinHouse className="text-orange/80 h-4 w-4" />
                  <span className="text-gray-300/70 font-semibold">
                    Nairobi, Kenya
                  </span>
                </div>

                <div className="w-full max-w-3xl pt-6">
                  <p className="text-gray-400 text-center md:text-left text-lg md:text-xl tracking-wide leading-[1.3] font-medium">
                    <span>
                      I build pixel-perfect, robust web apps that are{" "}
                      <FlipWords
                        words={words}
                        duration={2500}
                        className="text-orange/80 font-semibold px-0 w-12"
                      />
                    </span>
                    <br />
                    Backed by{" "}
                    <span className="text-orange/80 font-semibold">
                      6+ years
                    </span>{" "}
                    <span>
                      of experience driving user growth and conversion across
                      the evolving Web2 and Web3 spaces.
                    </span>
                  </p>
                </div>

                <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row items-center md:items-start justify-center lg:justify-start space-x-0 lg:space-x-3 pt-8 w-full">
                  <ScheduleCallBtn />
                  <ViewProjectsBtn />
                </div>
              </div>
            </div>
          </div>
        </SectionContent>
      </SlideMeIn>

      {/* Main stack */}
      <SlideMeIn marginBottom="mb-3">
        <SectionContent padding="py-6 md:py-10 bg-blue-300/5">
          <div
            className="group relative border rounded-3xl p-5 bg-transparent hover:-translate-y-0.5 transition-all duration-300 ease-out border-gray-700/80 hover:border-gray-600/60 w-full"
            style={{
              backgroundImage: "url('/icon-bg.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Subtle hover overlay */}
            <div className="absolute inset-0 rounded-xl bg-orange/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              {/* skill split bar  */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="text-center md:text-left md:flex-shrink-0">
                  <p className="text-lg font-medium text-gray-200">
                    Focus<sup>*</sup>
                  </p>
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

              {/* Main stack  */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mt-6">
                <div className="text-center md:text-left">
                  <p className="text-lg font-medium text-gray-200">
                    Main stack
                  </p>
                </div>

                <div className="flex-1 flex flex-wrap justify-center md:justify-end items-center gap-2">
                  <div className="flex items-center space-x-2 rounded-lg px-3 py-1.5 bg-gray-800/60 hover:bg-gray-800/80 hover:border-gray-600/60 transition-all duration-200 cursor-pointer border border-transparent group-hover:border-gray-700">
                    <FaReact className="text-blue-400 h-4.5 w-4.5" />
                    <span className="text-gray-300 font-medium text-sm">
                      React
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 rounded-lg px-3 py-1.5 bg-gray-800/60 hover:bg-gray-800/80 hover:border-gray-600/60 transition-all duration-200 cursor-pointer border border-transparent group-hover:border-gray-700">
                    <BiLogoTypescript className="text-blue-400 h-4.5 w-4.5" />
                    <span className="text-gray-300 font-medium text-sm">
                      TypeScript
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg px-3 py-1.5 bg-gray-800/60 hover:bg-gray-800/80 hover:border-gray-600/60 transition-all duration-200 cursor-pointer border border-transparent group-hover:border-gray-700">
                    <FaNodeJs className="text-green-400 h-4.5 w-4.5" />
                    <span className="text-gray-300 font-medium text-sm">
                      Node.js
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 rounded-lg px-3 py-1.5 bg-gray-800/60 hover:bg-gray-800/80 hover:border-gray-600/60 transition-all duration-200 cursor-pointer border border-transparent group-hover:border-gray-700">
                    <GrGraphQl className="text-pink-400 h-4.5 w-4.5" />
                    <span className="text-gray-300 font-medium text-sm">
                      GraphQL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContent>
      </SlideMeIn>

      <div className="mb-3 w-full flex items-center justify-end">
        <SectionContent padding="py-0">
          <Timer />
        </SectionContent>
      </div>

      {/* My tools */}
      <SectionHeading>
        <div
          className="flex items-center justify-start space-x-2"
          ref={swordTitleRef}
        >
          <SwordsIcon className="text-green-400/60" size={20} ref={swordsRef} />
          <span className="text-lg md:text-xl lg:text-2xl font-medium text-gray-200">
            My tools
          </span>
        </div>
      </SectionHeading>
      <SlideMeIn>
        <SectionContent>
          <section>
            <Stacks />
          </section>
        </SectionContent>
      </SlideMeIn>

      {/* Testimonials */}
      <SectionHeading isContactPage={false}>
        <div
          className="flex items-center justify-start space-x-2"
          ref={heartTitleRef}
        >
          <HeartIcon className="text-pink-400" size={20} ref={heartRef} />
          <span className="text-lg md:text-xl lg:text-2xl font-medium text-gray-200">
            What people say
          </span>
        </div>
      </SectionHeading>
      <SlideMeIn cascade>
        <SectionContent padding="py-6 md:py-10 bg-blue-300/5">
          <Testimonials />
        </SectionContent>
      </SlideMeIn>

      <MemeText text={"You gotta put your behind in your past"} />
    </PageContainer>
  );
};

export default LandingPage;
