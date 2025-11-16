import type { FC, ReactNode } from "react";
import { Fade } from "react-awesome-reveal";
import { BorderedContent } from "./BorderedContent";

interface SlideMeInProps {
  children: ReactNode;
  cascade?: boolean;
  duration?: number;
  marginBottom?: string;
}

export const SlideMeIn: FC<SlideMeInProps> = ({
  children,
  cascade = false,
  duration = 1000,
  marginBottom,
}) => {
  return (
    <Fade cascade={cascade} damping={0.1} duration={duration} triggerOnce>
      <BorderedContent marginBottom={marginBottom}>{children}</BorderedContent>
    </Fade>
  );
};
