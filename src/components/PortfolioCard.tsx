import { useState, useRef, useEffect, type FC, type RefObject } from "react";
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

// Abstracted Code Menu Button component
interface CodeMenuButtonProps {
  github: string;
  contract: string;
  isOpen: boolean;
  onToggle: () => void;
  codeIconRef?: RefObject<CodeXmlIconHandle | null>;
  variant: "desktop" | "mobile";
}

const CodeMenuButton: FC<CodeMenuButtonProps> = ({
  github,
  contract,
  isOpen,
  onToggle,
  codeIconRef,
  variant,
}) => {
  const isDesktop = variant === "desktop";

  return (
    <div className={`relative ${isDesktop ? "" : "w-full"}`}>
      <button
        type="button"
        onClick={onToggle}
        className={`${isDesktop
          ? "group/btn flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10 text-[var(--color-primary)] dark:text-gray-100 text-md font-semibold"
          : "flex w-full justify-center items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/20 text-[var(--color-primary)] dark:text-gray-100"
          } transition-colors duration-200 backdrop-blur-sm cursor-pointer`}
        aria-expanded={isOpen}
        aria-label="View backend or frontend code"
        onMouseEnter={() => codeIconRef?.current?.startAnimation()}
        onMouseLeave={() => codeIconRef?.current?.stopAnimation()}
      >
        <CodeXmlIcon ref={codeIconRef} className={isDesktop ? "h-5 w-5" : "h-4 w-4"} />
        <span className={isDesktop ? "group-hover/btn:translate-y-[-1px] transition-transform duration-200" : ""}>
          code
        </span>
        <ChevronDownIcon
          className={`${isDesktop ? "h-4 w-4" : "h-3 w-3"} transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      {isOpen && (
        <div
          className={`absolute z-30 ${isDesktop ? "-top-22 w-44" : "bottom-full left-0 mb-2 w-full shadow-xl"} rounded-lg overflow-hidden border border-[var(--color-primary)]/40 bg-gray-200 dark:bg-gray-900/80 backdrop-blur-sm`}
        >
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 ${isDesktop ? "text-md" : "text-sm"} text-gray-600 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 transition-colors hover:bg-[var(--color-primary)]/20 dark:hover:bg-[var(--color-primary)]/20 backdrop-blur-sm`}
          >
            <CodeBracketIcon className={isDesktop ? "h-5 w-5" : "h-4 w-4"} />
            <span>Frontend</span>
          </a>
          <div className="h-px bg-[var(--color-primary)]/40" />
          <a
            href={contract}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 ${isDesktop ? "text-md" : "text-sm"} text-gray-600 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 transition-colors hover:bg-[var(--color-primary)]/20 dark:hover:bg-[var(--color-primary)]/20 backdrop-blur-sm`}
          >
            <CodeBracketSquareIcon className={isDesktop ? "h-5 w-5" : "h-4 w-4"} />
            <span>Backend</span>
          </a>
        </div>
      )}
    </div>
  );
};

export const PortfolioCard = ({
  title,
  description,
  moreDetails,
  image,
  preview,
  github,
  stacks,
  contract,
  demoButtonText,
  demoButtonIcon: DemoIcon,
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

  const toggleCodeMenu = () => setCodeMenuOpen((open) => !open);

  return (
    <Fade cascade damping={0.1} duration={2000}>
      <div className="group relative flex flex-col lg:flex-row rounded-3xl overflow-hidden border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/80 border-2 transition-all duration-300 hover:scale-[1.01] bg-gradient-to-b from-gray-100/80 via-gray-100/60 to-gray-50/60 dark:from-gray-900/20 dark:via-gray-900/10 dark:to-gray-800/10">
        {/* Image Container with Device Mockups */}
        <div className="relative w-full lg:w-[46%] p-6 md:p-12 lg:p-7 overflow-hidden bg-[var(--color-primary)]/3 border-b lg:border-b-0 lg:border-r border-[var(--color-primary)]/20 flex items-center justify-center">

          {/* Modern MacBook Mockup */}
          <div className="relative w-full mx-auto">
            <div className="relative transform transition-all duration-500 ease-out">
              {/* Lid / Screen Housing */}
              <div className="relative rounded-[14px] bg-gray-400 dark:bg-gray-800 p-[6px] overflow-hidden">
                {/* Screen Bezel */}
                <div className="relative rounded-[8px] overflow-hidden bg-black">
                  {/* Top Bar / Menu Bar */}
                  <div className="h-6 bg-gray-300 dark:bg-gray-800/80 flex items-center px-3 border-none relative rounded-t-[8px]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] shadow-inner" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] shadow-inner" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] shadow-inner" />
                    </div>
                  </div>

                  {/* Screen Content */}
                  <div className="relative aspect-[16/10] transition-all duration-500">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        srcSet={imageSrcSet}
                        sizes="(max-width: 768px) 90vw, 45vw"
                        alt={title}
                        loading="lazy"
                        decoding="async"
                        className={`h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${imgVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
                          }`}
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-gray-900">
                        <span className="text-gray-500 text-sm font-medium">
                          No Preview
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col p-6 md:p-12 lg:p-8 space-y-4 border-t lg:border-l lg:border-t-0 border-[var(--color-primary)]/20 bg-[var(--color-primary)]/3">
          {/* Title and Description */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">
              {title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium dark:font-normal tracking-wide leading-relaxed">
              {description}
            </p>
            {moreDetails && (
              <div className="text-gray-500 dark:text-gray-400 text-sm pt-4 space-y-2 mb-4">
                <p className="lowercase tracking-wide text-gray-600 dark:text-gray-300 font-semibold text-lg">
                  how it works
                </p>
                <p className="font-medium dark:font-normal tracking-wide leading-relaxed">{moreDetails}</p>
              </div>
            )}
          </div>

          {/* Tech Stack */}
          <div className="flex-1 border-t border-gray-400 dark:border-gray-700 pt-4">
            {stacks && stacks.length > 0 && (
              <div className="space-y-2">
                <p className="text-lg lowercase font-semibold dark:font-semibold text-gray-600 dark:text-gray-300 tracking-wide pb-1">
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

          {/* Action Buttons - Desktop */}
          <div className="hidden sm:flex flex-wrap gap-3 pt-3 transition-opacity duration-300">
            {preview && (
              <a
                href={preview}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-primary)] bg-[var(--color-primary)]/60 hover:bg-[var(--color-primary)]/70 text-gray-900 dark:text-slate-300 text-md font-semibold transition-colors duration-200 backdrop-blur-sm"
                aria-label="View Live Demo"
                onMouseEnter={() => !DemoIcon && eyeIconRef.current?.startAnimation()}
                onMouseLeave={() => !DemoIcon && eyeIconRef.current?.stopAnimation()}
              >
                {DemoIcon ? (
                  <DemoIcon className="h-5 w-5 group-hover/btn:scale-110 group-hover/btn:rotate-3 transition-all duration-300" />
                ) : (
                  <EyeIcon ref={eyeIconRef} className="h-5 w-5" />
                )}
                <span className="group-hover/btn:translate-y-[-1px] transition-transform duration-200">
                  {demoButtonText || "view demo"}
                </span>
              </a>
            )}
            {github && contract ? (
              <CodeMenuButton
                github={github}
                contract={contract}
                isOpen={codeMenuOpen}
                onToggle={toggleCodeMenu}
                codeIconRef={codeIconRef}
                variant="desktop"
              />
            ) : (
              <>
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/10 text-[var(--color-primary)] dark:text-gray-100 text-md font-semibold transition-colors duration-200 backdrop-blur-sm"
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

          {/* Action Links - Mobile */}
          <div className="flex flex-col gap-3 pt-2 md:hidden">
            {preview && (
              <a
                href={preview}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full justify-center items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 bg-[var(--color-primary)]/60 dark:bg-[var(--color-primary)]/90 rounded-lg hover:bg-[var(--color-primary)]/70 dark:hover:bg-[var(--color-primary)] transition-colors duration-200 border border-[var(--color-primary)]"
              >
                {DemoIcon ? <DemoIcon className="h-4 w-4" /> : <ArrowTopRightOnSquareIcon className="h-4 w-4" />}
                {demoButtonText || 'view demo'}
              </a>
            )}
            {github && contract ? (
              <CodeMenuButton
                github={github}
                contract={contract}
                isOpen={codeMenuOpen}
                onToggle={toggleCodeMenu}
                variant="mobile"
              />
            ) : (
              github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full justify-center items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-100 rounded-lg transition-colors duration-200 border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/20 text-[var(--color-primary)] dark:text-gray-100"
                >
                  <CodeXmlIcon className="h-4 w-4" />
                  view source
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};
