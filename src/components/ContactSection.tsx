import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, Instagram, Facebook, Clock, MapPin, Send, MessageSquare, Check } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [device, setDevice] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format a direct WhatsApp DM using the contact details
    const textInquiry = `Hello JMirth Gadget Haven!
    
I sent an inquiry message from your website contact form:
- Full Name: ${name}
- Email/Phone: ${email || 'Not provided'}
- Device Model Interested In: ${device || 'Not specified'}

Message Note: "${message}"

Please let me know the availability and current price value. Thank you!`;

    const encoded = encodeURIComponent(textInquiry);
    window.open(`https://wa.me/2349061563862?text=${encoded}`, '_blank');
    
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName('');
      setEmail('');
      setDevice('');
      setMessage('');
    }, 4000);
  };

  const businessHours = [
    { days: 'Monday - Friday', hours: '8:00 AM - 6:00 PM', status: 'In-Store & Online' },
    { days: 'Saturdays', hours: '9:00 AM - 5:00 PM', status: 'In-Store & Online' },
    { days: 'Sundays', hours: 'Emergency Swaps Only', status: 'Online Consultation' }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 italic">⭐️ Connect with us</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase">
            Get In Touch <span className="text-blue-600">With Us</span>
          </h2>
          
          <p className="text-slate-550 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Fill out our quick form or message our WhatsApp storefront directly for efficient and prompt consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Core Store Contact Details */}
          <div className="lg:col-span-5 space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">JMirth Contact Hub</h3>
              <p className="text-slate-550 text-xs sm:text-sm leading-relaxed max-w-sm">
                Connect with our premium sales personnel. We buy, sell, and trade high-quality iPhones, Samsung devices, accessories, and home systems.
              </p>

              {/* Action Buttons list */}
              <div className="space-y-3">
                
                {/* Real WhatsApp CTA */}
                <a
                  href="https://wa.me/2349061563862"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white border border-slate-200 w-full flex items-center space-x-4 hover:border-blue-400 hover:shadow-sm transition-all select-none cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-105 flex items-center justify-center text-blue-600 shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current text-current" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-blue-600 uppercase tracking-widest">Chat on WhatsApp (Recommended)</span>
                    <span className="block text-sm font-bold text-slate-800 mt-0.5 font-sans">+234 906 156 3862</span>
                  </div>
                </a>

                {/* Direct Phone Call */}
                <a
                  href="tel:+2349061563862"
                  className="p-4 rounded-2xl bg-white border border-slate-200 w-full flex items-center space-x-4 hover:border-blue-400 hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Call Our Branch</span>
                    <span className="block text-sm font-bold text-slate-800 mt-0.5 font-sans">+234 (0) 906 156 3862</span>
                  </div>
                </a>

                {/* Address */}
                <div
                  className="p-4 rounded-2xl bg-white border border-slate-200 w-full flex items-center space-x-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Store Branch Location</span>
                    <span className="block text-sm font-bold text-slate-800 mt-0.5 font-sans">Lagos State, Nigeria</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Business Hours */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Operating Timelines</span>
              </h4>
              <div className="space-y-2 text-xs">
                {businessHours.map((bh, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0 font-sans">
                    <span className="text-slate-500">{bh.days}</span>
                    <div className="text-right">
                      <span className="block text-slate-800 font-bold">{bh.hours}</span>
                      <span className="block text-[9px] text-blue-600 font-bold uppercase tracking-wider">{bh.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social channels */}
            <div className="flex space-x-2 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-4 * transition-colors"
                title="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-4 * transition-colors"
                title="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Dynamic Form Widget */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 text-left shadow-md relative flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-1.5">Send Instant Inquiry</h3>
              <p className="text-slate-500 text-xs mb-6 font-sans leading-relaxed">
                Enter details below to compile your customized gadget inquiry. Clicking compile formats your message and launches WhatsApp customer support for immediate review.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 font-sans">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ebube James"
                    className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-blue-500 rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-400 outline-none transition-all font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 font-sans">Email / Phone (Optional)</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. james@example.com"
                    className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-blue-500 rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-400 outline-none transition-all font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 font-sans">Device Model of Interest</label>
                <input
                  type="text"
                  required
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                  placeholder="e.g. iPhone 15 Pro Max 256GB"
                  className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-blue-500 rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-400 outline-none transition-all font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 font-sans">Custom Message / Notes</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Hello, I'd like to ask about item availability and the trade-in process on iPhone devices."
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-blue-500 rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-400 outline-none transition-all resize-none font-sans"
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all duration-150 cursor-pointer active:scale-95 shadow-sm shadow-blue-500/10"
              >
                <Send className="w-3.5 h-3.5 text-white fill-white mr-1" />
                <span>Submit Form to WhatsApp</span>
              </button>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 bg-blue-50 border border-blue-100 rounded-xl flex items-center space-x-2 text-blue-700 text-xs mt-3 select-none"
                  >
                    <Check className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Inquiry compiled! Launching WhatsApp live chat now...</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
