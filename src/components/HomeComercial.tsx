import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { Surface } from '../types';

interface HomeComercialProps {
  onNavigate: (surface: Surface) => void;
  onOpenFitCall: () => void;
}

const insights = [
  {
    title: 'O problema de começar o Japão por Tóquio',
    error: 'Seguir a porta de entrada internacional e iniciar pela cidade mais intensa.',
    read: 'Depois de um voo longo, o corpo ainda não está pronto para absorver densidade, ruído e deslocamentos complexos.',
    decision: 'Começar por uma base mais silenciosa e deixar Tóquio para quando o viajante já estiver adaptado.',
  },
  {
    title: 'O custo oculto do overplanning de luxo',
    error: 'Transformar cada refeição, transfer e experiência em compromisso.',
    read: 'Excesso de confirmação parece segurança, mas pode eliminar presença, espontaneidade e recuperação física.',
    decision: 'Separar âncoras reais de espaços intencionalmente livres.',
  },
  {
    title: 'A armadilha da localização por conveniência',
    error: 'Escolher hotel apenas por proximidade com pontos turísticos ou estação central.',
    read: 'A base errada muda o ritmo de todos os dias. Um hotel pode ser excelente e ainda assim estar no lugar errado para aquela viagem.',
    decision: 'Escolher área por função da viagem, não apenas por mapa.',
  },
  {
    title: 'Quando cidades demais reduzem a qualidade da viagem',
    error: 'Adicionar mais uma base porque “parece perto” no mapa.',
    read: 'Cada troca de cidade cobra energia: malas, check-out, transferência, espera, check-in e readaptação.',
    decision: 'Cortar paradas que não adicionam valor proporcional ao custo físico e logístico.',
  },
  {
    title: 'A experiência certa no dia errado',
    error: 'Reservar experiências importantes antes de entender o ritmo da rota.',
    read: 'Uma experiência excelente pode virar obrigação se cair em um dia de chegada, cansaço ou transição pesada.',
    decision: 'Definir primeiro a cadência da viagem. Depois posicionar experiências âncora nos dias certos.',
  },
];

const services = [
  {
    title: 'Blueprint',
    price: 'US$350',
    description: 'Para quem quer clareza antes de reservar e pretende executar sozinho.',
    includes: ['Rota e sequência recomendada', 'Ritmo e distribuição de noites', 'Áreas de hospedagem por função da viagem', 'Prioridades, omissões e decisões críticas', 'Ordem recomendada de reserva'],
    excludes: ['Reservas, emissões ou suporte em viagem'],
    cta: 'Iniciar Blueprint',
  },
  {
    title: 'Full Design',
    price: 'From US$1,500',
    description: 'Para quem quer o plano desenhado e apoio para transformar a direção em reservas.',
    includes: ['Tudo do Blueprint', 'Shortlist de hotéis com lógica de escolha', 'Recomendações de experiências e restaurantes', 'Suporte pré-viagem conforme escopo', 'Apoio de reserva quando contratado'],
    excludes: [],
    cta: 'Contratar Full Design',
  },
  {
    title: 'Signature',
    price: 'By proposal',
    description: 'Para viagens complexas, significativas ou com alto custo de erro.',
    includes: ['Design completo da viagem', 'Coordenação e contingência', 'Transições críticas e pontos frágeis mapeados', 'Suporte definido durante a viagem'],
    excludes: [],
    cta: 'Solicitar Proposta',
  },
];

const faqs = [
  ['Isso é uma agência de viagem?', 'Não no sentido tradicional. Pelissari Travel Design é um estúdio de planejamento e design de viagem. A primeira entrega é clareza: rota, ritmo, decisões críticas e ordem de reserva. Booking support pode ser adicionado conforme o escopo.'],
  ['O Blueprint inclui reservas?', 'Não. O Blueprint é uma entrega de planejamento para quem quer entender a viagem antes de reservar. Ele orienta o que reservar, em que ordem e por quê, mas a execução fica com o cliente.'],
  ['Por que pagar antes da reserva?', 'Porque as decisões mais caras costumam ser tomadas antes de qualquer hotel ser confirmado: rota, número de noites, base de hospedagem, ritmo e sequência. O Blueprint reduz o risco de comprometer dinheiro na estrutura errada.'],
  ['Posso contratar ajuda para reservar depois?', 'Sim. Clientes de Blueprint podem evoluir para Full Design quando desejam apoio para transformar a estrutura aprovada em reservas e organização pré-viagem.'],
  ['Vocês garantem upgrades, perks ou disponibilidade?', 'Não. Benefícios e disponibilidade dependem de hotéis, fornecedores, datas e regras de cada reserva. Quando booking support é contratado, algumas reservas podem ser feitas por canais profissionais quando apropriado, mas perks nunca são a promessa principal.'],
  ['O diagnóstico é uma consultoria gratuita?', 'Não. O diagnóstico é uma conversa curta para entender fit, escopo e nível de suporte. Nenhuma rota, hotel ou recomendação específica é entregue nessa etapa.'],
];

