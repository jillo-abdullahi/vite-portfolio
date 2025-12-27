import type { FC } from "react";
import { SectionContent } from "../../../shared/SectionContent";
import Timer from "../../../Timer";

const LandingTimer: FC = () => (
  <div className="mb-3 w-full flex items-center justify-end">
    <SectionContent padding="py-0">
      <Timer />
    </SectionContent>
  </div>
);

export default LandingTimer;
