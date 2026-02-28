"use client";

import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { faqItems, getWhatsAppHref } from "@/lib/site-config";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FAQ() {
  const whatsappHref = getWhatsAppHref();

  return (
    <section id="faq" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Badge variant="outline" className="mb-4">
            <HelpCircle className="mr-2 h-4 w-4" />
            Tire suas dúvidas
          </Badge>
          <h2 className="text-3xl font-bold text-[var(--primary)] sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Dúvidas comuns sobre nossos serviços e forma de atendimento.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="w-full cursor-pointer">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-lg font-medium text-slate-700">
              Ainda tem dúvidas?
            </p>
            <p className="mt-2 text-slate-500">
              Entre em contato conosco pelo WhatsApp. Estamos prontos para ajudar!
            </p>
            <Button asChild className="mt-6" variant="gradient">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
