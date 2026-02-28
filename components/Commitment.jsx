"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Pause, Play } from "lucide-react";
import { commitmentItems } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";

const ROTATE_SECONDS = 5;

export function Commitment() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % commitmentItems.length);
    }, ROTATE_SECONDS * 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const goTo = (newIndex) => {
    setIndex(newIndex);
  };

  const prev = () => {
    setIndex((i) => (i === 0 ? commitmentItems.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i + 1) % commitmentItems.length);
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Badge variant="outline" className="mb-4">
            Nossos valores
          </Badge>
          <h2 className="text-3xl font-bold text-[var(--primary)] sm:text-4xl">
            Nosso compromisso
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Ética e sigilo profissional, centralidade da psicoterapia como base do cuidado e atuação alinhada à legislação vigente.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--primary)]/5 via-white to-[var(--accent)]/5 shadow-lg"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle, var(--primary) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />

            {/* Content */}
            <div className="relative min-h-[200px] flex items-center justify-center px-16 py-12 sm:min-h-[240px] sm:px-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-4 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] shadow-lg">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <p className="max-w-lg text-xl font-semibold text-[var(--primary)] sm:text-2xl">
                    {commitmentItems[index]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[var(--primary)] shadow-md backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
              aria-label="Compromisso anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[var(--primary)] shadow-md backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
              aria-label="Próximo compromisso"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Indicators and play/pause */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-4">
              <button
                type="button"
                onClick={() => setPaused(!paused)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[var(--primary)] shadow-sm backdrop-blur-sm transition-all hover:bg-white"
                aria-label={paused ? "Reproduzir" : "Pausar"}
              >
                {paused ? (
                  <Play className="h-4 w-4" />
                ) : (
                  <Pause className="h-4 w-4" />
                )}
              </button>
              <div className="flex gap-2">
                {commitmentItems.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    className="group relative h-2 overflow-hidden rounded-full transition-all duration-300 focus:outline-none"
                    style={{
                      width: i === index ? "2rem" : "0.5rem",
                      backgroundColor: i === index ? "var(--primary)" : "var(--border)",
                    }}
                    aria-label={`Compromisso ${i + 1} de ${commitmentItems.length}`}
                    aria-current={i === index ? "true" : undefined}
                  >
                    {i === index && !paused && (
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: ROTATE_SECONDS, ease: "linear" }}
                        className="absolute inset-y-0 left-0 bg-[var(--accent)]"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid de valores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {commitmentItems.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className={`flex items-center gap-3 rounded-xl p-4 transition-all duration-300 ${
                i === index
                  ? "bg-[var(--primary)]/10 shadow-md"
                  : "bg-slate-50 hover:bg-[var(--primary)]/5"
              }`}
            >
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                i === index
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--primary)]/10 text-[var(--primary)]"
              }`}>
                <Check className="h-4 w-4" />
              </div>
              <span className={`text-sm font-medium ${
                i === index ? "text-[var(--primary)]" : "text-slate-600"
              }`}>
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
