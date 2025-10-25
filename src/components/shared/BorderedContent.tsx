export const BorderedContent = ({
  children,
  marginBottom = "mb-8",
}: {
  children: React.ReactNode;
  marginBottom?: string;
}) => {
  return (
    <div className={`border-t border-b border-gray-700 w-full ${marginBottom}`}>
      {children}
    </div>
  );
};
