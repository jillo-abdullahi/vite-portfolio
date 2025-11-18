export const BorderedContent = ({
  children,
  marginBottom = "mb-8",
}: {
  children: React.ReactNode;
  marginBottom?: string;
}) => {
  return (
    <div className={`border-t-2 border-b-2 border-[var(--color-primary)]/10 w-full ${marginBottom}`}>
      {children}
    </div>
  );
};
