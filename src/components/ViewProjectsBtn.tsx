import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { type LayoutGridHandle, LayoutGridIcon } from "./ui/LayoutGridIcon";

export const ViewProjectsBtn = () => {
  const gridRef = useRef<LayoutGridHandle | null>(null);
  return (
    <div
      className="flex-shrink-0"
      onMouseEnter={() => gridRef.current?.startAnimation()}
      onMouseLeave={() => gridRef.current?.stopAnimation()}
    >
      <Link
        type="button"
        className="group relative flex items-center gap-x-1.5 rounded-lg border border-gray-700/40 bg-gray-700/10 hover:bg-gray-700/20 px-4 py-1.5 text-gray-300 hover:text-gray-200 shadow-sm hover:border-gray-700/60 transition-all duration-200 cursor-pointer w-64 lg:w-fit justify-center"
        to={"/projects"}
      >
        <LayoutGridIcon
          ref={gridRef}
          className="-ml-0.5 h-4 w-4 group-hover:scale-110 transition-transform duration-200"
          aria-hidden="true"
        />
        <span className="font-semibold text-base md:text-lg">view projects</span>
      </Link>
    </div>
  );
};
