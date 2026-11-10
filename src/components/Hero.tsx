import React from 'react';
import { ArrowRight, Sparkles, Zap, Flame, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onShopTheLookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onShopTheLookClick }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/5">
      {/* Background ambient lighting/glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-zinc-700/10 via-white/5 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-zinc-800/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Season Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs tracking-wider uppercase text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span className="font-mono text-white font-semibold">DROP 01 // 2026 COLLECTION</span>
              <span className="text-zinc-500 font-light">•</span>
              <span className="text-zinc-400">MONOCHROME EDITION</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-['Syne'] text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                ALTA PERFORMANCE.
                <span className="block text-gradient-silver">
                  MINIMALISMO PURO.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-zinc-400 font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed pt-2">
                Engenharia têxtil de alta compressão e alfaiataria esportiva contemporânea. 
                Peças desenhadas para esculpir a anatomia feminina com zero transparência e liberdade máxima de movimento.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 group"
              >
                <span>Explorar Coleção Drop 01</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onShopTheLookClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-sm tracking-wider uppercase hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-zinc-400 group-hover:text-white transition" />
                <span>Shop The Look Interativo</span>
              </button>
            </div>

            {/* Value Props Micro Grid */}
            <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-4 border-t border-white/10 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col">
                <span className="font-['Syne'] text-2xl sm:text-3xl font-extrabold text-white">
                  340<span className="text-zinc-500 text-sm sm:text-lg">GSM</span>
                </span>
                <span className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5">
                  Densidade Anti-Transparência
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-['Syne'] text-2xl sm:text-3xl font-extrabold text-white">
                  4-WAY
                </span>
                <span className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5">
                  Elasticidade Inteligente 360°
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-['Syne'] text-2xl sm:text-3xl font-extrabold text-white">
                  4.9<span className="text-zinc-500 text-sm">/5.0</span>
                </span>
                <span className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5">
                  +14.800 Atletas Atendidas
                </span>
              </div>
            </div>

          </div>

          {/* Right Visual Composition / Hero Image Gallery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-sm pointer-events-none" />

              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-zinc-900 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=85"
                  alt="Noir Athletica Campaign"
                  className="w-full h-[480px] sm:h-[580px] object-cover object-center filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                {/* Floating Micro Badge 1: Top Right */}
                <div className="absolute top-5 right-5 glass-panel px-3.5 py-2 rounded-xl flex items-center gap-2 border border-white/20 shadow-xl animate-float">
                  <Flame className="w-4 h-4 text-white" />
                  <div className="text-left">
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">Sensação</p>
                    <p className="text-xs font-bold text-white">Segunda Pele Térmica</p>
                  </div>
                </div>

                {/* Floating Micro Badge 2: Bottom Overlay */}
                <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-2xl border border-white/20 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-white" />
                      Sculpt Technology™
                    </span>
                    <span className="text-xs text-white font-bold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                      R$ 249,90
                    </span>
                  </div>
                  <h3 className="font-['Syne'] text-base font-bold text-white">
                    Legging Sculpt Ribbed Onyx
                  </h3>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-xs text-zinc-400">
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      <span>Zero transparência no agachamento</span>
                    </div>
                    <span className="text-zinc-500">Cós Alto Anatômico</span>
                  </div>
                </div>

              </div>

              {/* Decorative Corner Tag */}
              <div className="hidden sm:block absolute -bottom-5 -left-5 bg-[#09090b] border border-white/20 rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-black font-['Syne']">
                    N
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">Design Contemporâneo</div>
                    <div className="text-[11px] text-zinc-400">Corte alfaiataria fitness</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
