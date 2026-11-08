"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

type HomeLinkProps = LinkProps & { children: ReactNode; className?: string; "aria-label"?: string };

/** Ensures a click on the current homepage's logo or Início link also returns to the very top. */
export function HomeLink({ children, href, onClick, ...props }: HomeLinkProps) {
  const pathname = usePathname();
  const target = typeof href === "string" ? href : href.pathname ?? "";
  const targetPath = target.split("#")[0];
  const hasHash = target.includes("#");

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || hasHash || pathname !== targetPath) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return <Link href={href} scroll onClick={handleClick} {...props}>{children}</Link>;
}
