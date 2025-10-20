interface SectionContentProps {
  children: React.ReactNode;
  padding?: string;
}

export const SectionContent = ({
  children,
  padding = "py-4",
}: SectionContentProps) => {
  return (
    <div className={`px-5 md:px-10 lg:px-28 xl:px-48 ${padding}`}>
      {children}
    </div>
  );
};
