import type { FC } from "react";
import { SlideMeIn } from "../../../shared/SlideMeIn";
import { SectionContent } from "../../../shared/SectionContent";
import { TechBadge } from "../../../shared/TechBadge";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { CurrentlySection } from "../../../CurrentlySection";
import { currentlyInfo } from "@/data";

// Frontend graphic - abstract browser/code representation
const FrontendGraphic: FC = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    {/* Abstract browser window */}
    <div className="relative w-full aspect-[16/9]">
      {/* Browser frame */}
      <div className="absolute inset-0 rounded-2xl border-2 border-[var(--color-primary)]/30 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent backdrop-blur-sm overflow-hidden flex flex-col">
        {/* Browser header bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-primary)]/20">
          <div className="w-3 h-3 rounded-full bg-red-400/60"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
          <div className="w-3 h-3 rounded-full bg-green-400/60"></div>
          {/* URL bar */}
          <div className="flex-1 ml-4 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center px-3">
            <div className="w-16 h-2 rounded bg-[var(--color-primary)]/20"></div>
          </div>
        </div>
        {/* Browser content - UI layout */}
        <div className="flex-1 p-4 flex flex-col gap-3">
          {/* Header */}
          <div className="h-5 w-1/2 rounded-lg bg-[var(--color-primary)]/20"></div>
          {/* Content grid - uniform cards */}
          <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2">
            <div className="rounded-lg bg-[var(--color-primary)]/10"></div>
            <div className="rounded-lg bg-[var(--color-primary)]/15"></div>
            <div className="rounded-lg bg-[var(--color-primary)]/10"></div>
            <div className="rounded-lg bg-[var(--color-primary)]/15"></div>
            <div className="rounded-lg bg-[var(--color-primary)]/10"></div>
            <div className="rounded-lg bg-[var(--color-primary)]/15"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Backend graphic - server/database representation
const BackendGraphic: FC = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <div className="relative w-full max-w-[300px]">
      {/* Server rack */}
      <div className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-10 rounded-lg border-2 border-[var(--color-primary)]/25 bg-gradient-to-r from-[var(--color-primary)]/8 to-transparent flex items-center px-3 gap-2"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 dark:bg-green-400/70 animate-pulse"></div>
            <div className="flex-1 flex gap-1">
              <div className="h-1.5 flex-1 rounded bg-[var(--color-primary)]/20"></div>
              <div className="h-1.5 w-8 rounded bg-[var(--color-primary)]/15"></div>
            </div>
            <div className="flex gap-1">
              <div className="w-1 h-4 rounded-sm bg-[var(--color-primary)]/20"></div>
              <div className="w-1 h-4 rounded-sm bg-[var(--color-primary)]/15"></div>
              <div className="w-1 h-4 rounded-sm bg-[var(--color-primary)]/20"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const StackSection: FC = () => {

  return (
    <>
      <SlideMeIn marginBottom="mb-4" delay={0.2}>
        <SectionContent padding="py-6 md:py-10 bg-[var(--color-primary)]/3">
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Frontend Card - Large, spans 2 rows on desktop */}
            <div
              className="group relative border-2 rounded-3xl p-5 md:p-6 hover:-translate-y-1 transition-all bg-gradient-to-br from-[var(--color-primary)]/8 to-[var(--color-primary)]/3 duration-300 ease-out border-[var(--color-primary)]/30 hover:border-[var(--color-primary)]/50 lg:row-span-2 "
            >
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 rounded-3xl bg-[var(--color-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <SlideMeIn delay={0.3} useBorderedContent={false}>
                <div className="relative z-10 flex flex-col h-full">
                  {/* Frontend Graphic - Top */}
                  <div className="w-full mb-6">
                    <FrontendGraphic />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-2xl font-semibold text-[var(--color-primary)] mb-2 px-3">
                    frontend-focused
                  </h3>

                  <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed flex-1 px-3 font-medium">
                    I build performant, accessible React applications using modern patterns, responsive design, and API-driven interfaces.                </p>
                </div>
              </SlideMeIn>
            </div>

            {/* Backend Card - Top Right */}
            <div
              className="group relative border-2 rounded-3xl p-5 md:p-6 hover:-translate-y-0.5 transition-all bg-[var(--color-primary)]/3 duration-300 ease-out border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/30"
            >
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 rounded-3xl bg-[var(--color-primary)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <SlideMeIn delay={0.4} useBorderedContent={false}>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-4">
                  {/* Backend Graphic */}
                  <div className="w-full md:w-full md:max-w-[300px] md:flex-shrink-0">
                    <div className="max-w-[400px] mx-auto md:mx-0">
                      <BackendGraphic />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-left">
                    <h3 className="text-lg md:text-xl font-semibold text-[var(--color-primary)] mb-2 px-3">
                      backend support
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium px-3">
                      I design robust APIs, manage databases, and build scalable server architectures with a focus on security and performance.
                    </p>
                  </div>
                </div>
              </SlideMeIn>
            </div>

            {/* My Stack Card - Bottom Right */}
            <div
              className="group relative border-2 rounded-3xl p-5 md:p-6 hover:-translate-y-0.5 transition-all bg-[var(--color-primary)]/3 duration-300 ease-out border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/30"
            >
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 rounded-3xl bg-[var(--color-primary)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <SlideMeIn useBorderedContent={false}>
                <div className="relative z-10">
                  {/* Label */}
                  <h3 className="text-lg md:text-xl font-semibold text-[var(--color-primary)] mb-4 px-3">
                    main stack
                  </h3>

                  {/* Tech badges - All stacks combined */}
                  <div className="flex flex-wrap gap-2 px-3">
                    {/* Frontend */}
                    <TechBadge
                      icon={<FaReact className="text-blue-400 h-4 w-4" />}
                      label="React"
                    />
                    <TechBadge
                      icon={<BiLogoTypescript className="text-blue-400 h-4 w-4" />}
                      label="TypeScript"
                    />
                    <TechBadge
                      icon={<BiLogoTailwindCss className="text-cyan-400 h-4 w-4" />}
                      label="TailwindCSS"
                    />
                    {/* Backend */}
                    <TechBadge
                      icon={<FaNodeJs className="text-green-400 h-4 w-4" />}
                      label="Node.js"
                    />
                    <TechBadge
                      icon={<BiLogoPostgresql className="text-blue-300 h-4 w-4" />}
                      label="PostgreSQL"
                    />
                  </div>
                </div>
              </SlideMeIn>
            </div>
          </div>
        </SectionContent>
      </SlideMeIn>

      {/* Currently Section */}
      <SlideMeIn delay={0.3} useBorderedContent={false}>
        <SectionContent padding="py-4 md:py-6 mb-3">
          <CurrentlySection
            exploring={currentlyInfo.exploring}
            availableFor={currentlyInfo.availableFor}
          />
        </SectionContent>
      </SlideMeIn>
    </>
  );
};

export default StackSection;
