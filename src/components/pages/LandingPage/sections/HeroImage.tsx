import type { FC } from "react";
import { Fade } from "react-awesome-reveal";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { externalLinks } from "@/data";
import { getResponsiveImageProps } from "@/utils/image";

const HeroImage: FC = () => {
  const { src: imageSrc, srcSet: imageSrcSet } = getResponsiveImageProps(
    externalLinks.sneakerHeadImage,
    512, // default/fallback width
    [300, 512] // sizes for srcSet
  );

  return (
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
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[var(--color-primary)]/20 backdrop-blur-sm bg-gray-200/50 dark:bg-gray-900/50 transition-colors duration-300">
            <img
              src={imageSrc}
              srcSet={imageSrcSet}
              sizes="(max-width: 768px) 300px, 512px"
              alt="Jillo Woche"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/20 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>

          {/* Floating Badges */}
          <div
            className="absolute -top-0 -right-0 bg-gray-100/50 dark:bg-gray-900/60 backdrop-blur-md border border-[var(--color-primary)]/30 dark:border-[var(--color-primary)]/40 p-2 rounded-[12px] animate-float"
            style={{ animationDelay: "0s" }}
          >
            <FaReact className="text-[#61DAFB] text-2xl" />
          </div>
          <div
            className="absolute bottom-8 -left-8 bg-gray-100/50 dark:bg-gray-900/60 backdrop-blur-md border border-[var(--color-primary)]/30 dark:border-[var(--color-primary)]/40 p-2 rounded-[12px] animate-float"
            style={{ animationDelay: "-2s" }}
          >
            <BiLogoTypescript className="text-[#3178C6] text-2xl" />
          </div>
          <div
            className="absolute -bottom-4 right-12 bg-gray-100/50 dark:bg-gray-900/60 backdrop-blur-md border border-[var(--color-primary)]/30 dark:border-[var(--color-primary)]/40 p-2 rounded-[12px] animate-float"
            style={{ animationDelay: "-4s" }}
          >
            <FaNodeJs className="text-[#339933] text-2xl" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default HeroImage;
