import React from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { INITIAL_SERVICES } from '../data';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-[#f4f7ff]/70 via-[#f9faff] to-[#f4f7ff]/50 border-y border-slate-205/60 relative overflow-hidden">
      {/* Background organic light decorative flare */}
      <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50/80 border border-blue-200/50 px-3 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#005af0] italic">⭐️ Premium Operations</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase">
            What We Offer At <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">JMirth Haven</span>
          </h2>
          
          <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed font-sans">
            Professional consumer diagnostics, premium device acquisitions, transparent swap evaluations, and verified product warranties inside our Lagos hub.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {INITIAL_SERVICES.map((item, idx) => {
            const IconComponent = (LucideIcons as any)[item.iconName] || LucideIcons.HelpCircle;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white text-left p-6 sm:p-8 rounded-3xl border border-slate-205/80 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_15px_45px_rgba(0,90,240,0.07)] hover:-translate-y-1.5 transition-all duration-300 ease-out text-slate-800 relative group"
              >
                {/* Thin side line background on hover */}
                <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-gradient-to-b from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="space-y-4 relative z-10">
                  {/* Premium Frame & icon box */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/10 border border-blue-200/40 flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-500/20">
                    <IconComponent className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" />
                  </div>

                  <div>
                    <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase block">
                      {item.tagline}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight mt-1 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Direct Action Link with custom soft button */}
                <div className="pt-4 mt-6 border-t border-slate-100 relative z-10">
                  <a
                    href={`https://wa.me/2349061563862?text=${encodeURIComponent(`Hello, I'm interested in learning about your service: ${item.title}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#005af0] uppercase tracking-widest hover:text-blue-700 transition-colors"
                  >
                    <span>Request Service Details</span>
                    <LucideIcons.ArrowUpRight className="w-3.5 h-3.5 text-[#005af0]" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
