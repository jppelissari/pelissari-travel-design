import type { SiteContent } from './types';

export const ptContent: SiteContent = {
  nav: {
    openMenu: 'Abrir Menu',
    inicio: 'Método',
    antesDaReserva: 'Antes da Reserva',
    sampleBlueprint: 'Blueprint',
    servicos: 'Serviços',
    faq: 'FAQ',
    fitCall: 'Fit Call',
    client: 'Cliente',
    cta: 'Solicitar Diagnóstico',
  },

  footer: {
    tagline: 'Clareza de viagem, antes do compromisso.',
    taglineMantra: 'Lógica de rota antes das reservas.',
    safePayments: 'Planejamento Antes do Compromisso',
    navTitle: 'Navegação',
    navHome: 'Início Comercial',
    navAntesDaReserva: 'Antes da Reserva',
    navSampleBlueprint: 'Blueprint de Exemplo',
    accessTitle: 'Acesso',
    accessLabel: 'Área Exclusiva',
    legalTitle: 'Legal',
    terms: 'Termos de Serviço',
    privacy: 'Política de Privacidade',
    madeIn: 'Criado nos EUA / Operação global',
  },

  home: {
    hero: {
      badge: 'Private Travel Design Studio',
      title: 'Clareza de viagem, antes do compromisso.',
      description:
        'Estruturamos viagens complexas antes de qualquer compromisso com voos, hotéis ou experiências — para que você entenda a rota, o ritmo, os riscos e a ordem certa de reserva antes de gastar errado.',
      ctaMain: 'Solicitar Diagnóstico',
      ctaSecondary: 'Ver Blueprint de Exemplo',
    },

    problem: {
      title: 'O problema não é falta de opções. É falta de estrutura.',
      pillars: [
        { label: 'Sequência', detail: 'A ordem das bases antes de qualquer voo confirmado.' },
        { label: 'Ritmo', detail: 'Como distribuir noites sem desperdiçar energia.' },
        { label: 'Transições', detail: 'O que acontece entre as bases: logística e custo oculto.' },
        { label: 'Área', detail: 'Onde ficar e o impacto direto no cotidiano da viagem.' },
        { label: 'Omissões', detail: 'O que retirar para elevar a qualidade do que fica.' },
      ],
      connector: 'Estas cinco variáveis definem a diferença entre uma viagem que funciona e uma que desaponta.',
    },

    method: {
      eyebrow: 'Método Visual',
      title: 'ARQUITETURA DA VIAGEM',
      description:
        'Delineamento de rota, ritmo, bases de hospedagem, transições, omissões intencionais e ordem de reserva.',
      cta: 'Ver Blueprint de Exemplo',
    },

    insights: {
      title: 'Achados Antes da Reserva',
      description:
        'Pequenas decisões tomadas cedo mudam a viagem inteira. Estes são exemplos do tipo de leitura que fazemos antes de qualquer hotel, voo ou experiência ser confirmado.',
      cardLabels: {
        error: 'Erro comum',
        read: 'Leitura ELUZA',
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
          title: 'O custo oculto do overplanning',
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
          price: 'A partir de US$1.500',
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
          price: 'Sob proposta',
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
      cta: 'Solicitar Diagnóstico de Escopo',
    },

    faq: {
      title: 'Perguntas frequentes',
      items: [
        {
          q: 'Isso é uma agência de viagem?',
          a: 'Não no sentido tradicional. ELUZA é um estúdio de planejamento e design de viagem. A primeira entrega é clareza: rota, ritmo, decisões críticas e ordem de reserva. O suporte de reservas pode ser adicionado conforme o escopo.',
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
          q: 'Vocês garantem upgrades, benefícios ou disponibilidade?',
          a: 'Não. Benefícios e disponibilidade dependem de hotéis, fornecedores, datas e regras de cada reserva. Quando o suporte de reservas é contratado, algumas reservas podem ser feitas por canais profissionais quando apropriado, mas benefícios nunca são a promessa principal.',
        },
        {
          q: 'O diagnóstico é uma consultoria gratuita?',
          a: 'Não. O diagnóstico é uma conversa curta para entender compatibilidade, escopo e nível de suporte. Nenhuma rota, hotel ou recomendação específica é entregue nessa etapa.',
        },
      ],
    },
  },

  antesDaReserva: {
    eyebrow: 'Descoberta e Inteligência',
    title: 'Antes da Reserva',
    description:
      'Nossa biblioteca de insights estruturais. Aqui desafiamos premissas tradicionais do mercado de viagens. Não compre pacotes baseados em impulsos visuais; compre a sequência correta.',
    filters: {
      all: 'Todos os Insights',
      routes: 'Estratégia de Rotas',
      pacing: 'Ritmo & Cadência',
      accommodations: 'Escolha de Acomodação',
      experiences: 'Experiências',
    },
    card: {
      readTime: '2 min de leitura',
      commonMistake: 'Erro Comum:',
      pelissariRead: 'Leitura ELUZA:',
      decision: 'Decisão Pré-Reserva Recomendada:',
      share: 'Compartilhar',
      copied: 'Copiado para WhatsApp',
      read: 'Ler achado',
    },
    cta: {
      title: 'Sente incerteza sobre o percurso da sua próxima viagem?',
      description:
        'Nós podemos calibrar estas variáveis para o seu caso de forma personalizada. Nossos designers operam com clareza objetiva, isolando você de conselhos amadores e arrependimentos financeiros pós-reserva.',
      button: 'Solicitar Diagnóstico',
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
      pelissariRead: 'A leitura ELUZA',
      decisionBeforeBooking: 'A decisão antes da reserva',
      blueprintAppearance: 'Como isso aparece no Blueprint',
    },
  },

  blueprint: {
    intro: {
      eyebrow: 'PROVA VISUAL DO MÉTODO',
      title: 'Como uma viagem se torna um sistema de decisões.',
      p1: 'Este Blueprint de exemplo mostra como a ELUZA transforma uma ideia aberta de viagem em uma decisão estruturada: sequência, ritmo, lógica de hospedagem, trade-offs, omissões e ordem de reserva.',
      p2: 'Não é um roteiro genérico. É um documento de planejamento que esclarece o que reservar, o que retirar, o que adiar e onde a viagem pode falhar antes do compromisso financeiro.',
      note: 'O conteúdo de exemplo foi sanitizado. Nomes, referências de reserva, fornecedores e dados privados foram omitidos.',
      ctaMain: 'Solicitar Diagnóstico',
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
      title: 'O que este exemplo prova',
      description:
        'O valor do Blueprint não está em listar recomendações. Está em tornar visível o raciocínio por trás da viagem: onde começar, onde desacelerar, onde concentrar esforço, onde não gastar energia e quais decisões precisam vir antes das reservas.',
      cta: 'Criar meu Blueprint',
    },

    sample: {
      eyebrow: 'Prova Visual do Método',
      title: 'Japão: uma abordagem pragmática para a primeira viagem',
      description:
        'Mapeamento logístico real resolvendo os maiores gargalos de fadiga térmica, fusão de fusos horários e sobreposição de experiências para viagens de 14 dias em solo japonês.',
    },

    context: {
      title: 'Contexto da Viagem',
      travelers: { label: 'Viajantes:', value: 'Casal (Primeira vez no Japão)' },
      duration: { label: 'Duração total:', value: '14 Dias / 13 Noites' },
      profile: {
        label: 'Perfil Psicográfico:',
        value:
          'Alto interesse em cultura, arte e gastronomia. Risco agudo de exaustão sensorial. Busca conforto dinâmico sem excesso de trocas de hotel.',
      },
    },

    bookingOrder: {
      title: 'Estratégia de Ordem de Reserva',
      phases: [
        {
          label: 'Fase 1 (Precedência Imediata)',
          title: 'O Ryokan tradicional em Kanazawa',
          description:
            'Acomodações tradicionais de alto padrão têm no máximo 8 a 12 quartos. Elas ditam a data âncora de todo o percurso.',
        },
        {
          label: 'Fase 2 (6 Meses antes)',
          title: 'Bases de Kyoto e Tóquio',
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
      title: 'Riscos Mapeados',
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
          title: '• Excesso de Menus Kaiseki:',
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
      title: 'Sequência de Destinos e Densidade',
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
          name: 'Tóquio',
          days: 'Dias 9-14',
          desc: 'Clímax da viagem. Modernidade extrema, alta gastronomia internacional, compras premium em Aoyama/Omotesando e grandes museus de arte digital contemporânea.',
          guidance:
            'Priorize Marunouchi/Otemachi para silêncio e eficiência, ou Minami-Aoyama para proximidade a estúdios de design. Evite Shinjuku se o silêncio acústico for essencial.',
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
      cta: 'Solicitar Diagnóstico de Escopo',
    },
  },

  modal: {
    eyebrow: 'Avaliação de escopo',
    title: 'Solicitar Diagnóstico',
    closeLabel: 'Fechar diagnóstico',
    info: 'Nenhuma decisão, rota ou reserva é feita nesta etapa. O diagnóstico serve para avaliar escopo, complexidade e compatibilidade antes de qualquer recomendação específica.',
    success: {
      title: 'Solicitação recebida.',
      description:
        'Recebemos seu diagnóstico inicial. Se houver compatibilidade, você receberá os próximos passos por email ou WhatsApp para agendar a conversa de escopo.',
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
      errorEmail: 'josepelissari@jppelissari.com',
      sectionAbout: 'Sobre você',
      sectionTrip: 'Sobre a viagem',
      sectionContext: 'Contexto e decisões',
    },
  },

  clientAccess: {
    eyebrow: 'Área do Cliente',
    title: 'Acesso do Cliente',
    subtitle: 'Acesso privado aos seus documentos de design de viagem, blueprint e entrega da viagem.',
    panel: {
      title: 'Inserir chave de acesso',
      microcopy:
        'Chaves temporárias serão usadas para entregas privadas. Este protótipo mostra a estrutura futura de acesso.',
      placeholder: 'Chave de acesso',
      button: 'Continuar',
    },
    deliveriesTitle: 'Entregas disponíveis',
    deliveries: [
      {
        title: 'Trip Design Blueprint',
        description:
          'Rota, ritmo, áreas de hospedagem, prioridades e ordem de reserva antes do compromisso financeiro.',
      },
      {
        title: 'Full Design',
        description:
          'Uma entrega mais completa com shortlist de hotéis, orientação de experiências, estrutura pré-viagem e suporte de reserva quando escopado.',
      },
      {
        title: 'Signature Travel Architecture',
        description:
          'Uma entrega seletiva para viagens complexas que exigem coordenação, contingência, suporte definido e estrutura em viagem.',
      },
    ],
    demoLink: 'Ver exemplo de entrega do cliente',
  },
};
