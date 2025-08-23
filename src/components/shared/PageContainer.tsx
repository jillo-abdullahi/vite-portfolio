/**
 * A container component that provides consistent padding and styling for page content.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the container
 * @returns {JSX.Element} A styled div container with the provided children
 *
 * @example
 * ```tsx
 * <PageContainer>
 *   <YourContent />
 * </PageContainer>
 * ```
 */
export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto px-2 sm:px-24 lg:px-48 pt-32 md:pt-40 min-h-screen bg-gray-900/70 pb-20">
      {children}
    </div>
  );
};
