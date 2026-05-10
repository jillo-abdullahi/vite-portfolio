import { externalLinks } from "@/data";
import { type FC, useRef } from "react";
import { GithubIcon, type GithubIconHandle } from "../ui/GithubIcon";

export const GithubBtn: FC = () => {
  const githubRef = useRef<GithubIconHandle | null>(null);
  return (
    <a
      href={externalLinks.github}
      onMouseEnter={() => githubRef.current?.startAnimation()}
      onMouseLeave={() => githubRef.current?.stopAnimation()}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-11 h-11 rounded-xl text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-200 border border-[var(--color-primary)]/40 bg-gray-200 dark:bg-gray-700/10 hover:bg-gray-200 dark:hover:bg-gray-700/20"
      aria-label="GitHub Profile"
    >
      <GithubIcon ref={githubRef} className="w-5 h-5" />
    </a>
  );
};
