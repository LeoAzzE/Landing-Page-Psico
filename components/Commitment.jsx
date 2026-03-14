"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { commitmentSection, commitmentItems } from "@/lib/site-config";
import { SectionTitle } from "@/components/SectionTitle";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ROTATE_SECONDS = 6;
const n = commitmentItems.length;

export function Commitment() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % n);
    }, ROTATE_SECONDS * 1000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (newIndex) => {
    setIndex(newIndex);
    resetInterval();
  };
  const prev = () => goTo((index - 1 + n) % n);
  const next = () => goTo((index + 1) % n);

  const prevIdx = (index - 1 + n) % n;
  const nextIdx = (index + 1) % n;

  const slots = [
    { i: prevIdx, role: "side" },
    { i: index, role: "active" },
    { i: nextIdx, role: "side" },
  ];

  const { badge, title, intro, mission, vision, afterCards } = commitmentSection;

  return (
    <section className="bg-slate-50/80 py-14 sm:py-20 md:py-24 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <SectionTitle
          badge={badge}
          title={title}
          description={intro[0]}
          className="mb-6 sm:mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-2xl text-center space-y-4 mb-10 sm:mb-14"
        >
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            {intro[1]}
          </p>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            {intro[2]}
          </p>
        </motion.div>

        {/* Missão e Visão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid gap-8 sm:gap-10 sm:grid-cols-2 max-w-4xl mx-auto mb-14 sm:mb-16"
        >
          <div className="rounded-xl bg-white p-5 sm:p-6 shadow-sm border border-slate-100">
            <h3 className="text-lg font-semibold text-[var(--primary)] mb-3">
              {mission.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {mission.text}
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 sm:p-6 shadow-sm border border-slate-100">
            <h3 className="text-lg font-semibold text-[var(--primary)] mb-3">
              {vision.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {vision.text}
            </p>
          </div>
        </motion.div>

        {afterCards && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mx-auto max-w-2xl text-center text-sm sm:text-base text-slate-500 leading-relaxed mb-14 sm:mb-16"
          >
            {afterCards}
          </motion.p>
        )}

        {/* Valores e compromissos — carrossel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-center text-lg sm:text-xl font-semibold text-slate-700 mb-6 sm:mb-8">
            Valores e compromissos da Essência Mind
          </h3>

          <div className="flex items-stretch gap-2 sm:gap-5">
            <button
              type="button"
              onClick={prev}
              className="shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] focus:outline-none cursor-pointer self-center"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex flex-1 items-stretch gap-2 sm:gap-5 overflow-hidden min-h-[320px] sm:min-h-[380px] md:min-h-[420px]">
              {slots.map(({ i, role }) => {
                const item = commitmentItems[i];
                const isActive = role === "active";
                return (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: isActive ? 1 : 0.5,
                      scale: isActive ? 1 : 0.92,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onClick={() => !isActive && goTo(i)}
                    className={`relative overflow-hidden rounded-2xl ${
                      isActive
                        ? "flex-[4] sm:flex-[2] cursor-default"
                        : "flex-[1] cursor-pointer"
                    }`}
                  >
                    <Card
                      className={`h-full overflow-hidden transition-all flex flex-col ${
                        isActive
                          ? "shadow-xl border-[var(--primary)]/20 bg-white"
                          : "shadow-sm border-slate-100 bg-slate-50/50"
                      }`}
                    >
                      {item.image && (
                        <div className="relative w-full aspect-[3/4] shrink-0 overflow-hidden bg-slate-100">
                          <img
                            src={item.image}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <CardHeader className="pb-2 shrink-0">
                        <div className="h-1 w-10 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mb-2" />
                        <h4 className="text-sm sm:text-base font-semibold text-[var(--primary)] leading-tight line-clamp-2">
                          {item.title}
                        </h4>
                      </CardHeader>
                      <CardContent className="pt-0 shrink-0">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-4 sm:line-clamp-5">
                          {item.description}
                        </p>
                      </CardContent>
                      <div className="flex-1 min-h-0 shrink" aria-hidden />
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={next}
              className="shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] focus:outline-none cursor-pointer self-center"
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
