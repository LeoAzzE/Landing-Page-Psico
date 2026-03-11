"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site-config";

export function Welcome() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">

          {/* Coluna esquerda: Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:mx-0">
              {/* Elemento decorativo atrás da imagem */}
              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl bg-[var(--primary)]/10 sm:-bottom-6 sm:-left-6" />

              {/* Imagem principal */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/logo/Image mulher.png"
                  alt="Psicóloga em atendimento"
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Elemento decorativo */}
              <div
                className="absolute -right-3 -top-3 h-16 w-16 bg-[var(--accent-green)] sm:-right-5 sm:-top-5 sm:h-20 sm:w-20"
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              />
            </div>
          </motion.div>

          {/* Coluna direita: Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Título */}
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl md:text-5xl">
              Bem-vindo(a) à{" "}
              <span className="text-[var(--primary)]">Essência</span>{" "}
              <span className="text-[var(--accent-green)]">Mind</span>!
            </h2>

            {/* Subtítulo */}
            <p className="mt-3 text-lg font-medium text-[var(--primary)] sm:text-xl">
              Compromisso com a história, o contexto e a realidade de cada pessoa e de cada
              organização.
            </p>

            {/* Linha decorativa */}
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent-green)] lg:mx-0 lg:w-24" />

            {/* Texto principal */}
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              <p>
                A <strong className="text-slate-700">{site.name}</strong> nasce da união entre experiência em gestão, psicologia e
                desenvolvimento humano.
              </p>
              <p>
                Mais do que um projeto profissional, é um compromisso com o cuidado com as
                pessoas, com o desenvolvimento humano e com a responsabilidade nas
                relações de trabalho e na vida.
              </p>
              <p>
                Atuamos tanto no atendimento a pessoas quanto no apoio a organizações,
                oferecendo serviços de psicologia clínica, desenvolvimento profissional e
                iniciativas voltadas à promoção de ambientes de trabalho mais saudáveis e
                responsáveis.
              </p>
              <p>
                Nossa equipe reúne psicólogos e profissionais com experiência em gestão e
                desenvolvimento humano, integrando conhecimentos da psicologia e da
                administração na compreensão das relações pessoais, profissionais e
                organizacionais.
              </p>
              <p className="font-medium text-slate-700">
                Entre os serviços oferecidos estão:
              </p>
              <ul className="list-inside list-disc space-y-1.5 pl-2 text-slate-600">
                <li>psicoterapia individual</li>
                <li>atração e seleção de talentos</li>
                <li>desenvolvimento de carreira</li>
                <li>mentorias profissionais</li>
                <li>programas de saúde mental nas empresas</li>
                <li>levantamento de fatores de risco psicossociais relacionados ao trabalho</li>
                <li>apoio às organizações na implementação das diretrizes da NR-1 (GRO/PGR)</li>
              </ul>
              <p>
                Aqui, técnica e humanidade caminham juntas, respeitando sempre a história, o
                contexto e as possibilidades de cada pessoa e de cada organização.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
