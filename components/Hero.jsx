"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Shield, Heart, Brain, CheckCircle2 } from "lucide-react";
import { site, getWhatsAppHref } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

const credentials = [
  { icon: Shield, text: "Sigilo garantido" },
  { icon: Heart, text: "Atendimento humanizado" },
  { icon: Brain, text: "Base científica" },
];

const stats = [
  { value: "12+", label: "A partir de 12 anos" },
  { value: "100%", label: "Online e seguro" },
  { value: "CRP", label: "Registro ativo" },
];

export function Hero() {
  const whatsappHref = getWhatsAppHref();

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-64px)] overflow-hidden sm:min-h-[calc(100vh-80px)]"
    >
      {/* Background com gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50/30" />
      
      {/* Elementos decorativos sutis */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-[var(--primary)]/[0.03] blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/[0.03] blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Coluna esquerda: Conteúdo */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* Chamada principal emocional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--primary)]">
                <Heart className="h-4 w-4" />
                Psicologia Clínica e Organizacional
              </span>
            </motion.div>

            {/* Título principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
            >
              Seu espaço seguro para{" "}
              <span className="text-[var(--primary)]">cuidar da mente</span>{" "}
              e transformar relações
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Psicoterapia online com profissionais registrados no CRP. 
              Atendimento ético, sigiloso e comprometido com sua história e realidade.
            </motion.p>

            {/* Credenciais */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start"
            >
              {credentials.map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-slate-600">
                  <item.icon className="h-4 w-4 text-[var(--accent)]" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
            >
              <Button asChild size="lg" variant="gradient" className="group text-sm sm:text-base">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                  Agendar primeira sessão
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-sm sm:text-base">
                <a href="#para-voce">
                  Conhecer serviços
                </a>
              </Button>
            </motion.div>

            {/* Info de horário */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 lg:justify-start"
            >
              <Clock className="h-4 w-4" />
              <span>Atendimento online · Segunda a sexta, 8h–18h</span>
            </motion.div>
          </div>

          {/* Coluna direita: Card visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Card principal */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] p-8 text-white shadow-2xl sm:p-10">
                {/* Padrão decorativo */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }} />
                
                {/* Conteúdo do card */}
                <div className="relative">
                  {/* Ícone */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <Brain className="h-8 w-8" />
                  </div>
                  
                  {/* Texto */}
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Cuide da sua saúde mental
                  </h2>
                  <p className="mt-3 text-white/80">
                    Um espaço de escuta, acolhimento e transformação. 
                    Psicoterapia com responsabilidade e ética profissional.
                  </p>

                  {/* Lista de benefícios */}
                  <ul className="mt-6 space-y-3">
                    {["Primeira sessão de acolhimento", "Ambiente 100% online e seguro", "Profissionais com CRP ativo"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                        <CheckCircle2 className="h-5 w-5 text-[var(--accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
                    {stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-xs text-white/70">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


              {/* Elemento decorativo */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute -left-4 -top-4 h-20 w-20 rounded-2xl bg-[var(--accent)] shadow-lg sm:-left-6 sm:-top-6 sm:h-24 sm:w-24"
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave separator suave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 75C120 70 240 60 360 55C480 50 600 50 720 52.5C840 55 960 60 1080 62.5C1200 65 1320 65 1380 65L1440 65V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
