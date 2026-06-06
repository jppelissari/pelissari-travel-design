import React from 'react';
import { Compass } from 'lucide-react';
import { RoutePhase } from '../../data/clientDeliveryTemplate';
import VisualPlaceholder from './VisualPlaceholder';

interface RouteArchitectureSectionProps {
  phases: RoutePhase[];
}

export default function RouteArchitectureSection({ phases }: RouteArchitectureSectionProps) {
  return (
    <section className="mb-14 pb-14 border-b border-cool-gray-100">
      <div className="flex items-start gap-3 mb-8">
        <Compass size={16} className="text-primary shrink-0 mt-0.5" />
        <div>
          <h2 className="font-manrope text-xl font-black text-primary">Arquitetura da Rota</h2>
          <p className="text-xs text-cool-gray-500 mt-1">Sequência projetada com raciocínio por fase</p>
        </div>
      </div>

      <div className="space-y-10">
        {phases.map((phase, i) => (
          <div key={phase.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">

            {/* Phase number + connector */}
            <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-2 md:gap-0">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-manrope text-xs font-black shrink-0">
                {i + 1}
              </div>
              {i < phases.length - 1 && (
                <div className="hidden md:block w-px flex-grow bg-cool-gray-200 ml-4 mt-2 min-h-[60px]" />
              )}
            </div>

            {/* Phase content */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <h3 className="font-manrope text-lg font-bold text-primary">
                  {phase.destination}
                  <span className="ml-2 text-sm font-normal text-cool-gray-400">{phase.nights} noites</span>
                </h3>
                <p className="text-xs font-bold text-cool-gray-400 uppercase tracking-widest mt-0.5">{phase.role}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 block mb-1">Por que aqui, por que agora</span>
                  <p className="text-sm text-cool-gray-600 leading-relaxed">{phase.whyHere}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 block mb-1">O que esta fase protege</span>
                  <p className="text-sm text-cool-gray-600 leading-relaxed">{phase.whatItProtects}</p>
                </div>
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="md:col-span-4">
              <VisualPlaceholder type={phase.visualPlaceholder} height="sm" />
            </div>

          </div>
        ))}
      </div>

      {/* Route map placeholder */}
      <div className="mt-10">
        <p className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 mb-3">Visão geral da rota</p>
        <VisualPlaceholder type="route-map" height="md" />
      </div>
    </section>
  );
}
