import { externalLinks } from "@/data";
import { useRef } from "react";
// import { ContactIcon, type ContactHandle } from "./ui/ContactIcon";
import { PhoneIcon, type PhoneHandle } from "./ui/PhoneIcon";

export const ScheduleCallBtn = () => {
  const phoneRef = useRef<PhoneHandle | null>(null);

  return (
    <div
      className="flex-shrink-0"
      onMouseEnter={() => phoneRef.current?.startAnimation()}
      onMouseLeave={() => phoneRef.current?.stopAnimation()}
    >
      <a
        type="button"
        className="group overflow-hidden relative flex items-center gap-x-1.5 rounded-lg border border-orange/40 bg-orange/10 hover:bg-orange/20 px-4 py-1.5 text-orange hover:text-orange shadow-sm hover:border-orange/60 transition-all duration-200 cursor-pointer w-64 lg:w-fit justify-center"
        href={externalLinks.calLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <PhoneIcon
          ref={phoneRef}
          className="-ml-0.5 h-4 w-4 group-hover:scale-110 transition-transform duration-200"
          aria-hidden="true"
        />
        <span className="font-bold text-base md:text-lg">schedule call</span>
      </a>
    </div>
  );
};
