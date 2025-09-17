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
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  date,
  company,
  level,
  quote,
}) => {
  return (
    <div className="bg-gray-900/60 border border-gray-700 rounded-3xl p-6 hover:scale-101 transition-transform duration-500">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={`/experience/${image}`}
          alt={name}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-gray-700"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-orange font-semibold text-lg truncate">
              {name}
            </h3>

            <span className="text-gray-400 text-sm whitespace-nowrap ml-2">
              {date}
            </span>
          </div>
          <p className="text-gray-300 text-sm font-medium">
            {role} at {company}
          </p>
          <p className="text-gray-400 text-sm">{level}</p>
        </div>
      </div>

      <blockquote className="text-gray-300 text-base leading-relaxed whitespace-pre-line">
        "{quote}"
      </blockquote>

      <div className="mt-4 w-full flex justify-end">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="w-4 h-4 text-gray-500/60"
          title="LinkedIn testimonial"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
