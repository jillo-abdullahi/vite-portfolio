import type { FC, ReactNode } from "react";

interface TechBadgeProps {
  icon: ReactNode;
  label: string;
}

export const TechBadge: FC<TechBadgeProps> = ({ icon, label }) => {
  return (
    <div
      className="flex items-center space-x-2 rounded-[11px] px-3 py-1.5 
      bg-gray-700/5 border-[var(--color-primary)]/15 text-gray-700 
      dark:bg-gray-900/40 hover:border-[var(--color-primary)]/30 dark:text-gray-400 
      backdrop-blur-md group-hover:bg-gray-700/10 dark:group-hover:bg-gray-900/50 
      group-hover:border-[var(--color-primary)]/20 transition-all duration-200 cursor-pointer border"
    >
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </div>
  );
};
