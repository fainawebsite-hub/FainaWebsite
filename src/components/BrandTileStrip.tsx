import type { CSSProperties } from "react";

type BrandTileStripProps = {
  side: "left" | "right";
  opacity?: number;
  className?: string;
};

export function BrandTileStrip({ side, opacity = 0.9, className = "" }: BrandTileStripProps) {
  return <span aria-hidden="true" className={`brand-tile brand-tile--${side} ${className}`} style={{ "--tile-opacity": opacity } as CSSProperties} />;
}
