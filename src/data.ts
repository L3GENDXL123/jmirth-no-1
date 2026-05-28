import { Product, GalleryItem, ServiceItem } from './types';
import solarInverterImg from './assets/images/solar_inverter_system_1779916711385.png';
import jmirthAppliancesImg from './assets/images/jmirth_home_appliances_1779915959980.png';
import standingFanImg from './assets/images/standing_fan_jmirth_1779914513563.png';
import pressingIronImg from './assets/images/pressing_iron_jmirth_1779914533854.png';
import airConditionerImg from './assets/images/air_conditioner_jmirth_1779914984266.png';

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
    name: 'Samsung Galaxy S21',
    category: 'phones',
    description: 'Premium Samsung Galaxy S21 with a smooth 120Hz display, powerful performance, and pro-level cameras built for everyday use..',
    price: '₦280,000-₦340,000',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=600',
    features: ['Aluminum Frame', 'Gorilla Glass Victus', 'Plastic Back', '120Hz AMOLED Display'],
    isSwapEligible: true,
    specifications: {
     Display: '6.2-inch Dynamic AMOLED 2X, FHD+, 120Hz',
Processor: 'Snapdragon 888 / Exynos 2100',
Storage: '128GB / 256GB',
Battery: '4000mAh with 25W Fast Charge'
    }
  },
  {
    id: 'p3',
    name: 'Home Appliances & Electronics',
    category: 'appliances',
    description: 'Discover quality home appliances, electronics, and modern gadgets at JMirth Gadget Haven,from refrigerators and washing machines to smart devices and everyday essentials, all in one place.',
    price: 'Best Market Rates',
    image: jmirthAppliancesImg,
    images: [jmirthAppliancesImg, standingFanImg, pressingIronImg, airConditionerImg],
    features: [
      'Premium Refrigerators',
      'Front-Load Washing Machines',
      'Smart Android TVs',
      'High-Performance Standing Fans',
      'Quality Pressing Irons & Steamers',
      'Everyday Smart Kitchen Gadgets'
    ],
    isSwapEligible: true,
    specifications: {
      Brands: 'Hisense, LG, Samsung, Haier, Nexus, Binatone, Panasonic, Century',
      Appliance_Types: 'Refrigerators, Deep Freezers, Washing Machines, Air Conditioners, Smart TVs, Standing Fans, Pressing Irons, Microwaves, Blenders & Electric Kettles',
      Warranty: '1 - 3 Years Manufacturer Warranty',
      Delivery: 'Fast Home Delivery & Professional Setup Available'
    }
  },
  {
    id: 'p4',
    name: 'Solar Inverter',
    category: 'appliances',
    description: 'High-quality solar inverter system equipped with durable solar panels and reliable power controllers for standard home appliance backups and remote workspace setups.',
    price: '₦295,000 - ₦385,000',
    image: solarInverterImg,
    features: ['Pure Sine Wave Output', 'High-Efficiency Solar Panel Integration', 'Smart Auto-Charge Controller', 'Ideal Home/Office Power Backup'],
    isSwapEligible: true,
    specifications: {
      System_Type: 'Pure Sine Wave Inverter & Solar Panel System',
      Output_Power: 'Clean and stable AC electricity for appliances',
      Solar_Controller: 'Built-in smart high-efficiency charge controller',
      Ideal_For: 'Home electronics, television, refrigerator backup, and home offices'
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
  { name: 'Apple' },
  { name: 'Samsung' },
  { name: 'Xiaomi' },
  { name: 'Hisense' },
  { name: 'LG' }
];
