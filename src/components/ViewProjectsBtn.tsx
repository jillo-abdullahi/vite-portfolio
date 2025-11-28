import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { type LayoutGridHandle, LayoutGridIcon } from "./ui/LayoutGridIcon";

export const ViewProjectsBtn = () => {
  const gridRef = useRef<LayoutGridHandle | null>(null);
  return (
    <Link
      type="button"
      className="group/btn relative flex items-center gap-x-1.5 rounded-xl border border-gray-700/40 bg-gray-700/10 hover:bg-gray-700/20 px-4 py-2 text-gray-400 hover:text-[var(--color-primary)] hover:border-gray-700/60 transition-all duration-200 cursor-pointer w-64 lg:w-fit justify-center flex-shrink-0"
      to={"/projects"}
      onMouseEnter={() => gridRef.current?.startAnimation()}
      onMouseLeave={() => gridRef.current?.stopAnimation()}
    >
      <LayoutGridIcon
        ref={gridRef}
        className="-ml-0.5 h-5 w-5 group-hover/btn:scale-110 transition-transform duration-200 group-hover/btn:text-[var(--color-primary)]"
        aria-hidden="true"
      />
      <span className="font-semibold text-lg group-hover/btn:translate-y-[-1px] transition-transform duration-200">view projects</span>
    </Link>
  );
};
