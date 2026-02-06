import type { FC } from "react";
import { SectionContent } from "./SectionContent";

type Props = {
  text: string | React.ReactNode;
  /** 'muted' uses gray text, 'accent' uses orange accent */
  variant?: "muted" | "accent";
  className?: string;
};

export const MemeText: FC<Props> = ({
  text,
  variant = "muted",
  className = "",
}) => {
  const colorClass = variant === "accent" ? "text-orange/80" : "text-gray-700";

  return (
    <SectionContent className="py-0 hidden md:block" useBorderedContent={false}>
      <div
        className={`uppercase font-bold text-[8px] pl-2 pb-1 ${colorClass} ${className}`}
      >
        {text}
      </div>
    </SectionContent>
  );
};
