/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Benefit, 
  ComparisonItem, 
  LibraryFeature, 
  Step, 
  TargetAudience, 
  VideoCategory, 
  FaqItem 
} from "./types";

// Constant for the purchase redirect link, easily editable in one location.
export const CHECKOUT_URL = "https://pay.kiwify.com.br/YOUR_CHECKOUT_ID"; 

export const HERO_BENEFITS: Benefit[] = [
  {
    id: "b1",
    iconName: "DollarSign",
    text: "Fature em Dólar todos os dias"
  },
  {
    id: "b2",
    iconName: "TrendingUp",
    text: "4.000 Cortes de Famosos"
  },
  {
    id: "b3",
    iconName: "Sparkles",
    text: "1.000 Cortes de Filmes prontos"
  }
];

export const COMP_DO_ZERO: ComparisonItem[] = [
  { text: "Passar 6 horas por dia editando no computador" },
  { text: "Gastar centenas de reais com assinaturas de edição" },
  { text: "Gastar todo o seu tempo livre após o trabalho" },
  { text: "Ficar preso no salário mínimo do seu emprego CLT" },
  { text: "Tentar postar sem ganchos e amargar zero visualizações" },
  { text: "Nenhum centavo ganho em dólar no fim do mês" }
];

export const COMP_VIRAL_CUT: ComparisonItem[] = [
  { text: "Escolher um vídeo da biblioteca validada em segundos" },
  { text: "Baixar direto no celular com legendas dinâmicas prontas" },
  { text: "Postar em 5 minutos e deixar o algoritmo trabalhar" },
  { text: "Multiplicar canais e faturar em dólar enquanto dorme" },
  { text: "Usar blocos de ganchos que prendem a atenção até o fim" },
  { text: "Alcançar a liberdade financeira e demitir o seu chefe" }
];

export const LIBRARY_FEATURES: LibraryFeature[] = [
  {
    id: "lf1",
    title: "+4.000 Cortes de Famosos Prontos",
    description: "Cortes magnéticos de celebridades da internet, podcasts campeões de audiência e bilionários. Validados para reter o público da primeira à última fração de segundo.",
    iconName: "TrendingUp"
  },
  {
    id: "lf2",
    title: "+1.000 Cortes de Filmes já Editados",
    description: "Cenas épicas de filmes, séries e animações famosas com legendas dinâmicas que viralizam facilmente no algoritmo. Prontos para postagem inmediata.",
    iconName: "Sparkles"
  },
  {
    id: "lf3",
    title: "Monetização Acelerada em Dólar",
    description: "Aprenda a receber diretamente das plataformas americanas ganhando 5x mais (em dólar) usando o mesmo volume de tráfego brasileiro.",
    iconName: "DollarSign"
  },
  {
    id: "lf4",
    title: "Ganchos Magnéticos Milionários",
    description: "Copywriting de retenção aplicada. Ganchos visuais e sonoros prontos para forçar o espectador a continuar assistindo ao vídeo por mais tempo.",
    iconName: "Flame"
  },
  {
    id: "lf5",
    title: "Facilidade Celular de 5 Minutos",
    description: "Sem precisar de computadores caros ou programas lentos. Baixe todos os arquivos prontos e edite/publique diretamente da palma da sua mão.",
    iconName: "Smartphone"
  },
  {
    id: "lf6",
    title: "Organização Master Pronta",
    description: "Tudo categorizado perfeitamente por pastas na nuvem com entrega imediata após o seu pagamento. Copiou, baixou e faturou.",
    iconName: "Folder"
  }
];

export const TIMELINE_STEPS: Step[] = [
  {
    number: 1,
    title: "Acesse a Nuvem do ViralCut",
    description: "Escolha entre os mais de 4.000 cortes de famosos de alto impacto ou 1.000 cortes de filmes renomados na nossa área de membros vip.",
    iconName: "Smartphone"
  },
  {
    number: 2,
    title: "Baixe e Publique em Minutos",
    description: "Os arquivos já contam com áudio tratado, ganchos visuais e legendas dinâmicas de altíssima conversão. Basta postar nas suas redes sociais.",
    iconName: "Share2"
  },
  {
    number: 3,
    title: "Receba Seus Pagamentos em Dólar",
    description: "Com o tráfego estourando, conecte sua conta bancária e receba diretamente em dólares por mil visualizações das maiores redes de retenção.",
    iconName: "TrendingUp"
  }
];

