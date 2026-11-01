import type { ReactNode } from "react";

export function PhotoPlaceholder({ label, className = "", children }: { label: string; className?: string; children?: ReactNode }) {
  return <div className={`photo-placeholder ${className}`} role="img" aria-label={label}>
    <span className="photo-placeholder__sun" />
    <span className="photo-placeholder__waves" />
    <small>{label}</small>
    {children}
  </div>;
}
