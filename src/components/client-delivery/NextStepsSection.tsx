import React from 'react';
import { ChevronRight, BookOpen, MessageCircle, CalendarCheck, TrendingUp, Phone } from 'lucide-react';
import { NextStep, NextStepType } from '../../data/clientDeliveryTemplate';

interface NextStepsSectionProps {
  steps: NextStep[];
  onOpenFitCall?: () => void;
}

const stepTypeConfig: Record<NextStepType, { icon: React.ReactNode; accent: string }> = {
  review: {
    icon: <BookOpen size={16} className="text-primary" />,
    accent: 'border-cool-gray-200',
  },
  revision: {
    icon: <MessageCircle size={16} className="text-cool-gray-500" />,
    accent: 'border-cool-gray-200',
  },
  booking: {
    icon: <CalendarCheck size={16} className="text-primary" />,
    accent: 'border-primary/20',
  },
  upgrade: {
    icon: <TrendingUp size={16} className="text-cool-gray-500" />,
    accent: 'border-cool-gray-100',
  },
  contact: {
    icon: <Phone size={16} className="text-cool-gray-400" />,
    accent: 'border-cool-gray-100',
  },
};

export default function NextStepsSection({ steps, onOpenFitCall }: NextStepsSectionProps) {
  return (
    <section className="mb-14">
      <div className="mb-8">
        <h2 className="font-sans text-xl font-black text-primary">Próximos Passos</h2>
        <p className="text-xs text-cool-gray-500 mt-1">O que fazer com este documento agora</p>
      </div>

      <div className="space-y-4">
        {steps.map((step, i) => {
          const config = stepTypeConfig[step.type];
          const isContact = step.type === 'contact' || step.type === 'upgrade';
          return (
            <div
              key={step.id}
              className={`flex items-start gap-4 p-5 border rounded-custom ${config.accent} ${
                isContact ? 'bg-cool-gray-50/60' : 'bg-white'
              }`}
            >
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-sans text-xs font-black text-cool-gray-300 w-4 text-right">{i + 1}</span>
                {config.icon}
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-sans text-sm font-bold text-primary mb-1">{step.action}</h4>
                <p className="text-xs text-cool-gray-600 leading-relaxed">{step.detail}</p>

                {step.cta && (
                  <button
                    onClick={step.type === 'contact' || step.type === 'upgrade' ? onOpenFitCall : undefined}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline underline-offset-2 transition-all"
                  >
                    {step.cta}
                    <ChevronRight size={12} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
