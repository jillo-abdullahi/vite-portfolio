import { useRef, type FC } from "react";
import {
  type LinkedinIconHandle,
  LinkedinIcon,
} from "@/components/ui/linkedin-icon";
import { externalLinks } from "@/data";

export const LinkedInBtn: FC = () => {
  const linkedInRef = useRef<LinkedinIconHandle | null>(null);

  return (
    <a
      href={externalLinks.linkedIn}
      onMouseEnter={() => linkedInRef.current?.startAnimation()}
      onMouseLeave={() => linkedInRef.current?.stopAnimation()}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-11 h-11 rounded-xl text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-200 border border-[var(--color-primary)]/40 bg-gray-200 dark:bg-gray-700/10 hover:bg-gray-200 dark:hover:bg-gray-700/20"
      aria-label="LinkedIn Profile"
    >
      <LinkedinIcon ref={linkedInRef} className="w-5 h-5" />
    </a>
  );
};
