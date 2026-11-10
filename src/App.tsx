import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { ShopTheLook } from './components/ShopTheLook';
import { ProductCatalog } from './components/ProductCatalog';
import { TechFeatures } from './components/TechFeatures';
import { LookbookCommunity } from './components/LookbookCommunity';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { RecentSaleToast } from './components/RecentSaleToast';
import { ToastContainer } from './components/ToastContainer';

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleExploreClick = () => {
    const catalogEl = document.getElementById('catalogo');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShopTheLookClick = () => {
    const lookbookEl = document.getElementById('lookbook');
    if (lookbookEl) {
      lookbookEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#070708] text-zinc-100 flex flex-col font-sans selection:bg-white selection:text-black">
        {/* Navigation Bar */}
        <Navbar
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onSearchChange={(term) => setSearchTerm(term)}
          searchTerm={searchTerm}
        />

        {/* Hero Presentation */}
        <Hero
          onExploreClick={handleExploreClick}
          onShopTheLookClick={handleShopTheLookClick}
        />

        {/* Dynamic Running Marquee */}
        <MarqueeTicker />

        {/* Interactive Editorial "Shop The Look" */}
        <ShopTheLook />

        {/* Product Catalog with Filters & Grid Options */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Fabric Technology & Engineered Materials */}
        <TechFeatures />

        {/* Social Proof, Testimonials & Community Gallery */}
        <LookbookCommunity />

        {/* VIP Newsletter with instant discount reward */}
        <Newsletter />

        {/* Footer */}
        <Footer onSelectCategory={(cat) => setSelectedCategory(cat)} />

        {/* Modals & Overlays */}
        <ProductModal />
        <SizeGuideModal />
        <CartDrawer />
        <WishlistDrawer />
        <CheckoutModal />

        {/* Live dynamic notifications */}
        <RecentSaleToast />
        <ToastContainer />
      </div>
    </CartProvider>
  );
}

export default App;
