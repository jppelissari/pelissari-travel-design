import React from 'react';
import { Home, BookOpen, Map, Lock } from 'lucide-react';
import { Surface } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface BottomNavBarProps {
  currentSurface: Surface;
  onNavigate: (surface: Surface) => void;
}

interface NavItem {
  id: Surface | string;
  icon: React.ElementType;
  surface?: Surface;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home',              icon: Home,     surface: 'home' },
  { id: 'antes-da-reserva', icon: BookOpen, surface: 'antes-da-reserva' },
  { id: 'sample-blueprint', icon: Map,      surface: 'sample-blueprint' },
  { id: 'client-link',      icon: Lock,     surface: 'client-link' },
];

const ACESSO_LABEL: Record<string, string> = {
  en: 'Preview',
  pt: 'Acesso',
};

export default function BottomNavBar({
  currentSurface,
  onNavigate,
}: BottomNavBarProps) {
  const { c, lang } = useLanguage();

  const isActive = (surface?: Surface) => {
    if (!surface) return false;
    if (surface === 'antes-da-reserva') {
      return currentSurface === 'antes-da-reserva' || currentSurface === 'strategic-finding';
    }
    return currentSurface === surface;
  };

  const labels: Record<string, string> = {
    home: c.nav.inicio,
    'antes-da-reserva': c.nav.antesDaReserva,
    'sample-blueprint': c.nav.sampleBlueprint,
    'client-link': ACESSO_LABEL[lang] ?? 'Acesso',
  };

  return (
    <nav
      aria-label="Navegação principal"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-cool-gray-200 safe-area-bottom"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex items-stretch h-16">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.surface);
          const Icon = item.icon;
          const label = labels[item.id] ?? item.id;

          return (
            <button
              key={item.id}
              onClick={() => item.surface && onNavigate(item.surface)}
              className={`relative flex-1 flex flex-col items-center justify-center gap-1 transition-colors duration-150 ${
                active
                  ? 'text-primary'
                  : 'text-cool-gray-400 hover:text-cool-gray-600'
              }`}
            >
              <Icon
                size={20}
                strokeWidth={active ? 2.5 : 1.75}
              />
              <span
                className={`text-[9px] uppercase tracking-wider font-bold leading-none ${
                  active ? 'text-primary' : 'text-cool-gray-400'
                }`}
              >
                {label}
              </span>
              {active && (
                <span className="absolute bottom-0 w-8 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
