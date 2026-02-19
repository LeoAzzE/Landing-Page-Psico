"use client";

import { useState, useEffect, useRef } from "react";
import { commitmentItems } from "@/lib/site-config";

const ROTATE_SECONDS = 4;

export function Commitment() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % commitmentItems.length);
    }, ROTATE_SECONDS * 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-[var(--primary)] sm:text-3xl">
          Nosso compromisso
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          Ética e sigilo profissional, centralidade da psicoterapia como base do cuidado e atuação alinhada à legislação vigente.
        </p>

        {/* Área do slider — pausa ao passar o mouse; clique nas setas ou nas bolinhas */}
        <div
          className="relative mt-8 overflow-hidden rounded-xl border border-[var(--border)] bg-slate-50/80 shadow-sm"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              width: `${commitmentItems.length * 100}%`,
              transform: `translateX(-${index * (100 / commitmentItems.length)}%)`,
            }}
          >
            {commitmentItems.map((item) => (
              <div
                key={item}
                className="flex shrink-0 items-center justify-center px-6 py-6 sm:px-10 sm:py-8"
                style={{ width: `${100 / commitmentItems.length}%` }}
              >
                <div className="flex items-center gap-3 text-center sm:text-left">
                  <span className="shrink-0 text-2xl text-[var(--primary)]" aria-hidden>✓</span>
                  <p className="text-lg font-medium text-[var(--primary)] sm:text-xl">{item}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Setas (anterior / próximo) */}
          <button
            type="button"
            onClick={() => setIndex((i) => (i === 0 ? commitmentItems.length - 1 : i - 1))}
            className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-white/90 text-[var(--primary)] shadow-sm transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
            aria-label="Compromisso anterior"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % commitmentItems.length)}
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-white/90 text-[var(--primary)] shadow-sm transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
            aria-label="Próximo compromisso"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Indicadores (bolinhas) */}
          <div className="flex justify-center gap-2 pb-4">
            {commitmentItems.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className="cursor-pointer rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
                style={{
                  width: i === index ? "1.5rem" : "0.5rem",
                  height: "0.5rem",
                  backgroundColor: i === index ? "var(--primary)" : "var(--border)",
                }}
                aria-label={`Compromisso ${i + 1} de ${commitmentItems.length}`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
