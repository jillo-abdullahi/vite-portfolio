import type { FC, ReactNode } from "react";
import { Fade } from "react-awesome-reveal";

interface SlideMeInProps {
  children: ReactNode;
  cascade?: boolean;
  duration?: number;
}

export const SlideMeIn: FC<SlideMeInProps> = ({
  children,
  cascade = false,
  duration = 2000,
}) => {
  return (
    <Fade cascade={cascade} damping={0.1} duration={duration} triggerOnce>
      {children}
    </Fade>
  );
};
