import { GrDocumentPdf } from "react-icons/gr";
import { type FC } from "react";

interface DownloadResumeBtnProps {
  isInNavBar?: boolean;
  isMobile?: boolean;
}

export const DownloadResumeBtn: FC<DownloadResumeBtnProps> = ({
  isInNavBar = false,
  isMobile = false,
}) => {
  return (
    <div className="flex-shrink-0">
      <a
        type="button"
        className={`group/btn overflow-hidden relative flex items-center gap-x-1.5 rounded-xl border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/15 hover:bg-[var(--color-primary)]/20 px-4 py-2 text-[var(--color-primary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/60 transition-all duration-200 cursor-pointer justify-center ${
          isInNavBar || isMobile ? "w-fit" : "w-56 lg:w-fit"
        }`}
        href="/jillo_woche_resume.pdf"
        download="jillo_woche_resume.pdf"
      >
        <GrDocumentPdf className="text-[var(--color-primary)] h-4 w-4" />
        <span className="font-semibold text-lg group-hover/btn:translate-y-[-1px] transition-transform duration-200">
          {isMobile ? "download" : "download resumé"}
        </span>
      </a>
    </div>
  );
};
