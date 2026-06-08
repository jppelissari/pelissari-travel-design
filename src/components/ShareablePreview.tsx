import React from 'react';
import { ArrowRight, Check, Compass, ShieldCheck } from 'lucide-react';
import { FitCallSource } from '../types';
import EditorialVisual from './visual/EditorialVisual';
import { useLanguage } from '../context/LanguageContext';

interface ShareablePreviewProps {
  onOpenFitCall: (source: FitCallSource) => void;
}

const shareCopy = {
  en: {
    previewLabel: 'Share Preview / Japan 2026',
    title: 'Japan: The Pragmatic Approach',
    thesis: 'A route designed to protect depth over coverage, with each transition earning its place.',
    framing: 'Prepared as a private preview of the reasoning behind the trip. The complete working delivery remains inside Client Access.',
    meta: ['For P. & S.', '17 nights', 'Three deliberate bases'],
    openingEyebrow: 'Opening study',
    openingCaption: 'Arrival, contrast, and the controlled build toward intensity.',
    assignmentEyebrow: 'The assignment',
    assignmentTitle: 'What this trip is designed to solve',
    solve: [
      ['Decision overload', 'Turn an open-ended Japan trip into a small set of decisions that can be made with confidence.'],
      ['Sequence risk', 'Protect energy by placing intensity, quiet, and transition in the order the body can absorb.'],
      ['Expensive regret', 'Clarify the structure before flights, hotels, and scarce experiences begin locking each other in.'],
    ],
    routeEyebrow: 'Route thesis',
    routeTitle: 'A trip that builds capacity before it asks for intensity.',
    routeBody: 'The sequence is not a list of destinations. It is a controlled progression from arrival and orientation, through contrast and decompression, into the trip’s most culturally demanding chapter.',
    routeAria: 'High-level route sequence',
    routeSteps: [['Tokyo', 'Orient'], ['Kanazawa', 'Decompress'], ['Kyoto', 'Go deep']],
    routeVisualEyebrow: 'Route study',
    routeVisualCaption: 'A high-level view only. The complete route logic remains in the private delivery.',
    reasoningEyebrow: 'Selected reasoning',
    reasoningTitle: 'Three decisions that change the quality of the trip',
    reasoningBody: 'Only the most persuasive decisions are shown here. The full delivery contains the private logic behind them.',
    decisions: [
      ['Tokyo is not the emotional opening', 'Treat the international gateway as the automatic first chapter.', 'The first 48 hours need orientation and recovery, not maximum urban density.', 'The trip begins with control rather than a deficit of energy.'],
      ['Kanazawa earns its place as a transition', 'Add a secondary city because it looks appealing in isolation.', 'Kanazawa creates a deliberate decompression chamber between metropolitan intensity and Kyoto depth.', 'One stop performs a strategic role instead of becoming another hotel move.'],
      ['One destination is intentionally omitted', 'Measure value by the number of places covered.', 'Osaka adds movement without adding enough meaning to this specific route.', 'The time recovered becomes depth, presence, and resilience elsewhere.'],
    ],
    decisionLabels: ['Common mistake', 'ELUZA read', 'Client value'],
    protectionVisualEyebrow: 'Protected space',
    protectionVisualCaption: 'Good design removes pressure before it adds experiences.',
    protectionEyebrow: 'What this protects',
    protectionTitle: 'The invisible costs that usually appear after booking.',
    protections: ['Arrival fatigue', 'Unnecessary hotel moves', 'Overplanning', 'Bad sequencing', 'Decision overload', 'Booking regret'],
    fullEyebrow: 'Inside Client Access',
    fullTitle: 'The full delivery turns the thesis into a decision system.',
    fullBody: 'Client Access holds the complete working document, including the private route logic intentionally withheld from this shareable preview.',
    fullList: ['Full route architecture', 'Hotel-area logic', 'Experience priorities', 'Booking order', 'Risk and pacing notes', 'Next-step guidance'],
    finalEyebrow: 'For a trip with a high cost of error',
    finalTitle: 'Start with the decisions that should exist before the bookings.',
    cta: 'Request Scope Diagnostic',
  },
  pt: {
    previewLabel: 'Preview Compartilhável / Japão 2026',
    title: 'Japão: A Abordagem Pragmática',
    thesis: 'Uma rota desenhada para proteger profundidade em vez de cobertura, com cada transição cumprindo uma função.',
    framing: 'Preparado como uma prévia privada do raciocínio por trás da viagem. A entrega de trabalho completa permanece no Acesso do Cliente.',
    meta: ['Para P. & S.', '17 noites', 'Três bases deliberadas'],
    openingEyebrow: 'Estudo de abertura',
    openingCaption: 'Chegada, contraste e construção controlada de intensidade.',
    assignmentEyebrow: 'A função',
    assignmentTitle: 'O que esta viagem foi desenhada para resolver',
    solve: [
      ['Sobrecarga de decisões', 'Transformar uma viagem aberta ao Japão em um conjunto menor de decisões confiáveis.'],
      ['Risco de sequência', 'Proteger energia ao posicionar intensidade, silêncio e transição na ordem que o corpo consegue absorver.'],
      ['Arrependimento caro', 'Clarear a estrutura antes que voos, hotéis e experiências escassas comecem a travar decisões.'],
    ],
    routeEyebrow: 'Tese da rota',
    routeTitle: 'Uma viagem que cria capacidade antes de pedir intensidade.',
    routeBody: 'A sequência não é uma lista de destinos. É uma progressão controlada da chegada e orientação, pelo contraste e descompressão, até o capítulo culturalmente mais exigente.',
    routeAria: 'Sequência de rota em alto nível',
    routeSteps: [['Tóquio', 'Orientar'], ['Kanazawa', 'Descomprimir'], ['Kyoto', 'Aprofundar']],
    routeVisualEyebrow: 'Estudo de rota',
    routeVisualCaption: 'Apenas uma visão em alto nível. A lógica completa permanece na entrega privada.',
    reasoningEyebrow: 'Raciocínio selecionado',
    reasoningTitle: 'Três decisões que mudam a qualidade da viagem',
    reasoningBody: 'Apenas as decisões mais persuasivas aparecem aqui. A entrega completa contém a lógica privada por trás delas.',
    decisions: [
      ['Tóquio não é a abertura emocional', 'Tratar a porta de entrada internacional como primeiro capítulo automático.', 'As primeiras 48 horas pedem orientação e recuperação, não densidade urbana máxima.', 'A viagem começa com controle, não com déficit de energia.'],
      ['Kanazawa entra como transição', 'Adicionar uma cidade secundária porque ela parece atraente isoladamente.', 'Kanazawa cria uma câmara deliberada de descompressão entre intensidade metropolitana e profundidade cultural.', 'Uma parada cumpre função estratégica em vez de virar apenas mais uma troca de hotel.'],
      ['Um destino é omitido de propósito', 'Medir valor pela quantidade de lugares cobertos.', 'Osaka acrescenta movimento sem acrescentar significado suficiente para esta rota específica.', 'O tempo recuperado vira profundidade, presença e resiliência em outros pontos.'],
    ],
    decisionLabels: ['Erro comum', 'Leitura ELUZA', 'Valor para o cliente'],
    protectionVisualEyebrow: 'Espaço protegido',
    protectionVisualCaption: 'Bom design remove pressão antes de adicionar experiências.',
    protectionEyebrow: 'O que isso protege',
    protectionTitle: 'Os custos invisíveis que costumam aparecer depois da reserva.',
    protections: ['Fadiga de chegada', 'Trocas de hotel desnecessárias', 'Excesso de planejamento', 'Má sequência', 'Sobrecarga de decisões', 'Arrependimento de reserva'],
    fullEyebrow: 'Dentro do Acesso do Cliente',
    fullTitle: 'A entrega completa transforma a tese em um sistema de decisões.',
    fullBody: 'O Acesso do Cliente contém o documento completo, incluindo a lógica privada de rota intencionalmente omitida deste preview compartilhável.',
    fullList: ['Arquitetura completa da rota', 'Lógica de áreas de hospedagem', 'Prioridades de experiência', 'Ordem de reserva', 'Notas de risco e ritmo', 'Próximos passos'],
    finalEyebrow: 'Para uma viagem com alto custo de erro',
    finalTitle: 'Comece pelas decisões que devem existir antes das reservas.',
    cta: 'Solicitar Diagnóstico de Escopo',
  },
};

