import type { FC, ReactNode } from "react";
import type { Skill } from "@/types";
import { SlideMeIn } from "@/components/shared/slideMeIn";

interface StackCardProps {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

export const StackCard: FC<StackCardProps> = ({ title, icon, skills }) => {
  return (
    <SlideMeIn cascade>
      <div className="group h-auto my-5 p-8 text-center rounded-3xl border border-gray-700 bg-gray-900/80 hover:-translate-y-2 transition-all duration-300 text-base">
        <div className="flex items-center justify-start space-x-2 mb-6 text-orange-dark">
          <div className="p-2 bg-gray-700 rounded-full transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <span className="text-gray-200 uppercase font-bold text-base">
            {title}
          </span>
        </div>

        <div className="flex flex-col space-y-3">
          {skills.map(({ name, level }) => (
            <div className="flex flex-col items-start space-y-1" key={name}>
              <div className="text-gray-200 w-full flex items-center justify-between">
                <span className="text-base">{name}</span>
              </div>
              <div className="w-full h-1 bg-gray-300">
                <div
                  className="bg-orange/90 h-full"
                  style={{ width: level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideMeIn>
  );
};
