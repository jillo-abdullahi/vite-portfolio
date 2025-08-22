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
    <div className="flex items-center justify-center space-x-2 text-white">
      <p className="text-sm text-gray-300 font-medium">Local Time (EAT)</p>
      <p className="text-sm font-semibold text-orange/90 w-[4.5rem] flex items-center justify-center">
        <span>{currentTime}</span>
      </p>
    </div>
  );
};

export default Timer;
