import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Eye, Check, ArrowRight } from 'lucide-react';
import { LOOKBOOK_SPOTS, PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

export const ShopTheLook: React.FC = () => {
  const { addToCart, setQuickViewProduct, triggerConfetti } = useCart();
  const [activeSpotId, setActiveSpotId] = useState<string>('spot-top');
  const [comboAdded, setComboAdded] = useState(false);

  const activeSpot = LOOKBOOK_SPOTS.find((s) => s.id === activeSpotId) || LOOKBOOK_SPOTS[0];
  const activeProduct = PRODUCTS.find((p) => p.id === activeSpot.productId);

  const handleBuyFullLook = () => {
    // Add top and legging
    const top = PRODUCTS.find((p) => p.id === 'noir-02');
    const legging = PRODUCTS.find((p) => p.id === 'noir-01');

    if (top) addToCart(top, top.colors[0], 'M', 1);
    if (legging) addToCart(legging, legging.colors[0], 'M', 1);

    triggerConfetti();
    setComboAdded(true);
    setTimeout(() => setComboAdded(false), 3000);
  };

  return (
    <section id="lookbook" className="py-20 lg:py-28 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>INTERACTIVE EDITORIAL</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-5xl font-black text-white tracking-tight">
              SHOP THE LOOK
            </h2>
            <p className="text-zinc-400 max-w-lg text-sm sm:text-base">
              Toque nos pontos interativos para explorar as peças usadas em nosso editorial oficial de lançamento.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
              COMBO DROP: <span className="text-white font-bold">15% OFF NO LOOK COMPLETO</span>
            </div>
          </div>
        </div>

        {/* Lookbook Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hotspot Image Column */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 aspect-[4/5] sm:aspect-[4/5] max-h-[640px] w-full">
              <img
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=85"
                alt="Editorial Lookbook Noir"
                className="w-full h-full object-cover object-center filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              {/* Hotspots */}
              {LOOKBOOK_SPOTS.map((spot) => {
                const isActive = spot.id === activeSpotId;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveSpotId(spot.id)}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group transition-all duration-300 focus:outline-none`}
                    aria-label={`Ver ${spot.title}`}
                  >
                    {/* Pulsing ring */}
                    <span
                      className={`absolute -inset-2 rounded-full border ${
                        isActive ? 'border-white animate-ping' : 'border-white/40'
                      }`}
                    />
                    {/* Center point */}
                    <span
                      className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 shadow-xl ${
                        isActive
                          ? 'bg-white text-black border-white scale-110 shadow-[0_0_20px_rgba(255,255,255,0.8)]'
                          : 'bg-black/80 text-white border-white/60 hover:bg-white hover:text-black hover:scale-105'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-current" />
                    </span>

                    {/* Label tooltip */}
                    <span
                      className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1 rounded-lg text-xs font-semibold backdrop-blur-md transition-all duration-300 pointer-events-none ${
                        isActive
                          ? 'bg-white text-black opacity-100 translate-x-0'
                          : 'bg-black/80 text-zinc-300 opacity-0 group-hover:opacity-100 translate-x-1'
                      }`}
                    >
                      {spot.title}
                    </span>
                  </button>
                );
              })}

              <div className="absolute bottom-5 left-5 text-xs text-zinc-400 font-mono tracking-wider">
                EDITORIAL NOIR // SÃO PAULO STUDIO
              </div>
            </div>
          </div>

          {/* Right Product Focus Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {activeProduct && (
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 relative overflow-hidden transition-all duration-500">
                
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    Peça em Destaque no Look
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white font-semibold">
                    {activeProduct.categoryLabel}
                  </span>
                </div>

                <div className="flex gap-5 mt-6 items-center">
                  <img
                    src={activeProduct.images[0]}
                    alt={activeProduct.name}
                    className="w-24 h-32 rounded-xl object-cover filter grayscale contrast-125 border border-white/10 shrink-0"
                  />
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-['Syne'] text-xl font-bold text-white leading-tight">
                      {activeProduct.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-extrabold text-white">
                        R$ {activeProduct.price.toFixed(2).replace('.', ',')}
                      </span>
                      {activeProduct.originalPrice && (
                        <span className="text-xs text-zinc-500 line-through">
                          R$ {activeProduct.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 line-clamp-2 pt-1">
                      {activeProduct.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button
                    onClick={() => setQuickViewProduct(activeProduct)}
                    className="py-3 px-4 rounded-xl border border-white/20 text-white text-xs font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4 text-zinc-400" />
                    <span>Ver Detalhes</span>
                  </button>

                  <button
                    onClick={() => addToCart(activeProduct, activeProduct.colors[0], 'M', 1)}
                    className="py-3 px-4 rounded-xl bg-white text-black text-xs font-bold hover:bg-zinc-200 transition flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Adicionar Peça</span>
                  </button>
                </div>
              </div>
            )}

            {/* Complete Look Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/20 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-['Syne'] text-lg font-bold text-white">
                    COMPRE O LOOK COMPLETO
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Top Racerback + Legging Sculpt Ribbed Onyx
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-zinc-500 line-through">R$ 409,80</div>
                  <div className="text-xl font-extrabold text-white font-mono">
                    R$ 348,30
                  </div>
                  <span className="text-[10px] text-zinc-300 font-bold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded">
                    ECONOMIZE R$ 61,50
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Inclui 2 peças coordenadas em malha premium 340 GSM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Frete Expresso Grátis já incluso para todo o Brasil</span>
                </div>
              </div>

              <button
                onClick={handleBuyFullLook}
                className="w-full py-4 rounded-2xl bg-white text-black font-extrabold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
              >
                {comboAdded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Look Adicionado à Sacola!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Garantir Combo Completo (15% OFF)</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
