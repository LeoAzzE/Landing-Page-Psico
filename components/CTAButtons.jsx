"use client";

import { ArrowRight } from "lucide-react";
import { getWhatsAppHref, cta } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export function CTAButtons({ variant = "default", only }) {
  const href = getWhatsAppHref();
  const isCompact = variant === "compact";
  const showIndividual = only === undefined || only === "individual";
  const showEmpresas = only === undefined || only === "empresas";

  return (
    <div className={`flex flex-wrap gap-3 ${isCompact ? "justify-start" : "justify-center"}`}>
      {showIndividual && (
        <Button asChild variant="gradient" className="group">
          <a href={href} target="_blank" rel="noopener noreferrer">
            {cta.individual.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      )}
      {showEmpresas && (
        <Button asChild variant="outline" className="group">
          <a href={href} target="_blank" rel="noopener noreferrer">
            {cta.empresas.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      )}
    </div>
  );
}
