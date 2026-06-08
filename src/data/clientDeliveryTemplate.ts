// ─────────────────────────────────────────────────────────────────
// Client Delivery Template — Data Types & Sample Data
// P1-B.2 | ELUZA
// ─────────────────────────────────────────────────────────────────

// ── Privacy Classification ──────────────────────────────────────
export type PrivacyLevel = 'public' | 'private' | 'sensitive' | 'shareable';

// Fields that carry a privacy level get this wrapper.
// Components call `reveal(field, isPrivateMode)` to get the display value.
export interface PrivateField<T = string> {
  value: T;
  maskedValue: T;
  privacyLevel: PrivacyLevel;
}

export function reveal<T>(field: PrivateField<T>, isPrivateMode: boolean): T {
  if (!isPrivateMode) return field.value;
  if (field.privacyLevel === 'private' || field.privacyLevel === 'sensitive') {
    return field.maskedValue;
  }
  return field.value;
}

// ── Service Tiers ────────────────────────────────────────────────
export type ServiceTier = 'blueprint' | 'full-design' | 'signature';

export const serviceTierLabel: Record<ServiceTier, string> = {
  'blueprint': 'Blueprint',
  'full-design': 'Full Design',
  'signature': 'Signature',
};

// ── Delivery Status ──────────────────────────────────────────────
export type DeliveryStatus = 'rascunho' | 'entregue' | 'em-revisao' | 'final';

export const deliveryStatusLabel: Record<DeliveryStatus, string> = {
  'rascunho': 'Rascunho',
  'entregue': 'Entregue',
  'em-revisao': 'Em Revisão',
  'final': 'Final',
};

// ── Visual Placeholders ──────────────────────────────────────────
export type PlaceholderType =
  | 'route-map'
  | 'destination-mood'
  | 'neighborhood-map'
  | 'transfer-diagram'
  | 'budget-allocation'
  | 'booking-timeline';

export const placeholderLabel: Record<PlaceholderType, string> = {
  'route-map': 'Mapa de Rota',
  'destination-mood': 'Imagem de Destino',
  'neighborhood-map': 'Mapa de Bairro',
  'transfer-diagram': 'Diagrama de Transferência',
  'budget-allocation': 'Alocação de Orçamento',
  'booking-timeline': 'Linha do Tempo de Reservas',
};

// ── Delivery Metadata ────────────────────────────────────────────
export interface DeliveryMeta {
  serviceTier: ServiceTier;
  tripTitle: string;
  clientDisplayName: PrivateField;
  destination: string;
  dateWindow: PrivateField;
  durationNights: number;
  travelerProfile: string;
  tripThesis: string;
  decisionSummary: string[];
  documentVersion: string;
  generatedAt: string;
  deliveryStatus: DeliveryStatus;
  revisionWindowDays: number | null;
  deliveryToken: PrivateField;
}

// ── Route Architecture ───────────────────────────────────────────
export interface RoutePhase {
  id: string;
  destination: string;
  nights: number;
  role: string;
  whyHere: string;
  whatItProtects: string;
  visualPlaceholder: PlaceholderType;
}

// ── Pacing ───────────────────────────────────────────────────────
export type EnergyLevel = 'baixo' | 'moderado' | 'intenso';
export type DecisionLoad = 'baixo' | 'médio' | 'alto';

export interface PacingRow {
  label: string;
  energyLevel: EnergyLevel;
  anchor: string;
  whiteSpace: string;
  decisionLoad: DecisionLoad;
  note?: string;
}

// ── Hotel Area Logic ─────────────────────────────────────────────
export interface HotelAreaEntry {
  area: string;
  bestFor: string;
  tradeOff: string;
  avoidIf: string;
  decisionNote: string;
  visualPlaceholder?: PlaceholderType;
}

// ── Experience Priorities ────────────────────────────────────────
export type ExperiencePriorityLevel = 'protect' | 'consider' | 'skip';

export const experiencePriorityLabel: Record<ExperiencePriorityLevel, string> = {
  protect: 'Proteger',
  consider: 'Considerar',
  skip: 'Adiar / Omitir',
};

export interface ExperienceItem {
  level: ExperiencePriorityLevel;
  name: string;
  whyItMatters: string;
  timingNote: string;
  decisionRationale: string;
}

