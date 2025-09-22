import { SlideMeIn } from "./slideMeIn";
import { Breadcrumbs } from "./Breadcrumbs";

interface PageContainerProps {
  children: React.ReactNode;
  showBreadcrumbs?: boolean;
}

/**
 * A container component that provides consistent padding and styling for page content.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the container
 * @param {boolean} props.showBreadcrumbs - Whether to show breadcrumbs at the top of the page
 * @returns {JSX.Element} A styled div container with the provided children
 *
 * @example
 * ```tsx
 * <PageContainer showBreadcrumbs>
 *   <YourContent />
 * </PageContainer>
 * ```
 */
export const PageContainer = ({ children, showBreadcrumbs = false }: PageContainerProps) => {
  return (
    <SlideMeIn duration={200}>
      <div className="mx-auto px-8 md:px-10 lg:px-28 xl:px-48 py-32 md:py-36 bg-gradient-to-b from-gray-900/80 to-gray-900/20">
        {showBreadcrumbs && <Breadcrumbs />}
        {children}
      </div>
    </SlideMeIn>
  );
};
