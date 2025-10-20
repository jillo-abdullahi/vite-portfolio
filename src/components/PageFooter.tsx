import { useLocation } from "@tanstack/react-router";

export const PageFooter = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="absolute bottom-0 left-0 right-0 w-full px-4 md:px-8 lg:px-26 xl:px-42 border-t border-b border-gray-800 mb-4">
      <footer className={`pb-6 w-full px-6 `}>
        <div
          className={`text-center md:text-right text-sm mt-6 font-semibold ${
            isHomePage ? "text-gray-400" : "text-gray-500"
          }`}
        >
          &copy; {new Date().getFullYear()} Jillo Woche
        </div>
      </footer>
    </div>
  );
};
