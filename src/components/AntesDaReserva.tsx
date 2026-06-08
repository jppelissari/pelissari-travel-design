import React, { useState } from 'react';
import { Share2, ArrowRight, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { FitCallSource } from '../types';
import { getStrategicFindings } from '../data/strategicFindings';
import { useLanguage } from '../context/LanguageContext';

interface AntesDaReservaProps {
  onOpenFinding: (slug: string) => void;
  onOpenFitCall: (source: FitCallSource) => void;
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' } as const,
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
};

export default function AntesDaReserva({ onOpenFinding, onOpenFitCall }: AntesDaReservaProps) {
  const { c, lang } = useLanguage();
  const a = c.antesDaReserva;
  const strategicFindings = getStrategicFindings(lang);

  const [filter, setFilter] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredInsights = filter === 'all'
    ? strategicFindings
    : strategicFindings.filter(i => i.categoryId === filter);

  const simulateShare = (id: string, title: string) => {
    const shareUrl = window.location.origin;
    const textToCopy = lang === 'pt'
      ? `ELUZA - Achado Estratégico:\n\n*${title}*\nConfira a estrutura antes de reservar sua viagem.\nAcesse: ${shareUrl}`
      : `ELUZA - Strategic Finding:\n\n*${title}*\nReview the structure before booking the trip.\nVisit: ${shareUrl}`;
    if (navigator.clipboard) navigator.clipboard.writeText(textToCopy);
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

  const [featured, ...rest] = filteredInsights;

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-10 md:py-16">

      {/* Page header */}
      <motion.div {...fadeUp} className="mb-14 max-w-3xl space-y-3">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-cool-gray-500 block">{a.eyebrow}</span>
        <h1 className="font-manrope text-4xl md:text-6xl font-black text-primary tracking-tight leading-[1.05]">{a.title}</h1>
        <p className="text-sm text-cool-gray-600 leading-relaxed max-w-xl">{a.description}</p>
      </motion.div>

      {/* Filter bar */}
      <motion.div {...fadeUp} className="flex flex-wrap gap-2 mb-12 border-b border-cool-gray-200 pb-5">
        {filters.map(btn => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={`px-4 py-2 rounded-custom text-xs uppercase font-bold tracking-wider transition-colors border ${
              filter === btn.id
                ? 'bg-bone text-deep-petrol border-primary'
                : 'bg-white text-cool-gray-500 border-cool-gray-200 hover:text-primary hover:border-cool-gray-300'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </motion.div>

      {/* Editorial grid */}
      {filteredInsights.length > 0 && (
        <div className="space-y-6">

          {/* Featured first card — full width, tall */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -2 }}
              onClick={() => onOpenFinding(featured.slug)}
              className="cursor-pointer bg-white border border-cool-gray-200 rounded-custom overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Accent line */}
              <div className="h-0.5 bg-primary w-full" />
              <div className="grid md:grid-cols-[1fr_1fr] gap-0 divide-y md:divide-y-0 md:divide-x divide-cool-gray-100">
                {/* Left: title + mistake */}
                <div className="p-8 md:p-10 space-y-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-cool-gray-400 bg-cool-gray-100 px-2.5 py-1 rounded-sm">
                      {featured.eyebrow}
                    </span>
                    <span className="text-cool-gray-400 flex items-center gap-1 text-[11px]">
                      <Clock size={11} /> {a.card.readTime}
                    </span>
                  </div>
                  <h2 className="font-sans text-2xl md:text-3xl font-semibold text-primary leading-tight">
                    {featured.title}
                  </h2>
                  <div>
                    <span className="font-sans text-[10px] uppercase font-semibold tracking-widest text-cool-gray-500 flex items-center gap-1 mb-2">
                      <AlertCircle size={10} className="text-cool-gray-400" />
                      {a.card.commonMistake}
                    </span>
                    <p className="text-sm text-cool-gray-500 italic leading-relaxed">
                      {featured.sections.commonMistake}
                    </p>
                  </div>
                </div>
                {/* Right: pelissari read + decision */}
                <div className="p-8 md:p-10 space-y-5 bg-cool-gray-50">
                  <div>
                    <span className="font-sans text-[10px] uppercase font-semibold tracking-widest text-primary block mb-2">
                      {a.card.pelissariRead}
                    </span>
                    <p className="text-sm text-cool-gray-700 font-medium leading-relaxed">
                      {featured.sections.pelissariRead}
                    </p>
                  </div>
                  <div className="bg-white border border-cool-gray-200 p-5 rounded-custom">
                    <span className="font-sans text-[10px] uppercase font-semibold tracking-widest text-primary block mb-2">
                      {a.card.decision}
                    </span>
                    <p className="text-sm text-cool-gray-600 leading-relaxed">
                      {featured.sections.decisionBeforeBooking}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={e => { e.stopPropagation(); simulateShare(featured.slug, featured.title); }}
                      className={`text-[10px] uppercase font-bold tracking-widest px-3 py-2 rounded-custom transition-all flex items-center gap-1.5 ${
                        copiedId === featured.slug
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-cool-gray-100 text-cool-gray-600 border border-cool-gray-200 hover:text-primary'
                      }`}
                    >
                      <Share2 size={12} />
                      {copiedId === featured.slug ? a.card.copied : a.card.share}
                    </button>
                    <button
                      onClick={e => { e.stopPropagation(); onOpenFinding(featured.slug); }}
                      className="text-xs font-bold text-primary hover:opacity-60 transition-opacity flex items-center gap-1"
                    >
                      {a.card.read} <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Remaining cards — asymmetric grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rest.map((insight, i) => {
                // Every 3rd card (index 2, 5, …) spans 2 cols for variety
                const isWide = i === 2;
                return (
                  <motion.div
                    key={insight.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                    whileHover={{ y: -2 }}
                    onClick={() => onOpenFinding(insight.slug)}
                    className={`bg-white border border-cool-gray-200 rounded-custom p-6 flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden ${
                      isWide ? 'md:col-span-2' : ''
                    }`}
                  >
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-cool-gray-100">
                      <div className="h-full bg-primary/50 w-1/3" />
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-cool-gray-400 bg-cool-gray-100 px-2.5 py-1 rounded-sm">
                          {insight.eyebrow}
                        </span>
                        <span className="text-cool-gray-400 flex items-center gap-1 text-[11px]">
                          <Clock size={11} /> {a.card.readTime}
                        </span>
                      </div>

                      <h2 className="font-sans text-lg font-semibold text-primary leading-snug">
                        {insight.title}
                      </h2>

                      <div className="h-px bg-cool-gray-100" />

                      <div className="space-y-3">
                        <div>
                          <span className="font-sans text-[10px] uppercase font-semibold tracking-widest text-cool-gray-500 flex items-center gap-1">
                            <AlertCircle size={10} className="text-cool-gray-400" />
                            {a.card.commonMistake}
                          </span>
                          <p className="text-xs text-cool-gray-500 italic mt-1 leading-relaxed">
                            {insight.sections.commonMistake}
                          </p>
                        </div>
                        <div>
                          <span className="font-sans text-[10px] uppercase font-semibold tracking-widest text-primary block">
                            {a.card.pelissariRead}
                          </span>
                          <p className="text-xs text-cool-gray-700 font-medium mt-1 leading-relaxed">
                            {insight.sections.pelissariRead}
                          </p>
                        </div>
                      </div>

                      <div className="bg-cool-gray-50 border border-cool-gray-200/70 p-4 rounded-custom text-xs">
                        <span className="font-sans text-[10px] uppercase font-semibold tracking-widest text-primary block mb-1">
                          {a.card.decision}
                        </span>
                        <p className="text-cool-gray-600 leading-relaxed">{insight.sections.decisionBeforeBooking}</p>
                      </div>
                    </div>

                    <div className="pt-5 mt-5 border-t border-cool-gray-100 flex justify-between items-center">
                      <button
                        onClick={e => { e.stopPropagation(); simulateShare(insight.slug, insight.title); }}
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
                        onClick={e => { e.stopPropagation(); onOpenFinding(insight.slug); }}
                        className="text-xs font-bold text-primary hover:opacity-60 transition-opacity flex items-center gap-1"
                      >
                        {a.card.read} <ArrowRight size={12} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Bottom CTA */}
      <motion.section
        {...fadeUp}
        className="mt-20 grid md:grid-cols-[1fr_auto] gap-8 items-center border-t border-cool-gray-200 pt-12"
      >
        <div className="space-y-2">
          <h3 className="font-sans text-xl font-semibold text-primary">{a.cta.title}</h3>
          <p className="text-sm text-cool-gray-600 max-w-xl leading-relaxed">{a.cta.description}</p>
        </div>
        <button
          onClick={() => onOpenFitCall('antes_da_reserva')}
          className="bg-bone text-deep-petrol text-xs uppercase font-bold tracking-widest px-7 py-4 rounded-custom hover:bg-stone transition-colors shrink-0"
        >
          {a.cta.button}
        </button>
      </motion.section>
    </div>
  );
}
