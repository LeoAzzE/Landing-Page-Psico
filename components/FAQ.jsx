"use client";

import { useState } from "react";
import { faqItems } from "@/lib/site-config";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-[var(--primary)] sm:text-3xl">
          Perguntas frequentes
        </h2>
        <p className="mt-2 text-[var(--muted)]">
          Dúvidas comuns sobre nossos serviços e forma de atendimento.
        </p>
        <ul className="mt-8 space-y-2">
          {faqItems.map((item, index) => (
            <li
              key={index}
              className="rounded-lg border border-[var(--border)] bg-[var(--card)] shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium text-[var(--primary)] transition-colors duration-150 hover:bg-slate-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span
                  className={`shrink-0 text-[var(--primary)] transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="border-t border-[var(--border)] px-4 py-3 text-sm text-[var(--muted)]">
                  {item.answer}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
