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
  Scale,
  Briefcase,
  Heart,
  Globe,
  UserCheck,
  Clock,
} from "lucide-react";
import { site, getWhatsAppHref } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const riscosPsicossociais = [
  {
    icon: AlertTriangle,
    title: "Organização do trabalho",
    desc: "Sobrecarga de trabalho, excesso de demandas, jornadas prolongadas, ritmo intenso, metas incompatíveis e falta de recursos para execução das atividades.",
  },
  {
    icon: Users,
    title: "Liderança e gestão",
    desc: "Falta de apoio das lideranças, comunicação inadequada, ausência de feedback, pouca participação nas decisões, gestão baseada no medo, cobranças desrespeitosas e estilos de liderança excessivamente autoritários.",
  },
  {
    icon: Shield,
    title: "Assédio e outras formas de violência no trabalho",
    desc: "Assédio moral, assédio sexual, discriminação, humilhações, constrangimentos, intimidações, perseguições, isolamento, microviolências e outras condutas abusivas que comprometam a dignidade, a saúde e a segurança psicológica dos trabalhadores.",
  },
  {
    icon: MessageCircle,
    title: "Relações interpessoais",
    desc: "Conflitos constantes, falta de respeito, comunicação hostil, ausência de cooperação, isolamento social e dificuldades no relacionamento entre colegas, gestores e equipes.",
  },
  {
    icon: Brain,
    title: "Autonomia",
    desc: "Pouca influência sobre a forma de executar o trabalho, ausência de participação nas decisões e baixo controle sobre as atividades.",
  },
  {
    icon: Briefcase,
    title: "Segurança e estabilidade",
    desc: "Insegurança quanto ao emprego, mudanças organizacionais frequentes, processos pouco transparentes e incertezas constantes.",
  },
  {
    icon: Clock,
    title: "Equilíbrio entre vida pessoal e trabalho",
    desc: "Dificuldade para conciliar demandas profissionais e pessoais, disponibilidade permanente, excesso de horas extras e impactos na qualidade de vida.",
  },
];

const legislacoesRelacionadas = [
  {
    icon: Scale,
    title: "Lei nº 14.457/2022 – Programa Emprega + Mulheres",
    desc: "Criada para ampliar a participação e a permanência das mulheres no mercado de trabalho, a lei reúne medidas voltadas à empregabilidade, ao apoio à parentalidade e à promoção de ambientes profissionais mais seguros e inclusivos. Entre suas determinações, estabelece ações de prevenção e combate ao assédio sexual e a outras formas de violência no trabalho, incluindo canais de denúncia, capacitação das lideranças, ações educativas e fortalecimento da atuação da CIPA.",
  },
  {
    icon: Globe,
    title: "Convenção nº 190 da Organização Internacional do Trabalho (OIT)",
    desc: "Reconhece o direito de todas as pessoas a um ambiente de trabalho livre de violência e assédio, influenciando políticas públicas e práticas organizacionais voltadas à proteção da dignidade humana.",
  },
  {
    icon: UserCheck,
    title: "Lei Brasileira de Inclusão (Lei nº 13.146/2015)",
    desc: "Reforça o compromisso das organizações com a inclusão, acessibilidade e igualdade de oportunidades para pessoas com deficiência.",
  },
  {
    icon: Heart,
    title: "Estatuto da Igualdade Racial (Lei nº 12.288/2010)",
    desc: "Contribui para o desenvolvimento de políticas que promovam ambientes de trabalho mais inclusivos e livres de discriminação racial.",
  },
];

const acoesEmpresas = [
  "Identificar e avaliar os fatores de riscos psicossociais.",
  "Registrar esses riscos dentro do Programa de Gerenciamento de Riscos (PGR).",
  "Implementar medidas preventivas e corretivas.",
  "Preparar lideranças para uma gestão mais saudável e respeitosa.",
  "Desenvolver políticas de prevenção ao assédio e à violência.",
  "Promover canais de escuta e acolhimento.",
  "Acompanhar os resultados e revisar continuamente as ações implementadas.",
  "Fortalecer uma cultura organizacional baseada no respeito, na ética e na segurança psicológica.",
];

