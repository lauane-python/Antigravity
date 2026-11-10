import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    setQuickViewProduct
  } = useCart();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={() => setIsWishlistOpen(false)} />

      <div className="relative w-full max-w-md bg-zinc-950 border-l border-white/10 h-full flex flex-col justify-between shadow-2xl z-10 animate-slideLeft">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Heart className="w-5 h-5 text-white fill-current" />
            <span className="font-['Syne'] text-lg font-bold text-white tracking-wide">
              LISTA DE DESEJOS
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/10 text-white">
              {wishlist.length}
            </span>
          </div>

          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition"
            aria-label="Fechar Favoritos"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlist.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-zinc-500">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-['Syne'] text-base font-bold text-white">
                Sua lista de desejos está vazia
              </h4>
              <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                Salve as peças que você mais gostou para garantir o seu tamanho antes do próximo drop esgotar.
              </p>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition"
              >
                Explorar Catálogo
              </button>
            </div>
          ) : (
            wishlist.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 p-3.5 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-white/15 transition group"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-20 h-24 rounded-xl object-cover filter grayscale contrast-125 border border-white/10 shrink-0 cursor-pointer"
                  onClick={() => {
                    setIsWishlistOpen(false);
                    setQuickViewProduct(product);
                  }}
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4
                        onClick={() => {
                          setIsWishlistOpen(false);
                          setQuickViewProduct(product);
                        }}
                        className="text-xs font-bold text-white leading-tight font-['Syne'] hover:underline cursor-pointer"
                      >
                        {product.name}
                      </h4>
                      <button
                        onClick={() => toggleWishlist(product)}
                        className="text-zinc-500 hover:text-red-400 transition"
                        title="Remover dos favoritos"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-xs font-extrabold text-white font-mono mt-1">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => {
                        addToCart(product, product.colors[0], 'M', 1);
                        toggleWishlist(product);
                      }}
                      className="flex-1 py-2 px-3 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Mover p/ Sacola</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
