"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "essenciamind_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept(type) {
    localStorage.setItem(CONSENT_KEY, type);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          role="dialog"
          aria-label="Aviso de cookies"
          aria-live="polite"
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[var(--border)] bg-white/95 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Icon and text */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                  <Cookie className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--primary)]">
                    Utilizamos cookies neste site
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Usamos cookies essenciais para garantir o funcionamento do site. Cookies analíticos nos ajudam a entender como você o utiliza, sempre respeitando sua privacidade conforme a{" "}
                    <abbr title="Lei Geral de Proteção de Dados" className="no-underline">
                      LGPD
                    </abbr>
                    .{" "}
                    <Link
                      href="/politica-de-privacidade"
                      className="font-medium text-[var(--primary)] underline underline-offset-2 transition-colors hover:text-[var(--accent)]"
                    >
                      Saiba mais
                    </Link>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => accept("necessary")}
                  className="whitespace-nowrap"
                >
                  <Shield className="h-4 w-4" />
                  Apenas necessários
                </Button>
                <Button
                  variant="gradient"
                  size="sm"
                  onClick={() => accept("all")}
                  className="whitespace-nowrap"
                >
                  Aceitar todos
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
