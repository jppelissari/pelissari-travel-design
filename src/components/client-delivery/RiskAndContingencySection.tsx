import React from 'react';
import { AlertTriangle, Info, AlertOctagon } from 'lucide-react';
import { RiskFlag, RiskSeverity, ServiceTier } from '../../data/clientDeliveryTemplate';

interface RiskAndContingencySectionProps {
  flags: RiskFlag[];
  serviceTier: ServiceTier;
}

const severityConfig: Record<
  RiskSeverity,
  { icon: React.ReactNode; border: string; badge: string; label: string }
> = {
  info: {
    icon: <Info size={14} className="text-cool-gray-500 shrink-0 mt-0.5" />,
    border: 'border-cool-gray-200',
    badge: 'bg-cool-gray-100 text-cool-gray-500',
    label: 'Info',
  },
  watch: {
    icon: <AlertTriangle size={14} className="text-warm-gray-500 shrink-0 mt-0.5" />,
    border: 'border-warm-gray-200',
    badge: 'bg-warm-gray-100 text-warm-gray-500',
    label: 'Atenção',
  },
  critical: {
    icon: <AlertOctagon size={14} className="text-primary shrink-0 mt-0.5" />,
    border: 'border-primary/30',
    badge: 'bg-primary/10 text-primary',
    label: 'Crítico',
  },
};

export default function RiskAndContingencySection({ flags, serviceTier }: RiskAndContingencySectionProps) {
  const visibleFlags = flags.filter((f) => f.tiersVisible.includes(serviceTier));

  return (
    <section className="mb-14 pb-14 border-b border-cool-gray-100">
      <div className="flex items-start gap-3 mb-2">
        <AlertTriangle size={16} className="text-primary shrink-0 mt-0.5" />
        <div>
          <h2 className="font-manrope text-xl font-black text-primary">Riscos e Contingências</h2>
          <p className="text-xs text-cool-gray-500 mt-1">Flags identificados para esta rota e nível de serviço</p>
        </div>
      </div>

      {/* Tier disclaimer */}
      <div className="ml-7 mb-8">
        {serviceTier === 'blueprint' && (
          <p className="text-xs text-cool-gray-500 leading-relaxed max-w-xl">
            No Blueprint, identificamos os flags de risco para sua ciência. A gestão e mitigação desses riscos é responsabilidade do viajante ou de um nível de serviço superior.
          </p>
        )}
        {serviceTier === 'full-design' && (
          <p className="text-xs text-cool-gray-500 leading-relaxed max-w-xl">
            No Full Design, além de identificar os riscos, Pelissari coordena as ações de mitigação pré-partida com fornecedores e confirmações diretas.
          </p>
        )}
        {serviceTier === 'signature' && (
          <p className="text-xs text-cool-gray-500 leading-relaxed max-w-xl">
            No Signature, os protocolos de contingência estão ativos durante toda a viagem. Os flags abaixo são monitorados ativamente.
          </p>
        )}
      </div>

      <div className="space-y-4">
        {visibleFlags.map((flag, i) => {
          const config = severityConfig[flag.severity];
          return (
            <div key={i} className={`border rounded-custom p-5 ${config.border}`}>
              <div className="flex items-start gap-3">
                {config.icon}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded ${config.badge}`}>
                      {config.label}
                    </span>
                    <h4 className="font-manrope text-sm font-bold text-primary">{flag.title}</h4>
                  </div>
                  <p className="text-xs text-cool-gray-600 leading-relaxed">{flag.description}</p>
                  {flag.mitigation && (
                    <div className="mt-3 pt-3 border-t border-cool-gray-100">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 block mb-1">Mitigação</span>
                      <p className="text-xs text-cool-gray-600 leading-relaxed">{flag.mitigation}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
