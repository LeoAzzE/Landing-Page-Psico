"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * Título de seção com badge, linha decorativa e descrição opcional.
 * @param {string} badge - Texto pequeno acima do título (ex: "Nossos valores")
 * @param {string} title - Título principal
 * @param {string} [description] - Parágrafo opcional abaixo
 * @param {"center"|"left"} [align="center"]
 * @param {boolean} [centerOnMobile] - Se true, centraliza em telas pequenas e usa align em lg+
 * @param {string} [className]
 * @param {React.ReactNode} [badgeIcon] - Ícone opcional dentro do badge
 */
export function SectionTitle({
  badge,
  title,
  description,
  align = "center",
  centerOnMobile = false,
  className,
  badgeIcon,
}) {
  const isCenter = align === "center";
  const useResponsiveCenter = centerOnMobile && !isCenter;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        isCenter && "text-center",
        align === "left" && !centerOnMobile && "text-left",
        useResponsiveCenter && "text-center lg:text-left",
        className
      )}
    >
      {/* Badge com detalhe decorativo */}
      <div
        className={cn(
          "flex items-center gap-2",
          isCenter && "justify-center",
          align === "left" && !centerOnMobile && "justify-start",
          useResponsiveCenter && "justify-center lg:justify-start"
        )}
      >
        <span className="h-px w-6 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" />
        <Badge variant="outline" className="text-xs sm:text-sm border-[var(--primary)]/40 text-[var(--primary)]">
          {badgeIcon}
          {badge}
        </Badge>
        <span className="h-px w-6 rounded-full bg-gradient-to-l from-[var(--primary)] to-[var(--accent)]" />
      </div>

      {/* Título */}
      <h2 className="mt-3 sm:mt-4 text-2xl font-bold tracking-tight text-[var(--primary)] sm:text-3xl md:text-4xl">
        {title}
      </h2>

      {/* Linha decorativa sob o título */}
      <div
        className={cn(
          "mt-3 h-1 rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)]",
          (isCenter || useResponsiveCenter) ? "mx-auto w-16 sm:w-20" : "w-16 sm:w-20",
          useResponsiveCenter && "lg:mx-0"
        )}
      />

      {description && (
        <p
          className={cn(
            "mt-3 sm:mt-4 max-w-3xl text-base sm:text-lg text-slate-500",
            (isCenter || useResponsiveCenter) && "mx-auto",
            useResponsiveCenter && "lg:mx-0"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
