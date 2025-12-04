import type { FC } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiGraduationCapDuotone } from "react-icons/pi";
import type { Experience, TechStack } from "@/types";
import { experiences } from "@/data";
import { SlideMeIn } from "./shared/SlideMeIn";

export const AboutMeTimeline: FC = () => {
  return (
    <div className="flex flex-col space-y-6">
      {experiences.map((experience: Experience) => {
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
          <SlideMeIn
            useBorderedContent={false}
            key={`${company}-${title}-${date}`}
            delay={0.3}
            cascade
          >
            <div
              key={`${company}-${title}-${date}`}
              className={`group relative border rounded-3xl p-6 bg-gray-900/10 hover:-translate-y-0.5 transition-all duration-300 ease-in ${
                isCurrent
                  ? "border-[var(--color-primary)]/50 shadow-md shadow-[var(--color-primary)]/5"
                  : "border-[var(--color-primary)]/30 hover:border-[var(--color-primary)]/40"
              }`}
            >
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 rounded-xl bg-[var(--color-primary)]/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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
                      <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="p-1 rounded-lg border border-[var(--color-primary)]/30 hover:border-[var(--color-primary)]/40 transition-all duration-300 bg-[var(--color-primary)]/10">
                          <img
                            src={`/experience/${companyLogo}`}
                            alt={`${company} logo`}
                            className="w-7 sm:w-9 h-7 sm:h-9 object-contain transition-transform duration-300 hover:scale-103 rounded-sm"
                          />
                        </div>
                      </a>
                      <div className="flex-1">
                        <a
                          href={companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-[var(--color-primary)]/90 transition-colors duration-200 font-semibold hover:underline"
                        >
                          {company}
                        </a>
                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 sm:mt-0.5 font-medium">
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
                    <div className="pt-3 border-t border-[var(--color-primary)]/20 mt-2">
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
          </SlideMeIn>
        );
      })}
    </div>
  );
};
