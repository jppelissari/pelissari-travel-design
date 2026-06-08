export const strategicFindingSectionKeys = [
  'commonMistake',
  'whyItSeemsGood',
  'whereItFails',
  'pelissariRead',
  'decisionBeforeBooking',
  'blueprintAppearance',
] as const;

export type StrategicFindingSectionKey = (typeof strategicFindingSectionKeys)[number];

export interface StrategicFinding {
  slug: string;
  title: string;
  shortDeck: string;
  categoryId: 'routes' | 'pacing' | 'accommodations' | 'experiences';
  eyebrow: string;
  sections: Record<StrategicFindingSectionKey, string>;
  ctaLabel: string;
  blueprintReference?: string;
}

export const strategicFindingSectionLabels: Record<StrategicFindingSectionKey, string> = {
  commonMistake: 'O erro comum',
  whyItSeemsGood: 'Por que parece uma boa decisão',
  whereItFails: 'Onde a viagem começa a falhar',
  pelissariRead: 'A leitura ELUZA',
  decisionBeforeBooking: 'A decisão antes da reserva',
  blueprintAppearance: 'Como isso aparece no Blueprint',
};

export const strategicFindings: StrategicFinding[] = [
  {
    slug: 'japao-comecar-por-toquio',
    title: 'O problema de começar o Japão por Tóquio',
    shortDeck: 'A chegada mais simples no mapa nem sempre produz a melhor entrada na viagem.',
    categoryId: 'routes',
    eyebrow: 'Sequenciamento de rotas',
    sections: {
      commonMistake: 'Usar o aeroporto de chegada como argumento suficiente para definir a primeira base da viagem e começar por Tóquio sem avaliar energia, fuso ou sequência.',
      whyItSeemsGood: 'Evita uma conexão adicional depois de um voo longo, reduz a sensação de deslocamento e parece aproveitar imediatamente a principal porta de entrada do país.',
      whereItFails: 'Tóquio exige atenção desde o primeiro dia. Escala, navegação, estímulo e escolhas demais podem transformar a chegada em esforço operacional antes que o viajante tenha recuperado ritmo.',
      pelissariRead: 'A ordem deve responder à curva de energia da viagem, não apenas à lógica do bilhete aéreo. Em alguns perfis, começar por uma base mais legível cria contexto para que Tóquio seja vivida com presença no final.',
      decisionBeforeBooking: 'Comparar duas sequências completas antes de confirmar hotéis: Tóquio no início e Tóquio no fim. A escolha considera chegada, bagagem, fuso, duração e intensidade desejada.',
      blueprintAppearance: 'O Blueprint mostra as duas hipóteses de rota, explicita o custo de cada transição e recomenda a ordem que melhor protege energia e contraste.',
    },
    ctaLabel: 'Conversar sobre a estrutura da viagem',
    blueprintReference: 'Sequência de rota e lógica de chegada',
  },
  {
    slug: 'overplanning-de-luxo',
    title: 'O custo oculto do overplanning',
    shortDeck: 'Uma agenda impecável pode consumir exatamente o espaço que faria a viagem valer a pena.',
    categoryId: 'pacing',
    eyebrow: 'Ritmo e cadência',
    sections: {
      commonMistake: 'Preencher manhãs, tardes e noites com guias, transfers, reservas difíceis e experiências consideradas essenciais.',
      whyItSeemsGood: 'A agenda cheia transmite controle, reduz o medo de perder algo importante e parece justificar o investimento feito na viagem.',
      whereItFails: 'Cada compromisso passa a depender do anterior. Pequenos atrasos criam tensão, o descanso vira culpa e boas descobertas precisam ser interrompidas para cumprir o próximo horário.',
      pelissariRead: 'Qualidade não é densidade de compromissos. É ter decisões importantes resolvidas e, ainda assim, preservar margem para mudar de ritmo sem desorganizar a viagem.',
      decisionBeforeBooking: 'Definir quais momentos realmente pedem horário fixo e proteger intervalos sem programação entre eles. Um dia não precisa provar seu valor a cada hora.',
      blueprintAppearance: 'O Blueprint distingue âncoras, opções e espaços deliberadamente livres, mostrando onde a agenda precisa de estrutura e onde precisa respirar.',
    },
    ctaLabel: 'Avaliar o ritmo da viagem',
    blueprintReference: 'Mapa de ritmo e densidade diária',
  },
  {
    slug: 'localizacao-por-conveniencia',
    title: 'A armadilha da localização por conveniência',
    shortDeck: 'Estar perto de tudo pode significar estar no lugar errado para viver bem os dias.',
    categoryId: 'accommodations',
    eyebrow: 'Lógica de hospedagem',
    sections: {
      commonMistake: 'Escolher o hotel pela menor distância até atrações conhecidas, estações centrais ou pontos que aparecem com frequência no roteiro.',
      whyItSeemsGood: 'A proximidade parece economizar tempo, simplificar deslocamentos e reduzir o risco de uma escolha pouco prática.',
      whereItFails: 'A área mais conveniente durante algumas horas pode ser ruidosa, impessoal ou desconectada do ritmo desejado no começo e no fim de cada dia.',
      pelissariRead: 'A localização do hotel não serve apenas à logística. Ela define o entorno cotidiano, a qualidade das pausas e a relação entre o viajante e a cidade.',
      decisionBeforeBooking: 'Avaliar o bairro como parte da experiência: manhã, noite, acesso real, ruído, caminhabilidade e compatibilidade com o modo de viajar.',
      blueprintAppearance: 'O Blueprint compara áreas, não apenas hotéis, e registra os trade-offs que justificam a base recomendada antes de qualquer tarifa ser confirmada.',
    },
    ctaLabel: 'Rever a lógica de hospedagem',
    blueprintReference: 'Diretriz de região e bairro',
  },
  {
    slug: 'cidades-demais',
    title: 'Quando cidades demais reduzem a qualidade da viagem',
    shortDeck: 'Adicionar uma parada parece ampliar a viagem. Muitas vezes, apenas divide sua atenção.',
    categoryId: 'routes',
    eyebrow: 'Arquitetura da viagem',
    sections: {
      commonMistake: 'Tratar cada cidade possível como uma oportunidade que precisa entrar na mesma viagem, especialmente quando os destinos parecem próximos no mapa.',
      whyItSeemsGood: 'Mais cidades sugerem melhor aproveitamento do voo, maior variedade e a sensação de que nada importante ficou de fora.',
      whereItFails: 'Check-outs, estações, aeroportos e novas orientações passam a ocupar os dias. A viagem acumula chegadas, mas perde continuidade e profundidade.',
      pelissariRead: 'Uma rota forte não maximiza destinos. Ela escolhe contrastes que merecem coexistir e dá a cada base tempo suficiente para produzir uma experiência distinta.',
      decisionBeforeBooking: 'Testar a retirada de uma cidade antes de reservar. O tempo recuperado deve ser comparado ao valor real que aquela parada adicionaria.',
      blueprintAppearance: 'O Blueprint torna visíveis noites úteis, custos de transição e omissões recomendadas para que a rota seja julgada pela qualidade, não pela contagem de lugares.',
    },
    ctaLabel: 'Testar a arquitetura da rota',
    blueprintReference: 'Rota recomendada e omissões',
  },
  {
    slug: 'experiencia-certa-dia-errado',
    title: 'A experiência certa no dia errado',
    shortDeck: 'Uma excelente escolha perde força quando ignora o que aconteceu antes e o que virá depois.',
    categoryId: 'experiences',
    eyebrow: 'Sequência de experiências',
    sections: {
      commonMistake: 'Reservar uma experiência desejada no primeiro horário disponível sem considerar chegada, deslocamentos, intensidade do dia ou sequência da viagem.',
      whyItSeemsGood: 'Garantir a vaga reduz incerteza e parece resolver uma prioridade antes que a disponibilidade desapareça.',
      whereItFails: 'A experiência acontece com pressa, cansaço ou atenção fragmentada. O problema não está na escolha em si, mas no contexto que a agenda criou ao redor dela.',
      pelissariRead: 'Experiências importantes precisam de preparação e consequência. O dia anterior, o intervalo de chegada e o ritmo posterior fazem parte da decisão.',
      decisionBeforeBooking: 'Confirmar primeiro a função daquele momento na viagem e só depois escolher data e horário. Disponibilidade deve informar a estrutura, não comandá-la sozinha.',
      blueprintAppearance: 'O Blueprint posiciona experiências-âncora dentro da curva de energia da rota e mostra quais dias devem permanecer flexíveis para protegê-las.',
    },
    ctaLabel: 'Examinar as decisões antes da reserva',
    blueprintReference: 'Experiências-âncora e ordem de reserva',
  },
];

