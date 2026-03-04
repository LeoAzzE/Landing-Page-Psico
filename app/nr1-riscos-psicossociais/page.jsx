"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  FileCheck,
  Brain,
  AlertTriangle,
  Shield,
  Users,
  Lightbulb,
  MessageCircle,
} from "lucide-react";
import { site, contact, getWhatsAppHref } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const riscosPsicossociais = [
  {
    icon: AlertTriangle,
    title: "Carga de trabalho excessiva",
    desc: "Exigências além da capacidade, prazos irreais e sobrecarga mental.",
  },
  {
    icon: Users,
    title: "Relações interpessoais",
    desc: "Conflitos, assédio moral ou sexual, falta de suporte e comunicação hostil.",
  },
  {
    icon: Brain,
    title: "Falta de autonomia e controle",
    desc: "Pouca influência sobre as tarefas, horários rígidos e ausência de participação nas decisões.",
  },
  {
    icon: Shield,
    title: "Insegurança no emprego",
    desc: "Medo de demissão, reestruturações constantes e precarização.",
  },
];

const obrigacoesEmpresas = [
  "Identificar e avaliar os riscos psicossociais no ambiente de trabalho.",
  "Elaborar e implementar medidas de prevenção e controle.",
  "Promover canais de escuta e acompanhamento (ex.: saúde mental, RH).",
  "Garantir que as medidas sejam revisadas periodicamente.",
  "Documentar e comunicar os riscos e as ações tomadas aos trabalhadores.",
];

export default function NR1RiscosPsicossociaisPage() {
  const whatsappHref = getWhatsAppHref();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary)]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-200 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao site
            </Link>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                <FileCheck className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  NR-1 e Riscos Psicossociais
                </h1>
                <p className="mt-3 text-lg text-blue-100 sm:text-xl">
                  O que sua empresa precisa saber sobre saúde mental no trabalho
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[var(--accent-green)]" />
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-blue-100/90 sm:text-lg">
              A <strong className="text-white">Norma Regulamentadora nº 1 (NR-1)</strong> estabelece
              as disposições gerais sobre segurança e saúde no trabalho no Brasil. Com as
              atualizações recentes, os <strong className="text-white">riscos psicossociais</strong>{" "}
              passaram a ser explicitamente considerados — e as empresas precisam estar atentas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo principal */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        {/* O que é NR-1 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <Card className="overflow-hidden border-[var(--border)] shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                  <FileCheck className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                  O que é a NR-1?
                </h2>
              </div>
              <p className="mt-5 leading-relaxed text-slate-600">
                A <strong className="text-slate-700">NR-1</strong> é a norma que define as
                obrigações gerais de segurança e saúde no trabalho aplicáveis a todos os
                empregadores e trabalhadores. Ela exige a implementação de um{" "}
                <strong className="text-slate-700">Sistema de Gestão de Segurança e Saúde no
                Trabalho (SG-SST)</strong>, que inclui a identificação de perigos, a avaliação e o
                controle de riscos — e isso passa a abranger também os{" "}
                <strong className="text-[var(--primary)]">riscos psicossociais</strong>.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Ou seja: cuidar da saúde mental no trabalho não é apenas uma boa prática — é uma
                exigência normativa. Empresas que ignoram fatores como sobrecarga, assédio, falta de
                autonomia e insegurança no emprego podem estar em desacordo com a legislação e,
                além disso, colocam em risco o bem-estar e a produtividade das pessoas.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Riscos psicossociais */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-green)]/15">
              <Brain className="h-6 w-6 text-[var(--accent-green-dark)]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                O que são riscos psicossociais?
              </h2>
              <p className="mt-1 text-slate-600">
                Fatores no trabalho que podem afetar a saúde mental e o bem-estar
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {riscosPsicossociais.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <Card className="h-full border-[var(--border)] transition-shadow hover:shadow-md">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--primary)]/10">
                      <item.icon className="h-5 w-5 text-[var(--primary)]" />
                    </div>
                    <h3 className="mt-4 font-semibold text-slate-800">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Obrigações das empresas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <Card className="overflow-hidden border-l-4 border-l-[var(--primary)] border-[var(--border)] bg-slate-50/50 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                  <Shield className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                  Obrigações das empresas
                </h2>
              </div>
              <p className="mt-4 text-slate-600">
                No âmbito do SG-SST e da NR-1, as empresas devem, entre outras ações:
              </p>
              <ul className="mt-5 space-y-3">
                {obrigacoesEmpresas.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-700">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent-green)]"
                      aria-hidden
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        {/* Como a Essência Mind ajuda */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Card className="overflow-hidden border-[var(--border)] bg-gradient-to-br from-[var(--primary)]/5 via-white to-[var(--accent-green)]/5 shadow-sm">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)]/10">
                    <Lightbulb className="h-7 w-7 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                      Como a {site.name} pode ajudar
                    </h2>
                    <p className="mt-3 max-w-xl leading-relaxed text-slate-600">
                      Oferecemos palestras, treinamentos e programas voltados à saúde mental no
                      trabalho, prevenção de assédio e construção de ambientes mais saudáveis.
                      Ajudamos sua empresa a alinhar prática e norma, com foco em pessoas e
                      resultados.
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <Button asChild size="lg" variant="gradient" className="w-full sm:w-auto">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Falar com a equipe
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Voltar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao site
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
