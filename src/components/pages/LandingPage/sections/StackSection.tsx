import type { FC } from "react";
import { SlideMeIn } from "../../../shared/SlideMeIn";
import { SectionContent } from "../../../shared/SectionContent";
import { TechBadge } from "../../../shared/TechBadge";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { CurrentlySection } from "../../../CurrentlySection";
import { currentlyInfo } from "@/data";

const StackSection: FC = () => {
  return (
    <>
      <SectionContent className="py-6 md:py-10 bg-[var(--color-primary)]/3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <SlideMeIn delay={0.1} className="lg:col-span-7">
            <div className="flex items-center justify-center group relative border-2 rounded-3xl p-5 md:p-6 hover:-translate-y-0.5 transition-all bg-[var(--color-primary)]/3 duration-300 ease-out border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/30 h-full">
              <div className="absolute inset-0 rounded-3xl bg-[var(--color-primary)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 w-full">
                <h3 className="text-lg md:text-2xl font-semibold text-[var(--color-primary)]/90 mb-4 px-3">
                  main stack
                </h3>

                <div className="flex flex-wrap gap-2 px-3">
                  {/* Frontend */}
                  <TechBadge
                    icon={<FaReact className="text-blue-400 h-4 w-4" />}
                    label="React"
                    yearsExperience={6}
                  />
                  <TechBadge
                    icon={
                      <BiLogoTypescript className="text-blue-400 h-4 w-4" />
                    }
                    label="TypeScript"
                    yearsExperience={5}
                  />
                  {/* Backend */}
                  <TechBadge
                    icon={<FaNodeJs className="text-green-400 h-4 w-4" />}
                    label="Node.js"
                    yearsExperience={6}
                  />
                  <TechBadge
                    icon={
                      <BiLogoPostgresql className="text-blue-300 h-4 w-4" />
                    }
                    label="PostgreSQL"
                    yearsExperience={5}
                  />
                </div>
              </div>
            </div>
          </SlideMeIn>

          <SlideMeIn delay={0.2} className="lg:col-span-5">
            <div className="h-full">
              <CurrentlySection
                exploring={currentlyInfo.exploring}
                availableFor={currentlyInfo.availableFor}
              />
            </div>
          </SlideMeIn>
        </div>
      </SectionContent>
    </>
  );
};

export default StackSection;
