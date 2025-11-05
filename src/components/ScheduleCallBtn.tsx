import { externalLinks } from "@/data";
import { useRef, type FC } from "react";
import { PhoneIcon, type PhoneHandle } from "./ui/PhoneIcon";

interface ScheduleCallBtnProps {
  isInNavBar?: boolean;
}

export const ScheduleCallBtn: FC<ScheduleCallBtnProps> = ({
  isInNavBar = false,
}) => {
  const phoneRef = useRef<PhoneHandle | null>(null);

  return (
    <div
      className="flex-shrink-0"
      onMouseEnter={() => phoneRef.current?.startAnimation()}
      onMouseLeave={() => phoneRef.current?.stopAnimation()}
    >
      <a
        type="button"
        className={`group overflow-hidden relative flex items-center gap-x-1.5 rounded-lg border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 px-4 py-1.5 text-[var(--color-primary)] hover:text-[var(--color-primary)] shadow-sm hover:border-[var(--color-primary)]/60 transition-all duration-200 cursor-pointer justify-center ${
          isInNavBar ? "w-fit" : "w-64 lg:w-fit"
        }`}
        href={externalLinks.calLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <PhoneIcon
          ref={phoneRef}
          className="-ml-0.5 h-4 w-4 group-hover:scale-110 transition-transform duration-200"
          aria-hidden="true"
        />
        <span className="font-semibold text-base md:text-lg">schedule call</span>
      </a>
    </div>
  );
};
