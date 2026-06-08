import React from 'react';
import { Star, Minus, X } from 'lucide-react';
import {
  ExperienceItem,
  ExperiencePriorityLevel,
  experiencePriorityLabel,
} from '../../data/clientDeliveryTemplate';

interface ExperiencePrioritiesSectionProps {
  items: ExperienceItem[];
}

const levelConfig: Record<
  ExperiencePriorityLevel,
  { icon: React.ReactNode; border: string; badge: string; badgeText: string }
> = {
  protect: {
    icon: <Star size={14} className="text-primary" />,
    border: 'border-primary/20',
    badge: 'bg-bone text-deep-petrol',
    badgeText: experiencePriorityLabel['protect'],
  },
  consider: {
    icon: <Minus size={14} className="text-cool-gray-500" />,
    border: 'border-cool-gray-200',
    badge: 'bg-cool-gray-100 text-cool-gray-600',
    badgeText: experiencePriorityLabel['consider'],
  },
  skip: {
    icon: <X size={14} className="text-cool-gray-400" />,
    border: 'border-cool-gray-100',
    badge: 'bg-cool-gray-50 text-cool-gray-400',
    badgeText: experiencePriorityLabel['skip'],
  },
};

const levels: ExperiencePriorityLevel[] = ['protect', 'consider', 'skip'];

export default function ExperiencePrioritiesSection({ items }: ExperiencePrioritiesSectionProps) {
  return (
    <section className="mb-14 pb-14 border-b border-cool-gray-100">
      <div className="flex items-start gap-3 mb-2">
        <Star size={16} className="text-primary shrink-0 mt-0.5" />
        <div>
          <h2 className="font-sans text-xl font-black text-primary">Prioridades de Experiência</h2>
          <p className="text-xs text-cool-gray-500 mt-1">O que proteger, o que considerar, o que adiar</p>
        </div>
      </div>

      <p className="text-xs text-cool-gray-500 ml-7 mb-8 leading-relaxed max-w-xl">
        Nem tudo merece o mesmo nível de proteção de agenda. Esta classificação define onde o esforço de reserva e energia devem ser concentrados.
      </p>

      <div className="space-y-8">
        {levels.map((level) => {
          const levelItems = items.filter((item) => item.level === level);
          if (levelItems.length === 0) return null;
          const config = levelConfig[level];

          return (
            <div key={level}>
              <div className="flex items-center gap-2 mb-4">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-custom text-[10px] font-bold uppercase tracking-widest ${config.badge}`}>
                  {config.icon}
                  {config.badgeText}
                </span>
              </div>

              <div className="space-y-3 ml-0">
                {levelItems.map((item, i) => (
                  <div
                    key={i}
                    className={`border rounded-custom p-5 grid grid-cols-1 md:grid-cols-12 gap-4 ${config.border}`}
                  >
                    <div className="md:col-span-4">
                      <h4 className="font-sans text-sm font-bold text-primary">{item.name}</h4>
                      <p className="text-xs text-cool-gray-500 mt-1 leading-relaxed">{item.whyItMatters}</p>
                    </div>
                    <div className="md:col-span-4">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 block mb-1">Timing</span>
                      <p className="text-xs text-cool-gray-600 leading-relaxed">{item.timingNote}</p>
                    </div>
                    <div className="md:col-span-4">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 block mb-1">Racional de decisão</span>
                      <p className="text-xs text-cool-gray-600 leading-relaxed">{item.decisionRationale}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
