import { SlideMeIn } from "./SlideMeIn";

interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
  useBorderedContent?: boolean;
  margins?: string;
}

export const SectionContent = ({
  children,
  margins = "mb-4",
  className = "py-4",
  useBorderedContent = true,
}: SectionContentProps) => {

  const content = <div className={`px-5 md:px-16 lg:px-28 ${className}`}>
    {children}
  </div>
  return <SlideMeIn useFade duration={500}>{useBorderedContent ? <div className={`border-t-2 border-b-2 border-[var(--color-primary)]/30 dark:border-[var(--color-primary)]/10 w-full ${margins}`}>
    {content}
  </div> : content}</SlideMeIn>;
};
