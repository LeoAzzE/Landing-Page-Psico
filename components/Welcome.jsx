"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site-config";

export function Welcome() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Coluna esquerda: Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:mx-0">
              {/* Elemento decorativo atrás da imagem */}
              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl bg-[var(--primary)]/10 sm:-bottom-6 sm:-left-6" />
              
              {/* Imagem principal */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/logo/Image mulher.png"
                  alt="Psicóloga em atendimento"
                  className="h-auto w-full object-cover"
                />
              </div>
              
              {/* Elemento decorativo */}
              <div 
                className="absolute -right-3 -top-3 h-16 w-16 bg-[var(--accent-green)] sm:-right-5 sm:-top-5 sm:h-20 sm:w-20"
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              />
            </div>
          </motion.div>

          {/* Coluna direita: Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Título */}
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl md:text-5xl">
              Bem-vindo(a) à{" "}
              <span className="text-[var(--primary)]">Essência</span>{" "}
              <span className="text-[var(--accent-green)]">Mind</span>!
            </h2>
            
            {/* Subtítulo */}
            <p className="mt-3 text-lg font-medium text-[var(--primary)] sm:text-xl">
              Um espaço seguro para você se expressar
            </p>

            {/* Linha decorativa */}
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent-green)] lg:mx-0 lg:w-24" />

            {/* Texto principal */}
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              <p>
                Aqui na <strong className="text-slate-700">{site.name}</strong>, entendemos que cada pessoa 
                carrega uma história única, com desafios, conquistas e questões que merecem 
                atenção cuidadosa. Por isso, nosso trabalho é pautado no <strong className="text-slate-700">respeito 
                à sua individualidade</strong> e no compromisso com um atendimento ético e humanizado.
              </p>
              <p>
                Atuamos tanto no <strong className="text-slate-700">cuidado individual</strong> — com psicoterapia 
                para adolescentes, adultos e casais — quanto no <strong className="text-slate-700">ambiente 
                corporativo</strong>, desenvolvendo programas de saúde mental, treinamentos e 
                consultorias que fortalecem pessoas e organizações.
              </p>
              <p>
                Nosso objetivo é oferecer um espaço onde você possa se sentir acolhido 
                para falar sobre o que importa, sem julgamentos. Se você está buscando 
                clareza, equilíbrio ou simplesmente alguém para ouvir, 
                <strong className="text-[var(--primary)]"> estamos prontos para te acompanhar nessa jornada</strong>.
              </p>
            </div>

            {/* Slogan */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 rounded-xl bg-slate-50 p-5 sm:p-6"
            >
              <p className="text-lg font-medium italic text-[var(--primary)] sm:text-xl">
                "{site.slogan}"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
