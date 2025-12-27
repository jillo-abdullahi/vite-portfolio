import type { FC } from "react";
import { useState, useEffect } from "react";
import { formatInTimeZone } from "date-fns-tz";

/**
 * Timer component to show the current date/time in Nairobi/Africa
 */
const Timer: FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const timeZone = "Africa/Nairobi";
    const updateCurrentTime = () => {
      const currentTime = formatInTimeZone(new Date(), timeZone, "HH:mm:ss");
      setCurrentTime(currentTime);
    };

    const timerId = setInterval(updateCurrentTime, 1000);
    updateCurrentTime();

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200 dark:border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 transition-colors duration-300">
      <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></div>
      <p className="text-xs text-gray-700 dark:text-gray-400 font-medium">
        Nairobi (EAT)
      </p>
      <div className="w-px h-3 bg-gray-300 dark:bg-gray-700"></div>
      <p className="text-xs font-semibold text-[var(--color-primary)] w-[4.5rem]">
        {currentTime}
      </p>
    </div>
  );
};

export default Timer;
