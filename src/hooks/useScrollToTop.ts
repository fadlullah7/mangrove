import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const scrollFlags = { skipNext: false };

export function useScrollToTop() {
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;

    if (prevPathname.current !== location.pathname) {
      prevPathname.current = location.pathname;

      if (state?.scrollTo) {
        // Scroll ke section tertentu setelah render
        setTimeout(() => {
          document.getElementById(state.scrollTo!)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return;
      }

      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location]);
}
