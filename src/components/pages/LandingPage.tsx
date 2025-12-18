import type { FC, ReactNode } from "react";
import { useEffect, useRef } from "react";
import { LuMapPinHouse } from "react-icons/lu";
import { TextAnimate } from "../ui/text-animate";
import WavingHand from "@/components/WavingHand";
import { SlideMeIn } from "../shared/SlideMeIn";
import { PageContainer } from "../shared/PageContainer";
import SkillSplitBar from "../SkillSplitBar";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SectionContent } from "../shared/SectionContent";

import Typewriter from "@/components/shared/Typewriter";
import { ScheduleCallBtn } from "../ScheduleCallBtn";
import { ViewProjectsBtn } from "../ViewProjectsBtn";
import { SectionHeading } from "../shared/SectionHeading";
import Testimonials from "../Testimonials";
import Stacks from "../Stacks";
import Timer from "../Timer";
import { MemeText } from "../shared/MemeText";
import { SwordsIcon, type SwordsIconHandle } from "../ui/SwordsIcon";
import { HeartIcon, type HeartIconHandle } from "../ui/HeartIcon";
import { useInView } from "@/hooks/useInView";
import { CurrentlySection } from "../CurrentlySection";
import { currentlyInfo } from "@/data";
import { Fade } from "react-awesome-reveal";

interface TechBadgeProps {
  icon: ReactNode;
  label: string;
}

