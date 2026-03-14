"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Building2,
  Brain,
  Shield,
  Briefcase,
  MessageCircle,
  GraduationCap,
  Target,
  Sparkles,
  ArrowRight,
  Video,
  UserCheck,
  Scale,
  Presentation,
  Award,
  Search,
  Compass,
  TrendingUp
} from "lucide-react";
import { servicesParaVoce, servicesParaEmpresas, getWhatsAppHref, cta } from "@/lib/site-config";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const iconMapVoce = [Brain, Heart, Users, Video, Briefcase];
const iconMapEmpresas = [Shield, Brain, Heart, MessageCircle, GraduationCap, Award, Scale, Search, Compass, TrendingUp, Users];

function ServiceCard({ title, description, icon: Icon, index, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <Card className="group h-full card-hover cursor-default overflow-hidden">
        <CardHeader className="pb-3">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 transition-all duration-300 group-hover:scale-110 group-hover:from-[var(--primary)]/20 group-hover:to-[var(--accent)]/20">
            <Icon className="h-6 w-6 text-[var(--primary)] transition-colors group-hover:text-[var(--accent)]" />
          </div>
          <CardTitle className="text-lg transition-colors group-hover:text-[var(--accent)]">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-500 group-hover:w-full" />
      </Card>
    </motion.div>
  );
}

export function Services() {
  const whatsappHref = getWhatsAppHref();

  return (
    <section className="relative">
      {/* Seção Para Você */}
      <div id="para-voce" className="scroll-mt-20 bg-white py-12 sm:py-16 md:py-20 overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16 lg:items-stretch">
            {/* Header da seção */}
            <div className="lg:col-span-4">
              <div className="h-full flex flex-col">
                <SectionTitle
                  align="left"
                  centerOnMobile
                  badge="Atendimento Individual"
                  title="Para Você"
                  description="Cuidado psicológico atento à realidade da vida. Oferecemos um espaço de escuta e reflexão para quem deseja compreender melhor suas emoções, suas relações e os desafios do cotidiano pessoal e profissional."
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-6 sm:mt-8 flex flex-col gap-3"
                >
                  <Button asChild size="default" variant="gradient" className="group text-sm sm:text-base w-full sm:w-auto" aria-label="Agendar psicoterapia. Sessões individuais de acompanhamento psicológico.">
                    <a href={cta.individual.platformUrl || whatsappHref} target="_blank" rel="noopener noreferrer">
                      Agendar psicoterapia
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <p className="text-xs text-slate-500">Sessões individuais de acompanhamento psicológico.</p>
                  <Button asChild size="default" variant="outline" className="text-sm sm:text-base w-full sm:w-auto">
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                      Agendar outros serviços
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Cards de serviços */}
            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                {servicesParaVoce.map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    title={service.title}
                    description={service.description}
                    icon={iconMapVoce[index % iconMapVoce.length]}
                    index={index}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Para Empresas */}
      <div id="para-empresas" className="scroll-mt-20 bg-slate-50 py-12 sm:py-16 md:py-20 overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          {/* Header centralizado */}
          <div className="text-center flex flex-col items-center">
            <SectionTitle
              align="center"
              centerOnMobile
              badge="Soluções Corporativas"
              title="Para Empresas"
              description="Saúde mental no trabalho não é apenas discurso. É parte da gestão responsável das organizações. A Essência Mind apoia empresas na construção de ambientes de trabalho mais saudáveis, no desenvolvimento de lideranças e na gestão de fatores psicossociais relacionados ao trabalho."
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 sm:mt-8"
            >
              <Button asChild size="default" variant="gradient" className="group text-sm sm:text-base">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <Building2 className="h-4 w-4" />
                  Falar sobre soluções para empresas
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Tabs e Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 sm:mt-14"
          >
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-6 sm:mb-8">
                <TabsList>
                  <TabsTrigger className="cursor-pointer text-xs sm:text-sm" value="all">Todos</TabsTrigger>
                  <TabsTrigger className="cursor-pointer text-xs sm:text-sm" value="saude">Saúde Mental</TabsTrigger>
                  <TabsTrigger className="cursor-pointer text-xs sm:text-sm" value="desenvolvimento">Desenvolvimento</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all">
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {servicesParaEmpresas.map((service, index) => (
                    <ServiceCard
                      key={service.title}
                      title={service.title}
                      description={service.description}
                      icon={iconMapEmpresas[index % iconMapEmpresas.length]}
                      index={index}
                      delay={index * 0.05}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="saude">
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {servicesParaEmpresas.slice(0, 6).map((service, index) => (
                    <ServiceCard
                      key={service.title}
                      title={service.title}
                      description={service.description}
                      icon={iconMapEmpresas[index % iconMapEmpresas.length]}
                      index={index}
                      delay={index * 0.05}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="desenvolvimento">
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {servicesParaEmpresas.slice(6).map((service, index) => (
                    <ServiceCard
                      key={service.title}
                      title={service.title}
                      description={service.description}
                      icon={iconMapEmpresas[(index + 6) % iconMapEmpresas.length]}
                      index={index}
                      delay={index * 0.05}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
