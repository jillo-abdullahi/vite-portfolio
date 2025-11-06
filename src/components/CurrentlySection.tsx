import { type FC } from "react";
import { motion } from "framer-motion";

interface CurrentlySectionProps {
  exploring?: string;
  availableFor?: string;
}

export const CurrentlySection: FC<CurrentlySectionProps> = ({
  exploring,
  availableFor,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full pt-4"
    >
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch">
        {exploring && (
          <div className="group relative flex-1 rounded-xl border-none border-gray-700/40 bg-gray-800/40 hover:bg-gray-800/60 hover:border-gray-600/60 transition-all duration-200 p-3">
            {/* Subtle hover overlay */}
            <div className="absolute inset-0 rounded-xl bg-[var(--color-primary)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 flex items-start gap-2">
              <div className="flex-shrink-0 mt-0.5">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-sm text-gray-400 font-medium mb-0.5">
                  currently exploring
                </p>
                <p className="text-sm md:text-base text-gray-200 font-semibold">
                  {exploring}
                </p>
              </div>
            </div>
          </div>
        )}

        {availableFor && (
          <div className="group relative flex-1 rounded-xl border-none border-gray-700/40 bg-gray-800/40 hover:bg-gray-800/60 hover:border-gray-600/60 transition-all duration-200 p-3">
            {/* Subtle hover overlay */}
            <div className="absolute inset-0 rounded-xl bg-[var(--color-primary)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 flex items-start gap-2">
              <div className="flex-shrink-0 mt-0.5">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-sm text-gray-400 font-medium mb-0.5">
                  available for
                </p>
                <p className="text-sm md:text-base text-gray-200 font-semibold">
                  {availableFor}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
