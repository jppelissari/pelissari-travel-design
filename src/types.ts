export type Surface = 'home' | 'antes-da-reserva' | 'strategic-finding' | 'sample-blueprint' | 'client-link' | 'shareable-preview';

export type TrackedFitCallLocation =
  | 'top_nav'
  | 'home_hero'
  | 'services_blueprint'
  | 'services_full_design'
  | 'services_signature'
  | 'diagnostic_section'
  | 'sample_blueprint_intro'
  | 'sample_blueprint_proof_bridge';

export type FitCallSource =
  | TrackedFitCallLocation
  | 'antes_da_reserva'
  | 'sample_blueprint_bottom'
  | 'shareable_preview';

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
