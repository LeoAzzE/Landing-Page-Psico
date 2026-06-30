/**
 * Configuração e conteúdo do site Essência Mind.
 * Preencha os placeholders quando tiver as informações.
 */

/** URL base do site. Sobrescreva com NEXT_PUBLIC_SITE_URL na hospedagem. */
export const siteUrl =
  typeof process !== "undefined" && process.env?.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
    : "https://www.essenciamind.com.br";

/** Google Analytics 4 — ID da métrica (G-…). Sobrescreva com NEXT_PUBLIC_GA_MEASUREMENT_ID. */
export const gaMeasurementId =
  typeof process !== "undefined" && process.env?.NEXT_PUBLIC_GA_MEASUREMENT_ID
    ? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    : "G-KW0JF3QMEM";

export const site = {
  name: "Essência Mind",
  siteNameSubjectEmail: "Essencia Mind",
  //tagline: "Psicologia Clínica e Organizacional",
  slogan: "Responsabilidade nas relações entre pessoas, vida e trabalho.",
  logo: {
    main: "/logo/logo.png",
    home: "/logo/logo.png",
    favicon: "/logo/favicon.png",
  },
};

export const contact = {
  whatsapp: "(21) 97148-6007", // ex: 5511999999999 (apenas dígitos, com DDD)
  whatsappDigits: "21971486007", // preencha só os números para o link, ex: 5511999999999
  email: "essencia.mind@yahoo.com",
  hours: "Segunda a sexta-feira, das 8h às 18h",
  cnpj: "60.928.508/0001-86",
};

/** Textos da seção Entre em contato */
export const contactSection = {
  badge: "Entre em contato",
  title: "Vamos Conversar?",
  intro: [
    "Estamos disponíveis para ouvir sua demanda e orientar sobre nossos serviços.",
    "Você pode entrar em contato para falar sobre psicoterapia, orientação de carreira, mentoria profissional ou soluções para empresas.",
    "Nossa equipe retornará o mais breve possível.",
    "Para psicoterapia individual, utilize os canais abaixo para falar conosco pelo WhatsApp ou e-mail.",
  ],
  whatsappCard: {
    title: "Prefere WhatsApp?",
    subtitle: "Clique para iniciar uma conversa direta com nossa equipe.",
    listItems: [
      "esclarecer dúvidas sobre os serviços",
      "obter informações sobre atendimentos",
      "falar sobre projetos para empresas",
    ],
  },
  platformCard: {
    title: "Deseja agendar psicoterapia?",
    subtitle:
      "Se você está pensando em iniciar a psicoterapia, fale conosco pelo WhatsApp ou envie um e-mail. Teremos satisfação em acolher seu contato, esclarecer suas dúvidas e orientar você sobre o profissional e o atendimento mais adequado às suas necessidades.",
    whatsappButtonLabel: "Falar pelo WhatsApp",
    emailButtonLabel: "Enviar e-mail",
  },
  emailCard: {
    title: "E-mail institucional",
    subtitle: "Se preferir, envie sua mensagem por e-mail.",
    listItems: [
      "solicitações institucionais",
      "parcerias",
      "contato de empresas",
      "envio de informações mais detalhadas",
    ],
  },
  hoursNote: "Mensagens enviadas fora desse período serão respondidas no próximo dia útil.",
  firstContactBox: {
    title: "O que esperar do primeiro contato?",
    items: [
      "Escuta inicial para compreender sua demanda",
      "Orientação sobre os serviços da Essência Mind",
      "Explicação sobre como funciona o atendimento",
      "Esclarecimento de dúvidas sobre horários e valores",
      "Encaminhamento para agendamento quando necessário",
    ],
    note: "O primeiro contato não gera compromisso de continuidade. A decisão de iniciar o acompanhamento é sempre da pessoa atendida.",
  },
};

export function getWhatsAppHref() {
  const num = contact.whatsappDigits || (contact.whatsapp && contact.whatsapp.replace(/\D/g, ""));
  return num ? `https://wa.me/55${num}` : "#";
}

