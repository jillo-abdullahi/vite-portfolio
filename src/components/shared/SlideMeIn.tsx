import type { FC, ReactNode } from "react";
import { Slide, Fade } from "react-awesome-reveal";

interface SlideMeInProps {
  children: ReactNode;
  cascade?: boolean;
  duration?: number;
  delay?: number;
  className?: string;
  useFade?: boolean;
}

export const SlideMeIn: FC<SlideMeInProps> = ({
  children,
  cascade = false,
  duration = 800,
  delay = 0,
  className = "",
  useFade = false,
}) => {
  const AnimationComponent = useFade ? Fade : Slide;
  const animationProps = useFade
    ? {}
    : { direction: "up" as const };

  return (
    <AnimationComponent
      {...animationProps}
      cascade={cascade}
      damping={0.1}
      duration={duration}
      delay={delay * 1000}
      triggerOnce
      className={className}
    >
      {children}
    </AnimationComponent>
  );
};
