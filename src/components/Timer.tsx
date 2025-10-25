import type { FC } from 'react';
import { useState, useEffect } from "react";
import { formatInTimeZone } from "date-fns-tz";

/**
 * Timer component to show the current date/time in Nairobi/Africa
 */
const Timer: FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const timeZone = "Africa/Nairobi"; // EAT time zone
    const updateCurrentTime = () => {
      const currentTime = formatInTimeZone(new Date(), timeZone, "HH:mm:ss");
      setCurrentTime(currentTime);
    };

    const timerId = setInterval(updateCurrentTime, 1000);
    updateCurrentTime(); // initial call to set time immediately

    return () => clearInterval(timerId); // cleanup on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center space-x-1">
      <p className="text-xs text-gray-400 font-medium">Local Time (EAT)</p>
      <p className="text-xs font-semibold text-orange/90 w-[4rem] flex items-center justify-center">
        <span>{currentTime}</span>
      </p>
    </div>
  );
};

export default Timer;
