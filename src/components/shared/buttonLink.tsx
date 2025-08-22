import type { FC, ReactNode } from 'react';

interface ButtonLinkProps {
  children: ReactNode;
  href: string;
  width?: string;
}

const buttonStyles =
  "rounded-md bg-blue-500 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

export const ButtonLink: FC<ButtonLinkProps> = ({ children, href, width }) => {
  return (
    <a
      href={href}
      className={`${buttonStyles} ${width ? width : "w-fit"}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
