import { useEffect } from "react";

function useIntersectionObserver(
  ref: React.RefObject<Element>,
  onIntersect: () => void,
  options: IntersectionObserverInit = {},
) {
  const { threshold = 1, root = null, rootMargin = "0%" } = options;

  useEffect(() => {
    if (ref.current === null) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onIntersect();
      },
      { threshold, root, rootMargin },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, root, rootMargin, onIntersect]);
}

export default useIntersectionObserver;
