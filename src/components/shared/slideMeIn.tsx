import type { FC, ReactNode, CSSProperties } from 'react';
import { Slide } from "react-awesome-reveal";

interface SlideMeInProps {
  children: ReactNode;
  triggerOnce?: boolean;
  cascade?: boolean;
  style?: CSSProperties;
}

export const SlideMeIn: FC<SlideMeInProps> = ({
  children,
  triggerOnce = true,
  cascade = false,
  style,
}) => {
  return (
    <Slide
      direction="up"
      triggerOnce={triggerOnce}
      cascade={cascade}
      style={style}
    >
      {children}
    </Slide>
  );
};
