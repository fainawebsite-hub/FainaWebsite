import type { CSSProperties } from "react";
import { images } from "@/content/images";

export function FainaTileRail({ side, opacity = 1, className = "" }: { side: "left" | "right"; opacity?: number; className?: string }) {
  return <span aria-hidden="true" className={`faina-tile-rail faina-tile-rail--${side} ${className}`} style={{ "--tile-asset": `url(${images.tileRail})`, "--tile-opacity": opacity } as CSSProperties} />;
}
