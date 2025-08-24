import type { FC } from "react";
import type { Experience } from "@/types";
import { SlideMeIn } from "./shared/slideMeIn";
import { experiences } from "@/data";

export const AboutMeTimeline: FC = () => {
  return (
    <div className="flex flex-col space-y-6">
      {experiences.map((experience: Experience, index: number) => {
        const {
          title,
          company,
          companyUrl,
          companyLogo,
          date,
          location,
          description,
          isCurrent,
        } = experience;

        return (
          <SlideMeIn cascade key={index}>
            <div
              className={`border bg-gray-900/30 text-white rounded-2xl py-5 px-6 transform hover:scale-101 transition-transform duration-500 ${
                isCurrent ? "border-orange/50" : "border-gray-800"
              }`}
            >
              <div className="timeLineContent text-left space-y-3">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-orange/90">
                    {title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <img
                      src={`/experience/${companyLogo}`}
                      alt={`${company} logo`}
                      className="w-6 h-6 rounded-full"
                    />
                    <a
                      href={companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-orange transition-all duration-300"
                    >
                      {company}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>{date}</span>
                    <span>•</span>
                    <span>{location}</span>
                  </div>
                </div>

                <ul className="text-gray-300 space-y-2">
                  {description.map((desc: string, idx: number) => (
                    <li key={idx}>
                      <span className="tracking-wide text-gray-300">
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SlideMeIn>
        );
      })}
    </div>
  );
};
