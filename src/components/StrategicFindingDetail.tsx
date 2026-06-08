import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  StrategicFinding,
  strategicFindingSectionKeys,
} from '../data/strategicFindings';
import { trackEvent } from '../lib/tracking';
import { useLanguage } from '../context/LanguageContext';

interface StrategicFindingDetailProps {
  finding: StrategicFinding;
  onBack: () => void;
  onOpenFitCall: () => void;
}

export default function StrategicFindingDetail({
  finding,
  onBack,
  onOpenFitCall,
}: StrategicFindingDetailProps) {
  const { c } = useLanguage();
  const f = c.finding;

  useEffect(() => {
    trackEvent('finding_detail_opened', {
      slug: finding.slug,
      location: 'finding_detail',
    });
  }, [finding.slug]);

  const handleCta = () => {
    trackEvent('finding_detail_cta_opened', {
      slug: finding.slug,
      location: 'finding_detail',
    });
    onOpenFitCall();
  };

  return (
    <article className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-14">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-cool-gray-600 hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={13} />
          {f.backLabel}
        </button>

        <header className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-14 pb-12 md:pb-16 border-b border-cool-gray-200">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-cool-gray-500">
              {finding.eyebrow}
            </span>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-manrope text-3xl sm:text-4xl md:text-6xl font-black text-primary tracking-tight leading-[1.08]">
              {finding.title}
            </h1>
            <p className="mt-7 text-base md:text-lg text-cool-gray-600 leading-relaxed max-w-2xl">
              {finding.shortDeck}
            </p>
          </div>
        </header>

        <div className="max-w-3xl ml-auto">
          {strategicFindingSectionKeys.map((sectionKey, index) => (
            <section
              key={sectionKey}
              className={`grid sm:grid-cols-[4rem_1fr] gap-4 sm:gap-8 py-10 md:py-14 ${
                index < strategicFindingSectionKeys.length - 1 ? 'border-b border-cool-gray-200' : ''
              }`}
            >
              <span className="font-sans text-xs font-bold text-cool-gray-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="font-sans text-lg md:text-xl font-semibold text-primary">
                  {f.sectionLabels[sectionKey]}
                </h2>
                <p className="mt-4 text-sm md:text-base text-cool-gray-600 leading-7">
                  {finding.sections[sectionKey]}
                </p>
                {sectionKey === 'blueprintAppearance' && finding.blueprintReference && (
                  <p className="mt-5 text-[10px] uppercase font-bold tracking-widest text-cool-gray-500">
                    {f.referenceLabel} {finding.blueprintReference}
                  </p>
                )}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-8 md:mt-14 pt-10 md:pt-14 border-t border-primary max-w-3xl ml-auto">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-cool-gray-500 block">
            {f.diagnosticEyebrow}
          </span>
          <h2 className="font-sans text-2xl md:text-3xl font-semibold text-primary mt-4 max-w-xl">
            {f.diagnosticTitle}
          </h2>
          <button
            onClick={handleCta}
            className="mt-7 inline-flex items-center gap-2 border-b border-primary pb-1 text-xs uppercase font-bold tracking-widest text-primary hover:opacity-60 transition-opacity"
          >
            {finding.ctaLabel}
            <ArrowRight size={13} />
          </button>
        </section>
      </div>
    </article>
  );
}
