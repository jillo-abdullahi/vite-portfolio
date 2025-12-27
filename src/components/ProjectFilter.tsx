import { type FC } from "react";
import { motion } from "framer-motion";
import type { ProjectCategory } from "@/types";

interface ProjectFilterProps {
  activeFilter: ProjectCategory | "All";
  onFilterChange: (filter: ProjectCategory | "All") => void;
  projectCounts: Record<ProjectCategory | "All", number>;
}

const filters: (ProjectCategory | "All")[] = ["All", "Web3", "Full Stack", "Frontend"];

export const ProjectFilter: FC<ProjectFilterProps> = ({
  activeFilter,
  onFilterChange,
  projectCounts,
}) => {
  return (
    <div className="w-full mb-8">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          const count = projectCounts[filter] || 0;

          return (
            <motion.button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`cursor-pointer relative group px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "text-gray-100 dark:text-gray-100 text-gray-900"
                  : "text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background with border */}
              <div
                className={`absolute inset-0 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--color-primary)]/15 border-[var(--color-primary)]/50"
                    : "bg-gray-200 dark:bg-gray-800/40 border-gray-300 dark:border-gray-700/40 group-hover:border-gray-400 dark:group-hover:border-gray-600/60 group-hover:bg-gray-100 dark:group-hover:bg-gray-800/60"
                }`}
              />

              {/* Subtle overlay for active filter */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-[var(--color-primary)]/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Content */}
              <span className="relative z-10 flex items-center gap-2 lowercase">
                {filter}
                <span
                  className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-xs font-semibold transition-colors duration-300 ${
                    isActive
                      ? "bg-[var(--color-primary)]/20 text-[var(--color-primary)]"
                      : "bg-gray-300 dark:bg-gray-700/60 text-gray-700 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-700/80 group-hover:text-gray-900 dark:group-hover:text-gray-200"
                  }`}
                >
                  {count}
                </span>
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Active filter indicator line */}
      <motion.div
        className="h-0.5 bg-[var(--color-primary)]/20 mt-6"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
};
