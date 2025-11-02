import React from "react";
import { GiBullseye, GiBrain } from "react-icons/gi";
import { FaCode, FaGamepad } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";
import { GrTools } from "react-icons/gr";
import { LuRocket, LuTreePalm, LuCoffee } from "react-icons/lu";
import { IoBookmarksOutline } from "react-icons/io5";
import { ImSleepy } from "react-icons/im";




import { HiOutlineLightBulb, HiOutlineAcademicCap } from "react-icons/hi";

export const StatusType = {
  CRAFTING: "crafting",
  CODING: "coding",
  BUILDING: "building",
  LEARNING: "learning",
  AVAILABLE: "available",
  COFFEE: "coffee",
  THINKING: "thinking",
  LAUNCHING: "launching",
  STUDYING: "studying",
  READING: "reading",
  GAMING: "gaming",
  SLEEPING: "sleeping",
  VACATION: "vacation",
} as const;

export type StatusType = (typeof StatusType)[keyof typeof StatusType];

interface StatusConfig {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  rotationClass?: string;
}

const statusConfigs: Record<StatusType, StatusConfig> = {
  [StatusType.CRAFTING]: {
    text: "Crafting...",
    icon: GiBullseye,
    rotationClass: "rotate-145",
  },
  [StatusType.CODING]: {
    text: "Coding...",
    icon: FaCode,
  },
  [StatusType.BUILDING]: {
    text: "Building...",
    icon: GrTools,
  },
  [StatusType.LEARNING]: {
    text: "Learning...",
    icon: HiOutlineLightBulb,
  },
  [StatusType.AVAILABLE]: {
    text: "Available",
    icon: MdOutlineEventAvailable,
  },
  [StatusType.COFFEE]: {
    text: "Coffee Break",
    icon: LuCoffee,
  },
  [StatusType.THINKING]: {
    text: "Thinking...",
    icon: GiBrain,
  },
  [StatusType.LAUNCHING]: {
    text: "Launching...",
    icon: LuRocket,
    rotationClass: "rotate-270",
  },
  [StatusType.STUDYING]: {
    text: "Studying",
    icon: HiOutlineAcademicCap,
  },
  [StatusType.READING]: {
    text: "Reading",
    icon: IoBookmarksOutline,
  },
  [StatusType.GAMING]: {
    text: "Gaming",
    icon: FaGamepad,
  },
  [StatusType.SLEEPING]: {
    text: "Sleeping...",
    icon: ImSleepy,
  },
  [StatusType.VACATION]: {
    text: "On Vacation...",
    icon: LuTreePalm,
  },
};

interface StatusPillProps {
  status: StatusType;
  customText?: string;
  className?: string;
}

export const StatusPill: React.FC<StatusPillProps> = ({
  status,
  customText,
  className = "",
}) => {
  const config = statusConfigs[status];
  const Icon = config.icon;
  const displayText = customText || config.text;

  const baseClasses =
    "bg-gray-800/90 border-2 border-[var(--color-primary)]/60 text-[var(--color-primary)]/80 rounded-full px-2 py-1 flex items-center backdrop-blur-sm shadow-lg w-fit";

  return (
    <div className={`${baseClasses} ${className}`}>
      <Icon className={`h-4 w-4 flex-shrink-0 mr-1 ${config.rotationClass}`} />
      <span className="text-xs font-medium text-gray-200 whitespace-nowrap">
        {displayText}
      </span>
    </div>
  );
};
