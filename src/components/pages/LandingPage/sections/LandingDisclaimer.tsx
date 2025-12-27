import type { FC } from "react";
import { MemeText } from "../../../shared/MemeText";

const LandingDisclaimer: FC = () => (
  <MemeText
    text={
      <span className="text-[var(--color-primary)]/70 dark:text-[var(--color-primary)]/50">
        <sub className="font-bold text-sm pr-0.5 text-[var(--color-primary)]">*</sub>
        <span>Disclaimer</span>: This bar is an approximation of where I tend to lean, not a certified metric of ability. I like both sides!
      </span>
    }
  />
);

export default LandingDisclaimer;
