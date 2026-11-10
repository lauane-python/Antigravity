import React, { useState, useEffect } from 'react';
import {
  X,
  Heart,
  ShoppingBag,
  Star,
  Truck,
  Ruler,
  Check,
  AlertCircle
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { ProductColor, ProductSize } from '../types';

export const ProductModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setSizeGuideOpen,
    triggerConfetti
  } = useCart();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [selectedSize, setSelectedSize] = useState<ProductSize>('M');
  const [quantity, setQuantity] = useState(1);
  const [cepInput, setCepInput] = useState('');
  const [shippingResult, setShippingResult] = useState<{
    calculated: boolean;
    days: string;
    price: string;
  } | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedColor(quickViewProduct.colors[0]);
      setSelectedSize(quickViewProduct.sizes.includes('M') ? 'M' : quickViewProduct.sizes[0]);
      setSelectedImageIndex(0);
      setQuantity(1);
      setShippingResult(null);
      setIsAdded(false);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const isFavorited = isInWishlist(quickViewProduct.id);
  const installments = Math.ceil(quickViewProduct.price / 6);

  const handleAddToCart = () => {
    if (!selectedColor) return;
    addToCart(quickViewProduct, selectedColor, selectedSize, quantity);
    triggerConfetti();
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  const handleCalculateShipping = (e: React.FormEvent) => {
    e.preventDefault();
    if (cepInput.trim().length >= 8) {
      setShippingResult({
        calculated: true,
        days: '2 a 3 dias úteis',
        price: quickViewProduct.price >= 299 ? 'GRÁTIS' : 'R$ 18,90'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-white/20 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-zinc-400 hover:text-white hover:bg-white/10 transition backdrop-blur-md"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image Gallery */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between bg-zinc-900/50 border-b md:border-b-0 md:border-r border-white/10">
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-zinc-900 border border-white/10">
            <img
              src={quickViewProduct.images[selectedImageIndex] || quickViewProduct.images[0]}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover object-center filter grayscale contrast-125 transition-all duration-500"
            />
            {quickViewProduct.badge && (
              <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-mono font-bold tracking-wider uppercase bg-white text-black rounded-md shadow-lg">
                {quickViewProduct.badge}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {quickViewProduct.images.length > 1 && (
            <div className="flex gap-3 mt-4 justify-center">
              {quickViewProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-16 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImageIndex === idx
                      ? 'border-white scale-105 ring-2 ring-white/30'
                      : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Miniatura" className="w-full h-full object-cover filter grayscale" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details & Purchase Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Header info */}
          <div>
            <div className="flex items-center justify-between text-xs text-zinc-400 uppercase font-mono tracking-wider mb-1">
              <span>{quickViewProduct.categoryLabel}</span>
              <span className="text-zinc-500">REF: {quickViewProduct.id.toUpperCase()}</span>
            </div>

            <h2 className="font-['Syne'] text-2xl sm:text-3xl font-black text-white leading-tight">
              {quickViewProduct.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-white">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-white" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">{quickViewProduct.rating}</span>
              <span className="text-xs text-zinc-400">
                ({quickViewProduct.reviewsCount} avaliações verificadas)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-white">
                  R$ {quickViewProduct.price.toFixed(2).replace('.', ',')}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-sm text-zinc-500 line-through">
                    R$ {quickViewProduct.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>
              <span className="text-xs text-zinc-400 font-mono block mt-0.5">
                ou 6x de R$ {installments.toFixed(2).replace('.', ',')} sem juros no cartão
              </span>
            </div>

            <span className="text-xs font-bold px-2.5 py-1 rounded bg-white text-black font-mono">
              PIX 5% OFF
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {quickViewProduct.description}
          </p>

          {/* Stock Urgency warning */}
          {quickViewProduct.stockWarning && (
            <div className="flex items-center gap-2 text-xs text-amber-200 bg-amber-500/10 border border-amber-500/20 px-3.5 py-2 rounded-xl">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
              <span>{quickViewProduct.stockWarning}</span>
            </div>
          )}

          {/* Color Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                Cor Selecionada: <strong className="text-white">{selectedColor?.name}</strong>
              </span>
            </div>
            <div className="flex gap-2.5">
              {quickViewProduct.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs transition ${
                    selectedColor?.name === c.name
                      ? 'border-white bg-white/10 text-white font-bold'
                      : 'border-white/10 bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-zinc-700"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                Tamanho: <strong className="text-white">{selectedSize}</strong>
              </span>
              <button
                onClick={() => setSizeGuideOpen(true)}
                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 underline font-mono"
              >
                <Ruler className="w-3 h-3" />
                <span>Tabela de Medidas</span>
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {quickViewProduct.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`py-2.5 rounded-xl text-xs font-bold transition ${
                    selectedSize === sz
                      ? 'bg-white text-black shadow-lg shadow-white/10'
                      : 'bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart Action */}
          <div className="space-y-3 pt-2">
            <div className="flex gap-3">
              {/* Quantity */}
              <div className="flex items-center border border-white/15 rounded-2xl bg-zinc-900 px-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white"
                >
                  -
                </button>
                <span className="w-8 text-center text-sm font-bold text-white font-mono">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white"
                >
                  +
                </button>
              </div>

              {/* Add to Cart CTA */}
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className="flex-1 py-4 rounded-2xl bg-white text-black font-extrabold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group active:scale-95"
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Adicionado à Sacola!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                    <span>Adicionar à Sacola</span>
                  </>
                )}
              </button>

              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(quickViewProduct)}
                className={`p-4 rounded-2xl border transition ${
                  isFavorited
                    ? 'bg-white text-black border-white'
                    : 'border-white/15 bg-zinc-900 text-zinc-400 hover:text-white hover:border-white/30'
                }`}
                title="Favoritar"
              >
                <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Shipping Simulator */}
          <div className="pt-4 border-t border-white/10">
            <form onSubmit={handleCalculateShipping} className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" />
                <span>Simular Prazo e Frete</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Digite seu CEP (ex: 01310-100)"
                  value={cepInput}
                  onChange={(e) => setCepInput(e.target.value)}
                  className="flex-1 bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider border border-white/15 transition"
                >
                  Calcular
                </button>
              </div>

              {shippingResult && (
                <div className="p-3 rounded-xl bg-zinc-900/90 border border-white/10 text-xs text-zinc-300 flex items-center justify-between animate-fadeIn">
                  <span>Entrega Expressa ({shippingResult.days})</span>
                  <span className="font-bold text-white font-mono">{shippingResult.price}</span>
                </div>
              )}
            </form>
          </div>

          {/* Fabric Technology Highlights */}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <span className="text-xs uppercase font-mono tracking-wider text-zinc-400 block mb-1">
              Diferenciais de Engenharia Têxtil:
            </span>
            {quickViewProduct.fabricTech.map((tech, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                <Check className="w-3.5 h-3.5 text-white shrink-0" />
                <span>{tech}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
