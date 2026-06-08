import React from 'react';
import { Info } from 'lucide-react';

export default function DeliveryHowToRead() {
  return (
    <section className="mb-14 pb-14 border-b border-cool-gray-100">
      <div className="flex items-start gap-3 mb-6">
        <Info size={16} className="text-cool-gray-400 shrink-0 mt-0.5" />
        <h2 className="font-sans text-xs uppercase tracking-widest font-bold text-cool-gray-400">
          Como ler este documento
        </h2>
      </div>

      <div className="max-w-2xl space-y-4">
        <p className="text-sm text-cool-gray-700 leading-relaxed">
          Este não é um roteiro. Não é uma lista de atividades. Não é um calendário de check-ins.
        </p>
        <p className="text-sm text-cool-gray-600 leading-relaxed">
          Este é um <strong className="text-primary font-semibold">documento de decisão</strong>. Ele mostra a lógica por trás da rota — por que cada destino está onde está, quanto tempo é necessário em cada base, o que foi deliberadamente omitido e por quê, e em que ordem as reservas devem ser feitas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {[
            { label: 'Rota', desc: 'Sequência e duração de cada base — com raciocínio.' },
            { label: 'Ritmo', desc: 'Pacing por fase: energia, âncora, espaço livre, carga de decisão.' },
            { label: 'Área de Hotel', desc: 'Lógica de onde ficar — não uma grade de reservas.' },
            { label: 'Omissões', desc: 'O que foi excluído e por que isso protege a viagem.' },
            { label: 'Ordem de Reserva', desc: 'O que reservar primeiro, o que pode esperar, o que deve ficar flexível.' },
            { label: 'Próximos Passos', desc: 'O que fazer com este documento agora.' },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-2.5">
              <span className="w-1 h-1 rounded-full bg-cool-gray-400 shrink-0 mt-2" />
              <div>
                <span className="text-xs font-bold text-primary">{item.label}:</span>{' '}
                <span className="text-xs text-cool-gray-500">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-cool-gray-400 pt-2 border-t border-cool-gray-100 leading-relaxed">
          Se algo neste documento levantar dúvidas, envie uma mensagem consolidada antes de tomar qualquer decisão de reserva.
        </p>
      </div>
    </section>
  );
}
