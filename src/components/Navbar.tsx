import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Instagram } from 'lucide-react';
import { TiktokIcon } from './icons';
import { motion, AnimatePresence } from 'motion/react';
import heroLogoImg from '../assets/images/hero_banner_1779826991927.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-3' 
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-100/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-3 group text-left">
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-slate-50 border border-slate-150 shadow-sm transition-all duration-300">
                <img src={heroLogoImg} alt="JMirth logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-900 flex items-center gap-1.5 font-sans">
                  JMirth
                  <span className="text-blue-600 font-bold text-[10px] tracking-wider uppercase bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    GADGETS
                  </span>
                </h1>
                <p className="text-[10px] text-slate-500 font-medium font-sans">No.1 Best Quality Haven</p>
              </div>
            </a>

            {/* Desktop Navigation Link Deck */}
            <div className="hidden lg:flex items-center space-x-7">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors duration-200 relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA & Admin Trigger */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://www.instagram.com/j_mirth_gadget?igsh=MWhkZ2dzM3N6bjVraQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-150 text-slate-500 hover:text-pink-650 hover:border-pink-200 hover:bg-pink-50/50 transition-all duration-200"
                title="Instagram Store"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@j.mirth.gadget?_r=1&_t=ZS-96jiQveV4Ce"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-150 text-slate-500 hover:text-cyan-650 hover:border-cyan-200 hover:bg-cyan-50/50 transition-all duration-200"
                title="TikTok Shop"
              >
                <TiktokIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/2349061563862"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-700 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white text-blue-600 shrink-0" />
                <span>WhatsApp Shop</span>
              </a>
            </div>

            {/* Mobile Menu Action Trigger */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Slide Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-b border-slate-100 bg-white shadow-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2 px-4">
                  <a
                    href="https://wa.me/2349061563862"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-xl bg-blue-600 text-white text-xs font-bold uppercase tracking-wider text-center cursor-pointer hover:bg-blue-700"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-blue-600" />
                    <span>WhatsApp Live Chat</span>
                  </a>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href="https://www.instagram.com/j_mirth_gadget?igsh=MWhkZ2dzM3N6bjVraQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider text-center hover:text-pink-650 hover:bg-pink-50"
                    >
                      <Instagram className="w-3.5 h-3.5 text-pink-500" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://www.tiktok.com/@j.mirth.gadget?_r=1&_t=ZS-96jiQveV4Ce"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider text-center hover:text-cyan-650 hover:bg-cyan-50"
                    >
                      <TiktokIcon className="w-3.5 h-3.5 text-cyan-500" />
                      <span>TikTok</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
