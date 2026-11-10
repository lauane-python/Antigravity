import React from 'react';
import { CheckCircle2, Heart, Info, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-3 p-4 rounded-2xl glass-panel border border-white/20 shadow-2xl animate-slideLeft max-w-sm"
        >
          {toast.type === 'favorite' ? (
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0">
              <Heart className="w-4 h-4 fill-current" />
            </div>
          ) : toast.type === 'info' ? (
            <div className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center shrink-0">
              <Info className="w-4 h-4" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          )}

          <div className="space-y-0.5 flex-1 pr-1">
            <h5 className="font-['Syne'] text-xs font-bold text-white leading-tight">
              {toast.title}
            </h5>
            <p className="text-[11px] text-zinc-400 leading-snug">
              {toast.message}
            </p>
          </div>

          <button
            onClick={() => removeToast(toast.id)}
            className="text-zinc-500 hover:text-white p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
