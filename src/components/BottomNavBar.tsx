import React from 'react';
import { Home, BookOpen, Lock, Phone } from 'lucide-react';
import { FitCallSource, Surface } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface BottomNavBarProps {
  currentSurface: Surface;
  onNavigate: (surface: Surface) => void;
  onOpenFitCall: (source: FitCallSource) => void;
}

type NavItemDef =
  | { type: 'surface'; id: Surface; icon: React.ElementType }
  | { type: 'fitcall'; id: 'fitcall'; icon: React.ElementType };

const NAV_ITEMS: NavItemDef[] = [
  { type: 'surface', id: 'home',             icon: Home     },
  { type: 'surface', id: 'sample-blueprint', icon: BookOpen },
  { type: 'surface', id: 'client-link',      icon: Lock     },
  { type: 'fitcall', id: 'fitcall',          icon: Phone    },
];

export default function BottomNavBar({
  currentSurface,
  onNavigate,
  onOpenFitCall,
}: BottomNavBarProps) {
  const { c } = useLanguage();

  const labels: Record<string, string> = {
    home:             c.nav.inicio,
    'sample-blueprint': c.nav.sampleBlueprint,
    'client-link':    c.nav.client,
    fitcall:          c.nav.fitCall,
  };

  const isActive = (item: NavItemDef): boolean => {
    if (item.type === 'fitcall') return false;
    if (item.id === 'client-link') return currentSurface === 'client-link';
    if (item.id === 'sample-blueprint') return currentSurface === 'sample-blueprint';
    if (item.id === 'home') return currentSurface === 'home';
    return false;
  };

  const handleTap = (item: NavItemDef) => {
    if (item.type === 'fitcall') {
      onOpenFitCall('top_nav');
    } else {
      onNavigate(item.id);
    }
  };

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed bottom-0 left-0 right-0 z-50 bg-deep-petrol border-t border-stone/30"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex items-stretch h-16">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item);
          const NavIcon = item.icon;
          const label = labels[item.id] ?? item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleTap(item)}
              aria-current={active ? 'page' : undefined}
              className={`relative flex-1 flex flex-col items-center justify-center gap-1 transition-colors duration-150 ${
                active ? 'text-primary' : 'text-stone/60 hover:text-stone'
              }`}
            >
              <NavIcon size={19} strokeWidth={active ? 2.5 : 1.75} />
              <span
                className={`text-[9px] uppercase tracking-wider font-medium leading-none font-sans ${
                  active ? 'text-primary' : 'text-stone/50'
                }`}
              >
                {label}
              </span>
              {active && (
                <span className="absolute bottom-0 w-8 h-px bg-primary" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
