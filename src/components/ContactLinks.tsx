import type { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
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
  const { linkedIn, github, twitter, stackoverflow } = externalLinks;

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
    return (
      <a
        className="w-full sm:w-64 rounded-xl border border-gray-900 bg-[#272F3790] hover:bg-[#272F37] flex items-center justify-between group cursor-pointer p-2 transition duration-300 shadowy"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex items-center justify-start space-x-2">
          <div className="rounded-md bg-gray-700/50 border-gray-700 border p-2 w-10 h-10 flex items-center justify-center">
            <FontAwesomeIcon
              icon={icon}
              style={{ fontSize: "24px" }}
              className="text-gray-300 transition"
            />
          </div>
          <div className="text-left">
            <div className="text-gray-100">{name}</div>
          </div>
        </div>
        <ArrowRightIcon className="group-hover:-rotate-45 group-hover:text-white origin-center w-5 text-gray-200 transition duration-300" />
      </a>
    );
  };

  // show different styles when rendered in the footer section
  const footerLinks = (
    <div className="flex flex-col space-y-2 w-full">
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
    <SlideMeIn>
      <div className="flex items-center justify-center space-x-3 py-1">
        {socialLinks.map(({ icon, href }, index) => (
          <a
            className="text-gray-300 hover:text-orange transition-all duration-150 flex"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <FontAwesomeIcon icon={icon} style={{ fontSize: "18px" }} />
          </a>
        ))}
      </div>
    </SlideMeIn>
  );
};

export default ContactLinks;
