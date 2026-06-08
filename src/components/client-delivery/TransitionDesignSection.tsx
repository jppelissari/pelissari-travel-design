import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TransitionNote, TransitionType } from '../../data/clientDeliveryTemplate';
import VisualPlaceholder from './VisualPlaceholder';

interface TransitionDesignSectionProps {
  transitions: TransitionNote[];
}

const typeLabel: Record<TransitionType, string> = {
  chegada: 'Chegada',
  transfer: 'Transfer',
  partida: 'Partida',
};

const typeBadge: Record<TransitionType, string> = {
  chegada: 'bg-cool-gray-100 text-cool-gray-600',
  transfer: 'bg-primary/10 text-primary',
  partida: 'bg-warm-gray-100 text-warm-gray-500',
};

export default function TransitionDesignSection({ transitions }: TransitionDesignSectionProps) {
  return (
    <section className="mb-14 pb-14 border-b border-cool-gray-100">
      <div className="flex items-start gap-3 mb-2">
        <ArrowRight size={16} className="text-primary shrink-0 mt-0.5" />
        <div>
          <h2 className="font-sans text-xl font-black text-primary">Design de Transições</h2>
          <p className="text-xs text-cool-gray-500 mt-1">Chegadas, transfers e primeiros 90 minutos em cada base</p>
        </div>
      </div>

      <p className="text-xs text-cool-gray-500 ml-7 mb-8 leading-relaxed max-w-xl">
        Transições mal planejadas consomem energia e geram carga de decisão desnecessária. Cada movimento abaixo foi desenhado com logística e pacing em mente.
      </p>

      <div className="space-y-8">
        {transitions.map((transition) => (
          <div key={transition.id} className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded ${typeBadge[transition.type]}`}>
                  {typeLabel[transition.type]}
                </span>
                <h3 className="font-sans text-sm font-bold text-primary">{transition.label}</h3>
              </div>

              <p className="text-xs text-cool-gray-600 leading-relaxed">{transition.description}</p>

              {transition.pacingNote && (
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 block mb-1">Nota de Pacing</span>
                  <p className="text-xs text-cool-gray-600 leading-relaxed">{transition.pacingNote}</p>
                </div>
              )}

              {transition.firstNinetyMinutes && (
                <div className="bg-cool-gray-50 border border-cool-gray-200 rounded-custom p-4">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-primary block mb-1">Primeiros 90 minutos</span>
                  <p className="text-xs text-primary leading-relaxed">{transition.firstNinetyMinutes}</p>
                </div>
              )}

              {transition.decisionLoadNote && (
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 block mb-1">Carga de Decisão</span>
                  <p className="text-xs text-cool-gray-600 leading-relaxed italic">{transition.decisionLoadNote}</p>
                </div>
              )}
            </div>

            <div className="md:col-span-4">
              <VisualPlaceholder type="transfer-diagram" height="sm" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
