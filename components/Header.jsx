"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Building2 } from "lucide-react";
import { site, cta, getWhatsAppHref } from "@/lib/site-config";
import { cn } from "@/lib/utils";

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
  const [scrolled, setScrolled] = useState(false);
  const whatsappHref = getWhatsAppHref();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 bg-white",
        scrolled && "shadow-md border-b border-[var(--border)]"
      )}
    >
      <div className="px-3 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex h-16 sm:h-20 min-[1200px]:h-24 items-center justify-between gap-2 sm:gap-4">
          {/* Logo - responsivo para mobile */}
          <Link
            href="#"
            className="flex shrink items-center group min-w-0"
            aria-label={`${site.name} - início`}
          >
            <div className="overflow-hidden w-[180px] h-[48px] sm:w-[260px] sm:h-[58px] min-[1200px]:w-[340px] min-[1200px]:h-[72px]">
              <img
                src={site.logo.main}
                alt={site.name}
                className="max-w-none object-cover object-center transition-transform duration-300 group-hover:scale-105
                  w-[180px] h-[130px] -mt-[38px] -ml-[8px]
                  sm:w-[260px] sm:h-[185px] sm:-mt-[58px] sm:-ml-[12px]
                  min-[1200px]:w-[340px] min-[1200px]:h-[240px] min-[1200px]:-mt-[80px] min-[1200px]:-ml-[22px]"
              />
            </div>
          </Link>

          {/* Navigation - center (aparece apenas em telas >= 1200px) */}
          <nav className="hidden items-center gap-1 min-[1200px]:flex" aria-label="Principal">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[var(--primary)] group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] transition-all duration-300 group-hover:w-3/4" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons - right (aparece apenas em telas >= 1200px) */}
          <div className="hidden items-center gap-2 min-[1200px]:flex">
            <motion.a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--primary)] px-3 py-1.5 text-xs font-medium text-[var(--primary)] transition-all duration-200 hover:bg-[var(--primary)] hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden xl:inline">Agendar consulta</span>
              <span className="xl:hidden">Agendar</span>
            </motion.a>
            <motion.a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--primary)] px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-all duration-200 hover:bg-[var(--primary-light)] hover:shadow-md"
            >
              <Building2 className="h-3.5 w-3.5" />
              <span className="hidden xl:inline">Para empresas</span>
              <span className="xl:hidden">Empresas</span>
            </motion.a>
          </div>

          {/* Mobile menu button (aparece em telas < 1200px) */}
          <button
            type="button"
            className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-white transition-all duration-200 hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5 min-[1200px]:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Abrir menu"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5 text-[var(--primary)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5 text-[var(--primary)]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-[var(--border)] bg-white min-[1200px]:hidden overflow-hidden"
          >
            <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6" aria-label="Principal (mobile)">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)]"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-[var(--primary)] px-4 py-2.5 text-sm font-medium text-[var(--primary)] transition-all hover:bg-[var(--primary)] hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {cta.individual.label}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[var(--primary-light)]"
                >
                  <Building2 className="h-4 w-4" />
                  {cta.empresas.label}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
