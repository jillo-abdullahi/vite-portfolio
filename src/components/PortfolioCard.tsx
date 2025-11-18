import { type PortfolioProject } from "@/types";
import { Fade } from "react-awesome-reveal";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/outline";
import { TooltipButton } from "./shared/TooltipButton";

export const PortfolioCard = ({
  title,
  description,
  image,
  preview,
  github,
  stacks,
  completed,
  contract,
}: PortfolioProject) => {
  return (
    <Fade cascade damping={0.1} duration={3000}>
      <div className="group relative h-auto lg:h-[580px] 2xl:h-auto flex flex-col rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-[var(--color-primary)]/80 hover:border-2 transition-all duration-300 hover:scale-[1.02]">
        <div className="absolute inset-0 rounded-xl bg-[var(--color-primary)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Image Container with Device Mockup */}
        <div className="relative p-6 bg-gradient-to-br from-gray-700 to-gray-800">
          {/* MacBook Mockup */}
          <div className="relative bg-gray-800 rounded-lg p-1.5 shadow-2xl">
            {/* MacBook Screen Bezel */}
            <div className="bg-black rounded-md p-1.5">
              {/* MacBook Screen */}
              <div className="relative aspect-[16/10] rounded-sm overflow-hidden bg-gray-900">
                {image ? (
                  <img
                    src={`/portfolio/${image}`}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800">
                    <span className="text-gray-400 text-sm font-medium">
                      No Image Available
                    </span>
                  </div>
                )}

                {/* Subtle screen glare effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-20" />
              </div>
            </div>

            {/* MacBook Base/Keyboard Area */}
            <div className="h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg relative">
              {/* Apple Logo Area */}
              <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-gray-600 rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Status Badge */}
          {!completed && (
            <div className="absolute top-6 right-6 z-10">
              <div className="px-3 py-1.5 text-xs font-semibold rounded-full bg-yellow-500/90 text-gray-900 backdrop-blur-sm border border-yellow-400/30 shadow-lg">
                In Progress
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="absolute top-6 left-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            {preview && (
              <TooltipButton
                href={preview}
                tooltipText="Live Demo"
                className="p-2 rounded-full border border-gray-300 bg-[var(--color-primary)]/90 hover:bg-[var(--color-primary)] text-gray-900 transition-colors duration-200 shadow-lg backdrop-blur-sm"
                ariaLabel="View Live Demo"
              >
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </TooltipButton>
            )}
            {github && (
              <TooltipButton
                href={github}
                tooltipText="View Source Code"
                className="p-2 rounded-full border border-gray-300 bg-gray-800/90 hover:bg-gray-700 text-gray-100 transition-colors duration-200 shadow-lg backdrop-blur-sm"
                ariaLabel="View Source Code"
              >
                <CodeBracketIcon className="h-4 w-4" />
              </TooltipButton>
            )}

            {contract && (
              <TooltipButton
                href={contract}
                tooltipText="View Smart Contract Code"
                className="p-2 rounded-full border border-gray-300 bg-purple-800/90 hover:bg-purple-700 text-gray-100 transition-colors duration-200 shadow-lg backdrop-blur-sm"
                ariaLabel="View Smart Contracts Code"
              >
                <CodeBracketSquareIcon className="h-4 w-4" />
              </TooltipButton>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col p-6 space-y-4">
          {/* Title and Description */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-primary)] transition-colors duration-200">
              {title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex-1">
            {stacks && stacks.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {stacks.map((stack) => (
                    <span
                      key={stack}
                      className="px-2.5 py-1 text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 rounded-md hover:bg-[var(--color-primary)]/20 transition-colors duration-200"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Links - Mobile Fallback */}
          <div className="flex gap-3 pt-2 md:hidden">
            {preview && (
              <a
                href={preview}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 bg-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors duration-200"
              >
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                Live Demo
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-100 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
              >
                <CodeBracketIcon className="h-4 w-4" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};
