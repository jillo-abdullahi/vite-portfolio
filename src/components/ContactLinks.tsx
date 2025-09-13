import type { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
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
    { icon: faGithub, href: github },
    { icon: faLinkedin, href: linkedIn },
    { icon: faXTwitter, href: twitter },
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
    return (
      <a
        className="w-full rounded-xl border border-gray-800 hover:bg-gray-900/60 flex items-center justify-between group cursor-pointer p-2 transition duration-300 "
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex items-center justify-start space-x-2">
          <div className="rounded-md bg-gray-700/50 border-gray-700 border p-2 w-10 h-10 flex items-center justify-center">
            <FontAwesomeIcon
              icon={icon}
              style={{ fontSize: "24px" }}
              className="text-gray-300 transition group-hover:text-orange"
            />
          </div>
          <div className="text-left">
            <div className="text-gray-100">{name}</div>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="group-hover:-rotate-45 group-hover:text-white origin-center w-5 text-gray-200 transition duration-300"
        />
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
    <div className="flex items-center justify-center space-x-3 py-1">
      {socialLinks.map(({ icon, href }, index) => (
        <div className="flex" key={index}>
          <a
            key={index}
            className="text-gray-300 hover:text-orange transform hover:scale-140 transition-all duration-150 flex"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon} style={{ fontSize: "18px" }} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ContactLinks;
