import React from 'react';
import { Footprints } from 'lucide-react';
import { PacingRow, EnergyLevel, DecisionLoad } from '../../data/clientDeliveryTemplate';

interface PacingSectionProps {
  rows: PacingRow[];
}

const energyDot: Record<EnergyLevel, string> = {
  baixo: 'bg-cool-gray-300',
  moderado: 'bg-warm-gray-400',
  intenso: 'bg-primary',
};

const energyLabel: Record<EnergyLevel, string> = {
  baixo: 'Baixo',
  moderado: 'Moderado',
  intenso: 'Intenso',
};

const decisionBadge: Record<DecisionLoad, string> = {
  baixo: 'bg-cool-gray-100 text-cool-gray-500',
  médio: 'bg-warm-gray-100 text-warm-gray-500',
  alto: 'bg-primary/10 text-primary',
};

export default function PacingSection({ rows }: PacingSectionProps) {
  return (
    <section className="mb-14 pb-14 border-b border-cool-gray-100">
      <div className="flex items-start gap-3 mb-8">
        <Footprints size={16} className="text-primary shrink-0 mt-0.5" />
        <div>
          <h2 className="font-sans text-xl font-black text-primary">Visão de Ritmo</h2>
          <p className="text-xs text-cool-gray-500 mt-1">Pacing por fase — energia, âncora, espaço, carga de decisão</p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mb-6 text-[10px] uppercase tracking-widest font-bold text-cool-gray-400">
        {(['baixo', 'moderado', 'intenso'] as EnergyLevel[]).map((level) => (
          <span key={level} className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${energyDot[level]}`} />
            {energyLabel[level]}
          </span>
        ))}
      </div>

      {/* Pacing rows — editorial table, not calendar */}
      <div className="space-y-0 border border-cool-gray-200 rounded-custom overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-12 gap-0 bg-cool-gray-50 border-b border-cool-gray-200 text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 px-4 py-2.5 hidden md:grid">
          <span className="col-span-2">Fase</span>
          <span className="col-span-1 text-center">Energia</span>
          <span className="col-span-4 pl-4">Âncora</span>
          <span className="col-span-3 pl-4">Espaço Livre</span>
          <span className="col-span-2 text-right">Decisão</span>
        </div>

        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-0 px-4 py-4 border-b last:border-b-0 border-cool-gray-100 ${
              i % 2 === 0 ? 'bg-white' : 'bg-cool-gray-50/50'
            }`}
          >
            {/* Label — always visible, acts as row identifier */}
            <div className="md:col-span-2 flex items-center gap-2">
              <span className="font-sans text-xs font-bold text-primary">{row.label}</span>
            </div>

            {/* Energy — dot + label visible on mobile */}
            <div className="md:col-span-1 flex md:justify-center items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${energyDot[row.energyLevel]}`} />
              <span className="text-[10px] text-cool-gray-500 md:hidden">
                <span className="font-bold uppercase tracking-widest mr-1">Energia:</span>
                {energyLabel[row.energyLevel]}
              </span>
            </div>

            {/* Anchor — mobile label above content */}
            <div className="md:col-span-4 md:pl-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-cool-gray-400 block mb-0.5 md:hidden">
                Âncora
              </span>
              <span className="text-xs text-cool-gray-700">{row.anchor}</span>
              {row.note && (
                <p className="text-[10px] text-cool-gray-400 mt-0.5 italic leading-snug">{row.note}</p>
              )}
            </div>

            {/* White space — mobile label above content */}
            <div className="md:col-span-3 md:pl-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-cool-gray-400 block mb-0.5 md:hidden">
                Espaço Livre
              </span>
              <span className="text-xs text-cool-gray-500">{row.whiteSpace}</span>
            </div>

            {/* Decision load — mobile label inline with badge */}
            <div className="md:col-span-2 flex md:justify-end items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-cool-gray-400 md:hidden">
                Decisão:
              </span>
              <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded ${decisionBadge[row.decisionLoad]}`}>
                {row.decisionLoad}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
