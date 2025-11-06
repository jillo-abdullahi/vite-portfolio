interface WorkAvailabilityIndicatorProps {
  available?: boolean;
}

/**
 * WorkAvailabilityIndicator
 *
 * Presentational React functional component that renders an availability status badge
 * that matches the app's design system with theme-aware colors and subtle animations.
 *
 * Props
 * @prop available: boolean - Indicates if the user is available for work. Defaults to false.
 *
 * Example
 * ```tsx
 * <WorkAvailabilityIndicator available />
 * ```
 *
 * @returns {JSX.Element} A stylized availability indicator suitable for headers or profile cards.
 */
const WorkAvailabilityIndicator = ({
  available = false,
}: WorkAvailabilityIndicatorProps) => {
  return (
    <div
      className="group flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/60 hover:bg-gray-800/80 hover:border-gray-600/60 transition-all duration-200"
      role="status"
      aria-live="polite"
    >
      <div className="relative flex items-center justify-center">
        {/* Base dot */}
        <div
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            available ? "bg-[var(--color-primary)]" : "bg-gray-500"
          }`}
        />
        {/* Animated ping effect for available state */}
        {available && (
          <>
            <div className="absolute w-3 h-3 bg-[var(--color-primary)] rounded-full animate-ping opacity-75" />
            <div className="absolute w-3 h-3 bg-[var(--color-primary)] rounded-full animate-pulse" />
          </>
        )}
      </div>
      <span
        className={`text-base font-medium transition-colors duration-300 ${
          available ? "text-gray-200" : "text-gray-400"
        }`}
      >
        {available ? "available for hire" : "unavailable"}
      </span>
    </div>
  );
};

export default WorkAvailabilityIndicator;
