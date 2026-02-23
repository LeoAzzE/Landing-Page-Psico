import Link from "next/link";
import { site, contact } from "@/lib/site-config";

export const metadata = {
  title: `Política de Privacidade – ${site.name ?? "Essência Mind"}`,
  description: "Saiba como a Essência Mind coleta, usa e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).",
};

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
      {/* Cabeçalho da página */}
      <div className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:underline"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar ao site
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-[var(--primary)]">
            Política de Privacidade
          </h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Última atualização:{" "}
            {new Date().toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="mt-4 text-[var(--muted)]">
            A <strong className="text-[var(--foreground)]">{site.name ?? "Essência Mind"}</strong> respeita
            e protege a privacidade de seus visitantes e pacientes. Este documento explica como
            coletamos, usamos e protegemos suas informações pessoais, em conformidade com a{" "}
            <strong className="text-[var(--foreground)]">Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)</strong>.
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-[var(--primary)]">
                {section.title}
              </h2>
              <p className="mt-2 text-[var(--muted)] leading-relaxed">
                {section.content}
              </p>
              {section.list && (
                <ul className="mt-3 space-y-1.5 pl-4">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex gap-2 text-[var(--muted)]">
                      <span className="mt-1 shrink-0 text-[var(--accent)]" aria-hidden>•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {/* Bloco especial de contato na seção 9 */}
              {section.title.startsWith("9.") && (
                <div className="mt-4 rounded-xl border border-[var(--border)] bg-white p-5 text-sm text-[var(--muted)]">
                  <p>
                    <span className="font-medium text-[var(--foreground)]">E-mail: </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-[var(--primary)] hover:underline"
                    >
                      {contact.email}
                    </a>
                  </p>
                  <p className="mt-1">
                    <span className="font-medium text-[var(--foreground)]">WhatsApp: </span>
                    {contact.whatsapp}
                  </p>
                  <p className="mt-1">
                    <span className="font-medium text-[var(--foreground)]">Horário de atendimento: </span>
                    {contact.hours}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Rodapé da página */}
        <div className="mt-12 border-t border-[var(--border)] pt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[var(--primary-light)] hover:shadow-md"
          >
            Voltar ao site
          </Link>
        </div>
      </div>
    </div>
  );
}
