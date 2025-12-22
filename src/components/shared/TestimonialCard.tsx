import type { FC } from "react";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  ChevronDownIcon,
  type ChevronDownIconHandle,
} from "../ui/ChevronDownIcon";
import { ChevronUpIcon, type ChevronUpIconHandle } from "../ui/ChevronUpIcon";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  date: string;
  company: string;
  level: string;
  quote: string[];
  linkedInUrl?: string;
  bgImage?: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  date,
  company,
  quote,
  linkedInUrl,
}) => {
  const chevronDownRef = useRef<ChevronDownIconHandle | null>(null);
  const chevronUpRef = useRef<ChevronUpIconHandle | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldShowToggle = quote.length > 2;

  return (
    <div className="group relative h-full rounded-3xl border-2 border-[var(--color-primary)]/20 bg-gradient-to-b from-[var(--color-primary)]/2 via-transparent to-transparent p-6 md:p-8 hover:border-[var(--color-primary)]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--color-primary)]/5 transition-all duration-500 ease-out overflow-hidden">
      {/* Decorative quote mark */}
      <div className="absolute top-4 right-6 text-6xl font-serif text-[var(--color-primary)]/20 font-black select-none pointer-events-none">
        "
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start space-x-4 mb-6">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-xl p-1 overflow-hidden border border-[var(--color-primary)]/30 hover:border-[var(--color-primary)]/40 transition-colors duration-500 bg-[var(--color-primary)]/10">
              <img
                role="button"
                onClick={() => {
                  if (linkedInUrl) {
                    window.open(linkedInUrl, "_blank", "noopener,noreferrer");
                  }
                }}
                src={`/experience/${image}`}
                alt={name}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500 rounded-lg"
              />
            </div>
            {/* Status dot */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 flex items-center justify-center">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0077b5] hover:text-[#0077b5]/80 transition-colors bg-gray-900 rounded-xs flex items-center justify-center w-4 h-4 border-2 border-gray-900 hover:border-gray-800 cursor-pointer p-2"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="flex-1 min-w-0 pt-1">
            <div className="flex flex-col justify-center">
              <>
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/name inline-flex items-center"
                >
                  <h3 className="text-gray-400 font-semibold text-lg truncate hover:text-[var(--color-primary)] transition-colors duration-300">
                    {name}
                  </h3>
                </a>
                <p className="text-[var(--color-primary)] font-medium text-sm mt-0.5">
                  {role}
                </p>
              </>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="font-semibold text-gray-400">{company}</span>
                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                <span className="font-semibold">{date}</span>
              </div>
            </div>
          </div>
        </div>

        <blockquote className="flex-grow relative">
          <div className="space-y-4 text-gray-400 leading-relaxed text-[15px]">
            {quote.slice(0, 2).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="space-y-4 overflow-hidden"
                >
                  {quote.slice(2).map((paragraph, index) => (
                    <p key={index + 2}>{paragraph}</p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </blockquote>

        {shouldShowToggle && (
          <div className="mt-4 pt-6 border-t border-[var(--color-primary)]/20">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              onMouseEnter={() =>
                isExpanded
                  ? chevronUpRef.current?.startAnimation()
                  : chevronDownRef.current?.startAnimation()
              }
              onMouseLeave={() =>
                isExpanded
                  ? chevronUpRef.current?.stopAnimation()
                  : chevronDownRef.current?.stopAnimation()
              }
              className="group/btn flex items-center gap-2 font-medium text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-300 w-full justify-center py-2 rounded-lg bg-[var(--color-primary)]/5 hover:bg-[var(--color-primary)]/10 cursor-pointer border border-[var(--color-primary)]/15 hover:border-[var(--color-primary)]/30"
            >
              <span className="text-[var(--color-primary)]">
                {isExpanded ? "read less" : "read full testimonial"}
              </span>
              <span className="text-[var(--color-primary)] flex items-center justify-center">
                {isExpanded ? (
                  <ChevronUpIcon ref={chevronUpRef} className="w-6 h-6" />
                ) : (
                  <ChevronDownIcon ref={chevronDownRef} className="w-6 h-6" />
                )}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
