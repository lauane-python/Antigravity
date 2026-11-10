import React, { useState } from 'react';
import { Mail, ArrowRight, Check, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Newsletter: React.FC = () => {
  const { triggerConfetti, applyCoupon } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    triggerConfetti();
  };

  const handleCopyCode = () => {
    applyCoupon('NOIR15');
    navigator.clipboard?.writeText('NOIR15');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 border-b border-white/5 relative overflow-hidden bg-black">
      {/* Decorative radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono uppercase tracking-widest text-zinc-300">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>ACESSO ANTECIPADO & RECOMPENSAS</span>
        </div>

        <h2 className="font-['Syne'] text-3xl sm:text-5xl font-black text-white tracking-tight">
          JUNTE-SE AO NOIR CLUB
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Receba notificações prioritárias antes dos lançamentos esgotarem e desbloqueie imediatamente <strong>15% de desconto</strong> no seu primeiro pedido.
        </p>

        {subscribed ? (
          <div className="p-6 rounded-3xl bg-zinc-900/90 border border-white/20 max-w-md mx-auto space-y-4 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-['Syne'] text-lg font-bold text-white">
              Bem-vinda ao clube exclusivo!
            </h4>
            <p className="text-xs text-zinc-400">
              Seu cupom especial de 15% OFF foi gerado:
            </p>
            <div className="flex items-center justify-center gap-2 p-3 bg-black/60 rounded-xl border border-white/15">
              <span className="font-mono font-bold text-white tracking-widest text-base">
                NOIR15
              </span>
              <button
                onClick={handleCopyCode}
                className="px-3 py-1 rounded-lg bg-white text-black text-xs font-bold uppercase transition hover:bg-zinc-200"
              >
                {copied ? 'Ativado!' : 'Copiar & Aplicar'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="Seu melhor email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-900 border border-white/15 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 rounded-2xl bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              <span>Resgatar 15%</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="text-[11px] text-zinc-500 font-mono">
          Sem spam. Apenas drops exclusivos, editoriais de estilo e convites VIP.
        </div>

      </div>
    </section>
  );
};
