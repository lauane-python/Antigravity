import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Star, Check } from 'lucide-react';
import type { Product, ProductSize } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [justAddedSize, setJustAddedSize] = useState<string | null>(null);

  const isFavorited = isInWishlist(product.id);
  const currentImage = isHovered && product.images[1] ? product.images[1] : product.images[0];
  const installments = Math.ceil(product.price / 6);

  const handleQuickAddSize = (e: React.MouseEvent, size: ProductSize) => {
    e.stopPropagation();
    addToCart(product, selectedColor, size, 1);
    setJustAddedSize(size);
    setTimeout(() => setJustAddedSize(null), 1800);
  };

  return (
    <div
      className="group relative flex flex-col rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden hover:shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Stage */}
      <div
        onClick={() => setQuickViewProduct(product)}
        className="relative w-full aspect-[3/4] bg-zinc-900 cursor-pointer overflow-hidden"
      >
        <img
          src={currentImage}
          alt={product.name}
          className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:scale-105 transition-all duration-700 ease-out"
        />

        {/* Gradient shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase bg-white text-black rounded-md shadow-lg">
              {product.badge}
            </span>
          )}
          {product.originalPrice && (
            <span className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase bg-zinc-900/90 text-white border border-white/20 rounded">
              -
              {Math.round(
                ((product.originalPrice - product.price) / product.originalPrice) * 100
              )}
              % OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 z-10 ${
            isFavorited
              ? 'bg-white text-black shadow-lg scale-110'
              : 'bg-black/40 text-white hover:bg-white hover:text-black hover:scale-110'
          }`}
          aria-label={isFavorited ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Floating Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setQuickViewProduct(product);
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-black/80 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 flex items-center gap-1.5 shadow-2xl"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Espiar Peça</span>
        </button>

        {/* Hover Quick Size Selector Bar (Bottom of image) */}
        <div className="absolute bottom-3 left-3 right-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <div className="p-2 rounded-xl bg-black/85 backdrop-blur-xl border border-white/15 shadow-2xl">
            <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono text-center mb-1.5">
              Adicionar Rápido (Selecione o tamanho):
            </div>
            <div className="flex items-center justify-center gap-1.5">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={(e) => handleQuickAddSize(e, sz)}
                  className={`flex-1 py-1 text-xs font-bold rounded-lg transition-all duration-200 ${
                    justAddedSize === sz
                      ? 'bg-white text-black scale-105'
                      : 'bg-white/10 text-white hover:bg-white hover:text-black'
                  }`}
                >
                  {justAddedSize === sz ? <Check className="w-3.5 h-3.5 mx-auto" /> : sz}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Info Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        
        {/* Category & Color Swatches */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider font-mono text-zinc-400">
            {product.categoryLabel}
          </span>

          {/* Color Dots */}
          <div className="flex items-center gap-1.5">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedColor(c)}
                title={c.name}
                style={{ backgroundColor: c.hex }}
                className={`w-3.5 h-3.5 rounded-full border transition-all duration-200 ${
                  selectedColor.name === c.name
                    ? 'border-white scale-125 ring-2 ring-white/20'
                    : 'border-zinc-700 hover:border-zinc-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Title & Rating */}
        <div>
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="font-['Syne'] text-base font-bold text-white group-hover:text-zinc-200 transition line-clamp-1 cursor-pointer"
          >
            {product.name}
          </h3>

          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center text-white text-xs">
              <Star className="w-3.5 h-3.5 fill-current text-white mr-1" />
              <span className="font-bold">{product.rating}</span>
            </div>
            <span className="text-zinc-600 text-xs">•</span>
            <span className="text-[11px] text-zinc-400">
              ({product.reviewsCount} avaliações)
            </span>
          </div>
        </div>

        {/* Price & Installments */}
        <div className="pt-2 border-t border-white/5 flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-extrabold text-white">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-zinc-500 line-through">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>
            <span className="text-[10px] text-zinc-400 block font-mono">
              6x de R$ {installments.toFixed(2).replace('.', ',')} s/ juros
            </span>
          </div>

          <button
            onClick={() => setQuickViewProduct(product)}
            className="p-2 rounded-xl bg-white/10 hover:bg-white hover:text-black text-white transition-all duration-300"
            title="Ver opções"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
