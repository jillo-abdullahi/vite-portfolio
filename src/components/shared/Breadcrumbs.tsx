import { Link, useLocation } from "@tanstack/react-router";
import { IoChevronForward } from "react-icons/io5";
import { HomeIcon } from "@heroicons/react/24/outline";

interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Generate breadcrumb items based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      { label: "home", path: "/", isActive: pathname === "/" },
    ];

    if (pathname !== "/") {
      const pathSegment = pathname.slice(1); // Remove leading slash
      const label = pathSegment.toLowerCase();
      items.push({
        label,
        path: pathname,
        isActive: true,
      });
    }

    return items;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav
      className="flex items-center space-x-1 text-sm text-gray-400 mb-4"
      aria-label="Breadcrumb"
    >
      {breadcrumbs.map((item, index) => (
        <div key={item.path} className="flex items-center space-x-1 group">
          {index === 0 ? (
            <HomeIcon className="w-3.5 h-3.5 group-hover:text-orange transition-colors duration-200" />
          ) : (
            <IoChevronForward className="w-3 h-3 text-gray-500" />
          )}

          {item.isActive ? (
            <span className="text-orange/80 font-medium">{item.label}</span>
          ) : (
            <Link
              to={item.path}
              className="hover:text-orange/80 transition-colors duration-200 font-medium"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};
