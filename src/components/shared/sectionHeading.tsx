import type { ReactNode } from "react";
import { SlideMeIn } from "./slideMeIn";

interface SectionHeadingProps {
  children: ReactNode;
  linkText?: string;
  linkHref?: string;
  isContactPage?: boolean;
  isDownload?: boolean;
  downloadFileName?: string;
  rightLink?: ReactNode;
}

/**
 * A component that renders a section heading with optional link.
 * @component
 * @param {object} props - The component props
 * @param {React.ReactNode} props.children - The content to be displayed as the main heading text
 * @param {string} props.linkText - The text to be displayed as a link
 * @param {string} props.linkHref - The URL that the link should navigate to
 * @param {Boolean} [props.isContactPage=false] - Whether the heading is for the contact page
 * @param {Boolean} [props.isDownload=false] - Whether the link should download a file
 * @param {string} [props.downloadFileName] - Optional filename for the download
 * @param {React.ReactNode} [props.rightLink] - Optional React node to be displayed on the right side of the heading
 * @returns {JSX.Element} A section heading component with optional link
 */
export const SectionHeading = ({
  children,
  linkText,
  linkHref,
  isContactPage = false,
  isDownload = false,
  downloadFileName,
  rightLink,
}: SectionHeadingProps) => {
  const fontSizeClass = isContactPage
    ? "text-4xl md:text-6xl lg:text-7xl"
    : "text-lg md:text-xl lg:text-2xl font-medium";
  return (
    <SlideMeIn>
      <div className="w-full">
        <div className="flex space-x-4 items-center justify-between">
          <p
            className={`${fontSizeClass} text-gray-300 text-center md:text-left space-x-2`}
          >
            <span>{children}</span>
            {linkHref ? (
              <a
                href={linkHref}
                target="_blank"
                rel="noreferrer"
                className="text-orange/80 underline hover:text-orange transition-all duration-150"
                {...(isDownload && { download: downloadFileName || true })}
              >
                {linkText}
              </a>
            ) : null}
          </p>
          {rightLink ? rightLink : null}
        </div>
      </div>
      <hr
        className={`border-t border-gray-700 w-full ${
          isContactPage ? "my-10" : "my-6"
        }`}
      />
    </SlideMeIn>
  );
};
