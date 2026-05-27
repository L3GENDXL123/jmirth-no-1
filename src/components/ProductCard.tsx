import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MessageCircle, Info, RefreshCw } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  key?: string;
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export default function ProductCard({ product, onSelectProduct }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const imagesList = product.images && product.images.length > 0 ? product.images : [product.image];
  const currentImage = imagesList[activeImgIndex] || product.image;

  // Motion Values for dynamically calculated tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springy outputs for tilt rotation along X and Y axes
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { damping: 20, stiffness: 150 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { damping: 20, stiffness: 150 });
  
  // Springy scale factor for standard feedback
  const cardScale = useSpring(1, { damping: 15, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalize coordinates to ranges from -0.5 to 0.5
    const computedX = (e.clientX - rect.left) / width - 0.5;
    const computedY = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(computedX);
    mouseY.set(computedY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    cardScale.set(1.03); // Sleek subtle scaling
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    cardScale.set(1);
    mouseX.set(0);
    mouseY.set(0);
  };

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
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelectProduct(product)}
      style={{
        rotateX,
        rotateY,
        scale: cardScale,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      className="bg-white text-left rounded-3xl overflow-hidden cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,90,240,0.12)] border border-slate-205/80 group relative flex flex-col h-full transform-gpu"
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
          src={currentImage}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
        />
        {/* Decorative glass glow gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

        {/* Smart Multiple Images Thumbnail Selectors directly on the card! */}
        {imagesList.length > 1 && (
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1 px-1 py-1 bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-xl shadow-lg cursor-default"
          >
            {imagesList.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImgIndex(idx);
                }}
                className={`relative w-6 h-6 rounded-md overflow-hidden border transition-all duration-155 cursor-pointer ${
                  activeImgIndex === idx
                    ? 'border-blue-600 ring-2 ring-blue-500/15 scale-105'
                    : 'border-slate-200 hover:border-slate-350 opacity-80 hover:opacity-100'
                }`}
                title={product.id === 'p3' ? ['All Catalog', 'Fan', 'Iron', 'AC'][idx] : `Part #${idx + 1}`}
              >
                <img
                  src={img}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </button>
            ))}
          </div>
        )}
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
