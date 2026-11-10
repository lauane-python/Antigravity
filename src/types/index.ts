export type ProductSize = 'PP' | 'P' | 'M' | 'G' | 'GG';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'leggings' | 'tops' | 'conjuntos' | 'casacos' | 'shorts' | 'acessorios';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  isNew?: boolean;
  isBestseller?: boolean;
  colors: ProductColor[];
  sizes: ProductSize[];
  images: string[];
  description: string;
  fabricTech: string[];
  stockWarning?: string;
}

export interface CartItem {
  product: Product;
  selectedColor: ProductColor;
  selectedSize: ProductSize;
  quantity: number;
}

export interface LookSpot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  productId: string;
  title: string;
  price: number;
}
