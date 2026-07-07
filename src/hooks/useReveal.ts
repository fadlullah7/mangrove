import { useEffect, useRef } from "react";

/**
 * Attach an IntersectionObserver to a container ref.
 * When any .reveal / .reveal-left / .reveal-right child enters the viewport,
 * the "visible" class is toggled on to trigger the CSS transition.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useReveal(threshold = 0.15): React.RefObject<any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    const container = ref.current as HTMLElement | null;
    if (!container) return;

    const targets = Array.from(
      container.querySelectorAll(".reveal, .reveal-left, .reveal-right")
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    targets.forEach((el: HTMLElement) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
