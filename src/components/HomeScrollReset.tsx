"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

const homePaths = new Set(["/", "/pt", "/en"]);

/** Keeps the locale homepages at their true starting position after navigation or bfcache restoration. */
export function HomeScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!homePaths.has(pathname) || window.location.hash) return;

    const scrollToTop = () => {
      if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    scrollToTop();
    const frame = window.requestAnimationFrame(scrollToTop);
    const handlePageShow = () => {
      scrollToTop();
      window.requestAnimationFrame(scrollToTop);
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pageshow", handlePageShow);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, [pathname]);

  return null;
}
