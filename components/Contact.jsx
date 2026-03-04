"use client";

import { motion } from "framer-motion";
import { Clock, MessageSquare, Mail } from "lucide-react";
import { contact, getWhatsAppHref } from "@/lib/site-config";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Contact() {
  const whatsappHref = getWhatsAppHref();

  return (
    <section id="contato" className="scroll-mt-20 bg-slate-50 py-12 sm:py-20 md:py-28 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm">
            Entre em contato
          </Badge>
          <h2 className="text-2xl font-bold text-[var(--primary)] sm:text-3xl md:text-4xl">
            Vamos conversar?
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-slate-500">
            Estamos prontos para ajudar você ou sua empresa. Entre em contato e agende uma conversa inicial sem compromisso.
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl flex flex-col gap-4 sm:gap-5">
          {/* Card WhatsApp */}
          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-green-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500" />
                <CardContent className="relative p-5 sm:p-6 text-white">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Prefere WhatsApp?</h3>
                      <p className="mt-1 text-white/90 text-sm">
                        Clique aqui para iniciar uma conversa direta. Respondemos em até 24h úteis.
                      </p>
                      <p className="mt-2 text-sm font-medium text-white/80">
                        {contact.whatsapp}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.a>

          {/* Card E-mail institucional */}
          <motion.a
            href={contact.email && !contact.email.includes("inserir") ? `mailto:${contact.email}` : undefined}
            className={contact.email && !contact.email.includes("inserir") ? "block" : "block cursor-default"}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border-[var(--border)]">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                    <Mail className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">E-mail institucional</h3>
                    <p className="mt-1 text-slate-600 text-sm">
                      Envie sua mensagem por e-mail. Retornaremos em até 24h úteis.
                    </p>
                    <p className="mt-2 text-sm font-medium text-[var(--primary)] break-all">
                      {contact.email}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.a>

          {/* Horário de atendimento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Card>
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                    <Clock className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-700 text-base">Horário de atendimento</h3>
                    <p className="mt-1 text-slate-600 text-sm">{contact.hours}</p>
                    <p className="mt-2 text-xs text-slate-400">
                      Mensagens fora do horário serão respondidas no próximo dia útil.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Info adicional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 border-0">
              <CardContent className="p-5 sm:p-6">
                <h3 className="font-semibold text-slate-700 text-base">
                  O que esperar do primeiro contato?
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                    Acolhimento inicial para entender sua demanda
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                    Explicação sobre como funciona o atendimento
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                    Esclarecimento de dúvidas sobre valores e horários
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                    Sem compromisso — você decide se quer continuar
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* CNPJ */}
          <p className="text-center text-xs text-slate-400">
            CNPJ: {contact.cnpj}
          </p>
        </div>
      </div>
    </section>
  );
}
