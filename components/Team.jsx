"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Award, GraduationCap } from "lucide-react";
import { team } from "@/lib/site-config";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23e2e8f0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='14'%3EFoto%3C/text%3E%3C/svg%3E";

function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Card className="group h-full overflow-hidden card-hover">
        {/* Imagem com overlay */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={member.image.startsWith("http") || member.image.startsWith("/") ? member.image : placeholderImage}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = placeholderImage;
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/90 via-[var(--primary)]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          {/* Info que aparece no hover */}
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <p className="text-sm text-white/90 line-clamp-3">
              {member.bio}
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
              <GraduationCap className="h-4 w-4" />
              <span className="line-clamp-1">{member.formation}</span>
            </div>
          </div>

          {/* Badge de registro */}
          <div className="absolute right-3 top-3">
            <Badge variant="default" className="bg-white/90 text-[var(--primary)] backdrop-blur-sm">
              <Award className="mr-1 h-3 w-3" />
              {member.register}
            </Badge>
          </div>
        </div>

        {/* Conteúdo do card */}
        <CardContent className="p-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[var(--primary)] transition-colors group-hover:text-[var(--accent)]">
              {member.name}
            </h3>
            <p className="text-sm font-medium text-slate-600">
              {member.role}
            </p>
          </div>

          {/* Linha decorativa */}
          <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-300 group-hover:w-full" />
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Team() {
  return (
    <section id="equipe" className="scroll-mt-20 bg-white py-20 sm:py-28">
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
            Conheça os profissionais
          </Badge>
          <h2 className="text-3xl font-bold text-[var(--primary)] sm:text-4xl">
            Nossa equipe
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-500">
            A equipe reúne formação técnica, experiência prática e compromisso ético. A psicoterapia é conduzida exclusivamente por profissionais habilitados e registrados no Conselho Regional de Psicologia.
          </p>
        </motion.div>

        {/* Grid de membros */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Nota adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5 p-8">
            <p className="text-slate-600">
              As frentes organizacionais contam com suporte técnico da Administração, garantindo uma abordagem multidisciplinar e completa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