/** Abre o cliente de e-mail com o endereço institucional no campo "Para". */
export function getMailtoHref(options = {}) {
  const email = contact.email?.trim();
  if (!email || email.includes("inserir")) return "#";

  const subject = options.subject ?? `Contato - ${site.siteNameSubjectEmail}`;
  const params = [];

  if (subject) {
    params.push(`subject=${encodeURIComponent(subject)}`);
  }
  if (options.body) {
    params.push(`body=${encodeURIComponent(options.body)}`);
  }

  const qs = params.join("&");
  return qs ? `mailto:${email}?${qs}` : `mailto:${email}`;
}

export const cta = {
  individual: {
    label: "Agendar consulta individual",
    labelAlt: "Quero agendar minha consulta",
    type: "whatsapp",
    /** URL da plataforma de agendamento (se vazio, usa WhatsApp). */
    platformUrl: "",
  },
  empresas: {
    label: "Agendar reunião para empresas",
    labelAlt: "Quero conversar sobre saúde mental na empresa",
    type: "whatsapp",
  },
};

export const team = [
  {
    name: "Caroline Azevedo de Melo Marques",
    role: "Psicóloga Clínica",
    register: "CRP 07/38069",
    bio: "Psicóloga clínica, Caroline atua com escuta sensível e atenção às diferentes fases da vida. Realiza atendimento psicológico online para adolescentes a partir de 12 anos, adultos e idosos, oferecendo um espaço seguro de acolhimento, reflexão e desenvolvimento emocional. Também atua em processos de recrutamento e seleção, desenvolvimento de carreira e apoio a decisões profissionais, sempre considerando que escolhas relacionadas ao trabalho envolvem identidade, propósito e contexto de vida. Na Essência Mind, Caroline contribui para aproximar cuidado psicológico e realidade profissional, ajudando pessoas a compreender seus desafios e a construir caminhos mais conscientes para viver e trabalhar.",
    image: "/images/team/carol.jpeg",
  },
  {
    name: "Estela Ramos Azevedo de Melo",
    role: "Psicóloga e Psicanalista",
    register: "CRP 05/49251",
    bio: "Psicóloga e psicanalista com atuação clínica e organizacional, Estela realiza atendimento psicológico online para jovens a partir de 12 anos, adolescentes, adultos e idosos. Sua prática é marcada pela escuta atenta, ética e comprometida com a dignidade humana. Atua com sensibilidade diante de questões relacionadas à violência, assédio, preconceito e conflitos que atravessam as relações pessoais e profissionais. Ao longo de sua trajetória, dedica-se especialmente ao acolhimento de mulheres que enfrentam situações de abuso emocional, discriminação ou silenciamento, apoiando processos de reconstrução de autonomia, autoestima e segurança. Cada atendimento é conduzido com respeito à história e ao tempo de cada pessoa.",
    image: "/images/team/estela.jpeg",
  },
  {
    name: "Mário André Bezerra de Melo",
    role: "Administrador e Consultor em Desenvolvimento Humano e Organizacional",
    register: "CRA 2054536-3",
    bio: "Administrador com especialização em gestão de pessoas e uma trajetória profissional que começou no nível operacional e alcançou posições de liderança executiva, Mário construiu sua carreira vivenciando diferentes níveis da organização. Conhece de perto a pressão, os conflitos, as negociações e os desafios que fazem parte da vida corporativa. Hoje atua como consultor e mentor em desenvolvimento humano e organizacional, com foco em liderança, carreira, saúde mental no trabalho e prevenção de assédio. Desenvolve treinamentos, palestras e programas voltados à construção de ambientes de trabalho mais responsáveis, éticos e saudáveis. Na Essência Mind, integra experiência prática, visão estratégica e compromisso social para apoiar empresas e pessoas na construção de relações profissionais mais conscientes e sustentáveis.",
    image: "/images/team/mario.jpeg",
  },
];

