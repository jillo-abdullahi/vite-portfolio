interface SectionContentProps {
  children: React.ReactNode;
  padding?: string;
}

export const SectionContent = ({
  children,
  padding = "py-4",
}: SectionContentProps) => {
  return (
    <div className={`px-5 md:px-16 lg:px-28 ${padding}`}>
      {children}
    </div>
  );
};
