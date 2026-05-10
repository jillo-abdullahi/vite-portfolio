import type { FC, ReactNode } from "react";

interface TechBadgeProps {
  icon: ReactNode;
  label: string;
  yearsExperience?: number;
}

export const TechBadge: FC<TechBadgeProps> = ({ icon, label, yearsExperience }) => {
  return (
    <div
      className="flex items-center gap-2 rounded-xl px-4 py-2
        bg-[var(--color-primary)]/10 dark:bg-[var(--color-primary)]/5
        border border-[var(--color-primary)]/40 dark:border-[var(--color-primary)]/30
        text-gray-700 dark:text-gray-200
        hover:bg-[var(--color-primary)]/20 dark:hover:bg-[var(--color-primary)]/10
        hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/50
        hover:-translate-y-0.5
        transition-all duration-200 ease-out cursor-default"
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="font-medium whitespace-nowrap text-lg text-gray-800 dark:text-gray-300">
        {label}
        {yearsExperience && (
          <sup className="text-xs text-[var(--color-primary)]/70 ml-0.5">
            {yearsExperience}+ yrs
          </sup>
        )}
      </span>
    </div>
  );
};
