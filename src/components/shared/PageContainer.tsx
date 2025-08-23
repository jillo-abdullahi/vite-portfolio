import { SlideMeIn } from "./slideMeIn";

interface PageContainerProps {
  children: React.ReactNode;
  isHomePage?: boolean;
}

/**
 * A container component that provides consistent padding and styling for page content.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the container
 * @param {boolean} [props.isHomePage=false] - Whether the container is for the home page (applies special background styling)
 * @returns {JSX.Element} A styled div container with the provided children
 *
 * @example
 * ```tsx
 * <PageContainer>
 *   <YourContent />
 * </PageContainer>
 * ```
 */
export const PageContainer = ({
  children,
  isHomePage = false,
}: PageContainerProps) => {
  const bgStyle = {
    backgroundImage: "url('/src/assets/icon-bg.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <SlideMeIn duration={200}>
      <div
        className="mx-auto px-8 md:px-10 lg:px-28 xl:px-48 pt-32 md:pt-40 min-h-screen bg-gray-900/70 pb-20"
        style={isHomePage ? bgStyle : {}}
      >
        {children}
      </div>
    </SlideMeIn>
  );
};
