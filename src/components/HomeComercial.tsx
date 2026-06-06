import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
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

  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <section className="py-16 md:py-24 text-center max-w-5xl mx-auto px-4">
        <span className="text-[10px] md:text-xs uppercase font-bold tracking-[0.25em] text-cool-gray-500 bg-cool-gray-100 border border-cool-gray-200/60 px-4 py-2 rounded-full inline-block mb-6">
          {h.hero.badge}
        </span>
        <h1 className="font-manrope text-4xl sm:text-5xl md:text-6xl font-black text-primary tracking-tight mb-6 leading-[1.1]">
          {h.hero.title}
        </h1>
        <p className="text-sm md:text-base text-cool-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
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
      </section>

      {/* Problem statement */}
      <section className="py-16 border-y border-cool-gray-200 bg-cool-gray-50">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="font-manrope text-3xl md:text-4xl font-black tracking-tight text-primary mb-6">
            {h.problem.title}
          </h2>
          <div className="space-y-4 text-sm md:text-base text-cool-gray-600 leading-relaxed">
            <p>{h.problem.p1}</p>
            <p>{h.problem.p2}</p>
          </div>
        </div>
      </section>

      {/* Visual method */}
      <section className="px-4 max-w-[1280px] mx-auto w-full py-16 md:py-24">
        <div className="w-full h-56 md:h-72 bg-cool-gray-100 border border-cool-gray-200 rounded-custom relative overflow-hidden flex flex-col justify-center items-center text-center p-6">
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-30 pointer-events-none">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border-t border-l border-cool-gray-300" />
            ))}
          </div>
          <div className="relative z-10 space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-cool-gray-500 block">
              {h.method.eyebrow}
            </span>
            <h2 className="font-manrope text-2xl md:text-3xl font-black text-primary tracking-tight">
              {h.method.title}
            </h2>
            <p className="text-xs md:text-sm text-cool-gray-600 max-w-xl mx-auto leading-relaxed">
              {h.method.description}
            </p>
            <button
              onClick={() => openSampleBlueprint('home_sample_section')}
              className="mt-4 text-[10px] uppercase tracking-widest font-bold text-primary inline-flex items-center gap-1 border-b border-primary pb-1"
            >
              {h.method.cta} <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </section>

      {/* Pre-booking insights */}
      <section className="py-16 max-w-[1280px] mx-auto px-4 md:px-8 w-full">
        <div className="max-w-3xl mb-12">
          <h2 className="font-manrope text-3xl font-black tracking-tight text-primary">
            {h.insights.title}
          </h2>
          <p className="text-sm text-cool-gray-600 mt-3 leading-relaxed">
            {h.insights.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {h.insights.items.map((insight) => (
            <article key={insight.title} className="border border-cool-gray-200 rounded-custom p-6 flex flex-col justify-between gap-6 shadow-sm">
              <div className="space-y-4">
                <h3 className="font-manrope text-lg font-bold text-primary">{insight.title}</h3>
                {([
                  [h.insights.cardLabels.error, insight.error],
                  [h.insights.cardLabels.read, insight.read],
                  [h.insights.cardLabels.decision, insight.decision],
                ] as [string, string][]).map(([label, text]) => (
                  <div key={label}>
                    <span className="block text-[9px] uppercase tracking-widest font-bold text-cool-gray-500 mb-1">{label}</span>
                    <p className="text-xs text-cool-gray-600 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => openSampleBlueprint('home_achados_card')}
                className="text-left text-[10px] uppercase tracking-widest font-bold text-primary flex items-center gap-1"
              >
                {h.insights.cardLabels.cta} <ArrowRight size={12} />
              </button>
            </article>
          ))}
        </div>
        <button
          onClick={openAchados}
          className="mt-8 border-b border-primary text-xs uppercase tracking-widest font-bold text-primary pb-1"
        >
          {h.insights.seeAll}
        </button>
      </section>

      {/* Services */}
      <section id="servicos" className="scroll-mt-24 py-16 bg-cool-gray-50 border-y border-cool-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-manrope text-3xl font-black tracking-tight text-primary">
              {h.services.title}
            </h2>
            <p className="text-sm text-cool-gray-600 mt-3">{h.services.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {h.services.items.map((service, idx) => (
              <article key={service.title} className="p-6 rounded-custom border border-cool-gray-200 bg-white flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="font-manrope text-xl font-bold">{service.title}</h3>
                  <p className="font-manrope font-black text-primary mt-2">{service.price}</p>
                  <p className="text-xs text-cool-gray-600 leading-relaxed mt-4 min-h-[48px]">{service.description}</p>
                  <span className="block text-[9px] uppercase tracking-widest font-bold text-cool-gray-500 mt-6 mb-3">
                    {h.services.includesLabel}
                  </span>
                  <ul className="space-y-3">
                    {service.includes.map(item => (
                      <li key={item} className="flex gap-2 text-xs text-cool-gray-700">
                        <Check size={14} className="shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                  {service.excludes.length > 0 && (
                    <>
                      <span className="block text-[9px] uppercase tracking-widest font-bold text-cool-gray-500 mt-6 mb-3">
                        {h.services.excludesLabel}
                      </span>
                      <ul>
                        {service.excludes.map(item => (
                          <li key={item} className="flex gap-2 text-xs text-cool-gray-500">
                            <X size={14} className="shrink-0" />{item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                <button
                  onClick={() => onOpenFitCall(SERVICE_FIT_CALL_LOCATIONS[idx])}
                  className="w-full mt-8 bg-primary text-white uppercase text-[10px] tracking-wider py-3 rounded-custom font-semibold hover:bg-black transition-colors"
                >
                  {service.cta}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic banner */}
      <section className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-16">
        <div className="bg-primary text-white rounded-custom p-8 md:p-14">
          <div className="max-w-3xl">
            <h2 className="font-manrope text-2xl md:text-4xl font-black tracking-tight">
              {h.diagnostic.title}
            </h2>
            <p className="text-sm text-cool-gray-300 leading-relaxed mt-5">
              {h.diagnostic.description}
            </p>
            <button
              onClick={() => onOpenFitCall('diagnostic_section')}
              className="mt-7 bg-white text-primary text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-custom hover:bg-cool-gray-100 transition-colors"
            >
              {h.diagnostic.cta}
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 py-16 border-t border-cool-gray-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="font-manrope text-3xl font-black tracking-tight text-primary mb-8">
            {h.faq.title}
          </h2>
          <div className="divide-y divide-cool-gray-200 border-y border-cool-gray-200">
            {h.faq.items.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="font-manrope font-bold text-sm cursor-pointer list-none flex justify-between gap-4">
                  {q}
                  <span className="text-cool-gray-500 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-cool-gray-600 leading-relaxed mt-3 max-w-3xl">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