const solucoesEssenciaMind = [
  "Avaliação de riscos psicossociais alinhada à NR-1.",
  "Diagnóstico organizacional.",
  "Programas de promoção da saúde mental.",
  "Desenvolvimento de lideranças.",
  "Capacitação sobre assédio moral, assédio sexual e outras formas de violência no trabalho.",
  "Treinamentos sobre diversidade, inclusão e respeito nas relações profissionais.",
  "Elaboração de planos de ação para redução dos riscos psicossociais.",
  "Apoio à implementação das exigências da NR-1 e da Lei nº 14.457/2022.",
  "Acompanhamento psicológico para colaboradores.",
  "Palestras, workshops e rodas de conversa.",
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
                  Saúde Mental no Trabalho, Riscos Psicossociais e Conformidade Legal
                </h1>
                <div className="mt-4 h-1 w-20 rounded-full bg-[var(--accent-green)]" />
              </div>
            </div>

            <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-blue-100/90 sm:text-lg">
              <p>
                As organizações vivem um momento de profundas transformações. A pressão por
                resultados, as mudanças nas formas de trabalho, o aumento dos afastamentos por
                transtornos mentais, as dificuldades para atrair e reter talentos e a necessidade
                de construir ambientes mais seguros tornaram a saúde mental um tema estratégico para
                qualquer empresa.
              </p>
              <p>
                Hoje, cuidar das pessoas deixou de ser apenas uma iniciativa de bem-estar. É também
                uma responsabilidade prevista em normas regulamentadoras, legislações trabalhistas e
                políticas de prevenção à violência e à discriminação no ambiente de trabalho.
              </p>
              <p>
                A {site.name} atua apoiando organizações na construção de ambientes psicologicamente
                mais seguros, saudáveis e alinhados às exigências legais, sempre respeitando a
                realidade e a cultura de cada empresa.
              </p>
            </div>
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
                A <strong className="text-slate-700">Norma Regulamentadora nº 1 (NR-1)</strong>,
                atualizada pela Portaria MTE nº 1.419/2024, estabelece as diretrizes gerais para a
                gestão da Segurança e Saúde no Trabalho por meio do Gerenciamento de Riscos
                Ocupacionais (GRO).
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Entre as mudanças mais importantes está a necessidade de identificar, avaliar,
                controlar e acompanhar também os fatores de riscos psicossociais relacionados ao
                trabalho, incorporando esses aspectos ao Programa de Gerenciamento de Riscos (PGR).
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Isso significa que fatores como excesso de pressão, jornadas inadequadas, metas
                incompatíveis com os recursos disponíveis, conflitos interpessoais, assédio,
                insegurança no emprego, comunicação inadequada, falta de apoio das lideranças e
                outras condições organizacionais deixam de ser apenas questões de clima ou gestão e
                passam a integrar a gestão dos riscos ocupacionais.
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
                Fatores presentes na organização do trabalho, na gestão e nas relações profissionais
              </p>
            </div>
          </div>

          <p className="mb-6 leading-relaxed text-slate-600">
            Riscos psicossociais são fatores presentes na organização do trabalho, na forma de
            gestão e nas relações profissionais que podem afetar a saúde física, emocional e social
            dos trabalhadores. Entre eles destacam-se:
          </p>

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

        {/* Outras legislações relacionadas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10">
              <Scale className="h-6 w-6 text-[var(--primary)]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                Outras legislações relacionadas
              </h2>
              <p className="mt-1 text-slate-600">
                Normas que dialogam com a saúde mental e a prevenção de violências no trabalho
              </p>
            </div>
          </div>

          <p className="mb-6 leading-relaxed text-slate-600">
            Além da NR-1, diversas normas e legislações dialogam diretamente com a promoção da saúde
            mental e a prevenção das violências no ambiente de trabalho.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {legislacoesRelacionadas.map((item, index) => (
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

        {/* O que as empresas precisam fazer */}
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
                  O que as empresas precisam fazer?
                </h2>
              </div>
              <p className="mt-4 text-slate-600">
                Cada organização possui uma realidade diferente, mas, de forma geral, espera-se que
                sejam desenvolvidas ações como:
              </p>
              <ul className="mt-5 space-y-3">
                {acoesEmpresas.map((item, i) => (
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
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)]/10">
                  <Lightbulb className="h-7 w-7 text-[var(--primary)]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                    Como a {site.name} pode ajudar?
                  </h2>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    A {site.name} integra conhecimentos da Psicologia, Gestão de Pessoas e
                    Desenvolvimento Organizacional para apoiar empresas na construção de ambientes
                    de trabalho mais saudáveis, seguros e sustentáveis. Entre nossas soluções estão:
                  </p>
                  <ul className="mt-5 space-y-3">
                    {solucoesEssenciaMind.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-700">
                        <span
                          className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent-green)]"
                          aria-hidden
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 leading-relaxed text-slate-600">
                    Mais do que apoiar o cumprimento da legislação, nosso objetivo é ajudar as
                    organizações a desenvolver ambientes em que resultados e cuidado com as pessoas
                    caminhem juntos, fortalecendo a saúde mental, a qualidade das relações e a
                    sustentabilidade dos negócios.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex justify-center sm:justify-start">
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