export const FLOATING_WORDS = [
  { label: "Ganhar em Dólar", size: "text-lg md:text-2xl", color: "text-emerald-400 font-black", delay: 0 },
  { label: "Esqueça a CLT", size: "text-base md:text-lg", color: "text-white/80", delay: 1.5 },
  { label: "+4.000 Famosos", size: "text-sm md:text-md", color: "text-brand-red-primary/90", delay: 0.8 },
  { label: "Mudar de Vida", size: "text-lg md:text-xl", color: "text-emerald-400 font-bold", delay: 2.2 },
  { label: "+1.000 Filmes", size: "text-xs md:text-sm", color: "text-white/40", delay: 1.1 },
  { label: "Renda Principal", size: "text-sm md:text-base", color: "text-white/70", delay: 1.9 },
  { label: "Liberdade Financeira", size: "text-xl md:text-2xl", color: "text-white font-bold", delay: 0.3 },
  { label: "Cortes Prontos", size: "text-md md:text-lg", color: "text-brand-red-primary", delay: 2.5 }
];

export const ACTIONS_AUDIENCE: TargetAudience[] = [
  {
    id: "ta1",
    title: "Quer trocar a CLT pela internet",
    description: "Transforme os cortes na sua principal fonte de renda recorrente. Trabalhe de qualquer lugar do mundo recebendo pagamentos direto na conta.",
    iconName: "Zap"
  },
  {
    id: "ta2",
    title: "Faturar em dólar em 2026",
    description: "Aproveite a conversão cambial. Ganhar 1.000 dólares equivale a mais de R$ 5.400,00 por mês postando pequenos vídeos rápidos.",
    iconName: "HelpCircle"
  },
  {
    id: "ta3",
    title: "Criar canais sem aparecer",
    description: "Crie canais temáticos (perfil dark) onde o foco é o famoso ou o filme. Você ganha a fama do algoritmo de forma 100% anônima.",
    iconName: "Folder"
  },
  {
    id: "ta4",
    title: "Quem deseja facilidade extrema",
    description: "Elimine 100% da barreira da edição de vídeo. Não compre computadores caros ou faça cursos de 30 horas. Tudo está editado e pronto.",
    iconName: "Sparkles"
  }
];

export const VIDEO_CATEGORIES: VideoCategory[] = [
  {
    id: "vc1",
    title: "Bilionários & Mindset Real",
    duration: "15-45s",
    tag: "RPM de Elite",
    aspectRatio: "9:16",
    gradient: "from-emerald-900/40 via-black to-black",
  },
  {
    id: "vc2",
    title: "Cortes de Podcasts de Famosos",
    duration: "30-50s",
    tag: "Monetização Rápida",
    aspectRatio: "9:16",
    gradient: "from-red-950/40 via-black to-black",
  },
  {
    id: "vc3",
    title: "Histórias Fantásticas de Filmes",
    duration: "40-60s",
    tag: "Viralizador em Massa",
    aspectRatio: "9:16",
    gradient: "from-amber-950/40 via-black to-black",
  },
  {
    id: "vc4",
    title: "Filmes Épicos & Cenas Dinâmicas",
    duration: "25-55s",
    tag: "Altíssima Retenção",
    aspectRatio: "9:16",
    gradient: "from-purple-950/40 via-black to-black",
  },
  {
    id: "vc5",
    title: "Estratégias de Enriquecimento",
    duration: "20-45s",
    tag: "Público Alta Renda",
    aspectRatio: "9:16",
    gradient: "from-rose-950/40 via-black to-black",
  },
  {
    id: "vc6",
    title: "Frases de Sucesso & Motivação",
    duration: "05-15s",
    tag: "Corte de 1 Milhão",
    aspectRatio: "9:16",
    gradient: "from-orange-950/40 via-black to-black",
  },
  {
    id: "vc7",
    title: "Mentes de Negócios & Atitude",
    duration: "30-55s",
    tag: "Gera Dólar",
    aspectRatio: "9:16",
    gradient: "from-slate-950/40 via-black to-black",
  },
  {
    id: "vc8",
    title: "Legendas Neon de Auto-Impacto",
    duration: "15-50s",
    tag: "Efeito Hipnótico",
    aspectRatio: "9:16",
    gradient: "from-cyan-950/40 via-black to-black",
  }
];

