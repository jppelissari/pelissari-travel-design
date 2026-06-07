import React from 'react';
import { ArrowRight, Check, X, GitBranch, Clock4, MoveRight, MapPin, Scissors } from 'lucide-react';
import { motion } from 'motion/react';
import { FitCallSource, Surface } from '../types';
import { trackEvent } from '../lib/tracking';
import { useLanguage } from '../context/LanguageContext';

interface HomeComercialProps {
  onNavigate: (surface: Surface) => void;
  onOpenFitCall: (source: FitCallSource) => void;
}

const SERVICE_FIT_CALL_LOCATIONS = [
  'services_blueprint',
  'services_full_design',
  'services_signature',
] as const;

const PILLAR_ICONS = [GitBranch, Clock4, MoveRight, MapPin, Scissors];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' } as const,
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function HomeComercial({ onNavigate, onOpenFitCall }: HomeComercialProps) {
  const { c } = useLanguage();
  const h = c.home;

  const openSampleBlueprint = (location: 'home_hero' | 'home_achados_card' | 'home_sample_section') => {
    trackEvent('cta_sample_blueprint_opened', { location });
    onNavigate('sample-blueprint');
  };

  const openAchados = () => {
    trackEvent('cta_achados_opened', { location: 'home_achados_section' });
    onNavigate('antes-da-reserva');
  };

  const [featured, ...rest] = h.insights.items;

  return (
    <div className="w-full flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 text-center max-w-5xl mx-auto px-4">
        <motion.div {...fadeUp}>
          <span className="text-[10px] md:text-xs uppercase font-bold tracking-[0.25em] text-cool-gray-500 bg-cool-gray-100 border border-cool-gray-200/60 px-4 py-2 rounded-full inline-block mb-8">
            {h.hero.badge}
          </span>
          <h1 className="font-manrope text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary tracking-tight mb-7 leading-[1.05]">
            {h.hero.title}
          </h1>
          <p className="text-sm md:text-base text-cool-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
            {h.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenFitCall('home_hero')}
              className="bg-primary text-white text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-custom hover:bg-black transition-colors"
            >
              {h.hero.ctaMain}
            </button>
            <button
              onClick={() => openSampleBlueprint('home_hero')}
              className="bg-white border border-cool-gray-300 text-primary text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-custom hover:bg-cool-gray-50 transition-colors"
            >
              {h.hero.ctaSecondary}
            </button>
          </div>
        </motion.div>
      </section>

      {/* ── Problem — visual pillar narrative ────────────────────────── */}
      <section className="py-20 border-y border-cool-gray-200 bg-cool-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <h2 className="font-manrope text-3xl md:text-4xl font-black tracking-tight text-primary leading-[1.1]">
              {h.problem.title}
            </h2>
          </motion.div>

          {/* Five pillars */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-cool-gray-200 border border-cool-gray-200 rounded-custom overflow-hidden">
            {h.problem.pillars.map((pillar, i) => {
              const Icon = PILLAR_ICONS[i];
              return (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white px-5 py-6 md:py-8 space-y-3 group"
                >
                  <Icon size={18} className="text-primary opacity-70" />
                  <span className="block font-manrope text-sm font-bold text-primary">{pillar.label}</span>
                  <p className="text-[11px] text-cool-gray-500 leading-relaxed">{pillar.detail}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            {...fadeUp}
            className="mt-8 text-sm text-cool-gray-600 max-w-xl leading-relaxed"
          >
            {h.problem.connector}
          </motion.p>
        </div>
      </section>

      {/* ── Visual method ────────────────────────────────────────────── */}
      <motion.section {...fadeUp} className="px-4 max-w-[1280px] mx-auto w-full py-20 md:py-28">
        <div className="w-full h-56 md:h-64 bg-cool-gray-100 border border-cool-gray-200 rounded-custom relative overflow-hidden flex flex-col justify-center items-center text-center p-6">
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-20 pointer-events-none">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border-t border-l border-cool-gray-300" />
            ))}
          </div>
          <div className="relative z-10 space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-cool-gray-400 block">
              {h.method.eyebrow}
            </span>
            <h2 className="font-manrope text-2xl md:text-3xl font-black text-primary tracking-tight">
              {h.method.title}
            </h2>
            <p className="text-xs text-cool-gray-500 max-w-lg mx-auto leading-relaxed">
              {h.method.description}
            </p>
            <button
              onClick={() => openSampleBlueprint('home_sample_section')}
              className="mt-2 text-[10px] uppercase tracking-widest font-bold text-primary inline-flex items-center gap-1 border-b border-primary pb-0.5 hover:opacity-60 transition-opacity"
            >
              {h.method.cta} <ArrowRight size={11} />
            </button>
          </div>
        </div>
      </motion.section>

      {/* ── Insights — editorial layout ───────────────────────────────── */}
      <section className="py-16 md:py-20 max-w-[1280px] mx-auto px-4 md:px-8 w-full">
        <motion.div {...fadeUp} className="max-w-3xl mb-12">
          <h2 className="font-manrope text-3xl md:text-4xl font-black tracking-tight text-primary">
            {h.insights.title}
          </h2>
          <p className="text-sm text-cool-gray-600 mt-3 leading-relaxed max-w-xl">
            {h.insights.description}
          </p>
        </motion.div>

        {/* Featured card — full width */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          whileHover={{ y: -2 }}
          onClick={() => openSampleBlueprint('home_achados_card')}
          className="border border-cool-gray-200 rounded-custom p-8 md:p-10 mb-6 grid md:grid-cols-[1fr_auto] gap-8 cursor-pointer hover:shadow-md transition-shadow bg-white"
        >
          <div className="space-y-5 max-w-2xl">
            <span className="text-[9px] uppercase tracking-widest font-bold text-cool-gray-400">
              {h.insights.cardLabels.error}
            </span>
            <h3 className="font-manrope text-xl md:text-2xl font-bold text-primary leading-snug">
              {featured.title}
            </h3>
            <p className="text-sm text-cool-gray-600 leading-relaxed italic">{featured.error}</p>
            <div className="pt-2 border-t border-cool-gray-100">
              <span className="text-[9px] uppercase tracking-widest font-bold text-primary block mb-2">
                {h.insights.cardLabels.read}
              </span>
              <p className="text-sm text-cool-gray-700 font-medium leading-relaxed">{featured.read}</p>
            </div>
          </div>
          <div className="hidden md:flex items-end">
            <span className="text-[10px] uppercase tracking-widest font-bold text-primary flex items-center gap-1 pb-1 border-b border-primary whitespace-nowrap">
              {h.insights.cardLabels.cta} <ArrowRight size={11} />
            </span>
          </div>
        </motion.article>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rest.map((insight, i) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
              onClick={() => openSampleBlueprint('home_achados_card')}
              className="border border-cool-gray-200 rounded-custom p-6 flex flex-col gap-4 cursor-pointer hover:shadow-md transition-shadow bg-white"
            >
              <h3 className="font-manrope text-base font-bold text-primary leading-snug">{insight.title}</h3>
              <div className="space-y-3 flex-1">
                {([
                  [h.insights.cardLabels.error, insight.error, 'italic text-cool-gray-500'],
                  [h.insights.cardLabels.decision, insight.decision, 'text-cool-gray-700 font-medium'],
                ] as [string, string, string][]).map(([label, text, cls]) => (
                  <div key={label}>
                    <span className="block text-[9px] uppercase tracking-widest font-bold text-cool-gray-400 mb-1">{label}</span>
                    <p className={`text-xs leading-relaxed ${cls}`}>{text}</p>
                  </div>
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary flex items-center gap-1 mt-auto">
                {h.insights.cardLabels.cta} <ArrowRight size={11} />
              </span>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-10">
          <button
            onClick={openAchados}
            className="text-xs uppercase tracking-widest font-bold text-primary flex items-center gap-2 border-b border-primary pb-1 hover:opacity-60 transition-opacity"
          >
            {h.insights.seeAll} <ArrowRight size={12} />
          </button>
        </motion.div>
      </section>

      {/* ── Services — narrative vertical layout ─────────────────────── */}
      <section id="servicos" className="scroll-mt-24 py-20 border-y border-cool-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <h2 className="font-manrope text-3xl md:text-4xl font-black tracking-tight text-primary">
              {h.services.title}
            </h2>
            <p className="text-sm text-cool-gray-600 mt-3 leading-relaxed">{h.services.description}</p>
          </motion.div>

          <div className="space-y-0 divide-y divide-cool-gray-200 border-y border-cool-gray-200">
            {h.services.items.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="py-12 md:py-14 grid md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-start group"
              >
                {/* Left: identity */}
                <div className="space-y-4">
                  <div className="flex items-baseline gap-4">
                    <h3 className="font-manrope text-2xl md:text-3xl font-black text-primary">{service.title}</h3>
                    <span className="font-manrope text-sm font-bold text-cool-gray-400">{service.price}</span>
                  </div>
                  <p className="text-sm text-cool-gray-600 leading-relaxed max-w-xs">{service.description}</p>
                  <button
                    onClick={() => onOpenFitCall(SERVICE_FIT_CALL_LOCATIONS[idx])}
                    className="mt-2 text-[10px] uppercase tracking-widest font-bold text-primary border-b border-primary pb-0.5 inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
                  >
                    {service.cta} <ArrowRight size={11} />
                  </button>
                </div>

                {/* Right: includes / excludes */}
                <div className="space-y-6">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-cool-gray-400 block mb-4">
                      {h.services.includesLabel}
                    </span>
                    <ul className="space-y-3">
                      {service.includes.map(item => (
                        <li key={item} className="flex items-start gap-3 text-sm text-cool-gray-700">
                          <Check size={14} className="shrink-0 mt-0.5 text-primary" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {service.excludes.length > 0 && (
                    <div>
                      <span className="text-[9px] uppercase tracking-widest font-bold text-cool-gray-400 block mb-4">
                        {h.services.excludesLabel}
                      </span>
                      <ul className="space-y-2">
                        {service.excludes.map(item => (
                          <li key={item} className="flex items-start gap-3 text-sm text-cool-gray-400">
                            <X size={14} className="shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diagnostic banner ─────────────────────────────────────────── */}
      <motion.section {...fadeUp} className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-20">
        <div className="bg-primary text-white rounded-custom p-10 md:p-16">
          <div className="max-w-3xl">
            <h2 className="font-manrope text-2xl md:text-4xl font-black tracking-tight leading-tight">
              {h.diagnostic.title}
            </h2>
            <p className="text-sm text-cool-gray-300 leading-relaxed mt-6 max-w-2xl">
              {h.diagnostic.description}
            </p>
            <button
              onClick={() => onOpenFitCall('diagnostic_section')}
              className="mt-8 bg-white text-primary text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-custom hover:bg-cool-gray-100 transition-colors"
            >
              {h.diagnostic.cta}
            </button>
          </div>
        </div>
      </motion.section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section id="faq" className="scroll-mt-24 py-20 border-t border-cool-gray-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.h2 {...fadeUp} className="font-manrope text-3xl font-black tracking-tight text-primary mb-10">
            {h.faq.title}
          </motion.h2>
          <div className="divide-y divide-cool-gray-200 border-y border-cool-gray-200">
            {h.faq.items.map(({ q, a }, i) => (
              <motion.details
                key={q}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group py-5"
              >
                <summary className="font-manrope font-bold text-sm cursor-pointer list-none flex justify-between gap-4 select-none">
                  {q}
                  <span className="text-cool-gray-400 group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="text-sm text-cool-gray-600 leading-relaxed mt-4 max-w-3xl">{a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
