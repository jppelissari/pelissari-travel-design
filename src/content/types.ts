export interface NavContent {
  openMenu: string;
  inicio: string;
  antesDaReserva: string;
  sampleBlueprint: string;
  servicos: string;
  faq: string;
  cta: string;
}

export interface FooterContent {
  tagline: string;
  taglineMantra: string;
  safePayments: string;
  navTitle: string;
  navHome: string;
  navAntesDaReserva: string;
  navSampleBlueprint: string;
  accessTitle: string;
  accessLabel: string;
  legalTitle: string;
  terms: string;
  privacy: string;
  madeIn: string;
}

export interface InsightItem {
  title: string;
  error: string;
  read: string;
  decision: string;
}

export interface ServiceItem {
  title: string;
  price: string;
  description: string;
  includes: string[];
  excludes: string[];
  cta: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface PainPillar {
  label: string;
  detail: string;
}

export interface HomeContent {
  hero: {
    badge: string;
    title: string;
    description: string;
    ctaMain: string;
    ctaSecondary: string;
  };
  problem: {
    title: string;
    pillars: PainPillar[];
    connector: string;
  };
  method: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
  };
  insights: {
    title: string;
    description: string;
    cardLabels: {
      error: string;
      read: string;
      decision: string;
      cta: string;
    };
    seeAll: string;
    items: InsightItem[];
  };
  services: {
    title: string;
    description: string;
    includesLabel: string;
    excludesLabel: string;
    items: ServiceItem[];
  };
  diagnostic: {
    title: string;
    description: string;
    cta: string;
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
}

export interface AntesDaReservaContent {
  eyebrow: string;
  title: string;
  description: string;
  filters: {
    all: string;
    routes: string;
    pacing: string;
    accommodations: string;
    experiences: string;
  };
  card: {
    readTime: string;
    commonMistake: string;
    pelissariRead: string;
    decision: string;
    share: string;
    copied: string;
    read: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

export interface FindingSectionLabels {
  commonMistake: string;
  whyItSeemsGood: string;
  whereItFails: string;
  pelissariRead: string;
  decisionBeforeBooking: string;
  blueprintAppearance: string;
}

export interface FindingContent {
  backLabel: string;
  referenceLabel: string;
  diagnosticEyebrow: string;
  diagnosticTitle: string;
  sectionLabels: FindingSectionLabels;
}

export interface BlueprintReadingCard {
  title: string;
  text: string;
}

export interface BlueprintStop {
  name: string;
  days: string;
  desc: string;
  guidance: string;
}

export interface BlueprintBookingPhase {
  label: string;
  title: string;
  description: string;
}

export interface BlueprintRiskFlag {
  title: string;
  description: string;
}

export interface BlueprintOmission {
  title: string;
  description: string;
}

export interface BlueprintContent {
  intro: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    note: string;
    ctaMain: string;
    ctaSecondary: string;
  };
  reading: {
    title: string;
    description: string;
    cards: BlueprintReadingCard[];
  };
  proof: {
    title: string;
    description: string;
    cta: string;
  };
  sample: {
    eyebrow: string;
    title: string;
    description: string;
  };
  context: {
    title: string;
    travelers: { label: string; value: string };
    duration: { label: string; value: string };
    profile: { label: string; value: string };
  };
  bookingOrder: {
    title: string;
    phases: BlueprintBookingPhase[];
  };
  riskFlags: {
    title: string;
    items: BlueprintRiskFlag[];
  };
  routeThesis: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  sequence: {
    title: string;
    densityLabel: string;
    areaLabel: string;
    stops: BlueprintStop[];
  };
  omissions: {
    title: string;
    description: string;
    items: BlueprintOmission[];
  };
  closing: {
    title: string;
    description: string;
    cta: string;
  };
}

export interface ModalContent {
  eyebrow: string;
  title: string;
  closeLabel: string;
  info: string;
  success: {
    title: string;
    description: string;
    button: string;
  };
  form: {
    name: string;
    email: string;
    whatsapp: string;
    destination: string;
    destinationPlaceholder: string;
    dateWindow: string;
    dateWindowPlaceholder: string;
    duration: string;
    durationPlaceholder: string;
    travelers: string;
    travelersPlaceholder: string;
    budget: string;
    budgetPlaceholder: string;
    occasion: string;
    occasionOptional: string;
    occasionPlaceholder: string;
    alreadyBooked: string;
    alreadyBookedPlaceholder: string;
    biggestConcern: string;
    biggestConcernPlaceholder: string;
    consent: string;
    submit: string;
    submitting: string;
    errorPrefix: string;
    errorEmail: string;
    sectionAbout: string;
    sectionTrip: string;
    sectionContext: string;
  };
}

export interface SiteContent {
  nav: NavContent;
  footer: FooterContent;
  home: HomeContent;
  antesDaReserva: AntesDaReservaContent;
  finding: FindingContent;
  blueprint: BlueprintContent;
  modal: ModalContent;
}
