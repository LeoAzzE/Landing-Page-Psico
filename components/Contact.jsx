import { contact, getWhatsAppHref, cta } from "@/lib/site-config";
import { CTAButtons } from "./CTAButtons";

export function Contact() {
  const whatsappHref = getWhatsAppHref();

  return (
    <section id="contato" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          Contato
        </h2>
        <p className="mt-2 text-[var(--muted)]">
          Horário de atendimento: {contact.hours}
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-200 hover:border-[var(--primary)]/30 hover:shadow-md">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
              WhatsApp
            </h3>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-[var(--foreground)] hover:underline"
            >
              {contact.whatsapp}
            </a>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-200 hover:border-[var(--primary)]/30 hover:shadow-md">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
              E-mail
            </h3>
            <a
              href={`mailto:${contact.email}`}
              className="mt-1 block break-all text-[var(--foreground)] hover:underline"
            >
              {contact.email}
            </a>
          </div>
        </div>
        <div className="mt-10">
          <CTAButtons variant="compact" />
        </div>
      </div>
    </section>
  );
}
