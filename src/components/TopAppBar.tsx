import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FitCallSource, Surface } from '../types';

type PublicNavItem =
  | { id: Surface; label: string; type: 'surface' }
  | { id: string; label: string; type: 'section' };

const publicNavItems: PublicNavItem[] = [
  { id: 'home', label: 'Início', type: 'surface' },
  { id: 'antes-da-reserva', label: 'Antes da Reserva', type: 'surface' },
  { id: 'sample-blueprint', label: 'Sample Blueprint', type: 'surface' },
  { id: 'servicos', label: 'Serviços', type: 'section' },
  { id: 'faq', label: 'FAQ', type: 'section' },
];

interface TopAppBarProps {
  currentSurface: Surface;
  onNavigate: (surface: Surface) => void;
  onNavigateHomeSection: (sectionId: string) => void;
  onOpenFitCall: (source: FitCallSource) => void;
}

export default function TopAppBar({ currentSurface, onNavigate, onNavigateHomeSection, onOpenFitCall }: TopAppBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isItemActive = (item: PublicNavItem) => currentSurface === item.id
    || (currentSurface === 'strategic-finding' && item.id === 'antes-da-reserva');

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentSurface]);

  useEffect(() => {
    const desktopMedia = window.matchMedia('(min-width: 768px)');
    const closeDrawerOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };

    desktopMedia.addEventListener('change', closeDrawerOnDesktop);
    return () => desktopMedia.removeEventListener('change', closeDrawerOnDesktop);
  }, []);

  const handleNav = (item: PublicNavItem) => {
    if (item.type === 'section') {
      onNavigateHomeSection(item.id);
    } else {
      onNavigate(item.id as Surface);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full top-0 sticky z-50 bg-white border-b border-cool-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex justify-between items-center h-20">
        
        {/* Left Side: Brand Logo and Mobile Action */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary hover:text-cool-gray-600 transition-colors duration-200 p-1"
            aria-label="Abrir Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <button 
            onClick={() => handleNav(publicNavItems[0])} 
            className="text-left select-none outline-none focus:outline-none"
          >
            <span className="font-manrope text-xl md:text-2xl font-black tracking-tighter text-primary">
              PELISSARI
            </span>
            <span className="block text-[8px] tracking-[0.25em] font-medium text-cool-gray-500 uppercase -mt-1 leading-none font-sans">
              Travel Design
            </span>
          </button>
        </div>

        {/* Center: Main Navigation (Desktop) */}
        <nav aria-label="Navegação pública" className="hidden md:flex gap-8 items-center h-full">
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
        </nav>

        {/* Right Side: Primary Call To Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenFitCall('top_nav')}
            className="bg-primary text-white text-[10px] md:text-xs uppercase font-bold tracking-widest px-4 md:px-6 py-3 rounded-custom hover:bg-charcoal transition-all active:scale-[0.98]"
          >
            Agendar Diagnóstico
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 right-0 bg-white border-b border-cool-gray-200 shadow-xl z-40 py-6 px-4 space-y-4">
          <div className="space-y-2">
            {publicNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item)}
                className={`w-full text-left px-3 py-2.5 rounded-custom text-sm font-semibold flex items-center justify-between ${
                  isItemActive(item)
                    ? 'bg-cool-gray-100 text-primary font-bold' 
                    : 'text-cool-gray-600 hover:bg-cool-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenFitCall('top_nav');
              }}
              className="w-full bg-cool-gray-100 text-primary text-center py-3 rounded-custom text-xs uppercase font-bold tracking-widest block border border-cool-gray-200"
            >
              Agendar Diagnóstico
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
