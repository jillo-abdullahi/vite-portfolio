import type { FC } from "react";
import {
  UserCircleIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  ChatBubbleBottomCenterTextIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { SlideMeIn } from "@/components/shared/slideMeIn";

interface SectionHeadingProps {
  heading: string;
  subHeading?: string;
  id: "about" | "contact" | "stack" | "projects" | "education";
}

export const SectionHeading: FC<SectionHeadingProps> = ({
  heading,
  subHeading,
  id,
}) => {
  return (
    <SlideMeIn>
      <div className="flex items-center justify-center space-x-1">
        {id === "about" ? (
          <UserCircleIcon className="w-6 h-6 text-orange" />
        ) : id === "contact" ? (
          <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-orange" />
        ) : id === "stack" ? (
          <Square3Stack3DIcon className="w-6 h-6 text-orange" />
        ) : id === "projects" ? (
          <RocketLaunchIcon className="w-6 h-6 text-orange" />
        ) : id === "education" ? (
          <AcademicCapIcon className="w-6 h-6 text-orange" />
        ) : null}
        <h2 className="font-semibold text-lg md:text-2xl text-gray-200">
          {heading} {subHeading}
        </h2>
      </div>
    </SlideMeIn>
  );
};
