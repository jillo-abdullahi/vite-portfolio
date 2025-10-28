import { type FC, type ReactNode, useRef } from "react";
import type { Skill } from "@/types";
import { motion, useScroll, useTransform } from "framer-motion";

interface StackCardProps {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

export const StackCard: FC<StackCardProps> = ({ title, icon, skills }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this card
  // Offset: start animating when card enters viewport, finish when centered
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.9", "start 0.4"]
  });

  // Scale animation for the icon
  const iconScale = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]);

  return (
    <div 
      ref={cardRef}
      className="group relative h-auto my-5 p-6 rounded-2xl border border-gray-700/80 bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-sm hover:border-orange/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange/10 transition-all duration-500 ease-out">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        {/* Header with icon and title */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="relative">
            <motion.div 
              className="p-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg transition-all duration-300 group-hover:scale-110"
              style={{ scale: iconScale }}
            >
              <div className="text-orange/90 group-hover:text-orange transition-colors duration-300">
                {icon}
              </div>
            </motion.div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-orange/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>
          <div>
            <h3 className="text-gray-100 font-semibold text-lg tracking-wide">
              {title}
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange to-orange/50 mt-1 transition-all duration-300 group-hover:w-16"></div>
          </div>
        </div>

        {/* Skills section */}
        <div className="space-y-4">
          {skills.map(({ name, level }, index) => {
            // Transform scroll progress to width for this specific skill bar
            // Each bar animates at a slightly different scroll range for stagger effect
            const startProgress = 0.1 + (index * 0.05);
            const endProgress = 0.8 + (index * 0.05);
            const width = useTransform(
              scrollYProgress,
              [startProgress, endProgress],
              ["0%", level]
            );

            return (
              <div className="space-y-2" key={name}>
                <div className="flex items-center justify-between">
                  <span className="text-gray-200 font-medium text-sm">
                    {name}
                  </span>
                </div>
                <div className="relative h-1 bg-gray-700/60 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange to-orange/80 rounded-full"
                    style={{ width }}
                  ></motion.div>
                  {/* Shimmer effect */}
                  <div
                    className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
