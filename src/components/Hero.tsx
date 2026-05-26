import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowUpRight, ShieldCheck, RefreshCw, Layers } from 'lucide-react';
import heroBannerImg from '../assets/images/hero_banner_1779822364261.png';

export default function Hero() {
  const handleWAInquiry = (purpose: string) => {
    let msg = "Hello JMirth Gadget Haven, I am interested in seeing your catalog.";
    if (purpose === 'learn') {
      msg = "Hello JMirth Gadget Haven, I want to learn more about your swap rates and active showroom stocks.";
    }
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/2349061563862?text=${encoded}`, '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-tr from-blue-50/70 via-indigo-50/30 via-white to-sky-50/40"
    >
      {/* Dynamic light gradient blobs (premium Apple/Samsung lighting) */}
      <div className="absolute top-10 left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-200/40 to-indigo-200/30 blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-200/30 to-blue-200/40 blur-[130px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full bg-purple-100/20 blur-[90px] pointer-events-none"></div>

      {/* Modern technical premium mesh grid accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f1_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-[0.35]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-8">
            
            {/* Soft Premium trust badge with glow */}
            <div className="mb-1">
              <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-gradient-to-r from-blue-50 to-[#f4f8ff] border border-blue-200/60 text-[#005af0] text-xs font-bold tracking-wider rounded-full uppercase shadow-[0_2px_10px_rgba(37,99,235,0.05)]">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse ring-4 ring-blue-500/20"></span>
                <span>Nigeria’s Premier Verified Tech Showroom</span>
              </span>
            </div>

            {/* Main Branding Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-slate-900 uppercase text-left font-sans">
                WE BUY.<br />
                WE SELL.<br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">WE TRADE.</span>
              </h1>
            </div>

            {/* Bio/Subtitle */}
            <p className="text-sm sm:text-base text-slate-650 max-w-xl leading-relaxed font-sans">
              Experience the Lagos Gadget Hub benchmarked for performance. Genuine devices, transparent device grading, same-day trade-in values, and responsive support.
            </p>

            {/* WhatsApp Focused Action Buttons - Styled beautifully */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                id="hero-order-now-btn"
                onClick={() => handleWAInquiry('order')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-widest rounded-2xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-[0_8px_30px_rgba(0,90,240,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center flex items-center justify-center space-x-2.5 duration-200 cursor-pointer active:scale-95 shadow-lg shadow-blue-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-white text-blue-600 mr-1" />
                <span>Order via WhatsApp</span>
              </button>

              <a
                href="#products"
                className="px-8 py-4 bg-white/80 backdrop-blur-md border border-slate-205/80 text-slate-800 font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-slate-50 hover:border-blue-300 hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center flex items-center justify-center space-x-2 duration-200 cursor-pointer"
              >
                <span>View Live Showroom</span>
                <ArrowUpRight className="w-4 h-4 text-[#005af0]" />
              </a>
            </div>

            {/* Quick trust proofs with updated contrast and margins */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-150 max-w-md">
              <div className="text-left">
                <span className="block text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-sans">100%</span>
                <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider font-sans">Genuine Items</span>
              </div>
              <div className="text-left border-l border-slate-150 pl-4">
                <span className="block text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-sans">Instant</span>
                <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider font-sans">Device Swap</span>
              </div>
              <div className="text-left border-l border-slate-150 pl-4">
                <span className="block text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-sans">Fast</span>
                <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider font-sans">Lagos Delivery</span>
              </div>
            </div>

          </div>

          {/* Hero Right Visuals - layered graphics */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Soft decorative background glow ring */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-60 blur-2xl pointer-events-none"></div>

              {/* Core Image Container with exquisite double status border */}
              <div className="relative rounded-3xl p-2.5 bg-white/90 backdrop-blur-md border border-slate-150 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,90,240,0.1)] transition-shadow duration-500">
                <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative rounded-2xl overflow-hidden bg-slate-50">
                  <img
                    src={heroBannerImg}
                    alt="JMirth Gadget Haven premium smartphones and household appliance collections"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none"
                  />
                  {/* Glass shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/5 to-transparent"></div>
                </div>
              </div>

              {/* Satisfaction Guaranteed Seal - updated visual depth */}
              <div className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-26 sm:h-26 rounded-full bg-white border border-slate-200/80 flex flex-col items-center justify-center p-2 text-center shadow-[0_10px_30px_rgba(0,90,240,0.08)] animate-bounce-slow">
                <div className="p-1 rounded-full bg-blue-50"><ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" /></div>
                <span className="text-[9px] font-black text-slate-800 mt-1 uppercase">Original</span>
                <span className="text-[7px] text-slate-400 font-bold uppercase font-sans tracking-tight">Verified Stock</span>
              </div>

              {/* Floating Instant Swaps Card - premium design */}
              <div className="absolute -bottom-5 -left-4 bg-white/95 backdrop-blur-md border border-slate-150 p-3.5 rounded-2xl flex items-center space-x-3 shadow-[0_10px_25px_rgba(0,0,0,0.04)] max-w-[210px]">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-sm shadow-blue-500/25">
                  <RefreshCw className="w-4 h-4 text-white animate-spin-slow" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-blue-600 font-black uppercase tracking-wider">Device Swapping</span>
                  <span className="text-[9px] text-slate-500 leading-none">Instant grading scale</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
