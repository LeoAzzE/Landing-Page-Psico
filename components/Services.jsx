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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const iconMapVoce = [Brain, Heart, Users, Video];
const iconMapEmpresas = [Shield, Brain, Heart, MessageCircle, GraduationCap, Award, Scale, Search, Compass, TrendingUp];

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

function SectionHeader({ badge, title, description, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center" : ""}
    >
      <Badge variant="outline" className="mb-4">
        {badge}
      </Badge>
      <h2 className="text-3xl font-bold text-[var(--primary)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-slate-500">
        {description}
      </p>
    </motion.div>
  );
}

export function Services() {
  const whatsappHref = getWhatsAppHref();

  return (
    <section className="relative">
      {/* Seção Para Você */}
      <div id="para-voce" className="scroll-mt-20 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Header da seção */}
            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <SectionHeader
                  badge="Atendimento Individual"
                  title="Para você"
                  description="Cuidado psicológico responsável, ético e baseado na realidade da vida. Oferecemos um espaço seguro para seu desenvolvimento pessoal."
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-8"
                >
                  <Button asChild size="lg" variant="gradient" className="group">
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                      {cta.individual.labelAlt}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-10 grid grid-cols-2 gap-6"
                >
                  <div className="rounded-2xl bg-[var(--primary)]/5 p-4">
                    <p className="text-3xl font-bold text-[var(--primary)]">100%</p>
                    <p className="mt-1 text-sm text-slate-500">Online e seguro</p>
                  </div>
                  <div className="rounded-2xl bg-[var(--accent)]/5 p-4">
                    <p className="text-3xl font-bold text-[var(--accent)]">+12</p>
                    <p className="mt-1 text-sm text-slate-500">Anos de idade atendidos</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Cards de serviços */}
            <div className="lg:col-span-8">
              <div className="grid gap-6 sm:grid-cols-2">
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

      {/* Divisor decorativo */}
      <div className="relative h-24 bg-gradient-to-b from-white to-slate-50">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100L48 91.7C96 83.3 192 66.7 288 58.3C384 50 480 50 576 54.2C672 58.3 768 66.7 864 70.8C960 75 1056 75 1152 70.8C1248 66.7 1344 58.3 1392 54.2L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* Seção Para Empresas */}
      <div id="para-empresas" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionHeader
              badge="Soluções Corporativas"
              title="Para empresas"
              description="Saúde mental não é discurso. É gestão responsável. Desenvolvemos programas personalizados para fortalecer sua organização."
              align="center"
            />
          </div>

          {/* Tabs para organizar os serviços */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center">
                <TabsList className="mb-8">
                  <TabsTrigger className="cursor-pointer" value="all">Todos os serviços</TabsTrigger>
                  <TabsTrigger className="cursor-pointer" value="saude">Saúde Mental</TabsTrigger>
                  <TabsTrigger className="cursor-pointer" value="desenvolvimento">Desenvolvimento</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {servicesParaEmpresas.slice(0, 5).map((service, index) => (
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
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {servicesParaEmpresas.slice(5).map((service, index) => (
                    <ServiceCard
                      key={service.title}
                      title={service.title}
                      description={service.description}
                      icon={iconMapEmpresas[(index + 5) % iconMapEmpresas.length]}
                      index={index}
                      delay={index * 0.05}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Nota e CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="mx-auto max-w-2xl text-sm italic text-slate-500">
              Não prometemos resultados rápidos. O foco é amadurecimento profissional, clareza de papel e responsabilidade nas decisões.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="gradient" className="group">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <Building2 className="h-5 w-5" />
                  {cta.empresas.labelAlt}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
