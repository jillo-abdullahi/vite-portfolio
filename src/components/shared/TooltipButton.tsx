import type { ReactNode } from "react";

interface TooltipButtonProps {
  href: string;
  tooltipText: string;
  className: string;
  ariaLabel: string;
  children: ReactNode;
}

export const TooltipButton = ({
  href,
  tooltipText,
  className,
  ariaLabel,
  children,
}: TooltipButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative group/tooltip ${className}`}
      aria-label={ariaLabel}
    >
      {children}
      <span className="absolute border border-gray-400/90 rounded-md top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
        {tooltipText}
      </span>
    </a>
  );
};
