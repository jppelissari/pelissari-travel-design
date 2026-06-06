import React from 'react';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import {
  DeliveryMeta,
  reveal,
  serviceTierLabel,
  deliveryStatusLabel,
} from '../../data/clientDeliveryTemplate';
import VisualPlaceholder from './VisualPlaceholder';

interface DeliveryCoverProps {
  meta: DeliveryMeta;
  isPrivateMode: boolean;
}

export default function DeliveryCover({ meta, isPrivateMode }: DeliveryCoverProps) {
  return (
    <section className="mb-14 space-y-8">

      {/* Delivery header row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-cool-gray-100">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 border border-cool-gray-200 bg-white px-2.5 py-1 rounded-custom">
              <CheckCircle size={12} className="text-primary shrink-0" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary">
                {serviceTierLabel[meta.serviceTier]}
              </span>
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 font-sans">
              {deliveryStatusLabel[meta.deliveryStatus]}
            </span>
          </div>

          <div className="text-xs text-cool-gray-500 space-y-0.5 font-sans">
            <p>
              Apresentado para:{' '}
              <span
                className={`font-semibold text-primary px-1 py-0.5 rounded transition-all ${
                  isPrivateMode
                    ? 'bg-cool-gray-200 text-cool-gray-500 select-none privacy-mask privacy-masked'
                    : 'bg-cool-gray-100'
                }`}
              >
                {reveal(meta.clientDisplayName, isPrivateMode)}
              </span>
            </p>
            <p>Destino: <span className="text-primary font-medium">{meta.destination}</span></p>
            <p>
              Datas:{' '}
              <span
                className={`font-medium transition-all px-0.5 rounded ${
                  isPrivateMode ? 'privacy-mask privacy-masked bg-cool-gray-200 select-none' : 'text-primary'
                }`}
              >
                {reveal(meta.dateWindow, isPrivateMode)}
              </span>
            </p>
          </div>
        </div>

        <div className="text-right text-[10px] uppercase tracking-widest text-cool-gray-400 font-sans space-y-0.5 shrink-0">
          <p>Versão {meta.documentVersion}</p>
          <p>Gerado em {meta.generatedAt}</p>
          {meta.revisionWindowDays !== null && (
            <p className="text-cool-gray-300">Revisão: {meta.revisionWindowDays} dias</p>
          )}
        </div>
      </div>

      {/* Trip title */}
      <div className="space-y-3">
        <h1 className="font-manrope text-3xl md:text-5xl font-black text-primary tracking-tight leading-none">
          {meta.tripTitle}
        </h1>
        <p className="text-sm text-cool-gray-600 max-w-2xl leading-relaxed">
          {meta.tripThesis}
        </p>
      </div>

      {/* Destination mood image placeholder */}
      <VisualPlaceholder type="destination-mood" height="lg" />

      {/* Decision summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {meta.decisionSummary.map((bullet, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-4 border border-cool-gray-200 bg-white rounded-custom"
          >
            <span className="font-manrope text-xs font-black text-cool-gray-300 shrink-0 mt-0.5 w-4 text-right">
              {i + 1}
            </span>
            <p className="text-xs text-cool-gray-600 leading-relaxed">{bullet}</p>
          </div>
        ))}
      </div>

      {/* Traveler profile */}
      <div className="flex items-start gap-3 bg-warm-gray-50 border border-warm-gray-200 rounded-custom p-4">
        <ShieldCheck size={14} className="text-cool-gray-400 shrink-0 mt-0.5" />
        <div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 block mb-1">Perfil do Viajante</span>
          <p className="text-xs text-cool-gray-600 leading-relaxed">{meta.travelerProfile}</p>
        </div>
      </div>

    </section>
  );
}
