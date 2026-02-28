"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, MessageCircle, Building2, ArrowRight } from "lucide-react";
import { contact, getWhatsAppHref, cta } from "@/lib/site-config";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const contactMethods = [
  {
    icon: Phone,
    title: "WhatsApp",
    value: contact.whatsapp,
    href: getWhatsAppHref(),
    description: "Resposta em até 24h úteis",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: contact.email,
    href: `mailto:${contact.email}`,
    description: "Para informações detalhadas",
    color: "from-[var(--primary)] to-[var(--primary-light)]",
  },
];

export function Contact() {
  const whatsappHref = getWhatsAppHref();

  return (
    <section id="contato" className="scroll-mt-20 bg-slate-50 py-12 sm:py-20 md:py-28 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Coluna esquerda: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="min-w-0"
          >
            <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm">
              Entre em contato
            </Badge>
            <h2 className="text-2xl font-bold text-[var(--primary)] sm:text-3xl md:text-4xl">
              Vamos conversar?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-500">
              Estamos prontos para ajudar você ou sua empresa. Entre em contato e agende uma conversa inicial sem compromisso.
            </p>

            {/* Horário de atendimento */}
            <div className="mt-6 sm:mt-8 flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-sm">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[var(--primary)]/10">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--primary)]" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-slate-700 text-sm sm:text-base">Horário de atendimento</h3>
                <p className="mt-1 text-slate-500 text-sm sm:text-base">{contact.hours}</p>
                <p className="mt-2 text-xs sm:text-sm text-slate-400">
                  Mensagens fora do horário serão respondidas no próximo dia útil.
                </p>
              </div>
            </div>

            {/* Cards de contato */}
            <div className="mt-4 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a
                    href={method.href}
                    target={method.title === "WhatsApp" ? "_blank" : undefined}
                    rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="group block"
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-[var(--primary)]/30">
                      <CardContent className="p-4 sm:p-5">
                        <div className={`mb-2 sm:mb-3 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${method.color}`}>
                          <method.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-slate-700 group-hover:text-[var(--primary)] text-sm sm:text-base">
                          {method.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-[var(--primary)] break-all">
                          {method.value}
                        </p>
                        <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-slate-400">
                          {method.description}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coluna direita: CTA Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 sm:gap-6 min-w-0"
          >
            {/* Card para pessoas */}
            <Card className="overflow-hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)]" />
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }} />
                <CardContent className="relative p-5 sm:p-8 text-white">
                  <div className="mb-3 sm:mb-4 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm">
                    <MessageCircle className="h-5 w-5 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">Para você</h3>
                  <p className="mt-2 text-white/80 text-sm sm:text-base">
                    Agende sua consulta individual e comece sua jornada de autoconhecimento.
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="mt-4 sm:mt-6 bg-white text-[var(--primary)] hover:bg-white/90 text-xs sm:text-sm whitespace-normal text-left h-auto py-2"
                  >
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                      <span className="hidden sm:inline">{cta.individual.labelAlt}</span>
                      <span className="sm:hidden">Agendar consulta</span>
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                    </a>
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Card para empresas */}
            <Card className="overflow-hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-teal-400" />
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }} />
                <CardContent className="relative p-5 sm:p-8 text-white">
                  <div className="mb-3 sm:mb-4 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm">
                    <Building2 className="h-5 w-5 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">Para empresas</h3>
                  <p className="mt-2 text-white/80 text-sm sm:text-base">
                    Conheça nossas soluções corporativas em saúde mental e desenvolvimento organizacional.
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="mt-4 sm:mt-6 bg-white text-[var(--accent)] hover:bg-white/90 text-xs sm:text-sm whitespace-normal text-left h-auto py-2"
                  >
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                      <span className="hidden sm:inline">{cta.empresas.labelAlt}</span>
                      <span className="sm:hidden">Falar sobre empresas</span>
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                    </a>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
