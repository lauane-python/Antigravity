import React, { useState, useMemo } from 'react';
import {
  SlidersHorizontal,
  Grid3X3,
  LayoutGrid,
  Search,
  X,
  Sparkles,
  ArrowUpDown
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import type { ProductSize } from '../types';

interface ProductCatalogProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  searchTerm,
  onSearchChange
}) => {
  const [selectedSize, setSelectedSize] = useState<ProductSize | 'ALL'>('ALL');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest'>('featured');
  const [gridColumns, setGridColumns] = useState<'compact' | 'editorial'>('compact');

  const categories = [
    { id: 'todos', label: 'Todos os Produtos' },
    { id: 'leggings', label: 'Leggings Sculpt' },
    { id: 'tops', label: 'Tops & Sutiãs' },
    { id: 'conjuntos', label: 'Conjuntos Seamless' },
    { id: 'casacos', label: 'Casacos & Jaquetas' },
    { id: 'shorts', label: 'Shorts & Bikers' },
    { id: 'acessorios', label: 'Acessórios Studio' }
  ];

  const sizes: (ProductSize | 'ALL')[] = ['ALL', 'PP', 'P', 'M', 'G', 'GG'];

  // Filtered and Sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      const categoryMatch =
        selectedCategory === 'todos' || product.category === selectedCategory;

      // Search match
      const searchMatch =
        !searchTerm.trim() ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());

      // Size match
      const sizeMatch =
        selectedSize === 'ALL' || product.sizes.includes(selectedSize);

      return categoryMatch && searchMatch && sizeMatch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
    });
  }, [selectedCategory, searchTerm, selectedSize, sortBy]);

  return (
    <section id="catalogo" className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>ACERVO EXCLUSIVO // DROP 01</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-5xl font-black text-white tracking-tight">
              CATÁLOGO CONTEMPORÂNEO
            </h2>
          </div>

          <div className="text-xs text-zinc-400 font-mono">
            Mostrando <span className="text-white font-bold">{filteredProducts.length}</span> modelos disponíveis
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/10 mb-8">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-black shadow-lg shadow-white/15 scale-105'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Filter & Sorting Control Bar */}
        <div className="glass-panel rounded-2xl p-4 mb-10 flex flex-wrap items-center justify-between gap-4 border border-white/10">
          
          {/* Size Filter Pills */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 mr-1 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Tamanho:</span>
            </span>
            <div className="flex items-center gap-1">
              {sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                    selectedSize === sz
                      ? 'bg-white text-black shadow'
                      : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Right Controls: Sort & Grid View Toggle */}
          <div className="flex items-center gap-4 ml-auto">
            
            {/* Sort Selector */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-zinc-400 hidden sm:block" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-zinc-900 border border-white/15 text-white text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-white font-medium cursor-pointer"
              >
                <option value="featured">Destaques & Bestsellers</option>
                <option value="newest">Lançamentos Recentes</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="rating">Melhores Avaliações</option>
              </select>
            </div>

            {/* Layout Toggle (Desktop) */}
            <div className="hidden sm:flex items-center p-1 bg-zinc-900 rounded-xl border border-white/10">
              <button
                onClick={() => setGridColumns('compact')}
                className={`p-1.5 rounded-lg transition ${
                  gridColumns === 'compact'
                    ? 'bg-white text-black shadow'
                    : 'text-zinc-500 hover:text-white'
                }`}
                title="Grid 4 Colunas"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridColumns('editorial')}
                className={`p-1.5 rounded-lg transition ${
                  gridColumns === 'editorial'
                    ? 'bg-white text-black shadow'
                    : 'text-zinc-500 hover:text-white'
                }`}
                title="Visual Editorial (2 Colunas)"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Active Filter Badges */}
        {(selectedSize !== 'ALL' || searchTerm || selectedCategory !== 'todos') && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs text-zinc-500 font-mono">Filtros ativos:</span>
            {selectedCategory !== 'todos' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs border border-white/15">
                Categoria: {categories.find((c) => c.id === selectedCategory)?.label}
                <button onClick={() => onSelectCategory('todos')} className="hover:text-red-400">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedSize !== 'ALL' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs border border-white/15">
                Tamanho: {selectedSize}
                <button onClick={() => setSelectedSize('ALL')} className="hover:text-red-400">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {searchTerm && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs border border-white/15">
                Busca: "{searchTerm}"
                <button onClick={() => onSearchChange('')} className="hover:text-red-400">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={() => {
                onSelectCategory('todos');
                setSelectedSize('ALL');
                onSearchChange('');
              }}
              className="text-xs text-zinc-400 hover:text-white underline ml-2"
            >
              Limpar todos os filtros
            </button>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div
            className={`grid gap-6 sm:gap-8 ${
              gridColumns === 'compact'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1 sm:grid-cols-2'
            }`}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-zinc-950/60 rounded-3xl border border-white/10 max-w-xl mx-auto px-6">
            <Search className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="font-['Syne'] text-2xl font-bold text-white mb-2">
              Nenhuma peça encontrada
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              Não encontramos resultados para os filtros selecionados. Tente remover o termo de busca ou resetar as opções.
            </p>
            <button
              onClick={() => {
                onSelectCategory('todos');
                setSelectedSize('ALL');
                onSearchChange('');
              }}
              className="px-6 py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition"
            >
              Ver Todas as Peças
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