// ── Budget & Booking Order ───────────────────────────────────────
export interface BudgetLogicEntry {
  category: string;
  guidance: string;
  action: 'protect' | 'flex' | 'avoid';
}

export interface BookingOrderEntry {
  priority: number;
  what: string;
  why: string;
  canWait: boolean;
  mustBeFlexible: boolean;
  reference?: PrivateField;
}

// ── Transition Design ────────────────────────────────────────────
export type TransitionType = 'chegada' | 'transfer' | 'partida';

export interface TransitionNote {
  id: string;
  type: TransitionType;
  label: string;
  description: string;
  pacingNote?: string;
  firstNinetyMinutes?: string;
  decisionLoadNote?: string;
}

// ── Risk & Contingency ───────────────────────────────────────────
export type RiskSeverity = 'info' | 'watch' | 'critical';

export interface RiskFlag {
  title: string;
  severity: RiskSeverity;
  description: string;
  tiersVisible: ServiceTier[];
  mitigation?: string;
}

// ── Scope Boundary ───────────────────────────────────────────────
export interface ScopeUpgradeItem {
  item: string;
  upgradeTo: ServiceTier;
  note: string;
}

export interface ScopeBoundary {
  included: string[];
  excluded: string[];
  requiresUpgrade: ScopeUpgradeItem[];
}

// ── Next Steps ───────────────────────────────────────────────────
export type NextStepType = 'review' | 'revision' | 'booking' | 'upgrade' | 'contact';

export interface NextStep {
  id: string;
  action: string;
  detail: string;
  cta?: string;
  type: NextStepType;
}

// ── Full Template ────────────────────────────────────────────────
export interface ClientDeliveryTemplate {
  meta: DeliveryMeta;
  routePhases: RoutePhase[];
  pacingRows: PacingRow[];
  hotelAreaLogic: HotelAreaEntry[];
  experiencePriorities: ExperienceItem[];
  budgetLogic: BudgetLogicEntry[];
  bookingOrder: BookingOrderEntry[];
  transitions: TransitionNote[];
  riskFlags: RiskFlag[];
  scopeBoundary: ScopeBoundary;
  nextSteps: NextStep[];
}

