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
    <section id="contato" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Coluna esquerda: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4">
              Entre em contato
            </Badge>
            <h2 className="text-3xl font-bold text-[var(--primary)] sm:text-4xl">
              Vamos conversar?
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Estamos prontos para ajudar você ou sua empresa. Entre em contato e agende uma conversa inicial sem compromisso.
            </p>

            {/* Horário de atendimento */}
            <div className="mt-8 flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                <Clock className="h-6 w-6 text-[var(--primary)]" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-700">Horário de atendimento</h3>
                <p className="mt-1 text-slate-500">{contact.hours}</p>
                <p className="mt-2 text-sm text-slate-400">
                  Mensagens fora do horário serão respondidas no próximo dia útil.
                </p>
              </div>
            </div>

            {/* Cards de contato */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
                      <CardContent className="p-5">
                        <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${method.color}`}>
                          <method.icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-slate-700 group-hover:text-[var(--primary)]">
                          {method.title}
                        </h3>
                        <p className="mt-1 text-sm text-[var(--primary)] break-all">
                          {method.value}
                        </p>
                        <p className="mt-2 text-xs text-slate-400">
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
            className="flex flex-col gap-6"
          >
            {/* Card para pessoas */}
            <Card className="overflow-hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)]" />
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }} />
                <CardContent className="relative p-8 text-white">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <MessageCircle className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold">Para você</h3>
                  <p className="mt-2 text-white/80">
                    Agende sua consulta individual e comece sua jornada de autoconhecimento.
                  </p>
                  <Button
                    asChild
                    className="mt-6 bg-white text-[var(--primary)] hover:bg-white/90"
                  >
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                      {cta.individual.labelAlt}
                      <ArrowRight className="h-4 w-4" />
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
                <CardContent className="relative p-8 text-white">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <Building2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold">Para empresas</h3>
                  <p className="mt-2 text-white/80">
                    Conheça nossas soluções corporativas em saúde mental e desenvolvimento organizacional.
                  </p>
                  <Button
                    asChild
                    className="mt-6 bg-white text-[var(--accent)] hover:bg-white/90"
                  >
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                      {cta.empresas.labelAlt}
                      <ArrowRight className="h-4 w-4" />
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
