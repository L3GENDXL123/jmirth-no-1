import { Product, GalleryItem, ServiceItem } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'iPhone 15 Pro Max',
    category: 'phones',
    description: 'Flagship Apple titanium smartphone with 5x optical zoom camera and A17 Pro chip.',
    price: '₦1,450,000 - ₦1,750,000',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=600',
    features: ['Titanium design', 'Action Button', 'A17 Pro chip', '48MP Main Camera'],
    isSwapEligible: true,
    specifications: {
      Display: '6.7-inch Super Retina XDR OLED',
      Processor: 'Apple A17 Pro (3nm)',
      Storage: '256GB / 512GB / 1TB',
      Battery: 'Advanced fast charging, MagSafe'
    }
  },
  {
    id: 'p2',
    name: 'Samsung Galaxy S24 Ultra',
    category: 'phones',
    description: 'Premium titanium build, ultimate quad-camera zoom, built-in S-Pen, and Galaxy AI.',
    price: '₦1,380,000 - ₦1,650,000',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=600',
    features: ['Galaxy AI', 'Built-in S-Pen', '200MP Main Camera', 'Titanium Frame'],
    isSwapEligible: true,
    specifications: {
      Display: '6.8-inch Dynamic AMOLED 2X, QHD+',
      Processor: 'Snapdragon 8 Gen 3 for Galaxy',
      Storage: '256GB / 512GB / 1TB',
      Battery: '5000mAh with 45W Fast Charge'
    }
  },
  {
    id: 'p3',
    name: 'Oraimo FreePods 4 Active Noise Cancelling',
    category: 'audio',
    description: 'True wireless stereo earbuds with Pro Hybrid ANC, deep bass, and heavy-duty 35.5-hour playtime.',
    price: '₦45,000',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=600',
    features: ['Up to 30dB Hybrid ANC', 'HavyBass Sound', 'Transparency Mode', 'IPX5 Waterproof'],
    isSwapEligible: false,
    specifications: {
      Bluetooth: 'v5.2',
      BatteryLife: 'Up to 35.5 hours total',
      Range: '10m',
      Controls: 'Intelligent touch'
    }
  },
  {
    id: 'p4',
    name: 'Hisense Double Door Refrigerator',
    category: 'appliances',
    description: 'Energy-saving, frost-free double door refrigerator with multi air-flow and water dispenser.',
    price: '₦480,000',
    image: 'https://images.unsplash.com/photo-1571175432267-ef026c613948?auto=format&fit=crop&q=80&w=600',
    features: ['Multi Air Flow system', 'Built-in Water Dispenser', 'LED Lighting', 'Frost Free Technology'],
    isSwapEligible: true,
    specifications: {
      Capacity: '250 Liters',
      Defrosting: 'No Frost / Automatic',
      Material: 'Stainless Steel Finish',
      Warranty: '2 Years Manufacturer Warranty'
    }
  },
  {
    id: 'p5',
    name: 'Samsung 8KG Front Load Washing Machine',
    category: 'appliances',
    description: 'EcoBubble technology laundry machine with steam sanitize and digital inverter motor.',
    price: '₦395,000',
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=600',
    features: ['EcoBubble technology', 'Hygiene Steam cycle', 'Digital Inverter technology', '15 min Quick Wash'],
    isSwapEligible: true,
    specifications: {
      Capacity: '8.0 Kg Wash',
      SpinSpeed: '1200 rpm',
      EnergyClass: 'A+++ Rating',
      Panel: 'LED Display with Dial Control'
    }
  },
  {
    id: 'p6',
    name: 'Apple Watch Series 9 GPS',
    category: 'wearables',
    description: 'S9 SiP chip with double tap gesture, bright screen, and advanced health sensors.',
    price: '₦490,000',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=600',
    features: ['Double Tap Gesture', 'Blood Oxygen app', 'ECG capabilities', 'Always-on Retina Display'],
    isSwapEligible: true,
    specifications: {
      Size: '41mm or 45mm Aluminum Case',
      Sensors: 'Temperature, Blood Oxygen, ECG, Fall Detection',
      Brightness: 'Up to 2000 nits',
      Connectivity: 'GPS, Wi-Fi, Bluetooth'
    }
  },
  {
    id: 'p7',
    name: 'JBL PartyBox 110 Bluetooth Speaker',
    category: 'audio',
    description: '160W portable speaker with powerful sound, built-in dynamic light show, and splashproof design.',
    price: '₦420,000',
    image: 'https://images.unsplash.com/photo-1608155686393-8fdd966d784d?auto=format&fit=crop&q=80&w=600',
    features: ['160W JBL Original Pro Sound', 'Dynamic multi-color light ring', '12 Hours rechargeable battery', 'IPX4 Splashproof'],
    isSwapEligible: false,
    specifications: {
      Power: '160 Watts RMS',
      Connectivity: 'Bluetooth 5.1 / AUX / USB inputs',
      Inputs: 'Mic and Guitar inputs with volume controls',
      Weight: '10.84 kg'
    }
  },
  {
    id: 'p8',
    name: 'Apple 20W USB-C Power Adapter',
    category: 'accessories',
    description: 'Original Apple fast charger offering rapid, efficient charging for all iPhone and iPad models.',
    price: '₦22,000',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=600',
    features: ['Fast charging 0 to 50% in 30 mins', 'Premium build material', 'Universal USB-C compatibility', 'Short-circuit safety integration'],
    isSwapEligible: false,
    specifications: {
      Power: '20 Watts',
      Port: 'USB Type-C',
      Certification: 'Apple Certified Original',
      Weight: '80 grams'
    }
  }
];

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'We Buy Devices',
    description: 'Get instant cash for your pre-owned phones, smartwatches, and electronics. We offer the most competitive market rates with same-day payout.',
    iconName: 'Banknote',
    tagline: 'Instant Valuation'
  },
  {
    id: 's2',
    title: 'We Sell Premium Gadgets',
    description: 'Browse a curated collection of genuine smartphones, high-fidelity audio equipment, wearables, and premium home appliances with warranty assurance.',
    iconName: 'ShoppingBag',
    tagline: 'Guaranteed Authentic'
  },
  {
    id: 's3',
    title: 'Device Swaps & Trade-Ins',
    description: 'Upgrade to your dream device with our premium swap service. Bring your existing device, get it evaluated, and balance up for a newer model.',
    iconName: 'RefreshCw',
    tagline: 'Seamless Transition'
  },
  {
    id: 's4',
    title: 'Premium Home Appliances',
    description: 'Outfit your home with highly efficient appliances like smart TVs, energy-saving refrigerators, high-speed washing machines, and cooling lines.',
    iconName: 'Tv',
    tagline: 'Home Essentials'
  },
  {
    id: 's5',
    title: 'Authentic Accessories',
    description: 'Ensure maximum lifespan for your devices. We stock original accessories including chargers, heavy-duty power banks, cables, and premium protection screen covers.',
    iconName: 'Cpu',
    tagline: 'Certified Power'
  },
  {
    id: 's6',
    title: 'Expert Device Consultation',
    description: 'Undecided on your next upgrade? Our tech consultants provide tailored recommendations based on your budget, feature preferences, and lifestyle requirements in real time.',
    iconName: 'Wrench',
    tagline: 'Lifetime Support'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Our Modern Smartphone Catalog',
    category: 'phones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600',
    description: 'A stellar showcase of the latest flagship smartphones available in store.'
  },
  {
    id: 'g2',
    title: 'Safe Customer Swap Handovers',
    category: 'swaps',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=600',
    description: 'Real smiles as we swap older models for brand-new upgrades instantly.'
  },
  {
    id: 'g3',
    title: 'Premium Home Appliance Display',
    category: 'appliances',
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80&w=600',
    description: 'Explore durable, premium double-door refrigerators and modern laundry solutions.'
  },
  {
    id: 'g4',
    title: 'JMirth Gadget Haven Storefront',
    category: 'store',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600',
    description: 'A look inside our pristine, neon-glow tech lounge and purchase desk.'
  },
  {
    id: 'g5',
    title: 'Premium Accessory Collection',
    category: 'phones',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=600',
    description: 'Original Apple & Samsung adapters, MagSafe wallets, and active noise earbuds.'
  }
];
export const FAMOUS_BRANDS = [
  { name: 'Apple', logo: '🍎' },
  { name: 'Samsung', logo: '📱' },
  { name: 'Xiaomi', logo: '🍊' },
  { name: 'Hisense', logo: '🥶' },
  { name: 'JBL', logo: '🔊' },
  { name: 'Oraimo', logo: '⚡' },
  { name: 'Sony', logo: '🎧' },
  { name: 'LG', logo: '🌟' }
];
