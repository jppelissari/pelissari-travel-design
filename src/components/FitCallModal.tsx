import React, { useState } from 'react';
import { ArrowRight, Check, ShieldAlert, X } from 'lucide-react';
import { FitCallFormState, FitCallSource } from '../types';
import { trackEvent } from '../lib/tracking';
import { useLanguage } from '../context/LanguageContext';

interface FitCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: FitCallSource;
}

const initialForm: FitCallFormState = {
  name: '',
  email: '',
  whatsapp: '',
  destination: '',
  dateWindow: '',
  duration: '',
  travelers: '',
  occasion: '',
  budget: '',
  alreadyBooked: '',
  biggestConcern: '',
  consent: false,
  status: 'idle',
};

export default function FitCallModal({ isOpen, onClose, source }: FitCallModalProps) {
  const { c } = useLanguage();
  const m = c.modal;

  const [form, setForm] = useState<FitCallFormState>(initialForm);

  if (!isOpen) return null;

  const updateField = (field: keyof FitCallFormState, value: string | boolean) => {
    setForm(previous => ({ ...previous, [field]: value, status: previous.status === 'error' ? 'idle' : previous.status }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const trackingParams = {
      source,
      destinationProvided: form.destination.trim().length > 0,
      budgetProvided: form.budget.trim().length > 0,
      alreadyBookedProvided: form.alreadyBooked.trim().length > 0,
    };

    trackEvent('fit_call_submit_attempt', trackingParams);
    setForm(previous => ({ ...previous, status: 'submitting' }));

    try {
      const response = await fetch('/api/fit-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          whatsapp: form.whatsapp,
          destination: form.destination,
          dateWindow: form.dateWindow,
          duration: form.duration,
          travelers: form.travelers,
          occasion: form.occasion,
          budget: form.budget,
          alreadyBooked: form.alreadyBooked,
          biggestConcern: form.biggestConcern,
          consent: form.consent,
          source: 'fit-call-modal',
          submittedAt: new Date().toISOString(),
          userAgent: navigator.userAgent,
          pageUrl: window.location.href,
        }),
      });

      if (!response.ok) throw new Error('Fit call request failed');
      trackEvent('fit_call_submit_success', trackingParams);
      setForm(previous => ({ ...previous, status: 'success' }));
    } catch {
      trackEvent('fit_call_submit_error', trackingParams);
      setForm(previous => ({ ...previous, status: 'error' }));
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    onClose();
  };

  const inputClass = 'w-full border border-cool-gray-300 rounded-custom px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors text-primary';
  const labelClass = 'block text-[10px] uppercase font-bold tracking-wider text-cool-gray-600';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-white border border-cool-gray-200 rounded-custom shadow-2xl overflow-hidden flex flex-col">
        <div className="flex justify-between items-center px-6 py-4 border-b border-cool-gray-100 bg-cool-gray-50">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-cool-gray-600 block">{m.eyebrow}</span>
            <h3 className="font-manrope text-lg font-bold text-primary">{m.title}</h3>
          </div>
          <button onClick={onClose} className="text-cool-gray-400 hover:text-primary transition-colors p-1" aria-label={m.closeLabel}>
            <X size={20} />
          </button>
        </div>

        {form.status === 'success' ? (
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
              <Check size={24} />
            </div>
            <h4 className="font-manrope text-xl font-bold mb-2">{m.success.title}</h4>
            <p className="text-sm text-cool-gray-600 mb-6 max-w-md">{m.success.description}</p>
            <button
              onClick={handleReset}
              className="w-full max-w-sm bg-primary text-white uppercase text-xs tracking-wider py-3.5 rounded-custom font-semibold hover:bg-black transition-colors"
            >
              {m.success.button}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5 max-h-[82vh] overflow-y-auto">
            <div className="bg-cool-gray-50 rounded-custom border border-cool-gray-100 p-4 flex gap-3 items-start">
              <ShieldAlert className="text-primary shrink-0 mt-0.5" size={18} />
              <p className="text-xs text-cool-gray-600 leading-relaxed">{m.info}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="space-y-1">
                <span className={labelClass}>{m.form.name}</span>
                <input className={inputClass} required autoComplete="name" value={form.name} onChange={e => updateField('name', e.target.value)} />
              </label>
              <label className="space-y-1">
                <span className={labelClass}>{m.form.email}</span>
                <input className={inputClass} required type="email" autoComplete="email" value={form.email} onChange={e => updateField('email', e.target.value)} />
              </label>
              <label className="space-y-1">
                <span className={labelClass}>{m.form.whatsapp}</span>
                <input className={inputClass} required type="tel" autoComplete="tel" value={form.whatsapp} onChange={e => updateField('whatsapp', e.target.value)} />
              </label>
              <label className="space-y-1">
                <span className={labelClass}>{m.form.destination}</span>
                <input className={inputClass} required placeholder={m.form.destinationPlaceholder} value={form.destination} onChange={e => updateField('destination', e.target.value)} />
              </label>
              <label className="space-y-1">
                <span className={labelClass}>{m.form.dateWindow}</span>
                <input className={inputClass} required placeholder={m.form.dateWindowPlaceholder} value={form.dateWindow} onChange={e => updateField('dateWindow', e.target.value)} />
              </label>
              <label className="space-y-1">
                <span className={labelClass}>{m.form.duration}</span>
                <input className={inputClass} required placeholder={m.form.durationPlaceholder} value={form.duration} onChange={e => updateField('duration', e.target.value)} />
              </label>
              <label className="space-y-1">
                <span className={labelClass}>{m.form.travelers}</span>
                <input className={inputClass} required inputMode="numeric" placeholder={m.form.travelersPlaceholder} value={form.travelers} onChange={e => updateField('travelers', e.target.value)} />
              </label>
              <label className="space-y-1">
                <span className={labelClass}>{m.form.budget}</span>
                <input className={inputClass} required placeholder={m.form.budgetPlaceholder} value={form.budget} onChange={e => updateField('budget', e.target.value)} />
              </label>
            </div>

            <label className="space-y-1 block">
              <span className={labelClass}>
                {m.form.occasion} <span className="normal-case font-normal">{m.form.occasionOptional}</span>
              </span>
              <input className={inputClass} placeholder={m.form.occasionPlaceholder} value={form.occasion} onChange={e => updateField('occasion', e.target.value)} />
            </label>
            <label className="space-y-1 block">
              <span className={labelClass}>{m.form.alreadyBooked}</span>
              <textarea className={`${inputClass} min-h-[72px]`} required placeholder={m.form.alreadyBookedPlaceholder} value={form.alreadyBooked} onChange={e => updateField('alreadyBooked', e.target.value)} />
            </label>
            <label className="space-y-1 block">
              <span className={labelClass}>{m.form.biggestConcern}</span>
              <textarea className={`${inputClass} min-h-[88px]`} required placeholder={m.form.biggestConcernPlaceholder} value={form.biggestConcern} onChange={e => updateField('biggestConcern', e.target.value)} />
            </label>

            <label className="flex items-start gap-3 text-xs text-cool-gray-600 leading-relaxed cursor-pointer">
              <input type="checkbox" required checked={form.consent} onChange={e => updateField('consent', e.target.checked)} className="mt-0.5 accent-primary" />
              <span>{m.form.consent}</span>
            </label>

            {form.status === 'error' && (
              <p className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-custom p-3">
                {m.form.errorPrefix}{' '}
                <a className="underline font-semibold" href={`mailto:${m.form.errorEmail}`}>{m.form.errorEmail}</a>.
              </p>
            )}

            <button
              type="submit"
              disabled={form.status === 'submitting'}
              className="w-full bg-primary text-white text-xs uppercase font-bold tracking-widest py-4 rounded-custom flex items-center justify-center gap-2 hover:bg-black transition-colors disabled:opacity-50"
            >
              {form.status === 'submitting' ? m.form.submitting : <>{m.form.submit} <ArrowRight size={14} /></>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
