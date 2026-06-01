import React, { useState, useEffect } from 'react';
import { INITIAL_PRODUCTS, FAMOUS_BRANDS } from './data';
import { Product } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetailsModal from './components/ProductDetailsModal';
import About from './components/About';
import { MessageCircle, Sparkles, Instagram } from 'lucide-react';
import { TiktokIcon } from './components/icons';
import { AnimatePresence } from 'motion/react';
import heroBannerImg from './assets/images/hero_banner_1779826991927.png';

export default function App() {
  // Clear any existing cached stale products to ensure only the three phones are displayed
  useEffect(() => {
    localStorage.removeItem('jmirth_products');
    localStorage.removeItem('jmirth_gallery');
  }, []);

  // Use the clean static array directly for the catalog
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);

  // UI state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

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
    { key: 'appliances', label: 'Appliances & Power' }
  ];

  const filteredProducts = activeCategoryFilter === 'all'
    ? products
    : products.filter(p => p.category === activeCategoryFilter);

  return (
    <div className="relative min-h-screen bg-slate-50/40 font-sans text-slate-800 overflow-x-hidden selection:bg-blue-500/10 selection:text-slate-900">
      
      {/* Ambient Blurred Background of the brand's verified poster */}
      <div 
        className="fixed inset-0 w-full h-full -z-10 bg-cover bg-center pointer-events-none filter blur-[100px] opacity-[0.14] saturate-150 transform scale-110"
        style={{ backgroundImage: `url(${heroBannerImg})` }}
      />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Famous Brands ticker */}
      <div className="py-8 bg-white/60 backdrop-blur-md border-y border-slate-150 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-5 italic">
            PREMIUM BRANDS AVAILABLE & SWAPPABLE AT JMIRTH
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16 opacity-90">
            {FAMOUS_BRANDS.map((b) => (
              <div
                key={b.name}
                className="flex items-center space-x-2 text-slate-600 font-bold hover:text-blue-600 transition-colors duration-200 select-none pb-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                <span className="font-sans text-xs uppercase tracking-wide">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURED GADGETS SHOWROOM */}
      <section id="products" className="py-24 relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Products Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-50/80 border border-blue-200 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 italic font-sans_bold">JMirth Showroom</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase">
                Featured Brand New & <br />
                <span className="text-blue-600">Swap Ready Stocks</span>
              </h2>
              <p className="text-slate-500 text-sm max-w-xl leading-relaxed font-sans">
                Explore premium electronics and genuine devices. We do not engage in fake stock checkers or artificial counters — just trusted genuine inventory.
              </p>
            </div>
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
                    : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-350 hover:bg-slate-100'
                }`}
              >
                {flt.label}
              </button>
            ))}
          </div>

          {/* Products Grid Wrapper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-5xl mx-auto">
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
            <div className="py-20 text-center rounded-3xl bg-white/85 backdrop-blur-sm border border-slate-250 max-w-sm mx-auto">
              <span className="text-sm text-slate-500 italic block font-sans">No items matched the specific filters right now.</span>
              <button
                onClick={() => setActiveCategoryFilter('all')}
                className="mt-4 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors cursor-pointer active:scale-95 shadow-sm shadow-blue-500/10"
              >
                Show All Items
              </button>
            </div>
          )}

          {/* Premium "Contact Us to Find Your Gadget" Call To Action Banner */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-lg hover:shadow-xl transition-all border border-blue-400/20">
            <div className="absolute top-[-50%] left-[-10%] w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
            <div className="text-left relative z-10 space-y-2 max-w-xl">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight font-sans">Can't find your desired gadget?</h3>
              <p className="text-xs sm:text-sm text-blue-50/90 leading-relaxed font-sans font-medium">
                We handle specialty orders! Tell our customer assistants the exact specifications, color, and grade of the phone, smartwatch, accessory, or appliance you need and we'll source it directly for you.
              </p>
            </div>
            <a
              href={`https://wa.me/2349061563862?text=${encodeURIComponent("Hello! I couldn't find my desired gadget in your catalog. Can you help me find it?")}`}
              target="_blank"
              rel="noreferrer"
              className="relative z-10 shrink-0 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-blue-700 font-extrabold text-xs sm:text-sm uppercase tracking-widest rounded-2xl hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-md flex items-center space-x-2 cursor-pointer"
            >
              <span>Contact us to find your gadget</span>
              <MessageCircle className="w-4 h-4 fill-blue-700 text-white" />
            </a>
          </div>

        </div>
      </section>

      {/* ABOUT & VALUES */}
      <About />

      {/* FOOTER AREA */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-16 relative z-10 text-xs font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900 text-left">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white font-black text-xs">
                  JM
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-tight text-sm font-sans">JMirth Gadget Haven</h4>
                  <p className="text-[10px] text-slate-500 uppercase font-mono tracking-wider font-bold">No.1 Best Quality Haven</p>
                </div>
              </div>
              <p className="max-w-sm text-slate-400 leading-relaxed">
                Elite online premium smartphone and accessory vendor base. We specialize in genuine smart devices, phone trade-ins, and high-quality gadget upgrades.
              </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-3 space-y-4">
              <h5 className="text-white font-semibold uppercase tracking-wider text-[10px]">Explore Shop</h5>
              <div className="flex flex-col space-y-2.5">
                <a href="#home" className="hover:text-blue-400 transition-colors font-sans">Home</a>
                <a href="#about" className="hover:text-blue-400 transition-colors font-sans font-medium">About Us</a>
                <a 
                  href="https://www.instagram.com/j_mirth_gadget?igsh=MWhkZ2dzM3N6bjVraQ==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-1.5 hover:text-pink-400 transition-colors font-sans"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Visit our Instagram</span>
                </a>
                <a 
                  href="https://www.tiktok.com/@j.mirth.gadget?_r=1&_t=ZS-96jiQveV4Ce" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors font-sans"
                >
                  <TiktokIcon className="w-3.5 h-3.5" />
                  <span>Visit our TikTok</span>
                </a>
              </div>
            </div>

            {/* Column 3: Contact Details */}
            <div className="md:col-span-4 space-y-4">
              <h5 className="text-white font-semibold uppercase tracking-wider text-[10px]">Customer Support</h5>
              <div className="space-y-2">
                <span className="block font-bold text-white text-[13px] hover:text-blue-400 transition-colors">Tel/WhatsApp: +234 906 156 3862</span>
                <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                  JMirth is structured with absolute quality checks and swift client coordination. Simply message us directly on WhatsApp to coordinate your orders and swaps.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <p className="text-slate-500 text-[11px] font-sans">
              &copy; {new Date().getFullYear()} JMirth Gadget Haven. All Rights Reserved. Fully Certified Premium Online Retailer.
            </p>
            <p className="text-[10px] text-slate-600 font-medium">
              100% Satisfaction Guaranteed
            </p>
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

    </div>
  );
}
