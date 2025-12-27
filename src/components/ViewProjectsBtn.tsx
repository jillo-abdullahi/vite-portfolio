import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { DashboardIcon, type DashboardIconHandle } from "./DashboardIcon";

export const ViewProjectsBtn = () => {
  const dashboardRef = useRef<DashboardIconHandle | null>(null);
  return (
    <Link
      type="button"
      className="group/btn relative flex items-center gap-x-1.5 rounded-xl border border-[var(--color-primary)]/20 bg-gray-700/10 hover:bg-gray-700/15 px-4 py-2 text-[var(--color-primary)] dark:text-gray-400 dark:hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30 transition-all duration-200 cursor-pointer w-64 lg:w-fit justify-center flex-shrink-0"
      to={"/projects"}
      onMouseEnter={() => dashboardRef.current?.startAnimation()}
      onMouseLeave={() => dashboardRef.current?.stopAnimation()}
    >
      <DashboardIcon
        ref={dashboardRef}
        className="-ml-0.5 h-5 w-5 group-hover/btn:scale-110 transition-transform duration-200 group-hover/btn:text-[var(--color-primary)]"
        aria-hidden="true"
      />
      <span className="font-semibold text-lg group-hover/btn:translate-y-[-1px] transition-transform duration-200">view projects</span>
    </Link>
  );
};
