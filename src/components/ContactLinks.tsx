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
import { IoCheckmarkDoneOutline } from "react-icons/io5";

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
  isInFooter?: boolean;
}

const ContactLinks: FC<ContactLinksProps> = ({ isInFooter }) => {
  const { linkedIn, github, twitter } = externalLinks;

  const socialLinks: SocialLink[] = [
    { icon: faGithub, href: github, name: "GitHub" },
    { icon: faLinkedin, href: linkedIn, name: "LinkedIn" },
    { icon: faXTwitter, href: twitter, name: "Twitter(X)" },
  ];

  const footerSocialLinks: SocialLink[] = [
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

    return (
      <a
        className="group relative w-full rounded-3xl border border-gray-700/40 hover:border-gray-600/60 hover:bg-gray-900/80 bg-gray-900/20 flex items-center justify-between cursor-pointer p-4 transition-all duration-300 ease-out hover:-translate-y-0.5"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 rounded-xl bg-orange/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10 flex items-center justify-start space-x-3">
          <div className="rounded-xl bg-gray-700/40 border border-gray-600 p-2 w-10 h-10 flex items-center justify-center">
            <FontAwesomeIcon
              icon={icon}
              style={{ fontSize: "20px" }}
              className="text-gray-300 transition-all group-hover:text-orange/90 duration-300"
            />
          </div>
          <div className="text-left">
            <div className="text-gray-100 font-medium">{name}</div>
            <div className="flex items-center space-x-1">
              <span className="text-sm text-gray-400">{displayHref}</span>
              <button
                onClick={handleCopy}
                className={`p-1 rounded transition-all duration-200 ${
                  isCopied
                    ? "text-green-400"
                    : "text-gray-500 hover:text-gray-300"
                }`}
                title={isCopied ? "Copied!" : "Copy link"}
              >
                {isCopied ? (
                  <IoCheckmarkDoneOutline className="w-3 h-3" />
                ) : (
                  <FaRegCopy className="w-3 h-3" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="relative z-10 hidden md:block">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="group-hover:-rotate-45 group-hover:text-orange/90 origin-center w-4 text-gray-300 transition-all duration-300"
          />
        </div>
      </a>
    );
  };

  // show different styles when rendered in the footer section
  const footerLinks = (
    <div className="flex flex-col space-y-2 w-full divider-y divider-gray-800">
      {footerSocialLinks.map(({ icon, href, name }, index) => {
        return (
          <SlideMeIn key={index}>
            <FooterLinkBox icon={icon} href={href} name={name} />
          </SlideMeIn>
        );
      })}
    </div>
  );

  if (isInFooter) {
    return footerLinks;
  }

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
