import type { FC } from "react";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faXTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { externalLinks } from "../data";

import { ClipboardIcon, type ClipboardIconHandle } from "./ui/ClipboardIcon";
import { CheckIcon, type CheckIconHandle } from "./ui/CheckIcon";
import {
  SquareArrowOutUpRightIcon,
  type SquareArrowOutUpRightIconHandle,
} from "./ui/SquareArrowOutUpRightIcon";
import { LinkedInIcon, type LinkedInIconHandle } from "./ui/LinkedinIcon";
import { TwitterIcon, type TwitterIconHandle } from "./ui/TwitterIcon";
import { GithubIcon, type GithubIconHandle } from "./ui/GithubIcon";
import { SlideMeIn } from "./shared/SlideMeIn";

interface SocialLink {
  icon: IconDefinition;
  href: string;
  name?: string;
  clipboardRef?: React.RefObject<ClipboardIconHandle | null>;
  checkIconRef?: React.RefObject<CheckIconHandle | null>;
  squareArrowRef?: React.RefObject<SquareArrowOutUpRightIconHandle | null>;
}

interface ContactLinksProps {
  isContactPage?: boolean;
}

interface FooterLink {
  href: string;
  name?: string;
  ref:
    | React.RefObject<GithubIconHandle | null>
    | React.RefObject<LinkedInIconHandle | null>
    | React.RefObject<TwitterIconHandle | null>;
}

