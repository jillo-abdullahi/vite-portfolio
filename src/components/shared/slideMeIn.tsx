import type { FC, ReactNode } from "react";
import { Fade } from "react-awesome-reveal";

interface SlideMeInProps {
  children: ReactNode;
  cascade?: boolean;
}

export const SlideMeIn: FC<SlideMeInProps> = ({
  children,
  cascade = false,
}) => {
  return <Fade cascade={cascade} damping={0.1} duration={2000}>{children}</Fade>;
};
