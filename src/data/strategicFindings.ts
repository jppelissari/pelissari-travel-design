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
  pelissariRead: 'A leitura Pelissari',
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
    title: 'O custo oculto do overplanning de luxo',
    shortDeck: 'Uma agenda impecável pode consumir exatamente o espaço que faria a viagem valer a pena.',
    categoryId: 'pacing',
    eyebrow: 'Ritmo e cadência',
    sections: {
      commonMistake: 'Preencher manhãs, tardes e noites com guias, transfers, reservas difíceis e experiências consideradas essenciais.',
      whyItSeemsGood: 'A agenda cheia transmite controle, reduz o medo de perder algo importante e parece justificar o investimento feito na viagem.',
      whereItFails: 'Cada compromisso passa a depender do anterior. Pequenos atrasos criam tensão, o descanso vira culpa e boas descobertas precisam ser interrompidas para cumprir o próximo horário.',
      pelissariRead: 'Luxo não é densidade de compromissos. É ter decisões importantes resolvidas e, ainda assim, preservar margem para mudar de ritmo sem desorganizar a viagem.',
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

export function getStrategicFinding(slug: string): StrategicFinding | undefined {
  return strategicFindings.find((finding) => finding.slug === slug);
}
