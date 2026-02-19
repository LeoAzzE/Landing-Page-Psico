"use client";

import { useState } from "react";
import Link from "next/link";
import { site, cta } from "@/lib/site-config";
import { getWhatsAppHref } from "@/lib/site-config";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#para-voce", label: "Para você" },
  { href: "#para-empresas", label: "Para empresas" },
  { href: "#equipe", label: "Equipe" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const whatsappHref = getWhatsAppHref();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--card)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--card)]/80">
      <div className="flex w-full items-center justify-between px-4 sm:px-6 lg:px-8" style={{ height: "90px" }}>
        <Link href="#" className="flex shrink-0 items-center hover:opacity-90" aria-label={`${site.name} - início`}>
          <div className="overflow-hidden" style={{ width: "250px", height: "76px" }}>
            <img
              src={site.logo.main}
              alt={site.name}
              className="h-[120%] w-[115%] max-w-none object-cover object-center"
              style={{ marginTop: "-1%", marginLeft: "-12%" }}
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative inline-block pb-1 whitespace-nowrap text-sm font-medium text-[var(--primary)] transition-colors duration-200 hover:text-[var(--primary)]"
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-[var(--primary)] to-teal-400 transition-[width] duration-300 ease-out group-hover:w-full"
                aria-hidden
              />
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-lg bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[var(--primary-light)] hover:shadow-md"
          >
            {cta.individual.label}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-lg border border-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-[var(--primary)] transition-all duration-200 hover:bg-[var(--primary)] hover:text-white hover:shadow-md"
          >
            {cta.empresas.label}
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Abrir menu"
        >
          <span className="sr-only">Menu</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--card)] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Principal (mobile)">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative inline-block pb-1 text-sm font-medium text-[var(--primary)] transition-colors duration-200 hover:text-[var(--primary)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-[var(--primary)] to-teal-400 transition-[width] duration-300 ease-out group-hover:w-full"
                  aria-hidden
                />
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[var(--primary)] px-4 py-2 text-center text-sm font-medium text-white"
              >
                {cta.individual.label}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--primary)] px-4 py-2 text-center text-sm font-medium text-[var(--primary)]"
              >
                {cta.empresas.label}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
