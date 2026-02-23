import { contact, getWhatsAppHref, cta } from "@/lib/site-config";
import { CTAButtons } from "./CTAButtons";
import { FadeIn } from "@/components/FadeIn";

export function Contact() {
  const whatsappHref = getWhatsAppHref();

  return (
    <section id="contato" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="text-2xl font-bold text-[var(--primary)] sm:text-3xl">
            Contato
          </h2>
          <p className="mt-2 text-[var(--muted)]">
            Horário de atendimento: {contact.hours}
          </p>
        </FadeIn>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <FadeIn delay={100}>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-200 hover:border-[var(--primary)]/30 hover:shadow-md">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
                WhatsApp
              </h3>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-[var(--primary)] hover:underline"
              >
                {contact.whatsapp}
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={180}>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-200 hover:border-[var(--primary)]/30 hover:shadow-md">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
                E-mail
              </h3>
              <a
                href={`mailto:${contact.email}`}
                className="mt-1 block break-all text-[var(--primary)] hover:underline"
              >
                {contact.email}
              </a>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={250} className="mt-10">
          <CTAButtons variant="compact" />
        </FadeIn>
      </div>
    </section>
  );
}
