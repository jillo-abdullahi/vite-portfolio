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
        className="group flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-800/10 rounded-2xl border-2 border-[var(--color-primary)]/30 dark:border-[var(--color-primary)]/15 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/20 hover:bg-gray-200 dark:hover:bg-gray-800/70 transition-all duration-200"
      >
        <Icon
          className="h-10 w-10 text-[var(--color-primary)] mb-1 group-hover:scale-110 transition-transform duration-200"
          ref={iconRef}
        />
        <span className="text-gray-600 dark:text-white font-semibold dark:font-medium text-md">{title}</span>
        <span className="text-gray-500 dark:text-gray-400 text-sm text-center">{description}</span>
      </Link>
    </div>
  );
};

export default NavigationCard;
