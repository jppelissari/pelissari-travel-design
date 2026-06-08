import React from 'react';
import { Lock } from 'lucide-react';
import { FitCallSource, Surface } from '../types';
import { useLanguage, type Language } from '../context/LanguageContext';

type PublicNavItem =
  | { id: Surface; label: string; type: 'surface' }
  | { id: string; label: string; type: 'section' };

interface TopAppBarProps {
  currentSurface: Surface;
  onNavigate: (surface: Surface) => void;
  onNavigateHomeSection: (sectionId: string) => void;
  onOpenFitCall: (source: FitCallSource) => void;
}

const ACESSO_LABEL: Record<string, string> = {
  en: 'Preview',
  pt: 'Acesso',
};

export default function TopAppBar({ currentSurface, onNavigate, onNavigateHomeSection, onOpenFitCall }: TopAppBarProps) {
  const { lang, setLang, c } = useLanguage();

  const publicNavItems: PublicNavItem[] = [
    { id: 'home', label: c.nav.inicio, type: 'surface' },
    { id: 'antes-da-reserva', label: c.nav.antesDaReserva, type: 'surface' },
    { id: 'sample-blueprint', label: c.nav.sampleBlueprint, type: 'surface' },
    { id: 'servicos', label: c.nav.servicos, type: 'section' },
    { id: 'faq', label: c.nav.faq, type: 'section' },
  ];

  const acessoLabel = ACESSO_LABEL[lang] ?? 'Acesso';
  const isAcessoActive = currentSurface === 'client-link';

  const isItemActive = (item: PublicNavItem) =>
    currentSurface === item.id ||
    (currentSurface === 'strategic-finding' && item.id === 'antes-da-reserva');

  const handleNav = (item: PublicNavItem) => {
    if (item.type === 'section') {
      onNavigateHomeSection(item.id);
    } else {
      onNavigate(item.id as Surface);
    }
  };

  const handleLangToggle = (newLang: Language) => {
    if (newLang === lang) return;
    setLang(newLang);
    const path = window.location.pathname;
    const pathWithoutPrefix = path.replace(/^\/pt(?=\/|$)/, '') || '/';
    const newPath =
      newLang === 'pt'
        ? pathWithoutPrefix === '/'
          ? '/pt'
          : `/pt${pathWithoutPrefix}`
        : pathWithoutPrefix;
    window.history.replaceState(window.history.state, '', newPath);
  };

  return (
    <header className="w-full top-0 sticky z-50 bg-white border-b border-cool-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 xl:px-8 flex justify-between items-center h-16 lg:h-20">

        {/* Brand Logo */}
        <button
          onClick={() => handleNav(publicNavItems[0])}
          className="text-left select-none outline-none focus:outline-none"
        >
          <span className="font-manrope text-xl lg:text-2xl font-black tracking-tighter text-primary">
            PELISSARI
          </span>
          <span className="block text-[8px] tracking-[0.25em] font-medium text-cool-gray-500 uppercase -mt-1 leading-none font-sans">
            Travel Design
          </span>
        </button>

        {/* Center: Main Navigation (Desktop only) */}
        <nav aria-label="Navegação pública" className="hidden lg:flex items-center h-full">
          {/* Primary nav items */}
          <div className="flex gap-4 xl:gap-8 items-center h-full">
            {publicNavItems.map((item) => {
              const isActive = isItemActive(item);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item)}
                  className={`transition-all duration-200 text-xs uppercase font-bold tracking-widest relative h-full flex items-center hover:text-primary ${
                    isActive
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-cool-gray-500'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Separator */}
          <div className="w-px h-5 bg-cool-gray-200 mx-3 xl:mx-6 shrink-0" />

          {/* Acesso — exclusive access link */}
          <button
            onClick={() => onNavigate('client-link')}
            className={`transition-all duration-200 text-xs uppercase font-bold tracking-widest relative h-full flex items-center gap-1.5 hover:text-primary ${
              isAcessoActive
                ? 'text-primary border-b-2 border-primary'
                : 'text-cool-gray-500'
            }`}
          >
            <Lock size={11} strokeWidth={isAcessoActive ? 2.5 : 2} />
            {acessoLabel}
          </button>
        </nav>

        {/* Right Side: Language Toggle + CTA (desktop) */}
        <div className="flex items-center gap-4">
          {/* EN · PT toggle — desktop only */}
          <div className="hidden lg:flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest select-none">
            <button
              onClick={() => handleLangToggle('en')}
              className={`transition-colors ${lang === 'en' ? 'text-primary' : 'text-cool-gray-400 hover:text-primary'}`}
            >
              EN
            </button>
            <span className="text-cool-gray-300">·</span>
            <button
              onClick={() => handleLangToggle('pt')}
              className={`transition-colors ${lang === 'pt' ? 'text-primary' : 'text-cool-gray-400 hover:text-primary'}`}
            >
              PT
            </button>
          </div>

          {/* CTA button — desktop only (mobile uses FAB) */}
          <button
            onClick={() => onOpenFitCall('top_nav')}
            className="hidden lg:block bg-primary text-white text-xs uppercase font-bold tracking-widest px-4 xl:px-6 py-3 rounded-custom hover:bg-charcoal transition-all active:scale-[0.98]"
          >
            {c.nav.cta}
          </button>

          {/* Mobile: compact lang toggle */}
          <div className="lg:hidden flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest select-none">
            <button
              onClick={() => handleLangToggle('en')}
              className={`transition-colors ${lang === 'en' ? 'text-primary' : 'text-cool-gray-400'}`}
            >
              EN
            </button>
            <span className="text-cool-gray-300">·</span>
            <button
              onClick={() => handleLangToggle('pt')}
              className={`transition-colors ${lang === 'pt' ? 'text-primary' : 'text-cool-gray-400'}`}
            >
              PT
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
