import React from 'react';
import { usePlaceholder } from '../context/PlaceholderContext';
import { PageType } from '../types';
import { PenyaLogo } from './PenyaLogo';
import { MapPin, Phone, Clock, Sparkles } from 'lucide-react';

interface FooterProps {
  onSelectPage: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectPage }) => {
  const { formatPlaceholder, highlightPlaceholders } = usePlaceholder();

  return (
    <footer className="bg-stone-900 border-t border-stone-800 text-stone-400 text-xs sm:text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <button
              onClick={() => onSelectPage('home')}
              className="text-left active:scale-98 transition-transform"
            >
              <PenyaLogo size="md" variant="dark" />
            </button>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              South Africa's local business combining professional auto detailing with flame-grilled Shisanyama braai in one welcoming spot.
            </p>
            <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700 text-[11px] text-stone-300">
              📌 <strong>30 Dudu Madisha Dr, Mahwelereng, Mokopane, 0601</strong>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-stone-200 uppercase tracking-wider">
              Website Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onSelectPage('home')} className="hover:text-orange-400 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onSelectPage('about')} className="hover:text-orange-400 transition-colors">
                  About Penya's
                </button>
              </li>
              <li>
                <button onClick={() => onSelectPage('services')} className="hover:text-orange-400 transition-colors">
                  Car Wash & Shisanyama Services
                </button>
              </li>
              <li>
                <button onClick={() => onSelectPage('contact')} className="hover:text-orange-400 transition-colors">
                  Location & Contact Details
                </button>
              </li>
            </ul>
          </div>

          {/* Business Info */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-stone-200 uppercase tracking-wider">
              Business Information
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                <span
                  className={`${
                    highlightPlaceholders ? 'placeholder-highlight px-1 text-orange-300' : 'text-stone-300'
                  }`}
                >
                  {formatPlaceholder('address', 'ADDRESS')}
                </span>
              </div>
              <div className="flex items-start gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span
                  className={`${
                    highlightPlaceholders ? 'placeholder-highlight px-1 text-orange-300' : 'text-stone-300'
                  }`}
                >
                  {formatPlaceholder('phone', 'PHONE NUMBER')}
                </span>
              </div>
              <div className="flex items-start gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span
                  className={`${
                    highlightPlaceholders ? 'placeholder-highlight px-1 text-orange-300' : 'text-stone-300'
                  }`}
                >
                  {formatPlaceholder('openingHours', 'OPENING HOURS')}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Penya's Carwash & Shisanyama. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Mahwelereng, Mokopane</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
