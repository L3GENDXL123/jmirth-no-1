export interface Product {
  id: string;
  name: string;
  category: 'phones' | 'audio' | 'wearables' | 'appliances' | 'accessories';
  description: string;
  price?: string; // Optional: can be a price range or exact e.g., "₦850,000" or "Contact for Best Price"
  image: string;
  images?: string[];
  features: string[];
  isSwapEligible: boolean;
  specifications?: Record<string, string>;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'phones' | 'appliances' | 'store' | 'swaps';
  image: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // lucide icon name
  tagline: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
}
