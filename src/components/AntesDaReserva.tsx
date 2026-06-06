import React, { useState } from 'react';
import { Share2, ArrowRight, Clock, AlertCircle } from 'lucide-react';
import { FitCallSource } from '../types';
import { strategicFindings } from '../data/strategicFindings';
import { useLanguage } from '../context/LanguageContext';

interface AntesDaReservaProps {
  onOpenFinding: (slug: string) => void;
  onOpenFitCall: (source: FitCallSource) => void;
}

export default function AntesDaReserva({ onOpenFinding, onOpenFitCall }: AntesDaReservaProps) {
  const { c } = useLanguage();
  const a = c.antesDaReserva;

  const [filter, setFilter] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredInsights = filter === 'all'
    ? strategicFindings
    : strategicFindings.filter(i => i.categoryId === filter);

  const simulateShare = (id: string, title: string) => {
    const textToCopy = `Pellissari Travel Design - Insight Estratégico:\n\n*${title}*\nConfira o planejamento estrutural antes de reservar sua viagem.\nAcesse: https://pelissari.travel/insights`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
    }
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filters = [
    { id: 'all', label: a.filters.all },
    { id: 'routes', label: a.filters.routes },
    { id: 'pacing', label: a.filters.pacing },
    { id: 'accommodations', label: a.filters.accommodations },
    { id: 'experiences', label: a.filters.experiences },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Page Header */}
      <div className="mb-12 max-w-3xl space-y-3">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-cool-gray-500 block">{a.eyebrow}</span>
        <h1 className="font-manrope text-3xl md:text-5xl font-black text-primary tracking-tight">{a.title}</h1>
        <p className="text-sm text-cool-gray-600 leading-relaxed">{a.description}</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-10 border-b border-cool-gray-200 pb-4">
        {filters.map(btn => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={`px-4 py-2 rounded-custom text-xs uppercase font-bold tracking-wider transition-colors border ${
              filter === btn.id
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-cool-gray-500 border-cool-gray-200 hover:text-primary hover:border-cool-gray-300'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredInsights.map(insight => (
          <div
            key={insight.slug}
            onClick={() => onOpenFinding(insight.slug)}
            className="bg-white border border-cool-gray-200 rounded-custom p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden cursor-pointer focus-within:ring-1 focus-within:ring-primary"
          >
            {/* Top accent */}
            <div className="absolute top-0 right-0 left-0 h-1 bg-cool-gray-100">
              <div className="h-full bg-primary/40 w-1/3"></div>
            </div>

            <div className="space-y-4 pt-1">
              <div className="flex justify-between items-start gap-2">
                <span className="text-[9px] uppercase font-bold tracking-wider text-cool-gray-400 bg-cool-gray-100 px-2.5 py-1 rounded-sm">
                  {insight.eyebrow}
                </span>
                <span className="text-cool-gray-400 flex items-center gap-1 text-[11px]">
                  <Clock size={11} /> {a.card.readTime}
                </span>
              </div>

              <h2 className="font-manrope text-lg font-bold text-primary leading-snug">
                {insight.title}
              </h2>

              <div className="h-px bg-cool-gray-100"></div>

              <div className="space-y-3.5">
                <div>
                  <span className="font-manrope text-[10px] uppercase font-black tracking-widest text-cool-gray-500 flex items-center gap-1">
                    <AlertCircle size={10} className="text-cool-gray-400" />
                    {a.card.commonMistake}
                  </span>
                  <p className="text-xs text-cool-gray-500 italic mt-1 leading-relaxed">
                    {insight.sections.commonMistake}
                  </p>
                </div>

                <div>
                  <span className="font-manrope text-[10px] uppercase font-black tracking-widest text-primary block">
                    {a.card.pelissariRead}
                  </span>
                  <p className="text-xs text-cool-gray-700 font-medium mt-1 leading-relaxed text-balance">
                    {insight.sections.pelissariRead}
                  </p>
                </div>
              </div>

              <div className="bg-cool-gray-50 border border-cool-gray-200/70 p-4 rounded-custom text-xs">
                <span className="font-manrope text-[10px] uppercase font-black tracking-widest text-primary block mb-1">
                  {a.card.decision}
                </span>
                <p className="text-cool-gray-600 leading-relaxed">{insight.sections.decisionBeforeBooking}</p>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="pt-6 mt-6 border-t border-cool-gray-100 flex justify-between items-center bg-white">
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  simulateShare(insight.slug, insight.title);
                }}
                className={`text-[10px] uppercase font-bold tracking-widest px-3 py-2 rounded-custom transition-all flex items-center gap-1.5 ${
                  copiedId === insight.slug
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-cool-gray-50 text-cool-gray-600 border border-cool-gray-200 hover:text-primary hover:bg-cool-gray-100'
                }`}
              >
                <Share2 size={12} />
                {copiedId === insight.slug ? a.card.copied : a.card.share}
              </button>

              <button
                onClick={(event) => {
                  event.stopPropagation();
                  onOpenFinding(insight.slug);
                }}
                className="text-xs font-bold text-primary hover:opacity-70 transition-all flex items-center gap-1"
              >
                {a.card.read} <ArrowRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="mt-16 bg-cool-gray-50 border border-cool-gray-200 p-8 rounded-custom flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-manrope text-xl font-bold text-primary">{a.cta.title}</h3>
          <p className="text-xs text-cool-gray-600 max-w-xl leading-relaxed">{a.cta.description}</p>
        </div>
        <button
          onClick={() => onOpenFitCall('antes_da_reserva')}
          className="bg-primary text-white text-xs uppercase font-bold tracking-widest px-6 py-3.5 rounded-custom hover:bg-black transition-colors shrink-0"
        >
          {a.cta.button}
        </button>
      </section>
    </div>
  );
}
