"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "essenciamind_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  function accept(type) {
    localStorage.setItem(CONSENT_KEY, type);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-[var(--border)] bg-white/95 shadow-xl backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        {/* Texto */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-[var(--primary)]">
            Utilizamos cookies neste site.
          </p>
          <p className="mt-0.5 text-sm text-[var(--muted)]">
            Usamos cookies essenciais para garantir o funcionamento do site. Cookies analíticos nos ajudam a entender como você o utiliza, sempre respeitando sua privacidade conforme a{" "}
            <abbr title="Lei Geral de Proteção de Dados">LGPD</abbr>.{" "}
            <Link
              href="/politica-de-privacidade"
              className="font-medium text-[var(--primary)] underline underline-offset-2 hover:text-[var(--accent)]"
            >
              Saiba mais
            </Link>
            .
          </p>
        </div>

        {/* Botões */}
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => accept("necessary")}
            className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:border-[var(--primary)]/40 hover:text-[var(--primary)]"
          >
            Apenas necessários
          </button>
          <button
            type="button"
            onClick={() => accept("all")}
            className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[var(--primary-light)] hover:shadow-md"
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
}
