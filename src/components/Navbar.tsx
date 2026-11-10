import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onSelectCategory?: (category: string) => void;
  onSearchChange?: (term: string) => void;
  searchTerm?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSelectCategory,
  onSearchChange,
  searchTerm = ''
}) => {
  const { cartCount, wishlist, setIsCartOpen, setIsWishlistOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  const announcements = [
    '✦ FRETE GRÁTIS EM COMPRAS ACIMA DE R$ 299 PARA TODO O BRASIL',
    '✦ USE O CUPOM "NOIR10" E GANHE 10% OFF NA PRIMEIRA COMPRA',
    '✦ DROP 01 "MONOCHROME ESSENCE" LIBERADO — PEÇAS LIMITADAS'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [announcements.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (cat: string) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    setMobileMenuOpen(false);
    const catalogEl = document.getElementById('catalogo');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-zinc-950 border-b border-white/5 text-[11px] font-medium tracking-widest uppercase text-zinc-400 py-2 px-4 transition-all overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center gap-2 text-zinc-500">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
            <span>Compra 100% Segura & Troca Grátis 30 Dias</span>
          </div>

          <div className="w-full md:w-auto text-center mx-auto transition-all duration-500 text-zinc-200 flex items-center justify-center gap-2">
            <Sparkles className="w-3 h-3 text-white animate-spin" style={{ animationDuration: '6s' }} />
            <span className="font-semibold">{announcements[announcementIndex]}</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-zinc-500">
            <span className="hover:text-white cursor-pointer transition">Atendimento VIP</span>
            <span className="text-zinc-700">|</span>
            <span className="hover:text-white cursor-pointer transition">BRL (R$)</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#070708]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80 py-3.5'
            : 'bg-[#070708]/40 backdrop-blur-md border-b border-white/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white focus:outline-none transition"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="group flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center bg-zinc-900 group-hover:border-white transition-all duration-300 group-hover:scale-105">
                <div className="w-2.5 h-2.5 bg-white rotate-45 group-hover:rotate-90 transition-transform duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-['Syne'] text-xl sm:text-2xl font-extrabold tracking-[-0.04em] text-white flex items-center">
                  NOIR<span className="text-zinc-500 font-light ml-1.5">ATHLETICA</span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.35em] text-zinc-400 -mt-1 font-semibold">
                  Studio Activewear
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-[13px] uppercase tracking-wider font-medium text-zinc-300">
            <button
              onClick={() => handleNavClick('todos')}
              className="hover:text-white transition-colors relative py-1 group"
            >
              Coleção Completa
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => handleNavClick('leggings')}
              className="hover:text-white transition-colors relative py-1 group"
            >
              Leggings Sculpt
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => handleNavClick('tops')}
              className="hover:text-white transition-colors relative py-1 group"
            >
              Tops & Bras
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => handleNavClick('conjuntos')}
              className="hover:text-white transition-colors relative py-1 group flex items-center gap-1.5"
            >
              Conjuntos Seamless
              <span className="px-1.5 py-0.5 text-[9px] bg-white/10 text-white rounded font-mono border border-white/20">
                DROP 01
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => handleNavClick('casacos')}
              className="hover:text-white transition-colors relative py-1 group"
            >
              Corta-Ventos
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </button>
            <a
              href="#tecnologia"
              className="hover:text-white transition-colors relative py-1 group text-zinc-400"
            >
              Tecnologia 3D
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-zinc-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition relative"
              title="Buscar produtos"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="p-2 text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition relative group"
              title="Lista de Desejos"
            >
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 py-2 px-3.5 rounded-full bg-white text-black hover:bg-zinc-200 font-semibold text-xs transition duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
              title="Abrir Sacola"
            >
              <ShoppingBag className="w-4 h-4 text-black" />
              <span className="hidden sm:inline">SACOLA</span>
              <span className="w-5 h-5 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Live Search dropdown overlay */}
        {searchOpen && (
          <div className="mt-4 px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-4 pb-2 animate-fadeIn">
            <div className="max-w-2xl mx-auto relative flex items-center">
              <Search className="absolute left-4 text-zinc-500 w-5 h-5" />
              <input
                type="text"
                autoFocus
                placeholder="Buscar leggings, tops, corta-ventos, conjuntos seamless..."
                value={searchTerm}
                onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                className="w-full bg-zinc-900/90 border border-white/20 rounded-xl pl-12 pr-10 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
              />
              {searchTerm && (
                <button
                  onClick={() => onSearchChange && onSearchChange('')}
                  className="absolute right-4 text-zinc-500 hover:text-white text-xs uppercase font-mono"
                >
                  Limpar
                </button>
              )}
            </div>
            <div className="max-w-2xl mx-auto flex items-center justify-between text-xs text-zinc-500 mt-2 px-2">
              <span>Sugestões: <strong>Legging Sculpt</strong>, <strong>Ghost Gray</strong>, <strong>Top Carbon</strong></span>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-zinc-400 hover:text-white underline text-[11px]"
              >
                Fechar busca [Esc]
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col p-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <span className="font-['Syne'] text-2xl font-black text-white tracking-tight">
              NOIR<span className="text-zinc-500 ml-1">ATHLETICA</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-400 hover:text-white"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex flex-col space-y-4 py-8 text-lg font-medium text-zinc-200">
            <button
              onClick={() => handleNavClick('todos')}
              className="flex items-center justify-between text-left py-2 hover:text-white border-b border-white/5"
            >
              <span>Coleção Completa</span>
              <ChevronRight className="w-5 h-5 text-zinc-600" />
            </button>
            <button
              onClick={() => handleNavClick('leggings')}
              className="flex items-center justify-between text-left py-2 hover:text-white border-b border-white/5"
            >
              <span>Leggings Sculpt Modeladoras</span>
              <ChevronRight className="w-5 h-5 text-zinc-600" />
            </button>
            <button
              onClick={() => handleNavClick('tops')}
              className="flex items-center justify-between text-left py-2 hover:text-white border-b border-white/5"
            >
              <span>Tops & Bras de Alta Sustentação</span>
              <ChevronRight className="w-5 h-5 text-zinc-600" />
            </button>
            <button
              onClick={() => handleNavClick('conjuntos')}
              className="flex items-center justify-between text-left py-2 hover:text-white border-b border-white/5"
            >
              <span>Conjuntos Seamless 3D</span>
              <span className="px-2 py-0.5 text-[10px] bg-white text-black font-bold rounded">NOVO</span>
            </button>
            <button
              onClick={() => handleNavClick('casacos')}
              className="flex items-center justify-between text-left py-2 hover:text-white border-b border-white/5"
            >
              <span>Casacos & Corta-Ventos</span>
              <ChevronRight className="w-5 h-5 text-zinc-600" />
            </button>
            <button
              onClick={() => handleNavClick('acessorios')}
              className="flex items-center justify-between text-left py-2 hover:text-white border-b border-white/5"
            >
              <span>Acessórios Pro & Garrafas</span>
              <ChevronRight className="w-5 h-5 text-zinc-600" />
            </button>
          </div>

          <div className="mt-auto border-t border-white/10 pt-6 space-y-4">
            <div className="flex items-center justify-between text-sm text-zinc-400">
              <span>Frete Grátis acima de R$ 299</span>
              <span className="text-white font-mono">10x s/ juros</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="w-full py-3.5 bg-white text-black font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Ver Minha Sacola ({cartCount})</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
