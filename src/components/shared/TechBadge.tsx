import type { FC, ReactNode } from "react";

interface TechBadgeProps {
  icon: ReactNode;
  label: string;
}

export const TechBadge: FC<TechBadgeProps> = ({ icon, label }) => {
  return (
    <div
      className="flex items-center gap-2 rounded-xl px-4 py-2
        bg-gray-100 dark:bg-white/5
        border border-[var(--color-primary)]/40 dark:border-white/10
        text-gray-700 dark:text-gray-200
        hover:bg-white dark:hover:bg-white/10
        hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/50
        hover:-translate-y-0.5
        transition-all duration-200 ease-out cursor-default"
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="font-medium text-sm whitespace-nowrap">{label}</span>
    </div>
  );
};
