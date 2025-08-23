export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto px-12 sm:px-24 lg:px-48 pt-16 md:pt-24 min-h-screen bg-gray-900/70">
      {children}
    </div>
  );
};
