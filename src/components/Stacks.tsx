import type { FC, ReactElement } from "react";
import {
  ComputerDesktopIcon,
  ServerStackIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import { LiaEthereum } from "react-icons/lia";

import { skills } from "../data";
import { StackCard } from "./shared/stackCard";
import type { Skill } from "../types";

interface StackItemProps {
  icon: ReactElement;
  title: "frontend" | "backend" | "infra" | "devops" | "web3";
  skills: Skill[];
}

const stackItems: StackItemProps[] = [
  {
    icon: <ComputerDesktopIcon className="text-orange w-8 h-8" />,
    title: "frontend",
    skills: skills.frontend,
  },
  {
    icon: <ServerStackIcon className="text-orange w-8 h-8" />,
    title: "backend",
    skills: skills.backend,
  },
  {
    icon: <CircleStackIcon className="text-orange w-8 h-8" />,
    title: "infra",
    skills: skills.infra,
  },

  {
    icon: <LiaEthereum className="text-orange w-8 h-8" />,
    title: "web3",
    skills: skills.web3 || [],
  },
];

const Stacks: FC = () => {
  return (
    <div className="grid grid-cols-12 gap-3">
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
