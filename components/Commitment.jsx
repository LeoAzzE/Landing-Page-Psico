"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { commitmentItems } from "@/lib/site-config";
import { SectionTitle } from "@/components/SectionTitle";

const ROTATE_SECONDS = 6;
const n = commitmentItems.length;

function getImg(item) {
  return typeof item === "string" ? null : item.image;
}
function getTitle(item) {
  return typeof item === "string" ? item : item.title;
}

export function Commitment() {
  const [index, setIndex] = useState(0);
  const [imageError, setImageError] = useState({});
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
    { i: index,   role: "active" },
    { i: nextIdx, role: "side" },
  ];

  return (
    <section className="bg-slate-50/80 py-14 sm:py-20 md:py-24 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">

        <SectionTitle
          badge="Nossos valores"
          title="Nosso compromisso"
          className="mb-10 sm:mb-12"
        />

        {/* Carrossel com foco central */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 sm:gap-5"
        >
          {/* Seta esquerda */}
          <button
            type="button"
            onClick={prev}
            className="shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] focus:outline-none cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Imagens */}
          <div className="flex flex-1 items-center gap-3 sm:gap-5 overflow-hidden">
            {slots.map(({ i, role }) => {
              const img = getImg(commitmentItems[i]);
              const title = getTitle(commitmentItems[i]);
              const isActive = role === "active";
              return (
                <motion.div
                  key={i}
                  animate={{
                    opacity: isActive ? 1 : 0.4,
                    scale: isActive ? 1 : 0.88,
                    filter: isActive ? "blur(0px)" : "blur(3px)",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onClick={() => !isActive && goTo(i)}
                  className={`relative overflow-hidden rounded-2xl ${
                    isActive
                      ? "flex-[2] shadow-xl cursor-default"
                      : "flex-[1] shadow-sm cursor-pointer"
                  }`}
                  style={{ aspectRatio: "3/4" }}
                >
                  {img && !imageError[i] ? (
                    <img
                      src={img}
                      alt={title}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                      onError={() => setImageError((prev) => ({ ...prev, [i]: true }))}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-slate-100">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                        <Check className="h-8 w-8" />
                      </div>
                    </div>
                  )}

                  {/* Título do item sobreposto na parte superior — só na imagem ativa */}
                  {isActive && (
                    <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-black/75 via-black/30 to-transparent pointer-events-none" />
                  )}
                  {isActive && (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45 }}
                      className="absolute top-0 inset-x-0 px-5 pt-5 sm:px-6 sm:pt-6 pointer-events-none"
                    >
                      <p className="text-base sm:text-lg md:text-xl font-semibold text-white leading-snug drop-shadow-md">
                        {title}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Seta direita */}
          <button
            type="button"
            onClick={next}
            className="shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] focus:outline-none cursor-pointer"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
