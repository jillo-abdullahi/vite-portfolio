import { useLocation } from "@tanstack/react-router";
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

export const PageContainer = ({
  children,
  showBreadcrumbs = false,
}: PageContainerProps) => {

  const location = useLocation();
  const pathname = location.pathname;
  const isHomePage = pathname === "/";
  return (
    <div className={`mx-auto ${isHomePage ? "pt-32 pb-38 pb-40 md:pb-38 md:pt-38" : "pt-28 pb-40 md:pb-38 md:pt-32"}  min-h-screen`}>
      {showBreadcrumbs && <Breadcrumbs />}
      <div className="flex flex-col gap-6">
        {children}
      </div>
    </div>
  );
};
