import React from 'react';
import { FitCallSource, Surface } from '../types';
import { useLanguage, type Language } from '../context/LanguageContext';

type NavItemType = 'surface' | 'section' | 'fitcall';

interface NavItem {
  id: string;
  label: string;
  type: NavItemType;
  surface?: Surface;
}

interface TopAppBarProps {
  currentSurface: Surface;
  onNavigate: (surface: Surface) => void;
  onNavigateHomeSection: (sectionId: string) => void;
  onOpenFitCall: (source: FitCallSource) => void;
}

const CLIENT_LABEL: Record<string, string> = {
  en: 'Client',
  pt: 'Cliente',
};

export default function TopAppBar({
  currentSurface,
  onNavigate,
  onNavigateHomeSection,
  onOpenFitCall,
}: TopAppBarProps) {
  const { lang, setLang, c } = useLanguage();

  const primaryNav: NavItem[] = [
    { id: 'method',           label: c.nav.inicio,          type: 'section'  },
    { id: 'sample-blueprint', label: c.nav.sampleBlueprint, type: 'surface', surface: 'sample-blueprint' },
    { id: 'servicos',         label: c.nav.servicos,        type: 'section'  },
    { id: 'antes-da-reserva', label: c.nav.antesDaReserva,  type: 'surface', surface: 'antes-da-reserva' },
    { id: 'fitcall',          label: c.nav.fitCall,         type: 'fitcall'  },
  ];

  const isActive = (item: NavItem): boolean => {
    if (item.type === 'surface' && item.surface) {
      return (
        currentSurface === item.surface ||
        (currentSurface === 'strategic-finding' && item.surface === 'antes-da-reserva')
      );
    }
    if (item.id === 'method') return currentSurface === 'home';
    return false;
  };

  const handleNav = (item: NavItem) => {
    if (item.type === 'fitcall') {
      onOpenFitCall('top_nav');
    } else if (item.type === 'section') {
      onNavigateHomeSection(item.id);
    } else if (item.surface) {
      onNavigate(item.surface);
    }
  };

  const handleLangToggle = (newLang: Language) => {
    if (newLang === lang) return;
    setLang(newLang);
    const path = window.location.pathname;
    const base = path.replace(/^\/pt(?=\/|$)/, '') || '/';
    const next =
      newLang === 'pt'
        ? base === '/'
          ? '/pt'
          : `/pt${base}`
        : base;
    window.history.replaceState(window.history.state, '', next);
  };

  const clientLabel = CLIENT_LABEL[lang] ?? 'Client';
  const isClientActive = currentSurface === 'client-link';

  return (
    <header className="site-header w-full top-0 sticky z-50">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 flex items-center justify-between h-[72px] lg:h-[80px]">

        {/* ── Brand ─────────────────────────────────────────── */}
        <button
          onClick={() => onNavigate('home')}
          className="site-brand text-left select-none outline-none focus-visible:ring-1 focus-visible:ring-stone/50 rounded-sm"
          aria-label="ELUZA — Return to home"
        >
          <span className="site-brand-name">ELUZA</span>
          <span className="site-brand-descriptor">Private Travel Design Studio</span>
        </button>

        {/* ── Desktop primary nav ───────────────────────────── */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
          {primaryNav.map((item) => {
            const active = isActive(item);
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item)}
                aria-current={active ? 'page' : undefined}
                className={`site-nav-link${active ? ' site-nav-link-active' : ''}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* ── Right cluster ─────────────────────────────────── */}
        <div className="flex items-center gap-3 lg:gap-4">

          {/* CTA — desktop only */}
          <button
            onClick={() => onOpenFitCall('top_nav')}
            className="hidden lg:block site-header-cta"
          >
            {c.nav.cta}
          </button>

          {/* Language toggle — always visible */}
          <div className="language-switcher">
            <button
              onClick={() => handleLangToggle('en')}
              className={`transition-colors ${lang === 'en' ? 'text-bone' : 'text-stone hover:text-bone'}`}
            >
              EN
            </button>
            <span className="text-stone/35 mx-1.5 select-none">·</span>
            <button
              onClick={() => handleLangToggle('pt')}
              className={`transition-colors ${lang === 'pt' ? 'text-bone' : 'text-stone hover:text-bone'}`}
            >
              PT
            </button>
          </div>

          {/* Client access — desktop only, discreet */}
          <button
            onClick={() => onNavigate('client-link')}
            aria-current={isClientActive ? 'page' : undefined}
            className={`hidden lg:block text-[10px] uppercase font-medium tracking-[0.10em] transition-colors ${
              isClientActive ? 'text-bone' : 'text-stone/50 hover:text-stone'
            }`}
          >
            {clientLabel}
          </button>

        </div>
      </div>
    </header>
  );
}
