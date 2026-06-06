export type Surface = 'home' | 'antes-da-reserva' | 'sample-blueprint' | 'client-link' | 'shareable-preview';

export interface InsightCard {
  id: string;
  title: string;
  category: string;
  commonMistake: string;
  pelissariRead: string;
  decisionBeforeBooking: string;
}

export interface BlueprintPhase {
  phase: string;
  title: string;
  description: string;
}

export interface RiskFlag {
  title: string;
  highlight: string;
  description: string;
}

export interface DestinationStop {
  stopNumber: number;
  name: string;
  days: string;
  pacing: string;
  density: number; // 1 to 3
  guidance: string;
}

export interface FitCallFormState {
  name: string;
  email: string;
  whatsapp: string;
  destination: string;
  dateWindow: string;
  duration: string;
  travelers: string;
  occasion: string;
  budget: string;
  alreadyBooked: string;
  biggestConcern: string;
  consent: boolean;
  status: 'idle' | 'submitting' | 'success' | 'error';
}
