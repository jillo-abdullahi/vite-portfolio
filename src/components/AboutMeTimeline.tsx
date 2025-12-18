import type { FC } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiGraduationCapDuotone } from "react-icons/pi";
import type { Experience, TechStack } from "@/types";
import { experiences } from "@/data";
import { SlideMeIn } from "./shared/SlideMeIn";

export const AboutMeTimeline: FC = () => {
  const DateAndLocation = ({
    date,
    location,
  }: {
    date: string;
    location: string;
  }) => (
    <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 sm:mt-0.5 sm:font-medium">
      <span>{date}</span>
      <span className="w-1 h-1 bg-[var(--color-primary)]/40 rounded-full" />
      <span>{location}</span>
    </div>
  );

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
              className={`group relative border-2 rounded-3xl p-4 sm:p-6 py-6 hover:-translate-y-0.5 transition-all duration-300 ease-in ${
                isCurrent
                  ? "border-[var(--color-primary)]/50 shadow-md shadow-[var(--color-primary)]/5 bg-[var(--color-primary)]/8"
                  : "border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 bg-gradient-to-b from-gray-900/20 via-gray-900/10 to-gray-800/10"
              }`}
            >
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 rounded-xl bg-[var(--color-primary)]/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Work type or education badge */}
                {(workType || isEducational) && (
                  <div className="flex w-full items-start justify-between border-b border-[var(--color-primary)]/10 pb-1 mb-4">
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
                    </div>
                    <div className="hidden sm:block">
                      <DateAndLocation date={date} location={location} />
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {/* Title and company header */}
                  <div className="space-y-2">
                    <h3 className="block sm:hidden font-semibold text-lg text-[var(--color-primary)]">
                      {title}
                    </h3>

                    <div className="flex items-center space-x-2 pt-2">
                      <a
                        href={companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="p-1 rounded-lg border border-[var(--color-primary)]/30 hover:border-[var(--color-primary)]/40 transition-all duration-300 bg-[var(--color-primary)]/10">
                          <img
                            src={`/experience/${companyLogo}`}
                            alt={`${company} logo`}
                            className="w-7 sm:w-10 h-7 sm:h-10 object-contain transition-transform duration-300 hover:scale-103 rounded-sm"
                          />
                        </div>
                      </a>
                      <div className="flex-1">
                        <h3 className="hidden sm:block font-semibold text-lg text-[var(--color-primary)]">
                          {title}
                        </h3>
                        <a
                          href={companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 sm:text-gray-400 hover:text-[var(--color-primary)]/90 transition-colors duration-200 font-semibold sm:font-medium hover:underline"
                        >
                          {company}
                        </a>
                        <div className="block sm:hidden">
                          <DateAndLocation date={date} location={location} />
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
                    <div className="pt-3 mt-2">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {technologies.map((tech: TechStack, idx: number) => (
                          <span
                            key={idx}
                            className={`text-gray-300 rounded-md px-2 py-1 text-xs border border-[var(--color-primary)]/20 ${
                              isCurrent
                                ? "bg-[var(--color-primary)]/10"
                                : "bg-[var(--color-primary)]/5"
                            }`}
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
