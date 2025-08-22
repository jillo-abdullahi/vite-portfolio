import type { FC, ReactElement } from "react";
import {
  ComputerDesktopIcon,
  ServerStackIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { skills } from "../data";
import { StackCard } from "./shared/stackCard";
import type { Skill } from "../types";

interface StackItemProps {
  icon: ReactElement;
  title: "front-end" | "back-end" | "databases" | "devops";
  skills: Skill[];
}

const stackItems: StackItemProps[] = [
  {
    icon: <ComputerDesktopIcon className="text-orange w-8 h-8" />,
    title: "front-end",
    skills: skills.frontend,
  },
  {
    icon: <ServerStackIcon className="text-orange w-8 h-8" />,
    title: "back-end",
    skills: skills.backend,
  },
  {
    icon: <CircleStackIcon className="text-orange w-8 h-8" />,
    title: "databases",
    skills: skills.databases,
  },
  {
    icon: <WrenchScrewdriverIcon className="text-orange w-8 h-8" />,
    title: "devops",
    skills: skills.devops,
  },
];

const Stacks: FC = () => {
  return (
    <div className="content">
      <div className="grid grid-cols-12 gap-3">
        {stackItems.map((item) => (
          <div
            key={item.title}
            className="col-span-12 md:col-span-6 lg:col-span-3"
          >
            <StackCard
              icon={item.icon}
              title={item.title}
              skills={item.skills}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stacks;
