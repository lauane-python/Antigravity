import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export const RecentSaleToast: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentSale, setCurrentSale] = useState<{
    name: string;
    city: string;
    productName: string;
    productImage: string;
    timeAgo: string;
  } | null>(null);

  const buyers = [
    { name: 'Fernanda L.', city: 'São Paulo, SP' },
    { name: 'Carolina M.', city: 'Rio de Janeiro, RJ' },
    { name: 'Beatriz R.', city: 'Curitiba, PR' },
    { name: 'Juliana P.', city: 'Belo Horizonte, MG' },
    { name: 'Mariana S.', city: 'Florianópolis, SC' },
    { name: 'Camila T.', city: 'Brasília, DF' }
  ];

  useEffect(() => {
    // Show first after 5 seconds, then repeat every 25 seconds
    const triggerSale = () => {
      const buyer = buyers[Math.floor(Math.random() * buyers.length)];
      const product = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
      const times = ['há 2 minutos', 'há 4 minutos', 'há 6 minutos', 'agora mesmo'];
      const time = times[Math.floor(Math.random() * times.length)];

      setCurrentSale({
        name: buyer.name,
        city: buyer.city,
        productName: product.name,
        productImage: product.images[0],
        timeAgo: time
      });
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    const initialTimeout = setTimeout(triggerSale, 4000);
    const interval = setInterval(triggerSale, 24000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!visible || !currentSale) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm glass-panel p-3.5 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-3.5 animate-slideRight">
      <img
        src={currentSale.productImage}
        alt={currentSale.productName}
        className="w-12 h-14 rounded-xl object-cover filter grayscale contrast-125 border border-white/10 shrink-0"
      />
      <div className="space-y-0.5 flex-1 pr-2">
        <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>COMPRA CONFIRMADA • {currentSale.timeAgo}</span>
        </div>
        <p className="text-xs font-bold text-white leading-tight font-['Syne'] line-clamp-1">
          {currentSale.productName}
        </p>
        <p className="text-[11px] text-zinc-400">
          {currentSale.name} ({currentSale.city})
        </p>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="p-1 text-zinc-500 hover:text-white transition"
        aria-label="Fechar notificação"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
