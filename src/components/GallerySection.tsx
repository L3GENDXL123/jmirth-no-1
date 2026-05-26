import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Eye, X, MessageCircle } from 'lucide-react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  items: GalleryItem[];
}

export default function GallerySection({ items }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'phones' | 'appliances' | 'store' | 'swaps'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'phones', label: 'Phones & Gadgets' },
    { key: 'appliances', label: 'Home Appliances' },
    { key: 'swaps', label: 'Device Swaps' },
    { key: 'store', label: 'Store Front' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  const handleInquiry = (item: GalleryItem) => {
    setSelectedPhoto(null);
    const text = `Hello JMirth Gadget Haven, I am looking at this visual in your website gallery: "${item.title}" (${item.category.toUpperCase()}). Please let me know if you have this in stock and its price condition.`;
    window.open(`https://wa.me/2349061563862?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Gallery Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full">
            <Camera className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 italic">⭐️ Live Showrooms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase animate-fade-in">
            JMirth Visual <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-slate-505 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-sans">
            A genuine visual peek into our showroom collections, premium swap handovers, and in-store stock displays in Lagos.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as any)}
              className={`py-2 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-350 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery grid matrix */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedPhoto(item)}
                className="group relative cursor-pointer bg-slate-50 rounded-3xl overflow-hidden aspect-[4/3] border border-slate-100 hover:border-blue-500/40 transition-all shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 select-none"
                />

                {/* Cover visual gradient hover overlay with text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-5 text-left opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#93c5fd] px-2 py-0.5 rounded bg-black/40 border border-white/10 w-fit mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white tracking-tight line-clamp-1 group-hover:text-[#93c5fd] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 mt-1 opacity-0 group-hover:opacity-100 line-clamp-2 h-0 group-hover:h-8 transition-all duration-300 font-sans">
                    {item.description || 'Verified authentic stock visual at JMirth Haven.'}
                  </p>
                </div>

                {/* Inspect eye icon badge */}
                <div className="absolute top-4 right-4 p-2 bg-white/95 rounded-xl border border-slate-200 text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-blue-600" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="p-12 text-center rounded-3xl bg-slate-50 border border-slate-200 max-w-sm mx-auto mt-6">
            <span className="text-sm text-slate-500 italic block">No photos uploaded in this category yet.</span>
          </div>
        )}

      </div>

      {/* Full Photo Modal Viewer */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-2xl w-full bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl z-10 text-left flex flex-col"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors border border-slate-200 z-20 cursor-pointer"
              >
                <X className="w-5 h-5 font-bold" />
              </button>

              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-4 text-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                    {selectedPhoto.category}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-sans">
                    Verified Store Stock Photo
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">{selectedPhoto.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{selectedPhoto.description || 'Genuine digital stock captured on-location in our Lagos retail hub.'}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-550 leading-relaxed font-sans max-w-sm">Interested in this showcased layout or want to swap with us?</span>
                  
                  <button
                    onClick={() => handleInquiry(selectedPhoto)}
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all text-xs font-bold uppercase tracking-widest duration-150 cursor-pointer active:scale-95 shadow-sm shadow-blue-500/10"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-blue-600" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
