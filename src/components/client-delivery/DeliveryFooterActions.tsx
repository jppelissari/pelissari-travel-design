import React, { useState } from 'react';
import { Share2 } from 'lucide-react';

interface DeliveryFooterActionsProps {
  onGeneratePreview: () => void;
  revisionWindowDays: number | null;
}

export default function DeliveryFooterActions({
  onGeneratePreview,
  revisionWindowDays,
}: DeliveryFooterActionsProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onGeneratePreview();
  };

  return (
    <div className="border-t border-cool-gray-200 pt-8 mt-8 space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs text-cool-gray-500 space-y-0.5">
          {revisionWindowDays !== null && (
            <p>Janela de revisão: <span className="font-semibold text-primary">{revisionWindowDays} dias</span> a partir desta entrega</p>
          )}
          <p>Dúvidas? Envie uma mensagem consolidada antes de tomar decisões de reserva.</p>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
          <button
            onClick={handleClick}
            disabled={clicked}
            className="bg-bone text-deep-petrol text-xs uppercase font-bold tracking-widest px-6 py-3 rounded-custom flex items-center gap-2 hover:bg-stone transition-all active:scale-[0.98] disabled:opacity-60"
          >
            <Share2 size={14} />
            Gerar Preview para Compartilhar
          </button>
          <p className="text-[10px] text-cool-gray-400 leading-relaxed max-w-xs sm:text-right font-sans">
            A versão compartilhável omite detalhes operacionais e apresenta apenas a lógica central da proposta.
          </p>
        </div>
      </div>
    </div>
  );
}