/** Seção Nossos valores: textos introdutórios, missão, visão e itens do carrossel (title + description). */
export const commitmentSection = {
  badge: "Nosso Compromisso",
  title: "Nossos Valores",
  intro: [
    "Na Essência Mind, acreditamos que saúde mental, relações humanas e trabalho não podem ser tratados de forma superficial.",
    "Nosso compromisso é atuar com responsabilidade, escuta qualificada e respeito à história de cada pessoa e à realidade de cada organização.",
    "Trabalhamos para construir espaços de reflexão, cuidado e desenvolvimento que contribuam para relações mais conscientes, responsáveis e humanas.",
  ],
  mission: {
    title: "Missão",
    text: "Promover cuidado psicológico responsável e apoiar o desenvolvimento humano nas relações pessoais e profissionais, contribuindo para ambientes de vida e de trabalho mais saudáveis, éticos e conscientes.",
  },
  vision: {
    title: "Visão",
    text: "Ser reconhecida como uma referência em atuação integrada entre psicologia clínica e desenvolvimento humano nas organizações, contribuindo para que pessoas e empresas construam relações de trabalho mais responsáveis, sustentáveis e humanas.",
  },
  afterCards:
    "Não prometemos resultados rápidos. O foco é o amadurecimento profissional, a clareza de papéis e a responsabilidade nas decisões dentro das organizações.",
};

/** Cada item do carrossel: title, description e image (opcional). 5 itens conforme pedido do cliente. */
export const commitmentItems = [
  {
    title: "Responsabilidade ética",
    description: "Atuar com respeito às normas profissionais, ao sigilo e à dignidade de cada pessoa.",
    image: "/images/commitment/1.png",
  },
  {
    title: "Escuta qualificada",
    description: "Valorizar a escuta atenta e o tempo de cada processo, reconhecendo que cada história é única.",
    image: "/images/commitment/2.png",
  },
  {
    title: "Respeito à realidade das pessoas",
    description: "Considerar o contexto de vida, trabalho e relações de cada indivíduo, evitando respostas simplistas para questões complexas.",
    image: "/images/commitment/3.png",
  },
  {
    title: "Relações de trabalho mais saudáveis",
    description: "Contribuir para ambientes pessoais e profissionais baseados em respeito, diálogo e responsabilidade.",
    image: "/images/commitment/5.png",
  },
  {
    title: "Integração entre vida e trabalho",
    description: "Reconhecer que saúde mental, carreira e relações profissionais fazem parte da mesma experiência humana.",
    image: "/images/commitment/6.png",
  },
];