export default function ShareablePreview({ onOpenFitCall }: ShareablePreviewProps) {
  const { lang } = useLanguage();
  const copy = shareCopy[lang];

  return (
    <div className="share-preview">
      <section className="share-preview-cover">
        <div className="share-preview-cover-copy">
          <div className="share-preview-brand">
            <span>ELUZA</span>
            <p>Private Travel Design Studio</p>
          </div>
          <span className="eyebrow text-stone">{copy.previewLabel}</span>
          <h1>{copy.title}</h1>
          <p className="share-preview-thesis">{copy.thesis}</p>
          <p className="share-preview-framing">{copy.framing}</p>
          <div className="share-preview-meta">
            {copy.meta.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <EditorialVisual
          variant="arrival"
          aspect="portrait"
          eyebrow={copy.openingEyebrow}
          caption={copy.openingCaption}
        />
      </section>

      <section className="share-preview-section share-preview-solve">
        <div className="share-preview-section-heading">
          <span className="eyebrow text-stone">{copy.assignmentEyebrow}</span>
          <h2>{copy.assignmentTitle}</h2>
        </div>
        <div className="share-preview-solve-grid">
          {copy.solve.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="share-preview-section share-preview-route">
        <div className="share-preview-route-copy">
          <span className="eyebrow text-stone">{copy.routeEyebrow}</span>
          <h2>{copy.routeTitle}</h2>
          <p>{copy.routeBody}</p>
          <div className="share-preview-route-steps" aria-label={copy.routeAria}>
            <div><span>01</span><strong>{copy.routeSteps[0][0]}</strong><p>{copy.routeSteps[0][1]}</p></div>
            <ArrowRight size={15} />
            <div><span>02</span><strong>{copy.routeSteps[1][0]}</strong><p>{copy.routeSteps[1][1]}</p></div>
            <ArrowRight size={15} />
            <div><span>03</span><strong>{copy.routeSteps[2][0]}</strong><p>{copy.routeSteps[2][1]}</p></div>
          </div>
        </div>
        <EditorialVisual
          variant="route"
          aspect="wide"
          eyebrow={copy.routeVisualEyebrow}
          caption={copy.routeVisualCaption}
        />
      </section>

      <section className="share-preview-section">
        <div className="share-preview-section-heading share-preview-section-heading-wide">
          <span className="eyebrow text-stone">{copy.reasoningEyebrow}</span>
          <h2>{copy.reasoningTitle}</h2>
          <p>{copy.reasoningBody}</p>
        </div>
        <div className="share-preview-decisions">
          {copy.decisions.map(([title, mistake, read, value], index) => (
            <article key={title}>
              <div className="share-preview-decision-title">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
              </div>
              <dl>
                <div><dt>{copy.decisionLabels[0]}</dt><dd>{mistake}</dd></div>
                <div><dt>{copy.decisionLabels[1]}</dt><dd>{read}</dd></div>
                <div><dt>{copy.decisionLabels[2]}</dt><dd>{value}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="share-preview-section share-preview-protection">
        <EditorialVisual
          variant="stillness"
          aspect="compact"
          eyebrow={copy.protectionVisualEyebrow}
          caption={copy.protectionVisualCaption}
        />
        <div>
          <span className="eyebrow text-stone">{copy.protectionEyebrow}</span>
          <h2>{copy.protectionTitle}</h2>
          <div className="share-preview-protection-list">
            {copy.protections.map((item) => (
              <span key={item}><ShieldCheck size={13} />{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="share-preview-section share-preview-full">
        <div>
          <span className="eyebrow text-stone">{copy.fullEyebrow}</span>
          <h2>{copy.fullTitle}</h2>
          <p>{copy.fullBody}</p>
        </div>
        <div className="share-preview-full-list">
          {copy.fullList.map((item) => (
            <span key={item}><Check size={13} />{item}</span>
          ))}
        </div>
      </section>

      <section className="share-preview-final">
        <div>
          <Compass size={18} />
          <span className="eyebrow text-stone">{copy.finalEyebrow}</span>
          <h2>{copy.finalTitle}</h2>
        </div>
        <button onClick={() => onOpenFitCall('shareable_preview')}>
          {copy.cta} <ArrowRight size={14} />
        </button>
      </section>
    </div>
  );
}