export default function HomeComercial({ onNavigate, onOpenFitCall }: HomeComercialProps) {
  return (
    <div className="w-full flex flex-col">
      <section className="py-16 md:py-24 text-center max-w-5xl mx-auto px-4">
        <span className="text-[10px] md:text-xs uppercase font-bold tracking-[0.25em] text-cool-gray-500 bg-cool-gray-100 border border-cool-gray-200/60 px-4 py-2 rounded-full inline-block mb-6">Design first. Booking second.</span>
        <h1 className="font-manrope text-4xl sm:text-5xl md:text-6xl font-black text-primary tracking-tight mb-6 leading-[1.1]">Clareza na viagem, antes da reserva.</h1>
        <p className="text-sm md:text-base text-cool-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">Estruturamos viagens complexas antes de qualquer compromisso com voos, hotéis ou experiências — para que você entenda a rota, o ritmo, os riscos e a ordem certa de reserva antes de gastar errado.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onOpenFitCall} className="bg-primary text-white text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-custom hover:bg-black transition-colors">Agendar Diagnóstico de Escopo</button>
          <button onClick={() => onNavigate('sample-blueprint')} className="bg-white border border-cool-gray-300 text-primary text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-custom hover:bg-cool-gray-50 transition-colors">Ver Sample Blueprint</button>
        </div>
      </section>

      <section className="py-16 border-y border-cool-gray-200 bg-cool-gray-50">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="font-manrope text-3xl md:text-4xl font-black tracking-tight text-primary mb-6">O problema não é falta de opções. É falta de estrutura.</h2>
          <div className="space-y-4 text-sm md:text-base text-cool-gray-600 leading-relaxed">
            <p>Você pode ter listas salvas, recomendações de amigos, vídeos, guias, mapas e um roteiro gerado por IA. Ainda assim, a decisão principal pode continuar em aberto: qual é a versão certa da viagem para o seu contexto?</p>
            <p>A diferença entre uma viagem boa no papel e uma viagem boa no corpo está na sequência, no ritmo, nas transições, na escolha das bases e no que fica de fora.</p>
          </div>
        </div>
      </section>

      <section className="px-4 max-w-[1280px] mx-auto w-full py-16 md:py-24">
        <div className="w-full h-56 md:h-72 bg-cool-gray-100 border border-cool-gray-200 rounded-custom relative overflow-hidden flex flex-col justify-center items-center text-center p-6">
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-30 pointer-events-none">{Array.from({ length: 72 }).map((_, i) => <div key={i} className="border-t border-l border-cool-gray-300" />)}</div>
          <div className="relative z-10 space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-cool-gray-500 block">Visual Method</span>
            <h2 className="font-manrope text-2xl md:text-3xl font-black text-primary tracking-tight">ARQUITETURA DA VIAGEM</h2>
            <p className="text-xs md:text-sm text-cool-gray-600 max-w-xl mx-auto leading-relaxed">Delineamento de rota, ritmo, bases de hospedagem, transições, omissões intencionais e ordem de reserva.</p>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-[1280px] mx-auto px-4 md:px-8 w-full">
        <div className="max-w-3xl mb-12">
          <h2 className="font-manrope text-3xl font-black tracking-tight text-primary">Achados Antes da Reserva</h2>
          <p className="text-sm text-cool-gray-600 mt-3 leading-relaxed">Pequenas decisões tomadas cedo mudam a viagem inteira. Estes são exemplos do tipo de leitura que fazemos antes de qualquer hotel, voo ou experiência ser confirmado.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <article key={insight.title} className="border border-cool-gray-200 rounded-custom p-6 flex flex-col justify-between gap-6 shadow-sm">
              <div className="space-y-4">
                <h3 className="font-manrope text-lg font-bold text-primary">{insight.title}</h3>
                {[['Erro comum', insight.error], ['Leitura Pelissari', insight.read], ['Decisão recomendada', insight.decision]].map(([label, text]) => (
                  <div key={label}><span className="block text-[9px] uppercase tracking-widest font-bold text-cool-gray-500 mb-1">{label}</span><p className="text-xs text-cool-gray-600 leading-relaxed">{text}</p></div>
                ))}
              </div>
              <button onClick={() => onNavigate('sample-blueprint')} className="text-left text-[10px] uppercase tracking-widest font-bold text-primary flex items-center gap-1">Ver como isso aparece no Blueprint <ArrowRight size={12} /></button>
            </article>
          ))}
        </div>
        <button onClick={() => onNavigate('antes-da-reserva')} className="mt-8 border-b border-primary text-xs uppercase tracking-widest font-bold text-primary pb-1">Ver todos os achados estratégicos</button>
      </section>

      <section id="servicos" className="scroll-mt-24 py-16 bg-cool-gray-50 border-y border-cool-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-manrope text-3xl font-black tracking-tight text-primary">Serviços de Design</h2>
            <p className="text-sm text-cool-gray-600 mt-3">O planejamento é um ativo autônomo. A reserva vem depois, quando a estrutura da viagem já está clara.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <article key={service.title} className="p-6 rounded-custom border border-cool-gray-200 bg-white flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="font-manrope text-xl font-bold">{service.title}</h3>
                  <p className="font-manrope font-black text-primary mt-2">{service.price}</p>
                  <p className="text-xs text-cool-gray-600 leading-relaxed mt-4 min-h-[48px]">{service.description}</p>
                  <span className="block text-[9px] uppercase tracking-widest font-bold text-cool-gray-500 mt-6 mb-3">Inclui</span>
                  <ul className="space-y-3">{service.includes.map(item => <li key={item} className="flex gap-2 text-xs text-cool-gray-700"><Check size={14} className="shrink-0" />{item}</li>)}</ul>
                  {service.excludes.length > 0 && <><span className="block text-[9px] uppercase tracking-widest font-bold text-cool-gray-500 mt-6 mb-3">Não inclui</span><ul>{service.excludes.map(item => <li key={item} className="flex gap-2 text-xs text-cool-gray-500"><X size={14} className="shrink-0" />{item}</li>)}</ul></>}
                </div>
                <button onClick={onOpenFitCall} className="w-full mt-8 bg-primary text-white uppercase text-[10px] tracking-wider py-3 rounded-custom font-semibold hover:bg-black transition-colors">{service.cta}</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-16">
        <div className="bg-primary text-white rounded-custom p-8 md:p-14">
          <div className="max-w-3xl">
            <h2 className="font-manrope text-2xl md:text-4xl font-black tracking-tight">O diagnóstico define o escopo certo. Não entrega planejamento gratuito.</h2>
            <p className="text-sm text-cool-gray-300 leading-relaxed mt-5">Em 20 minutos, avaliamos destino, prazo, orçamento, viajantes, complexidade e nível de suporte necessário. Depois da conversa, você recebe uma recomendação objetiva: Blueprint, Full Design, Signature — ou a orientação de que este não é o momento certo para trabalharmos juntos.</p>
            <button onClick={onOpenFitCall} className="mt-7 bg-white text-primary text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-custom hover:bg-cool-gray-100 transition-colors">Agendar Diagnóstico de Escopo</button>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 py-16 border-t border-cool-gray-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="font-manrope text-3xl font-black tracking-tight text-primary mb-8">Perguntas frequentes</h2>
          <div className="divide-y divide-cool-gray-200 border-y border-cool-gray-200">
            {faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="font-manrope font-bold text-sm cursor-pointer list-none flex justify-between gap-4">{question}<span className="text-cool-gray-500 group-open:rotate-45 transition-transform">+</span></summary><p className="text-sm text-cool-gray-600 leading-relaxed mt-3 max-w-3xl">{answer}</p></details>)}
          </div>
        </div>
      </section>
    </div>
  );
}
