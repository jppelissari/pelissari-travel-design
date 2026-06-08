import React from 'react';
import { Lock } from 'lucide-react';
import { DeliveryMeta, reveal } from '../../data/clientDeliveryTemplate';

interface DeliverySecurityBannerProps {
  meta: DeliveryMeta;
  isPrivateMode: boolean;
}

export default function DeliverySecurityBanner({ meta, isPrivateMode }: DeliverySecurityBannerProps) {
  return (
    <div className="bg-charcoal text-white rounded-custom p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border border-primary/40">
      <div className="flex items-start gap-2.5">
        <Lock size={16} className="text-bone/60 shrink-0 mt-0.5" />
        <div className="text-xs">
          <span className="font-bold tracking-wider uppercase block text-bone/90">
            Entrega Privada — Acesso Restrito
          </span>
          <p className="text-bone/50 mt-0.5">
            Este documento contém dados de hospedagem, voos e fornecedores. Não compartilhar publicamente.
          </p>
        </div>
      </div>
      <div className="text-[10px] uppercase font-bold tracking-widest text-bone/40 bg-bone/10 px-3 py-1 rounded-sm border border-bone/20 font-mono shrink-0">
        Token: {reveal(meta.deliveryToken, isPrivateMode)}
      </div>
    </div>
  );
}
