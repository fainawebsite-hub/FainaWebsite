"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

const homePaths = new Set(["/", "/pt", "/en"]);

/** Keeps the locale homepages at their true starting position after navigation or bfcache restoration. */
export function HomeScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const previousScrollRestoration = window.history.scrollRestoration;
    const previousScrollBehavior = root.style.scrollBehavior;
    let firstFrame = 0;
    let secondFrame = 0;

    const isHomeWithoutHash = () => homePaths.has(window.location.pathname) && !window.location.hash;
    const scrollToTop = () => {
      if (!isHomeWithoutHash()) return;

      window.history.scrollRestoration = "manual";
      root.style.scrollBehavior = "auto";
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });

      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      firstFrame = window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        secondFrame = window.requestAnimationFrame(() => {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          root.style.scrollBehavior = previousScrollBehavior;
        });
      });
    };

    if (homePaths.has(pathname)) scrollToTop();

    const handlePageShow = () => scrollToTop();
    const handlePopState = () => scrollToTop();
    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("popstate", handlePopState);
      root.style.scrollBehavior = previousScrollBehavior;
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, [pathname]);

  return null;
}
