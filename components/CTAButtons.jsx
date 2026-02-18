"use client";

import { getWhatsAppHref, cta } from "@/lib/site-config";

const buttonBase =
  "inline-flex items-center justify-center rounded-lg px-6 py-4 text-center text-base font-medium shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2";
const primaryClass =
  `${buttonBase} bg-[var(--primary)] text-white hover:bg-[var(--primary-light)] hover:shadow-lg`;
const outlineClass =
  `${buttonBase} border-2 border-[var(--primary)] bg-transparent text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white hover:shadow-md`;

export function CTAButtons({ variant = "default", only }) {
  const href = getWhatsAppHref();
  const isCompact = variant === "compact";
  const isHero = variant === "hero";
  const showIndividual = only === undefined || only === "individual";
  const showEmpresas = only === undefined || only === "empresas";

  const containerClass = isHero
    ? "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
    : isCompact
      ? "flex flex-wrap gap-3 justify-center"
      : "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center";

  return (
    <div className={containerClass}>
      {showIndividual && (
        <a href={href} target="_blank" rel="noopener noreferrer" className={primaryClass}>
          {cta.individual.label}
        </a>
      )}
      {showEmpresas && (
        <a href={href} target="_blank" rel="noopener noreferrer" className={outlineClass}>
          {cta.empresas.label}
        </a>
      )}
    </div>
  );
}
