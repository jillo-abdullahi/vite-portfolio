import { type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Box } from "lucide-react";
import {
  ComputerDesktopIcon,
  ServerStackIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import type { ProjectCategory } from "@/types";

interface ProjectFilterProps {
  activeFilter: ProjectCategory | "All";
  onFilterChange: (filter: ProjectCategory | "All") => void;
  projectCounts: Record<ProjectCategory | "All", number>;
}

const filters: (ProjectCategory | "All")[] = [
  "All",
  "Web3",
  "Full Stack",
  "Frontend",
];

const iconMap: Record<ProjectCategory | "All", typeof LayoutGrid> = {
  All: LayoutGrid,
  Web3: Box,
  "Full Stack": CircleStackIcon,
  Frontend: ComputerDesktopIcon,
  Backend: ServerStackIcon,
};

export const ProjectFilter: FC<ProjectFilterProps> = ({
  activeFilter,
  onFilterChange,
  projectCounts,
}) => {
  return (
    <div className="w-full mb-6 sm:mb-10 flex justify-start">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-1 md:gap-2 p-1 md:p-1.5 rounded-xl sm:rounded-2xl dark:bg-gray-800/30 border-2 border-[var(--color-primary)]/20 inline-flex max-w-full"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            const count = projectCounts[filter] || 0;
            const Icon = iconMap[filter];

            return (
              <button
                key={filter}
                onClick={() => onFilterChange(filter)}
                className={`cursor-pointer relative px-3 py-1.5 md:px-4 md:py-2 text-[11px] md:text-sm font-medium transition-colors duration-300 z-10 whitespace-nowrap rounded-md lg:rounded-lg ${
                  isActive
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
                }`}
                aria-label={`Filter projects by ${filter}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-[var(--color-primary)]/20 dark:bg-[var(--color-primary)]/30 border border-[var(--color-primary)]/40 rounded-md lg:rounded-lg"
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 24,
                    }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-1.5 md:gap-2">
                  <Icon className="w-4 h-4 md:hidden" />
                  <span className="hidden md:block">{filter}</span>
                  <span
                    className={`inline-flex items-center justify-center min-w-[16px] md:min-w-[20px] h-4 md:h-5 px-1 md:px-1.5 rounded-full text-[9px] md:text-[10px] font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-[var(--color-primary)] text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
