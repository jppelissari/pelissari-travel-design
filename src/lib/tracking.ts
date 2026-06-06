declare global {
  interface ImportMetaEnv {
    readonly DEV: boolean;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  interface Window {
    gtag?: (command: 'event', eventName: string, params?: Record<string, unknown>) => void;
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', eventName, params);

  if (import.meta.env.DEV) {
    console.log('[tracking]', eventName, params);
  }
}
