"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Shield, Sparkles } from "lucide-react";
import { site, getWhatsAppHref } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const features = [
  { icon: Shield, text: "Sigilo garantido" },
  { icon: Clock, text: "Atendimento flexível" },
  { icon: Sparkles, text: "Abordagem humanizada" },
];

export function Hero() {
  const whatsappHref = getWhatsAppHref();

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-64px)] overflow-hidden sm:min-h-[calc(100vh-80px)]"
    >
      {/* Background com gradientes suaves */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Elementos decorativos animados */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-[var(--primary)]/5 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-[400px] w-[400px] rounded-full bg-[var(--accent)]/5 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-blue-200/30 blur-3xl animate-float" />
      </motion.div>

      {/* Padrão de pontos decorativo */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, var(--primary) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="relative mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Coluna esquerda: Conteúdo */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* Badge animado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm">
                <Sparkles className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                Psicologia Clínica e Organizacional
              </Badge>
            </motion.div>

            {/* Slogan principal - agora é o título */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 sm:mt-8"
            >
              <h1 className="text-2xl font-bold tracking-tight text-[var(--primary)] sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                {site.slogan}
              </h1>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] sm:mt-5 sm:h-1.5 sm:w-28 lg:mx-0 lg:w-36" />
            </motion.div>

            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg md:text-xl"
            >
              Compromisso com o contexto, a história e a realidade de cada pessoa e organização. Cuidado psicológico responsável, ético e baseado na realidade da vida.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-4 lg:justify-start"
            >
              {features.map((feature, index) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2"
                >
                  <feature.icon className="h-3.5 w-3.5 text-[var(--accent)] sm:h-4 sm:w-4" />
                  <span className="text-xs font-medium text-slate-600 sm:text-sm">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4"
            >
              <Button asChild size="default" variant="gradient" className="group text-sm sm:text-base">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Quero agendar minha sessão</span>
                  <span className="sm:hidden">Agendar sessão</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="default" variant="outline" className="text-sm sm:text-base">
                <a href="#para-voce">
                  Conhecer serviços
                </a>
              </Button>
            </motion.div>

            {/* Info adicional */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 sm:mt-6 sm:text-sm lg:justify-start"
            >
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Atendimento online · Seg-Sex, 8h–18h
            </motion.p>
          </div>

          {/* Coluna direita: Imagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Container da imagem com efeitos */}
            <div className="relative">
              {/* Glow effect atrás da imagem */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 blur-2xl" />
              
              {/* Imagem principal */}
              <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl sm:rounded-3xl">
                  <img
                    src={site.logo.home}
                    alt="Psicologia e bem-estar"
                    className="h-full w-full object-cover"
                  />
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent" />
                </div>

                {/* Card flutuante - escondido em telas muito pequenas */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -bottom-4 left-2 rounded-xl bg-white p-3 shadow-xl sm:-bottom-6 sm:-left-6 sm:rounded-2xl sm:p-4 md:-left-10 md:p-5"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent)]/10 sm:h-12 sm:w-12 sm:rounded-xl">
                      <Shield className="h-4 w-4 text-[var(--accent)] sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-700 sm:text-sm">100% Confidencial</p>
                      <p className="text-[10px] text-slate-500 sm:text-xs">Sigilo profissional</p>
                    </div>
                  </div>
                </motion.div>

                {/* Elemento decorativo - menor em mobile */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -right-2 -top-2 h-14 w-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] shadow-lg sm:-right-4 sm:-top-4 sm:h-20 sm:w-20 md:-right-6 md:-top-6 md:h-24 md:w-24"
                  style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
