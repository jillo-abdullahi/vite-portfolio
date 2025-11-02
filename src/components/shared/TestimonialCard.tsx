import type { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  date: string;
  company: string;
  level: string;
  quote: string;
  linkedInUrl?: string;
  bgImage?: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  date,
  company,
  level,
  quote,
  linkedInUrl,
}) => {

  //TODO: Add bgImage functionality later if needed
  return (
    <div className="group relative border rounded-3xl p-5 bg-gray-900/70 hover:bg-gray-900/80 hover:-translate-y-0.5 transition-all duration-300 ease-out border-gray-700/80 hover:border-gray-600/60">
      {/* Subtle hover overlay */}
      <div className="absolute inset-0 rounded-xl bg-[var(--color-primary)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <div className="group flex items-center space-x-3 mb-4">
          <img
            role="button"
            onClick={() => {
              if (linkedInUrl) {
                window.open(linkedInUrl, "_blank", "noopener,noreferrer");
              }
            }}
            src={`/experience/${image}`}
            alt={name}
            className="w-16 h-16 rounded-xl object-cover flex-shrink-0 border-2 border-gray-700/80 group-hover:border-[var(--color-primary)]/60 transition-all duration-300 cursor-pointer"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <h3 className="text-[var(--color-primary)]/90 font-semibold text-base truncate">
                  {name}
                </h3>
              </a>
              <span className="text-gray-400 text-xs whitespace-nowrap ml-2">
                {date}
              </span>
            </div>
            <p className="text-gray-200 text-sm font-medium">
              {role} at {company}
            </p>
            <p className="text-gray-400 text-xs">{level}</p>
          </div>
        </div>

        <blockquote className="text-gray-300 text-sm leading-relaxed whitespace-pre-line mb-4">
          "{quote}"
        </blockquote>

        <div className="flex justify-end pt-2 border-t border-gray-700/40 mt-2">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-4 h-4 text-gray-500/60"
            title="LinkedIn testimonial"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
