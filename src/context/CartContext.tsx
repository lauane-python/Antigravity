import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import type { Product, ProductColor, ProductSize, CartItem } from '../types';

interface ToastInfo {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'favorite';
}

interface CartContextType {
  cart: CartItem[];
  wishlist: Product[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  sizeGuideOpen: boolean;
  setSizeGuideOpen: (open: boolean) => void;
  
  // Actions
  addToCart: (product: Product, color: ProductColor, size: ProductSize, quantity?: number) => void;
  removeFromCart: (productId: string, colorName: string, size: ProductSize) => void;
  updateQuantity: (productId: string, colorName: string, size: ProductSize, delta: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  
  // Coupon
  couponCode: string;
  couponDiscountPercent: number;
  applyCoupon: (code: string) => { success: boolean; message: string };
  
  // Calculations
  cartCount: number;
  subtotal: number;
  discountAmount: number;
  total: number;
  freeShippingThreshold: number;
  remainingForFreeShipping: number;
  freeShippingProgress: number;
  
  // Toasts
  toasts: ToastInfo[];
  removeToast: (id: string) => void;
  triggerConfetti: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('noir_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('noir_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  const [couponCode, setCouponCode] = useState('');
  const [couponDiscountPercent, setCouponDiscountPercent] = useState(0);

  const [toasts, setToasts] = useState<ToastInfo[]>([]);

  useEffect(() => {
    localStorage.setItem('noir_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('noir_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'favorite' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3800);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffffff', '#a1a1aa', '#27272a', '#000000']
    });
  };

  const addToCart = (product: Product, color: ProductColor, size: ProductSize, quantity = 1) => {
    setCart((prev) => {
      const index = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor.name === color.name &&
          item.selectedSize === size
      );

      if (index > -1) {
        const copy = [...prev];
        copy[index].quantity += quantity;
        return copy;
      }

      return [...prev, { product, selectedColor: color, selectedSize: size, quantity }];
    });

    showToast('Adicionado à Sacola', `${product.name} (${size}) foi adicionado!`, 'success');
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, colorName: string, size: ProductSize) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedColor.name === colorName &&
            item.selectedSize === size
          )
      )
    );
  };

  const updateQuantity = (productId: string, colorName: string, size: ProductSize, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (
            item.product.id === productId &&
            item.selectedColor.name === colorName &&
            item.selectedSize === size
          ) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product: Product) => {
    const exists = wishlist.some((p) => p.id === product.id);
    if (exists) {
      setWishlist((prev) => prev.filter((p) => p.id !== product.id));
      showToast('Removido dos Favoritos', `${product.name} removido da sua lista.`, 'info');
    } else {
      setWishlist((prev) => [...prev, product]);
      showToast('Favoritado!', `${product.name} salvo nos seus desejos.`, 'favorite');
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((p) => p.id === productId);
  };

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'NOIR10') {
      setCouponCode('NOIR10');
      setCouponDiscountPercent(10);
      triggerConfetti();
      showToast('Cupom Aplicado!', '10% de desconto ativado com sucesso!', 'success');
      return { success: true, message: 'Cupom de 10% OFF aplicado!' };
    }
    if (cleanCode === 'NOIR15' || cleanCode === 'VIP15') {
      setCouponCode(cleanCode);
      setCouponDiscountPercent(15);
      triggerConfetti();
      showToast('Cupom VIP!', '15% de desconto especial ativado!', 'success');
      return { success: true, message: 'Cupom VIP de 15% OFF aplicado!' };
    }
    return { success: false, message: 'Cupom inválido. Tente "NOIR10" ou "NOIR15".' };
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = (subtotal * couponDiscountPercent) / 100;
  const total = Math.max(0, subtotal - discountAmount);

  const freeShippingThreshold = 299.0;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - total);
  const freeShippingProgress = Math.min(100, Math.round((total / freeShippingThreshold) * 100));

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        quickViewProduct,
        setQuickViewProduct,
        sizeGuideOpen,
        setSizeGuideOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        couponCode,
        couponDiscountPercent,
        applyCoupon,
        cartCount,
        subtotal,
        discountAmount,
        total,
        freeShippingThreshold,
        remainingForFreeShipping,
        freeShippingProgress,
        toasts,
        removeToast,
        triggerConfetti
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
