import type { FC } from "react";
import { SlideMeIn } from "../../../shared/SlideMeIn";
import { SectionContent } from "../../../shared/SectionContent";
import { useTheme } from "@/contexts/ThemeContext";
import WavingHand from "@/components/WavingHand";
import { TextAnimate } from "../../../ui/text-animate";
import Typewriter from "@/components/shared/Typewriter";
import { LuMapPinHouse } from "react-icons/lu";
import { ScheduleCallBtn } from "../../../ScheduleCallBtn";
import { ViewProjectsBtn } from "../../../ViewProjectsBtn";
import HeroImage from "./HeroImage";

const HeroSection: FC = () => {
  const { currentTheme } = useTheme();
  return (
    <SlideMeIn>
      <SectionContent padding="py-6 md:py-10 bg-[var(--color-primary)]/3">
        <div
          className="group relative border-2 rounded-3xl p-6 pt-8 md:p-8 bg-[var(--color-primary)]/3 dark:bg-[var(--color-primary)]/3 hover:-translate-y-0.5 transition-all duration-300 ease-out border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/30 w-full overflow-hidden"
          style={{
            backgroundImage: `url('/icon-bg-${currentTheme}.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Subtle hover overlay */}
          <div className="absolute inset-0 rounded-xl bg-[var(--color-primary)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-14 lg:space-x-18 items-center justify-center px-0 md:px-10">
            {/* Hero Image */}
            <HeroImage />
            {/* Hero Text */}
            <div className="flex flex-col items-start justify-start pl-0 md:pl-6 lg:pl-10 pt-4 md:pt-0 border-0 md:border-l border-[var(--color-primary)]/30 group-hover:border-[var(--color-primary)]/40">
              <SlideMeIn delay={0.2} useBorderedContent={false} className="w-full">
                <div className="flex items-center space-x-1 w-full justify-center md:justify-start pb-2 sm:pb-4">
                  <WavingHand />
                  <span className="text-xl text-gray-600 dark:text-gray-400 font-semibold dark:font-medium pt-1">
                    hello, I am
                  </span>
                </div>
              </SlideMeIn>
              <TextAnimate
                delay={0.3}
                as={"span"}
                by="character"
                duration={0.5}
                animation="scaleUp"
                className="text-2xl md:text-3xl text-[var(--color-primary)] font-bold flex-shrink-0 text-center md:text-left pt-1 w-full uppercase idle-float"
              >
                Jillo Woche,
              </TextAnimate>
              <SlideMeIn delay={0.4} useBorderedContent={false} className="w-full text-center md:text-left w-full">
                <span className="font-semibold pt-1 text-xl sm:text-2xl text-gray-800 dark:text-gray-300 ">
                  <Typewriter
                    phrases={[
                      "Full Stack Engineer.",
                      "Frontend Engineer.",
                      "Web3 Developer.",
                    ]}
                    speed={40}
                    className="text-2xl font-bold"
                  />
                </span>
              </SlideMeIn>
              <SlideMeIn delay={0.5} useBorderedContent={false} className="w-full">
                <div className="flex items-center justify-center md:justify-start space-x-1 pt-1 w-full">
                  <LuMapPinHouse className="text-[var(--color-primary)]/80 h-4 w-4" />
                  <span className="text-gray-700/80 dark:text-gray-300/70 font-semibold">
                    Nairobi, Kenya
                  </span>
                </div>
              </SlideMeIn>
              <hr className="md:hidden border-t border-[var(--color-primary)]/30 mt-4 w-[80%] mx-auto" />
              <SlideMeIn delay={0.6} useBorderedContent={false}>
                <div className="w-full pt-6">
                  <p className="text-gray-600 dark:text-gray-400 text-center md:text-left text-xl md:text-xl leading-[1.3] font-semibold dark:font-medium">
                    <span>
                      I build{" "}
                      <span className="text-[var(--color-primary)]/90">
                        high-performance
                      </span>
                      ,{" "}
                      <span className="text-[var(--color-primary)]/90">
                        polished
                      </span>{" "}
                      web applications that drive user growth and conversion. {" "}
                    </span>
                    Backed by{" "}
                    <span className="text-[var(--color-primary)]/90">
                      6+ years
                    </span>{" "}
                    <span>
                      of experience shipping modern products across Web2 and
                      Web3.
                    </span>
                  </p>
                </div>
              </SlideMeIn>
              <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row items-center md:items-start justify-center lg:justify-start space-x-0 lg:space-x-3 pt-8 w-full">
                <SlideMeIn delay={0.5} useBorderedContent={false}>
                  <ScheduleCallBtn />
                </SlideMeIn>
                <SlideMeIn delay={0.6} useBorderedContent={false}>
                  <ViewProjectsBtn />
                </SlideMeIn>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </SlideMeIn>
  );
};

export default HeroSection;