export const faqItems = [
  {
    question: "Como funciona o agendamento?",
    answer:
      "O agendamento pode ser realizado por meio de contato via WhatsApp ou e-mail.\n\nApós o seu contato, nossa equipe retornará para entender sua necessidade, esclarecer suas dúvidas e apresentar as opções de horários e profissionais mais adequadas ao seu momento. \n\nA primeira sessão é um espaço de acolhimento e escuta qualificada. Nela, você poderá falar sobre suas questões, conhecer o profissional e compreender como o processo terapêutico poderá ser desenvolvido, sempre respeitando seu tempo, sua história e seus objetivos.",
  },
  {
    question: "Os atendimentos são presenciais ou online?",
    answer:
      "Os atendimentos são realizados online, em ambiente seguro e confidencial. Essa modalidade permite que pessoas de diferentes cidades ou regiões tenham acesso ao acompanhamento psicológico, mantendo a privacidade, o sigilo e a qualidade técnica do atendimento.",
  },
  {
    question: "A Essência Mind atende empresas?",
    answer:
      "Sim.\n\nA Essência Mind também atua no apoio a organizações que desejam desenvolver ambientes de trabalho mais saudáveis e responsáveis.\n\nEntre os serviços oferecidos estão:\n• levantamento de fatores de risco psicossociais relacionados ao trabalho\n• programas de saúde mental nas empresas\n• treinamentos\n• atração e seleção de talentos\n• prevenção de assédio moral e sexual\n• palestras e rodas de conversa sobre relações de trabalho",
  },
  {
    question: "Qual a faixa etária atendida no serviço clínico?",
    answer:
      "Os atendimentos psicológicos são realizados para adolescentes a partir de 12 anos, adultos e idosos.\n\nCada atendimento é conduzido considerando a fase de vida da pessoa, suas experiências, contexto familiar e realidade profissional.",
  },
  {
    question: "Como é garantido o sigilo?",
    answer:
      "O sigilo é um princípio fundamental da prática psicológica.\n\nTodos os atendimentos seguem as normas éticas da profissão, garantindo confidencialidade das informações compartilhadas durante o processo terapêutico.\n\nO conteúdo das sessões não é divulgado a terceiros, salvo em situações previstas pela legislação ou pelo código de ética profissional.",
  },
  {
    question: "A primeira sessão é uma avaliação?",
    answer:
      "A primeira sessão costuma ser um momento de acolhimento e compreensão inicial das questões trazidas pela pessoa.\n\nNesse encontro, o profissional escuta a demanda, apresenta a forma de trabalho e avalia, junto com a pessoa atendida, qual caminho de acompanhamento pode fazer mais sentido.",
  },
  {
    question: "Com que frequência ocorrem as sessões?",
    answer:
      "Na maioria dos casos, as sessões são realizadas uma vez por semana.\n\nNo entanto, a frequência pode variar conforme a necessidade da pessoa e a avaliação do profissional.",
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer:
      "As sessões têm duração média de 50 minutos.\n\nEsse tempo é reservado exclusivamente para o atendimento, garantindo espaço adequado para escuta, reflexão e acompanhamento.",
  },
  {
    question: "A Essência Mind atende convênios?",
    answer:
      "Os atendimentos são realizados de forma particular.\n\nEm alguns casos, dependendo do convênio da pessoa, pode ser possível solicitar reembolso junto ao plano de saúde.",
  },
  {
    question: "Empresas podem contratar atendimento para colaboradores?",
    answer:
      "Sim.\n\nEmpresas podem contratar programas que incluem atendimento psicológico para colaboradores, além de ações voltadas à prevenção de adoecimento mental e melhoria das relações de trabalho.\n\nCada projeto é estruturado considerando a realidade e as necessidades da organização.",
  },
  {
    question: "Preciso estar em um momento muito difícil para procurar psicoterapia?",
    answer:
      "Não.\n\nMuitas pessoas procuram psicoterapia não apenas em momentos de crise, mas também quando desejam compreender melhor suas emoções, seus relacionamentos ou suas decisões de vida e carreira.\n\nA psicoterapia pode ser um espaço de reflexão, autoconhecimento e desenvolvimento pessoal.",
  },
  {
    question: "Como saber se a psicoterapia pode me ajudar?",
    answer:
      "A psicoterapia pode ajudar quando a pessoa sente necessidade de compreender melhor seus sentimentos, lidar com situações difíceis, enfrentar momentos de mudança ou refletir sobre questões pessoais e profissionais.\n\nA primeira sessão costuma ser um bom momento para conversar sobre essas questões e avaliar se o acompanhamento pode fazer sentido naquele momento da vida.",
  },
  {
    question: "Qual a diferença entre psicoterapia, mentoria e orientação de carreira?",
    answer:
      "Embora possam dialogar entre si, são processos diferentes.\n\n- Psicoterapia é um acompanhamento realizado por psicólogos e voltado à compreensão das emoções, da história de vida, dos conflitos pessoais e das relações. O foco é o cuidado com a saúde mental e o desenvolvimento emocional.\n\n- Orientação de carreira é um processo de reflexão sobre escolhas profissionais, trajetória de trabalho, interesses, competências e possibilidades de desenvolvimento. Pode ajudar pessoas que estão iniciando a vida profissional, passando por mudanças de carreira ou buscando tomar decisões mais conscientes sobre seu caminho no trabalho.\n\n- Mentoria profissional é um processo de acompanhamento voltado ao desenvolvimento no contexto de trabalho e carreira. O foco costuma estar em desafios profissionais, tomada de decisões, liderança e desenvolvimento no ambiente organizacional.\n\nNa Essência Mind, cada uma dessas modalidades é conduzida respeitando seus objetivos, limites e responsabilidades profissionais.",
  },
];

