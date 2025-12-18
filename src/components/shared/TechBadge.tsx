import type { FC, ReactNode } from "react";

interface TechBadgeProps {
  icon: ReactNode;
  label: string;
}

export const TechBadge: FC<TechBadgeProps> = ({ icon, label }) => {
  return (
    <div className="flex items-center space-x-2 rounded-lg px-3 py-1.5 bg-gray-900/40 backdrop-blur-md group-hover:bg-gray-900/60 group-hover:border-[var(--color-primary)]/20 transition-all duration-200 cursor-pointer border border-gray-700/40">
      {icon}
      <span className="text-gray-400 font-medium text-sm">{label}</span>
    </div>
  );
};
