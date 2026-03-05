"use client";

import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { faqItems, getWhatsAppHref } from "@/lib/site-config";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/SectionTitle";

export function FAQ() {
  const whatsappHref = getWhatsAppHref();

  return (
    <section id="faq" className="scroll-mt-20 bg-slate-50 py-12 sm:py-20 md:py-28 overflow-x-hidden">
      <div className="mx-auto max-w-4xl px-3 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Tire suas dúvidas"
          badgeIcon={<HelpCircle className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4" />}
          title="Perguntas frequentes"
          description="Dúvidas comuns sobre nossos serviços e forma de atendimento."
        />

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-12"
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
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
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
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="rounded-xl sm:rounded-2xl bg-white p-5 sm:p-8 shadow-sm">
            <p className="text-base sm:text-lg font-medium text-slate-700">
              Ainda tem dúvidas?
            </p>
            <p className="mt-2 text-sm sm:text-base text-slate-500">
              Entre em contato conosco pelo WhatsApp. Estamos prontos para ajudar!
            </p>
            <Button asChild className="mt-4 sm:mt-6 text-sm sm:text-base" variant="gradient">
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
