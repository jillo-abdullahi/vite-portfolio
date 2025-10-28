import { useEffect, useState, useRef } from "react";

export function useInView(
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsInView(entries[0].isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}
