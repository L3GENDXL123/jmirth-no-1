import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, HeartHandshake, ShieldCheck, CheckCircle2, RefreshCw } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailsModal({ product, onClose }: ProductDetailsModalProps) {
  if (!product) return null;

  const handleWAInquiry = () => {
    const message = `Hi JMirth Gadget Haven, I am interested in inquiring about the details, official availability, and premium pricing/swap value of:

Product: ${product.name}
Category: ${product.category.toUpperCase()}

Please let me know if you support swaps and what the trade-in processes are. Thank you!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/2349061563862?text=${encoded}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        {/* Modal Stage container */}
        <motion.div
          key="modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col z-10 text-left"
        >
          {/* Close button cross */}
          <button
            id="close-details-modal"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-550 hover:text-slate-850 transition-all border border-slate-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Main Content (Scrollable Area) */}
          <div className="flex-grow overflow-y-auto p-6 sm:p-8 space-y-8 no-scrollbar">
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              
              {/* Left Side Column: Image & Badges */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-205">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none"
                  />
                  {product.isSwapEligible && (
                    <div className="absolute bottom-3 left-3 bg-blue-600 border border-blue-500 text-[10px] text-white px-3 py-1 rounded-full font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-md">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin-slow text-white shrink-0" />
                      <span>Swap Ready</span>
                    </div>
                  )}
                </div>

                {/* Trust assurances */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
                  <div className="flex items-center space-x-2.5 text-xs text-slate-705 font-sans font-semibold">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Tested & 100% Original Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs text-slate-705 font-sans font-semibold">
                    <HeartHandshake className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Clean Swaps & Budget-Friendly Valuations</span>
                  </div>
                </div>
              </div>

              {/* Right Side Column: Meta Description & Tech Specs */}
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded inline-block mb-3 border border-blue-100">
                    ⭐️ {product.category.toUpperCase()}
                  </span>
                  
                  <h2 className="text-xl sm:text-2xl font-bold uppercase text-slate-900 tracking-tight leading-tight">
                    {product.name}
                  </h2>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] text-slate-400 uppercase font-sans tracking-widest block font-bold">Pricing Status</span>
                  <div className="text-xl font-black text-blue-600 font-sans uppercase animate-pulse">
                    Ask about this product
                  </div>
                  <span className="text-[10px] text-slate-400 block h-fit mt-0.5 italic leading-relaxed font-sans">
                    *Actual prices fluctuate due to storage configuration, market rates, and device swap properties.
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[9px] text-slate-400 uppercase font-sans tracking-widest block font-bold">Highlights & Bio</span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {product.description}
                  </p>
                </div>

                {/* Key Product Highlights */}
                <div className="space-y-2">
                  <span className="text-[9px] text-slate-400 uppercase font-sans tracking-widest block font-bold font-sans">Top Bullet Highlights</span>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-1.5 text-xs text-slate-650 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-605 shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Specifications Details Table */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-sans">
                  Technical Specifications Overview
                </h4>
                <div className="grid gap-2 text-xs sm:grid-cols-2">
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <span className="text-slate-500 font-sans font-semibold">{key}</span>
                      <span className="text-slate-900 font-sans font-bold text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Inquire via WhatsApp Banner Section */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-sm text-slate-900 font-bold block">Ready to proceed or want to ask details?</span>
                <span className="text-xs text-slate-500 block font-sans">We offer immediate consultancy and quick validations on WhatsApp.</span>
              </div>

              <button
                id="modal-wa-inquire-btn"
                onClick={handleWAInquiry}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all duration-150 cursor-pointer active:scale-95 shadow-sm shadow-blue-500/10"
              >
                <MessageCircle className="w-4 h-4 fill-white text-blue-600 mr-1" />
                <span>Ask on WhatsApp Now</span>
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
