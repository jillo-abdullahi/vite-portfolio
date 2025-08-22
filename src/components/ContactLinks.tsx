import type { FC } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faStackOverflow,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
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
  const { linkedIn, github, twitter, stackoverflow, instagram } = externalLinks;

  const socialLinks: SocialLink[] = [
    { icon: faGithub, href: github },
    { icon: faLinkedin, href: linkedIn },
    { icon: faXTwitter, href: twitter },
  ];

  const footerSocialLinks: SocialLink[] = [
    {
      icon: faStackOverflow,
      href: stackoverflow,
      name: "Stackoverflow",
    },
    {
      icon: faGithub,
      href: github,
      name: "Github",
    },
    {
      icon: faInstagram,
      href: instagram,
      name: "Instagram",
    },
  ];

  if (isInFooter) {
    return (
      <div className="flex items-center space-x-4">
        {footerSocialLinks.map(({ icon, href, name }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 flex items-center space-x-2 group"
          >
            <span className="sr-only">{name}</span>
            <FontAwesomeIcon
              icon={icon}
              className="h-6 w-6 transition-all duration-300 group-hover:scale-110"
            />
          </a>
        ))}
      </div>
    );
  }

  return (
    <SlideMeIn>
      <div className="flex items-center space-x-4 border border-gray-900 w-fit px-4 py-3 rounded-lg bg-[#272f3790] shadowy">
        {socialLinks.map(({ icon, href }, index) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 flex items-center space-x-2 group"
          >
            <FontAwesomeIcon
              icon={icon}
              className="h-6 w-6 transition-all duration-300 group-hover:scale-110"
            />
            {index === socialLinks.length - 1 && (
              <ArrowRightIcon className="w-4 h-4 text-orange" />
            )}
          </a>
        ))}
      </div>
    </SlideMeIn>
  );
};

export default ContactLinks;
