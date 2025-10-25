import { externalLinks } from "@/data";
import { useRef } from "react";
import { ContactIcon, type ContactHandle } from "./ui/ContactIcon";

export const ScheduleCallBtn = () => {
  const contactRef = useRef<ContactHandle | null>(null);

  return (
    <div
      className="flex-shrink-0"
      onMouseEnter={() => contactRef.current?.startAnimation()}
      onMouseLeave={() => contactRef.current?.stopAnimation()}
    >
      <a
        type="button"
        className="group relative inline-flex items-center gap-x-1.5 rounded-lg border border-orange/40 bg-orange/10 hover:bg-orange/20 px-4 py-1.5 text-orange hover:text-orange shadow-sm hover:border-orange/60 transition-all duration-200 cursor-pointer"
        href={externalLinks.calLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ContactIcon
          ref={contactRef}
          className="-ml-0.5 h-4 w-4 group-hover:scale-110 transition-transform duration-200"
          aria-hidden="true"
        />
        <span className="font-bold text-base md:text-lg">schedule call</span>
      </a>
    </div>
  );
};
