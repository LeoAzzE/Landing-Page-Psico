"use client";

import { motion } from "framer-motion";
import { Clock, MessageSquare } from "lucide-react";
import { contact, getWhatsAppHref } from "@/lib/site-config";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/ContactForm";

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

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Coluna esquerda: Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>

          {/* Coluna direita: Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 sm:gap-5"
          >
            {/* Card WhatsApp */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
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
            </a>

            {/* Horário de atendimento */}
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

            {/* Info adicional */}
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

            {/* CNPJ */}
            <p className="text-center text-xs text-slate-400">
              CNPJ: {contact.cnpj}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
