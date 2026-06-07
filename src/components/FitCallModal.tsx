import React, { useState } from 'react';
import { ArrowRight, Check, ShieldAlert, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FitCallFormState, FitCallSource } from '../types';
import { trackEvent } from '../lib/tracking';
import { useLanguage } from '../context/LanguageContext';

interface FitCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: FitCallSource;
}

const initialForm: FitCallFormState = {
  name: '', email: '', whatsapp: '', destination: '',
  dateWindow: '', duration: '', travelers: '', occasion: '',
  budget: '', alreadyBooked: '', biggestConcern: '',
  consent: false, status: 'idle',
};

export default function FitCallModal({ isOpen, onClose, source }: FitCallModalProps) {
  const { c } = useLanguage();
  const m = c.modal;
  const [form, setForm] = useState<FitCallFormState>(initialForm);

  if (!isOpen) return null;

  const updateField = (field: keyof FitCallFormState, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value, status: prev.status === 'error' ? 'idle' : prev.status }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const params = {
      source,
      destinationProvided: form.destination.trim().length > 0,
      budgetProvided: form.budget.trim().length > 0,
      alreadyBookedProvided: form.alreadyBooked.trim().length > 0,
    };
    trackEvent('fit_call_submit_attempt', params);
    setForm(prev => ({ ...prev, status: 'submitting' }));

    try {
      const response = await fetch('/api/fit-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form, source: 'fit-call-modal',
          submittedAt: new Date().toISOString(),
          userAgent: navigator.userAgent, pageUrl: window.location.href,
        }),
      });
      if (!response.ok) throw new Error('Failed');
      trackEvent('fit_call_submit_success', params);
      setForm(prev => ({ ...prev, status: 'success' }));
    } catch {
      trackEvent('fit_call_submit_error', params);
      setForm(prev => ({ ...prev, status: 'error' }));
    }
  };

  const handleReset = () => { setForm(initialForm); onClose(); };

  // Minimal input — bottom border only
  const inputClass = 'w-full bg-transparent border-0 border-b border-cool-gray-200 focus:border-primary focus:outline-none py-2 text-sm text-primary transition-colors placeholder:text-cool-gray-300';
  const labelClass = 'block text-[9px] uppercase font-bold tracking-widest text-cool-gray-400 mb-1';
  const sectionClass = 'text-[9px] uppercase font-bold tracking-[0.2em] text-cool-gray-400 pb-3 mb-5 border-b border-cool-gray-100';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl bg-white rounded-custom shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-7 py-5 border-b border-cool-gray-100">
              <div>
                <span className="text-[9px] uppercase font-bold tracking-widest text-cool-gray-400 block mb-0.5">{m.eyebrow}</span>
                <h3 className="font-manrope text-lg font-bold text-primary">{m.title}</h3>
              </div>
              <button onClick={onClose} className="text-cool-gray-300 hover:text-primary transition-colors p-1" aria-label={m.closeLabel}>
                <X size={18} />
              </button>
            </div>

            {form.status === 'success' ? (
              <div className="p-10 text-center flex flex-col items-center">
                <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center mb-5">
                  <Check size={20} />
                </div>
                <h4 className="font-manrope text-xl font-bold mb-2">{m.success.title}</h4>
                <p className="text-sm text-cool-gray-500 mb-8 max-w-sm leading-relaxed">{m.success.description}</p>
                <button onClick={handleReset} className="bg-primary text-white uppercase text-xs tracking-wider px-8 py-3.5 rounded-custom font-semibold hover:bg-black transition-colors">
                  {m.success.button}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-7 py-6 space-y-8 max-h-[80vh] overflow-y-auto">

                {/* Info notice */}
                <div className="flex gap-3 items-start text-xs text-cool-gray-500 leading-relaxed">
                  <ShieldAlert className="text-primary shrink-0 mt-0.5" size={16} />
                  <p>{m.info}</p>
                </div>

                {/* Block 1: About you */}
                <div>
                  <p className={sectionClass}>{m.form.sectionAbout}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                    <label className="sm:col-span-2">
                      <span className={labelClass}>{m.form.name}</span>
                      <input className={inputClass} required autoComplete="name" value={form.name} onChange={e => updateField('name', e.target.value)} />
                    </label>
                    <label>
                      <span className={labelClass}>{m.form.email}</span>
                      <input className={inputClass} required type="email" autoComplete="email" value={form.email} onChange={e => updateField('email', e.target.value)} />
                    </label>
                    <label>
                      <span className={labelClass}>{m.form.whatsapp}</span>
                      <input className={inputClass} required type="tel" autoComplete="tel" value={form.whatsapp} onChange={e => updateField('whatsapp', e.target.value)} />
                    </label>
                  </div>
                </div>

                {/* Block 2: About the trip */}
                <div>
                  <p className={sectionClass}>{m.form.sectionTrip}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                    <label className="sm:col-span-2">
                      <span className={labelClass}>{m.form.destination}</span>
                      <input className={inputClass} required placeholder={m.form.destinationPlaceholder} value={form.destination} onChange={e => updateField('destination', e.target.value)} />
                    </label>
                    <label>
                      <span className={labelClass}>{m.form.dateWindow}</span>
                      <input className={inputClass} required placeholder={m.form.dateWindowPlaceholder} value={form.dateWindow} onChange={e => updateField('dateWindow', e.target.value)} />
                    </label>
                    <label>
                      <span className={labelClass}>{m.form.duration}</span>
                      <input className={inputClass} required placeholder={m.form.durationPlaceholder} value={form.duration} onChange={e => updateField('duration', e.target.value)} />
                    </label>
                    <label>
                      <span className={labelClass}>{m.form.travelers}</span>
                      <input className={inputClass} required inputMode="numeric" placeholder={m.form.travelersPlaceholder} value={form.travelers} onChange={e => updateField('travelers', e.target.value)} />
                    </label>
                    <label>
                      <span className={labelClass}>{m.form.budget}</span>
                      <input className={inputClass} required placeholder={m.form.budgetPlaceholder} value={form.budget} onChange={e => updateField('budget', e.target.value)} />
                    </label>
                    <label className="sm:col-span-2">
                      <span className={labelClass}>{m.form.occasion} <span className="normal-case font-normal tracking-normal">{m.form.occasionOptional}</span></span>
                      <input className={inputClass} placeholder={m.form.occasionPlaceholder} value={form.occasion} onChange={e => updateField('occasion', e.target.value)} />
                    </label>
                  </div>
                </div>

                {/* Block 3: Context */}
                <div>
                  <p className={sectionClass}>{m.form.sectionContext}</p>
                  <div className="space-y-5">
                    <label className="block">
                      <span className={labelClass}>{m.form.alreadyBooked}</span>
                      <textarea
                        className={`${inputClass} resize-none`}
                        rows={2}
                        required
                        placeholder={m.form.alreadyBookedPlaceholder}
                        value={form.alreadyBooked}
                        onChange={e => updateField('alreadyBooked', e.target.value)}
                      />
                    </label>
                    <label className="block">
                      <span className={labelClass}>{m.form.biggestConcern}</span>
                      <textarea
                        className={`${inputClass} resize-none`}
                        rows={3}
                        required
                        placeholder={m.form.biggestConcernPlaceholder}
                        value={form.biggestConcern}
                        onChange={e => updateField('biggestConcern', e.target.value)}
                      />
                    </label>
                  </div>
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 text-xs text-cool-gray-500 leading-relaxed cursor-pointer">
                  <input type="checkbox" required checked={form.consent} onChange={e => updateField('consent', e.target.checked)} className="mt-0.5 accent-primary shrink-0" />
                  <span>{m.form.consent}</span>
                </label>

                {form.status === 'error' && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-custom p-3">
                    {m.form.errorPrefix}{' '}
                    <a className="underline font-semibold" href={`mailto:${m.form.errorEmail}`}>{m.form.errorEmail}</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={form.status === 'submitting'}
                  className="w-full bg-primary text-white text-xs uppercase font-bold tracking-widest py-4 rounded-custom flex items-center justify-center gap-2 hover:bg-black transition-colors disabled:opacity-40"
                >
                  {form.status === 'submitting' ? m.form.submitting : <>{m.form.submit} <ArrowRight size={14} /></>}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
