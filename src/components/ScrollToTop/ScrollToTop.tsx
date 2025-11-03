import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(): null {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const container = document.querySelector(".app-scroll-container") as HTMLElement | null;
    if (container) {
      requestAnimationFrame(() => (container.scrollTop = 0));
    } else {
      requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
    }
  }, [pathname]);

  return null;
}