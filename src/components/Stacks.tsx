import type { FC, ReactElement } from "react";
import {
  ComputerDesktopIcon,
  ServerStackIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import { GrTest } from "react-icons/gr";

import { skills } from "../data";
import { StackCard } from "./shared/StackCard";
import type { Skill } from "../types";
import { SlideMeIn } from "./shared/SlideMeIn";

interface StackItemProps {
  icon: ReactElement;
  title: "frontend" | "backend" | "cloud & infra" | "web3" | "testing & QA";
  skills: Skill[];
}

const stackItems: StackItemProps[] = [
  {
    icon: (
      <ComputerDesktopIcon className="text-[var(--color-primary)] w-5 h-5" />
    ),
    title: "frontend",
    skills: skills.frontend,
  },
  {
    icon: <ServerStackIcon className="text-[var(--color-primary)] w-5 h-5" />,
    title: "backend",
    skills: skills.backend,
  },
  {
    icon: <CircleStackIcon className="text-[var(--color-primary)] w-5 h-5" />,
    title: "cloud & infra",
    skills: skills["databases/devops"] || [],
  },

  {
    icon: <GrTest className="text-[var(--color-primary)] w-4 h-4" />,
    title: "testing & QA",
    skills: skills["testing & QA"] || [],
  },
];

const Stacks: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stackItems.map((item) => (
        <SlideMeIn key={item.title} delay={0.2}>
          <div className="h-full">
            <StackCard
              icon={item.icon}
              title={item.title}
              skills={item.skills}
            />
          </div>
        </SlideMeIn>
      ))}
    </div>
  );
};

export default Stacks;
