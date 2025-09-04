import { Link } from "@tanstack/react-router";
import type { FC } from "react";

interface NavigationCardProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const NavigationCard: FC<NavigationCardProps> = ({ href, icon: Icon, title, description }) => {
  return (
    <Link
      to={href}
      className="group flex flex-col items-center p-3 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-orange/50 hover:bg-gray-800/70 transition-all duration-200"
    >
      <Icon className="h-6 w-6 text-orange mb-2 group-hover:scale-110 transition-transform duration-200" />
      <span className="text-white font-medium text-sm">{title}</span>
      <span className="text-gray-400 text-xs text-center">{description}</span>
    </Link>
  );
};

export default NavigationCard;
