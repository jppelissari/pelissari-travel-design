import React, { useState } from 'react';
import { 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  Share2, 
  ShieldCheck, 
  MapPin, 
  Footprints, 
  AlertTriangle,
  Compass,
  ArrowRight,
  Info
} from 'lucide-react';
import { Surface } from '../types';

interface ClientTravelLinkProps {
  onNavigate: (surface: Surface) => void;
  isPrivateMode: boolean;
  setIsPrivateMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ClientTravelLink({ onNavigate, isPrivateMode, setIsPrivateMode }: ClientTravelLinkProps) {
  const [showShareNotification, setShowShareNotification] = useState(false);

  const handleGeneratePreview = () => {
    setShowShareNotification(true);
    setTimeout(() => {
      setShowShareNotification(false);
      // Automatically navigate to shareable preview
      onNavigate('shareable-preview');
    }, 2000);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
      
      {/* Simulation Banner (Restricted Environment Information) */}
      <div className="bg-charcoal text-white rounded-custom p-4 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border border-primary">
        <div className="flex items-start gap-2.5">
          <Lock size={18} className="text-white shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold tracking-wider uppercase block">Ambiente Privado de Entrega (Acesso Restrito)</span>
            <p className="text-cool-gray-300">Este link exclusivo é criptografado. O arquivo contém dados sensíveis de hospedagem e vôos.</p>
          </div>
        </div>
        <div className="text-[10px] uppercase font-bold tracking-widest text-cool-gray-400 bg-white/10 px-3 py-1 rounded-sm border border-white/25">
          Token: PEL-JAP-2026-X8
        </div>
      </div>

      {/* Interactive Sensitive Data Toggle Banner */}
      <div className="bg-cool-gray-100 border border-cool-gray-200 rounded-custom p-4 md:p-6 mb-8 flex justify-between items-center transition-all">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-cool-gray-200 text-primary">
            {isPrivateMode ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
          <div>
            <h4 className="font-manrope text-sm font-bold text-primary flex items-center gap-1.5">
              Modo Privativo {isPrivateMode ? 'Ativo' : 'Inativo'}
            </h4>
            <p className="text-xs text-cool-gray-500 max-w-md mt-0.5 leading-relaxed">
              Oculte nomes, códigos de voo e referências financeiras para consulta em público ou exibição casual a terceiros.
            </p>
          </div>
        </div>

        {/* Custom iOS Toggle Switch with Strict Design */}
        <button
          onClick={() => setIsPrivateMode(!isPrivateMode)}
          aria-label="Toggle Modo Privativo"
          className={`w-14 h-7 rounded-full transition-colors relative outline-none focus:outline-none ${
            isPrivateMode ? 'bg-primary border border-primary' : 'bg-cool-gray-300 shadow-inner'
          }`}
        >
          <span 
            className={`absolute top-0.5 w-5.5 h-5.5 rounded-full bg-white shadow-md transition-all ${
              isPrivateMode ? 'right-0.5' : 'left-0.5'
            }`}
          />
        </button>
      </div>

      {/* Main Delivery Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Primary Delivery details */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Cover card welcome block */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 border border-cool-gray-300 bg-white px-3 py-1 rounded-custom">
              <CheckCircle size={14} className="text-primary shrink-0" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Client Delivery Valid</span>
            </div>
            
            <h1 className="font-manrope text-3xl md:text-5xl font-black text-primary tracking-tight">
              Japão: The Pragmatic Approach
            </h1>
            
            <p className="text-sm text-cool-gray-600">
              Apresentado para:{' '}
              <span className={`font-semibold text-primary px-1.5 py-0.5 rounded ${isPrivateMode ? 'bg-cool-gray-200 text-cool-gray-600 select-none privacy-mask privacy-masked' : 'bg-cool-gray-100'}`}>
                {isPrivateMode ? 'Sr. P*** S***' : 'Sr. Pedro Santos'}
              </span>
            </p>
          </div>

          {/* Luxury Architecture photo render placeholder */}
          <div className="relative h-48 md:h-72 bg-cool-gray-100 rounded-custom border border-cool-gray-200 overflow-hidden shadow">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-95 transition-all duration-500" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaf1oNWgKdRxRG2IBGeg6hhqLo6ONzwt3Ajm2dePrb4xHdjaHToXnl1CKwg521_xax98lFqfIxojlIli3ZIF7_JHL0Tg0s8yifQ-KoHBKxQpOOtLKl4qGmogRoLlZ2NQg01Hip-tDGWAAy4fFtmfSCoh61EpI3FFbp6ka6zCMk-DbK9YoFqjIwI_pnbMsI9ct68-x6Y2toetcIC6qAa54Trb_ndWA94TYJo6VMX3bbFaFj_N6Eh_DHO67g9e_L_OB0clarR4IqA-Ex')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white text-[10px] uppercase font-bold tracking-[0.2em] font-manrope">
              Blueprint Render #Z-88
            </div>
          </div>

          {/* Route Sequence Module */}
          <div className="bg-white border border-cool-gray-200 rounded-custom p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-2 border-b border-cool-gray-100 pb-3">
              <Compass className="text-primary" size={20} />
              <h2 className="font-manrope text-lg font-bold text-primary">Sequência de Rota Projetada</h2>
            </div>

            <div className="relative pl-6 border-l border-cool-gray-200 space-y-6 ml-3">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-primary rounded-full ring-4 ring-white"></div>
                <h4 className="font-manrope text-sm font-bold text-primary">Tóquio (3 Noites)</h4>
                <p className="text-xs text-cool-gray-500 mt-1 leading-relaxed">
                  Aclimatação gradativa no distrito financeiro silencioso de Marunouchi. Foco em estabilizar o fuso e logística de locomoção primária urbana.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-white border-2 border-primary rounded-full ring-4 ring-white"></div>
                <h4 className="font-manrope text-sm font-bold text-primary">Kanazawa (2 Noites)</h4>
                <p className="text-xs text-cool-gray-500 mt-1 leading-relaxed">
                  Transição cultural de alto valor estético tradicional. Estadia em Ryokan exclusivo com isolamento de ruído e banho termal onsen.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-white border-2 border-primary rounded-full ring-4 ring-white"></div>
                <h4 className="font-manrope text-sm font-bold text-primary">Kyoto (4 Noites)</h4>
                <p className="text-xs text-cool-gray-500 mt-1 leading-relaxed">
                  Base secundária profunda. Exploração de bairros de design clássico de madeira e templos budistas acompanhados de guias credenciados de alta prioridade.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Grid: Pacing and Decisions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="border border-cool-gray-200 rounded-custom p-6 bg-white space-y-2">
              <Footprints size={18} className="text-primary-600" />
              <h4 className="font-manrope text-sm font-bold text-primary">Ritmo (Pacing)</h4>
              <p className="text-xs text-cool-gray-500 leading-relaxed">
                Moderado a Intenso. Densidade de atividades físicas concentrada nas manhãs frias de templos. Tardes liberadas para White Spaces casuais.
              </p>
            </div>

            <div className="border border-cool-gray-200 rounded-custom p-6 bg-white space-y-2">
              <AlertTriangle size={18} className="text-primary-600" />
              <h4 className="font-manrope text-sm font-bold text-primary">Decisões Críticas</h4>
              <p className="text-xs text-cool-gray-500 leading-relaxed">
                Omissão deliberada de passagens rápidas por Osaka para priorizar profundidade estrutural contínua em Kyoto.
              </p>
            </div>

          </div>

        </div>

        {/* Right Sidebar: Executions / Checklists */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-cool-gray-50 border border-cool-gray-200 rounded-custom p-6 space-y-4">
            <h3 className="text-xs uppercase font-bold tracking-widest text-primary border-b border-cool-gray-200 pb-2">
              Logística & Execução
            </h3>

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <span className="font-bold text-primary block">1. Ordem de Reserva Crítica:</span>
                <p className="text-cool-gray-600 leading-relaxed">
                  O Ryokan em Kanazawa selecionado exige confirmação imediata. O limite físico de quartos da temporada está próximo do fim.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-primary block">2. Próximos Passos Técnicos:</span>
                <div className="space-y-2 mt-1.5">
                  <p className="text-cool-gray-600 leading-relaxed">
                    Confirmar o voo interno{' '}
                    <span className={`px-1.5 py-0.5 rounded font-mono ${isPrivateMode ? 'bg-cool-gray-200 privacy-mask privacy-masked' : 'bg-cool-gray-100 font-bold'}`}>
                      {isPrivateMode ? 'NH***' : 'NH802 (ANA)'}
                    </span>{' '}
                    com partida de Haneda para o aeroporto de Komatsu.
                  </p>
                  <p className="text-cool-gray-600 leading-relaxed">
                    Aprovar adiantamento fiscal do guia em Kyoto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Share Block Section */}
          <div className="space-y-2">
            <button
              onClick={handleGeneratePreview}
              className="w-full bg-primary text-white text-xs uppercase font-bold tracking-widest py-3.5 rounded-custom flex justify-center items-center gap-2 hover:bg-black transition-all shadow-md active:scale-[0.98]"
            >
              <Share2 size={14} />
              Gerar Preview para Compartilhar
            </button>
            <p className="text-[10px] text-cool-gray-400 text-center font-sans">
              Seguro e higienizado para envio instantâneo via WhatsApp.
            </p>
          </div>

          {/* Secure expiration indicator */}
          <div className="text-center p-3 border border-cool-gray-200 bg-white rounded-custom text-cool-gray-400 text-[10px] uppercase tracking-widest flex items-center justify-center gap-1">
            <ShieldCheck size={12} className="text-cool-gray-400" />
            <span>Link Privativo • Expira em 90 dias</span>
          </div>

        </div>

      </div>

      {/* Floating share notification toast */}
      {showShareNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-6 py-4 rounded-custom shadow-2xl flex items-center gap-3 border border-cool-gray-800 animate-bounce">
          <ShieldCheck size={20} className="text-green-400 shrink-0" />
          <div className="text-xs">
            <span className="font-bold block uppercase tracking-wider">Preview Higienizado Gerado!</span>
            <span className="text-cool-gray-400">Ocultamos dados sensíveis. Redirecionando para visualização segura...</span>
          </div>
        </div>
      )}

    </div>
  );
}
