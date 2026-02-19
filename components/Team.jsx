"use client";

import { team } from "@/lib/site-config";

const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23e2e8f0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='14'%3EFoto%3C/text%3E%3C/svg%3E";

export function Team() {
  return (
    <section id="equipe" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-[var(--primary)] sm:text-3xl">
          Nossa equipe
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          A equipe reúne formação técnica, experiência prática e compromisso ético. A psicoterapia é conduzida exclusivamente por profissionais habilitados e registrados no Conselho Regional de Psicologia. As frentes organizacionais contam com suporte técnico da Administração.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
            >
              <div className="relative aspect-square w-full max-w-[200px] mx-auto overflow-hidden rounded-lg bg-slate-100">
                <img
                  src={member.image.startsWith("http") ? member.image : member.image.startsWith("/") ? member.image : placeholderImage}
                  alt=""
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = placeholderImage;
                  }}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--primary)]">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-[var(--primary)]">{member.role}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{member.register}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {member.bio}
              </p>
              <p className="mt-2 text-xs text-[var(--muted)]">{member.formation}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
