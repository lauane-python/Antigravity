import React from 'react';
import { X, Ruler, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const SizeGuideModal: React.FC = () => {
  const { sizeGuideOpen, setSizeGuideOpen } = useCart();

  if (!sizeGuideOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setSizeGuideOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-zinc-400 hover:text-white transition"
          aria-label="Fechar Guia de Medidas"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center">
            <Ruler className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-['Syne'] text-xl sm:text-2xl font-black text-white">
              GUIA DE MEDIDAS OFICIAL
            </h3>
            <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono">
              Padronagem Anatômica Brasileira
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
          Nossas malhas contam com tecnologia <strong>4-Way Stretch</strong> de alta densidade. 
          Se você estiver entre dois tamanhos e preferir <strong>compressão firme</strong>, escolha o menor. Para conforto relaxado, escolha o maior.
        </p>

        {/* Table */}
        <div className="border border-white/10 rounded-2xl overflow-hidden mb-6">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-zinc-900/90 text-zinc-300 font-mono uppercase text-[11px] border-b border-white/10">
              <tr>
                <th className="py-3 px-4">Tamanho</th>
                <th className="py-3 px-4">Busto (cm)</th>
                <th className="py-3 px-4">Cintura (cm)</th>
                <th className="py-3 px-4">Quadril (cm)</th>
                <th className="py-3 px-4">Manequim</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-zinc-300">
              <tr className="hover:bg-white/5 transition">
                <td className="py-3 px-4 font-bold text-white">PP</td>
                <td className="py-3 px-4">80 - 85</td>
                <td className="py-3 px-4">60 - 66</td>
                <td className="py-3 px-4">88 - 94</td>
                <td className="py-3 px-4 font-mono">34 - 36</td>
              </tr>
              <tr className="hover:bg-white/5 transition bg-white/[0.02]">
                <td className="py-3 px-4 font-bold text-white">P</td>
                <td className="py-3 px-4">86 - 91</td>
                <td className="py-3 px-4">67 - 73</td>
                <td className="py-3 px-4">95 - 101</td>
                <td className="py-3 px-4 font-mono">38</td>
              </tr>
              <tr className="hover:bg-white/5 transition">
                <td className="py-3 px-4 font-bold text-white">M</td>
                <td className="py-3 px-4">92 - 97</td>
                <td className="py-3 px-4">74 - 80</td>
                <td className="py-3 px-4">102 - 108</td>
                <td className="py-3 px-4 font-mono">40 - 42</td>
              </tr>
              <tr className="hover:bg-white/5 transition bg-white/[0.02]">
                <td className="py-3 px-4 font-bold text-white">G</td>
                <td className="py-3 px-4">98 - 104</td>
                <td className="py-3 px-4">81 - 88</td>
                <td className="py-3 px-4">109 - 116</td>
                <td className="py-3 px-4 font-mono">44</td>
              </tr>
              <tr className="hover:bg-white/5 transition">
                <td className="py-3 px-4 font-bold text-white">GG</td>
                <td className="py-3 px-4">105 - 112</td>
                <td className="py-3 px-4">89 - 97</td>
                <td className="py-3 px-4">117 - 125</td>
                <td className="py-3 px-4 font-mono">46 - 48</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-400 bg-zinc-900/60 p-4 rounded-2xl border border-white/10">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-white" />
            <span>Primeira troca grátis sem complicação</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-white" />
            <span>30 dias corridos para devolução</span>
          </div>
        </div>

        <button
          onClick={() => setSizeGuideOpen(false)}
          className="w-full mt-6 py-3.5 bg-white text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-zinc-200 transition"
        >
          Entendi, voltar ao produto
        </button>

      </div>
    </div>
  );
};
