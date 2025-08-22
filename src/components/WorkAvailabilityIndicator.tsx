import type { FC } from "react";

const WorkAvailabilityIndicator: FC = () => {
  return (
    <div className="flex justify-center items-center space-x-2 flex-shrink-0">
      <div className="relative inline-flex">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full absolute top-0 left-0 animate-ping"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
      </div>
      <span className="text-sm text-white/90">Open to new opportunities</span>
    </div>
  );
};

export default WorkAvailabilityIndicator;
