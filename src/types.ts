export type PageType = 'home' | 'about' | 'services' | 'contact';

export interface CarWashService {
  id: string;
  title: string;
  badge?: string;
  pricePlaceholder: string;
  defaultPriceValue: string;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
  category: 'express' | 'executive' | 'detailing' | 'special';
}

export interface ShisanyamaMenuItem {
  id: string;
  title: string;
  category: 'platters' | 'chops' | 'chicken' | 'sides' | 'drinks';
  pricePlaceholder: string;
  defaultPriceValue: string;
  description: string;
  highlights: string[];
  spicyLevel?: 0 | 1 | 2 | 3;
  image: string;
  servingSize: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'carwash' | 'shisanyama' | 'atmosphere';
  imageUrl: string;
  caption: string;
  aspectRatio?: '4:3' | '16:9' | '1:1';
}

export interface BenefitCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
}

export interface PlaceholderConfig {
  phone: string;
  whatsapp: string;
  address: string;
  openingHours: string;
  mapArea: string;
  expressPrice: string;
  executivePrice: string;
  valetPrice: string;
  platterPrice: string;
  chopsPrice: string;
  chickenPrice: string;
  comboPackagePrice: string;
}

export interface InquiryFormState {
  serviceId?: string;
  menuItemId?: string;
  name: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  vehicleType: string;
  notes: string;
  isCombo: boolean;
}
