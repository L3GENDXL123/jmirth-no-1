import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, Plus, Trash2, Edit2, Sliders, Check } from 'lucide-react';
import { Product, GalleryItem } from '../types';

interface AdminPanelProps {
  products: Product[];
  gallery: GalleryItem[];
  onAddProduct: (prod: Product) => void;
  onUpdateProduct: (prod: Product) => void;
  onDeleteProduct: (id: string) => void;
  onAddGallery: (item: GalleryItem) => void;
  onDeleteGallery: (id: string) => void;
  onClose: () => void;
  isAdminLoggedIn: boolean;
  onLoginSuccess: () => void;
}

export default function AdminPanel({
  products,
  gallery,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  onAddGallery,
  onDeleteGallery,
  onClose,
  isAdminLoggedIn,
  onLoginSuccess
}: AdminPanelProps) {
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<'inventory' | 'gallery'>('inventory');

  // Form states for adding items
  const [prodName, setProdName] = useState('');
  const [prodCat, setProdCat] = useState<'phones' | 'audio' | 'wearables' | 'appliances' | 'accessories'>('phones');
  const [prodPrice, setProdPrice] = useState('');
  const [prodImage, setProdImage] = useState('');
  const [prodDesc, setProdDesc] = useState('');
  const [prodFeatures, setProdFeatures] = useState('');
  const [prodSwap, setProdSwap] = useState(true);

  // Gallery states
  const [galTitle, setGalTitle] = useState('');
  const [galCat, setGalCat] = useState<'phones' | 'appliances' | 'store' | 'swaps'>('phones');
  const [galImage, setGalImage] = useState('');
  const [galDesc, setGalDesc] = useState('');

  // Editing state
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'admin' || password === '') {
      onLoginSuccess();
      setLoginError('');
    } else {
      setLoginError('Invalid password. Type "admin" or keep it blank to enter.');
    }
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prodName || !prodPrice || !prodImage) return;

    const featureArray = prodFeatures
      ? prodFeatures.split(',').map(f => f.trim()).filter(Boolean)
      : ['Genuine Model', 'Tested Hardware'];

    if (editingProductId) {
      // Update
      const oldProd = products.find(p => p.id === editingProductId);
      if (oldProd) {
        onUpdateProduct({
          ...oldProd,
          name: prodName,
          category: prodCat,
          price: prodPrice,
          image: prodImage,
          description: prodDesc || oldProd.description,
          features: featureArray,
          isSwapEligible: prodSwap
        });
      }
      setEditingProductId(null);
    } else {
      // Create new
      const newProd: Product = {
        id: `p-${Date.now()}`,
        name: prodName,
        category: prodCat,
        price: prodPrice,
        image: prodImage,
        description: prodDesc || 'Contact us for exact storage modifications and swap margins.',
        features: featureArray,
        isSwapEligible: prodSwap,
        specifications: {
          Brand: prodCat.toUpperCase(),
          Status: 'Available',
          Warranty: 'Verified'
        }
      };
      onAddProduct(newProd);
    }

    // Reset Form
    setProdName('');
    setProdPrice('');
    setProdImage('');
    setProdDesc('');
    setProdFeatures('');
    setProdSwap(true);
  };

  const handleEditClick = (prod: Product) => {
    setEditingProductId(prod.id);
    setProdName(prod.name);
    setProdCat(prod.category);
    setProdPrice(prod.price || '');
    setProdImage(prod.image);
    setProdDesc(prod.description);
    setProdFeatures(prod.features.join(', '));
    setProdSwap(prod.isSwapEligible);
  };

  const handleCancelEdit = () => {
    setEditingProductId(null);
    setProdName('');
    setProdPrice('');
    setProdImage('');
    setProdDesc('');
    setProdFeatures('');
    setProdSwap(true);
  };

  const handleSaveGalleryItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!galTitle || !galImage) return;

    const newItem: GalleryItem = {
      id: `g-${Date.now()}`,
      title: galTitle,
      category: galCat,
      image: galImage,
      description: galDesc || 'JMirth authentic branch visual.'
    };
    onAddGallery(newItem);

    setGalTitle('');
    setGalImage('');
    setGalDesc('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        {/* Modal Surface Box */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          className="relative bg-white border border-slate-205 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl z-10 text-left flex flex-col"
        >
          {/* Top Panel Title */}
          <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                <Sliders className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">JMirth CMS Portal</h3>
                <p className="text-xs text-slate-500 font-sans">Admin management dashboard for inventory cataloging and showroom photos.</p>
              </div>
            </div>

            <button
              id="close-admin-portal"
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors border border-slate-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!isAdminLoggedIn ? (
            /* LOCK SCREEN LOG IN FORM */
            <div className="p-8 max-w-sm mx-auto w-full space-y-6 my-12 bg-slate-50 rounded-3xl border border-slate-200/80 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mx-auto">
                <Lock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-950 uppercase tracking-widest font-sans">CMS Gatekeeper</h4>
                <p className="text-xs text-slate-550 leading-relaxed font-sans max-w-xs mx-auto">
                  Type password <span className="text-blue-600 font-bold">"admin"</span> or click direct access to activate management tabs.
                </p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password... (Default: admin)"
                  className="w-full bg-white border border-slate-250 hover:border-slate-300 focus:border-blue-500 rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-400 outline-none text-center font-sans"
                />
                {loginError && <p className="text-[11px] text-red-500 font-semibold">{loginError}</p>}

                <button
                  id="admin-login-submit"
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-colors cursor-pointer active:scale-95 shadow-sm shadow-blue-500/10"
                >
                  Quick Unlock Portal
                </button>
              </form>
            </div>
          ) : (
            /* MAIN CMS MANAGEMENT INTERFACE */
            <div className="flex-grow flex flex-col overflow-hidden">
              {/* Tab Navigation Menu */}
              <div className="flex border-b border-slate-100 bg-slate-50 px-6 gap-4">
                <button
                  id="cms-tab-inventory"
                  onClick={() => setActiveTab('inventory')}
                  className={`py-4 text-xs font-bold uppercase tracking-widest border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'inventory' 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Shop Inventory ({products.length})
                </button>
                <button
                  id="cms-tab-gallery"
                  onClick={() => setActiveTab('gallery')}
                  className={`py-4 text-xs font-bold uppercase tracking-widest border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'gallery' 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Gallery Visuals ({gallery.length})
                </button>
              </div>

              {/* Scrollable Work Area */}
              <div className="flex-grow overflow-y-auto p-6 sm:p-8 grid md:grid-cols-12 gap-8 items-start no-scrollbar">
                
                {activeTab === 'inventory' ? (
                  <>
                    {/* Add / Edit Form Column */}
                    <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 font-sans">
                        {editingProductId ? '✏️ Edit Product details' : '➕ Add Store Gadget'}
                      </h4>

                      <form onSubmit={handleSaveProduct} className="space-y-4">
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1 font-sans">Gadget Title</label>
                          <input
                            type="text"
                            required
                            value={prodName}
                            onChange={(e) => setProdName(e.target.value)}
                            placeholder="e.g. iPhone 15 Pro Max Custom"
                            className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-500 rounded-xl py-2.5 px-3 text-xs text-slate-800 placeholder-slate-400 outline-none"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1 font-sans">Category</label>
                            <select
                              value={prodCat}
                              onChange={(e) => setProdCat(e.target.value as any)}
                              className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-3 text-xs text-slate-800 outline-none"
                            >
                              <option value="phones">Phones</option>
                              <option value="audio">Audio</option>
                              <option value="wearables">Wearables</option>
                              <option value="appliances">Appliances</option>
                              <option value="accessories">Accessories</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1 font-sans">Market Rate</label>
                            <input
                              type="text"
                              required
                              value={prodPrice}
                              onChange={(e) => setProdPrice(e.target.value)}
                              placeholder="e.g. ₦1,200,000"
                              className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-500 rounded-xl py-2.5 px-3 text-xs text-slate-800 placeholder-slate-400 outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1 font-sans">Product Image URL</label>
                          <input
                            type="text"
                            required
                            value={prodImage}
                            onChange={(e) => setProdImage(e.target.value)}
                            placeholder="e.g. https://images.unsplash.com/photo-..."
                            className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-500 rounded-xl py-2.5 px-3 text-xs text-slate-800 placeholder-slate-400 outline-none font-sans"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1 font-sans">Description / Notes</label>
                          <textarea
                            value={prodDesc}
                            onChange={(e) => setProdDesc(e.target.value)}
                            placeholder="Enter description specs..."
                            rows={3}
                            className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-500 rounded-xl py-2.5 px-3 text-xs text-slate-800 placeholder-slate-400 outline-none resize-none font-sans"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1 font-sans">Top Highlights (Comma sep)</label>
                          <input
                            type="text"
                            value={prodFeatures}
                            onChange={(e) => setProdFeatures(e.target.value)}
                            placeholder="e.g. A17 Pro Chip, OLED, Swap OK"
                            className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-500 rounded-xl py-2.5 px-3 text-xs text-slate-800 placeholder-slate-400 outline-none"
                          />
                        </div>

                        <div className="flex items-center space-x-3 py-1 select-none">
                          <input
                            type="checkbox"
                            id="prod-swap-checkbox"
                            checked={prodSwap}
                            onChange={(e) => setProdSwap(e.target.checked)}
                            className="rounded bg-white border-slate-205 text-blue-600 focus:ring-0 focus:ring-offset-0 shrink-0 cursor-pointer"
                          />
                          <label htmlFor="prod-swap-checkbox" className="text-xs text-slate-600 font-sans cursor-pointer">Eligible for real-time Device Swap</label>
                        </div>

                        <div className="flex gap-2">
                          <button
                            type="submit"
                            className="flex-grow py-2.5 px-3 rounded-lg bg-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors cursor-pointer shadow-sm"
                          >
                            {editingProductId ? 'Update Product' : 'Add to Catalog'}
                          </button>
                          {editingProductId && (
                            <button
                              type="button"
                              onClick={handleCancelEdit}
                              className="py-2.5 px-3 rounded-lg border border-slate-200 text-slate-500 text-xs hover:bg-slate-100 hover:text-slate-800 transition-all cursor-pointer"
                            >
                              Cancel
                            </button>
                          )}
                        </div>
                      </form>
                    </div>

                    {/* Catalog list display */}
                    <div className="md:col-span-7 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-550 font-sans">
                        Active Showroom Catalog ({products.length})
                      </h4>

                      <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 no-scrollbar">
                        {products.map((p) => (
                          <div
                            key={p.id}
                            className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 gap-4 shadow-sm"
                          >
                            <div className="flex items-center space-x-3 min-w-0">
                              <img
                                src={p.image}
                                alt=""
                                referrerPolicy="no-referrer"
                                className="w-10 h-10 object-cover rounded-lg bg-slate-50 border border-slate-100 shrink-0"
                              />
                              <div className="min-w-0">
                                <span className="text-[8px] uppercase font-bold text-blue-600 bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded tracking-wider block w-fit mb-0.5">{p.category}</span>
                                <span className="block text-xs font-bold text-slate-900 truncate max-w-[180px]">{p.name}</span>
                                <span className="block text-[11px] font-bold text-slate-705 font-sans mt-0.5">{p.price || 'Contact'}</span>
                              </div>
                            </div>

                            <div className="flex items-center space-x-1 shrink-0">
                              <button
                                onClick={() => handleEditClick(p)}
                                className="p-1.5 px-2.5 text-[10px] rounded bg-blue-50 border border-blue-105 text-blue-600 hover:bg-blue-100 transition-all flex items-center gap-1 cursor-pointer font-semibold"
                              >
                                <Edit2 className="w-3 h-3" />
                                <span>Edit</span>
                              </button>
                              <button
                                onClick={() => onDeleteProduct(p.id)}
                                className="p-1.5 px-2.5 text-[10px] rounded bg-red-50 border border-red-105 text-red-600 hover:bg-red-100 transition-all flex items-center gap-1 cursor-pointer font-semibold"
                              >
                                <Trash2 className="w-3 h-3" />
                                <span>Delete</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Add Gallery visual form */}
                    <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 font-sans">
                        ➕ Add Showroom Photo Log
                      </h4>

                      <form onSubmit={handleSaveGalleryItem} className="space-y-4">
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1 font-sans">Photo Title Description</label>
                          <input
                            type="text"
                            required
                            value={galTitle}
                            onChange={(e) => setGalTitle(e.target.value)}
                            placeholder="e.g. Genuine Handover Device"
                            className="w-full bg-white border border-slate-200 focus:border-blue-500 rounded-xl py-2.5 px-3 text-xs text-slate-800 placeholder-slate-400 outline-none"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1 font-sans">Photo Category</label>
                            <select
                              value={galCat}
                              onChange={(e) => setGalCat(e.target.value as any)}
                              className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-3 text-xs text-slate-800 outline-none"
                            >
                              <option value="phones">Phones</option>
                              <option value="appliances">Appliances</option>
                              <option value="store">Store Front</option>
                              <option value="swaps">Device Swaps</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1 font-sans">Photo Image URL</label>
                          <input
                            type="text"
                            required
                            value={galImage}
                            onChange={(e) => setGalImage(e.target.value)}
                            placeholder="e.g. https://images.unsplash.com/photo-..."
                            className="w-full bg-white border border-slate-200 focus:border-blue-500 rounded-xl py-2.5 px-3 text-xs text-slate-800 placeholder-slate-400 outline-none font-sans"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1 font-sans">Short Caption Notes</label>
                          <textarea
                            value={galDesc}
                            onChange={(e) => setGalDesc(e.target.value)}
                            placeholder="Enter description specs..."
                            rows={3}
                            className="w-full bg-white border border-slate-200 focus:border-blue-500 rounded-xl py-2.5 px-3 text-xs text-slate-800 outline-none resize-none font-sans placeholder-slate-400"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-2.5 px-3 rounded-lg bg-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-700 border-none transition-colors cursor-pointer shadow-sm shadow-blue-500/10"
                        >
                          Upload Visual Log
                        </button>
                      </form>
                    </div>

                    {/* Gallery items list display */}
                    <div className="md:col-span-7 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-550 font-sans">
                        Showroom Gallery ({gallery.length})
                      </h4>

                      <div className="grid gap-3 sm:grid-cols-2 max-h-[500px] overflow-y-auto pr-2 no-scrollbar">
                        {gallery.map((g) => (
                          <div
                            key={g.id}
                            className="p-3 bg-white border border-slate-200 rounded-xl relative group shadow-sm flex flex-col justify-between"
                          >
                            <img
                              src={g.image}
                              alt=""
                              referrerPolicy="no-referrer"
                              className="aspect-[4/3] w-full object-cover rounded-lg bg-slate-50 border border-slate-100"
                            />
                            <div className="mt-3 flex items-center justify-between gap-2">
                              <div className="min-w-0">
                                <span className="text-[8px] uppercase font-bold text-blue-600 block">{g.category}</span>
                                <h5 className="text-xs font-bold text-slate-800 truncate leading-tight uppercase">{g.title}</h5>
                              </div>
                              <button
                                onClick={() => onDeleteGallery(g.id)}
                                className="p-1 text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700 rounded transition-colors cursor-pointer"
                                title="Delete Photo"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
