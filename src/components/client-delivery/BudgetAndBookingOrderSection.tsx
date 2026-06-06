import React from 'react';
import { DollarSign, Clock } from 'lucide-react';
import {
  BudgetLogicEntry,
  BookingOrderEntry,
  reveal,
} from '../../data/clientDeliveryTemplate';
import VisualPlaceholder from './VisualPlaceholder';

interface BudgetAndBookingOrderSectionProps {
  budgetLogic: BudgetLogicEntry[];
  bookingOrder: BookingOrderEntry[];
  isPrivateMode: boolean;
}

const actionConfig = {
  protect: { label: 'Proteger', class: 'bg-primary/10 text-primary' },
  flex: { label: 'Flexível', class: 'bg-cool-gray-100 text-cool-gray-600' },
  avoid: { label: 'Evitar', class: 'bg-warm-gray-100 text-warm-gray-500' },
};

export default function BudgetAndBookingOrderSection({
  budgetLogic,
  bookingOrder,
  isPrivateMode,
}: BudgetAndBookingOrderSectionProps) {
  return (
    <section className="mb-14 pb-14 border-b border-cool-gray-100">
      <div className="flex items-start gap-3 mb-8">
        <DollarSign size={16} className="text-primary shrink-0 mt-0.5" />
        <div>
          <h2 className="font-manrope text-xl font-black text-primary">Orçamento e Ordem de Reserva</h2>
          <p className="text-xs text-cool-gray-500 mt-1">Onde proteger, onde flexibilizar, o que reservar primeiro</p>
        </div>
      </div>

      {/* Budget logic */}
      <div className="mb-10">
        <h3 className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 mb-4">Lógica de Orçamento</h3>
        <div className="space-y-0 border border-cool-gray-200 rounded-custom overflow-hidden">
          {budgetLogic.map((entry, i) => (
            <div
              key={i}
              className={`grid grid-cols-12 gap-4 px-5 py-4 border-b last:border-b-0 border-cool-gray-100 ${
                i % 2 === 0 ? 'bg-white' : 'bg-cool-gray-50/40'
              }`}
            >
              <div className="col-span-3">
                <span className="font-manrope text-xs font-bold text-primary">{entry.category}</span>
              </div>
              <div className="col-span-7">
                <p className="text-xs text-cool-gray-600 leading-relaxed">{entry.guidance}</p>
              </div>
              <div className="col-span-2 flex justify-end items-start">
                <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded ${actionConfig[entry.action].class}`}>
                  {actionConfig[entry.action].label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Budget allocation visual placeholder */}
      <VisualPlaceholder type="budget-allocation" height="sm" className="mb-10" />

      {/* Booking order */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Clock size={14} className="text-primary" />
          <h3 className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400">Ordem de Reserva Recomendada</h3>
        </div>

        <div className="space-y-3">
          {bookingOrder.map((entry) => (
            <div
              key={entry.priority}
              className={`flex items-start gap-4 p-4 rounded-custom border ${
                entry.canWait ? 'border-cool-gray-100 bg-cool-gray-50/40' : 'border-cool-gray-200 bg-white'
              }`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-manrope text-xs font-black shrink-0 ${
                entry.priority <= 2 ? 'bg-primary text-white' : 'bg-cool-gray-100 text-cool-gray-500'
              }`}>
                {entry.priority}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-manrope text-sm font-bold text-primary">{entry.what}</span>
                  {entry.canWait && (
                    <span className="text-[10px] uppercase tracking-widest font-bold bg-cool-gray-100 text-cool-gray-400 px-1.5 py-0.5 rounded">
                      Pode aguardar
                    </span>
                  )}
                  {entry.mustBeFlexible && (
                    <span className="text-[10px] uppercase tracking-widest font-bold bg-warm-gray-100 text-warm-gray-500 px-1.5 py-0.5 rounded">
                      Manter flexível
                    </span>
                  )}
                </div>
                <p className="text-xs text-cool-gray-500 leading-relaxed">{entry.why}</p>
                {entry.reference && (
                  <p className={`text-xs mt-1.5 font-mono px-1.5 py-0.5 rounded inline-block transition-all ${
                    isPrivateMode
                      ? 'bg-cool-gray-200 text-cool-gray-500 privacy-mask privacy-masked select-none'
                      : 'bg-cool-gray-100 text-primary'
                  }`}>
                    {reveal(entry.reference, isPrivateMode)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Booking timeline placeholder */}
        <div className="mt-6">
          <VisualPlaceholder type="booking-timeline" height="sm" />
        </div>
      </div>
    </section>
  );
}
