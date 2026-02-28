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

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white">{site.name}</h3>
            <p className="mt-2 text-lg font-medium text-blue-200">
              Psicologia Clínica e Organizacional
            </p>
            <p className="mt-4 max-w-md text-blue-100/80 italic">
              "{site.slogan}"
            </p>

            {/* Contact info */}
            <div className="mt-8 space-y-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-100 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4" />
                <span>{contact.whatsapp}</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-blue-100 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                <span className="break-all">{contact.email}</span>
              </a>
              <div className="flex items-center gap-3 text-blue-100">
                <Clock className="h-4 w-4" />
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
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-200">
              Navegação
            </h4>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Rodapé">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-blue-100 transition-colors hover:text-white"
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
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-200">
              Legal
            </h4>
            <div className="mt-4 flex flex-col gap-2">
              {legalLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-100 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-blue-100 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* CNPJ */}
            <div className="mt-6 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-xs text-blue-200">CNPJ</p>
              <p className="mt-1 text-sm text-white">{contact.cnpj}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-blue-200">
              © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1 text-sm text-blue-200">
              Feito com <Heart className="h-4 w-4 text-red-400" /> para cuidar de você
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
