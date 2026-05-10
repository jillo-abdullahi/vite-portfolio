import { type FC, type ReactNode, useRef } from "react";
import { LuDot } from "react-icons/lu";

import type { Skill } from "@/types";
import { motion } from "framer-motion";

interface StackCardProps {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

export const StackCard: FC<StackCardProps> = ({ title, icon, skills }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Sort skills by level (highest first)
  const sortedSkills = [...skills].sort((a, b) => {
    const levelA = parseInt(a.level);
    const levelB = parseInt(b.level);
    return levelB - levelA;
  });

  return (
    <div
      ref={cardRef}
      className="group relative h-full p-6 rounded-3xl border-2 border-[var(--color-primary)]/20 bg-[var(--color-primary)]/3 hover:bg-[var(--color-primary)]/5 backdrop-blur-sm hover:border-[var(--color-primary)]/30 hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden"
    >
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative">
            <motion.div className="p-2 bg-gray-200 dark:bg-gray-800/50 rounded-lg border border-[var(--color-primary)]/20 group-hover:border-[var(--color-primary)]/30 transition-colors duration-300">
              <div className="text-[var(--color-primary)]">{icon}</div>
            </motion.div>
          </div>
          <div>
            <h3 className="text-[var(--color-primary)]/90 group-hover:text-[var(--color-primary)] font-bold text-lg tracking-wide transition-colors duration-300">
              {title}
            </h3>
            <div className="h-0.5 w-8 bg-[var(--color-primary)]/50 mt-1 rounded-full group-hover:w-full transition-all duration-500 ease-out"></div>
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-3 flex-grow">
          {sortedSkills.map(({ name, level }, index) => {
            const isMastery = parseInt(level) >= 90; 
            return (
              <div
                key={index}
                className={`flex items-center gap-3 transition-all duration-300 ${isMastery ? "text-gray-900 dark:text-gray-200" : "text-gray-700 dark:text-gray-400"}`}
              >
                {isMastery && (
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center border border-[var(--color-primary)]/40 group-hover:bg-[var(--color-primary)]/30 group-hover:border-[var(--color-primary)]/60 transition-colors duration-300">
                    <svg
                      className="w-2 h-2 text-[var(--color-primary)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
                <span
                  className={`font-medium group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors duration-300 ${isMastery ? "font-semibold" : ""}`}
                >
                  {name.includes("/") ? (
                    <div className="inline-flex items-center">
                      {name.split("/").map((part, idx) => {
                        return (
                          <>
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1"
                            >
                              {part}
                            </span>
                            {idx === 0 && (
                              <span className="text-[var(--color-primary)]/80 text-xl ">
                                <LuDot />
                              </span>
                            )}
                          </>
                        );
                      })}
                    </div>
                  ) : (
                    name
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
