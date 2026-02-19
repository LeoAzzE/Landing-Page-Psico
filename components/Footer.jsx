import Link from "next/link";
import { site, contact } from "@/lib/site-config";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#para-voce", label: "Para você" },
  { href: "#para-empresas", label: "Para empresas" },
  { href: "#equipe", label: "Equipe" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--foreground)] text-slate-300 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">{site.name}</p>
            <p className="mt-1 text-sm">{site.tagline}</p>
            <p className="mt-2 text-sm italic">{site.slogan}</p>
          </div>
          <nav className="flex flex-wrap gap-6" aria-label="Rodapé">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-slate-600 pt-8 text-sm text-slate-400">
          <p>Horário: {contact.hours}</p>
          <p className="mt-1">CNPJ: {contact.cnpj}</p>
          <p className="mt-1">
            <a
              href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white underline"
            >
              Código de Ética do Psicólogo (CFP)
            </a>
          </p>
          <p className="mt-4 text-center text-slate-500">Copyright © {new Date().getFullYear()} {site.name} | Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
