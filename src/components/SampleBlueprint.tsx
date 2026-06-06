import React from 'react';
import {
  Users,
  Calendar,
  Brain,
  AlertTriangle,
  PlaneTakeoff,
  Train,
  Building,
  ArrowRight,
} from 'lucide-react';
import { FitCallSource, Surface } from '../types';
import { trackEvent } from '../lib/tracking';
import { useLanguage } from '../context/LanguageContext';

interface SampleBlueprintProps {
  onNavigate: (surface: Surface) => void;
  onOpenFitCall: (source: FitCallSource) => void;
}

const STOP_ICONS = [
  <PlaneTakeoff size={18} className="text-white" />,
  <Train size={18} className="text-white" />,
  <Building size={18} className="text-white" />,
];

export default function SampleBlueprint({ onNavigate, onOpenFitCall }: SampleBlueprintProps) {
  const { c } = useLanguage();
  const bp = c.blueprint;

  const openAchados = () => {
    trackEvent('cta_achados_opened', { location: 'sample_blueprint_intro' });
    onNavigate('antes-da-reserva');
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">

      {/* Introduction */}
      <section className="mb-16 border-b border-cool-gray-200 pb-16">
        <div className="max-w-4xl space-y-5">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-cool-gray-500 block">{bp.intro.eyebrow}</span>
          <h1 className="font-manrope text-3xl md:text-5xl font-black text-primary tracking-tight leading-[1.15]">
            {bp.intro.title}
          </h1>
          <p className="text-sm md:text-base text-cool-gray-600 max-w-3xl leading-relaxed">{bp.intro.p1}</p>
          <p className="text-sm md:text-base text-cool-gray-600 max-w-3xl leading-relaxed">{bp.intro.p2}</p>
          <p className="text-xs text-cool-gray-500 max-w-3xl leading-relaxed italic">{bp.intro.note}</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => onOpenFitCall('sample_blueprint_intro')}
              className="bg-primary text-white text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-custom hover:bg-black transition-colors"
            >
              {bp.intro.ctaMain}
            </button>
            <button
              onClick={openAchados}
              className="bg-white border border-cool-gray-300 text-primary text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-custom hover:bg-cool-gray-50 transition-colors"
            >
              {bp.intro.ctaSecondary}
            </button>
          </div>
        </div>
      </section>

      {/* Reading guide */}
      <section className="mb-16">
        <div className="max-w-3xl mb-8">
          <h2 className="font-manrope text-2xl md:text-3xl font-black text-primary tracking-tight">{bp.reading.title}</h2>
          <p className="text-sm text-cool-gray-600 mt-3 leading-relaxed">{bp.reading.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {bp.reading.cards.map(card => (
            <article key={card.title} className="bg-cool-gray-50 border border-cool-gray-200 rounded-custom p-5">
              <h3 className="font-manrope text-sm font-bold text-primary">{card.title}</h3>
              <p className="text-xs text-cool-gray-600 leading-relaxed mt-3">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Proof bridge */}
      <section className="mb-16 bg-primary text-white rounded-custom p-8 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-3xl">
          <h2 className="font-manrope text-2xl md:text-3xl font-black tracking-tight">{bp.proof.title}</h2>
          <p className="text-sm text-cool-gray-300 mt-4 leading-relaxed">{bp.proof.description}</p>
        </div>
        <button
          onClick={() => onOpenFitCall('sample_blueprint_proof_bridge')}
          className="bg-white text-primary text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-custom hover:bg-cool-gray-100 transition-colors shrink-0"
        >
          {bp.proof.cta}
        </button>
      </section>

      {/* Sample title */}
      <div className="mb-12 max-w-4xl space-y-4">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-cool-gray-500 block">{bp.sample.eyebrow}</span>
        <h2 className="font-manrope text-3xl md:text-5xl font-black text-primary tracking-tight leading-[1.15]">
          {bp.sample.title}
        </h2>
        <p className="text-sm md:text-base text-cool-gray-600 max-w-3xl leading-relaxed font-sans">
          {bp.sample.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Left: Context & Strategy */}
        <div className="lg:col-span-4 space-y-6">

          {/* Trip Context */}
          <div className="bg-cool-gray-50 border border-cool-gray-200 rounded-custom p-6 space-y-4">
            <h3 className="text-xs uppercase font-bold tracking-widest text-primary border-b border-cool-gray-200 pb-2">
              {bp.context.title}
            </h3>
            <ul className="space-y-4 text-xs">
              <li className="flex gap-3">
                <Users size={16} className="text-cool-gray-500 mt-0.5 shrink-0" />
                <div>
                  <span className="block font-bold text-cool-gray-400 uppercase text-[9px]">{bp.context.travelers.label}</span>
                  <span className="text-primary font-medium">{bp.context.travelers.value}</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Calendar size={16} className="text-cool-gray-500 mt-0.5 shrink-0" />
                <div>
                  <span className="block font-bold text-cool-gray-400 uppercase text-[9px]">{bp.context.duration.label}</span>
                  <span className="text-primary font-medium">{bp.context.duration.value}</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Brain size={16} className="text-cool-gray-500 mt-0.5 shrink-0" />
                <div>
                  <span className="block font-bold text-cool-gray-400 uppercase text-[9px]">{bp.context.profile.label}</span>
                  <span className="text-primary font-medium leading-relaxed">{bp.context.profile.value}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Booking Order */}
          <div className="bg-white border border-cool-gray-200 rounded-custom p-6 space-y-4 shadow-sm">
            <h3 className="text-xs uppercase font-bold tracking-widest text-primary border-b border-cool-gray-200 pb-2">
              {bp.bookingOrder.title}
            </h3>
            <div className="space-y-4 text-xs">
              {bp.bookingOrder.phases.map((phase, idx) => (
                <div
                  key={phase.label}
                  className={`border-l-2 pl-3 py-0.5 ${idx === 0 ? 'border-primary' : 'border-cool-gray-200 opacity-75'}`}
                  style={{ opacity: idx === 0 ? 1 : idx === 1 ? 0.75 : 0.6 }}
                >
                  <span className="block text-cool-gray-400 uppercase text-[9px] font-bold">{phase.label}</span>
                  <span className={`block text-primary mt-0.5 ${idx === 0 ? 'font-semibold text-xs' : 'font-medium'}`}>{phase.title}</span>
                  <p className="text-cool-gray-500 mt-1 leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Flags */}
          <div className="bg-neutral-50 border border-cool-gray-200 rounded-custom p-6 space-y-4">
            <h3 className="text-xs uppercase font-bold tracking-widest text-primary flex items-center gap-1.5 border-b border-cool-gray-200 pb-2">
              <AlertTriangle size={14} className="text-primary" />
              {bp.riskFlags.title}
            </h3>
            <ul className="space-y-3.5 text-xs">
              {bp.riskFlags.items.map(flag => (
                <li key={flag.title} className="space-y-1">
                  <span className="font-bold text-primary block">{flag.title}</span>
                  <p className="text-cool-gray-600 leading-relaxed">{flag.description}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Right: Core Method Content */}
        <div className="lg:col-span-8 space-y-8">

          {/* Route Thesis */}
          <section className="bg-cool-gray-50 border border-cool-gray-200 rounded-custom p-6 md:p-8 space-y-4">
            <h2 className="font-manrope text-xl md:text-2xl font-black text-primary tracking-tight">
              {bp.routeThesis.title}
            </h2>
            <div className="text-xs md:text-sm text-cool-gray-600 leading-relaxed space-y-3">
              <p>{bp.routeThesis.p1}</p>
              <p className="font-semibold text-primary">{bp.routeThesis.p2}</p>
              <p>{bp.routeThesis.p3}</p>
            </div>
          </section>

          {/* Destination Sequence */}
          <section className="space-y-6">
            <h2 className="font-manrope text-xl md:text-2xl font-black text-primary tracking-tight border-b border-cool-gray-200 pb-3">
              {bp.sequence.title}
            </h2>
            <div className="relative pl-6 md:pl-8 border-l-2 border-cool-gray-200 space-y-8 ml-3">
              {bp.sequence.stops.map((stop, i) => (
                <div key={i} className="relative space-y-2">
                  <span className="absolute -left-[35px] md:-left-[43px] top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-4 ring-white shadow">
                    {STOP_ICONS[i]}
                  </span>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                    <h3 className="font-manrope text-base md:text-lg font-bold text-primary">{stop.name}</h3>
                    <span className="inline-block px-2.5 py-1 rounded-custom bg-cool-gray-100 border border-cool-gray-200 text-[10px] font-bold text-cool-gray-600 uppercase tracking-wider shrink-0">
                      {stop.days}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-cool-gray-500 leading-relaxed text-balance">{stop.desc}</p>
                  <div className="flex items-center gap-2 pt-2 text-[10px] uppercase font-bold tracking-wider text-cool-gray-400">
                    <span>{bp.sequence.densityLabel}</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 3 }).map((_, di) => (
                        <span
                          key={di}
                          className={`w-6 h-1.5 rounded-custom ${di < (i === 0 ? 2 : i === 1 ? 1 : 3) ? 'bg-primary' : 'bg-cool-gray-200'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 bg-white border border-cool-gray-200 p-4 rounded-custom text-xs">
                    <span className="font-bold text-primary block uppercase tracking-wider text-[9px] mb-1">{bp.sequence.areaLabel}</span>
                    <p className="text-cool-gray-600 leading-relaxed">{stop.guidance}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Omissions */}
          <section className="space-y-4">
            <h2 className="font-manrope text-xl md:text-2xl font-black text-primary tracking-tight border-b border-cool-gray-200 pb-3">
              {bp.omissions.title}
            </h2>
            <p className="text-xs text-cool-gray-500 italic max-w-xl leading-relaxed">{bp.omissions.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bp.omissions.items.map(item => (
                <div key={item.title} className="p-5 border border-cool-gray-200 rounded-custom bg-cool-gray-50 space-y-2">
                  <h4 className="font-manrope text-sm font-bold text-cool-gray-400 line-through decoration-primary decoration-1 underline-offset-4">
                    {item.title}
                  </h4>
                  <p className="text-xs text-cool-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Closing CTA */}
      <section className="mt-16 bg-primary text-white p-8 md:p-12 text-center rounded-custom space-y-6">
        <h2 className="font-manrope text-xl md:text-3xl font-black tracking-tight max-w-2xl mx-auto">
          {bp.closing.title}
        </h2>
        <p className="text-xs md:text-sm text-cool-gray-300 max-w-xl mx-auto leading-relaxed">
          {bp.closing.description}
        </p>
        <div>
          <button
            onClick={() => onOpenFitCall('sample_blueprint_bottom')}
            className="bg-white text-primary text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-custom hover:bg-cool-gray-50 transition-colors"
          >
            {bp.closing.cta}
          </button>
        </div>
      </section>

    </div>
  );
}
