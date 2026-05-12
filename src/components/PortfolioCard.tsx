import { useRef, useEffect, useState } from "react";
import { type PortfolioProject } from "@/types";
import {
  CodeBracketIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/outline";
import { EyeIcon, type ExternalLinkIconHandle } from "./ui/EyeIcon";
import TechStackCard from "./shared/TechStackCard";
import { getResponsiveImageProps } from "@/utils/image";

export const PortfolioCard = ({
  title,
  description,
  moreDetails,
  image,
  preview,
  github,
  stacks,
  backend,
  demoButtonText,
  demoButtonIcon: DemoIcon,
}: PortfolioProject) => {
  const eyeIconRef = useRef<ExternalLinkIconHandle>(null);

  // Animation state for image fade-in
  const [imgVisible, setImgVisible] = useState(false);
  useEffect(() => {
    // Delay to allow card to mount before animating image
    const timeout = setTimeout(() => setImgVisible(true), 120);
    return () => clearTimeout(timeout);
  }, []);

  const DemoImage: React.FC<{ image: string }> = ({ image }) => {
    const { src: imageSrc, srcSet: imageSrcSet } =
      getResponsiveImageProps(image);
    return (
      <div className="relative w-full lg:w-[46%] p-6 md:p-12 lg:p-7 overflow-hidden bg-[var(--color-primary)]/3 border-b lg:border-b-0 lg:border-r border-[var(--color-primary)]/20 flex items-center justify-center">
        <div className="relative w-full mx-auto">
          <div className="relative transform transition-all duration-500 ease-out">
            <div className="relative rounded-[14px] bg-gray-400 dark:bg-gray-800 p-[6px] overflow-hidden border-2 border-[var(--color-primary)]/20">
              <div className="relative rounded-[8px] overflow-hidden bg-black">
                <div className="h-6 bg-gray-300 dark:bg-gray-800/80 flex items-center px-3 border-none relative rounded-t-[8px]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] shadow-inner" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] shadow-inner" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] shadow-inner" />
                  </div>
                </div>

                <div className="relative aspect-[16/10] transition-all duration-500">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      srcSet={imageSrcSet}
                      sizes="(max-width: 768px) 90vw, 45vw"
                      alt={title}
                      loading="lazy"
                      decoding="async"
                      className={`h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                        imgVisible
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-105"
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
    );
  };

  const ProjectDescription: React.FC<{
    title: string;
    description: string;
    moreDetails?: string;
  }> = ({ title, description, moreDetails }) => {
    return (
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-[var(--color-primary)]">
          {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-md font-medium dark:font-normal tracking-wide leading-relaxed">
          {description}
        </p>
        {moreDetails && (
          <div className="text-gray-500 dark:text-gray-400 text-md pt-4 space-y-2 mb-4 lg:hidden 2xl:block">
            <p className="text-sm uppercase tracking-wide text-[var(--color-primary)]/90 font-bold">
              how it works
            </p>
            <p className="font-medium dark:font-normal tracking-wide leading-relaxed">
              {moreDetails}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="group relative flex flex-col lg:flex-row rounded-3xl overflow-hidden border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/80 border-2 transition-all duration-300 hover:scale-[1.01] bg-gradient-to-b from-gray-100/80 via-gray-100/60 to-gray-50/60 dark:from-gray-900/20 dark:via-gray-900/10 dark:to-gray-800/10">
      {/* Image Container with Device Mockups */}
      {preview && <DemoImage image={image} />}

      {/* Content Section */}
      <div className="flex-1 flex flex-col p-6 md:p-12 lg:p-8 space-y-4 border-t lg:border-l lg:border-t-0 border-[var(--color-primary)]/20 bg-[var(--color-primary)]/3">
        <ProjectDescription
          title={title}
          description={description}
          moreDetails={moreDetails}
        />

        <TechStackCard stacks={stacks} />

        {/* Action Buttons - Desktop */}
        <div className="flex flex-col gap-3 pt-3 transition-opacity duration-300">
          {preview && (
            <a
              href={preview}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--color-primary)] bg-[var(--color-primary)]/60 hover:bg-[var(--color-primary)]/70 text-gray-900 dark:text-slate-300 text-md font-semibold transition-colors duration-200 backdrop-blur-sm"
              aria-label="View Live Demo"
              onMouseEnter={() =>
                !DemoIcon && eyeIconRef.current?.startAnimation()
              }
              onMouseLeave={() =>
                !DemoIcon && eyeIconRef.current?.stopAnimation()
              }
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
          {github && backend ? (
            <div className="flex gap-2">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/10 text-[var(--color-primary)] dark:text-gray-100 text-sm font-semibold transition-colors duration-200 backdrop-blur-sm"
                aria-label="View Frontend Code"
              >
                <CodeBracketIcon className="h-4 w-4" />
                <span className="group-hover/btn:translate-y-[-1px] transition-transform duration-200">
                  frontend
                </span>
              </a>
              <a
                href={backend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/10 text-[var(--color-primary)] dark:text-gray-100 text-sm font-semibold transition-colors duration-200 backdrop-blur-sm"
                aria-label="View Backend Code"
              >
                <CodeBracketSquareIcon className="h-4 w-4" />
                <span className="group-hover/btn:translate-y-[-1px] transition-transform duration-200">
                  backend
                </span>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
