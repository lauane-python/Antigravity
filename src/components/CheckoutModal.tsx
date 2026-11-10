import React, { useState } from 'react';
import {
  X,
  CreditCard,
  QrCode,
  CheckCircle2,
  Lock,
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    total,
    clearCart,
    triggerConfetti
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit'>('pix');
  const [formData, setFormData] = useState({
    name: 'Carolina Mendes',
    email: 'carolina.mendes@email.com',
    cpf: '382.910.428-11',
    phone: '(11) 98765-4321',
    cep: '01310-100',
    street: 'Avenida Paulista',
    number: '1578',
    city: 'São Paulo',
    state: 'SP'
  });

  const [cardData, setCardData] = useState({
    number: '•••• •••• •••• 4242',
    name: 'CAROLINA MENDES',
    expiry: '12/28',
    cvv: '891',
    installments: '6'
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  if (!isCheckoutOpen) return null;

  const pixDiscount = paymentMethod === 'pix' ? total * 0.05 : 0;
  const finalPayable = Math.max(0, total - pixDiscount);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      triggerConfetti();
      clearCart();
    }, 1500);
  };

  const handleCopyPix = () => {
    navigator.clipboard?.writeText(
      '00020126580014br.gov.bcb.pix0136noir-athletica-pagamentos-prod@bank.com.br5204000053039865405' +
        finalPayable.toFixed(2)
    );
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-zinc-950 border border-white/20 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-zinc-900/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-['Syne'] font-black">
              N
            </div>
            <div>
              <span className="font-['Syne'] text-base font-bold text-white tracking-wide block">
                CHECKOUT SEGURO // NOIR ATHLETICA
              </span>
              <span className="text-[10px] text-zinc-400 font-mono flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-400" /> Criptografia de Ponta a Ponta 256-bit
              </span>
            </div>
          </div>

          {!isCompleted && (
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition"
              aria-label="Fechar checkout"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {isCompleted ? (
            /* Order Success State */
            <div className="text-center py-10 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase font-mono tracking-widest text-zinc-400">
                  PEDIDO #NOIR-94812 CONFIRMADO
                </span>
                <h3 className="font-['Syne'] text-3xl font-black text-white">
                  Obrigada pela sua compra!
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                  Enviamos todos os detalhes do rastreamento para o email <strong>{formData.email}</strong> e via WhatsApp. Suas peças já entraram no centro de despacho prioritário.
                </p>
              </div>

              {/* Summary box */}
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-zinc-900/90 border border-white/10 text-left space-y-2 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Previsão de Entrega:</span>
                  <span className="text-white font-bold">2 a 3 dias úteis (Sedex Express)</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Endereço de Envio:</span>
                  <span className="text-white">{formData.street}, {formData.number} - {formData.city}/{formData.state}</span>
                </div>
                <div className="flex justify-between text-zinc-400 pt-2 border-t border-white/10">
                  <span>Total Pago:</span>
                  <span className="text-white font-mono font-bold text-sm">
                    R$ {finalPayable.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="px-8 py-3.5 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-200 transition"
              >
                Voltar à Loja
              </button>
            </div>
          ) : (
            /* Order Form */
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              
              {/* Payment Method Selector */}
              <div>
                <label className="text-xs uppercase font-mono tracking-wider text-zinc-400 block mb-3">
                  Escolha a forma de pagamento:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 transition ${
                      paymentMethod === 'pix'
                        ? 'border-white bg-white/10 text-white font-bold ring-2 ring-white/20'
                        : 'border-white/10 bg-zinc-900 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <QrCode className="w-6 h-6 text-emerald-400" />
                    <span className="text-xs font-bold uppercase tracking-wider">PIX (5% OFF EXTRA)</span>
                    <span className="text-[10px] text-zinc-400">Aprovação imediata</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('credit')}
                    className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 transition ${
                      paymentMethod === 'credit'
                        ? 'border-white bg-white/10 text-white font-bold ring-2 ring-white/20'
                        : 'border-white/10 bg-zinc-900 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <CreditCard className="w-6 h-6 text-white" />
                    <span className="text-xs font-bold uppercase tracking-wider">Cartão de Crédito</span>
                    <span className="text-[10px] text-zinc-400">Em até 10x sem juros</span>
                  </button>
                </div>
              </div>

              {/* PIX Details */}
              {paymentMethod === 'pix' && (
                <div className="p-5 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400 font-mono">Chave Pix Copia e Cola:</span>
                    <span className="text-emerald-400 font-bold">Desconto de 5% aplicado!</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value="00020126580014br.gov.bcb.pix0136noir-athletica-pagamentos-prod@bank.com.br"
                      className="flex-1 bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-zinc-400 truncate"
                    />
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-zinc-200 transition"
                    >
                      {copiedPix ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPix ? 'Copiado!' : 'Copiar'}</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-zinc-400">
                    O QR Code oficial será confirmado automaticamente no momento em que você clicar em "Finalizar Pedido".
                  </p>
                </div>
              )}

              {/* Credit Card Form */}
              {paymentMethod === 'credit' && (
                <div className="p-5 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-3 animate-fadeIn">
                  <div>
                    <label className="text-[11px] font-mono text-zinc-400 block mb-1">
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      value={cardData.number}
                      onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-mono text-zinc-400 block mb-1">
                        Validade
                      </label>
                      <input
                        type="text"
                        value={cardData.expiry}
                        onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-zinc-400 block mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        value={cardData.cvv}
                        onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-zinc-400 block mb-1">
                      Parcelas
                    </label>
                    <select
                      value={cardData.installments}
                      onChange={(e) => setCardData({ ...cardData, installments: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white font-mono"
                    >
                      <option value="1">1x de R$ {total.toFixed(2)} sem juros</option>
                      <option value="3">3x de R$ {(total / 3).toFixed(2)} sem juros</option>
                      <option value="6">6x de R$ {(total / 6).toFixed(2)} sem juros</option>
                      <option value="10">10x de R$ {(total / 10).toFixed(2)} sem juros</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Delivery Data */}
              <div>
                <label className="text-xs uppercase font-mono tracking-wider text-zinc-400 block mb-3">
                  Dados de Entrega:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono text-zinc-400 block mb-1">Nome Completo</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-zinc-400 block mb-1">WhatsApp</label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3 py-2 text-xs text-white font-mono"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-[11px] font-mono text-zinc-400 block mb-1">Endereço Completo</label>
                    <input
                      type="text"
                      value={`${formData.street}, ${formData.number} - ${formData.city}/${formData.state}`}
                      onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Order Final Summary */}
              <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/10 space-y-1.5 text-xs text-zinc-400">
                <div className="flex justify-between">
                  <span>Itens no Pedido:</span>
                  <span className="text-white font-mono">{cart.length} itens</span>
                </div>
                {pixDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Desconto 5% PIX:</span>
                    <span className="font-mono">- R$ {pixDiscount.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                <div className="flex justify-between items-baseline pt-2 border-t border-white/10 text-base font-bold text-white">
                  <span>Valor Total a Pagar:</span>
                  <span className="text-xl font-extrabold text-white font-mono">
                    R$ {finalPayable.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 rounded-2xl bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <span>Processando autorização segura...</span>
                ) : (
                  <>
                    <span>Confirmar Pedido & Finalizar</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
