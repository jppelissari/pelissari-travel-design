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
    <footer className="w-full py-12 md:py-16 bg-cool-gray-50 border-t border-cool-gray-200 mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

        {/* Brand Summary */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <div>
              <span className="font-manrope text-lg font-black tracking-tighter text-primary">
                PELISSARI
              </span>
              <span className="block text-[7px] tracking-[0.2em] font-medium text-cool-gray-500 uppercase -mt-1 leading-none">
                Travel Design
              </span>
            </div>
          </div>

          <p className="text-xs text-cool-gray-500 max-w-sm leading-relaxed">
            {f.tagline}<br />
            {f.taglineMantra}
          </p>

          <div className="flex items-center gap-2 text-[10px] text-cool-gray-500 uppercase tracking-widest bg-white border border-cool-gray-200 px-3 py-1.5 rounded-custom w-fit">
            <ShieldCheck size={12} className="text-primary shrink-0" />
            <span>{f.safePayments}</span>
          </div>
        </div>

        {/* Global Nav columns */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">

          {/* Col 1: Navigation */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-primary">{f.navTitle}</h4>
            <div className="flex flex-col gap-2 text-xs">
              <button
                onClick={() => onNavigate('home')}
                className={`text-left text-cool-gray-500 hover:text-primary transition-colors ${currentSurface === 'home' ? 'font-bold text-primary underline underline-offset-4' : ''}`}
              >
                {f.navHome}
              </button>
              <button
                onClick={() => onNavigate('antes-da-reserva')}
                className={`text-left text-cool-gray-500 hover:text-primary transition-colors ${currentSurface === 'antes-da-reserva' ? 'font-bold text-primary underline underline-offset-4' : ''}`}
              >
                {f.navAntesDaReserva}
              </button>
              <button
                onClick={() => onNavigate('sample-blueprint')}
                className={`text-left text-cool-gray-500 hover:text-primary transition-colors ${currentSurface === 'sample-blueprint' ? 'font-bold text-primary underline underline-offset-4' : ''}`}
              >
                {f.navSampleBlueprint}
              </button>
            </div>
          </div>

          {/* Col 2: Exclusive Access */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-primary">{f.accessTitle}</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => onNavigate('client-link')}
                className={`group flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold transition-colors ${
                  isAcessoActive
                    ? 'text-primary'
                    : 'text-cool-gray-500 hover:text-primary'
                }`}
              >
                <Unlock size={10} className="shrink-0" />
                <span>{ACESSO_LABEL[lang] ?? 'Acesso'}</span>
              </button>
              <p className="text-[10px] text-cool-gray-400 leading-relaxed">
                {ACESSO_DESC[lang]}
              </p>
            </div>
          </div>

          {/* Col 3: Legal & Contact */}
          <div className="space-y-3 col-span-2 sm:col-span-1">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-primary">{f.legalTitle}</h4>
            <div className="flex flex-col gap-2 text-xs">
              <span className="text-cool-gray-400 cursor-default" aria-disabled="true">{f.terms}</span>
              <span className="text-cool-gray-400 cursor-default" aria-disabled="true">{f.privacy}</span>
              <span className="text-cool-gray-400">contato@pelissari.travel</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-cool-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-cool-gray-400 uppercase tracking-widest">
        <span>&copy; {new Date().getFullYear()} Pelissari Travel Design. Todos os direitos reservados.</span>
        <span>{f.madeIn}</span>
      </div>
    </footer>
  );
}
