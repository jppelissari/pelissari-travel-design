import React from 'react';
import { CheckCircle, XCircle, ArrowUpRight } from 'lucide-react';
import { ScopeBoundary, serviceTierLabel } from '../../data/clientDeliveryTemplate';

interface ScopeBoundarySectionProps {
  scope: ScopeBoundary;
}

export default function ScopeBoundarySection({ scope }: ScopeBoundarySectionProps) {
  return (
    <section className="mb-14 pb-14 border-b border-cool-gray-100">
      <div className="mb-6">
        <h2 className="font-manrope text-xl font-black text-primary">Escopo deste Documento</h2>
        <p className="text-xs text-cool-gray-500 mt-1">O que está incluído, o que não está, e o que requer escopo adicional</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Included */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle size={14} className="text-primary shrink-0" />
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-primary">Incluso</h3>
          </div>
          <div className="space-y-2">
            {scope.included.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2" />
                <p className="text-xs text-cool-gray-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Excluded */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <XCircle size={14} className="text-cool-gray-400 shrink-0" />
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400">Não incluso</h3>
          </div>
          <div className="space-y-2">
            {scope.excluded.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="w-1 h-1 rounded-full bg-cool-gray-300 shrink-0 mt-2" />
                <p className="text-xs text-cool-gray-500 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requires upgrade */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <ArrowUpRight size={14} className="text-cool-gray-500 shrink-0" />
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400">Requer upgrade</h3>
          </div>
          <div className="space-y-3">
            {scope.requiresUpgrade.map((item, i) => (
              <div key={i} className="border border-cool-gray-200 rounded-custom p-3 space-y-1">
                <p className="text-xs font-semibold text-primary leading-snug">{item.item}</p>
                <p className="text-[10px] text-cool-gray-500 leading-relaxed">{item.note}</p>
                <span className="inline-block text-[9px] uppercase tracking-widest font-bold bg-cool-gray-100 text-cool-gray-500 px-1.5 py-0.5 rounded mt-1">
                  {serviceTierLabel[item.upgradeTo]}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
