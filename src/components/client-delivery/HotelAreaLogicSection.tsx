import React from 'react';
import { MapPin } from 'lucide-react';
import { HotelAreaEntry } from '../../data/clientDeliveryTemplate';
import VisualPlaceholder from './VisualPlaceholder';

interface HotelAreaLogicSectionProps {
  areas: HotelAreaEntry[];
}

export default function HotelAreaLogicSection({ areas }: HotelAreaLogicSectionProps) {
  return (
    <section className="mb-14 pb-14 border-b border-cool-gray-100">
      <div className="flex items-start gap-3 mb-2">
        <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
        <div>
          <h2 className="font-sans text-xl font-black text-primary">Lógica de Área de Hotel</h2>
          <p className="text-xs text-cool-gray-500 mt-1">Onde ficar — e por quê — não é uma grade de reservas</p>
        </div>
      </div>

      <p className="text-xs text-cool-gray-500 ml-7 mb-8 leading-relaxed max-w-xl">
        A escolha de bairro é uma decisão de design. Ela afeta ritmo, walkability, qualidade do sono e densidade de atividades. Cada área abaixo é analisada pela sua função na rota.
      </p>

      <div className="space-y-8">
        {areas.map((area, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

            <div className="md:col-span-8 space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-sans text-sm font-bold text-primary">{area.area}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 block mb-1">Melhor para</span>
                  <p className="text-xs text-cool-gray-600 leading-relaxed">{area.bestFor}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 block mb-1">Trade-off</span>
                  <p className="text-xs text-cool-gray-600 leading-relaxed">{area.tradeOff}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 block mb-1">Evitar se</span>
                  <p className="text-xs text-cool-gray-600 leading-relaxed">{area.avoidIf}</p>
                </div>
                <div className="bg-cool-gray-50 border border-cool-gray-200 rounded-custom p-3">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-primary block mb-1">Nota de decisão</span>
                  <p className="text-xs text-primary leading-relaxed">{area.decisionNote}</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <VisualPlaceholder
                type={area.visualPlaceholder ?? 'neighborhood-map'}
                height="sm"
              />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