export const strategicFindingsEn: StrategicFinding[] = [
  {
    slug: 'japao-comecar-por-toquio',
    title: 'The problem with starting Japan in Tokyo',
    shortDeck: 'The simplest arrival on a map does not always create the right opening for the trip.',
    categoryId: 'routes',
    eyebrow: 'Route sequencing',
    sections: {
      commonMistake: 'Use the arrival airport as sufficient reason to define the first base and start in Tokyo without evaluating energy, time-zone adjustment, or sequence.',
      whyItSeemsGood: 'It avoids another connection after a long flight and appears to make immediate use of the country’s main gateway.',
      whereItFails: 'Tokyo requires attention from the first day. Navigation, stimulus, and too many choices can turn arrival into operational work before the traveler has recovered.',
      pelissariRead: 'The order should respond to the trip’s energy curve, not only to the airline ticket. For some travelers, a more legible first base creates the context to experience Tokyo with presence later.',
      decisionBeforeBooking: 'Compare two complete sequences before confirming hotels: Tokyo at the beginning and Tokyo at the end. Judge arrival, luggage, time zone, duration, and desired intensity.',
      blueprintAppearance: 'The Blueprint compares both route hypotheses, makes each transition cost visible, and recommends the order that best protects energy and contrast.',
    },
    ctaLabel: 'Discuss the trip structure',
    blueprintReference: 'Route sequence and arrival logic',
  },
  {
    slug: 'overplanning-de-luxo',
    title: 'The hidden cost of overplanning',
    shortDeck: 'A flawless schedule can consume the space that would make the trip worthwhile.',
    categoryId: 'pacing',
    eyebrow: 'Rhythm and pacing',
    sections: {
      commonMistake: 'Fill mornings, afternoons, and evenings with guides, transfers, difficult reservations, and experiences treated as essential.',
      whyItSeemsGood: 'A full schedule signals control, reduces the fear of missing something important, and appears to justify the investment.',
      whereItFails: 'Every commitment depends on the previous one. Small delays create tension, rest produces guilt, and worthwhile discoveries must be interrupted.',
      pelissariRead: 'Quality is not commitment density. It is resolving important decisions while preserving room to change pace without disorganizing the trip.',
      decisionBeforeBooking: 'Define which moments genuinely require fixed times and protect open intervals between them. A day does not need to prove its value every hour.',
      blueprintAppearance: 'The Blueprint separates anchors, options, and intentionally open space, showing where the schedule needs structure and where it needs room.',
    },
    ctaLabel: 'Assess the trip rhythm',
    blueprintReference: 'Rhythm and daily-density map',
  },
  {
    slug: 'localizacao-por-conveniencia',
    title: 'The convenience-location trap',
    shortDeck: 'Being close to everything can mean staying in the wrong place for the daily experience.',
    categoryId: 'accommodations',
    eyebrow: 'Accommodation logic',
    sections: {
      commonMistake: 'Choose a hotel by shortest distance to known attractions, central stations, or frequently listed itinerary points.',
      whyItSeemsGood: 'Proximity appears to save time, simplify movement, and reduce the risk of an impractical choice.',
      whereItFails: 'The most convenient area for a few hours can be noisy, impersonal, or incompatible with the desired beginning and end of each day.',
      pelissariRead: 'Hotel location serves more than logistics. It defines the everyday surroundings, the quality of pauses, and the traveler’s relationship with the city.',
      decisionBeforeBooking: 'Evaluate the neighborhood as part of the experience: morning, evening, real access, noise, walkability, and compatibility with the travel style.',
      blueprintAppearance: 'The Blueprint compares areas, not only hotels, and records the trade-offs that justify the recommended base before any rate is confirmed.',
    },
    ctaLabel: 'Review accommodation logic',
    blueprintReference: 'Area and neighborhood guidance',
  },
  {
    slug: 'cidades-demais',
    title: 'When too many cities reduce trip quality',
    shortDeck: 'Adding a stop appears to expand the trip. Often, it only divides attention.',
    categoryId: 'routes',
    eyebrow: 'Trip architecture',
    sections: {
      commonMistake: 'Treat every possible city as an opportunity that must fit into the same trip, especially when destinations look close on a map.',
      whyItSeemsGood: 'More cities suggest better use of the flight, greater variety, and the feeling that nothing important was omitted.',
      whereItFails: 'Check-outs, stations, airports, and new orientations begin to occupy the days. The trip accumulates arrivals but loses continuity and depth.',
      pelissariRead: 'A strong route does not maximize destinations. It chooses contrasts worth combining and gives each base enough time to produce a distinct experience.',
      decisionBeforeBooking: 'Test removing one city before booking. Compare the recovered time with the real value that stop would add.',
      blueprintAppearance: 'The Blueprint makes useful nights, transition costs, and recommended omissions visible so the route is judged by quality, not place count.',
    },
    ctaLabel: 'Test the route architecture',
    blueprintReference: 'Recommended route and omissions',
  },
  {
    slug: 'experiencia-certa-dia-errado',
    title: 'The right experience on the wrong day',
    shortDeck: 'An excellent choice loses force when it ignores what happened before and what follows.',
    categoryId: 'experiences',
    eyebrow: 'Experience sequencing',
    sections: {
      commonMistake: 'Book a desired experience at the first available time without considering arrival, movement, day intensity, or trip sequence.',
      whyItSeemsGood: 'Securing the place reduces uncertainty and appears to resolve a priority before availability disappears.',
      whereItFails: 'The experience happens with haste, fatigue, or fragmented attention. The issue is not the choice itself, but the context created around it.',
      pelissariRead: 'Important experiences need preparation and consequence. The previous day, arrival interval, and following rhythm are part of the decision.',
      decisionBeforeBooking: 'Confirm the function of that moment in the trip first, then choose the date and time. Availability should inform the structure, not command it.',
      blueprintAppearance: 'The Blueprint positions anchor experiences within the route’s energy curve and shows which days should remain flexible to protect them.',
    },
    ctaLabel: 'Examine pre-booking decisions',
    blueprintReference: 'Anchor experiences and booking order',
  },
];

export function getStrategicFindings(lang: 'en' | 'pt' = 'pt'): StrategicFinding[] {
  return lang === 'en' ? strategicFindingsEn : strategicFindings;
}

export function getStrategicFinding(slug: string, lang: 'en' | 'pt' = 'pt'): StrategicFinding | undefined {
  return getStrategicFindings(lang).find((finding) => finding.slug === slug);
}