// ─────────────────────────────────────────────────────────────────
// Sample Data — Japão 2026
// Working copy only. Not final Portuguese/English.
// ─────────────────────────────────────────────────────────────────
export const sampleDeliveryTemplate: ClientDeliveryTemplate = {
  meta: {
    serviceTier: 'blueprint',
    tripTitle: 'Japão: The Pragmatic Approach',
    clientDisplayName: {
      value: 'Sr. Pedro Santos',
      maskedValue: 'Sr. P*** S***',
      privacyLevel: 'private',
    },
    destination: 'Japão',
    dateWindow: {
      value: '15 Mar – 1 Abr, 2026 (17 noites)',
      maskedValue: '*** – ***, 2026',
      privacyLevel: 'private',
    },
    durationNights: 17,
    travelerProfile: 'Casal, viagem longa-distância, primeira vez no Japão, preferência por densidade cultural moderada e acomodação de alto padrão.',
    tripThesis: 'Uma rota que protege a profundidade sobre a amplitude — priorizando Tóquio, Kanazawa e Kyoto em sequência deliberada, sem dispersão em destinos secundários.',
    decisionSummary: [
      'Osaka foi deliberadamente omitida para proteger o tempo de permanência em Kyoto.',
      'Kanazawa é a transição cultural de alto valor: ryokan exclusivo, onsen, quietude.',
      'A ordem de reserva começa pelo ryokan de Kanazawa — disponibilidade crítica.',
      'Orçamento protegido em acomodação e guias credenciados. Alimentação: flexível.',
    ],
    documentVersion: 'v1.0',
    generatedAt: '2026-06-06',
    deliveryStatus: 'entregue',
    revisionWindowDays: 5,
    deliveryToken: {
      value: 'PEL-JAP-2026-X8',
      maskedValue: 'PEL-***-****-**',
      privacyLevel: 'sensitive',
    },
  },

  routePhases: [
    {
      id: 'phase-tokyo',
      destination: 'Tóquio',
      nights: 3,
      role: 'Aclimatação e orientação logística',
      whyHere: 'Primeiro destino após voo longo. Fuso horário extremo — os primeiros dias são de ajuste, não de exploração densa. Marunouchi oferece silêncio e eficiência de transporte.',
      whatItProtects: 'Protege o restante da rota contra fadiga acumulada. Chegada sem pressão de entrega imediata.',
      visualPlaceholder: 'destination-mood',
    },
    {
      id: 'phase-kanazawa',
      destination: 'Kanazawa',
      nights: 2,
      role: 'Transição cultural de alto valor estético',
      whyHere: 'Vem após Tóquio para criar contraste deliberado: da metrópole ao Japão tradicional silencioso. O shinkansen para Kanazawa é direto e eficiente.',
      whatItProtects: 'Protege o casal de chegar a Kyoto já sobrecarregado. Kanazawa funciona como câmara de descompressão cultural.',
      visualPlaceholder: 'destination-mood',
    },
    {
      id: 'phase-kyoto',
      destination: 'Kyoto',
      nights: 4,
      role: 'Base cultural profunda — destino central da rota',
      whyHere: 'Posicionada no final da rota quando o casal está calibrado para absorção. Kyoto requer presença, não apenas visita.',
      whatItProtects: 'Protege a qualidade da experiência cultural central. Quatro noites permitem profundidade sem correria.',
      visualPlaceholder: 'route-map',
    },
  ],

  pacingRows: [
    {
      label: 'Dia 1–2',
      energyLevel: 'baixo',
      anchor: 'Chegada / Instalação Tóquio',
      whiteSpace: 'Alto — sem agenda estruturada',
      decisionLoad: 'baixo',
      note: 'Recovery de voo. Bairro de hotel walkable. Sem compromissos.',
    },
    {
      label: 'Dia 3',
      energyLevel: 'moderado',
      anchor: 'Tóquio — Exploração Estruturada',
      whiteSpace: 'Tarde livre',
      decisionLoad: 'médio',
    },
    {
      label: 'Dia 4',
      energyLevel: 'moderado',
      anchor: 'Transfer Tóquio → Kanazawa (Shinkansen)',
      whiteSpace: 'Chegada ao Ryokan à tarde',
      decisionLoad: 'baixo',
      note: 'Transfer ferroviário direto. Baixa carga logística.',
    },
    {
      label: 'Dia 5–6',
      energyLevel: 'baixo',
      anchor: 'Kanazawa — Ritmo de Ryokan',
      whiteSpace: 'Alto — onsen, jardins, refeições inclusas',
      decisionLoad: 'baixo',
      note: 'Intencionalmente lento. Preservar energia para Kyoto.',
    },
    {
      label: 'Dia 7',
      energyLevel: 'moderado',
      anchor: 'Transfer Kanazawa → Kyoto',
      whiteSpace: 'Check-in com folga',
      decisionLoad: 'baixo',
    },
    {
      label: 'Dia 8–9',
      energyLevel: 'intenso',
      anchor: 'Kyoto — Imersão Cultural com Guia',
      whiteSpace: 'Tarde dia 9 protegida',
      decisionLoad: 'alto',
      note: 'Dias de maior carga. Templos, guia credenciado, bairros históricos.',
    },
    {
      label: 'Dia 10',
      energyLevel: 'moderado',
      anchor: 'Kyoto — Exploração Independente',
      whiteSpace: 'Manhã livre',
      decisionLoad: 'médio',
    },
    {
      label: 'Dia 11',
      energyLevel: 'baixo',
      anchor: 'Kyoto — Espaço de Absorção / Partida preparatória',
      whiteSpace: 'Alto',
      decisionLoad: 'baixo',
      note: 'Dia de descanso antes do voo de retorno.',
    },
  ],

  hotelAreaLogic: [
    {
      area: 'Marunouchi / Chiyoda — Tóquio',
      bestFor: 'Chegada sem ruído, transporte eficiente, quietude noturna',
      tradeOff: 'Menos vibrante à noite. Não é o Tóquio "Instagram".',
      avoidIf: 'O viajante quer vida noturna ou gastronomia intensa como âncora.',
      decisionNote: 'Correto para a função desta fase: recuperação e orientação. A vivacidade de Shibuya viria cedo demais.',
      visualPlaceholder: 'neighborhood-map',
    },
    {
      area: 'Higashiyama / Gion — Kyoto',
      bestFor: 'Walkability para templos, atmosfera histórica, acesso a geishas',
      tradeOff: 'Turístico durante o dia. Ruído de grupos pela manhã.',
      avoidIf: 'O cliente é sensível a multidões matinais — considerar Arashiyama.',
      decisionNote: 'Posicionamento correto para 4 noites de imersão. Estar no bairro é parte da experiência.',
      visualPlaceholder: 'neighborhood-map',
    },
    {
      area: 'Higashi-Chaya — Kanazawa',
      bestFor: 'Autenticidade, proximidade ao Kenroku-en, atmosfera de geisha district',
      tradeOff: 'Opções de transporte mais limitadas.',
      avoidIf: 'O cliente precisa de mobilidade frequente a outras cidades.',
      decisionNote: 'Área correta dado o propósito do estágio: imersão, não logística.',
    },
  ],

  experiencePriorities: [
    {
      level: 'protect',
      name: 'Guia credenciado em Kyoto (2 dias)',
      whyItMatters: 'Sem contexto, Kyoto é apenas arquitetura. O guia transforma a visita em leitura cultural profunda.',
      timingNote: 'Dias 8 e 9 — reservar com antecedência mínima de 60 dias.',
      decisionRationale: 'Maior retorno de qualidade por investimento na rota inteira.',
    },
    {
      level: 'protect',
      name: 'Ryokan exclusivo em Kanazawa (2 noites)',
      whyItMatters: 'Define o tom da transição cultural. Sem ryokan, Kanazawa é apenas uma cidade menor que Kyoto.',
      timingNote: 'Temporada de alto calendário — reserva imediata.',
      decisionRationale: 'Disponibilidade crítica. É a âncora de mais alto risco logístico da rota.',
    },
    {
      level: 'consider',
      name: 'Cerimônia de Chá Privada em Kyoto',
      whyItMatters: 'Complementa o arco cultural da rota. Não é imprescindível mas adiciona camada.',
      timingNote: 'Pode ser organizado com 2–3 semanas de antecedência.',
      decisionRationale: 'Depende de energia disponível nos dias de Kyoto. Não forçar se Dias 8–9 forem intensos.',
    },
    {
      level: 'consider',
      name: 'Aula de Culinária Tradicional em Kyoto',
      whyItMatters: 'Bom break de ritmo entre dias culturais densos.',
      timingNote: 'Manhã do Dia 10 seria o slot ideal.',
      decisionRationale: 'Opcional. Confirmar após chegada se houver energia.',
    },
    {
      level: 'skip',
      name: 'Osaka (day trip ou estágio separado)',
      whyItMatters: 'Gastronomia interessante, mas adiciona carga logística sem aprofundar o arco da rota.',
      timingNote: 'Não há janela de tempo adequada sem comprometer Kyoto.',
      decisionRationale: 'Decisão deliberada de omissão. Osaka é uma viagem separada, não um acréscimo desta.',
    },
    {
      level: 'skip',
      name: 'Hiroshima / Miyajima',
      whyItMatters: 'Destino de alto valor histórico — mas requer extensão de rota significativa.',
      timingNote: 'Incompatível com 17 noites sem sacrificar profundidade em cada base.',
      decisionRationale: 'Omissão que protege qualidade. Recomendado como extensão em viagem futura.',
    },
  ],

  budgetLogic: [
    {
      category: 'Acomodação',
      guidance: 'Proteger. A qualidade do hotel define ritmo, recuperação e sensação geral da viagem. Não economizar aqui.',
      action: 'protect',
    },
    {
      category: 'Guias e experiências credenciadas',
      guidance: 'Proteger. O investimento em guia converte tempo em entendimento. Maior ROI cultural da rota.',
      action: 'protect',
    },
    {
      category: 'Gastronomia',
      guidance: 'Flexível. 2–3 refeições de alto padrão são suficientes. O restante pode ser ramen de bairro, soba local — experiência genuína por custo baixo.',
      action: 'flex',
    },
    {
      category: 'Souvenirs e compras',
      guidance: 'Não alocar antecipadamente. Deixar fluir no contexto. Evitar decisões de compra sob pressão.',
      action: 'flex',
    },
    {
      category: 'Passeios turísticos avulsos',
      guidance: 'Evitar pacotes genéricos. Preferir guia privativo ou exploração independente estruturada.',
      action: 'avoid',
    },
  ],

  bookingOrder: [
    {
      priority: 1,
      what: 'Ryokan — Kanazawa (2 noites)',
      why: 'Disponibilidade crítica. Ryokans exclusivos têm capacidade limitada.',
      canWait: false,
      mustBeFlexible: false,
      reference: {
        value: 'Asanoya Ryokan — Contato: +81-76-252-0022',
        maskedValue: '*** — Contato: ***',
        privacyLevel: 'sensitive',
      },
    },
    {
      priority: 2,
      what: 'Guia privativo — Kyoto (2 dias)',
      why: 'Guias credenciados em alta temporada têm agenda preenchida 60–90 dias antes.',
      canWait: false,
      mustBeFlexible: false,
      reference: {
        value: 'Guia Yuki Tanaka — yuki@kyoto-guides.jp',
        maskedValue: '*** — ***@***',
        privacyLevel: 'sensitive',
      },
    },
    {
      priority: 3,
      what: 'Hotel base — Tóquio (3 noites)',
      why: 'Confirmar antes de fechar voos internacionais para alinhamento de check-in.',
      canWait: false,
      mustBeFlexible: false,
    },
    {
      priority: 4,
      what: 'Hotel base — Kyoto (4 noites)',
      why: 'Alta temporada de primavera — disponibilidade reduz rapidamente.',
      canWait: false,
      mustBeFlexible: false,
    },
    {
      priority: 5,
      what: 'Voos internacionais',
      why: 'Confirmar após acomodações definidas para garantir coerência de datas.',
      canWait: false,
      mustBeFlexible: false,
      reference: {
        value: 'NH802 (ANA) — GRU → NRT',
        maskedValue: 'NH*** — *** → ***',
        privacyLevel: 'sensitive',
      },
    },
    {
      priority: 6,
      what: 'Voo interno Tóquio → Komatsu (Kanazawa)',
      why: 'Alternativa ao shinkansen se preferência por tempo. Confirmar após voos internacionais.',
      canWait: true,
      mustBeFlexible: false,
    },
    {
      priority: 7,
      what: 'Experiências opcionais (cerimônia de chá, culinária)',
      why: 'Pode aguardar chegada. Confirmar in loco ou com 2–3 semanas de antecedência.',
      canWait: true,
      mustBeFlexible: true,
    },
  ],

  transitions: [
    {
      id: 'arrival-tokyo',
      type: 'chegada',
      label: 'Chegada em Tóquio — Aeroporto de Narita',
      description: 'Voo de longa distância. Chegada com fadiga acumulada de 14–18 horas. Logística de alfândega e immigration pode consumir 60–90 min.',
      pacingNote: 'Não planejar atividade no dia de chegada. Check-in, alimentação leve, descanso.',
      firstNinetyMinutes: 'Narita Express para Shinjuku/Tóquio central (80 min). Transfer em taxi para hotel. Jantar leve no hotel ou próximo. Não explorar.',
      decisionLoadNote: 'Decisão crítica: não tentar fazer qualquer atividade turística no dia 1. A tentação existe — evitar.',
    },
    {
      id: 'transfer-tokyo-kanazawa',
      type: 'transfer',
      label: 'Transfer Tóquio → Kanazawa (Shinkansen)',
      description: 'Shinkansen de alta velocidade de Tóquio (Tokyo Station) para Kanazawa. Duração: ~2h30. Passagem JR Pass cobre o trecho.',
      pacingNote: 'Saída pela manhã permite chegada ao ryokan no final da tarde — timing ideal para banho onsen e jantar kaiseki.',
    },
    {
      id: 'transfer-kanazawa-kyoto',
      type: 'transfer',
      label: 'Transfer Kanazawa → Kyoto (Shinkansen)',
      description: 'Shinkansen via Osaka ou limited express para Kyoto. Duração: ~2h–2h45 dependendo da rota.',
      pacingNote: 'Saída após café da manhã no ryokan. Chegada Kyoto ao início da tarde — tempo para instalação e orientação de bairro sem compromisso.',
    },
  ],

  riskFlags: [
    {
      title: 'Disponibilidade de ryokan — risco crítico',
      severity: 'critical',
      description: 'Ryokans exclusivos de alta temporada têm 8–12 quartos. A janela de disponibilidade para março–abril (hanami) fecha rapidamente. Prioridade #1 de reserva.',
      tiersVisible: ['blueprint', 'full-design', 'signature'],
      mitigation: 'Reservar no prazo de 7 dias após aprovação deste documento.',
    },
    {
      title: 'Alta temporada de cherry blossom (hanami)',
      severity: 'watch',
      description: 'Março–abril é o pico de turismo em Kyoto. Kyoto recebe 3–4x o volume normal. Templos populares (Fushimi Inari, Arashiyama) terão multidões significativas antes das 8h.',
      tiersVisible: ['blueprint', 'full-design', 'signature'],
      mitigation: 'Visitas aos templos principais agendadas para abertura (antes das 8h). Guia privativo já ciente desta condição.',
    },
    {
      title: 'Fuso horário — impacto em dias 1–3',
      severity: 'info',
      description: 'Brasil–Japão: diferença de 12–13h. Impacto físico real nos primeiros 2–3 dias. Itinerário desenhado com baixa densidade nesses dias.',
      tiersVisible: ['blueprint', 'full-design', 'signature'],
    },
    {
      title: 'Coordenação pré-partida com fornecedores',
      severity: 'info',
      description: 'Confirmação de guia, transfers e preferências de ryokan deve ser feita 30 dias antes da partida.',
      tiersVisible: ['full-design', 'signature'],
      mitigation: 'Incluído no escopo Full Design — ELUZA coordena diretamente.',
    },
    {
      title: 'Suporte em contingências operacionais',
      severity: 'info',
      description: 'Cancelamentos de transporte, mudanças de clima, necessidades médicas — protocolo de contingência estruturado.',
      tiersVisible: ['signature'],
      mitigation: 'Incluído no escopo Signature — contato direto disponível nos dias de viagem.',
    },
  ],

  scopeBoundary: {
    included: [
      'Arquitetura da rota (sequência, durações, raciocínio)',
      'Lógica de área de hotel (não inclui reserva)',
      'Priorização de experiências (protect / consider / skip)',
      'Ordem de reserva recomendada',
      'Design de transições entre destinos',
      'Flags de risco identificados',
      'White spaces e pacing view',
      'Uma rodada de revisão incluída (5 dias a partir da entrega)',
    ],
    excluded: [
      'Reservas efetivadas (acomodações, voos, experiências)',
      'Negociação com fornecedores',
      'Acompanhamento durante a viagem',
      'Suporte operacional em tempo real',
      'Conteúdo gastronômico detalhado',
      'Recomendações de seguro viagem',
      'Documentação de visto',
    ],
    requiresUpgrade: [
      {
        item: 'Coordenação pré-partida com fornecedores',
        upgradeTo: 'full-design',
        note: 'ELUZA negocia e confirma diretamente com ryokan, guias e transfers.',
      },
      {
        item: 'Suporte durante a viagem e gestão de contingências',
        upgradeTo: 'signature',
        note: 'Contato direto disponível durante toda a estadia.',
      },
    ],
  },

  nextSteps: [
    {
      id: 'step-review',
      action: 'Revise este documento',
      detail: 'Leia as seções de Arquitetura de Rota, Lógica de Hotéis e Prioridades de Experiência. Este é um documento de decisão — não uma lista de atividades.',
      type: 'review',
    },
    {
      id: 'step-revision',
      action: 'Envie uma mensagem consolidada de revisão (se necessário)',
      detail: 'Se houver ajustes — envie uma mensagem única com todos os pontos. Sua rodada de revisão cobre 5 dias a partir desta entrega.',
      cta: 'Enviar revisão via WhatsApp',
      type: 'revision',
    },
    {
      id: 'step-booking',
      action: 'Confirme o ryokan de Kanazawa primeiro',
      detail: 'A reserva prioritária #1 tem disponibilidade crítica. Deve ser confirmada nos próximos 7 dias.',
      cta: 'Ver ordem de reserva recomendada',
      type: 'booking',
    },
    {
      id: 'step-upgrade',
      action: 'Considere upgrade para Full Design',
      detail: 'Se quiser que ELUZA coordene fornecedores e confirme reservas diretamente — o Full Design cobre isso.',
      cta: 'Agendar diagnóstico de upgrade',
      type: 'upgrade',
    },
    {
      id: 'step-contact',
      action: 'Dúvidas ou dificuldades com este documento?',
      detail: 'Entre em contato antes de tomar qualquer decisão baseada em informação incompleta.',
      cta: 'Falar com ELUZA',
      type: 'contact',
    },
  ],
};
