type Props = {
  leftLabel?: string;
  rightLabel?: string;
  /** 0–100 (right side is computed automatically) */
  leftPercent: number;
  /** Height in px */
  height?: number;
  className?: string;
};

export default function SkillSplitBar({
  leftLabel = "Frontend",
  rightLabel = "Backend",
  leftPercent = 70,
  height = 40,
  className = "",
}: Props) {
  const left = Math.max(0, Math.min(100, leftPercent));
  const right = 100 - left;

  return (
    <div
      className={`relative w-full max-w-xl rounded-xl ${className}`}
      role="img"
      aria-label={`${leftLabel} ${left} percent, ${rightLabel} ${right} percent`}
      style={{ ["--split" as any]: `${left}%` }}
    >
      <div
        className="grid overflow-hidden rounded-xl"
        style={{
          gridTemplateColumns: `${left}% ${right}%`,
          height: `${height}px`,
        }}
      >
        <div className="flex items-center justify-between px-2 md:px-4 bg-orange/80 text-gray-900">
          <span className="hidden md:block font-medium">{leftLabel}</span>
          <span className="md:hidden font-medium">FE</span>
          <span className="font-semibold">{left}%</span>
        </div>

        <div className="flex items-center justify-between px-2 md:px-4 bg-orange/50 text-gray-300">
          <span className="hidden md:block font-medium">{rightLabel}</span>
          <span className="md:hidden font-medium">BE</span>
          <span className="font-semibold">{right}%</span>
        </div>
      </div>

      {/* centered divider */}
      <div
        className="pointer-events-none absolute top-1/2 h-[120%] w-px -translate-y-1/2 bg-white/60"
        style={{ left: "var(--split)" }}
      />
    </div>
  );
}
