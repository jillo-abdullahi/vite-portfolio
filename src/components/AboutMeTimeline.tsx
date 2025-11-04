import type { FC } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiGraduationCapDuotone } from "react-icons/pi";
import type { Experience, TechStack } from "@/types";
import { experiences } from "@/data";
import { Fade } from "react-awesome-reveal";

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
          <Fade key={index} cascade damping={0.1} duration={2500}>
            <div
              className={`group relative border rounded-3xl p-5 bg-gray-900/70 hover:bg-gray-900/80 hover:-translate-y-0.5 transition-all duration-300 ease-out ${
                isCurrent
                  ? "border-[var(--color-primary)]/30 shadow-md shadow-[var(--color-primary)]/5"
                  : "border-gray-700/40 hover:border-gray-600/60"
              }`}
            >
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 rounded-xl bg-[var(--color-primary)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Work type or education badge */}
                {(workType || isEducational) && (
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="p-1 bg-gray-700/40 rounded-md">
                      {isEducational ? (
                        <PiGraduationCapDuotone className="text-[var(--color-primary)]/70 text-sm" />
                      ) : (
                        <IoDocumentTextOutline className="text-[var(--color-primary)]/70 text-sm" />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      {isEducational ? "Education" : workType}
                    </span>
                    {isCurrent && (
                      <span className="px-2 py-0.5 bg-[var(--color-primary)]/15 text-[var(--color-primary)]/90 text-xs font-medium rounded-md border border-[var(--color-primary)]/20">
                        Current
                      </span>
                    )}
                  </div>
                )}

                <div className="space-y-3">
                  {/* Title and company header */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-[var(--color-primary)]">
                      {title}
                    </h3>

                    <div className="flex items-center space-x-2">
                      <img
                        src={`/experience/${companyLogo}`}
                        alt={`${company} logo`}
                        className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg border-2 border-gray-700 group-hover:border-[var(--color-primary)]/60 transition-all duration-300 object-contain"
                      />
                      <div className="flex-1">
                        <a
                          href={companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-200 hover:text-[var(--color-primary)]/90 transition-colors duration-200 font-medium"
                        >
                          {company}
                        </a>
                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 sm:mt-0.5">
                          <span>{date}</span>
                          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                          <span>{location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  {!isEducational && (
                    <div className="pl-4">
                      <ul className="space-y-2 ml-4 list-disc">
                        {description.map((desc: string, idx: number) => (
                          <li
                            key={idx}
                            className="text-gray-300 leading-relaxed"
                          >
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {isEducational && (
                    <div className="space-y-2">
                      {description.map((desc: string, idx: number) => (
                        <p key={idx} className="text-gray-300 leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  {technologies.length > 0 && (
                    <div className="pt-3 border-t border-gray-700/50 mt-2">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {technologies.map((tech: TechStack, idx: number) => (
                          <span
                            key={idx}
                            className="bg-gray-800/60 text-gray-300 rounded-lg px-2 py-1 text-xs border border-gray-700/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Fade>
        );
      })}
    </div>
  );
};
