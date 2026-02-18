import {
  servicesParaVoce,
  servicesParaEmpresas,
} from "@/lib/site-config";
import { CTAButtons } from "./CTAButtons";

function ServiceCard({ title, description }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-[var(--primary)]/30 hover:shadow-lg">
      <h3 className="text-base font-semibold text-[var(--primary)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{description}</p>
    </div>
  );
}

export function Services() {
  return (
    <>
      <section id="para-voce" className="scroll-mt-20 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            Para você
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--muted)]">
            Cuidado psicológico responsável, ético e baseado na realidade da vida.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {servicesParaVoce.map((s) => (
              <ServiceCard key={s.title} title={s.title} description={s.description} />
            ))}
          </div>
          <div className="mt-10">
            <CTAButtons variant="compact" only="individual" />
          </div>
        </div>
      </section>

      <section id="para-empresas" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            Para empresas
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--muted)]">
            Saúde mental não é discurso. É gestão responsável.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {servicesParaEmpresas.map((s) => (
              <ServiceCard key={s.title} title={s.title} description={s.description} />
            ))}
          </div>
          <p className="mt-6 text-sm italic text-[var(--muted)]">
            Não prometemos resultados rápidos. O foco é amadurecimento profissional, clareza de papel e responsabilidade nas decisões.
          </p>
          <div className="mt-8">
            <CTAButtons variant="compact" only="empresas" />
          </div>
        </div>
      </section>
    </>
  );
}
