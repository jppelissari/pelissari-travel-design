import type { SiteContent } from './types';

export const ptContent: SiteContent = {
  nav: {
    openMenu: 'Abrir Menu',
    inicio: 'Início',
    antesDaReserva: 'Antes da Reserva',
    sampleBlueprint: 'Sample Blueprint',
    servicos: 'Serviços',
    faq: 'FAQ',
    cta: 'Agendar Diagnóstico',
  },

  footer: {
    tagline: 'Design first. Booking second. Perks third.',
    taglineMantra:
      'Mantra para estruturação de itinerários complexos com precisão arquitetônica, garantindo que o design da viagem dite a execução.',
    safePayments: 'Infraestrutura Segura de Pagamentos',
    navTitle: 'Navegação',
    navHome: 'Início Comercial',
    navAntesDaReserva: 'Antes da Reserva',
    navSampleBlueprint: 'Sample Blueprint',
    accessTitle: 'Acesso',
    accessLabel: 'Área Exclusiva',
    legalTitle: 'Legal',
    terms: 'Termos de Serviço',
    privacy: 'Política de Privacidade',
    madeIn: 'Made in the US / Operated Globally',
  },

  home: {
    hero: {
      badge: 'Design first. Booking second.',
      title: 'Clareza na viagem, antes da reserva.',
      description:
        'Estruturamos viagens complexas antes de qualquer compromisso com voos, hotéis ou experiências — para que você entenda a rota, o ritmo, os riscos e a ordem certa de reserva antes de gastar errado.',
      ctaMain: 'Agendar Diagnóstico de Escopo',
      ctaSecondary: 'Ver Sample Blueprint',
    },

    problem: {
      title: 'O problema não é falta de opções. É falta de estrutura.',
      p1: 'Você pode ter listas salvas, recomendações de amigos, vídeos, guias, mapas e um roteiro gerado por IA. Ainda assim, a decisão principal pode continuar em aberto: qual é a versão certa da viagem para o seu contexto?',
      p2: 'A diferença entre uma viagem boa no papel e uma viagem boa no corpo está na sequência, no ritmo, nas transições, na escolha das bases e no que fica de fora.',
    },

    method: {
      eyebrow: 'Visual Method',
      title: 'ARQUITETURA DA VIAGEM',
      description:
        'Delineamento de rota, ritmo, bases de hospedagem, transições, omissões intencionais e ordem de reserva.',
      cta: 'Ver Sample Blueprint',
    },

    insights: {
      title: 'Achados Antes da Reserva',
      description:
        'Pequenas decisões tomadas cedo mudam a viagem inteira. Estes são exemplos do tipo de leitura que fazemos antes de qualquer hotel, voo ou experiência ser confirmado.',
      cardLabels: {
        error: 'Erro comum',
        read: 'Leitura Pelissari',
        decision: 'Decisão recomendada',
        cta: 'Ver como isso aparece no Blueprint',
      },
      seeAll: 'Ver todos os achados estratégicos',
      items: [
        {
          title: 'O problema de começar o Japão por Tóquio',
          error: 'Seguir a porta de entrada internacional e iniciar pela cidade mais intensa.',
          read: 'Depois de um voo longo, o corpo ainda não está pronto para absorver densidade, ruído e deslocamentos complexos.',
          decision: 'Começar por uma base mais silenciosa e deixar Tóquio para quando o viajante já estiver adaptado.',
        },
        {
          title: 'O custo oculto do overplanning de luxo',
          error: 'Transformar cada refeição, transfer e experiência em compromisso.',
          read: 'Excesso de confirmação parece segurança, mas pode eliminar presença, espontaneidade e recuperação física.',
          decision: 'Separar âncoras reais de espaços intencionalmente livres.',
        },
        {
          title: 'A armadilha da localização por conveniência',
          error: 'Escolher hotel apenas por proximidade com pontos turísticos ou estação central.',
          read: 'A base errada muda o ritmo de todos os dias. Um hotel pode ser excelente e ainda assim estar no lugar errado para aquela viagem.',
          decision: 'Escolher área por função da viagem, não apenas por mapa.',
        },
        {
          title: 'Quando cidades demais reduzem a qualidade da viagem',
          error: 'Adicionar mais uma base porque "parece perto" no mapa.',
          read: 'Cada troca de cidade cobra energia: malas, check-out, transferência, espera, check-in e readaptação.',
          decision: 'Cortar paradas que não adicionam valor proporcional ao custo físico e logístico.',
        },
        {
          title: 'A experiência certa no dia errado',
          error: 'Reservar experiências importantes antes de entender o ritmo da rota.',
          read: 'Uma experiência excelente pode virar obrigação se cair em um dia de chegada, cansaço ou transição pesada.',
          decision: 'Definir primeiro a cadência da viagem. Depois posicionar experiências âncora nos dias certos.',
        },
      ],
    },

    services: {
      title: 'Serviços de Design',
      description:
        'O planejamento é um ativo autônomo. A reserva vem depois, quando a estrutura da viagem já está clara.',
      includesLabel: 'Inclui',
      excludesLabel: 'Não inclui',
      items: [
        {
          title: 'Blueprint',
          price: 'US$350',
          description: 'Para quem quer clareza antes de reservar e pretende executar sozinho.',
          includes: [
            'Rota e sequência recomendada',
            'Ritmo e distribuição de noites',
            'Áreas de hospedagem por função da viagem',
            'Prioridades, omissões e decisões críticas',
            'Ordem recomendada de reserva',
          ],
          excludes: ['Reservas, emissões ou suporte em viagem'],
          cta: 'Iniciar Blueprint',
        },
        {
          title: 'Full Design',
          price: 'From US$1,500',
          description: 'Para quem quer o plano desenhado e apoio para transformar a direção em reservas.',
          includes: [
            'Tudo do Blueprint',
            'Shortlist de hotéis com lógica de escolha',
            'Recomendações de experiências e restaurantes',
            'Suporte pré-viagem conforme escopo',
            'Apoio de reserva quando contratado',
          ],
          excludes: [],
          cta: 'Contratar Full Design',
        },
        {
          title: 'Signature',
          price: 'By proposal',
          description: 'Para viagens complexas, significativas ou com alto custo de erro.',
          includes: [
            'Design completo da viagem',
            'Coordenação e contingência',
            'Transições críticas e pontos frágeis mapeados',
            'Suporte definido durante a viagem',
          ],
          excludes: [],
          cta: 'Solicitar Proposta',
        },
      ],
    },

    diagnostic: {
      title: 'O diagnóstico define o escopo certo. Não entrega planejamento gratuito.',
      description:
        'Em 20 minutos, avaliamos destino, prazo, orçamento, viajantes, complexidade e nível de suporte necessário. Depois da conversa, você recebe uma recomendação objetiva: Blueprint, Full Design, Signature — ou a orientação de que este não é o momento certo para trabalharmos juntos.',
      cta: 'Agendar Diagnóstico de Escopo',
    },

    faq: {
      title: 'Perguntas frequentes',
      items: [
        {
          q: 'Isso é uma agência de viagem?',
          a: 'Não no sentido tradicional. Pelissari Travel Design é um estúdio de planejamento e design de viagem. A primeira entrega é clareza: rota, ritmo, decisões críticas e ordem de reserva. Booking support pode ser adicionado conforme o escopo.',
        },
        {
          q: 'O Blueprint inclui reservas?',
          a: 'Não. O Blueprint é uma entrega de planejamento para quem quer entender a viagem antes de reservar. Ele orienta o que reservar, em que ordem e por quê, mas a execução fica com o cliente.',
        },
        {
          q: 'Por que pagar antes da reserva?',
          a: 'Porque as decisões mais caras costumam ser tomadas antes de qualquer hotel ser confirmado: rota, número de noites, base de hospedagem, ritmo e sequência. O Blueprint reduz o risco de comprometer dinheiro na estrutura errada.',
        },
        {
          q: 'Posso contratar ajuda para reservar depois?',
          a: 'Sim. Clientes de Blueprint podem evoluir para Full Design quando desejam apoio para transformar a estrutura aprovada em reservas e organização pré-viagem.',
        },
        {
          q: 'Vocês garantem upgrades, perks ou disponibilidade?',
          a: 'Não. Benefícios e disponibilidade dependem de hotéis, fornecedores, datas e regras de cada reserva. Quando booking support é contratado, algumas reservas podem ser feitas por canais profissionais quando apropriado, mas perks nunca são a promessa principal.',
        },
        {
          q: 'O diagnóstico é uma consultoria gratuita?',
          a: 'Não. O diagnóstico é uma conversa curta para entender fit, escopo e nível de suporte. Nenhuma rota, hotel ou recomendação específica é entregue nessa etapa.',
        },
      ],
    },
  },

  antesDaReserva: {
    eyebrow: 'Discovery & Intelligence',
    title: 'Antes da Reserva',
    description:
      'Nossa biblioteca de insights estruturais. Aqui nós desafiamos as premissas tradicionais do mercado de turismo de luxo local. Não compre pacotes baseados em impulsos visuais; compre a sequência correta.',
    filters: {
      all: 'Todos os Insights',
      routes: 'Estratégia de Rotas',
      pacing: 'Ritmo & Cadência',
      accommodations: 'Escolha de Acomodação',
      experiences: 'Experiências',
    },
    card: {
      readTime: '2 mins ler',
      commonMistake: 'Erro Comum:',
      pelissariRead: 'Pelissari Read:',
      decision: 'Decisão Pré-Reserva Recomendada:',
      share: 'Compartilhar',
      copied: 'Copiado para WhatsApp',
      read: 'Ler achado',
    },
    cta: {
      title: 'Sente incerteza sobre o percurso da sua próxima viagem?',
      description:
        'Nós podemos calibrar estas variáveis para o seu caso de forma personalizada. Nossos designers operam com clareza objetiva, isolando você de conselhos amadores e arrependimentos financeiros pós-reserva.',
      button: 'Agendar um Diagnóstico',
    },
  },

  finding: {
    backLabel: 'Antes da Reserva',
    referenceLabel: 'Referência:',
    diagnosticEyebrow: 'Diagnóstico de escopo',
    diagnosticTitle: 'Antes de reservar, vale confirmar se a estrutura sustenta a viagem.',
    sectionLabels: {
      commonMistake: 'O erro comum',
      whyItSeemsGood: 'Por que parece uma boa decisão',
      whereItFails: 'Onde a viagem começa a falhar',
      pelissariRead: 'A leitura Pelissari',
      decisionBeforeBooking: 'A decisão antes da reserva',
      blueprintAppearance: 'Como isso aparece no Blueprint',
    },
  },

  blueprint: {
    intro: {
      eyebrow: 'VISUAL PROOF OF METHOD',
      title: 'How a trip becomes a decision system.',
      p1: 'This sample Blueprint shows how Pelissari Travel Design turns an open-ended trip idea into a structured travel decision: route sequence, pacing, hotel-area logic, trade-offs, omissions, and booking order.',
      p2: 'It is not a generic itinerary. It is a planning document built to help the traveler understand what to book, what to skip, what to delay, and where the trip can fail before money is committed.',
      note: 'Sample content is sanitized. Names, booking references, supplier details, and private client information are omitted.',
      ctaMain: 'Agendar Diagnóstico de Escopo',
      ctaSecondary: 'Ver Achados Antes da Reserva',
    },

    reading: {
      title: 'Como ler este Blueprint',
      description:
        'Leia este documento como uma sequência de decisões, não como uma lista de lugares. A pergunta não é apenas "onde ir?", mas "em que ordem, com que ritmo, com quais omissões e com qual nível de suporte?"',
      cards: [
        {
          title: '1. Tese da rota',
          text: 'Resume a lógica principal da viagem. Ela explica por que a sequência proposta existe e qual problema ela resolve.',
        },
        {
          title: '2. Sequência e ritmo',
          text: 'Mostra como as cidades, noites e deslocamentos foram organizados para reduzir fricção e preservar energia.',
        },
        {
          title: '3. Decisões críticas',
          text: 'Expõe escolhas que precisam ser feitas antes da reserva: o que priorizar, o que adiar e o que remover.',
        },
        {
          title: '4. Omissões intencionais',
          text: 'Um bom Blueprint não adiciona tudo. Ele também mostra o que foi deixado de fora para proteger a qualidade da viagem.',
        },
        {
          title: '5. Ordem de reserva',
          text: 'Indica o que deve ser confirmado primeiro para evitar travar a viagem na sequência errada.',
        },
      ],
    },

    proof: {
      title: 'O que este sample prova',
      description:
        'O valor do Blueprint não está em listar recomendações. Está em tornar visível o raciocínio por trás da viagem: onde começar, onde desacelerar, onde concentrar esforço, onde não gastar energia e quais decisões precisam vir antes das reservas.',
      cta: 'Criar meu Blueprint',
    },

    sample: {
      eyebrow: 'Visual Method Proof',
      title: 'Japan: The Pragmatic Approach to a High-Intensity First Trip',
      description:
        'Mapeamento logístico real resolvendo os maiores gargalos de fadiga térmica, fusão de fusos horários e sobreposição de experiências para viagens de 14 dias em solo japonês.',
    },

    context: {
      title: 'Trip Context',
      travelers: { label: 'Viajantes:', value: 'Casal (Primeira vez no Japão)' },
      duration: { label: 'Duração total:', value: '14 Dias / 13 Noites' },
      profile: {
        label: 'Perfil Psicográfico:',
        value:
          'Alto interesse em cultura, arte e gastronomia. Risco agudo de exaustão sensorial. Busca conforto dinâmico sem excesso de trocas de hotel.',
      },
    },

    bookingOrder: {
      title: 'Booking Order Strategy',
      phases: [
        {
          label: 'Fase 1 (Precedência Imediata)',
          title: 'O Ryokan tradicional em Kanazawa',
          description:
            'Acomodações tradicionais de alto padrão têm no máximo 8 a 12 quartos. Elas ditam a data âncora de todo o percurso.',
        },
        {
          label: 'Fase 2 (6 Meses antes)',
          title: 'Kyoto & Tokyo Hubs',
          description: 'Definição dos hotéis das duas bases metropolitanas principais.',
        },
        {
          label: 'Fase 3 (30-60 Dias antes)',
          title: 'Shinkansen & Jantares Michelin',
          description: 'Abertura de janelas de reservas de gastronomia refinada e assentos de trem rápido.',
        },
      ],
    },

    riskFlags: {
      title: 'Risk Flags Mapeados',
      items: [
        {
          title: '• Logística de Malas:',
          description:
            'As regras de bagagem nos trens rápidos Shinkansen são severas e restritas. Exige despacho sob demanda (Yamato Express) entre Kyoto e Tóquio.',
        },
        {
          title: '• Saturação de Coletivos em Kyoto:',
          description:
            'O transporte de ônibus públicos em Kyoto sofre de superlotação severa. O planejamento de rotas de visitas precisa privilegiar linhas ferroviárias privadas ou rotas à pé nas madrugadas.',
        },
        {
          title: '• Overload de Menu Kaiseki:',
          description:
            'Agendar degustações pesadas todas as noites induz cansaço de paladar ocidental. Misturamos izakayas informais no planejamento.',
        },
      ],
    },

    routeThesis: {
      title: 'Tese de Rota: A Sequência Contraintuitiva',
      p1: 'Roteiros de mercado tradicionais pousam na intensa Tóquio. Isso sobrecarrega o viajante logo de partida com escalas monstruosas, tráfego frenético e conflito de fuso horário, logo após um vôo de quase 30 horas de duração.',
      p2: 'A nossa engenharia de percurso inverte este padrão.',
      p3: 'Nós mandamos o casal aterrissar em Osaka (KIX) ou realizar voo de conexão interna direta de Tóquio para o aeroporto de Kyoto. Essa chegada secundária acomoda os sentidos em meio à atmosfera calma e silenciosa de Kyoto nos primeiros dias. A viagem então progride em termos de densidade urbana, alcançando o clímax frenético de Tóquio apenas na segunda metade da viagem, quando os viajantes estão fisicamente adaptados e logisticamente confiantes.',
    },

    sequence: {
      title: 'Destination & Density Sequence',
      densityLabel: 'Densidade de Fluxo:',
      areaLabel: 'Diretriz da Região & Bairro:',
      stops: [
        {
          name: 'Osaka / Kyoto',
          days: 'Dias 1-5',
          desc: 'Aterrisagem e aclimatação suave. Foco na cultura tradicional japonesa, templos budistas e ritmo lento anti-jetlag.',
          guidance:
            'Hospede-se nos distritos silenciosos de Sanjo ou Karasuma. Evite pernoitar próximo à Estação Central de Kyoto para evitar trânsito turístico em massa.',
        },
        {
          name: 'Kanazawa',
          days: 'Dias 6-8',
          desc: 'Oásis tradicional alternativo. Excelente preservação histórica samurai, artesanal de folhas de ouro de alta classe e ritmo de descompressão antes de grandes metrópoles.',
          guidance:
            'Esta parada é o âncora estrutural do meio da viagem para amortizar o cansaço. Reserve seu Ryokan clássico aqui.',
        },
        {
          name: 'Tokyo',
          days: 'Dias 9-14',
          desc: 'Clímax da viagem. Modernidade extrema, alta gastronomia internacional, compras premium em Aoyama/Omotesando e grandes museus de arte digital contemporânea.',
          guidance:
            'Default Marunouchi/Otemachi para luxo corporativo silencioso, ou Minami-Aoyama para proximidade a estúdio de design. Evite hospedar-se em Shinjuku se você deseja silêncio acústico.',
        },
      ],
    },

    omissions: {
      title: 'Decisões Críticas: O que omitimos (e o porquê)',
      description:
        'Saber o que cortar é tão estratégico quanto o que incluir. Projetamos viagens focando em profundidade de memória, reduzindo desperdício mecânico.',
      items: [
        {
          title: 'Hiroshima & Miyajima',
          description:
            'Uma rota clássica de pacotes genéricos que exige no mínimo 7 horas líquidas extras de trem Shamikansen apenas para passar uma única noite exaustiva. Isso induz cansaço de bagagem e retira valioso tempo de exploração de Kyoto. Retemos apenas para fascinados estritos por história militar.',
        },
        {
          title: 'Hakone & Monte Fuji (Pernoite)',
          description:
            'Região saturada pelo excesso de turismo massificado nos finais de semana, e com visões de montanha frequentemente obstruídas por névoa térmica. Substituímos estrategicamente por Kanazawa, que serve de ryokan luxuoso com as mesmas vantagens e maior calmaria de preservação cultural.',
        },
      ],
    },

    closing: {
      title: 'Crie o Blueprint sob medida da sua próxima viagem',
      description:
        'O Japão é apenas uma das dezenas de sequências complexas que dominamos de forma cirúrgica. Eliminamos o ruído das opiniões soltas e desenhamos a ordem impecável antes que você assine contratos de reserva.',
      cta: 'Fazer Meu Diagnóstico de Escopo',
    },
  },

  modal: {
    eyebrow: 'Avaliação de escopo',
    title: 'Agendar Diagnóstico',
    closeLabel: 'Fechar diagnóstico',
    info: 'Nenhuma decisão, rota ou reserva é feita nesta etapa. O diagnóstico serve para avaliar escopo, complexidade e fit antes de qualquer recomendação específica.',
    success: {
      title: 'Solicitação recebida.',
      description:
        'Recebemos seu diagnóstico inicial. Se houver fit, você receberá os próximos passos por email ou WhatsApp para agendar a conversa de escopo.',
      button: 'Concluir',
    },
    form: {
      name: 'Nome',
      email: 'Email',
      whatsapp: 'WhatsApp',
      destination: 'Destino ou região desejada',
      destinationPlaceholder: 'Ex: Japão, Itália...',
      dateWindow: 'Datas ou janela aproximada',
      dateWindowPlaceholder: 'Ex: outubro de 2026',
      duration: 'Duração aproximada',
      durationPlaceholder: 'Ex: 14 dias',
      travelers: 'Número de viajantes',
      travelersPlaceholder: 'Ex: 2 adultos',
      budget: 'Orçamento previsto em USD',
      budgetPlaceholder: 'Ex: US$20,000',
      occasion: 'Ocasião especial',
      occasionOptional: '(opcional)',
      occasionPlaceholder: 'Ex: lua de mel, aniversário...',
      alreadyBooked: 'O que já está reservado?',
      alreadyBookedPlaceholder: 'Informe reservas existentes ou escreva "Nada reservado".',
      biggestConcern: 'Maior desconforto hoje',
      biggestConcernPlaceholder: 'O que está dificultando as decisões da viagem?',
      consent:
        'Entendo que o diagnóstico é uma avaliação de escopo e não inclui recomendações específicas de rota, hotéis ou reservas.',
      submit: 'Solicitar Diagnóstico',
      submitting: 'Enviando...',
      errorPrefix: 'Não foi possível enviar sua solicitação agora. Tente novamente em alguns minutos ou escreva para',
      errorEmail: 'contato@pelissari.travel',
    },
  },
};