export const servicesParaVoce = [
  {
    title: "Psicoterapia para adolescentes (a partir de 12 anos)",
    description:
      "Acolhimento e acompanhamento voltados às questões da adolescência, como identidade, ansiedade, relações familiares, escola, autoestima e tomada de decisões.",
  },
  {
    title: "Psicoterapia individual para adultos",
    description:
      "Atendimento psicológico para quem deseja compreender melhor suas emoções, lidar com ansiedade, momentos de sobrecarga, conflitos pessoais, relacionamentos e desafios da vida profissional.",
  },
  {
    title: "Psicoterapia para casais",
    description:
      "Espaço de diálogo para casais que desejam compreender melhor suas dinâmicas de relacionamento, alinhar expectativas e fortalecer a comunicação.",
  },
  {
    title: "Atendimento online",
    description:
      "Sessões realizadas em ambiente seguro e confidencial, permitindo acesso ao cuidado psicológico independentemente da localização.",
  },
  {
    title: "Desenvolvimento de carreira e primeiro emprego",
    description:
      "Espaço de reflexão e orientação para quem está iniciando sua vida profissional ou deseja compreender melhor sua trajetória no trabalho.",
  },
];

export const servicesParaEmpresas = [
  {
    title: "Riscos psicossociais no trabalho",
    description:
      "Identificação e análise de fatores psicossociais relacionados à organização do trabalho, com elaboração de relatórios e recomendações alinhadas à realidade da empresa e às diretrizes da NR-1 (GRO/PGR).",
  },
  {
    title: "Programas de saúde mental no trabalho",
    description:
      "Desenvolvimento de ações contínuas voltadas à prevenção do adoecimento, melhoria das relações de trabalho e fortalecimento do ambiente organizacional.",
  },
  {
    title: "Psicoterapia para colaboradores",
    description:
      "Atendimento psicológico individual ou em grupo, realizado por psicólogos, com sigilo profissional e respeito à realidade de cada trabalhador.",
  },
  {
    title: "Rodas de conversa e palestras",
    description:
      "Espaços de diálogo sobre saúde mental, relações de trabalho, prevenção de violência e fortalecimento da cultura de respeito nas organizações.",
  },
  {
    title: "Treinamentos para lideranças",
    description:
      "Formação voltada ao desenvolvimento de lideranças, comunicação no trabalho, gestão de pessoas, prevenção de conflitos e compreensão dos fatores psicossociais.",
  },
  {
    title: "Treinamentos para CIPA",
    description:
      "Capacitação voltada à prevenção e encaminhamento de situações de assédio moral e sexual no ambiente de trabalho, conforme a legislação vigente.",
  },
  {
    title: "Consultoria em prevenção de assédio",
    description:
      "Apoio na estruturação de políticas internas, fluxos de atendimento, canais de escuta e ações educativas voltadas à prevenção do assédio moral e sexual.",
  },
  {
    title: "Atração e seleção de talentos",
    description:
      "Condução de processos de recrutamento e seleção com foco no alinhamento entre competências técnicas, perfil comportamental e cultura organizacional.",
  },
  {
    title: "Orientação profissional e de carreira",
    description:
      "Apoio a profissionais e organizações na reflexão sobre trajetórias de carreira, desenvolvimento profissional e tomada de decisões relacionadas ao trabalho.",
  },
  {
    title: "Coaching e mentorias",
    description:
      "Processos de acompanhamento voltados ao amadurecimento profissional, clareza de papel, desenvolvimento de lideranças e tomada de decisões no contexto organizacional.",
  },
  {
    title: "Apoio ao retorno da maternidade e prevenção da violência contra a mulher",
    description:
      "Desenvolvimento de ações voltadas ao acolhimento de mulheres no retorno ao trabalho após a maternidade, bem como iniciativas de sensibilização e prevenção de violências contra a mulher. As atividades podem incluir rodas de conversa, treinamentos, orientação a lideranças e apoio à construção de ambientes mais respeitosos e seguros.",
  },
];
