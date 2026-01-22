import { useState, useRef, useEffect } from "react";
import { type PortfolioProject } from "@/types";
import { Fade } from "react-awesome-reveal";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  CodeBracketSquareIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { EyeIcon, type ExternalLinkIconHandle } from "./ui/EyeIcon";
import { CodeXmlIcon, type CodeXmlIconHandle } from "./ui/CodeIcon";
import { getResponsiveImageProps } from "@/utils/image";

export const PortfolioCard = ({
  title,
  description,
  moreDetails,
  image,
  preview,
  github,
  stacks,
  completed,
  contract,
}: PortfolioProject) => {
  const [codeMenuOpen, setCodeMenuOpen] = useState(false);
  const eyeIconRef = useRef<ExternalLinkIconHandle>(null);
  const codeIconRef = useRef<CodeXmlIconHandle>(null);

  // Animation state for image fade-in
  const [imgVisible, setImgVisible] = useState(false);
  useEffect(() => {
    // Delay to allow card to mount before animating image
    const timeout = setTimeout(() => setImgVisible(true), 120);
    return () => clearTimeout(timeout);
  }, []);

  const { src: imageSrc, srcSet: imageSrcSet } = getResponsiveImageProps(image);

  return (
    <Fade cascade damping={0.1} duration={2000}>
      <div className="group relative flex flex-col lg:flex-row rounded-3xl overflow-hidden bg-[var(--color-primary)]/3 dark:bg-transparent dark:bg-gradient-to-br dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/80 border-2 transition-all duration-300 hover:scale-[1.01]">
        {/* Image Container with Device Mockups */}
        <div className="relative w-full lg:w-[46%] p-6 md:p-12 lg:p-7 overflow-hidden bg-[var(--color-primary)]/3 dark:bg-transparent dark:bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 border-b lg:border-b-0 lg:border-r border-[var(--color-primary)]/20 flex items-center justify-center">
          {/* Status Badge */}
          {!completed && (
            <div className="absolute top-6 right-6 z-20">
              <div className="px-3 py-1.5 text-xs font-semibold rounded-full bg-yellow-500/90 text-gray-900 backdrop-blur-sm border border-yellow-400/30">
                In Progress
              </div>
            </div>
          )}

          {/* MacBook Mockup */}
          <div className="relative max-w-3xl mx-auto">
            <div className="relative bg-gray-100 dark:bg-transparent dark:bg-gradient-to-b from-gray-900 to-black rounded-[22px] p-3 border border-gray-700/20 dark:border-gray-700/50">
              {/* Top bar */}
              <div className="flex items-center justify-between h-9 px-4 rounded-[12px] bg-gray-300 dark:bg-gray-900/80 border border-gray-700/20 dark:border-gray-700/60">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
                  <span className="h-3 w-3 rounded-full bg-[#febb2e] border border-[#dea123]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
                </div>

                <div className="h-2 w-10 rounded-full bg-gray-700/80" />
              </div>

              {/* Simple screen card */}
              <div className="relative mt-3 overflow-hidden rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 p-1">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      srcSet={imageSrcSet}
                      sizes="(max-width: 768px) 90vw, 45vw"
                      alt={title}
                      loading="lazy"
                      decoding="async"
                      className={`h-full w-full object-cover rounded-lg overflow-hidden border border-[var(--color-primary)]/5 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${imgVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                      <span className="text-gray-400 text-sm font-medium">
                        No Image Available
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-25 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col p-6 md:p-12 lg:p-8 space-y-4 dark:bg-gray-950/40 border-t lg:border-l lg:border-t-0 border-[var(--color-primary)]/20">
          {/* Title and Description */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">
              {title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium dark:font-normal">
              {description}
            </p>
            {moreDetails && (
              <div className="text-gray-500 dark:text-gray-400 text-sm pt-4 space-y-2 mb-4">
                <p className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-300 font-bold">
                  How it works
                </p>
                <p className="font-medium dark:font-normal">{moreDetails}</p>
              </div>
            )}
          </div>

          {/* Tech Stack */}
          <div className="flex-1 border-t border-gray-400 dark:border-gray-700 pt-4">
            {stacks && stacks.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-bold dark:font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider pb-1">
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

          {/* Action Buttons - Desktop hover reveal */}
          <div className="hidden sm:flex flex-wrap gap-3 pt-3 transition-opacity duration-300">
            {preview && (
              <a
                href={preview}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-primary)] bg-[var(--color-primary)]/60 hover:bg-[var(--color-primary)]/70 text-gray-900 text-md font-semibold transition-colors duration-200 backdrop-blur-sm"
                aria-label="View Live Demo"
                onMouseEnter={() => eyeIconRef.current?.startAnimation()}
                onMouseLeave={() => eyeIconRef.current?.stopAnimation()}
              >
                <EyeIcon ref={eyeIconRef} className="h-5 w-5" />
                <span className="group-hover/btn:translate-y-[-1px] transition-transform duration-200">
                  {description.toLowerCase().includes("gashawk")
                    ? "save on gas"
                    : "view demo"}
                </span>
              </a>
            )}
            {github && contract ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCodeMenuOpen((open) => !open)}
                  className="group/btn flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-400/40 bg-gray-200 dark:bg-gray-900/80 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-100 text-md font-semibold transition-colors duration-200 backdrop-blur-sm cursor-pointer"
                  aria-expanded={codeMenuOpen}
                  aria-label="View source or contract options"
                  onMouseEnter={() => codeIconRef.current?.startAnimation()}
                  onMouseLeave={() => codeIconRef.current?.stopAnimation()}
                >
                  <CodeXmlIcon ref={codeIconRef} className="h-5 w-5" />
                  <span className="group-hover/btn:translate-y-[-1px] transition-transform duration-200">
                    code
                  </span>
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${
                      codeMenuOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {codeMenuOpen && (
                  <div className="absolute z-30 -top-22 w-44 rounded-lg overflow-hidden border border-gray-400 dark:border-gray-700 bg-gray-200 dark:bg-gray-900/95 backdrop-blur-sm">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-md text-gray-600 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-800/90 transition-colors"
                    >
                      <CodeBracketIcon className="h-5 w-5" />
                      <span>Frontend</span>
                    </a>
                    <div className="h-px bg-gray-400 dark:bg-gray-400/30" />
                    <a
                      href={contract}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-md text-gray-600 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      <CodeBracketSquareIcon className="h-5 w-5" />
                      <span>Backend</span>
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <>
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-400/40 bg-gray-200 dark:bg-gray-900/80 hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-100 text-md font-semibold transition-colors duration-200 backdrop-blur-sm"
                    aria-label="View Source Code"
                    onMouseEnter={() => codeIconRef.current?.startAnimation()}
                    onMouseLeave={() => codeIconRef.current?.stopAnimation()}
                  >
                    <CodeXmlIcon ref={codeIconRef} className="h-5 w-5" />
                    <span className="group-hover/btn:translate-y-[-1px] transition-transform duration-200">
                      view source
                    </span>
                  </a>
                )}
              </>
            )}
          </div>

          {/* Action Links - Mobile Fallback */}
          <div className="flex gap-3 pt-2 md:hidden">
            {preview && (
              <a
                href={preview}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 bg-[var(--color-primary)]/60 dark:bg-[var(--color-primary)]/90 rounded-lg hover:bg-[var(--color-primary)]/70 dark:hover:bg-[var(--color-primary)] transition-colors duration-200 border border-[var(--color-primary)]"
              >
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                view demo
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 border border-gray-300 dark:border-gray-600"
              >
                <CodeBracketIcon className="h-4 w-4" />
                code
              </a>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};
