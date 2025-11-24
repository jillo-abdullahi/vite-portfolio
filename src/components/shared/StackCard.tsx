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

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.9", "start 0.4"]
  });

  const iconScale = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]);

  return (
    <div
      ref={cardRef}
      className="group relative h-full p-6 rounded-3xl border border-[var(--color-primary)]/10 bg-gray-900/40 backdrop-blur-sm hover:border-[var(--color-primary)]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--color-primary)]/5 transition-all duration-500 ease-out overflow-hidden">

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Decorative circle */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <motion.div
              className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 group-hover:border-[var(--color-primary)]/30 transition-colors duration-300"
              style={{ scale: iconScale }}
            >
              <div className="text-[var(--color-primary)]">
                {icon}
              </div>
            </motion.div>
          </div>
          <div>
            <h3 className="text-gray-400 group-hover:text-gray-300 font-bold text-lg capitalize tracking-wide">
              {title}
            </h3>
            <div className="h-0.5 w-8 bg-[var(--color-primary)]/50 mt-1 rounded-full group-hover:w-full transition-all duration-500 ease-out"></div>
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-4 flex-grow">
          {skills.map(({ name, level }, index) => {
            const startProgress = 0.1 + (index * 0.05);
            const endProgress = 0.8 + (index * 0.05);
            const width = useTransform(
              scrollYProgress,
              [startProgress, endProgress],
              ["0%", level]
            );

            return (
              <div className="space-y-1.5" key={name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
                    {name}
                  </span>
                </div>
                <div className="relative h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/60 rounded-full"
                    style={{ width }}
                  ></motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
