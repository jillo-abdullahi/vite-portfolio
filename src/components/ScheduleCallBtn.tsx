import { externalLinks } from "@/data";
import { useRef, useState, useEffect, type FC } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";

interface ScheduleCallBtnProps {
  isInNavBar?: boolean;
}

export const ScheduleCallBtn: FC<ScheduleCallBtnProps> = ({
  isInNavBar = false,
}) => {
  const [lottieData, setLottieData] = useState<any>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    fetch("/googleMeet.json")
      .then((res) => res.json())
      .then((data) => setLottieData(data));
  }, []);

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      lottieRef.current.goToAndStop(0, true); // Reset to start
      lottieRef.current.play();
    }
  };

  return (
    <div className="flex-shrink-0" onMouseEnter={handleMouseEnter}>
      <a
        type="button"
        className={`group/btn overflow-hidden relative flex items-center gap-x-1.5 rounded-xl border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 px-4 py-2 text-[var(--color-primary)] hover:text-[var(--color-primary)] shadow-sm hover:border-[var(--color-primary)]/60 transition-all duration-200 cursor-pointer justify-center ${
          isInNavBar ? "w-fit" : "w-64 lg:w-fit"
        }`}
        href={externalLinks.calLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {lottieData && (
          <Lottie
            lottieRef={lottieRef}
            animationData={lottieData}
            className="-ml-0.5 h-6 w-6 group-hover/btn:scale-110 transition-transform duration-200"
            autoplay={false}
            loop={false}
          />
        )}
        <span className="font-semibold text-lg group-hover/btn:translate-y-[-1px] transition-transform duration-200">
          schedule call
        </span>
      </a>
    </div>
  );
};
