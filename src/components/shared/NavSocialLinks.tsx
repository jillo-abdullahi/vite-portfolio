import type { ExternalLinks } from "@/types";
import { GithubIcon, type GithubIconHandle } from "../ui/GithubIcon";
import { LinkedInIcon, type LinkedInIconHandle } from "../ui/LinkedinIcon";

interface NavSocialLinksProps {
  externalLinks: ExternalLinks;
  githubRef: React.RefObject<GithubIconHandle | null>;
  linkedInRef: React.RefObject<LinkedInIconHandle | null>;
}
export const NavSocialLinks = ({
  externalLinks,
  githubRef,
  linkedInRef,
}: NavSocialLinksProps) => (
  <div className="flex items-center space-x-2 h-full">
    <a
      href={externalLinks.github}
      onMouseEnter={() => githubRef.current?.startAnimation()}
      onMouseLeave={() => githubRef.current?.stopAnimation()}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-gray-900 w-11 h-11 rounded-xl text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-200 border border-gray-700/40 bg-gray-700/10 hover:bg-gray-700/20"
      aria-label="GitHub Profile"
    >
      <GithubIcon ref={githubRef} className="w-5 h-5" />
    </a>
    <a
      href={externalLinks.linkedIn}
      onMouseEnter={() => linkedInRef.current?.startAnimation()}
      onMouseLeave={() => linkedInRef.current?.stopAnimation()}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-gray-900 w-11 h-11 rounded-xl text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-200 border border-gray-700/40 bg-gray-700/10 hover:bg-gray-700/20"
      aria-label="LinkedIn Profile"
    >
      <LinkedInIcon ref={linkedInRef} className="w-5 h-5" />
    </a>
  </div>
);
