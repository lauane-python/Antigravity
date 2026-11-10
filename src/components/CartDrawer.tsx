import React, { useState } from 'react';
import {
  X,
  ShoppingBag,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Truck,
  Plus,
  Minus,
  Tag,
  Check
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    couponCode,
    couponDiscountPercent,
    applyCoupon,
    subtotal,
    discountAmount,
    total,
    remainingForFreeShipping,
    freeShippingProgress,
    setIsCheckoutOpen
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponError, setCouponError] = useState('');

  if (!isCartOpen) return null;

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponError('');
      setInputCoupon('');
    }
  };

  const handleGoToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-zinc-950 border-l border-white/10 h-full flex flex-col justify-between shadow-2xl z-10 animate-slideLeft">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-white" />
            <span className="font-['Syne'] text-lg font-bold text-white tracking-wide">
              MINHA SACOLA
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/10 text-white">
              {cart.reduce((acc, i) => acc + i.quantity, 0)}
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition"
            aria-label="Fechar Sacola"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-zinc-900/90 p-4 border-b border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Truck className="w-3.5 h-3.5 text-white" />
              {remainingForFreeShipping === 0 ? (
                <strong className="text-white">VOCÊ GANHOU FRETE GRÁTIS!</strong>
              ) : (
                <span>
                  Faltam <strong>R$ {remainingForFreeShipping.toFixed(2).replace('.', ',')}</strong> para frete grátis
                </span>
              )}
            </span>
            <span className="text-white font-bold">{freeShippingProgress}%</span>
          </div>

          {/* Progress bar line */}
          <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500 rounded-full"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-zinc-500">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-['Syne'] text-base font-bold text-white">
                  Sua sacola está vazia
                </h4>
                <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
                  Descubra os lançamentos do Drop 01 com modelagem exclusiva e alta performance.
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition"
              >
                Explorar Coleção
              </button>
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}-${index}`}
                className="flex gap-4 p-3.5 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-white/15 transition"
              >
                {/* Thumbnail */}
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-20 h-24 rounded-xl object-cover filter grayscale contrast-125 border border-white/10 shrink-0"
                />

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-white leading-tight font-['Syne']">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() =>
                          removeFromCart(
                            item.product.id,
                            item.selectedColor.name,
                            item.selectedSize
                          )
                        }
                        className="text-zinc-500 hover:text-red-400 transition"
                        title="Remover produto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1.5 text-[11px] text-zinc-400 font-mono">
                      <span className="flex items-center gap-1">
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-white/20"
                          style={{ backgroundColor: item.selectedColor.hex }}
                        />
                        {item.selectedColor.name}
                      </span>
                      <span>•</span>
                      <span>Tam: {item.selectedSize}</span>
                    </div>
                  </div>

                  {/* Quantity & Unit price */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-white/15 rounded-lg bg-black/40">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.selectedColor.name,
                            item.selectedSize,
                            -1
                          )
                        }
                        className="p-1 text-zinc-400 hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-mono font-bold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.selectedColor.name,
                            item.selectedSize,
                            1
                          )
                        }
                        className="p-1 text-zinc-400 hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-sm font-extrabold text-white font-mono">
                      R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Coupon & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-white/10 bg-zinc-950 space-y-4">
            
            {/* Coupon Code Section */}
            <form onSubmit={handleApply} className="space-y-1.5">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input
                    type="text"
                    placeholder="Cupom (ex: NOIR10)"
                    value={inputCoupon}
                    onChange={(e) => setInputCoupon(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white uppercase font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase rounded-xl border border-white/10 transition"
                >
                  Aplicar
                </button>
              </div>

              {couponDiscountPercent > 0 && (
                <div className="flex items-center justify-between text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    Cupom <strong>{couponCode}</strong> ({couponDiscountPercent}% OFF)
                  </span>
                  <span>- R$ {discountAmount.toFixed(2).replace('.', ',')}</span>
                </div>
              )}

              {couponError && (
                <p className="text-[11px] text-red-400 font-mono">{couponError}</p>
              )}
            </form>

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-zinc-400 pt-2 border-t border-white/10">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white font-mono">
                  R$ {subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Desconto aplicado</span>
                  <span className="font-mono">
                    - R$ {discountAmount.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Frete</span>
                <span className="text-white font-mono">
                  {remainingForFreeShipping === 0 ? 'GRÁTIS' : 'Calculado no checkout'}
                </span>
              </div>

              <div className="flex justify-between items-baseline pt-2 border-t border-white/10 text-base font-bold text-white">
                <span className="font-['Syne']">TOTAL</span>
                <span className="text-xl font-extrabold text-white font-mono">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={handleGoToCheckout}
              className="w-full py-4 rounded-2xl bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group active:scale-95"
            >
              <span>Finalizar Pedido Seguro</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* Security Pill */}
            <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
              <span>Checkout Blindado SSL 256-bit • Envio Imediato</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
