import React from 'react';
import { Surface } from '../types';
import { ShieldCheck, Unlock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (surface: Surface) => void;
  currentSurface: Surface;
}

const ACESSO_LABEL: Record<string, string> = {
  en: 'Preview',
  pt: 'Acesso',
};

const ACESSO_DESC: Record<string, string> = {
  en: 'Client delivery portal',
  pt: 'Portal de entrega ao cliente',
};

export default function Footer({ onNavigate, currentSurface }: FooterProps) {
  const { lang, c } = useLanguage();
  const f = c.footer;
  const isAcessoActive = currentSurface === 'client-link';

  return (
    <footer className="w-full py-12 md:py-16 bg-paper border-t border-stone/40 mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

        {/* Brand Summary */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <div>
              <span className="eluza-wordmark text-lg font-light text-bone">
                ELUZA
              </span>
              <span className="block text-[7px] tracking-[0.18em] font-light text-stone uppercase mt-1 leading-none">
                Private Travel Design Studio
              </span>
            </div>
          </div>

          <p className="text-xs text-cool-gray-500 max-w-sm leading-relaxed">
            {f.tagline}<br />
            {f.taglineMantra}
          </p>

          <div className="flex items-center gap-2 text-[10px] text-stone uppercase tracking-[0.16em] bg-deep-petrol border border-stone/50 px-3 py-1.5 rounded-custom w-fit">
            <ShieldCheck size={12} className="text-bone shrink-0" />
            <span>{f.safePayments}</span>
          </div>
        </div>

        {/* Global Nav columns */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">

          {/* Col 1: Navigation */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase font-light tracking-[0.16em] text-bone">{f.navTitle}</h4>
            <div className="flex flex-col gap-2 text-xs">
              <button
                onClick={() => onNavigate('home')}
                className={`text-left text-stone hover:text-bone transition-colors ${currentSurface === 'home' ? 'text-bone underline underline-offset-4' : ''}`}
              >
                {f.navHome}
              </button>
              <button
                onClick={() => onNavigate('antes-da-reserva')}
                className={`text-left text-stone hover:text-bone transition-colors ${currentSurface === 'antes-da-reserva' ? 'text-bone underline underline-offset-4' : ''}`}
              >
                {f.navAntesDaReserva}
              </button>
              <button
                onClick={() => onNavigate('sample-blueprint')}
                className={`text-left text-stone hover:text-bone transition-colors ${currentSurface === 'sample-blueprint' ? 'text-bone underline underline-offset-4' : ''}`}
              >
                {f.navSampleBlueprint}
              </button>
            </div>
          </div>

          {/* Col 2: Exclusive Access */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase font-light tracking-[0.16em] text-bone">{f.accessTitle}</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => onNavigate('client-link')}
                className={`group flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] font-light transition-colors ${
                  isAcessoActive
                    ? 'text-bone'
                    : 'text-stone hover:text-bone'
                }`}
              >
                <Unlock size={10} className="shrink-0" />
                <span>{ACESSO_LABEL[lang] ?? 'Acesso'}</span>
              </button>
              <p className="text-[10px] text-stone leading-relaxed">
                {ACESSO_DESC[lang]}
              </p>
            </div>
          </div>

          {/* Col 3: Legal & Contact */}
          <div className="space-y-3 col-span-2 sm:col-span-1">
            <h4 className="text-[10px] uppercase font-light tracking-[0.16em] text-bone">{f.legalTitle}</h4>
            <div className="flex flex-col gap-2 text-xs">
              <span className="text-stone cursor-default" aria-disabled="true">{f.terms}</span>
              <span className="text-stone cursor-default" aria-disabled="true">{f.privacy}</span>
              <span className="text-stone">josepelissari@jppelissari.com</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-stone/40 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-stone uppercase tracking-[0.16em]">
        <span>&copy; {new Date().getFullYear()} ELUZA. All rights reserved.</span>
        <span>{f.madeIn}</span>
      </div>
    </footer>
  );
}
