import { useRef, type FC } from "react";
import { motion } from "framer-motion";
import { ZapIcon, type ZapHandle } from "./ui/ZapIcon";
import {
  UserRoundCheckIcon,
  type UserRoundCheckHandle,
} from "./ui/UserRoundCheckIcon";
interface CurrentlySectionProps {
  exploring?: string;
  availableFor?: string;
}

export const CurrentlySection: FC<CurrentlySectionProps> = ({
  exploring,
  availableFor,
}) => {
  const zapRef = useRef<ZapHandle | null>(null);
  const userRoundCheckRef = useRef<UserRoundCheckHandle | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full pt-4"
    >
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch">
        {exploring && (
          <div
            className="group relative border rounded-3xl p-5 bg-transparent hover:-translate-y-0.5 transition-all duration-300 ease-out border-gray-700/80 hover:border-gray-600/60 flex-1"
            style={{
              backgroundImage: "url('/icon-bg.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={() => zapRef.current?.startAnimation()}
            onMouseLeave={() => zapRef.current?.stopAnimation()}
          >
            <div className="absolute inset-0 rounded-xl bg-[var(--color-primary)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 flex items-start gap-2">
              <div className="flex-shrink-0 mt-0.5">
                <ZapIcon
                  ref={zapRef}
                  className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-primary)]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-sm text-gray-400 font-medium mb-1">
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
          <div
            className="group relative border rounded-3xl p-5 bg-transparent hover:-translate-y-0.5 transition-all duration-300 ease-out border-gray-700/80 hover:border-gray-600/60 flex-1"
            style={{
              backgroundImage: "url('/icon-bg.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={() => userRoundCheckRef.current?.startAnimation()}
            onMouseLeave={() => userRoundCheckRef.current?.stopAnimation()}
          >
            {/* Subtle hover overlay */}
            <div className="absolute inset-0 rounded-xl bg-[var(--color-primary)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 flex items-start gap-2">
              <div className="flex-shrink-0 mt-0.5">
                <UserRoundCheckIcon
                  ref={userRoundCheckRef}
                  className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-primary)]"
                />
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
