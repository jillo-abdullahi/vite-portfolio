import { Link } from "@tanstack/react-router";
import { type FC } from "react";
import type { HouseHandle } from "../ui/HouseIcon";

export interface IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface NavigationCardProps {
  href: string;
  icon: React.ComponentType<{
    className?: string;
    ref?: React.Ref<HouseHandle | null>;
  }>;
  title: string;
  description: string;
  iconRef?: React.RefObject<IconHandle | null>;
}

const NavigationCard: FC<NavigationCardProps> = ({
  href,
  icon: Icon,
  title,
  description,
  iconRef,
}) => {
  return (
    <div
      onMouseEnter={() => iconRef?.current?.startAnimation()}
      onMouseLeave={() => iconRef?.current?.stopAnimation()}
    >
      <Link
        to={href}
        className="group flex flex-col items-center p-3 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-[var(--color-primary)]/50 hover:bg-gray-800/70 transition-all duration-200"
      >
        <Icon
          className="h-6 w-6 text-[var(--color-primary)] mb-2 group-hover:scale-110 transition-transform duration-200"
          ref={iconRef}
        />
        <span className="text-white font-medium text-sm">{title}</span>
        <span className="text-gray-400 text-xs text-center">{description}</span>
      </Link>
    </div>
  );
};

export default NavigationCard;
