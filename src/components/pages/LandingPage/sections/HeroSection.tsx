import { type FC } from "react";
import { SlideMeIn } from "../../../shared/SlideMeIn";
import { SectionContent } from "../../../shared/SectionContent";
import { TextAnimate } from "../../../ui/text-animate";
import HeroImage from "./HeroImage";
import { LuMapPinHouse } from "react-icons/lu";
import { DownloadResumeBtn } from "@/components/DownloadResumeBtn";
import { LinkedInBtn } from "@/components/LinkedInBtn";

const HeroSection: FC = () => {
  return (
    <SlideMeIn useFade className="mt-4">
      <SectionContent className="py-6 md:py-10 bg-[var(--color-primary)]/3">
        <div className="group relative border-2 rounded-3xl p-6 pt-8 md:p-10 bg-[var(--color-primary)]/3 dark:bg-[var(--color-primary)]/3 hover:-translate-y-0.5 transition-all duration-300 ease-out border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/30 w-full overflow-hidden">
          {/* Subtle hover overlay */}
          <div className="absolute inset-0 rounded-xl bg-[var(--color-primary)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-14 xl:space-x-18 items-center justify-center px-0 lg:px-10">
            <HeroImage />
            <div className="flex flex-col items-start justify-start pl-0 lg:pl-6 xl:pl-10 pt-4 lg:pt-0 border-0 lg:border-l border-[var(--color-primary)]/30 group-hover:border-[var(--color-primary)]/40">
              <SlideMeIn delay={0.2} className="w-full" useFade>
                <div className="flex items-center space-x-1 w-full justify-center lg:justify-start pb-2 sm:pb-4">
                  <span className="text-xl text-gray-600 dark:text-gray-400 font-semibold dark:font-medium pt-1">
                    Hello, I am
                  </span>
                </div>
              </SlideMeIn>
              <TextAnimate
                once
                delay={0.3}
                as={"span"}
                by="character"
                duration={0.5}
                animation="scaleUp"
                className="text-2xl md:text-3xl text-[var(--color-primary)] font-bold flex-shrink-0 text-center lg:text-left pt-1 w-full uppercase idle-float"
              >
                Jillo Woche,
              </TextAnimate>
              <SlideMeIn
                delay={0.2}
                className="w-full text-center lg:text-left w-full"
                useFade
              >
                <span className="font-semibold pt-1 text-xl sm:text-2xl text-gray-800 dark:text-gray-300 ">
                  Senior Full Stack Engineer
                </span>
              </SlideMeIn>
              <SlideMeIn delay={0.3} className="w-full">
                <div className="flex items-center justify-center lg:justify-start space-x-1 pt-1 w-full">
                  <LuMapPinHouse className="text-[var(--color-primary)]/80 h-4 w-4" />
                  <span className="text-gray-700/80 dark:text-gray-300/80 font-semibold">
                    Nairobi, Kenya{" "}
                    <span className="text-[var(--color-primary)]/90 text-xs">
                      (UTC+3)
                    </span>
                  </span>
                </div>
              </SlideMeIn>
              <hr className="lg:hidden border-t border-[var(--color-primary)]/30 mt-4 w-[80%] mx-auto" />
              <SlideMeIn delay={0.3}>
                <div className="w-full pt-6">
                  <div className="text-gray-600 dark:text-gray-400 text-center lg:text-left text-lg leading-[1.3] font-semibold dark:font-medium leading-relaxed">
                    <p className="pb-3">
                      <span className="text-[var(--color-primary)]/90">
                        Frontend-focused
                      </span>{" "}
                      software engineer with{" "}
                      <span className="text-[var(--color-primary)]/90">
                        6+ years
                      </span>{" "}
                      of experience building scalable{" "}
                      <span className="text-[var(--color-primary)]/90">
                        React
                      </span>{" "}
                      applications, and{" "}
                      <span className="text-[var(--color-primary)]/90">
                        production-grade
                      </span>{" "}
                      full-stack systems.
                    </p>
                    <p className="pb-2">
                      Shipped{" "}
                      <span className="text-[var(--color-primary)]/90">
                        100+
                      </span>{" "}
                      production features across consumer,
                      payments, and web3 platforms with a
                      strong focus on{" "}
                      <span className="text-[var(--color-primary)]/90">
                        performance
                      </span>
                      ,{" "}
                      <span className="text-[var(--color-primary)]/90">
                        maintainability
                      </span>
                      , and{" "}
                      <span className="text-[var(--color-primary)]/90">
                        user experience
                      </span>
                      .
                    </p>
                    <p className="pt-2">
                      Currently driving impact at{" "}
                      <span className="text-[var(--color-primary)]/90">
                        Rainforest Alliance
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </SlideMeIn>
              <div className="flex gap-2 items-center justify-center lg:justify-start pt-8 w-full">
                <SlideMeIn delay={0.2}>
                  <DownloadResumeBtn />
                </SlideMeIn>
                <SlideMeIn delay={0.3}>
                  <LinkedInBtn />
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
