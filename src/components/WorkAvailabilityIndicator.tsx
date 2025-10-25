
interface WorkAvailabilityIndicatorProps {
  available?: boolean;
}

/**
 * WorkAvailabilityIndicator
 *
 * Presentational React functional component that renders an "Available" status pill:
 * - A small cluster of three overlapping green dots (static, ping and pulse) to convey live availability
 * - A label "Available" styled with Tailwind CSS utility classes
 * Props
 * @prop available: boolean - Indicates if the user is available for work. Defaults to false.
 *
 * This component is stateless and does not accept any props.
 *
 *
 * Styling
 * - Uses Tailwind CSS classes for layout, spacing, colors and animations. Adjust classes as needed
 *   to match your design system or theme.
 *
 * Example
 * ```tsx
 * <WorkAvailabilityIndicator available />
 * ```
 *
 * @returns {JSX.Element} A stylized availability indicator (status pill) suitable for headers or profile cards.
 */
const WorkAvailabilityIndicator = ({
  available,
}: WorkAvailabilityIndicatorProps) => {
  const primaryColor = available ? "bg-green-500" : "bg-red-500";
  return (
    <div
      className={`flex justify-center items-center space-x-2 flex-shrink-0 px-2 rounded-lg `}
      role="status"
      aria-live="polite"
    >
      <div className="relative inline-flex">
        <div className={`w-3 h-3 ${primaryColor} rounded-full`} />
        {available ? (
          <>
            <div
              className={`w-3 h-3 ${primaryColor} rounded-full absolute top-0 left-0 animate-ping`}
            />
            <div
              className={`w-3 h-3 ${primaryColor} rounded-full absolute top-0 left-0 animate-pulse`}
            />
          </>
        ) : null}
      </div>
      <span
        className={`text-lg flex-shrink-0 font-semibold ${
          available ? "text-gray-200" : "text-red-100"
        }`}
      >
        {available ? "hire me" : "unavailable"}
      </span>
    </div>
  );
};

export default WorkAvailabilityIndicator;
