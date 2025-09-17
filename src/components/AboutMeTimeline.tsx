import type { FC } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiGraduationCapDuotone } from "react-icons/pi";
import type { Experience, TechStack } from "@/types";
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
          workType,
          technologies = [],
          isEducational = false,
        } = experience;

        return (
          <SlideMeIn cascade key={index}>
            <div
              className={`border bg-gray-900/80 text-white rounded-3xl py-5 px-6 transform hover:scale-101 transition-transform duration-500 ${
                isCurrent ? "border-orange/50" : "border-gray-700"
              }`}
            >
              {workType ? (
                <div className="flex items-center space-x-1">
                  <IoDocumentTextOutline className="text-gray-400 text-sm" />
                  <span className="text-sm font-medium text-gray-400">
                    {workType}
                  </span>
                </div>
              ) : null}
              {isEducational ? (
                <div className="flex items-center space-x-1">
                  <PiGraduationCapDuotone className="text-gray-400 text-sm" />
                  <span className="text-sm font-medium text-gray-400">
                    Education
                  </span>
                </div>
              ) : null}
              <div className="timeLineContent text-left space-y-3">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-orange/90">
                    {title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <img
                      src={`/experience/${companyLogo}`}
                      alt={`${company} logo`}
                      className="w-6 h-6 rounded-full border border-gray-400"
                    />
                    <a
                      href={companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-orange transition-all duration-300 font-medium"
                    >
                      {company}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>{date}</span>
                    <span className="text-xl">•</span>
                    <span>{location}</span>
                  </div>
                </div>

                {!isEducational && (
                  <ul className="text-gray-300 space-y-2">
                    {description.map((desc: string, idx: number) => (
                      <li key={idx}>
                        <span className="tracking-wide text-gray-300">
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {isEducational && (
                  <div className="text-gray-300 space-y-2">
                    {description.map((desc: string, idx: number) => (
                      <p key={idx} className="tracking-wide text-gray-300">
                        {desc}
                      </p>
                    ))}
                  </div>
                )}

                {technologies.length > 0 && (
                  <div className="pt-2">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {technologies.map((tech: TechStack, idx: number) => (
                        <span
                          key={idx}
                          className="bg-gray-800 text-gray-300 rounded-full px-3 py-1 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SlideMeIn>
        );
      })}
    </div>
  );
};
