import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const { setSizeGuideOpen } = useCart();

  const handleCatClick = (cat: string) => {
    onSelectCategory(cat);
    const catalogEl = document.getElementById('catalogo');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-white/10 pt-16 pb-12">
      {/* Guarantees Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                Frete Expresso Grátis
              </h4>
              <p className="text-xs text-zinc-500 mt-1">
                Em pedidos acima de R$ 299 para todo o Brasil.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                Primeira Troca Grátis
              </h4>
              <p className="text-xs text-zinc-500 mt-1">
                Até 30 dias para trocas ou devolução integral.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                Pagamento Blindado
              </h4>
              <p className="text-xs text-zinc-500 mt-1">
                PIX com 5% OFF extra ou em até 10x sem juros.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                Malhas Certificadas
              </h4>
              <p className="text-xs text-zinc-500 mt-1">
                Zero transparência squat test & proteção UV50+.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center bg-zinc-900">
                <div className="w-2 h-2 bg-white rotate-45" />
              </div>
              <span className="font-['Syne'] text-xl font-black tracking-tight text-white">
                NOIR<span className="text-zinc-500 font-normal ml-1">ATHLETICA</span>
              </span>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Studio contemporâneo de vestuário fitness feminino de alta compressão. Criado para mulheres que exigem a união perfeita entre performance atlética extrema e estética minimalista de passarela.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h5 className="font-['Syne'] text-xs font-bold uppercase tracking-wider text-white">
              Coleções
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleCatClick('leggings')} className="hover:text-white transition">
                  Leggings Sculpt
                </button>
              </li>
              <li>
                <button onClick={() => handleCatClick('tops')} className="hover:text-white transition">
                  Tops & Bras de Sustentação
                </button>
              </li>
              <li>
                <button onClick={() => handleCatClick('conjuntos')} className="hover:text-white transition">
                  Conjuntos Seamless 3D
                </button>
              </li>
              <li>
                <button onClick={() => handleCatClick('casacos')} className="hover:text-white transition">
                  Casacos & Corta-Ventos
                </button>
              </li>
              <li>
                <button onClick={() => handleCatClick('shorts')} className="hover:text-white transition">
                  Bikers & Shorts
                </button>
              </li>
              <li>
                <button onClick={() => handleCatClick('acessorios')} className="hover:text-white transition">
                  Acessórios Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h5 className="font-['Syne'] text-xs font-bold uppercase tracking-wider text-white">
              Atendimento VIP
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setSizeGuideOpen(true)} className="hover:text-white transition">
                  Guia Oficial de Medidas
                </button>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition">
                  Rastreamento de Pedido
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="hover:text-white transition">
                  Tecnologia & Cuidados de Lavagem
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-white transition">
                  Lookbook Interativo
                </a>
              </li>
              <li>
                <a href="mailto:contato@noirathletica.com.br" className="hover:text-white transition">
                  Fale Conosco (SAC)
                </a>
              </li>
            </ul>
          </div>

          {/* Badges / Security */}
          <div className="space-y-3">
            <h5 className="font-['Syne'] text-xs font-bold uppercase tracking-wider text-white">
              Formas de Pagamento
            </h5>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono text-zinc-400">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white font-bold">PIX 5% OFF</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">VISA</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">MASTERCARD</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">ELO</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">APPLE PAY</span>
            </div>
            <p className="text-[11px] text-zinc-500 pt-2">
              Envios realizados via transportadora expressa com seguro de carga 100% coberto.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 font-mono gap-4">
        <div>
          © 2026 NOIR ATHLETICA S.A. TODOS OS DIREITOS RESERVADOS.
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:text-zinc-300 cursor-pointer">Termos de Serviço</span>
          <span>•</span>
          <span className="hover:text-zinc-300 cursor-pointer">Privacidade & Cookies</span>
          <span>•</span>
          <span className="hover:text-zinc-300 cursor-pointer">Segurança SSL</span>
        </div>
      </div>
    </footer>
  );
};
