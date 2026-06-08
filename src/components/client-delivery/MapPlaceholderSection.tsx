import React from 'react';
import { Map } from 'lucide-react';
import VisualPlaceholder from './VisualPlaceholder';

export default function MapPlaceholderSection() {
  return (
    <section className="mb-14 pb-14 border-b border-cool-gray-100">
      <div className="flex items-start gap-3 mb-6">
        <Map size={16} className="text-primary shrink-0 mt-0.5" />
        <div>
          <h2 className="font-sans text-xl font-black text-primary">Mapa da Rota</h2>
          <p className="text-xs text-cool-gray-500 mt-1">Visão geográfica dos destinos e conexões</p>
        </div>
      </div>

      <VisualPlaceholder type="route-map" height="lg" />

      <p className="text-[10px] text-cool-gray-400 mt-3 uppercase tracking-widest font-sans">
        Integração com mapa interativo — preparado para embed futuro
      </p>
    </section>
  );
}
