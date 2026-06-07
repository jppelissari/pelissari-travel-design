import type { SiteContent } from './types';

// English copy — currently mirrors PT while final EN copy is curated.
// Replace strings here when English copywriting is complete.
export const enContent: SiteContent = {
  nav: {
    openMenu: 'Open Menu',
    inicio: 'Home',
    antesDaReserva: 'Before You Book',
    sampleBlueprint: 'Sample Blueprint',
    servicos: 'Services',
    faq: 'FAQ',
    cta: 'Schedule Diagnostic',
  },

  footer: {
    tagline: 'Design first. Booking second. Perks third.',
    taglineMantra:
      'Mantra para estruturação de itinerários complexos com precisão arquitetônica, garantindo que o design da viagem dite a execução.',
    safePayments: 'Secure Payment Infrastructure',
    navTitle: 'Navigation',
    navHome: 'Commercial Home',
    navAntesDaReserva: 'Before You Book',
    navSampleBlueprint: 'Sample Blueprint',
    accessTitle: 'Access',
    accessLabel: 'Exclusive Area',
    legalTitle: 'Legal',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    madeIn: 'Made in the US / Operated Globally',
  },

  home: {
    hero: {
      badge: 'Design first. Booking second.',
      title: 'Clareza na viagem, antes da reserva.',
      description:
        'Estruturamos viagens complexas antes de qualquer compromisso com voos, hotéis ou experiências — para que você entenda a rota, o ritmo, os riscos e a ordem certa de reserva antes de gastar errado.',
      ctaMain: 'Schedule Scope Diagnostic',
      ctaSecondary: 'View Sample Blueprint',
    },

    problem: {
      title: 'The problem isn\'t too few options. It\'s too little structure.',
      pillars: [
        { label: 'Sequence', detail: 'The order cities and bases must unfold before any flight is confirmed.' },
        { label: 'Rhythm', detail: 'How to pace nights so energy is protected, not spent.' },
        { label: 'Transitions', detail: 'What happens between bases: logistics, time, and hidden cost.' },
        { label: 'Area', detail: 'Where to stay and its direct impact on the daily flow.' },
        { label: 'Omissions', detail: 'What to remove to elevate the quality of what remains.' },
      ],
      connector: 'These five variables define the difference between a trip that works and one that disappoints.',
    },

    method: {
      eyebrow: 'Visual Method',
      title: 'TRIP ARCHITECTURE',
      description:
        'Route design, pacing, accommodation-area logic, transitions, intentional omissions, and booking order.',
      cta: 'View Sample Blueprint',
    },

    insights: {
      title: 'Pre-Booking Findings',
      description:
        'Small decisions made early change the entire trip. These are examples of the kind of read we do before any hotel, flight, or experience is confirmed.',
      cardLabels: {
        error: 'Common mistake',
        read: 'Pelissari Read',
        decision: 'Recommended decision',
        cta: 'See how this appears in the Blueprint',
      },
      seeAll: 'View all strategic findings',
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
      title: 'Design Services',
      description:
        'Planning is a standalone asset. Booking comes after, once the trip structure is clear.',
      includesLabel: 'Includes',
      excludesLabel: 'Does not include',
      items: [
        {
          title: 'Blueprint',
          price: 'US$350',
          description: 'For travelers who want clarity before booking and plan to execute independently.',
          includes: [
            'Recommended route and sequence',
            'Pacing and night distribution',
            'Accommodation areas by trip function',
            'Priorities, omissions, and critical decisions',
            'Recommended booking order',
          ],
          excludes: ['Bookings, ticket issuance, or in-trip support'],
          cta: 'Start Blueprint',
        },
        {
          title: 'Full Design',
          price: 'From US$1,500',
          description: 'For travelers who want the plan designed and support turning it into bookings.',
          includes: [
            'Everything in Blueprint',
            'Hotel shortlist with selection logic',
            'Experience and restaurant recommendations',
            'Pre-trip support per agreed scope',
            'Booking assistance when contracted',
          ],
          excludes: [],
          cta: 'Hire Full Design',
        },
        {
          title: 'Signature',
          price: 'By proposal',
          description: 'For complex, meaningful trips with a high cost of error.',
          includes: [
            'Complete trip design',
            'Coordination and contingency',
            'Critical transitions and fragile points mapped',
            'Defined in-trip support',
          ],
          excludes: [],
          cta: 'Request Proposal',
        },
      ],
    },

    diagnostic: {
      title: 'The diagnostic defines the right scope. It does not deliver free planning.',
      description:
        'In 20 minutes, we assess destination, timeline, budget, travelers, complexity, and support level needed. After the call, you receive an objective recommendation: Blueprint, Full Design, Signature — or guidance that this is not the right moment to work together.',
      cta: 'Schedule Scope Diagnostic',
    },

    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'Is this a travel agency?',
          a: 'Not in the traditional sense. Pelissari Travel Design is a travel planning and design studio. The first deliverable is clarity: route, pacing, critical decisions, and booking order. Booking support can be added depending on scope.',
        },
        {
          q: 'Does the Blueprint include bookings?',
          a: 'No. The Blueprint is a planning deliverable for travelers who want to understand their trip before booking. It guides what to book, in what order, and why — but execution stays with the client.',
        },
        {
          q: 'Why pay before booking?',
          a: 'Because the most expensive decisions are usually made before any hotel is confirmed: route, number of nights, accommodation base, pacing, and sequence. The Blueprint reduces the risk of committing money to the wrong structure.',
        },
        {
          q: 'Can I hire help for booking later?',
          a: 'Yes. Blueprint clients can upgrade to Full Design when they want support turning the approved structure into bookings and pre-trip organization.',
        },
        {
          q: 'Do you guarantee upgrades, perks, or availability?',
          a: 'No. Benefits and availability depend on hotels, suppliers, dates, and each reservation\'s rules. When booking support is contracted, some reservations may be made through professional channels when appropriate, but perks are never the main promise.',
        },
        {
          q: 'Is the diagnostic a free consultation?',
          a: 'No. The diagnostic is a short conversation to understand fit, scope, and support level. No route, hotel, or specific recommendation is delivered at this stage.',
        },
      ],
    },
  },

  antesDaReserva: {
    eyebrow: 'Discovery & Intelligence',
    title: 'Before You Book',
    description:
      'Our library of structural insights. We challenge the traditional assumptions of the luxury travel market. Don\'t buy packages based on visual impulses — buy the right sequence.',
    filters: {
      all: 'All Insights',
      routes: 'Route Strategy',
      pacing: 'Rhythm & Pacing',
      accommodations: 'Accommodation Choice',
      experiences: 'Experiences',
    },
    card: {
      readTime: '2 min read',
      commonMistake: 'Common Mistake:',
      pelissariRead: 'Pelissari Read:',
      decision: 'Recommended Pre-Booking Decision:',
      share: 'Share',
      copied: 'Copied to WhatsApp',
      read: 'Read finding',
    },
    cta: {
      title: 'Uncertain about your next trip\'s route?',
      description:
        'We can calibrate these variables for your specific case. Our designers operate with objective clarity, shielding you from amateur advice and post-booking financial regret.',
      button: 'Schedule a Diagnostic',
    },
  },

  finding: {
    backLabel: 'Before You Book',
    referenceLabel: 'Reference:',
    diagnosticEyebrow: 'Scope diagnostic',
    diagnosticTitle: 'Before booking, it\'s worth confirming the structure can sustain the trip.',
    sectionLabels: {
      commonMistake: 'The common mistake',
      whyItSeemsGood: 'Why it seems like a good decision',
      whereItFails: 'Where the trip starts to fail',
      pelissariRead: 'The Pelissari read',
      decisionBeforeBooking: 'The decision before booking',
      blueprintAppearance: 'How this appears in the Blueprint',
    },
  },

  blueprint: {
    intro: {
      eyebrow: 'VISUAL PROOF OF METHOD',
      title: 'How a trip becomes a decision system.',
      p1: 'This sample Blueprint shows how Pelissari Travel Design turns an open-ended trip idea into a structured travel decision: route sequence, pacing, hotel-area logic, trade-offs, omissions, and booking order.',
      p2: 'It is not a generic itinerary. It is a planning document built to help the traveler understand what to book, what to skip, what to delay, and where the trip can fail before money is committed.',
      note: 'Sample content is sanitized. Names, booking references, supplier details, and private client information are omitted.',
      ctaMain: 'Schedule Scope Diagnostic',
      ctaSecondary: 'View Pre-Booking Findings',
    },

    reading: {
      title: 'How to read this Blueprint',
      description:
        'Read this document as a sequence of decisions, not a list of places. The question isn\'t just "where to go?" — it\'s "in what order, at what pace, with which omissions, and with what level of support?"',
      cards: [
        {
          title: '1. Route thesis',
          text: 'Summarizes the main logic of the trip. It explains why the proposed sequence exists and what problem it solves.',
        },
        {
          title: '2. Sequence and pacing',
          text: 'Shows how cities, nights, and transfers were organized to reduce friction and preserve energy.',
        },
        {
          title: '3. Critical decisions',
          text: 'Exposes choices that must be made before booking: what to prioritize, what to defer, and what to remove.',
        },
        {
          title: '4. Intentional omissions',
          text: 'A good Blueprint doesn\'t add everything. It also shows what was left out to protect trip quality.',
        },
        {
          title: '5. Booking order',
          text: 'Indicates what must be confirmed first to avoid locking in the trip in the wrong sequence.',
        },
      ],
    },

    proof: {
      title: 'What this sample proves',
      description:
        'The Blueprint\'s value isn\'t in listing recommendations. It\'s in making the reasoning behind the trip visible: where to start, where to slow down, where to concentrate effort, where not to spend energy, and which decisions must come before bookings.',
      cta: 'Create my Blueprint',
    },

    sample: {
      eyebrow: 'Visual Method Proof',
      title: 'Japan: The Pragmatic Approach to a High-Intensity First Trip',
      description:
        'Mapeamento logístico real resolvendo os maiores gargalos de fadiga térmica, fusão de fusos horários e sobreposição de experiências para viagens de 14 dias em solo japonês.',
    },

    context: {
      title: 'Trip Context',
      travelers: { label: 'Travelers:', value: 'Couple (First time in Japan)' },
      duration: { label: 'Total duration:', value: '14 Days / 13 Nights' },
      profile: {
        label: 'Psychographic profile:',
        value:
          'High interest in culture, art, and gastronomy. Acute risk of sensory exhaustion. Seeks dynamic comfort without excessive hotel changes.',
      },
    },

    bookingOrder: {
      title: 'Booking Order Strategy',
      phases: [
        {
          label: 'Phase 1 (Immediate Priority)',
          title: 'Traditional Ryokan in Kanazawa',
          description:
            'High-end traditional accommodations have at most 8 to 12 rooms. They dictate the anchor date for the entire route.',
        },
        {
          label: 'Phase 2 (6 Months out)',
          title: 'Kyoto & Tokyo Hubs',
          description: 'Locking in hotels for the two main metropolitan bases.',
        },
        {
          label: 'Phase 3 (30-60 Days out)',
          title: 'Shinkansen & Michelin Dinners',
          description: 'Opening windows for fine dining reservations and high-speed rail seats.',
        },
      ],
    },

    riskFlags: {
      title: 'Mapped Risk Flags',
      items: [
        {
          title: '• Luggage Logistics:',
          description:
            'Luggage rules on Shinkansen bullet trains are strict and restrictive. Requires on-demand forwarding (Yamato Express) between Kyoto and Tokyo.',
        },
        {
          title: '• Kyoto Bus Saturation:',
          description:
            'Public bus transport in Kyoto suffers severe overcrowding. Visit route planning must prioritize private rail lines or early-morning walking routes.',
        },
        {
          title: '• Kaiseki Menu Overload:',
          description:
            'Scheduling heavy tasting menus every night induces Western palate fatigue. We incorporate casual izakayas into the planning.',
        },
      ],
    },

    routeThesis: {
      title: 'Route Thesis: The Counterintuitive Sequence',
      p1: 'Traditional market itineraries land in intense Tokyo. This overloads the traveler right from departure with monstrous connections, frantic traffic, and jet lag conflict, immediately after a nearly 30-hour flight.',
      p2: 'Our route engineering inverts this pattern.',
      p3: 'We send the couple to land in Osaka (KIX) or take a direct domestic connection from Tokyo to the Kyoto airport area. This secondary arrival accommodates the senses amid the calm, quiet atmosphere of Kyoto in the first days. The trip then progresses in terms of urban density, reaching the frantic climax of Tokyo only in the second half — when travelers are physically adapted and logistically confident.',
    },

    sequence: {
      title: 'Destination & Density Sequence',
      densityLabel: 'Flow Density:',
      areaLabel: 'Area & Neighborhood Guidance:',
      stops: [
        {
          name: 'Osaka / Kyoto',
          days: 'Days 1-5',
          desc: 'Landing and gentle acclimatization. Focus on traditional Japanese culture, Buddhist temples, and slow anti-jetlag pacing.',
          guidance:
            'Stay in the quiet Sanjo or Karasuma districts. Avoid overnighting near Kyoto Central Station to prevent mass tourist congestion.',
        },
        {
          name: 'Kanazawa',
          days: 'Days 6-8',
          desc: 'Alternative traditional oasis. Excellent samurai historical preservation, high-class gold leaf crafts, and decompression pacing before major metropolises.',
          guidance:
            'This stop is the structural mid-trip anchor to absorb fatigue. Book your classic Ryokan here.',
        },
        {
          name: 'Tokyo',
          days: 'Days 9-14',
          desc: 'Trip climax. Extreme modernity, international haute cuisine, premium shopping in Aoyama/Omotesando, and major contemporary digital art museums.',
          guidance:
            'Default Marunouchi/Otemachi for quiet corporate luxury, or Minami-Aoyama for design studio proximity. Avoid Shinjuku if acoustic quiet is desired.',
        },
      ],
    },

    omissions: {
      title: 'Critical Decisions: What We Omitted (and Why)',
      description:
        'Knowing what to cut is as strategic as what to include. We design trips focused on depth of memory, reducing mechanical waste.',
      items: [
        {
          title: 'Hiroshima & Miyajima',
          description:
            'A classic generic-package route requiring at least 7 extra net hours of Shinkansen travel just to spend a single exhausting night. This induces luggage fatigue and takes valuable Kyoto exploration time. Retained only for strict military history enthusiasts.',
        },
        {
          title: 'Hakone & Mount Fuji (Overnight)',
          description:
            'Region saturated by mass tourism on weekends, with mountain views frequently obscured by thermal haze. Strategically replaced by Kanazawa, which serves as a luxury ryokan with the same advantages and greater cultural preservation tranquility.',
        },
      ],
    },

    closing: {
      title: 'Create the Blueprint tailored to your next trip',
      description:
        'Japan is just one of dozens of complex sequences we handle with surgical precision. We eliminate the noise of scattered opinions and design the flawless order before you sign any booking contracts.',
      cta: 'Schedule My Scope Diagnostic',
    },
  },

  modal: {
    eyebrow: 'Scope assessment',
    title: 'Schedule Diagnostic',
    closeLabel: 'Close diagnostic',
    info: 'No decision, route, or booking is made at this stage. The diagnostic is to assess scope, complexity, and fit before any specific recommendation.',
    success: {
      title: 'Request received.',
      description:
        'We received your initial diagnostic. If there\'s a fit, you\'ll receive next steps by email or WhatsApp to schedule the scope call.',
      button: 'Done',
    },
    form: {
      name: 'Name',
      email: 'Email',
      whatsapp: 'WhatsApp',
      destination: 'Desired destination or region',
      destinationPlaceholder: 'e.g. Japan, Italy…',
      dateWindow: 'Dates or approximate window',
      dateWindowPlaceholder: 'e.g. October 2026',
      duration: 'Approximate duration',
      durationPlaceholder: 'e.g. 14 days',
      travelers: 'Number of travelers',
      travelersPlaceholder: 'e.g. 2 adults',
      budget: 'Estimated budget in USD',
      budgetPlaceholder: 'e.g. US$20,000',
      occasion: 'Special occasion',
      occasionOptional: '(optional)',
      occasionPlaceholder: 'e.g. honeymoon, anniversary…',
      alreadyBooked: 'What is already booked?',
      alreadyBookedPlaceholder: 'List existing reservations or write "Nothing booked yet".',
      biggestConcern: 'Biggest challenge today',
      biggestConcernPlaceholder: 'What is making trip decisions difficult?',
      consent:
        'I understand that the diagnostic is a scope assessment and does not include specific route, hotel, or booking recommendations.',
      submit: 'Request Diagnostic',
      submitting: 'Sending…',
      errorPrefix: 'We could not submit your request right now. Try again in a few minutes or write to',
      errorEmail: 'contato@pelissari.travel',
      sectionAbout: 'About you',
      sectionTrip: 'About the trip',
      sectionContext: 'Context & decisions',
    },
  },
};
