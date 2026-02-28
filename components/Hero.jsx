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
      className="relative min-h-[calc(100vh-80px)] overflow-hidden"
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

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Coluna esquerda: Conteúdo */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* Badge animado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <Sparkles className="mr-2 h-4 w-4" />
                Psicologia Clínica e Organizacional
              </Badge>
            </motion.div>

            {/* Título principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6"
            >
              <h1 className="text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-5xl lg:text-6xl">
                {site.name}
              </h1>
              <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] lg:w-32" />
            </motion.div>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-lg text-xl font-medium leading-relaxed text-slate-700 sm:text-2xl"
            >
              {site.slogan}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg"
            >
              Compromisso com o contexto, a história e a realidade de cada pessoa e organização.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              {features.map((feature, index) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm"
                >
                  <feature.icon className="h-4 w-4 text-[var(--accent)]" />
                  <span className="text-sm font-medium text-slate-600">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild size="lg" variant="gradient" className="group">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-5 w-5" />
                  Quero agendar minha sessão
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
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
              className="mt-6 flex items-center gap-2 text-sm text-slate-500"
            >
              <Clock className="h-4 w-4" />
              Atendimento online · Segunda a sexta, 8h–18h
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
              <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={site.logo.home}
                    alt="Psicologia e bem-estar"
                    className="h-full w-full object-cover"
                  />
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent" />
                </div>

                {/* Card flutuante */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-xl sm:-left-10 sm:p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10">
                      <Shield className="h-6 w-6 text-[var(--accent)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">100% Confidencial</p>
                      <p className="text-xs text-slate-500">Sigilo profissional</p>
                    </div>
                  </div>
                </motion.div>

                {/* Elemento decorativo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -right-4 -top-4 h-20 w-20 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] shadow-lg sm:-right-6 sm:-top-6 sm:h-24 sm:w-24"
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
