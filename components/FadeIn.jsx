"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Wrapper que aplica fade-in + slide-up quando o elemento entra no viewport.
 * Usa IntersectionObserver para disparar a animação uma única vez.
 *
 * Props:
 *   delay     — atraso em ms antes de iniciar a transição (padrão: 0)
 *   className — classes adicionais repassadas ao elemento raiz
 *   as        — tag HTML a renderizar (padrão: "div")
 */
export function FadeIn({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