export interface CaseStudy {
  id: string;
  sourceType: "Famoso" | "Filme" | "Podcast";
  title: string;
  views: string;
  earningsUsd: string;
  earningsBrl: string;
  viralFactor: string;
  timeframe: string;
  badge: string;
}

export const VIRAL_CASES: CaseStudy[] = [
  {
    id: "case1",
    sourceType: "Famoso",
    title: "Mente Bilionária - Conselhos Práticos",
    views: "2.4 Milhões",
    earningsUsd: "$2,880.00",
    earningsBrl: "R$ 15.552,00",
    viralFactor: "Gancho Sonoro de 2 Segundos",
    timeframe: "Apenas 14 dias após postagem",
    badge: "RECORDE DE RETENÇÃO"
  },
  {
    id: "case2",
    sourceType: "Filme",
    title: "Cena Épica de Ação Estratégica (Legendado)",
    views: "1.8 Milhão",
    earningsUsd: "$1,620.00",
    earningsBrl: "R$ 8.748,00",
    viralFactor: "Legenda Dinâmica Cor Neon",
    timeframe: "Estourou em 9 dias de tráfego",
    badge: "MAIS ENGAJADO"
  },
  {
    id: "case3",
    sourceType: "Podcast",
    title: "Entrevista Exclusiva com Influenciador Vip",
    views: "3.1 Milhões",
    earningsUsd: "$3,410.00",
    earningsBrl: "R$ 18.414,00",
    viralFactor: "Corte na Revelação Secreta",
    timeframe: " Viralizou no TikTok & YouTube Shorts",
    badge: "ESTOURO DA INSULINA VÍDEOS"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Como o ViralCut pode ser minha renda principal?",
    answer: "Trata-se de escala e do incrível poder do dólar. Ao usar nossos mais de 4.000 cortes de famosos e 1.000 cortes de filmes pré-editados de forma estratégica, você abastece múltiplos perfis sem gastar horas produzindo. O tráfego qualificado gera monetização direta em dólares (RPM), e por o dólar valer 5x mais que o Real brasileiro, você multiplica seu faturamento de forma astronômica com poucos canais ativos."
  },
  {
    question: "O acesso realmente garante que vou mudar de vida?",
    answer: "Milhares de pessoas comuns já substituíram empregos frustrantes pelas redes sociais de cortes dark. Ao adquirir o método mais os cortes prontos e otimizados, você ganha o atalho mestre: não precisa errar nos ganchos ou passar noites sem dormir tentando editar. Você já começa com o exato material que canais milionários usam no dia a dia para explodir em faturamento."
  },
  {
    question: "Preciso comprar algum computador caro?",
    answer: "De forma alguma! A facilidade é absurda: você consegue baixar a biblioteca inteira e o método estruturado diretamente pelo seu celular. Dá para baixar de onde estiver, postar em 5 minutos nos horários nobres de engajamento do algoritmo, e gerenciar sua nova principal fonte de renda com absoluta independência de tela."
  },
  {
    question: "Do que é composto o pacote mestre?",
    answer: "Você recebe acesso vitalício e entrega instantânea de mais de 4.000 cortes refinados de celebridades, heróis de negócios e podcasters influentes, além de 1.000 cortes selecionados de filmes renomados de alta conversão, já legendados e com áudio aprimorado. Também acompanha o Guia Secreto do Método Corte Magnético™ ensinando como configurar contas de monetização em dólar de forma segura."
  },
  {
    question: "O pagamento é único ou tem mensalidade?",
    answer: "É um único investimento de apenas R$ 47,00 reais. Sem assinaturas repetitivas, sem mensalidades infinitas ou taxas adicionadas posteriormente. Você entra, acessa o acervo de extrema riqueza comercial e começa a trabalhar no seu faturamento em dólar hoje mesmo!"
  }
];
