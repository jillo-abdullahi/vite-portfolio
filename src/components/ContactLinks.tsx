import type { FC } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { externalLinks } from "../data";
import { SlideMeIn } from "./shared/slideMeIn";

interface SocialLink {
  icon: IconDefinition;
  href: string;
  name?: string;
}

interface ContactLinksProps {
  isContactPage?: boolean;
}

const ContactLinks: FC<ContactLinksProps> = ({ isContactPage }) => {
  const { linkedIn, github, twitter } = externalLinks;

  const socialLinks: SocialLink[] = [
    { icon: faGithub, href: github, name: "GitHub" },
    { icon: faLinkedin, href: linkedIn, name: "LinkedIn" },
    { icon: faXTwitter, href: twitter, name: "Twitter(X)" },
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
  const FooterLinkBox = ({ icon, href, name }: SocialLink) => {
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
        className="group relative w-full rounded-2xl border border-gray-700/40 hover:border-gray-600/60 hover:bg-gray-900/80 bg-gray-900/20 flex items-center justify-between cursor-pointer p-3 transition-all duration-300 ease-out hover:-translate-y-0.5"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 rounded-2xl bg-orange/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10 flex items-center justify-start space-x-3">
          <div className="rounded-lg bg-gray-700/40 border border-gray-700/40 p-2 w-10 h-10 flex items-center justify-center">
            <FontAwesomeIcon
              icon={icon}
              style={{ fontSize: "24px" }}
              className="text-gray-300 transition-all group-hover:text-orange/90 duration-300"
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
            className="p-2 rounded-lg bg-gray-800/60 hover:bg-orange/20 text-gray-300 group-hover:text-orange transition-colors duration-200 h-10 sm:h-8 w-10 sm:w-8 flex items-center justify-center cursor-pointer"
            title={`Open ${name}`}
            aria-label={`Open ${name}`}
          >
            <div className="hidden sm:block ">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-200"
              />
            </div>
            <div className="block sm:hidden">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="block sm:hidden w-4 h-4 -rotate-45"
              />
            </div>
          </button>
          {/* Copy Link Button */}
          <button
            onClick={handleCopy}
            className={`p-2 rounded-lg bg-gray-800/60 transform hover:bg-green-100/20 group-hover:scale-105 text-gray-300 group-hover:text-green-400 transition-all duration-200 h-10 sm:h-8 w-10 sm:w-8 flex items-center justify-center cursor-pointer ${
              isCopied ? "text-green-400" : ""
            }`}
            title={isCopied ? "Copied!" : "Copy link"}
            aria-label="Copy link"
          >
            {isCopied ? (
              <FaCheck className="w-4 h-4" />
            ) : (
              <FaRegCopy className="w-4 h-4" />
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
        return (
          <SlideMeIn key={index}>
            <FooterLinkBox icon={icon} href={href} name={name} />
          </SlideMeIn>
        );
      })}
    </div>
  );

  if (isContactPage) {
    return contactPageLinks;
  }

  // for landing page
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {socialLinks.map(({ icon, href, name }, index) => {
        return (
          <a
            key={index}
            className="group flex items-center space-x-1.5 border border-gray-700/40 rounded-xl px-2.5 py-1.5 bg-gray-800/60 hover:bg-gray-800/80 hover:border-gray-600/60 transition-all duration-200 cursor-pointer"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={icon}
              className="text-gray-300 group-hover:text-orange transition-colors duration-200 w-3.5 h-3.5"
            />
            <span className="text-gray-300 group-hover:text-orange font-medium text-xs transition-colors duration-200">
              {name}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default ContactLinks;
