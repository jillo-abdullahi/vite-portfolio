import type { FC } from "react";
// import { useRef } from "react";
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

// import {
//   // ChevronDownIcon,
//   type ChevronDownIconHandle,
// } from "../ui/ChevronDownIcon";

const LandingPage: FC = () => {
  // const chevronRef = useRef<ChevronDownIconHandle>(null);
  // const SCROLL_HINT_DELAY = 10000; // Delay in milliseconds before showing the scroll hint
  // const [showScrollHint, setShowScrollHint] = useState(false);
  // words for role description
  const words = ["scalable.", "fast.", "modern."];

  // show scroll hint after delay
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowScrollHint(true);
  //   }, SCROLL_HINT_DELAY);
  // }, []);

  // // chevron down icon animation for scroll hint
  // useEffect(() => {
  //   setInterval(() => {
  //     chevronRef.current?.startAnimation();
  //     setTimeout(() => {
  //       chevronRef.current?.stopAnimation();
  //     }, 2000);
  //   }, 5000);
  // }, []);

  return (
    <PageContainer>
      <SlideMeIn>
        <SectionContent padding="py-6 md:py-10">
          <div className="group relative border rounded-3xl p-6 pt-8 md:p-8 bg-gray-900/80 hover:bg-gray-900/80 hover:-translate-y-0.5 transition-all duration-300 ease-out border-gray-700/80 hover:border-gray-600/60 w-full overflow-hidden">
            {/* Subtle hover overlay */}
            <div className="absolute inset-0 rounded-xl bg-orange/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center">
              <div className="relative rounded-full border-6 border-orange/40 flex-shrink-0 md:mr-8 group-hover:border-orange/50 transition-all duration-300">
                <img
                  src={"/me.webp"}
                  alt="profile"
                  className="flex-shrink-0 w-40 h-40 md:w-52 md:h-52 rounded-full border-[8px] border-orange overflow-hidden transition-all duration-300 group-hover:border-6"
                />
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
                  <p className="text-gray-300/90 text-center md:text-left text-lg md:text-xl tracking-wide leading-[1.5]">
                    <span>
                      I build pixel-perfect, robust web apps that are{" "}
                      <FlipWords
                        words={words}
                        duration={2500}
                        className="text-orange/80 font-semibold px-0 w-12"
                      />
                    </span>
                    <br />
                    With over{" "}
                    <span className="text-orange/80 font-semibold">
                      6 years
                    </span>{" "}
                    of experience{" "}
                    <span>
                      converting users into customers within the dynamic web2
                      and web3 landscapes.
                    </span>
                  </p>
                </div>

                <div className="flex items-center justify-center md:justify-start space-x-3 pt-8 w-full">
                  <ScheduleCallBtn />
                  <ViewProjectsBtn />
                </div>
              </div>
            </div>
          </div>
        </SectionContent>
      </SlideMeIn>
      {/* Chevron Down Icon */}
      {/* <div
        className={`w-full flex items-center justify-center my-1 opacity-${
          showScrollHint ? "100" : "0"
        } transition-opacity duration-500`}
      >
        <ChevronDownIcon
          ref={chevronRef}
          size={40}
          className="text-orange/60"
        />
      </div> */}

      {/* Main stack */}
      <SlideMeIn marginBottom="mb-3">
        <SectionContent padding="py-6 md:py-10">
          <div className="group relative border rounded-3xl p-5 bg-gray-900/70 hover:bg-gray-900/80 hover:-translate-y-0.5 transition-all duration-300 ease-out border-gray-700/80 hover:border-gray-600/60 w-full">
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
                  <div className="flex items-center space-x-2 rounded-lg px-3 py-1.5 bg-gray-800/60 hover:bg-gray-800/80 hover:border-gray-600/60 transition-all duration-200 cursor-pointer">
                    <FaReact className="text-blue-400 h-4.5 w-4.5" />
                    <span className="text-gray-300 font-medium text-sm">
                      React
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 rounded-lg px-3 py-1.5 bg-gray-800/60 hover:bg-gray-800/80 hover:border-gray-600/60 transition-all duration-200 cursor-pointer">
                    <BiLogoTypescript className="text-blue-400 h-4.5 w-4.5" />
                    <span className="text-gray-300 font-medium text-sm">
                      TypeScript
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg px-3 py-1.5 bg-gray-800/60 hover:bg-gray-800/80 hover:border-gray-600/60 transition-all duration-200 cursor-pointer">
                    <FaNodeJs className="text-green-400 h-4.5 w-4.5" />
                    <span className="text-gray-300 font-medium text-sm">
                      Node.js
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 rounded-lg px-3 py-1.5 bg-gray-800/60 hover:bg-gray-800/80 hover:border-gray-600/60 transition-all duration-200 cursor-pointer">
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
      <SectionHeading>My tools</SectionHeading>
      <SlideMeIn>
        <SectionContent>
          <section>
            <Stacks />
          </section>
        </SectionContent>
      </SlideMeIn>

      {/* Testimonials */}
      <SectionHeading isContactPage={false}>What people say</SectionHeading>
      <SlideMeIn cascade>
        <SectionContent padding="py-6 md:py-10">
          <Testimonials />
        </SectionContent>
      </SlideMeIn>

      <MemeText text={"You gotta put your behind in your past"} />
    </PageContainer>
  );
};

export default LandingPage;
