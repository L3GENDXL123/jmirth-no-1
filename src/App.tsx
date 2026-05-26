import React, { useState, useEffect } from 'react';
import { INITIAL_PRODUCTS, INITIAL_GALLERY, FAMOUS_BRANDS } from './data';
import { Product, GalleryItem } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetailsModal from './components/ProductDetailsModal';
import SwapCalculator from './components/SwapCalculator';
import Services from './components/Services';
import About from './components/About';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import AdminPanel from './components/AdminPanel';
import { MessageCircle, Sparkles } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

export default function App() {
  // Persistence state
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('jmirth_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('jmirth_gallery');
    return saved ? JSON.parse(saved) : INITIAL_GALLERY;
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return localStorage.getItem('jmirth_admin_logged') === 'true';
  });

  // UI state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync to local storage when state updates
  useEffect(() => {
    localStorage.setItem('jmirth_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('jmirth_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('jmirth_admin_logged', String(isAdminLoggedIn));
  }, [isAdminLoggedIn]);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Action listeners
  const handleAddProduct = (newP: Product) => {
    setProducts(prev => [newP, ...prev]);
  };

  const handleUpdateProduct = (updatedP: Product) => {
    setProducts(prev => prev.map(p => p.id === updatedP.id ? updatedP : p));
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const handleAddGalleryItem = (newG: GalleryItem) => {
    setGallery(prev => [newG, ...prev]);
  };

  const handleDeleteGalleryItem = (id: string) => {
    setGallery(prev => prev.filter(g => g.id !== id));
  };

  const handleLogoutAdmin = () => {
    setIsAdminLoggedIn(false);
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleFloatingWAClick = () => {
    const textMessage = "Hello JMirth Gadget Haven, I am visiting your online showroom. I am interested in inquiring about quality devices and appliances in stock!";
    window.open(`https://wa.me/2349061563862?text=${encodeURIComponent(textMessage)}`, '_blank');
  };

  // Unique product filters inside products
  const productFilters = [
    { key: 'all', label: 'All Catalog' },
    { key: 'phones', label: 'iPhones & Samsungs' },
    { key: 'audio', label: 'Audio & Music' },
    { key: 'wearables', label: 'Wearable Tech' },
    { key: 'appliances', label: 'Appliances / White' },
    { key: 'accessories', label: 'Original Plugs & Accessories' }
  ];

  const filteredProducts = activeCategoryFilter === 'all'
    ? products
    : products.filter(p => p.category === activeCategoryFilter);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden selection:bg-blue-500/10 selection:text-slate-900">
      
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenAdmin={() => setIsAdminOpen(true)}
        isAdminLoggedIn={isAdminLoggedIn}
        onLogoutAdmin={handleLogoutAdmin}
      />

      {/* Hero Section */}
      <Hero />

      {/* Famous Brands ticker */}
      <div className="py-8 bg-slate-50 border-y border-slate-150 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-5 italic">
            ⚡ PREMIUM BRANDS AVAILABLE & SWAPPABLE AT JMIRTH
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16 opacity-90">
            {FAMOUS_BRANDS.map((b) => (
              <div
                key={b.name}
                className="flex items-center space-x-2 text-slate-600 font-bold hover:text-blue-600 transition-colors duration-200 select-none pb-1"
              >
                <span className="text-lg">{b.logo}</span>
                <span className="font-sans text-xs uppercase tracking-wide">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURED GADGETS SHOWROOM */}
      <section id="products" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Products Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 italic font-sans_bold">⭐️ JMirth Showroom</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase">
                Featured Brand New & <br />
                <span className="text-blue-600">Swap Ready Stocks</span>
              </h2>
              <p className="text-slate-500 text-sm max-w-xl leading-relaxed font-sans">
                Explore premium electronics and genuine devices. We do not engage in fake stock checkers or artificial counters — just trusted Lagostian inventory.
              </p>
            </div>

            {/* Admin Add Shortcut if active */}
            {isAdminLoggedIn && (
              <button
                id="admin-add-prod-shortcut"
                onClick={() => setIsAdminOpen(true)}
                className="p-3.5 px-5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shrink-0 shadow-sm"
              >
                <span>Add Product</span>
              </button>
            )}
          </div>

          {/* Catalog Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
            {productFilters.map((flt) => (
              <button
                key={flt.key}
                onClick={() => setActiveCategoryFilter(flt.key)}
                className={`py-2.5 px-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all whitespace-nowrap border cursor-pointer ${
                  activeCategoryFilter === flt.key
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-350 hover:bg-slate-100'
                }`}
              >
                {flt.label}
              </button>
            ))}
          </div>

          {/* Products Grid Wrapper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectProduct={(p) => setSelectedProduct(p)}
                />
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center rounded-3xl bg-slate-50 border border-slate-250 max-w-sm mx-auto">
              <span className="text-sm text-slate-500 italic block font-sans">No items matched the specific filters right now.</span>
              <button
                onClick={() => setActiveCategoryFilter('all')}
                className="mt-4 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors cursor-pointer active:scale-95 shadow-sm shadow-blue-500/10"
              >
                Show All Items
              </button>
            </div>
          )}

        </div>
      </section>

      {/* SERVICES SUITE */}
      <Services />

      {/* SWAPPING & CALCULATOR ESTIMATOR PANEL */}
      <SwapCalculator />

      {/* ABOUT & VALUES */}
      <About />

      {/* VISUAL SHOWROOM GALLERY */}
      <GallerySection items={gallery} />

      {/* CONTACT ZONE & FORM */}
      <ContactSection />

      {/* FOOTER AREA */}
      <footer className="bg-slate-900 border-t border-slate-850 py-16 relative z-10 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-12 mb-10 pb-10 border-b border-slate-800 text-left">
            
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-xs">
                  JM
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-tight text-sm">JMirth Gadget Haven</h4>
                  <p className="text-[10px] text-slate-500 uppercase font-mono font-bold">Nigeria No. 1 Tested Haven</p>
                </div>
              </div>
              <p className="max-w-sm leading-relaxed text-slate-400 font-sans text-xs">
                Premium electronics, phone trading, and appliance vendor base operating in Lagos, Nigeria. We specialize in genuine laptops, smart devices, audio accessories, and physical-grading swaps.
              </p>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h5 className="text-white font-bold uppercase tracking-wider text-[10px] font-sans">Quick Navigation</h5>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <a href="#products" className="hover:text-blue-400 transition-all font-sans font-medium">Showroom</a>
                <a href="#services" className="hover:text-blue-400 transition-all font-sans font-medium">Our Services</a>
                <a href="#swap" className="hover:text-blue-400 transition-all font-sans font-medium">Calculator</a>
                <a href="#about" className="hover:text-blue-400 transition-all font-sans font-medium">About Store</a>
                <a href="#gallery" className="hover:text-blue-400 transition-all font-sans font-medium">Our Gallery</a>
                <a href="#contact" className="hover:text-blue-400 transition-all font-sans font-medium">Contact Hub</a>
              </div>
            </div>

            <div className="md:col-span-4 space-y-3">
              <h5 className="text-white font-bold uppercase tracking-wider text-[10px] font-sans font-sans">Lagos Store Office & Support</h5>
              <div className="space-y-2">
                <span className="block text-slate-350">📍 Lagos State, Nigeria</span>
                <span className="block font-bold text-white">💬 Tel/WhatsApp Support: +234 906 156 3862</span>
                <span className="block text-[10px] text-slate-500 font-sans leading-relaxed">
                  JMirth is structured with absolute quality checks and real-time physical grading processes. WhatsApp messages are reviewed instantly.
                </span>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[11px] text-slate-500 font-sans">
                &copy; {new Date().getFullYear()} JMirth Gadget Haven. All Rights Reserved. Fully Certified Premium Electronics Retailer.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-[10px] text-slate-550">
              <span className="font-sans">Operational Status:</span>
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-green-400 font-mono tracking-wide font-bold">Assistants Online</span>
            </div>
          </div>

        </div>
      </footer>

      {/* FLOAT PULSING WHATSAPP INTERACTION BUTTON */}
      <button
        id="floating-wa-bubble"
        onClick={handleFloatingWAClick}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#128c7e] text-white hover:bg-[#25d366] transition-all hover:scale-105 shadow-[0_4px_20px_rgba(37,211,102,0.4)] animate-pulse group cursor-pointer"
        title="Direct WhatsApp Helpline"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-[#128c7e] group-hover:text-[#25d366] transition-colors" />
          <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] font-extrabold text-white border border-white">
            1
          </span>
        </div>
      </button>

      {/* BOTTOM SCROLL-TOP BAR */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-white border border-slate-200 text-slate-705 hover:text-blue-600 transition-all shadow-md text-xs font-bold cursor-pointer"
          title="Scroll back to top"
        >
          ▲ Top
        </button>
      )}

      {/* DETAILS SPECIFICATION POPUP MODAL */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* SECURE ADMIN CONTROL PANEL PORTAL */}
      {isAdminOpen && (
        <AdminPanel
          products={products}
          gallery={gallery}
          onAddProduct={handleAddProduct}
          onUpdateProduct={handleUpdateProduct}
          onDeleteProduct={handleDeleteProduct}
          onAddGallery={handleAddGalleryItem}
          onDeleteGallery={handleDeleteGalleryItem}
          onClose={() => setIsAdminOpen(false)}
          isAdminLoggedIn={isAdminLoggedIn}
          onLoginSuccess={() => setIsAdminLoggedIn(true)}
        />
      )}

    </div>
  );
}
