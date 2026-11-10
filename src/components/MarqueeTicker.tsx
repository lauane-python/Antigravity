import React from 'react';
import { Sparkles, Activity, ShieldCheck, Flame, Cpu } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    { text: 'HIGH PERFORMANCE ACTIVEWEAR', icon: Flame },
    { text: 'ZERO TRANSPARÊNCIA 340 GSM', icon: ShieldCheck },
    { text: 'SEAMLESS 3D BODY MAPPING', icon: Cpu },
    { text: 'SCULPT COMPRESSION TECHNOLOGY', icon: Activity },
    { text: 'MONOCHROME ESSENCE DROP 01', icon: Sparkles },
    { text: '4-WAY STRETCH BUTTER-SOFT', icon: Flame },
    { text: 'PARCELAMENTO EM ATÉ 10X', icon: ShieldCheck },
  ];

  return (
    <div className="relative py-4 bg-zinc-950 border-y border-white/10 overflow-hidden select-none">
      {/* Left/Right blur vignettes */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#070708] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#070708] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap items-center">
        {[...items, ...items, ...items].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="inline-flex items-center mx-6 gap-3 text-zinc-300 font-mono tracking-widest text-xs uppercase font-semibold">
              <Icon className="w-3.5 h-3.5 text-zinc-400" />
              <span>{item.text}</span>
              <span className="text-zinc-600 font-light ml-2">///</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
