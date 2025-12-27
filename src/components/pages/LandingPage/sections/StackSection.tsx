import type { FC } from "react";
import { SlideMeIn } from "../../../shared/SlideMeIn";
import { SectionContent } from "../../../shared/SectionContent";
import SkillSplitBar from "../../../SkillSplitBar";
import { TechBadge } from "../../../shared/TechBadge";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { CurrentlySection } from "../../../CurrentlySection";
import { currentlyInfo } from "@/data";
import { useTheme } from "@/contexts/ThemeContext";

const StackSection: FC = () => {
  const { currentTheme } = useTheme();
  return (
    <SlideMeIn marginBottom="mb-3">
      <SectionContent padding="py-6 md:py-10 bg-[var(--color-primary)]/3">
        <div
          className="group relative border-2 rounded-3xl p-5 hover:-translate-y-0.5 transition-all bg-[var(--color-primary)]/3 duration-300 ease-out border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/30 w-full mb-6"
          style={{
            backgroundImage: `url('/icon-bg-${currentTheme}.svg')`,
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
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
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
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
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
  );
};

export default StackSection;
