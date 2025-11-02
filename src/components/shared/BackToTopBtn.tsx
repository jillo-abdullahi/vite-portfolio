import { type FC, useState, useEffect } from "react";
import { ChevronUpIcon } from "../ui/ChevronUpIcon";

export const BackToTopBtn: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const MAX_SCROLL_HEIGHT = 900;

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > MAX_SCROLL_HEIGHT) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Check initial scroll position
    toggleVisibility();

    // Cleanup
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`group fixed bottom-35.5 sm:bottom-32 lg:bottom-8 right-6 md:right-12 lg:right-5 xl:right-10 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/40 hover:bg-[var(--color-primary)]/50 transition-all duration-300 hover:scale-110 cursor-pointer border border-transparent hover:border-gray-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Back to top"
      title="Back to top"
    >
      <ChevronUpIcon size={28} className="text-gray-300" />
    </button>
  );
};
