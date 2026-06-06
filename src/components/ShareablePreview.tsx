import React from 'react';
import { 
  Eye, 
  Lock, 
  Compass, 
  MapPin, 
  HelpCircle, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight,
  Shield,
  Sparkles
} from 'lucide-react';
import { Surface } from '../types';

interface ShareablePreviewProps {
  onOpenFitCall: () => void;
}

export default function ShareablePreview({ onOpenFitCall }: ShareablePreviewProps) {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
      
      {/* Premium Safety Banner - Matches original Stitch exactly */}
      <div className="bg-cool-gray-50 border border-cool-gray-200 p-5 rounded-custom mb-10 flex items-start gap-4">
        <Eye className="text-cool-gray-600 mt-1 shrink-0" size={20} />
        <div className="space-y-1">
          <h3 className="text-xs uppercase font-bold tracking-widest text-primary">PREVIEW COMPARTILHÁVEL</h3>
          <p className="text-xs text-cool-gray-500 leading-relaxed">
            Dados sensíveis, códigos alfandegários e confirmações de reservas privadas foram completamente omitidos para garantir um compartilhamento seguro via WhatsApp.
          </p>
        </div>
      </div>

      {/* Main Title Banner */}
      <section className="mb-10 space-y-4">
        <h1 className="font-manrope text-3xl md:text-5xl font-black text-primary tracking-tight">
          Japão: The Pragmatic Approach
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 text-xs text-cool-gray-500 font-medium">
          <span>Apresentado para: <strong className="text-primary italic">Sr. P*** S***</strong></span>
          <span className="hidden sm:inline text-cool-gray-300">•</span>
          <span>Datas: <strong className="text-primary uppercase tracking-[0.1em]">[CONFIDENCIAL]</strong></span>
        </div>
      </section>

      {/* Main Grid: Left Strategy, Right Omissions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        
        {/* Left Side: Strategy / Timeline */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Route Thesis */}
          <section className="border border-cool-gray-200 rounded-custom p-6 bg-white space-y-4 shadow-sm">
            <h2 className="font-manrope text-lg font-bold text-primary flex items-center gap-2">
              <Compass size={18} className="text-primary" />
              Route Thesis
            </h2>
            <p className="text-xs md:text-sm text-cool-gray-600 leading-relaxed">
              A abordagem estratégica para o Japão exige mitigar a fadiga do fuso horário e gerenciar a saturação sensorial. Iniciamos a jornada em Kyoto, proporcionando uma introdução gradual através de ambientes mais silenciosos e tradicionais, antes de culminar na intensidade urbana de Tóquio.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-cool-gray-50 p-4 rounded-custom border border-cool-gray-200">
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Pacing</h4>
                <p className="text-xs text-cool-gray-500 leading-relaxed">
                  Ritmo moderado-a-intenso, focado em imersão seletiva ao invés de cobertura exaustiva e corrida de checkmarks.
                </p>
              </div>
              <div className="bg-cool-gray-50 p-4 rounded-custom border border-cool-gray-200">
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Logistic Pivot</h4>
                <p className="text-xs text-cool-gray-500 leading-relaxed">
                  Utilização do trem bala Shinkansen para transições limpas, eliminando a fadiga associada a voos de conexões curtas.
                </p>
              </div>
            </div>
          </section>

          {/* Destination Timeline Sequence */}
          <section className="space-y-6">
            <h3 className="font-manrope text-lg font-bold text-primary border-b border-cool-gray-200 pb-2">
              Destination Sequence (Sanitizado)
            </h3>

            <div className="relative pl-6 md:pl-8 border-l border-cool-gray-200 space-y-8 ml-3">
              
              {/* FASe 1: Kyoto */}
              <div className="relative space-y-3">
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 bg-primary rounded-full ring-4 ring-white" />
                
                <div>
                  <span className="text-[9px] uppercase font-bold text-cool-gray-400 tracking-wider">FASE 1</span>
                  <h4 className="font-manrope text-base md:text-lg font-bold text-primary">Kyoto e Região</h4>
                  <p className="text-xs md:text-sm text-cool-gray-500 leading-relaxed mt-1">
                    Aterrissagem suave anti-fadiga. Foco na preservação da madeira, silêncio acústico de templos budistas antigos e controle primário de voo longo.
                  </p>
                </div>

                {/* Kyoto image container placeholder */}
                <div className="h-44 bg-cool-gray-100 rounded-custom border border-cool-gray-200 overflow-hidden relative shadow-sm">
                  <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNbnxW2vhr7_t0VXtdzs4IQ8tluR0mH8DELmdg4qAf9YlBf5gFE05XzuRcyM4w0rvfYtGK94yfIzxVkSpRCnnK_LFXpKf9IMrLGjvuTGPd26qAkXeABkX6JneYKNg7A8roK0H3EOz_DrLssxh-_otH7KieX7oze4mGXm9c_ijOmZ5nDOWs_80ErUx_EzbssJub0OMvd7k5gD2Fpw0NHr3EmsayzDENOlvltDUBol52xJ5PNtlJAAv6yFGDc870zOatDMj5me5mdJIL')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              {/* FASE 2: Kanazawa */}
              <div className="relative space-y-1">
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 bg-cool-gray-400 rounded-full ring-4 ring-white" />
                
                <span className="text-[9px] uppercase font-bold text-cool-gray-400 tracking-wider block">FASE 2</span>
                <h4 className="font-manrope text-base md:text-lg font-bold text-primary">Kanazawa</h4>
                <p className="text-xs md:text-sm text-cool-gray-500 leading-relaxed mt-1">
                  Oásis artesanal preservado samurai. Ponto estratégico para pernoite clássico de Ryokan tradicional e descompressão de ritmo na metade do percurso.
                </p>
              </div>

              {/* FASE 3: Tóquio */}
              <div className="relative space-y-3">
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 bg-primary rounded-full ring-4 ring-white" />
                
                <div>
                  <span className="text-[9px] uppercase font-bold text-cool-gray-400 tracking-wider">FASE 3</span>
                  <h4 className="font-manrope text-base md:text-lg font-bold text-primary">Tóquio</h4>
                  <p className="text-xs md:text-sm text-cool-gray-500 leading-relaxed mt-1">
                    Excitação e clímax técnico. Gastronomia de ponta, design urbano agressivo contemporâneo e imersão tecnológica em Aoyama.
                  </p>
                </div>

                {/* Tokyo image placeholder */}
                <div className="h-44 bg-cool-gray-100 rounded-custom border border-cool-gray-200 overflow-hidden relative shadow-sm">
                  <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtpXhf_LjoEsWpbiQ4luizLspIKFe8pelIZEoSODuqcoNV9YFf4ZFKhDWU0-PKfNau--eNRg858mCRrRqoYAHjTWjxUNPbCtI9pN_H67NPEGN6GWEnJwJoEpWEOCcR_bgxIGxNU07I85_iXFtfxJw2NCPkCMs4hmAXnw-iQpE5UM8aEpbq4YH9HQu7-WMcBkgyld3Li2QUMJtddHGUIUgduWQ1NOhwptKVEG0tU6BZTAl5eDVSBqhS6Xo8mkwMZamQ5ROUv9WqKhhD')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

            </div>
          </section>

        </div>

        {/* Right Side: Omissions and conversion CTA */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Trade-offs summary */}
          <section className="bg-cool-gray-50 border border-cool-gray-200 rounded-custom p-6 space-y-4">
            <h3 className="text-xs uppercase font-bold tracking-widest text-primary flex items-center gap-1.5 border-b border-cool-gray-200 pb-2">
              <AlertTriangle size={14} />
              Trade-offs
            </h3>
            
            <p className="text-xs text-cool-gray-500 leading-relaxed mb-4">
              Decisões deliberadas tomadas para otimizar a cadência de energia dos viajantes.
            </p>

            <ul className="space-y-4">
              <li className="space-y-1">
                <h4 className="text-xs font-bold text-cool-gray-400 line-through decoration-primary decoration-1 underline-offset-4">
                  Hiroshima
                </h4>
                <p className="text-[11px] text-cool-gray-600 leading-relaxed">
                  Decisão de omissão. A logística exaustiva exigiria um pernoite estressante adicional diluindo o tempo de qualidade alocado ao redor da calma de Kyoto.
                </p>
              </li>
              <li className="space-y-1">
                <h4 className="text-xs font-bold text-cool-gray-400 line-through decoration-primary decoration-1 underline-offset-4">
                  Hakone
                </h4>
                <p className="text-[11px] text-cool-gray-600 leading-relaxed">
                  Substituído por Kanazawa. Kanazawa oferece maior densidade cultural artística, ruas samurai sem aglomerações e conexão limpa rápida de trem Shinkansen.
                </p>
              </li>
            </ul>
          </section>

          {/* Core Conversion Block */}
          <section className="bg-primary text-white rounded-custom p-6 text-center space-y-4">
            <h3 className="font-manrope text-base md:text-lg font-bold leading-snug">
              Projete Seu Próprio Itinerário Inteligente
            </h3>
            <p className="text-xs text-cool-gray-300 leading-relaxed">
              Tratamos viagens internacionais importantes como projetos estruturais rígidos em termos de design e logística de fluxo.
            </p>
            <button
              onClick={onOpenFitCall}
              className="w-full bg-white text-primary text-[11px] uppercase font-bold tracking-wider py-3 rounded-custom hover:bg-cool-gray-100 transition-colors"
            >
              Agendar Diagnóstico de Viagem
            </button>
          </section>

        </div>

      </div>

    </div>
  );
}
