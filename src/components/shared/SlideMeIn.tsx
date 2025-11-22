import type { FC, ReactNode } from "react";
import { Fade } from "react-awesome-reveal";
import { BorderedContent } from "./BorderedContent";

interface SlideMeInProps {
  children: ReactNode;
  cascade?: boolean;
  duration?: number;
  delay?: number;
  marginBottom?: string;
  className?: string;
  useBorderedContent?: boolean;
}

export const SlideMeIn: FC<SlideMeInProps> = ({
  children,
  cascade = false,
  duration = 1000,
  delay = 0,
  marginBottom,
  className = "",
  useBorderedContent = true,
}) => {
  return (
    <Fade
      cascade={cascade}
      damping={0.1}
      duration={duration}
      delay={delay * 1000}
      triggerOnce
      className={className}
    >
      {useBorderedContent ? (
        <BorderedContent marginBottom={marginBottom}>
          {children}
        </BorderedContent>
      ) : (
        children
      )}
    </Fade>
  );
};
