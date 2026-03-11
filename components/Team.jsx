"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronDown } from "lucide-react";
import { team } from "@/lib/site-config";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/SectionTitle";

const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23e2e8f0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='14'%3EFoto%3C/text%3E%3C/svg%3E";

function TeamCard({ member, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const truncateBio = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Card className="group h-full overflow-hidden card-hover">
        {/* Imagem com overlay */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={member.image.startsWith("http") || member.image.startsWith("/") ? member.image : placeholderImage}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = placeholderImage;
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/60 via-transparent to-transparent" />

          {/* Badge de registro — só no cliente para evitar hydration mismatch no Safari/iPhone (ngrok) */}
          {mounted && (
            <div className="absolute right-3 top-3">
              <Badge variant="default" className="bg-white/90 text-[var(--primary)] backdrop-blur-sm text-xs">
                <Award className="mr-1 h-3 w-3" />
                {member.register}
              </Badge>
            </div>
          )}

          {/* Nome e cargo sobre a imagem */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
            <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
              {member.name}
            </h3>
            <p className="text-sm sm:text-base font-medium text-white/90 drop-shadow-md">
              {member.role}
            </p>
          </div>
        </div>

        {/* Conteúdo do card - Biografia */}
        <CardContent className="p-4 sm:p-5">
          {/* Linha decorativa */}
          <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent-green)]" />

          {/* Biografia com expansão */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={isExpanded ? "expanded" : "collapsed"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-sm leading-relaxed text-slate-600"
              >
                {isExpanded ? member.bio : truncateBio(member.bio)}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Botão expandir/recolher */}
          {member.bio.length > 120 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 flex items-center gap-1 text-sm font-medium text-[var(--primary)] transition-colors hover:text-[var(--accent)] cursor-pointer"
            >
              {isExpanded ? "Ver menos" : "Ver mais"}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            </button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Team() {
  return (
    <section id="equipe" className="scroll-mt-20 bg-white py-12 sm:py-20 md:py-28 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Conheça os profissionais"
          title="Nossa equipe"
          description="A Essência Mind reúne formação técnica, experiência prática e compromisso ético."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 sm:mt-8 mx-auto max-w-2xl text-center space-y-5 sm:space-y-6"
        >
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Os atendimentos psicológicos são realizados por psicólogos habilitados e registrados no Conselho Regional de Psicologia, garantindo sigilo, responsabilidade profissional e respeito às normas da profissão.
          </p>
        </motion.div>

        {/* Grid de membros */}
        <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Nota adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl rounded-xl sm:rounded-2xl bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5 p-5 sm:p-8">
            <p className="text-sm sm:text-base text-slate-600">
              As frentes organizacionais contam também com suporte técnico da Administração, garantindo uma abordagem multidisciplinar e integrada nas questões relacionadas ao trabalho, às organizações e ao desenvolvimento humano.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
