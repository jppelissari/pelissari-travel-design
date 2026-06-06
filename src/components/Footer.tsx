import React from 'react';
import { Surface } from '../types';
import { ShieldCheck, Lock } from 'lucide-react';

interface FooterProps {
  onNavigate: (surface: Surface) => void;
  currentSurface: Surface;
}

export default function Footer({ onNavigate, currentSurface }: FooterProps) {
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
            Design first. Booking second. Perks third.<br />
            Mantra para estruturação de itinerários complexos com precisão arquitetônica, garantindo que o design da viagem dite a execução.
          </p>
          
          <div className="flex items-center gap-2 text-[10px] text-cool-gray-500 uppercase tracking-widest bg-white border border-cool-gray-200 px-3 py-1.5 rounded-custom w-fit">
            <ShieldCheck size={12} className="text-primary shrink-0" />
            <span>Infraestrutura Segura de Pagamentos</span>
          </div>
        </div>

        {/* Global Nav columns */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
          
          {/* Col 1: Navegação */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-primary">Navegação</h4>
            <div className="flex flex-col gap-2 text-xs">
              <button 
                onClick={() => onNavigate('home')} 
                className={`text-left text-cool-gray-500 hover:text-primary transition-colors ${currentSurface === 'home' ? 'font-bold text-primary underline underline-offset-4' : ''}`}
              >
                Início Comercial
              </button>
              <button 
                onClick={() => onNavigate('antes-da-reserva')} 
                className={`text-left text-cool-gray-500 hover:text-primary transition-colors ${currentSurface === 'antes-da-reserva' ? 'font-bold text-primary underline underline-offset-4' : ''}`}
              >
                Antes da Reserva
              </button>
              <button 
                onClick={() => onNavigate('sample-blueprint')} 
                className={`text-left text-cool-gray-500 hover:text-primary transition-colors ${currentSurface === 'sample-blueprint' ? 'font-bold text-primary underline underline-offset-4' : ''}`}
              >
                Sample Blueprint
              </button>
            </div>
          </div>

          {/* Col 2: Área Exclusiva */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-primary">Acesso</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-[10px] text-cool-gray-400 uppercase tracking-widest select-none">
                <Lock size={10} className="shrink-0" />
                <span>Área Exclusiva</span>
              </div>
            </div>
          </div>

          {/* Col 3: Legal & Contato */}
          <div className="space-y-3 col-span-2 sm:col-span-1">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-primary">Legal</h4>
            <div className="flex flex-col gap-2 text-xs">
              <span className="text-cool-gray-400 cursor-default" aria-disabled="true">Termos de Serviço</span>
              <span className="text-cool-gray-400 cursor-default" aria-disabled="true">Política de Privacidade</span>
              <span className="text-cool-gray-400">contato@pelissari.travel</span>
            </div>
          </div>

        </div>

      </div>

      {/* Extreme Bottom Bar */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-cool-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-cool-gray-400 uppercase tracking-widest">
        <span>&copy; {new Date().getFullYear()} Pelissari Travel Design. Todos os direitos reservados.</span>
        <span>Made in the US / Operated Globally</span>
      </div>
    </footer>
  );
}
