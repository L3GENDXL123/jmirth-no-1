import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Info, RefreshCw } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  key?: string;
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export default function ProductCard({ product, onSelectProduct }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleWAInquiry = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening details modal if clicking the direct CTA button
    const message = `Hi JMirth Gadget Haven, I am interested in purchasing/inquiring about: ${product.name} (Category: ${product.category.toUpperCase()}). Please let me know its real-time availability and stock price detail.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/2349061563862?text=${encoded}`, '_blank');
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelectProduct(product)}
      className="bg-white text-left rounded-3xl overflow-hidden cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,90,240,0.08)] border border-slate-205/80 group relative flex flex-col h-full hover:-translate-y-1.5 transition-all duration-300 ease-out"
    >
      {/* Swap Eligibility Badge */}
      {product.isSwapEligible && (
        <div className="absolute top-4 left-4 z-10 flex items-center space-x-1.5 px-3 py-1 bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-full text-[9px] font-black tracking-widest text-[#005af0] uppercase shadow-sm">
          <RefreshCw className="w-3 h-3 text-blue-600 animate-spin-slow" />
          <span>SWAP READY</span>
        </div>
      )}

      {/* Product Image Stage */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 border-b border-slate-100">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
        />
        {/* Decorative glass glow gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Main Metadata */}
      <div className="p-5 flex flex-col flex-grow space-y-4 relative">
        {/* Hover corner light accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

        <div className="space-y-1.5 relative z-10">
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#005af0] bg-blue-50/70 border border-blue-100/50 rounded-md px-1.5 py-0.5 w-fit">
            {product.category}
          </div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight line-clamp-1 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 h-8 leading-relaxed font-sans">
            {product.description}
          </p>
        </div>

        {/* Essential Bullet Specs */}
        <div className="space-y-1.5 flex-grow relative z-10">
          {product.features.slice(0, 2).map((feat, i) => (
            <div key={i} className="flex items-center text-xs text-slate-600 space-x-2 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
              <span className="line-clamp-1 text-slate-600">{feat}</span>
            </div>
          ))}
        </div>

        {/* Pricing Segment */}
        <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-1 relative z-10">
          <div className="min-w-0">
            <span className="text-[9px] block text-slate-400 uppercase tracking-widest font-bold">Price Option</span>
            <span className="text-xs font-bold text-[#005af0] tracking-tight truncate block group-hover:animate-pulse">
              Ask about this product
            </span>
          </div>
          
          <button
            onClick={() => onSelectProduct(product)}
            className="py-1.5 px-3 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <Info className="w-3.5 h-3.5 text-slate-550" />
            <span>Specs</span>
          </button>
        </div>

        {/* WhatsApp Inquiry CTA */}
        <button
          id={`product-wa-btn-${product.id}`}
          onClick={handleWAInquiry}
          className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all text-xs font-bold text-center uppercase tracking-widest duration-200 transform active:scale-95 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-white text-blue-600 shrink-0" />
          <span>Inquire Spec sheet</span>
        </button>
      </div>
    </motion.div>
  );
}
