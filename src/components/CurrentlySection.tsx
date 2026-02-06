import { useRef, type FC, type ReactNode, type RefObject } from "react";
import { motion } from "framer-motion";
import { ZapIcon, type ZapHandle } from "./ui/ZapIcon";
import {
  UserRoundCheckIcon,
  type UserRoundCheckHandle,
} from "./ui/UserRoundCheckIcon";
import { SlideMeIn } from "./shared/SlideMeIn";

interface CurrentlySectionProps {
  exploring?: string;
  availableFor?: string;
}

interface InfoCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  iconRef: RefObject<{ startAnimation: () => void; stopAnimation: () => void } | null>;
}

const InfoCard: FC<InfoCardProps> = ({ icon, label, value, iconRef }) => {
  return (
    <div
      className="group relative rounded-3xl p-4 bg-gradient-to-b from-[var(--color-primary)]/5 via-transparent to-transparent border-2 border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/30 hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 flex items-center gap-3 lg:gap-4">
        <div className="flex-shrink-0 p-2 lg:p-3 rounded-xl bg-gray-700/10 dark:bg-gray-800/30 border border-[var(--color-primary)]/15 group-hover:border-[var(--color-primary)]/30 transition-colors duration-300 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-[var(--color-primary)] font-semibold uppercase tracking-wider mb-1">
            {label}
          </p>
          <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 font-semibold truncate">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

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
      className="w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {exploring && (
          <SlideMeIn>
            <InfoCard
              icon={<ZapIcon ref={zapRef} className="text-[var(--color-primary)]" />}
              label="Currently Exploring"
              value={exploring}
              iconRef={zapRef}
            />
          </SlideMeIn>
        )}

        {availableFor && (
          <SlideMeIn>
            <InfoCard
              icon={<UserRoundCheckIcon ref={userRoundCheckRef} className="text-[var(--color-primary)]" />}
              label="Available For"
              value={availableFor}
              iconRef={userRoundCheckRef}
            />
          </SlideMeIn>
        )}
      </div>
    </motion.div>
  );
};
