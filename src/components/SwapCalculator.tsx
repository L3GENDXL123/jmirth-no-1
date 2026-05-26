import React, { useState } from 'react';
import { RefreshCw, Smartphone, ChevronRight, MessageCircle, Info, HeartHandshake, Check } from 'lucide-react';

export default function SwapCalculator() {
  const [currentBrand, setCurrentBrand] = useState('Apple');
  const [currentModel, setCurrentModel] = useState('');
  const [condition, setCondition] = useState('Excellent');
  const [targetProduct, setTargetProduct] = useState('iPhone 15 Pro Max');
  const [customComment, setCustomComment] = useState('');
  const [estimatedValue, setEstimatedValue] = useState<string | null>(null);

  const conditionOptions = [
    { label: 'Pristine', desc: 'Flawless body, zero scratches, high battery health (>90%)', multiplier: 1.0 },
    { label: 'Excellent', desc: 'Minor hairline wear, perfect working status, clean cameras', multiplier: 0.85 },
    { label: 'Good', desc: 'Scratches present, full functionality, no screen chips/dead pixels', multiplier: 0.72 },
    { label: 'Cracked, Back/Screen', desc: 'Cracked glass front or back, but touchscreen and display functions perfectly', multiplier: 0.45 }
  ];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentModel || !targetProduct) return;

    // Simulate realistic trade-in calculator values
    let baseValue = 180000; // default base value
    if (currentModel.toLowerCase().includes('14 pro')) baseValue = 750000;
    else if (currentModel.toLowerCase().includes('13 pro')) baseValue = 580000;
    else if (currentModel.toLowerCase().includes('12 pro')) baseValue = 420000;
    else if (currentModel.toLowerCase().includes('11 pro')) baseValue = 300000;
    else if (currentModel.toLowerCase().includes('s23')) baseValue = 680000;
    else if (currentModel.toLowerCase().includes('s22')) baseValue = 480000;
    else if (currentModel.toLowerCase().includes('s21')) baseValue = 320000;

    const conditionData = conditionOptions.find(o => o.label === condition) || conditionOptions[1];
    const finalEstimate = Math.round(baseValue * conditionData.multiplier);
    
    // Format to Nigerian Naira currency
    const formatted = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(finalEstimate);

    setEstimatedValue(formatted);
  };

  const handleSendToWhatsApp = () => {
    const textMessage = `Hello JMirth Gadget Haven, I am interested in swapping my pre-owned device!
    
Trade-In Option Spec Sheet:
- Current Device: ${currentBrand} ${currentModel}
- Device Condition: ${condition}
- Target Device Wanted: ${targetProduct}
- Estimated Trade-In Credit: ${estimatedValue || 'To be calculated'}

${customComment ? `Additional Remarks: "${customComment}"` : ''}

Please let me know the estimated balance cost and how we can proceed with standard physical grading at your Lagos store. Cheers!`;
    const encoded = encodeURIComponent(textMessage);
    window.open(`https://wa.me/2349061563862?text=${encoded}`, '_blank');
  };

  return (
    <section id="swap" className="py-24 bg-gradient-to-b from-white via-[#f4f7ff]/40 to-white relative overflow-hidden">
      {/* Absolute blurry gradient circles for tech-brand look */}
      <div className="absolute top-1/4 left-5 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-5 w-96 h-96 rounded-full bg-indigo-100/30 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Caption */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/50 px-3 py-1.5 rounded-full">
            <RefreshCw className="w-3.5 h-3.5 text-blue-650 animate-spin-slow" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#005af0] italic">⭐️ Premium Trade-ins</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase">
            Device Trade-In & Swap <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Estimator</span>
          </h2>
          
          <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed font-sans">
            Upgrade seamlessly. Enter pre-owned phone specifications below, choose the desired model, and receive a calculated trade-in credit outline instantly.
          </p>
        </div>

        {/* Swap Form Card */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel form fields */}
          <div className="md:col-span-7 bg-white/80 backdrop-blur-md border border-slate-205/80 rounded-3xl p-6 sm:p-8 text-left flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.02)]">
            <form onSubmit={handleCalculate} className="space-y-5">
              
              {/* Brand Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-sans">Current Device Brand</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Apple', 'Samsung', 'Others'].map((brand) => (
                    <button
                      key={brand}
                      type="button"
                      onClick={() => setCurrentBrand(brand)}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold tracking-wider transition-all cursor-pointer ${
                        currentBrand === brand
                          ? 'bg-[#005af0] border-[#005af0] text-white shadow-sm shadow-blue-500/10'
                          : 'bg-slate-50/50 border-slate-200 text-slate-600 hover:border-slate-350 hover:bg-slate-50'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Model input */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-sans">Current Model & Storage</label>
                <div className="relative">
                  <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={currentModel}
                    onChange={(e) => setCurrentModel(e.target.value)}
                    placeholder="e.g. iPhone 13 Pro (128GB)"
                    className="w-full bg-slate-50/50 border border-slate-205 hover:border-slate-350 focus:border-[#005af0] rounded-xl py-3 pl-10 pr-4 text-xs text-slate-800 placeholder-slate-400 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Device Condition Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-sans">Device Graded Condition</label>
                <div className="space-y-2">
                  {conditionOptions.map((opt) => (
                    <div
                      key={opt.label}
                      onClick={() => setCondition(opt.label)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start space-x-3 ${
                        condition === opt.label
                          ? 'bg-blue-50/60 border-blue-200 text-slate-900'
                          : 'bg-white border-slate-205 text-slate-650 hover:border-slate-350'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        condition === opt.label ? 'border-[#005af0] bg-[#005af0]' : 'border-slate-300 bg-white'
                      }`}>
                        {condition === opt.label && <Check className="w-2.5 h-2.5 text-white" />}
                      </div>
                      <div className="text-left">
                        <span className="block text-xs font-bold text-slate-850 tracking-wide">{opt.label}</span>
                        <span className="block text-[10px] text-slate-505 mt-0.5 leading-tight font-sans">{opt.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target sought phone */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-sans">Model You Want to Swap To</label>
                <input
                  type="text"
                  required
                  value={targetProduct}
                  onChange={(e) => setTargetProduct(e.target.value)}
                  placeholder="e.g. iPhone 15 Pro Max (256GB)"
                  className="w-full bg-slate-50/50 border border-slate-205 hover:border-slate-350 focus:border-[#005af0] rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-400 outline-none transition-all"
                />
              </div>

              {/* Remarks comments */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-sans">Special Remarks (e.g., Battery Health)</label>
                <textarea
                  value={customComment}
                  onChange={(e) => setCustomComment(e.target.value)}
                  placeholder="e.g. Battery health is 86%, clean screen, includes original box."
                  rows={2}
                  className="w-full bg-slate-50/50 border border-slate-205 hover:border-slate-350 focus:border-[#005af0] rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-400 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                id="calculate-swap-btn"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-widest hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-150 cursor-pointer active:scale-95 shadow-sm"
              >
                Calculate Trade-In Estimate
              </button>
            </form>
          </div>

          {/* Right estimate panel outputs */}
          <div className="md:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900 text-slate-350 text-left relative overflow-hidden shadow-xl border border-slate-850">
            {/* Soft decorative visual accent light */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-2xl pointer-events-none rounded-full"></div>

            <div className="space-y-6">
              <h3 className="text-base font-bold text-white tracking-wider uppercase font-sans flex items-center gap-2 pb-3 border-b border-slate-800">
                <HeartHandshake className="w-5 h-5 text-blue-400" />
                <span>Trade-In valuation</span>
              </h3>

              <div className="space-y-5">
                <div>
                  <span className="text-[9px] text-slate-500 uppercase font-mono tracking-widest block font-bold">Trading It In</span>
                  <span className="text-sm font-bold text-white block mt-0.5">
                    {currentBrand} {currentModel || '(Specify model description)'}
                  </span>
                  <span className="text-[10px] text-blue-400 font-bold block mt-0.5 font-sans">
                    Grade Scale: {condition}
                  </span>
                </div>

                <div>
                  <span className="text-[9px] text-slate-500 uppercase font-mono tracking-widest block font-bold">Acquiring</span>
                  <span className="text-sm font-bold text-white block mt-0.5">
                    {targetProduct || '(Specify target brand above)'}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-1.5">
                  <span className="text-[10px] text-blue-400 uppercase font-bold tracking-widest block">Estimated Trade-In credit</span>
                  {estimatedValue ? (
                    <div className="text-2xl font-black text-white tracking-tight font-sans">
                      {estimatedValue}
                    </div>
                  ) : (
                    <div className="text-xs text-slate-500 italic font-sans">
                      Fill model parameters and click "Calculate"
                    </div>
                  )}
                  <span className="text-[9px] text-slate-500 leading-relaxed block pt-1 font-sans">
                    *This estimate acts as an initial indicator. Final device evaluations are checked physically in-store.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 space-y-3">
              <button
                id="send-swap-to-wa"
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-705 hover:to-indigo-705 transition-all text-xs font-semibold uppercase tracking-widest duration-150 cursor-pointer active:scale-95 shadow-lg shadow-blue-500/25"
              >
                <MessageCircle className="w-4 h-4 fill-white text-blue-600 shrink-0" />
                <span>Submit Swap Request</span>
              </button>
              
              <div className="flex items-center space-x-2 text-[10px] text-slate-450 justify-center font-sans">
                <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Reviewed within 15 mins by JMirth desk</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
