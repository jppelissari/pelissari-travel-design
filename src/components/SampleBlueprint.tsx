import React from 'react';
import { 
  Users, 
  Calendar, 
  Brain, 
  AlertTriangle, 
  Clock, 
  Check, 
  MapPin, 
  PlaneTakeoff, 
  Train, 
  Building, 
  BookOpen, 
  ArrowRight,
  ArrowDownLeft,
  XCircle,
  HelpCircle
} from 'lucide-react';
import { Surface } from '../types';

interface SampleBlueprintProps {
  onNavigate: (surface: Surface) => void;
  onOpenFitCall: () => void;
}

export default function SampleBlueprint({ onNavigate, onOpenFitCall }: SampleBlueprintProps) {
  const destinationList = [
    {
      name: 'Osaka / Kyoto',
      days: 'Dias 1-5',
      desc: 'Aterrisagem e aclimatação suave. Foco na cultura tradicional japonesa, templos budistas e ritmo lento anti-jetlag.',
      density: 2,
      icon: <PlaneTakeoff size={18} className="text-white" />,
      guidance: 'Hospede-se nos distritos silenciosos de Sanjo ou Karasuma. Evite pernoitar próximo à Estação Central de Kyoto para evitar trânsito turístico em massa.'
    },
    {
      name: 'Kanazawa',
      days: 'Dias 6-8',
      desc: 'Oásis tradicional alternativo. Excelente preservação histórica samurai, artesanal de folhas de ouro de alta classe e ritmo de descompressão antes de grandes metrópoles.',
      density: 1,
      icon: <Train size={18} className="text-white" />,
      guidance: 'Esta parada é o âncora estrutural do meio da viagem para amortizar o cansaço. Reserve seu Ryokan clássico aqui.'
    },
    {
      name: 'Tokyo',
      days: 'Dias 9-14',
      desc: 'Clímax da viagem. Modernidade extrema, alta gastronomia internacional, compras premium em Aoyama/Omotesando e grandes museus de arte digital contemporânea.',
      density: 3,
      icon: <Building size={18} className="text-white" />,
      guidance: 'Default Marunouchi/Otemachi para luxo corporativo silencioso, ou Minami-Aoyama para proximidade a estúdio de design. Evite hospedar-se em Shinjuku se você deseja silêncio acústico.'
    }
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
      
      {/* Top Breadcrumb & Title */}
      <div className="mb-12 max-w-4xl space-y-4">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-cool-gray-500 block">Visual Method Proof</span>
        <h1 className="font-manrope text-3xl md:text-5xl font-black text-primary tracking-tight leading-[1.15]">
          Japan: The Pragmatic Approach to a High-Intensity First Trip
        </h1>
        <p className="text-sm md:text-base text-cool-gray-600 max-w-3xl leading-relaxed font-sans">
          Mapeamento logístico real resolvendo os maiores gargalos de fadiga térmica, fusão de fusos horários e sobreposição de experiências para viagens de 14 dias em solo japonês.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Context & Strategy (PRD Columns) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Trip Context Box */}
          <div className="bg-cool-gray-50 border border-cool-gray-200 rounded-custom p-6 space-y-4">
            <h3 className="text-xs uppercase font-bold tracking-widest text-primary border-b border-cool-gray-200 pb-2">
              Trip Context
            </h3>
            
            <ul className="space-y-4 text-xs">
              <li className="flex gap-3">
                <Users size={16} className="text-cool-gray-500 mt-0.5 shrink-0" />
                <div>
                  <span className="block font-bold text-cool-gray-400 uppercase text-[9px]">Viajantes:</span>
                  <span className="text-primary font-medium">Casal (Primeira vez no Japão)</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Calendar size={16} className="text-cool-gray-500 mt-0.5 shrink-0" />
                <div>
                  <span className="block font-bold text-cool-gray-400 uppercase text-[9px]">Duração total:</span>
                  <span className="text-primary font-medium">14 Dias / 13 Noites</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Brain size={16} className="text-cool-gray-500 mt-0.5 shrink-0" />
                <div>
                  <span className="block font-bold text-cool-gray-400 uppercase text-[9px]">Perfil Psicográfico:</span>
                  <span className="text-primary font-medium leading-relaxed">
                    Alto interesse em cultura, arte e gastronomia. Risco agudo de exaustão sensorial. Busca conforto dinâmico sem excesso de trocas de hotel.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Booking Order Strategy */}
          <div className="bg-white border border-cool-gray-200 rounded-custom p-6 space-y-4 shadow-sm">
            <h3 className="text-xs uppercase font-bold tracking-widest text-primary border-b border-cool-gray-200 pb-2">
              Booking Order Strategy
            </h3>
            
            <div className="space-y-4 text-xs">
              <div className="border-l-2 border-primary pl-3 py-0.5">
                <span className="block text-cool-gray-400 uppercase text-[9px] font-bold">Fase 1 (Precedência Imediata)</span>
                <span className="block text-primary font-semibold text-xs mt-0.5">O Ryokan tradicional em Kanazawa</span>
                <p className="text-cool-gray-500 mt-1 leading-relaxed">
                  Acomodações tradicionais de alto padrão têm no máximo 8 a 12 quartos. Elas ditam a data âncora de todo o percurso.
                </p>
              </div>

              <div className="border-l-2 border-cool-gray-200 pl-3 py-0.5 opacity-75">
                <span className="block text-cool-gray-400 uppercase text-[9px]">Fase 2 (6 Meses antes)</span>
                <span className="block text-primary font-medium mt-0.5">Kyoto & Tokyo Hubs</span>
                <p className="text-cool-gray-500 mt-0.5">Definição dos hotéis das duas bases metropolitanas principais.</p>
              </div>

              <div className="border-l-2 border-cool-gray-200 pl-3 py-0.5 opacity-60">
                <span className="block text-cool-gray-400 uppercase text-[9px]">Fase 3 (30-60 Dias antes)</span>
                <span className="block text-primary font-medium mt-0.5">Shinkansen & Jantares Michelin</span>
                <p className="text-cool-gray-500 mt-0.5">Abertura de janelas de reservas de gastronomia refinada e assentos de trem rápido.</p>
              </div>
            </div>
          </div>

          {/* Risk Flags */}
          <div className="bg-neutral-50 border border-cool-gray-200 rounded-custom p-6 space-y-4">
            <h3 className="text-xs uppercase font-bold tracking-widest text-primary flex items-center gap-1.5 border-b border-cool-gray-200 pb-2">
              <AlertTriangle size={14} className="text-primary" />
              Risk Flags Mapeados
            </h3>
            
            <ul className="space-y-3.5 text-xs">
              <li className="space-y-1">
                <span className="font-bold text-primary block">• Logística de Malas:</span>
                <p className="text-cool-gray-600 leading-relaxed">
                  As regras de bagagem nos trens rápidos Shinkansen são severas e restritas. Exige despacho sob demanda (Yamato Express) entre Kyoto e Tóquio.
                </p>
              </li>
              <li className="space-y-1">
                <span className="font-bold text-primary block">• Saturação de Coletivos em Kyoto:</span>
                <p className="text-cool-gray-600 leading-relaxed">
                  O transporte de ônibus públicos em Kyoto sofre de superlotação severa. O planejamento de rotas de visitas precisa privilegiar linhas ferroviárias privadas ou rotas à pé nas madrugadas.
                </p>
              </li>
              <li className="space-y-1">
                <span className="font-bold text-primary block">• Overload de Menu Kaiseki:</span>
                <p className="text-cool-gray-600 leading-relaxed">
                  Agendar degustações pesadas todas as noites induz cansaço de paladar ocidental. Misturamos izakayas informais no planejamento.
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Side: Core Method Content (The Sequence) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Route Thesis */}
          <section className="bg-cool-gray-50 border border-cool-gray-200 rounded-custom p-6 md:p-8 space-y-4">
            <h2 className="font-manrope text-xl md:text-2xl font-black text-primary tracking-tight">
              Tese de Rota: A Sequência Contraintuitiva
            </h2>
            <div className="text-xs md:text-sm text-cool-gray-600 leading-relaxed space-y-3">
              <p>
                Roteiros de mercado tradicionais pousam na intensa Tóquio. Isso sobrecarrega o viajante logo de partida com escalas monstruosas, tráfego frenético e conflito de fuso horário, logo após um vôo de quase 30 horas de duração.
              </p>
              <p className="font-semibold text-primary">
                A nossa engenharia de percurso inverte este padrão.
              </p>
              <p>
                Nós mandamos o casal aterrissar em Osaka (KIX) ou realizar voo de conexão interna direta de Tóquio para o aeroporto de Kyoto. Essa chegada secundária acomoda os sentidos em meio à atmosfera calma e silenciosa de Kyoto nos primeiros dias. A viagem então progride em termos de densidade urbana, alcançando o clímax frenético de Tóquio apenas na segunda metade da viagem, quando os viajantes estão fisicamente adaptados e logisticamente confiantes.
              </p>
            </div>
          </section>

          {/* Timeline Sequence */}
          <section className="space-y-6">
            <h2 className="font-manrope text-xl md:text-2xl font-black text-primary tracking-tight border-b border-cool-gray-200 pb-3">
              Destination & Density Sequence
            </h2>

            <div className="relative pl-6 md:pl-8 border-l-2 border-cool-gray-200 space-y-8 ml-3">
              {destinationList.map((stop, i) => (
                <div key={i} className="relative space-y-2">
                  
                  {/* Point icon */}
                  <span className="absolute -left-[35px] md:-left-[43px] top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-4 ring-white shadow">
                    {stop.icon}
                  </span>

                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                    <h3 className="font-manrope text-base md:text-lg font-bold text-primary flex items-center gap-2">
                      {stop.name}
                    </h3>
                    <span className="inline-block px-2.5 py-1 rounded-custom bg-cool-gray-100 border border-cool-gray-200 text-[10px] font-bold text-cool-gray-600 uppercase tracking-wider shrink-0">
                      {stop.days}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-cool-gray-500 leading-relaxed text-balance">
                    {stop.desc}
                  </p>

                  {/* Density Bar graph visual */}
                  <div className="flex items-center gap-2 pt-2 text-[10px] uppercase font-bold tracking-wider text-cool-gray-400">
                    <span>Densidade de Fluxo:</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 3 }).map((_, di) => (
                        <span 
                          key={di} 
                          className={`w-6 h-1.5 rounded-custom ${
                            di < stop.density ? 'bg-primary' : 'bg-cool-gray-200'
                          }`}
                        ></span>
                      ))}
                    </div>
                  </div>

                  {/* Area guidance block */}
                  <div className="mt-3 bg-white border border-cool-gray-200 p-4 rounded-custom text-xs">
                    <span className="font-bold text-primary block uppercase tracking-wider text-[9px] mb-1">Diretriz da Região & Bairro:</span>
                    <p className="text-cool-gray-600 leading-relaxed">{stop.guidance}</p>
                  </div>

                </div>
              ))}
            </div>
          </section>

          {/* Opposing details: what to omit */}
          <section className="space-y-4">
            <h2 className="font-manrope text-xl md:text-2xl font-black text-primary tracking-tight border-b border-cool-gray-200 pb-3">
              Decisões Críticas: O que omitimos (e o porquê)
            </h2>
            <p className="text-xs text-cool-gray-500 italic max-w-xl leading-relaxed">
              Saber o que cortar é tão estratégico quanto o que incluir. Projetamos viagens focando em profundidade de memória, reduzindo desperdício mecânico.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-cool-gray-200 rounded-custom bg-cool-gray-50 space-y-2">
                <h4 className="font-manrope text-sm font-bold text-cool-gray-400 line-through decoration-primary decoration-1 underline-offset-4">
                  Hiroshima & Miyajima
                </h4>
                <p className="text-xs text-cool-gray-600 leading-relaxed">
                  Uma rota clássica de pacotes genéricos que exige no mínimo 7 horas líquidas extras de trem Shamikansen apenas para passar uma única noite exaustiva. Isso induz cansaço de bagagem e retira valioso tempo de exploração de Kyoto. Retemos apenas para fascinados estritos por história militar.
                </p>
              </div>

              <div className="p-5 border border-cool-gray-200 rounded-custom bg-cool-gray-50 space-y-2">
                <h4 className="font-manrope text-sm font-bold text-cool-gray-400 line-through decoration-primary decoration-1 underline-offset-4">
                  Hakone & Monte Fuji (Pernoite)
                </h4>
                <p className="text-xs text-cool-gray-600 leading-relaxed">
                  Região saturada pelo excesso de turismo massificado nos finais de semana, e com visões de montanha frequentemente obstruídas por névoa térmica. Substituímos estrategicamente por Kanazawa, que serve de ryokan luxuoso com as mesmas vantagens e maior calmaria de preservação cultural.
                </p>
              </div>
            </div>
          </section>

        </div>

      </div>

      {/* Call to action block */}
      <section className="mt-16 bg-primary text-white p-8 md:p-12 text-center rounded-custom space-y-6">
        <h2 className="font-manrope text-xl md:text-3xl font-black tracking-tight max-w-2xl mx-auto">
          Crie o Blueprint sob medida da sua próxima viagem
        </h2>
        <p className="text-xs md:text-sm text-cool-gray-300 max-w-xl mx-auto leading-relaxed">
          O Japão é apenas uma das dezenas de sequências complexas que dominamos de forma cirúrgica. Eliminamos o ruído das opiniões soltas e desenhamos a ordem impecável antes que você assine contratos de reserva.
        </p>
        <div>
          <button
            onClick={onOpenFitCall}
            className="bg-white text-primary text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-custom hover:bg-cool-gray-50 transition-colors"
          >
            Fazer Meu Diagnóstico de Escopo
          </button>
        </div>
      </section>

    </div>
  );
}
