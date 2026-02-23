import { site, getWhatsAppHref } from "@/lib/site-config";
import { FadeIn } from "@/components/FadeIn";

export function Hero() {
  const whatsappHref = getWhatsAppHref();

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden"
    >
      {/* Fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/60" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-blue-100/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-teal-100/25 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">

          {/* ── Coluna esquerda: texto ── */}
          <FadeIn delay={0} className="flex flex-col items-center text-center md:items-start md:text-left">
            {/* Badge */}
            <span className="inline-block rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
              Psicologia Clínica e Organizacional
            </span>

            {/* Título principal + linha com hover */}
            <div className="group inline-block cursor-default">
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[var(--primary)] sm:text-5xl lg:text-[3.25rem]">
                {site.name}
              </h1>
              <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--primary)] to-teal-400 transition-[width] duration-300 ease-out group-hover:w-full" />
            </div>

            {/* Slogan */}
            <p className="mt-5 max-w-md text-xl font-semibold leading-snug text-[var(--primary)] sm:text-2xl">
              {site.slogan}
            </p>
            <p className="mt-3 max-w-md text-base font-normal leading-snug text-[var(--muted)] sm:text-lg">
              Compromisso com o contexto, a história e a realidade de cada pessoa e organização.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[var(--primary-light)] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
              >
                <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Quero agendar minha sessão
              </a>
            </div>

            {/* Horário */}
            <p className="mt-3 text-sm text-[var(--muted)]">
              Atendimento online · Segunda a sexta, 8h–18h
            </p>
          </FadeIn>

          {/* ── Coluna direita: imagem com recorte orgânico (blob) ── */}
          <FadeIn delay={200} className="relative flex items-center justify-center md:justify-end">
            <svg width="0" height="0" className="absolute" aria-hidden>
              <defs>
                <clipPath id="heroBlob" clipPathUnits="objectBoundingBox">
                  <path d="M 0.1 0.05 Q 0.05 0.3 0.1 0.55 Q 0.04 0.8 0.12 0.98 L 0.4 1 Q 0.75 0.98 0.95 0.85 Q 1 0.5 0.98 0.15 Q 0.85 0 0.5 0.02 Q 0.15 0 0.1 0.05 Z" />
                </clipPath>
              </defs>
            </svg>
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px]">
              <div
                className="relative aspect-[4/5] w-full"
                style={{ clipPath: "url(#heroBlob)" }}
              >
                <img
                  src={site.logo.home}
                  alt="Pessoas na terapia"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* Blob decorativo (fora da foto, no canto) */}
              <div
                className="absolute -right-2 bottom-2 h-16 w-20 sm:-right-4 sm:bottom-0 sm:h-20 sm:w-28"
                style={{
                  background: "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
                  borderRadius: "45% 55% 60% 40% / 50% 45% 55% 50%",
                  opacity: 0.85,
                }}
                aria-hidden
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
