import type { ReactNode } from "react";
import { SlideMeIn } from "./slideMeIn";
import { SectionContent } from "./SectionContent";

interface SectionHeadingProps {
  children: ReactNode;
  linkText?: string;
  linkHref?: string;
  isContactPage?: boolean;
  isDownload?: boolean;
  downloadFileName?: string;
  rightLink?: ReactNode;
  linkTextIcon?: ReactNode;
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
 * @param {React.ReactNode} [props.linkTextIcon] - Optional React node to be displayed as an icon next to the link text
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
  linkTextIcon,
}: SectionHeadingProps) => {
  const fontSizeClass = isContactPage
    ? "text-4xl md:text-5xl lg:text-6xl"
    : "text-lg md:text-xl lg:text-2xl font-medium";
  return (
    <SlideMeIn marginBottom="mb-6">
      <SectionContent padding={isContactPage ? "py-6 md:py-10" : "py-4"}>
        <div className="w-full">
          <div className="flex space-x-4 items-center justify-between">
            <p className={`${fontSizeClass} text-gray-300 text-left space-x-2`}>
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
                  {linkTextIcon ? (
                    <span className="inline-block ml-1 text-xl">
                      {linkTextIcon}
                    </span>
                  ) : null}
                </a>
              ) : null}
            </p>
            {rightLink ? (
              <div className="hidden sm:block">{rightLink}</div>
            ) : null}
          </div>
        </div>
      </SectionContent>
    </SlideMeIn>
  );
};
