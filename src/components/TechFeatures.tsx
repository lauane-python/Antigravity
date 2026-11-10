import React, { useState } from 'react';
import { ShieldCheck, Cpu, Wind, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export const TechFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 'zero-transparency',
      title: 'Zero Transparência 340 GSM',
      tagline: 'Segurança absoluta em agachamentos pesados',
      icon: ShieldCheck,
      description:
        'Desenvolvido com fios de poliamida nobre entrelaçados em micro-malha ultra compacta. A densidade de 340 gramas por metro quadrado bloqueia a passagem da luz, mesmo sob tração máxima.',
      stats: '100% Opaco',
      detail: 'Aprovado em testes de squat sob iluminação de estúdio'
    },
    {
      id: 'seamless-3d',
      title: 'Seamless 3D Body Mapping',
      tagline: 'Modelagem circular contínua sem atrito',
      icon: Cpu,
      description:
        'Tecelagem tridimensional que mapeia zonas de compressão muscular diferenciadas. Elimina pontos de pressão nas laterais do corpo e costuras desnecessárias que causam assaduras.',
      stats: '0 Costuras Laterais',
      detail: 'Sensação segunda pele sem marcar sob outras roupas'
    },
    {
      id: 'dry-sculpt',
      title: 'Thermal Balance & Dry-Fit',
      tagline: 'Regulação de calor e umidade corporal ativa',
      icon: Wind,
      description:
        'Canais microscópicos conduzem o suor da pele para a superfície externa em segundos, acelerando a evaporação e mantendo a temperatura corporal sempre estável.',
      stats: 'Secagem 4x Mais Rápida',
      detail: 'Tratamento antibacteriano permanente anti-odor'
    },
    {
      id: 'anatomical-waist',
      title: 'Cós Anatômico Anti-Rollover',
      tagline: 'Não enrola e não desce durante o treino',
      icon: Layers,
      description:
        'Estrutura com dupla camada de compressão graduada e corte em V anatômico na lombar, proporcionando sustentação central sem sufocar a respiração abdominal.',
      stats: 'Compressão Graduada',
      detail: 'Estabilidade comprovada em treinos de corrida e saltos'
    }
  ];

  return (
    <section id="tecnologia" className="py-20 lg:py-28 border-b border-white/5 relative overflow-hidden bg-zinc-950/40">
      
      {/* Background ambient subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>ENGENHARIA TÊXTIL DE ELITE</span>
          </div>
          <h2 className="font-['Syne'] text-3xl sm:text-5xl font-black text-white tracking-tight">
            A CIÊNCIA POR TRÁS DO MOVIMENTO
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Combinamos polímeros de última geração, tecelagem tridimensional e alfaiataria geométrica para criar peças que potencializam o seu desempenho físico.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            const isHovered = activeTab === index;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveTab(index)}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 border ${
                  isHovered
                    ? 'bg-zinc-900 border-white/40 shadow-[0_10px_30px_rgba(255,255,255,0.08)] scale-[1.02]'
                    : 'bg-zinc-950/70 border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Icon stage */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    isHovered ? 'bg-white text-black shadow-lg shadow-white/20' : 'bg-white/5 text-white border border-white/10'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-['Syne'] text-lg font-bold text-white mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
                    {item.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Stat pill */}
                <div className="pt-6 mt-6 border-t border-white/10 space-y-1">
                  <div className="text-base font-extrabold text-white font-mono">
                    {item.stats}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    {item.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Philosophy Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-black border border-white/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white">
              Garantia de Performance NOIR
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Teste suas peças por 30 dias na academia, no studio de pilates ou na corrida. Se não for a melhor peça fitness do seu armário, devolvemos 100% do seu dinheiro.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Troca Grátis sem Custos</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
