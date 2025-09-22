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
      className={`relative w-full max-w-xl group ${className}`}
      role="img"
      aria-label={`${leftLabel} ${left} percent, ${rightLabel} ${right} percent`}
      style={{ ["--split" as any]: `${left}%` }}
    >
      <div
        className="grid overflow-hidden rounded-xl border border-gray-700/40 shadow-lg transition-all duration-200 group-hover:border-gray-600/60"
        style={{
          gridTemplateColumns: `${left}% ${right}%`,
          height: `${height}px`,
        }}
      >
        <div className="flex items-center justify-between px-1.5 md:px-3 bg-gradient-to-r from-orange to-orange/90 text-gray-900 relative">
          <span className="hidden md:block font-medium text-sm">{leftLabel}</span>
          <span className="md:hidden font-medium text-sm">FE</span>
          <span className="font-bold text-sm">{left}%</span>
        </div>

        <div className="flex items-center justify-between px-1.5 md:px-3 bg-gray-800/80 text-gray-300 relative">
          <span className="font-bold text-sm">{right}%</span>
          <span className="hidden md:block font-medium text-sm">{rightLabel}</span>
          <span className="md:hidden font-medium text-sm">BE</span>
        </div>
      </div>

      {/* Modern divider */}
      <div
        className="pointer-events-none absolute top-1/2 h-[80%] w-0.5 -translate-y-1/2 bg-gradient-to-b from-transparent via-gray-900/60 to-transparent rounded-full"
        style={{ left: "var(--split)" }}
      />
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-xl bg-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
