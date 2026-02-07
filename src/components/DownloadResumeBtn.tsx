import { DownloadIcon, type DownloadHandle } from "./ui/DownloadIcon";
import { type FC, useRef } from "react";

interface DownloadResumeBtnProps {
  isInNavBar?: boolean;
}

export const DownloadResumeBtn: FC<DownloadResumeBtnProps> = ({
  isInNavBar = false,
}) => {
  const downloadRef = useRef<DownloadHandle | null>(null);

  return (
    <div className="flex-shrink-0">
      <a
        type="button"
        className={`group/btn overflow-hidden relative flex items-center gap-x-1.5 rounded-xl border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 px-4 py-2 text-[var(--color-primary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/60 transition-all duration-200 cursor-pointer justify-center ${isInNavBar ? "w-fit" : "w-64 lg:w-fit"
          }`}
        href="/jillo_woche_resume.pdf"
        download="jillo_woche_resume.pdf"
        onMouseEnter={() => downloadRef.current?.startAnimation()}
        onMouseLeave={() => downloadRef.current?.stopAnimation()}
      >
        <DownloadIcon
          ref={downloadRef}
          className="-ml-0.5 h-5 w-5 group-hover/btn:scale-110 group-hover/btn:translate-y-0.5 transition-all duration-200"
        />
        <span className="font-semibold text-lg group-hover/btn:translate-y-[-1px] transition-transform duration-200">
          resumé
        </span>
      </a>
    </div>
  );
};
