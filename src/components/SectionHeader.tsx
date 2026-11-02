import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, children, light = false }: { eyebrow: string; title: string; children?: ReactNode; light?: boolean }) {
  return <header className={`section-header ${light ? "section-header--light" : ""}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><span className="section-header__accent" aria-hidden="true" />{children && <div className="section-header__copy">{children}</div>}</header>;
}
