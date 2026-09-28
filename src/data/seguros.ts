export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitDetail {
  title: string;
  description: string;
  iconName: string;
}

export interface WhyJrxDetail {
  title: string;
  description: string;
}

export interface SeguroItem {
  id: string;
  slug: string;
  name?: string;
  nome: string;
  titulo: string;
  descricao: string;
  shortDescription: string;
  beneficios: string[];
  imagemUrl: string;
  category: 'Pessoa Física' | 'Empresarial' | 'Especializado' | 'Patrimonial';
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  coverageHighlights: string[];
  idealFor: string;
  accentColor: string;
  whyChooseJrx: WhyJrxDetail[];
  benefitsDetails: BenefitDetail[];
  faqs: FaqItem[];
  carouselKicker?: string;
  carouselTitle?: string;
  carouselDesc?: string;
  carouselAction?: string;
}

/**
 * Array oficial exigido pelo prompt com os 11 ramos de atuação da JRX Seguros.
 * Contém links de imagens Unsplash em alta resolução e livres de direitos autorais.
 */
export const segurosData: SeguroItem[] = [
  {
    id: 'vida',
    slug: 'vida',
    nome: 'Seguro de Vida',
    name: 'Vida',
    titulo: 'Proteção financeira para quem você mais ama.',
    descricao: 'Garanta a tranquilidade da sua família e suporte em casos de imprevistos, invalidez ou doenças graves.',
    shortDescription: 'Segurança financeira e amparo completo para você e as pessoas mais importantes da sua vida.',
    beneficios: ['Cobertura para Doenças Graves', 'Indenização rápida', 'Assistência Funeral'],
    imagemUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop',
    category: 'Pessoa Física',
    badge: 'Proteção Familiar & Financeira',
    carouselKicker: 'Seguro de',
    carouselTitle: 'Vida',
    carouselDesc: 'Proteção financeira para quem você mais ama e tranquilidade para o futuro da sua família.',
    carouselAction: 'FAÇA COTAÇÃO',
    heroHeadline: 'Proteja o futuro de quem você mais ama com tranquilidade total',
    heroSubheadline: 'Garantia de amparo financeiro imediato em situações imprevistas, com assistência humanizada e suporte dedicado para a sua família.',
    coverageHighlights: [
      'Indenização rápida sem burocracia ou inventário',
      'Proteção financeira em caso de invalidez por acidente ou doença',
      'Assistência funeral completa para o titular e cônjuge',
      'Cobertura em vida para diagnóstico de doenças graves',
      'Segunda opinião médica internacional inclusa',
    ],
    idealFor: 'Pais, mães, profissionais liberais e qualquer pessoa que queira garantir estabilidade para sua família.',
    accentColor: 'from-blue-600 to-indigo-700',
    whyChooseJrx: [
      {
        title: 'Cotação Imediata no WhatsApp',
        description: 'Comparamos os planos ideais de Porto Seguro, Bradesco, Tokio Marine e SulAmérica.',
      },
      {
        title: 'Sem Jargões ou Entrelinhas',
        description: 'Explicamos com absoluta clareza quais são os limites e como funciona a indenização.',
      },
      {
        title: 'Acompanhamento Vitalício',
        description: 'Em qualquer eventualidade, nossa equipe em Passos - MG presta o apoio direto à sua família.',
      },
    ],
    benefitsDetails: [
      {
        title: 'Cobertura para Doenças Graves',
        description: 'Receba a indenização em vida após o diagnóstico confirmado para custear tratamentos com dignidade.',
        iconName: 'Activity',
      },
      {
        title: 'Indenização Rápida e Direta',
        description: 'Recurso financeiro liberado sem passar por inventário para garantir a manutenção das contas da casa.',
        iconName: 'HeartHandshake',
      },
      {
        title: 'Assistência Funeral 24 Horas',
        description: 'Cuidado e amparo nos momentos mais difíceis, sem custos inesperados para os seus entes queridos.',
        iconName: 'CheckCircle2',
      },
    ],
    faqs: [
      {
        question: 'O seguro de vida pode ser utilizado ainda em vida?',
        answer: 'Sim! As apólices modernas da JRX contam com coberturas resgatáveis em vida, como diagnóstico de doenças graves, invalidez permanente e diárias por incapacidade temporária.',
      },
      {
        question: 'O valor da indenização entra em inventário ou sofre tributação?',
        answer: 'Não. Por determinação legal no Brasil, a indenização do seguro de vida não entra em inventário e é isenta de Imposto de Renda, sendo paga diretamente aos beneficiários indicados.',
      },
      {
        question: 'Como faço para cotar no WhatsApp?',
        answer: 'Basta clicar no botão de WhatsApp nesta página. Nossa equipe solicitará dados simples (idade e profissão) e enviará propostas comparadas diretamente na conversa.',
      },
    ],
  },
  {
    id: 'empresarial',
    slug: 'empresarial',
    nome: 'Seguro Empresarial',
    name: 'Empresarial',
    titulo: 'Seu negócio protegido contra qualquer imprevisto.',
    descricao: 'Proteja o patrimônio da sua empresa, estoques, maquinários e garanta a continuidade das operações.',
    shortDescription: 'Blindagem completa para sua empresa continuar crescendo com segurança patrimonial e operacional.',
    beneficios: ['Incêndio, Raio e Explosão', 'Subtração de Bens', 'Responsabilidade Civil'],
    imagemUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    category: 'Empresarial',
    badge: 'Solução B2B Multissetorial',
    carouselKicker: 'Seguro',
    carouselTitle: 'Empresarial',
    carouselDesc: 'Para proteger seu patrimônio, seus resultados e garantir a sua tranquilidade.',
    carouselAction: 'FAÇA COTAÇÃO',
    heroHeadline: 'Mantenha sua empresa protegida e focada no crescimento',
    heroSubheadline: 'Proteção patrimonial completa contra imprevistos em escritórios, lojas, indústrias e galpões comerciais.',
    coverageHighlights: [
      'Proteção contra incêndio, queda de raio e explosão de qualquer natureza',
      'Subtração de bens, maquinários e mercadorias do estoque',
      'Cobertura para danos elétricos e oscilações na rede de energia',
      'Lucros cessantes e despesas fixas para continuidade do negócio',
      'Responsabilidade civil para operações comerciais e atendimento ao público',
    ],
    idealFor: 'Pequenas, médias e grandes empresas, galpões, comércios, clínicas, indústrias e escritórios.',
    accentColor: 'from-slate-800 to-blue-900',
    whyChooseJrx: [
      {
        title: 'Mapeamento de Riscos Personalizado',
        description: 'Avaliamos a infraestrutura física e os processos da sua empresa para dimensionar a cobertura exata.',
      },
      {
        title: 'Economia e Otimização de Custos',
        description: 'Negociamos pacotes corporativos nas principais seguradoras para obter o melhor custo-benefício.',
      },
      {
        title: 'Canal Prioritário B2B',
        description: 'Linha direta no WhatsApp com os consultores Paulo Martins e André para suporte imediato aos gestores.',
      },
    ],
    benefitsDetails: [
      {
        title: 'Incêndio, Raio e Explosão',
        description: 'Reposição patrimonial integral para reconstrução de estrutura e reposição de ativos.',
        iconName: 'Flame',
      },
      {
        title: 'Subtração de Bens e Mercadorias',
        description: 'Tranquilidade contra assaltos, furtos qualificados e danos a instalações comerciais.',
        iconName: 'Building2',
      },
      {
        title: 'Responsabilidade Civil Operações',
        description: 'Amparo jurídico e indenizatório em imprevistos com clientes ou terceiros no seu estabelecimento.',
        iconName: 'ShieldAlert',
      },
    ],
    faqs: [
      {
        question: 'O seguro empresarial cobre estoques sazonais com variação de volume?',
        answer: 'Sim, nós configuramos cláusulas específicas de flutuação de estoque para que o valor segurado acompanhe os picos de mercadoria da sua empresa.',
      },
      {
        question: 'O que está incluso nos serviços de assistência para empresas?',
        answer: 'Serviços de chaveiro, eletricista, encanador, vidraceiro e suporte patrimonial provisório em caso de sinistro.',
      },
      {
        question: 'Como a JRX agiliza o processo de contratação para empresas?',
        answer: 'Basta enviar o CNPJ e o endereço do imóvel pelo WhatsApp. Nosso time faz a vistoria digital e emite a proposta preliminar no mesmo dia.',
      },
    ],
  },
  {
    id: 'residencial',
    slug: 'residencial',
    nome: 'Seguro Residencial',
    name: 'Residencial',
    titulo: 'Cuidado completo para o seu lar 24 horas por dia.',
    descricao: 'Segurança para sua casa ou apartamento com serviços emergenciais para consertos e imprevistos.',
    shortDescription: 'Cuidado completo para a sua casa ou apartamento com serviços emergenciais dia e noite.',
    beneficios: ['Danos Elétricos', 'Vendaval e Granizo', 'Assistência 24h (Chaveiro, Eletricista)'],
    imagemUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    category: 'Patrimonial',
    badge: 'Proteção para Casas e Apartamentos',
    carouselKicker: 'Seguro',
    carouselTitle: 'Residencial',
    carouselDesc: 'Cuidado completo para a sua casa ou apartamento com serviços para o seu lar.',
    carouselAction: 'SAIBA MAIS',
    heroHeadline: 'Sua casa protegida com suporte 24h para toda a família',
    heroSubheadline: 'Muito mais do que proteção patrimonial: conte com encanador, eletricista, chaveiro e reparos sempre que precisar.',
    coverageHighlights: [
      'Danos causados por tempestades, granizo, ventanias e raios',
      'Proteção contra queima de aparelhos elétricos e eletrodomésticos por oscilação de rede',
      'Vazamento e rompimento de tubulações hidráulicas',
      'Subtração de bens portáteis e eletrônicos residenciais',
      'Assistência para reparos domésticos e até pequenos cuidados pet',
    ],
    idealFor: 'Proprietários e inquilinos de apartamentos, casas em condomínio fechado ou bairros abertos.',
    accentColor: 'from-emerald-700 to-teal-800',
    whyChooseJrx: [
      {
        title: 'Acionamento Rápido no WhatsApp',
        description: 'Precisa de chaveiro ou desentupimento emergencial? O acionamento é feito diretamente pelo celular.',
      },
      {
        title: 'Custo Menor que um Café por Dia',
        description: 'O seguro residencial custa uma fração pequena do seguro de automóvel, com assistências que se pagam sozinhas.',
      },
      {
        title: 'Válido para Imóvel Próprio ou Alugado',
        description: 'Customizamos o plano para proteger apenas o conteúdo ou a estrutura total da residência.',
      },
    ],
    benefitsDetails: [
      {
        title: 'Danos Elétricos',
        description: 'Cobertura imediata para aparelhos que queimarem por surtos de tensão ou raios.',
        iconName: 'Zap',
      },
      {
        title: 'Vendaval e Granizo',
        description: 'Proteção para telhados, calhas, janelas e estruturas atingidas por temporais.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Assistência 24h do Lar',
        description: 'Chaveiro, encanador, eletricista e reparos de geladeira, máquina de lavar e fogão inclusos.',
        iconName: 'Home',
      },
    ],
    faqs: [
      {
        question: 'Quem mora de aluguel pode contratar seguro residencial?',
        answer: 'Com certeza! É muito comum inquilinos contratarem para proteger seus bens móveis e eletrodomésticos, além de usufruir da assistência 24h e cumprir exigências contratuais de locação.',
      },
      {
        question: 'Quantas vezes posso utilizar os serviços de assistência no ano?',
        answer: 'A maioria dos planos oferece de 2 a 4 utilizações gratuitas por ano para cada tipo de serviço (chaveiro, encanador, eletricista e linha branca).',
      },
      {
        question: 'Como funciona a cobertura contra danos elétricos na residência?',
        answer: 'Cobre a queima de aparelhos eletroeletrônicos (como TVs, geladeiras, computadores e ar-condicionado) causada por quedas de raios ou oscilações bruscas na rede elétrica.',
      },
    ],
  },
  {
    id: 'automovel',
    slug: 'automovel',
    nome: 'Seguro Automóvel',
    name: 'Automóvel',
    titulo: 'Não conte com a sorte no trânsito.',
    descricao: 'Cobertura completa contra roubo, colisão e assistência 24h com guincho ilimitado para você rodar seguro.',
    shortDescription: 'Guincho ilimitado, carro reserva e assistência 24h em qualquer estrada do Brasil.',
    beneficios: ['Guincho 24 Horas', 'Carro Reserva', 'Cobertura para Terceiros'],
    imagemUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    category: 'Pessoa Física',
    badge: 'Proteção Veicular Completa',
    carouselKicker: 'Seguro',
    carouselTitle: 'Automóvel',
    carouselDesc: 'Não conte com a sorte no trânsito: proteção contra roubo, colisão e guincho ilimitado.',
    carouselAction: 'FAÇA COTAÇÃO',
    heroHeadline: 'Não conte com a sorte: dirija protegido em qualquer estrada do Brasil',
    heroSubheadline: 'Proteção total contra batidas, roubo, furto, terceiros e assistência imediata 24 horas por dia.',
    coverageHighlights: [
      'Proteção integral contra colisão, capotamento e alagamento',
      'Indenização de 100% da tabela FIPE em caso de roubo ou perda total',
      'Reparo ou troca de vidros, faróis, retrovisores e lanternas',
      'Carro reserva por até 30 dias com ar-condicionado',
      'Guincho 24h com opção de quilometragem ilimitada em todo o Brasil',
    ],
    idealFor: 'Motoristas que utilizam o carro para família, deslocamento de trabalho ou viagens na estrada.',
    accentColor: 'from-blue-700 to-blue-900',
    whyChooseJrx: [
      {
        title: 'Cotação em Múltiplas Seguradoras',
        description: 'Comparamos Porto Seguro, Azul, Tokio Marine, Allianz, HDI e Bradesco para achar o menor valor.',
      },
      {
        title: 'Suporte no Momento do Acidente',
        description: 'Canal exclusivo no WhatsApp para acionar guincho e guiar toda a documentação sem estresse.',
      },
      {
        title: 'Descontos de Renovação',
        description: 'Mantemos e aproveitamos seu bônus de anos anteriores para garantir o preço mais baixo.',
      },
    ],
    benefitsDetails: [
      {
        title: 'Guincho e Socorro 24h',
        description: 'Atendimento ágil para panes mecânicas, bateria descarregada, chaveiro ou troca de pneu.',
        iconName: 'Car',
      },
      {
        title: 'Carro Reserva Imediato',
        description: 'Mantenha sua rotina e mobilidade sem interrupções enquanto seu carro estiver na oficina.',
        iconName: 'KeyRound',
      },
      {
        title: 'Cobertura para Terceiros',
        description: 'Garantia de reparação para danos materiais e corporais de outros veículos envolvidos.',
        iconName: 'Shield',
      },
    ],
    faqs: [
      {
        question: 'Posso transferir minha classe de bônus de outra corretora ou seguradora?',
        answer: 'Sim! Sua classe de bônus pertence a você (CPF) e é válida em qualquer seguradora. Ao cotar com a JRX, mantemos ou até melhoramos o seu desconto.',
      },
      {
        question: 'O que devo fazer caso me envolva em uma colisão?',
        answer: 'Basta mandar uma mensagem no WhatsApp da JRX Seguros. Orientamos você a registrar o boletim de ocorrência, fotografar os danos e liberamos o guincho e oficina credenciada.',
      },
      {
        question: 'Qual é a diferença entre franquia básica e reduzida no seguro auto?',
        answer: 'A franquia reduzida diminui o valor desembolsado por você em caso de sinistro parcial com reparo do veículo, garantindo maior previsibilidade financeira.',
      },
    ],
  },
  {
    id: 'viagem',
    slug: 'viagem',
    nome: 'Seguro Viagem',
    name: 'Viagem',
    titulo: 'Viaje para qualquer lugar do mundo sem preocupações.',
    descricao: 'Atendimento médico de urgência, cobertura para extravio de bagagem e assessoria jurídica no exterior.',
    shortDescription: 'Embarque com suporte médico e odontológico internacional, extravio de bagagem e emergências.',
    beneficios: ['Despesas Médicas e Hospitalares', 'Localização de Bagagem', 'Cancelamento de Viagem'],
    imagemUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop',
    category: 'Pessoa Física',
    badge: 'Tranquilidade Global',
    carouselKicker: 'Seguro',
    carouselTitle: 'Viagem',
    carouselDesc: 'Viaje para qualquer lugar do mundo com assistência médica e cobertura para bagagem.',
    carouselAction: 'SAIBA MAIS',
    heroHeadline: 'Aproveite cada momento da sua viagem sem imprevistos',
    heroSubheadline: 'Atendimento médico em português em qualquer país, rastreio de bagagem e reembolso de despesas inesperadas.',
    coverageHighlights: [
      'Assistência médica, odontológica e farmacêutica de emergência no exterior',
      'Cobertura obrigatória para o Tratado de Schengen (Europa) e outros destinos',
      'Rastreamento e indenização suplementar em caso de bagagem extraviada',
      'Reembolso de passagens por cancelamento justificado ou atraso de voo',
      'Repatriação médica e traslado sanitário com cobertura integral',
    ],
    idealFor: 'Viajantes a turismo, negócios, intercâmbio, viagens em família ou cruzeiros marítimos.',
    accentColor: 'from-sky-600 to-indigo-800',
    whyChooseJrx: [
      {
        title: 'Atende aos Requisitos Internacionais',
        description: 'Emitimos a apólice com valor de cobertura de no mínimo € 30.000 exigido pela Europa.',
      },
      {
        title: 'Emissão Expressa no WhatsApp',
        description: 'Feche o seguro antes de embarcar e receba seu voucher digital com rapidez e segurança.',
      },
      {
        title: 'Central 24h em Português',
        description: 'Zero barreiras de idioma caso precise de hospital, médico ou dentista no exterior.',
      },
    ],
    benefitsDetails: [
      {
        title: 'Despesas Médicas e Hospitalares',
        description: 'Consultas e internações no exterior sem precisar desembolsar milhares de dólares ou euros.',
        iconName: 'Plane',
      },
      {
        title: 'Localização de Bagagem',
        description: 'Rastreio proativo e compensação financeira caso sua mala não chegue no desembarque.',
        iconName: 'Luggage',
      },
      {
        title: 'Cancelamento de Viagem',
        description: 'Proteção financeira caso imprevistos de saúde impeçam o embarque programado.',
        iconName: 'PhoneCall',
      },
    ],
    faqs: [
      {
        question: 'O seguro viagem cobre doenças preexistentes?',
        answer: 'Sim, os planos modernos da JRX cobrem crises e atendimentos emergenciais decorrentes de condições preexistentes até a estabilização do quadro de saúde.',
      },
      {
        question: 'O seguro é obrigatório para viajar para a Europa?',
        answer: 'Sim, os países do Tratado de Schengen exigem apólice com cobertura mínima de 30 mil euros para conceder a entrada no controle de fronteira.',
      },
      {
        question: 'O que fazer caso minha bagagem seja extraviada no exterior?',
        answer: 'Registre o relatório PIR no balcão da companhia aérea e avise nossa central pelo WhatsApp. Prestamos auxílio na localização e acionamos a indenização suplementar para despesas emergenciais.',
      },
    ],
  },
  {
    id: 'saude',
    slug: 'saude',
    nome: 'Plano de Saúde',
    name: 'Saúde',
    titulo: 'Acesso aos melhores médicos e hospitais da região.',
    descricao: 'Planos individuais, familiares ou corporativos com ampla rede credenciada e atendimento ágil.',
    shortDescription: 'Acesso aos melhores hospitais, laboratórios e especialistas para cuidar de quem importa.',
    beneficios: ['Consultas e Exames', 'Internações sem carência', 'Telemedicina 24 Horas'],
    imagemUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop',
    category: 'Pessoa Física',
    badge: 'Cuidado & Bem-Estar',
    carouselKicker: 'Plano de',
    carouselTitle: 'Saúde',
    carouselDesc: 'Acesso aos melhores hospitais, clínicas e médicos com ampla rede e telemedicina.',
    carouselAction: 'FAÇA COTAÇÃO',
    heroHeadline: 'O melhor cuidado médico para você, sua família e sua equipe',
    heroSubheadline: 'Planos individuais, familiares e corporativos com ampla rede credenciada e reembolso de consultas.',
    coverageHighlights: [
      'Consultas presenciais e exames diagnósticos nos melhores laboratórios',
      'Internações em quarto privativo com acompanhante',
      'Telemedicina 24 horas direto pelo smartphone em qualquer lugar',
      'Opções com reembolso para médicos particulares de sua escolha',
      'Condições especiais para contratações corporativas a partir de 2 vidas (MEI e PME)',
    ],
    idealFor: 'Famílias, profissionais autônomos, MEIs e empresas que buscam reter talentos e cuidar da equipe.',
    accentColor: 'from-cyan-700 to-blue-800',
    whyChooseJrx: [
      {
        title: 'Estudo Comparativo Completo',
        description: 'Avaliamos tabelas de Unimed, Bradesco Saúde, Amil, SulAmérica e Porto Saúde.',
      },
      {
        title: 'Aproveitamento de Carências',
        description: 'Se você já tem plano, auxiliamos na migração sem perder os prazos já cumpridos.',
      },
      {
        title: 'Redução de Custos para CNPJ',
        description: 'Identificamos planos empresariais até 40% mais em conta que planos pessoa física.',
      },
    ],
    benefitsDetails: [
      {
        title: 'Consultas e Exames',
        description: 'Acesso rápido aos melhores especialistas, clínicas de imagem e laboratórios do país.',
        iconName: 'Stethoscope',
      },
      {
        title: 'Internações sem Carência',
        description: 'Aproveitamento de carências na portabilidade para internações e cirurgias.',
        iconName: 'ShieldPlus',
      },
      {
        title: 'Telemedicina 24 Horas',
        description: 'Médicos disponíveis por telemedicina pelo celular para orientações e receitas digitais.',
        iconName: 'Activity',
      },
    ],
    faqs: [
      {
        question: 'Quem tem MEI pode contratar plano de saúde com desconto empresarial?',
        answer: 'Sim! Com um CNPJ MEI ativo há mais de 6 meses e no mínimo 2 beneficiários (você e um dependente), já é possível contratar tabelas corporativas.',
      },
      {
        question: 'Como funciona a portabilidade de carências de outro plano de saúde?',
        answer: 'Se você já possui um plano anterior, podemos solicitar o aproveitamento e redução de carências para consultas, exames complexos e procedimentos na nova operadora.',
      },
      {
        question: 'Qual a diferença entre plano com e sem coparticipação?',
        answer: 'Planos com coparticipação têm mensalidades mais baixas e cobram pequenas taxas apenas quando há utilização de consultas e exames. Planos sem coparticipação têm mensalidade fixa integral.',
      },
    ],
  },
  {
    id: 'fotovoltaico',
    slug: 'fotovoltaico',
    nome: 'Seguro Fotovoltaico',
    name: 'Fotovoltaico',
    titulo: 'Blindagem para o seu investimento em energia solar.',
    descricao: 'Proteja seus painéis solares e inversores contra intempéries climáticas, quedas de raio e roubo.',
    shortDescription: 'Proteção patrimonial contra danos, tempestades, roubo e raios para usinas e placas solares.',
    beneficios: ['Danos por Vendaval e Granizo', 'Descargas Elétricas', 'Roubo e Furto Qualificado'],
    imagemUrl: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop',
    category: 'Especializado',
    badge: 'Energia Sustentável Protegida',
    carouselKicker: 'Seguro',
    carouselTitle: 'Fotovoltaico',
    carouselDesc: 'Blindagem para o seu investimento em energia solar contra granizo, raios e roubo.',
    carouselAction: 'FAÇA COTAÇÃO',
    heroHeadline: 'Blindagem completa para o seu investimento em energia solar',
    heroSubheadline: 'Proteja seus módulos, inversores e estruturas contra granizo, vendavais, danos elétricos e roubo.',
    coverageHighlights: [
      'Cobertura contra granizo, vendaval, raios e tempestades severas',
      'Proteção contra sobrecargas elétricas em inversores e transformadores',
      'Subtração de módulos solares e cabos de cobre',
      'Danos físicos acidentais na instalação e operação contínua',
      'Responsabilidade civil em caso de desprendimento de painéis',
    ],
    idealFor: 'Proprietários de residências, empresas, integradores solares e investidores de usinas.',
    accentColor: 'from-amber-600 to-orange-700',
    whyChooseJrx: [
      {
        title: 'Especialistas no Ramo Solar',
        description: 'Entendemos a tecnologia fotovoltaica para não deixar lacunas na apólice.',
      },
      {
        title: 'Válido para Telhado ou Solo',
        description: 'Planos desenhados tanto para microgeração residencial quanto usinas de solo.',
      },
      {
        title: 'Cotação Rápida com Ficha Técnica',
        description: 'Envie a potência (kWp) e a foto do inversor no WhatsApp para receber o comparativo.',
      },
    ],
    benefitsDetails: [
      {
        title: 'Danos por Vendaval e Granizo',
        description: 'Proteção contra as maiores causas de perda total de placas solares no Brasil.',
        iconName: 'SunMedium',
      },
      {
        title: 'Descargas Elétricas',
        description: 'Reposição rápida de inversores danificados por surtos atmosféricos.',
        iconName: 'Zap',
      },
      {
        title: 'Roubo e Furto Qualificado',
        description: 'Indenização contra invasão de fazendas solares e depósitos de placas.',
        iconName: 'ShieldAlert',
      },
    ],
    faqs: [
      {
        question: 'O seguro cobre usinas solares já financiadas?',
        answer: 'Sim, atende todas as exigências das instituições financeiras e bancos para liberação e manutenção de financiamentos solares.',
      },
      {
        question: 'O seguro cobre quebra de módulos por granizo ou vendaval?',
        answer: 'Sim, a cobertura contra vendaval, tempestades e granizo garante a indenização para reposição das placas avariadas e custos de mão de obra de reparo.',
      },
      {
        question: 'Inversores queimados por descargas elétricas estão inclusos?',
        answer: 'Sim, danos elétricos e sobretensões causadas por raios ou oscilações de rede contam com proteção e reposição rápida de inversores e microinversores.',
      },
    ],
  },
  {
    id: 'maquinas-agricolas',
    slug: 'maquinas-agricolas',
    nome: 'Máquinas Agrícolas',
    name: 'Máquinas Agrícolas',
    titulo: 'A força do campo protegida de sol a sol.',
    descricao: 'Cobertura especializada para tratores, colheitadeiras e implementos agrícolas operarem sem parar.',
    shortDescription: 'Segurança no campo para tratores, colheitadeiras e pulverizadores não pararem na safra.',
    beneficios: ['Tombamento e Colisão', 'Incêndio na Lavoura', 'Roubo e Furto em Fazendas'],
    imagemUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1200&auto=format&fit=crop',
    category: 'Especializado',
    badge: 'Força no Agronegócio',
    carouselKicker: 'Seguro de',
    carouselTitle: 'Máquinas Agrícolas',
    carouselDesc: 'A força do campo protegida de sol a sol para tratores e colheitadeiras na safra.',
    carouselAction: 'SAIBA MAIS',
    heroHeadline: 'Garanta a força da sua lavoura com sua frota agrícola 100% protegida',
    heroSubheadline: 'Proteção completa para tratores, colheitadeiras e implementos contra acidentes, incêndio e furtos.',
    coverageHighlights: [
      'Proteção contra tombamento, abalroamento e acidentes operacionais',
      'Incêndio na palhada, combustão e explosões no campo',
      'Roubo e furto qualificado de maquinários e implementos na propriedade',
      'Danos elétricos nos computadores de bordo, GPS e pilotos automáticos',
      'Deslocamento por estradas e rodovias durante a safra',
    ],
    idealFor: 'Produtores rurais, cooperativas agrícolas e empresas de locação de maquinário pesado.',
    accentColor: 'from-emerald-800 to-green-950',
    whyChooseJrx: [
      {
        title: 'Vivência no Coração do Agro',
        description: 'Estamos sediados em Passos - MG e entendemos a urgência do calendário de safra.',
      },
      {
        title: 'Aceito em Bancos e Financiamentos',
        description: 'Apólices aprovadas para exigências de penhor do Pronaf, Moderfrota e bancos privados.',
      },
      {
        title: 'Acionamento Ágil no WhatsApp',
        description: 'Sem burocracia excessiva: suporte direto com quem entende da lida do campo.',
      },
    ],
    benefitsDetails: [
      {
        title: 'Tombamento e Colisão',
        description: 'Reparos rápidos para não paralisar o plantio ou a colheita em terrenos acidentados.',
        iconName: 'Tractor',
      },
      {
        title: 'Incêndio na Lavoura',
        description: 'Indenização contra propagação de chamas em áreas de cana, soja, milho ou café.',
        iconName: 'Flame',
      },
      {
        title: 'Roubo e Furto em Fazendas',
        description: 'Reposição do patrimônio maquinário contra ações criminosas no campo.',
        iconName: 'ShieldAlert',
      },
    ],
    faqs: [
      {
        question: 'O seguro cobre implementos agrícolas acoplados?',
        answer: 'Sim, podemos incluir grades, plantadeiras, pulverizadores e plataformas acopladas na mesma apólice com coberturas conjuntas.',
      },
      {
        question: 'Máquinas em trânsito por estradas de terra ou rodovias estão protegidas?',
        answer: 'Sim, a cobertura abrange acidentes de colisão, tombamento e queda em barrancos durante deslocamentos entre talhões ou propriedades rurais.',
      },
      {
        question: 'Como funciona a indenização em caso de incêndio durante a colheita?',
        answer: 'O sinistro por fogo na lavoura ou superaquecimento mecânico é indenizado com agilidade para permitir o aluguel emergencial de outra máquina ou reposição do bem.',
      },
    ],
  },
  {
    id: 'moto',
    slug: 'moto',
    nome: 'Seguro de Moto',
    name: 'Moto',
    titulo: 'Sua liberdade sobre duas rodas protegida.',
    descricao: 'Planos sob medida para motocicletas de alta ou baixa cilindrada com assistência e reboque 24h.',
    shortDescription: 'Proteção contra roubo, furto, batidas e assistência 24h para você pilotar com tranquilidade.',
    beneficios: ['Guincho Dedicado', 'Roubo e Furto 100% FIPE', 'Danos a Terceiros'],
    imagemUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
    category: 'Pessoa Física',
    badge: 'Mobilidade em Duas Rodas',
    carouselKicker: 'Seguro de',
    carouselTitle: 'Moto',
    carouselDesc: 'Sua liberdade sobre duas rodas protegida com guincho e reposição 100% FIPE.',
    carouselAction: 'FAÇA COTAÇÃO',
    heroHeadline: 'Pilote com tranquilidade e suporte completo na cidade ou na estrada',
    heroSubheadline: 'Proteção sob medida para motos de baixa, média e alta cilindrada, com guincho 24h e socorro mecânico.',
    coverageHighlights: [
      'Reposição integral de até 100% da tabela FIPE em caso de roubo ou furto',
      'Cobertura de colisão e reparação de danos materiais causados a terceiros',
      'Guincho especializado com rampa para transporte seguro de motocicletas',
      'Assistência mecânica, troca de bateria e socorro em panes',
      'Descontos em capacetes, jaquetas e oficinas parceiras',
    ],
    idealFor: 'Motociclistas urbanos, motoboys, proprietários de scooters e pilotos de big trails.',
    accentColor: 'from-amber-700 to-red-800',
    whyChooseJrx: [
      {
        title: 'Opções para Todas as Cilindradas',
        description: 'Temos planos para motos de 125cc até 1200cc com preços justos.',
      },
      {
        title: 'Cotação Apenas com a Placa',
        description: 'Envie a placa e CEP de pernoite no WhatsApp para receber o comparativo na hora.',
      },
      {
        title: 'Suporte Especializado em Sinistros',
        description: 'Guincho especializado acionado direto pelo WhatsApp em qualquer estrada.',
      },
    ],
    benefitsDetails: [
      {
        title: 'Guincho Dedicado',
        description: 'Transporte específico para motos que preserva a carenagem e estrutura.',
        iconName: 'Compass',
      },
      {
        title: 'Roubo e Furto 100% FIPE',
        description: 'Receba o valor de mercado sem surpresas ou letras miúdas.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Danos a Terceiros',
        description: 'Proteção contra despesas geradas a pedestres ou outros motoristas no trânsito.',
        iconName: 'Shield',
      },
    ],
    faqs: [
      {
        question: 'O seguro de moto aceita motos usadas ou de trabalho?',
        answer: 'Sim, trabalhamos com planos para motos de trabalho (delivery) e também planos completos para lazer e viagens.',
      },
      {
        question: 'Como funciona o guincho 24h para motos?',
        answer: 'O reboque conta com caminhão plataforma apropriado para motos, prestando socorro imediato em caso de pane mecânica, pneu furado ou acidente.',
      },
      {
        question: 'A indenização por roubo cobre 100% da Tabela FIPE?',
        answer: 'Sim, as apólices intermediadas pela JRX garantem o reembolso integral de 100% da Tabela FIPE vigente na data da liquidação do sinistro.',
      },
    ],
  },
  {
    id: 'fianca-locaticia',
    slug: 'fianca-locaticia',
    nome: 'Fiança Locatícia',
    name: 'Fiança Locatícia',
    titulo: 'Alugue seu imóvel sem fiador e sem dor de cabeça.',
    descricao: 'Substitui o fiador e o depósito caução com aprovação imediata e segurança para o proprietário.',
    shortDescription: 'Alugue sem fiador ou caução. Segurança para o proprietário e agilidade para o inquilino.',
    beneficios: ['Zero Caução ou Fiador', 'Aluguel Garantido em Dia', 'Assistência Reparos no Imóvel'],
    imagemUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
    category: 'Patrimonial',
    badge: 'Locação Descomplicada',
    carouselKicker: 'Garantia de',
    carouselTitle: 'Fiança Locatícia',
    carouselDesc: 'Alugue sem fiador ou caução. Segurança para o proprietário e agilidade no aluguel.',
    carouselAction: 'CONHEÇA',
    heroHeadline: 'Alugue seu imóvel sem precisar de fiador ou depósito caução',
    heroSubheadline: 'Aprovação ágil do cadastro para inquilinos e garantia de recebimento pontual do aluguel para proprietários.',
    coverageHighlights: [
      'Garantia do pagamento do aluguel e encargos locatícios até a desocupação',
      'Cobertura para condomínio, IPTU, água, luz e gás encanado',
      'Proteção contra danos materiais e pintura interna/externa do imóvel',
      'Assistência 24h gratuita para pequenos consertos hidráulicos e elétricos',
      'Suporte jurídico completo incluso para imobiliárias e locadores',
    ],
    idealFor: 'Inquilinos que buscam agilidade, proprietários que não abrem mão de segurança e imobiliárias.',
    accentColor: 'from-slate-700 to-indigo-900',
    whyChooseJrx: [
      {
        title: 'Análise de Cadastro em Poucas Horas',
        description: 'Processo digital pelo WhatsApp sem necessidade de reconhecer firma em cartório.',
      },
      {
        title: 'Parcelamento Mensal do Seguro',
        description: 'O valor da garantia é diluído no boleto do aluguel sem pesar no orçamento.',
      },
      {
        title: 'Parceria com as Melhores Imobiliárias',
        description: 'Trabalhamos com os produtos de fiança mais aceitos pelo mercado imobiliário.',
      },
    ],
    benefitsDetails: [
      {
        title: 'Zero Caução ou Fiador',
        description: 'Dispensa o constrangimento de pedir favor a parentes ou imobilizar 3 meses de caução.',
        iconName: 'Key',
      },
      {
        title: 'Aluguel Garantido em Dia',
        description: 'Proprietário recebe rigorosamente na data acordada, mesmo se o inquilino atrasar.',
        iconName: 'CheckCircle',
      },
      {
        title: 'Assistência Reparos no Imóvel',
        description: 'Inquilino conta com serviços gratuitos de encanador, eletricista e chaveiro.',
        iconName: 'Home',
      },
    ],
    faqs: [
      {
        question: 'Quem paga o seguro fiança locatícia?',
        answer: 'Geralmente o custo é pago pelo inquilino, diluído mês a mês junto com o boleto do aluguel.',
      },
      {
        question: 'Quanto tempo leva para aprovar o cadastro do inquilino?',
        answer: 'A análise é 100% digital e realizada em minutos pelo WhatsApp com documentação simplificada (RG, CPF e comprovante de renda).',
      },
      {
        question: 'Quais garantias o proprietário do imóvel recebe?',
        answer: 'O locador tem a certeza do recebimento pontual do aluguel, condomínio, IPTU e contas de consumo até a desocupação do imóvel, além de assistência jurídica gratuita.',
      },
    ],
  },
  {
    id: 'consorcios',
    slug: 'consorcios',
    nome: 'Consórcios',
    name: 'Consórcios',
    titulo: 'Conquiste imóveis e veículos sem pagar juros.',
    descricao: 'Planejamento financeiro inteligente para adquirir bens de alto valor de forma parcelada e econômica.',
    shortDescription: 'Planeje a conquista da sua casa própria ou carro novo sem pagar juros abusivos.',
    beneficios: ['Sem Juros de Financiamento', 'Poder de Compra à Vista', 'Flexibilidade de Lances'],
    imagemUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
    category: 'Pessoa Física',
    badge: 'Planejamento Financeiro Inteligente',
    carouselKicker: 'Planejamento em',
    carouselTitle: 'Consórcios',
    carouselDesc: 'Conquiste imóveis e veículos novos sem pagar juros abusivos de financiamento.',
    carouselAction: 'FAÇA COTAÇÃO',
    heroHeadline: 'Conquiste seu patrimônio com disciplina e economia, livre de juros',
    heroSubheadline: 'O caminho mais inteligente para comprar imóveis, veículos, terrenos ou reformar sem juros de financiamento.',
    coverageHighlights: [
      'Cartas de crédito para imóveis residenciais, comerciais, terrenos ou reformas',
      'Consórcio para automóveis zero km, seminovos, frotas e caminhões',
      'Uso do FGTS para ofertar lances ou abater o saldo devedor imobiliário',
      'Parcelas flexíveis de 36 até 200 meses que se ajustam ao seu fluxo de caixa',
      'Possibilidade de lance embutido usando até 30% do próprio crédito',
    ],
    idealFor: 'Pessoas e investidores que desejam comprar imóveis ou veículos sem perder dinheiro em juros bancários.',
    accentColor: 'from-blue-900 to-slate-900',
    whyChooseJrx: [
      {
        title: 'Consultoria Estratégica de Lances',
        description: 'Analisamos o histórico dos grupos para maximizar suas chances de contemplação rápida.',
      },
      {
        title: 'Administradoras Supervisionadas pelo Bacen',
        description: 'Trabalhamos com os maiores bancos e administradoras autorizadas pelo Banco Central.',
      },
      {
        title: 'Simulação Gratuita no WhatsApp',
        description: 'Simulamos na hora o valor da parcela ideal para o valor do bem que você deseja.',
      },
    ],
    benefitsDetails: [
      {
        title: 'Sem Juros de Financiamento',
        description: 'Apenas uma taxa de administração diluída, economizando até 70% comparado ao financiamento.',
        iconName: 'PiggyBank',
      },
      {
        title: 'Poder de Compra à Vista',
        description: 'Ao ser contemplado, negocie descontos agressivos pagando à vista com a carta de crédito.',
        iconName: 'Coins',
      },
      {
        title: 'Flexibilidade de Lances',
        description: 'Acelere sua contemplação com lance livre ou lance embutido sem desembolsar dinheiro do bolso.',
        iconName: 'Award',
      },
    ],
    faqs: [
      {
        question: 'Qual a diferença entre consórcio e financiamento tradicional?',
        answer: 'No financiamento você paga juros compostos que duplicam ou triplicam o valor do bem. No consórcio não há juros, apenas uma taxa de administração previsível e diluída.',
      },
      {
        question: 'Posso usar meu carro usado ou FGTS como lance?',
        answer: 'Sim! No consórcio imobiliário você pode utilizar o saldo do FGTS para ofertar lance. No consórcio de automóvel, algumas administradoras avaliam seu veículo usado.',
      },
      {
        question: 'Como funciona o lance embutido no consórcio?',
        answer: 'O lance embutido permite utilizar um percentual da própria carta de crédito (até 30%) para ofertar lance e antecipar a contemplação sem precisar desembolsar dinheiro do bolso.',
      },
    ],
  },
];

// Alias export para manter compatibilidade total
export const SEGUROS_DATA = segurosData;
