import { SlideMeIn } from "./slideMeIn";

interface PageContainerProps {
  children: React.ReactNode;
}

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
export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <SlideMeIn duration={200}>
      <div className="mx-auto px-8 md:px-10 lg:px-28 xl:px-48 py-32 md:py-36 bg-gradient-to-b from-gray-900/80 to-gray-900/20">
        {children}
      </div>
    </SlideMeIn>
  );
};
