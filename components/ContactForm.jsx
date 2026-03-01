"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// URL da API de backend para envio de emails (configurar quando o backend estiver pronto)
const API_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_API_URL || "/api/contact";

const FIELD_LIMITS = {
  name: 100,
  email: 254,
  phone: 20,
  message: 1500,
};

const MAX_SUBMISSIONS_PER_HOUR = 3;
const RATE_LIMIT_KEY = "contact_form_submissions";

function checkRateLimit() {
  if (typeof window === "undefined") return { allowed: true, remaining: MAX_SUBMISSIONS_PER_HOUR };
  
  const now = Date.now();
  const oneHourAgo = now - 60 * 60 * 1000;
  
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const submissions = stored ? JSON.parse(stored) : [];
    const recentSubmissions = submissions.filter((time) => time > oneHourAgo);
    
    return {
      allowed: recentSubmissions.length < MAX_SUBMISSIONS_PER_HOUR,
      remaining: MAX_SUBMISSIONS_PER_HOUR - recentSubmissions.length,
    };
  } catch {
    return { allowed: true, remaining: MAX_SUBMISSIONS_PER_HOUR };
  }
}

function recordSubmission() {
  if (typeof window === "undefined") return;
  
  const now = Date.now();
  const oneHourAgo = now - 60 * 60 * 1000;
  
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const submissions = stored ? JSON.parse(stored) : [];
    const recentSubmissions = submissions.filter((time) => time > oneHourAgo);
    recentSubmissions.push(now);
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
  } catch {
    // Ignore localStorage errors
  }
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [honeypot, setHoneypot] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot check - se preenchido, é bot
    if (honeypot) {
      setSubmitStatus("success"); // Finge que enviou
      return;
    }

    // Rate limit check
    const { allowed } = checkRateLimit();
    if (!allowed) {
      setSubmitStatus("rate_limited");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          title: formData.title,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      recordSubmission();
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        title: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 transition-all duration-200 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20";

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-5 sm:p-6">
        <h3 className="text-lg font-bold text-slate-800 sm:text-xl">
          Envie uma mensagem
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Preencha o formulário e retornaremos em breve.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          {/* Honeypot - campo invisível para pegar bots */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="absolute -left-[9999px] opacity-0 pointer-events-none"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Nome */}
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
              Nome completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              maxLength={FIELD_LIMITS.name}
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              className={inputClasses}
            />
          </div>

          {/* Email e Telefone */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={FIELD_LIMITS.email}
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                maxLength={FIELD_LIMITS.phone}
                value={formData.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                className={inputClasses}
              />
            </div>
          </div>

          {/* Assunto */}
          <div>
            <label htmlFor="title" className="mb-1.5 block text-sm font-medium text-slate-700">
              Assunto *
            </label>
            <select
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className={`${inputClasses} cursor-pointer`}
            >
              <option value="">Selecione um assunto</option>
              <option value="Psicoterapia Individual">Psicoterapia Individual</option>
              <option value="Psicoterapia para Adolescentes">Psicoterapia para Adolescentes</option>
              <option value="Psicoterapia de Casal">Psicoterapia de Casal</option>
              <option value="Serviços para Empresas">Serviços para Empresas</option>
              <option value="Orientação de Carreira">Orientação de Carreira</option>
              <option value="Dúvidas Gerais">Dúvidas Gerais</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          {/* Mensagem */}
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
              Mensagem *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              maxLength={FIELD_LIMITS.message}
              value={formData.message}
              onChange={handleChange}
              placeholder="Como podemos ajudar você?"
              className={`${inputClasses} resize-none`}
            />
            <p className="mt-1 text-right text-xs text-slate-400">
              {formData.message.length}/{FIELD_LIMITS.message} caracteres
            </p>
          </div>

          {/* Status de envio */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-700"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <span>Mensagem enviada com sucesso! Retornaremos em breve.</span>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700"
            >
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.</span>
            </motion.div>
          )}

          {submitStatus === "rate_limited" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 rounded-lg bg-amber-50 p-3 text-sm text-amber-700"
            >
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>Você atingiu o limite de envios. Aguarde um pouco ou entre em contato pelo WhatsApp.</span>
            </motion.div>
          )}

          {/* Botão de envio */}
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="gradient"
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Enviar mensagem
              </>
            )}
          </Button>

          <p className="text-center text-xs text-slate-400">
            Ao enviar, você concorda com nossa{" "}
            <a href="/politica-de-privacidade" className="text-[var(--primary)] hover:underline">
              Política de Privacidade
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
