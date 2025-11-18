import type { FC, ReactElement } from "react";
import {
  ComputerDesktopIcon,
  ServerStackIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import { LiaEthereum } from "react-icons/lia";

import { skills } from "../data";
import { StackCard } from "./shared/StackCard";
import type { Skill } from "../types";

interface StackItemProps {
  icon: ReactElement;
  title: "frontend" | "backend" | "infra" | "db/devops" | "web3";
  skills: Skill[];
}

const stackItems: StackItemProps[] = [
  {
    icon: <ComputerDesktopIcon className="text-[var(--color-primary)] w-6 h-6" />,
    title: "frontend",
    skills: skills.frontend,
  },
  {
    icon: <ServerStackIcon className="text-[var(--color-primary)] w-6 h-6" />,
    title: "backend",
    skills: skills.backend,
  },
  {
    icon: <CircleStackIcon className="text-[var(--color-primary)] w-6 h-6" />,
    title: "db/devops",
    skills: skills["databases/devops"] || [],
  },

  {
    icon: <LiaEthereum className="text-[var(--color-primary)] w-6 h-6" />,
    title: "web3",
    skills: skills.web3 || [],
  },
];

const Stacks: FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {stackItems.map((item) => (
        <div
          key={item.title}
          className="col-span-12 md:col-span-6 lg:col-span-3"
        >
          <StackCard icon={item.icon} title={item.title} skills={item.skills} />
        </div>
      ))}
    </div>
  );
};

export default Stacks;
