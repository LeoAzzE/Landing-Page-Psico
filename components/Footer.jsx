"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ExternalLink, Mail, Phone, Clock } from "lucide-react";
import { site, contact, getWhatsAppHref } from "@/lib/site-config";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#para-voce", label: "Para você" },
  { href: "#para-empresas", label: "Para empresas" },
  { href: "#equipe", label: "Equipe" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

const legalLinks = [
  {
    href: "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf",
    label: "Código de Ética do Psicólogo (CFP)",
    external: true,
  },
  {
    href: "/politica-de-privacidade",
    label: "Política de Privacidade",
    external: false,
  },
];

export function Footer() {
  const whatsappHref = getWhatsAppHref();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary)]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="relative mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white">{site.name}</h3>
            <p className="mt-1 sm:mt-2 text-base sm:text-lg font-medium text-blue-200">
              Psicologia Clínica e Organizacional
            </p>
            <p className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base text-blue-100/80 italic">
              "{site.slogan}"
            </p>

            {/* Contact info */}
            <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-blue-100 transition-colors hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span>{contact.whatsapp}</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-blue-100 transition-colors hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span className="break-all">{contact.email}</span>
              </a>
              <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-blue-100">
                <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span>{contact.hours}</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-200">
              Navegação
            </h4>
            <nav className="mt-3 sm:mt-4 flex flex-col gap-1.5 sm:gap-2" aria-label="Rodapé">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm sm:text-base text-blue-100 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-200">
              Legal
            </h4>
            <div className="mt-3 sm:mt-4 flex flex-col gap-1.5 sm:gap-2">
              {legalLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm sm:text-base text-blue-100 transition-colors hover:text-white"
                  >
                    <span className="break-words">{link.label}</span>
                    <ExternalLink className="h-3 w-3 shrink-0" />
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm sm:text-base text-blue-100 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* CNPJ */}
            <div className="mt-4 sm:mt-6 rounded-lg sm:rounded-xl bg-white/10 p-3 sm:p-4 backdrop-blur-sm">
              <p className="text-[10px] sm:text-xs text-blue-200">CNPJ</p>
              <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-white">{contact.cnpj}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-12 border-t border-white/10 pt-6 sm:pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 sm:flex-row">
            <p className="text-xs sm:text-sm text-blue-200 text-center sm:text-left">
              © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1 text-xs sm:text-sm text-blue-200">
              Feito com <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-400" /> para cuidar de você
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
