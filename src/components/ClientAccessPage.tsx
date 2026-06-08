import React, { useState } from 'react';
import { Surface } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, FileText, KeyRound } from 'lucide-react';
import DocumentPreviewPanel from './visual/DocumentPreviewPanel';

interface ClientAccessPageProps {
  onNavigate: (surface: Surface) => void;
  onViewSampleDelivery: () => void;
}

export default function ClientAccessPage({
  onNavigate,
  onViewSampleDelivery,
}: ClientAccessPageProps) {
  const { c, lang } = useLanguage();
  const ca = c.clientAccess;
  const portalCopy = lang === 'pt'
    ? {
        eyebrow: 'Entrega privada',
        title: 'Um documento desenhado, não um dashboard.',
        description: 'A lógica completa de trabalho da viagem permanece disponível apenas dentro da entrega do cliente.',
        lines: ['Arquitetura da rota', 'Ritmo e decisões', 'Ordem de reserva e notas de risco'],
        sampleEyebrow: 'Explorar o formato',
        sampleTitle: 'Ver uma entrega completa de exemplo',
        sampleDescription: 'Abra um exemplo completo para entender a profundidade e o detalhe operacional disponível aos clientes.',
      }
    : {
        eyebrow: 'Private delivery',
        title: 'A designed document, not a dashboard.',
        description: 'The complete working logic of the trip remains available only inside the client delivery.',
        lines: ['Route architecture', 'Pacing and decisions', 'Booking order and risk notes'],
        sampleEyebrow: 'Explore the format',
        sampleTitle: 'View a sample full delivery',
        sampleDescription: 'Open a complete Portuguese-language example to understand the depth and operating detail available to clients.',
      };
  const [keyValue, setKeyValue] = useState('');

  const handleContinue = () => {
    if (keyValue.trim()) {
      onViewSampleDelivery();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleContinue();
  };

  return (
    <div className="min-h-screen bg-deep-petrol">
      <div className="client-access-layout">

        {/* Page header */}
        <div className="client-access-intro">
          <span className="text-[10px] uppercase tracking-[0.18em] text-stone/55 font-sans">
            {ca.eyebrow}
          </span>
          <h1 className="font-manrope text-4xl md:text-5xl italic text-bone mt-5 mb-5 leading-tight">
            {ca.title}
          </h1>
          <p className="text-sm text-stone/70 leading-relaxed">
            {ca.subtitle}
          </p>
          <DocumentPreviewPanel
            eyebrow={portalCopy.eyebrow}
            title={portalCopy.title}
            description={portalCopy.description}
            lines={portalCopy.lines}
          />
        </div>

        <div className="client-access-actions">
          {/* Access key panel */}
          <div className="client-access-key-panel">
            <KeyRound size={17} />
            <h2>{ca.panel.title}</h2>
            <p>{ca.panel.microcopy}</p>
            <div className="client-access-key-row">
              <input
                type="text"
                value={keyValue}
                onChange={e => setKeyValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={ca.panel.placeholder}
              />
              <button onClick={handleContinue}>
                {ca.panel.button} <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Demo delivery link */}
          <div className="client-access-sample-panel">
            <FileText size={17} />
            <span className="eyebrow text-stone">{portalCopy.sampleEyebrow}</span>
            <h2>{portalCopy.sampleTitle}</h2>
            <p>{portalCopy.sampleDescription}</p>
            <button onClick={onViewSampleDelivery}>
              {ca.demoLink} <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Available delivery types */}
        <div className="client-access-deliveries">
          <h2>{ca.deliveriesTitle}</h2>
          <div>
            {ca.deliveries.map((d, index) => (
              <article key={d.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