const TechBadge: FC<TechBadgeProps> = ({ icon, label }) => {
  return (
    <div className="flex items-center space-x-2 rounded-lg px-3 py-1.5 bg-gray-900/40 backdrop-blur-md group-hover:bg-gray-900/60 group-hover:border-[var(--color-primary)]/20 transition-all duration-200 cursor-pointer border border-gray-700/40">
      {icon}
      <span className="text-gray-400 font-medium text-sm">{label}</span>
    </div>
  );
};

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

  return (
    <PageContainer>
      <SlideMeIn>
        <SectionContent padding="py-6 md:py-10 bg-[var(--color-primary)]/3">
          <div
            className="group relative border-2 rounded-3xl p-6 pt-8 md:p-8 bg-transparent hover:-translate-y-0.5 transition-all duration-300 ease-out border-[var(--color-primary)]/30 hover:border-[var(--color-primary)]/40 w-full overflow-hidden"
            style={{
              backgroundImage: "url('/icon-bg.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Subtle hover overlay */}
            <div className="absolute inset-0 rounded-xl bg-[var(--color-primary)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-14 lg:space-x-18 items-center justify-center px-0 md:px-10">
              {/* Hero Image / Visual */}
              <div className="flex-1 relative w-full max-w-[500px] md:max-w-none flex justify-center z-10 p-6 md:p-0">
                <Fade
                  cascade={true}
                  damping={0.1}
                  duration={1000}
                  delay={0.2 * 1000}
                  triggerOnce
                >
                  <div className="relative w-56 h-56 md:w-64 md:h-64 group">
                    {/* Decorative rings */}
                    <div className="absolute inset-0 rounded-full border border-[var(--color-primary)]/20 scale-110 group-hover:scale-125 transition-transform duration-700 ease-out"></div>
                    <div className="absolute inset-0 rounded-full border border-dashed border-[var(--color-primary)]/20 scale-125 group-hover:scale-110 transition-transform duration-700 ease-out animate-spin-slow"></div>

                    {/* Main Image Container */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[var(--color-primary)]/10 backdrop-blur-sm bg-gray-900/50 shadow-2xl shadow-[var(--color-primary)]/20 group-hover:shadow-[var(--color-primary)]/40 transition-all duration-500">
                      <img
                        src="https://res.cloudinary.com/dsuhsqcb2/image/upload/f_auto,q_auto,w_512/v1763295450/sneakerhead985NoBg_wzya7p.webp"
                        alt="Jillo Woche"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/20 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
                    </div>

                    {/* Floating Badges */}
                    <div className="absolute -top-0 -right-0 bg-gray-900/60 backdrop-blur-md border border-[var(--color-primary)]/15 p-2 rounded-xl shadow-xl animate-float" style={{ animationDelay: "0s" }}>
                      <FaReact className="text-[#61DAFB] text-xl" />
                    </div>
                    <div className="absolute bottom-8 -left-8 bg-gray-900/60 backdrop-blur-md border border-[var(--color-primary)]/15 p-2 rounded-xl shadow-xl animate-float" style={{ animationDelay: "-2s" }}>
                      <BiLogoTypescript className="text-[#3178C6] text-xl" />
                    </div>
                    <div className="absolute -bottom-4 right-12 bg-gray-900/60 backdrop-blur-md border border-[var(--color-primary)]/15 p-2 rounded-xl shadow-xl animate-float" style={{ animationDelay: "-4s" }}>
                      <FaNodeJs className="text-[#339933] text-xl" />
                    </div>
                  </div>
                </Fade>
              </div>

              <div className="flex flex-col items-start justify-start pl-0 md:pl-6 lg:pl-10 pt-4 md:pt-0 border-0 md:border-l border-[var(--color-primary)]/30 group-hover:border-[var(--color-primary)]/40">
                <SlideMeIn
                  delay={0.2}
                  useBorderedContent={false}
                  className="w-full"
                >
                  <div className="flex items-center space-x-1 w-full justify-center md:justify-start pb-2 sm:pb-4">
                    <WavingHand />
                    <span className="text-xl text-gray-400 font-medium pt-1">
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
                <SlideMeIn
                  delay={0.4}
                  useBorderedContent={false}
                  className="w-full text-center md:text-left w-full"
                >
                  <span className="font-semibold pt-1 text-xl sm:text-2xl text-gray-300 ">
                    <Typewriter
                      phrases={[
                        "Full Stack Engineer.",
                        "Frontend Engineer.",
                        "Web3 Developer.",
                      ]}
                      speed={40}
                    />
                  </span>
                </SlideMeIn>
                <SlideMeIn
                  delay={0.5}
                  useBorderedContent={false}
                  className="w-full"
                >
                  <div className="flex items-center justify-center md:justify-start space-x-1 pt-1 w-full">
                    <LuMapPinHouse className="text-[var(--color-primary)]/80 h-4 w-4" />
                    <span className="text-gray-300/70 font-semibold">
                      Nairobi, Kenya
                    </span>
                  </div>
                </SlideMeIn>
                <SlideMeIn delay={0.6} useBorderedContent={false}>
                  <div className="w-full pt-6">
                    <p className="text-gray-400 text-center md:text-left text-lg md:text-xl tracking-wide leading-[1.3] font-medium">
                      <span>
                        I build pixel-perfect, robust web apps that are{" "}
                        <span className="text-[var(--color-primary)]/90">
                          fast, reliable
                        </span>{" "}
                        and{" "}
                        <span className="text-[var(--color-primary)]/90">
                          modern.
                        </span>{" "}
                      </span>
                      Backed by{" "}
                      <span className="text-[var(--color-primary)]/90">
                        6+ years
                      </span>{" "}
                      <span>
                        of experience driving user growth and conversion across
                        the evolving Web2 and Web3 spaces.
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

      {/* Main stack */}
      <SlideMeIn marginBottom="mb-3">
        <SectionContent padding="py-6 md:py-10 bg-[var(--color-primary)]/3">
          <div
            className="group relative border-2 rounded-3xl p-5 bg-transparent hover:-translate-y-0.5 transition-all duration-300 ease-out border-[var(--color-primary)]/30 hover:border-[var(--color-primary)]/40 w-full mb-6"
            style={{
              backgroundImage: "url('/icon-bg.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Subtle hover overlay */}
            <div className="absolute inset-0 rounded-xl bg-[var(--color-primary)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <SlideMeIn delay={0.5} useBorderedContent={false}>
              <div className="relative z-10">
                {/* skill split bar  */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <div className="text-center md:text-left md:flex-shrink-0">
                    <p className="text-lg font-medium text-gray-400">
                      Focus<sup className="text-[var(--color-primary)]">*</sup>
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
                    <p className="text-lg font-medium text-gray-400">
                      Main stack
                    </p>
                  </div>

                  <div className="flex-1 flex flex-wrap justify-center md:justify-end items-center gap-2">
                    <TechBadge
                      icon={<FaReact className="text-blue-400 h-4.5 w-4.5" />}
                      label="React"
                    />
                    <TechBadge
                      icon={
                        <BiLogoTypescript className="text-blue-400 h-4.5 w-4.5" />
                      }
                      label="TypeScript"
                    />
                    <TechBadge
                      icon={<FaNodeJs className="text-green-400 h-4.5 w-4.5" />}
                      label="Node.js"
                    />
                    <TechBadge
                      icon={
                        <BiLogoPostgresql className="text-blue-300 h-4.5 w-4.5" />
                      }
                      label="PostgreSQL"
                    />
                  </div>
                </div>
              </div>
            </SlideMeIn>
          </div>
          <SlideMeIn delay={0.2} useBorderedContent={false}>
            <CurrentlySection
              exploring={currentlyInfo.exploring}
              availableFor={currentlyInfo.availableFor}
            />
          </SlideMeIn>
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
          <SwordsIcon
            className="text-[var(--color-primary)]"
            size={20}
            ref={swordsRef}
          />
          <span className="text-lg md:text-xl lg:text-2xl font-medium">
            my tools
          </span>
        </div>
      </SectionHeading>
      <SlideMeIn>
        <SectionContent padding="bg-[var(--color-primary)]/3 py-6 md:py-10">
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
          <HeartIcon
            className="text-[var(--color-primary)]"
            size={20}
            ref={heartRef}
          />
          <span className="text-lg md:text-xl lg:text-2xl font-medium">
            what people say
          </span>
        </div>
      </SectionHeading>
      <SlideMeIn cascade>
        <SectionContent padding="py-6 md:py-10 bg-[var(--color-primary)]/3">
          <Testimonials />
        </SectionContent>
      </SlideMeIn>

      <MemeText
        text={
          <span className="text-[var(--color-primary)]/50">
            <sub className="font-bold text-sm pr-0.5 text-[var(--color-primary)]">
              *
            </sub>
            <span>Disclaimer</span>: This bar is an approximation of where I
            tend to lean, not a certified metric of ability. I like both sides!
          </span>
        }
      />
    </PageContainer>
  );
};

export default LandingPage;
