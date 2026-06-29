"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mail, CalendarCheck } from "lucide-react";
import { contact, contactSection, getWhatsAppHref, getMailtoHref } from "@/lib/site-config";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/SectionTitle";

export function Contact() {
  const whatsappHref = getWhatsAppHref();
  const mailtoHref = getMailtoHref();
  const therapyMailtoHref = getMailtoHref({
    subject: "Agendamento de psicoterapia - Essência Mind",
  });

  return (
    <section id="contato" className="scroll-mt-20 bg-slate-50 py-12 sm:py-20 md:py-28 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <SectionTitle
          badge={contactSection.badge}
          title={contactSection.title}
          description={contactSection.intro[0]}
          className="mb-6 sm:mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mx-auto max-w-2xl text-center space-y-3 mb-10 sm:mb-14"
        >
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            {contactSection.intro[1]}
          </p>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            {contactSection.intro[2]}
          </p>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            {contactSection.intro[3]}
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
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold">{contactSection.whatsappCard.title}</h3>
                      <p className="mt-1 text-white/90 text-sm">
                        {contactSection.whatsappCard.subtitle}
                      </p>
                      <p className="mt-2 text-xs text-white/80">
                        Esse canal pode ser utilizado para:
                      </p>
                      <ul className="mt-1.5 space-y-0.5 text-sm text-white/90">
                        {contactSection.whatsappCard.listItems.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/80" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-sm font-medium text-white/90">
                        {contact.whatsapp}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.a>

          {/* Card Agendamento Psicoterapia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <Card className="overflow-hidden transition-all duration-300 border-[var(--primary)]/20">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                    <CalendarCheck className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-slate-800">
                      {contactSection.platformCard.title}
                    </h3>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                      {contactSection.platformCard.subtitle}
                    </p>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                      <Button asChild variant="gradient" className="w-full sm:w-auto">
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <MessageSquare className="h-4 w-4" />
                          {contactSection.platformCard.whatsappButtonLabel}
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full sm:w-auto">
                        <a
                          href={therapyMailtoHref}
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <Mail className="h-4 w-4" />
                          {contactSection.platformCard.emailButtonLabel}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card E-mail institucional */}
          <motion.a
            href={mailtoHref}
            className="block"
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
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-slate-800">
                      {contactSection.emailCard.title}
                    </h3>
                    <p className="mt-1 text-slate-600 text-sm">
                      {contactSection.emailCard.subtitle}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      Esse canal pode ser utilizado especialmente para:
                    </p>
                    <ul className="mt-1 space-y-0.5 text-sm text-slate-600">
                      {contactSection.emailCard.listItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--primary)]/60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-sm font-medium text-[var(--primary)] break-all">
                      {contact.email}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
