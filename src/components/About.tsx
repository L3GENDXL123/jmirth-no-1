import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, HeartHandshake, Zap, Sparkles, Smile } from 'lucide-react';

export default function About() {
  const whyChooseUsList = [
    {
      title: 'Tested Quality Guarantee',
      desc: 'No lemons. Each device undergoes thorough hardware and software testing before entering our catalog.',
      icon: ShieldCheck,
    },
    {
      title: 'Transparent Swaps',
      desc: 'Transparent condition grading and easy balances make swapping a smooth, straightforward upgrade path.',
      icon: HeartHandshake,
    },
    {
      title: 'Affordable Pricing',
      desc: 'Competitive Nigerian market pricing suited to your real constraints with zero hidden vendor processing fees.',
      icon: Zap,
    },
    {
      title: 'Active Tech Support',
      desc: 'Direct, responsive communication via WhatsApp with real humans ready to assist in real time.',
      icon: Smile,
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: About JMirth Story */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 italic">⭐️ Who We Are</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase">
                Reliable Gadget Partners <br />
                <span className="text-blue-600">You Can Fully Trust</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                At <span className="text-slate-900 font-bold">JMirth Gadget Haven</span>, we recognize that acquiring a premium smartphone, audio gear, or home appliance is a significant financial investment. That is why we operate with absolute transparency, quality assurance, and robust, reliable client care.
              </p>
              <p>
                From our physical hub in Lagos, Nigeria, we specialize in sourcing genuine electronics at standard, budget-conscious price segments. Whether you are looking to purchase direct, trade in your current model, or arrange a swift device swap, we handle your request in real time.
              </p>
              <p>
                We do not deal in clones or low-tier copies. Every brick-and-mortar deal and digital transaction is backed by our direct customer satisfaction policy.
              </p>
            </div>

            {/* Quick badges under About text */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Award className="w-6 h-6 text-blue-600 shrink-0" />
                <div className="text-left">
                   <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">100% Authentic</h4>
                   <p className="text-[11px] text-slate-500 mt-1 leading-normal font-sans">Original brand warranties intact on brand-new devices.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
                <div className="text-left">
                   <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Safe Swaps</h4>
                   <p className="text-[11px] text-slate-500 mt-1 leading-normal font-sans font-sans">Graded thoroughly in real time for fair estimations.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Why Choose Us Checklist */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 italic">⭐️ Why Choose Us</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase">
                Core Commitments We Keep
              </h3>
            </div>

            <div className="grid gap-4">
              {whyChooseUsList.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-sm transition-all flex items-start space-x-4 card-shadow-hover"
                  >
                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-105 text-blue-600 shrink-0">
                      <IconComponent className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed font-sans">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
