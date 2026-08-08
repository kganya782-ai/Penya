import React from 'react';
import { usePlaceholder } from '../context/PlaceholderContext';
import { PenyaLogo } from './PenyaLogo';
import { ArrowRight, MapPin, MessageSquare, Phone } from 'lucide-react';

interface FinalCTAProps {
  onOpenInquiry: () => void;
  onNavigateContact?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInquiry, onNavigateContact }) => {
  const { formatPlaceholder, highlightPlaceholders } = usePlaceholder();

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Penya's! I'd like to inquire about your car wash and shisanyama at 30 Dudu Madisha Dr!");
    window.open(`https://wa.me/27687136563?text=${text}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:0687136563';
  };

  return (
    <section className="py-16 lg:py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Penya Logo */}
        <div className="flex justify-center mb-2">
          <PenyaLogo size="lg" variant="dark" />
        </div>

        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
          Ready for a Spotless Wash &amp; Sizzling Braai?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
          Bring your vehicle down to <strong className="text-orange-400 font-semibold">Penya's Carwash &amp; Shisanyama</strong> today. Enjoy great food, ice-cold refreshments, and friendly local service in Mahwelereng, Mokopane.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-emerald-600 text-white font-extrabold text-base shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>Chat on WhatsApp</span>
          </button>

          <button
            onClick={handleCall}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-stone-800 hover:bg-stone-700 text-white font-bold text-base border border-stone-700 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Phone className="w-5 h-5 text-orange-400" />
            <span>Call 068 713 6563</span>
          </button>
        </div>

        {/* Footer address pill */}
        <div className="mt-8 pt-6 border-t border-stone-800 inline-flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-stone-400">
          <span>Located at:</span>
          <strong
            className={`text-stone-200 font-semibold ${
              highlightPlaceholders ? 'placeholder-highlight px-1 text-orange-300' : ''
            }`}
          >
            {formatPlaceholder('address', 'ADDRESS')}
          </strong>
        </div>

      </div>
    </section>
  );
};
