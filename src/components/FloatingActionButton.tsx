import React from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FloatingActionButtonProps {
  onClick: () => void;
}

export default function FloatingActionButton({ onClick }: FloatingActionButtonProps) {
  const { c } = useLanguage();

  return (
    <button
      onClick={onClick}
      aria-label={c.nav.cta}
      className="fixed right-4 z-40 bg-primary text-white rounded-full shadow-lg flex items-center gap-2 px-5 py-3.5 text-[10px] uppercase font-bold tracking-widest hover:bg-charcoal active:scale-95 transition-all duration-150"
      style={{ bottom: 'calc(4rem + env(safe-area-inset-bottom, 0px) + 0.75rem)' }}
    >
      <Phone size={14} strokeWidth={2.5} />
      <span className="leading-none">{c.nav.cta}</span>
    </button>
  );
}
