"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Mail, Phone, Clock } from "lucide-react";
import { site, contact } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sections = [
  {
    title: "1. Quem somos",
    content: `A Essência Mind é uma clínica de Psicologia Clínica e Organizacional. Atuamos como controladora dos dados pessoais coletados por meio deste site, conforme a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).`,
  },
  {
    title: "2. Dados que coletamos",
    content: `Coletamos apenas os dados necessários para as finalidades descritas nesta política:`,
    list: [
      "Nome e dados de contato (e-mail, telefone/WhatsApp) fornecidos voluntariamente ao nos enviar uma mensagem ou solicitar agendamento.",
      "Dados de navegação: endereço IP, tipo de navegador, páginas acessadas e tempo de visita, coletados via cookies essenciais e analíticos (somente com seu consentimento).",
    ],
  },
  {
    title: "3. Finalidade e base legal",
    content: `Seus dados são utilizados para:`,
    list: [
      "Responder solicitações de contato e agendamento — base legal: execução de contrato ou diligências pré-contratuais (art. 7º, V, LGPD).",
      "Melhorar a experiência de navegação e o desempenho do site — base legal: legítimo interesse (art. 7º, IX, LGPD), com opção de recusa via banner de cookies.",
      "Cumprimento de obrigação legal quando exigido (ex.: registros contábeis) — base legal: art. 7º, II, LGPD.",
    ],
  },
  {
    title: "4. Cookies",
    content: `Utilizamos dois tipos de cookies:`,
    list: [
      "Essenciais: necessários para o funcionamento básico do site. Não podem ser desativados.",
      "Analíticos (opcionais): coletam informações agregadas sobre uso do site. Só são ativados com o seu consentimento expresso no banner de cookies.",
    ],
  },
  {
    title: "5. Compartilhamento de dados",
    content: `Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins comerciais. Podemos compartilhá-los apenas:`,
    list: [
      "Com prestadores de serviços essenciais (ex.: hospedagem, e-mail), que atuam sob instruções nossas e estão sujeitos a obrigações de confidencialidade.",
      "Quando exigido por lei, ordem judicial ou autoridade competente.",
    ],
  },
  {
    title: "6. Prazo de retenção",
    content: `Dados de contato são retidos pelo tempo necessário à prestação do serviço ou pelo prazo legal aplicável. Dados de navegação anonimizados podem ser mantidos por até 12 meses.`,
  },
  {
    title: "7. Seus direitos (LGPD)",
    content: `Nos termos do art. 18 da LGPD, você tem direito a:`,
    list: [
      "Confirmar a existência de tratamento dos seus dados.",
      "Acessar os dados que mantemos sobre você.",
      "Corrigir dados incompletos, inexatos ou desatualizados.",
      "Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.",
      "Solicitar a portabilidade dos dados a outro fornecedor de serviço.",
      "Revogar o consentimento a qualquer momento.",
      "Peticionar à Autoridade Nacional de Proteção de Dados (ANPD).",
    ],
  },
  {
    title: "8. Segurança",
    content: `Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou destruição. As sessões de atendimento são conduzidas em ambientes seguros e confidenciais, em conformidade com o Código de Ética do Psicólogo (CFP).`,
  },
  {
    title: "9. Contato e encarregado (DPO)",
    content: `Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:`,
  },
  {
    title: "10. Atualizações desta política",
    content: `Esta política pode ser atualizada periodicamente. A data da última revisão estará sempre indicada abaixo. Recomendamos a consulta regular.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <div className="border-b border-[var(--border)] bg-gradient-to-br from-white to-blue-50/50">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] transition-colors hover:text-[var(--accent)]"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao site
            </Link>
            
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)]/10">
                <Shield className="h-7 w-7 text-[var(--primary)]" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-[var(--primary)] sm:text-4xl">
                  Política de Privacidade
                </h1>
                <Badge variant="outline" className="mt-3">
                  Última atualização:{" "}
                  {new Date().toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </Badge>
              </div>
            </div>
            
            <p className="mt-6 text-lg text-slate-600">
              A <strong className="text-[var(--primary)]">{site.name ?? "Essência Mind"}</strong> respeita
              e protege a privacidade de seus visitantes e pacientes. Este documento explica como
              coletamos, usamos e protegemos suas informações pessoais, em conformidade com a{" "}
              <strong className="text-[var(--primary)]">Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)</strong>.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-[var(--primary)]">
                {section.title}
              </h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                {section.content}
              </p>
              {section.list && (
                <ul className="mt-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-600">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {section.title.startsWith("9.") && (
                <div className="mt-6 rounded-xl bg-slate-50 p-5">
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[var(--primary)]" />
                      <div>
                        <p className="text-xs text-slate-500">E-mail</p>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-sm font-medium text-[var(--primary)] hover:underline"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[var(--primary)]" />
                      <div>
                        <p className="text-xs text-slate-500">WhatsApp</p>
                        <p className="text-sm font-medium text-slate-700">{contact.whatsapp}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-[var(--primary)]" />
                      <div>
                        <p className="text-xs text-slate-500">Horário</p>
                        <p className="text-sm font-medium text-slate-700">{contact.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.section>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" variant="gradient">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao site
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
