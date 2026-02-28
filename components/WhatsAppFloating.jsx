"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppHref } from "@/lib/site-config";

export function WhatsAppFloating() {
  const href = getWhatsAppHref();
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasScrolled) {
        setShowTooltip(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [hasScrolled]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="absolute bottom-full right-0 mb-3 w-64"
          >
            <div className="relative rounded-2xl bg-white p-4 shadow-xl">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute cursor-pointer -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600"
              >
                <X className="h-3 w-3" />
              </button>
              <p className="text-sm font-medium text-slate-700">
                Precisa de ajuda?
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Clique aqui para falar conosco pelo WhatsApp!
              </p>
              <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 bg-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg transition-shadow hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-500/30"
        aria-label="Abrir WhatsApp para atendimento"
        onClick={() => setShowTooltip(false)}
      >
        <MessageCircle className="h-7 w-7" />
        
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      </motion.a>
    </div>
  );
}