const ContactLinks: FC<ContactLinksProps> = ({ isContactPage }) => {
  const { linkedIn, github, twitter } = externalLinks;
  const linkedInRef = useRef<LinkedInIconHandle | null>(null);
  const twitterRef = useRef<TwitterIconHandle | null>(null);
  const githubRef = useRef<GithubIconHandle | null>(null);

  const socialLinks: FooterLink[] = [
    { href: github, name: "GitHub", ref: githubRef },
    { href: linkedIn, name: "LinkedIn", ref: linkedInRef },
    { href: twitter, name: "Twitter(X)", ref: twitterRef },
  ];

  const contactPageSocialLinks: SocialLink[] = [
    {
      icon: faEnvelope,
      href: `mailto:${externalLinks.email}`,
      name: "Email",
    },
    {
      icon: faTelegram,
      href: externalLinks.telegram,
      name: "Telegram",
    },
    {
      icon: faXTwitter,
      href: twitter,
      name: "Twitter(X)",
    },
    {
      icon: faLinkedin,
      href: linkedIn,
      name: "LinkedIn",
    },
  ];

  // footer link box
  const FooterLinkBox = ({
    icon,
    href,
    name,
    checkIconRef,
    clipboardRef,
    squareArrowRef,
  }: SocialLink) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const copyText = href.replace(/^mailto:/, "");
      navigator.clipboard.writeText(copyText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    };

    const displayHref = href
      .replace(/^mailto:/, "")
      .replace(/^https?:\/\//, "");

    // Display username for mobile (e.g. /shrewdTurtle from t.me/shrewdTurtle)
    const getMobileDisplay = (href: string) => {
      // Remove mailto and protocol
      let url = href.replace(/^mailto:/, "").replace(/^https?:\/\//, "");
      // If it's an email, just show the username before @
      if (href.startsWith("mailto:")) {
        return "/" + url.split("@")[0];
      }
      // For URLs, show only the last path segment (username)
      const parts = url.split("/");
      if (parts.length > 1) {
        return "/" + parts[parts.length - 1];
      }
      return url;
    };

    return (
      <a
        className="group relative w-full rounded-2xl border border-[var(--color-primary)]/15 hover:border-[var(--color-primary)]/20 hover:bg-gray-900/20 bg-gray-900/20 flex items-center justify-between cursor-pointer p-3 transition-all duration-300 ease-out hover:-translate-y-0.5"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 rounded-2xl bg-[var(--color-primary)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10 flex items-center justify-start space-x-3">
          <div className="rounded-lg bg-gray-700/40 border border-gray-700/40 p-2 w-10 h-10 flex items-center justify-center">
            <FontAwesomeIcon
              icon={icon}
              style={{ fontSize: "24px" }}
              className="text-gray-300 transition-all group-hover:text-[var(--color-primary)]/90 duration-300"
            />
          </div>
          <div className="text-left">
            <div className="text-gray-100 font-medium">{name}</div>
            <div className="flex items-center space-x-1">
              <span className="text-sm text-gray-400 hidden sm:inline">
                {displayHref}
              </span>
              <span className="text-sm text-gray-400 sm:hidden">
                {getMobileDisplay(href)}
              </span>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex gap-2 items-center flex">
          {/* Open Link Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(href, "_blank", "noopener,noreferrer");
            }}
            className="transform group-hover:scale-105 transition-all duration-200 cursor-pointer"
            aria-label={`Open ${name}`}
          >
            <div
              className="flex rounded-md bg-gray-800/60 items-center justify-center h-10 w-10"
              onMouseEnter={() =>
                squareArrowRef && squareArrowRef.current?.startAnimation()
              }
              onMouseLeave={() =>
                squareArrowRef && squareArrowRef.current?.stopAnimation()
              }
            >
              <SquareArrowOutUpRightIcon
                ref={squareArrowRef}
                size={22}
                className="text-[var(--color-primary)]"
              />
            </div>
          </button>
          {/* Copy Link Button */}
          <button
            onClick={handleCopy}
            className={`transform group-hover:scale-105 transition-all duration-200 cursor-pointer`}
            aria-label="Copy link"
          >
            {isCopied ? (
              <div
                className="flex items-center justify-center p-2 rounded-md bg-gray-800/60 h-10 w-10"
                onMouseEnter={() =>
                  checkIconRef && checkIconRef.current?.startAnimation()
                }
                onMouseLeave={() =>
                  checkIconRef && checkIconRef.current?.stopAnimation()
                }
              >
                <CheckIcon
                  ref={checkIconRef}
                  size={22}
                  className="text-green-400"
                />
              </div>
            ) : (
              <div
                className="flex items-center justify-center p-2 rounded-md bg-gray-800/60 h-10 w-10"
                onMouseEnter={() =>
                  clipboardRef && clipboardRef.current?.startAnimation()
                }
                onMouseLeave={() =>
                  clipboardRef && clipboardRef.current?.stopAnimation()
                }
              >
                <ClipboardIcon
                  ref={clipboardRef}
                  size={22}
                  className="text-gray-300"
                />
              </div>
            )}
          </button>
        </div>
      </a>
    );
  };

  // for contact page
  const contactPageLinks = (
    <div className="flex flex-col space-y-2 w-full divider-y divider-gray-800">
      {contactPageSocialLinks.map(({ icon, href, name }, index) => {
        const clipboardRef = useRef<ClipboardIconHandle | null>(null);
        const checkIconRef = useRef<CheckIconHandle | null>(null);
        const squareArrowRef = useRef<SquareArrowOutUpRightIconHandle | null>(
          null
        );
        return (
          <SlideMeIn useBorderedContent={false} key={index} delay={index * 0.2}>
            <FooterLinkBox
              icon={icon}
              href={href}
              name={name}
              clipboardRef={clipboardRef}
              checkIconRef={checkIconRef}
              squareArrowRef={squareArrowRef}
            />
          </SlideMeIn>
        );
      })}
    </div>
  );

  if (isContactPage) {
    return contactPageLinks;
  }

  // for footer section
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {socialLinks.map(({ href, name, ref }, index) => {
        return (
          <a
            key={index}
            className="group flex items-center space-x-1.5 border border-[var(--color-primary)]/15 hover:border-[var(--color-primary)]/20 rounded-xl px-2.5 py-1.5 bg-gray-800/60 hover:bg-gray-800/80 transition-all duration-200 cursor-pointer"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => {
              ref.current?.startAnimation();
            }}
            onMouseLeave={() => {
              ref.current?.stopAnimation();
            }}
          >
            {name === "LinkedIn" && (
              <LinkedInIcon
                ref={ref}
                className="w-3 h-3 text-gray-300 group-hover:text-[var(--color-primary)] transition-colors duration-200"
              />
            )}
            {name === "Twitter(X)" && (
              <TwitterIcon
                ref={ref}
                className="w-3 h-3 text-gray-300 group-hover:text-[var(--color-primary)] transition-colors duration-200"
              />
            )}
            {name === "GitHub" && (
              <GithubIcon
                ref={ref}
                className="w-3 h-3 text-gray-300 group-hover:text-[var(--color-primary)] transition-colors duration-200"
              />
            )}
            <span className="text-gray-300 group-hover:text-[var(--color-primary)] font-medium text-xs transition-all duration-200">
              {name}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default ContactLinks;
