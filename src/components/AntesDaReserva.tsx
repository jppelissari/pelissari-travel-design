import React, { useState } from 'react';
import { ArrowLeftRight, Check, Share2, ArrowRight, BookOpen, Clock, AlertCircle } from 'lucide-react';
import { InsightCard, Surface } from '../types';

interface AntesDaReservaProps {
  onNavigate: (surface: Surface) => void;
  onOpenFitCall: () => void;
}

export default function AntesDaReserva({ onNavigate, onOpenFitCall }: AntesDaReservaProps) {
  const [filter, setFilter] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const insights: (InsightCard & { categoryId: string })[] = [
    {
      id: 'ins-tokyo',
      categoryId: 'routes',
      category: 'Sequenciamento de Rotas',
      title: 'O problema de começar o Japão por Tóquio',
      commonMistake: 'Seguir a ordem geográfica óbvia de chegada internacional direta em Narita ou Haneda e iniciar as hospedagens imediatamente na capital.',
      pelissariRead: 'Tóquio é uma das cidades mais saturadas do mundo sensorialmente. Enfrentar a sobrecarga mental de neon, trânsito e navegação robotizada logo após 24 horas de voo dita um ritmo de cansaço extremo. Isso satura o ânimo do viajante logo no início, ofuscando a quietude e o impacto histórico de Kyoto que virá depois.',
      decisionBeforeBooking: 'Inverter o fluxo estrategicamente. Planeje uma conexão interna imediata ou viagem direta de trem até Osaka/Kyoto para ter 4 dias de aclimatação silenciosa em templos históricos. Culmine a jornada na intensidade ultra-moderna de Tóquio quando seu fuso estiver acomodado e sua energia ao máximo.'
    },
    {
      id: 'ins-overplanning',
      categoryId: 'pacing',
      category: 'Ritmo & Cadência',
      title: 'O custo oculto do overplanning de luxo',
      commonMistake: 'Preencher 100% dos períodos diários com guias agendados, transfers privados em horários fixos e jantares Michelin contratados meses antes.',
      pelissariRead: 'A rigidez logística anula o prazer da serendipidade — o ingrediente que diferencia viagens memoráveis de tarefas executivas. Quando cada hora é um compromisso agendado, o cérebro opera em modo de entrega, induzindo exaustão. O verdadeiro luxo reside na infraestrutura de suporte impecável e invisível, combinada com White Spaces estratégicos.',
      decisionBeforeBooking: 'Reservar no máximo um compromisso central estruturado por dia (preferencialmente na parte da manhã). Manter as tardes deliberadamente livres sem cronograma rígido, permitindo explorações casuais sem culpa.'
    },
    {
      id: 'ins-hotels',
      categoryId: 'accommodations',
      category: 'Seleção de Acomodação',
      title: 'A armadilha da localização por mera conveniência',
      commonMistake: 'Escolher hotéis baseados exclusivamente em proximidade geográfica de cartões postais famosos ou estações centrais de trem.',
      pelissariRead: 'Zonas hiper-turísticas são zonas de conveniência comercial, raramente de cultura autêntica. Estações de metrô centrais costumam acolher o barulho de circulação de massa. No luxo moderno, o hotel deve atuar como um santuário silencioso — um contrapeso de sobriedade e design autoral depois de um dia de exploração ativa.',
      decisionBeforeBooking: 'Filtre e analise vizinhanças residenciais de alto padrão ou distritos de design preservado (ex: Higashiyama em Kyoto ou Aoyama em Tóquio). Priorize refúgios conceituais que ofereçam silêncio acústico e arquitetura sóbria.'
    },
    {
      id: 'ins-ryokan',
      categoryId: 'pacing',
      category: 'Ritmo & Cadência',
      title: 'A saturação dos jantares Kaiseki consecutivos',
      commonMistake: 'Reservar 3 ou mais noites em ryokans tradicionais com jantares requintados inclusos todos os dias por conveniência fiscal.',
      pelissariRead: 'Um banquete Kaiseki de 12 tempos é uma arte meditativa, mas extremamente densa. No segundo dia consecutivo, as nuances de texturas e sabores começam a sofrer de saturação no paladar ocidental. Em vez de uma experiência única de contemplação, ela se torna uma obrigação de cronograma exaustiva.',
      decisionBeforeBooking: 'Limite e separe as estadias clássicas de Ryokan em noites pontuais e isoladas no meio da viagem. Nas outras noites, libere o paladar para izakayas intimistas ou restaurantes locais contemporâneos.'
    },
    {
      id: 'ins-transfer',
      categoryId: 'routes',
      category: 'Sequenciamento de Rotas',
      title: 'Ignorar o envio de bagagens (Takkyubin)',
      commonMistake: 'Viajar com malas gigantescas a bordo dos trens Shinkansen ou carregar bagagem volumosa de táxi em táxi pelas estações.',
      pelissariRead: 'Shinkansens são otimizados para velocidade de fluxo urbano, não para malas monumentais de férias de 15 dias. Lutar com o volume de bagagens em escadas rolantes e bilheterias públicas quebra a fluidez do dia e afeta a autonomia do casal de forma instantânea.',
      decisionBeforeBooking: 'Delegue o envio de bagagens volumosas pelo serviço profissional de despacho expresso porta-a-porta (Yamato Transport). Viaje no trem rápido carregando apenas uma mochila executivo ou bolsa de mão contendo o essencial para pernoite.'
    }
  ];

  const filteredInsights = filter === 'all' 
    ? insights 
    : insights.filter(i => i.categoryId === filter);

  const simulateShare = (id: string, title: string) => {
    const textToCopy = `Pellissari Travel Design - Insight Estratégico:\n\n*${title}*\nConfira o planejamento estrutural antes de reservar sua viagem.\nAcesse: https://pelissari.travel/insights`;
    
    // Attempt standard navigator API
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
    }
    
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Page Header */}
      <div className="mb-12 max-w-3xl space-y-3">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-cool-gray-500 block">Discovery & Intelligence</span>
        <h1 className="font-manrope text-3xl md:text-5xl font-black text-primary tracking-tight">Antes da Reserva</h1>
        <p className="text-sm text-cool-gray-600 leading-relaxed">
          Nossa biblioteca de insights estruturais. Aqui nós desafiamos as premissas tradicionais do mercado de turismo de luxo local. Não compre pacotes baseados em impulsos visuais; compre a sequência correta.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-10 border-b border-cool-gray-200 pb-4">
        {[
          { id: 'all', label: 'Todos os Insights' },
          { id: 'routes', label: 'Estratégia de Rotas' },
          { id: 'pacing', label: 'Ritmo & Cadência' },
          { id: 'accommodations', label: 'Escolha de Acomodação' },
        ].map(btn => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={`px-4 py-2 rounded-custom text-xs uppercase font-bold tracking-wider transition-colors border ${
              filter === btn.id
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-cool-gray-500 border-cool-gray-200 hover:text-primary hover:border-cool-gray-300'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredInsights.map(insight => (
          <div
            key={insight.id}
            className="bg-white border border-cool-gray-200 rounded-custom p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden"
          >
            {/* Top Tag category */}
            <div className="absolute top-0 right-0 left-0 h-1 bg-cool-gray-100">
              <div className="h-full bg-primary/40 w-1/3"></div>
            </div>

            <div className="space-y-4 pt-1">
              <div className="flex justify-between items-start gap-2">
                <span className="text-[9px] uppercase font-bold tracking-wider text-cool-gray-400 bg-cool-gray-100 px-2.5 py-1 rounded-sm">
                  {insight.category}
                </span>
                
                <span className="text-cool-gray-400 flex items-center gap-1 text-[11px]">
                  <Clock size={11} /> 2 mins ler
                </span>
              </div>

              <h2 className="font-manrope text-lg font-bold text-primary leading-snug">
                {insight.title}
              </h2>

              <div className="h-px bg-cool-gray-100"></div>

              {/* Error and Pelissari Read analysis */}
              <div className="space-y-3.5">
                <div>
                  <span className="font-manrope text-[10px] uppercase font-black tracking-widest text-cool-gray-500 flex items-center gap-1">
                    <AlertCircle size={10} className="text-cool-gray-400" />
                    Erro Comum:
                  </span>
                  <p className="text-xs text-cool-gray-500 italic mt-1 leading-relaxed">
                    {insight.commonMistake}
                  </p>
                </div>

                <div>
                  <span className="font-manrope text-[10px] uppercase font-black tracking-widest text-primary block">
                    Pelissari Read:
                  </span>
                  <p className="text-xs text-cool-gray-700 font-medium mt-1 leading-relaxed text-balance">
                    {insight.pelissariRead}
                  </p>
                </div>
              </div>

              {/* Resolution block with border/gray background */}
              <div className="bg-cool-gray-50 border border-cool-gray-200/70 p-4 rounded-custom text-xs">
                <span className="font-manrope text-[10px] uppercase font-black tracking-widest text-primary block mb-1">
                  Decisão Pré-Reserva Recomendada:
                </span>
                <p className="text-cool-gray-600 leading-relaxed">{insight.decisionBeforeBooking}</p>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="pt-6 mt-6 border-t border-cool-gray-100 flex justify-between items-center bg-white">
              {/* WhatsApp copy feedback simulation */}
              <button
                onClick={() => simulateShare(insight.id, insight.title)}
                className={`text-[10px] uppercase font-bold tracking-widest px-3 py-2 rounded-custom transition-all flex items-center gap-1.5 ${
                  copiedId === insight.id
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-cool-gray-50 text-cool-gray-600 border border-cool-gray-200 hover:text-primary hover:bg-cool-gray-100'
                }`}
              >
                <Share2 size={12} />
                {copiedId === insight.id ? 'Copiado para WhatsApp' : 'Compartilhar'}
              </button>

              <button
                onClick={() => onNavigate('sample-blueprint')}
                className="text-xs font-bold text-primary hover:opacity-70 transition-all flex items-center gap-1"
              >
                Ver no Blueprint <ArrowRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Discovery Bottom Statement */}
      <section className="mt-16 bg-cool-gray-50 border border-cool-gray-200 p-8 rounded-custom flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-manrope text-xl font-bold text-primary">Sente incerteza sobre o percurso da sua próxima viagem?</h3>
          <p className="text-xs text-cool-gray-600 max-w-xl leading-relaxed">
            Nós podemos calibrar estas variáveis para o seu caso de forma personalizada. Nossos designers operam com clareza objetiva, isolando você de conselhos amadores e arrependimentos financeiros pós-reserva.
          </p>
        </div>
        <button
          onClick={onOpenFitCall}
          className="bg-primary text-white text-xs uppercase font-bold tracking-widest px-6 py-3.5 rounded-custom hover:bg-black transition-colors shrink-0"
        >
          Agendar um Diagnóstico
        </button>
      </section>
    </div>
  );
}
