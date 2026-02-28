/**
 * Configuração e conteúdo do site Essência Mind.
 * Preencha os placeholders quando tiver as informações.
 */

export const site = {
  name: "Essência Mind",
  //tagline: "Psicologia Clínica e Organizacional",
  slogan: "Responsabilidade nas relações entre pessoas, vida e trabalho.",
  logo: {
    main: "/logo/logo2-Photoroom.png",
    home: "/logo/psico.jpeg",
  },
};

export const contact = {
  whatsapp: "inserir número oficial", // ex: 5511999999999 (apenas dígitos, com DDD)
  whatsappDigits: "", // preencha só os números para o link, ex: 5511999999999
  email: "inserir e-mail institucional",
  hours: "Segunda a sexta, das 8h às 18h",
  cnpj: "inserir CNPJ",
};

export function getWhatsAppHref() {
  const num = contact.whatsappDigits || (contact.whatsapp && contact.whatsapp.replace(/\D/g, ""));
  return num ? `https://wa.me/55${num}` : "#";
}

export const cta = {
  individual: {
    label: "Agendar consulta com psicóloga",
    labelAlt: "Quero agendar minha consulta",
    type: "whatsapp",
  },
  empresas: {
    label: "Agendar reunião para empresas",
    labelAlt: "Quero conversar sobre saúde mental na empresa",
    type: "whatsapp",
  },
};

export const team = [
  {
    name: "Caroline Melo",
    role: "Psicóloga",
    register: "CRP: inserir número",
    bio: "Inserir mini biografia humanizada.",
    formation: "Inserir formação acadêmica.",
    image: "/images/team/caroline.jpg", // colocar foto profissional na pasta public/images/team/
  },
  {
    name: "Estela Azevedo",
    role: "Psicóloga e Psicanalista",
    register: "CRP: inserir número",
    bio: "Inserir mini biografia humanizada.",
    formation: "Inserir formação acadêmica.",
    image: "/images/team/estela.jpg",
  },
  {
    name: "Mário Melo",
    role: "Administrador e consultor em desenvolvimento humano e organizacional",
    register: "CRA: inserir número",
    bio: "Inserir mini biografia humanizada.",
    formation: "Inserir formação acadêmica.",
    image: "/images/team/mario.jpg",
  },
];

export const commitmentItems = [
  "Ética e sigilo profissional",
  "Centralidade da psicoterapia como base do cuidado",
  "Atuação alinhada à legislação vigente",
  "Linguagem clara e acessível",
  "Intervenções aplicáveis à realidade",
  "Responsabilidade técnica",
];

export const faqItems = [
  {
    question: "Como funciona o agendamento?",
    answer:
      "Entre em contato pelo WhatsApp ou e-mail. Nossa equipe retorna em até 24 horas úteis para agendar sua consulta ou reunião.",
  },
  {
    question: "Os atendimentos são presenciais ou online?",
    answer:
      "Oferecemos atendimento online em ambiente seguro, com sigilo e qualidade técnica. A modalidade pode ser combinada conforme sua necessidade.",
  },
  {
    question: "A Essência Mind atende empresas?",
    answer:
      "Sim. Oferecemos programas de saúde mental no trabalho, treinamentos para lideranças e CIPA, consultoria em prevenção de assédio, orientação de carreira e outras frentes organizacionais.",
  },
  {
    question: "Qual a faixa etária atendida no serviço clínico?",
    answer:
      "Atendemos adolescentes a partir de 12 anos, adultos e casais, com psicoterapia individual e de casal.",
  },
  {
    question: "Como é garantido o sigilo?",
    answer:
      "Seguimos rigorosamente o Código de Ética da Psicologia. As sessões são confidenciais e as informações só podem ser compartilhadas com seu consentimento ou nos casos previstos em lei.",
  },
];

export const servicesParaVoce = [
  {
    title: "Psicoterapia para adolescentes (a partir de 12 anos)",
    description:
      "Acolhimento e acompanhamento voltados às questões da adolescência: identidade, ansiedade, relações familiares, escola, autoestima e tomada de decisões.",
  },
  {
    title: "Psicoterapia individual para adultos",
    description:
      "Atendimento clínico para quem deseja compreender emoções, lidar com ansiedade, depressão, conflitos internos, sobrecarga, relacionamentos e desafios profissionais.",
  },
  {
    title: "Psicoterapia para casais",
    description:
      "Espaço para diálogo, reconstrução de vínculo, alinhamento de expectativas e fortalecimento da relação.",
  },
  {
    title: "Atendimento online",
    description:
      "Sessões em ambiente seguro, com sigilo e qualidade técnica, permitindo acesso ao cuidado psicológico independentemente da localização.",
  },
];

export const servicesParaEmpresas = [
  {
    title: "Riscos psicossociais no trabalho",
    description:
      "Identificação, análise e plano de ação alinhado à realidade da empresa e às exigências legais.",
  },
  {
    title: "Programas de saúde mental no trabalho",
    description:
      "Ações contínuas de prevenção de adoecimento e fortalecimento do ambiente organizacional.",
  },
  {
    title: "Psicoterapia para colaboradores",
    description:
      "Atendimento individual e em grupo por psicólogas, com sigilo e responsabilidade técnica.",
  },
  {
    title: "Rodas de conversa e palestras",
    description:
      "Espaços sobre saúde mental, relações de trabalho, prevenção de violência e fortalecimento do ambiente.",
  },
  {
    title: "Treinamentos para lideranças",
    description:
      "Formação em gestão de pessoas, comunicação, riscos psicossociais, prevenção de conflitos e de assédio.",
  },
  {
    title: "Treinamentos para CIPA",
    description:
      "Capacitação para prevenção e encaminhamento de casos de assédio moral e sexual, conforme legislação.",
  },
  {
    title: "Consultoria em prevenção de assédio",
    description:
      "Estruturação de políticas, fluxos e ações educativas alinhadas à legislação.",
  },
  {
    title: "Atração e seleção de talentos",
    description:
      "Processos com foco em alinhamento técnico e comportamental.",
  },
  {
    title: "Orientação profissional e de carreira",
    description:
      "Apoio a decisões profissionais com base em autoconhecimento, competências e planejamento realista.",
  },
  {
    title: "Coaching e mentorias",
    description:
      "Desenvolvimento voltado a objetivos profissionais, especialmente em contextos organizacionais e de liderança.",
  },
];
