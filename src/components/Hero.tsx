import React, { useState } from 'react';
import { usePlaceholder } from '../context/PlaceholderContext';
import { heroImg, carwashImg, platterImg } from '../data/mockData';
import { Car, Flame, MapPin, Sparkles, Phone, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: () => void;
  onNavigateContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onNavigateContact }) => {
  const { formatPlaceholder, highlightPlaceholders } = usePlaceholder();
  const [activeTab, setActiveTab] = useState<'both' | 'carwash' | 'shisanyama'>('both');

  const getDisplayedImage = () => {
    if (activeTab === 'carwash') return carwashImg;
    if (activeTab === 'shisanyama') return platterImg;
    return heroImg;
  };

  return (
    <section className="relative pt-6 pb-12 lg:py-16 bg-[#FDFBF7] text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Dual Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-stone-900 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="flex items-center gap-1.5">
                <Car className="w-4 h-4 text-[#0369A1]" />
                <span className="text-stone-800">Car Wash</span>
              </span>
              <span className="text-stone-400 font-bold">+</span>
              <span className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#C2410C] fill-orange-500/30" />
                <span className="text-[#C2410C] font-bold">Shisanyama</span>
              </span>
              <span className="bg-[#C2410C] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded ml-1 tracking-wider">
                2-in-1
              </span>
            </div>

            {/* Business Name & Main Headline */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#C2410C] mb-2">
                Penya's Carwash & Shisanyama
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.08]">
                Sparkling Clean Cars.{' '}
                <span className="text-[#C2410C] inline-block">
                  Sizzling Flame Braai.
                </span>
              </h1>
            </div>

            {/* Short Promotional Paragraph */}
            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl">
              Enjoy a premium car wash and authentic South African food experience in one place. Refresh your vehicle while feasting on hot, freshly grilled meats, mieliepap, and homemade chakalaka.
            </p>

            {/* Placeholders bar */}
            <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C2410C] shrink-0" />
                <span className="text-stone-500 font-medium">Location:</span>
                <span
                  className={`font-semibold text-stone-900 ${
                    highlightPlaceholders ? 'placeholder-highlight px-1 text.orange-700' : ''
                  }`}
                >
                  {formatPlaceholder('address', 'ADDRESS')}
                </span>
              </div>
              <div className="hidden sm:block text-stone-300">•</div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-stone-500 font-medium">Phone:</span>
                <span
                  className={`font-semibold text-stone-900 ${
                    highlightPlaceholders ? 'placeholder-highlight px-1 text-orange-700' : ''
                  }`}
                >
                  {formatPlaceholder('phone', 'PHONE NUMBER')}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onNavigateContact}
                className="px-6 py-3.5 rounded-xl bg-[#C2410C] hover:bg-[#9A3412] text-white font-extrabold text-sm sm:text-base shadow-md shadow-orange-950/10 transition-all text-center flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Visit Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenInquiry}
                className="px-6 py-3.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-900 font-bold text-sm sm:text-base border border-stone-300 transition-all text-center flex items-center justify-center gap-2 active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#C2410C]" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Quick feature highlights */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-stone-200 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-sky-100 text-[#0369A1]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="font-medium">Scratch-Free Wash</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-orange-100 text-[#C2410C]">
                  <Flame className="w-4 h-4" />
                </div>
                <span className="font-medium">Wood-Coal Braai</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-stone-200 text-stone-800">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="font-medium">Wash While You Dine</span>
              </div>
            </div>

          </div>

          {/* Right Showcase Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-2.5 bg-white border border-stone-200 shadow-md overflow-hidden group">
              
              {/* Image Filter Toggle Buttons */}
              <div className="absolute top-5 left-5 z-20 flex items-center gap-1 p-1 rounded-xl bg-stone-900/80 backdrop-blur-md text-white text-xs">
                <button
                  onClick={() => setActiveTab('both')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                    activeTab === 'both'
                      ? 'bg-[#C2410C] text-white shadow-xs'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Combo
                </button>
                <button
                  onClick={() => setActiveTab('carwash')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                    activeTab === 'carwash'
                      ? 'bg-[#0369A1] text-white shadow-xs'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Car Wash
                </button>
                <button
                  onClick={() => setActiveTab('shisanyama')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                    activeTab === 'shisanyama'
                      ? 'bg-[#C2410C] text-white shadow-xs'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Shisanyama
                </button>
              </div>

              {/* Main Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
                <img
                  src={getDisplayedImage()}
                  alt="Penya's Carwash and Shisanyama Experience"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

                {/* Floating Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-stone-900/90 backdrop-blur-md border border-stone-700 text-white flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-orange-400 text-xs font-bold uppercase tracking-wider mb-0.5">
                      <Sparkles className="w-3.5 h-3.5 fill-orange-400" />
                      <span>Two Experiences in One Place</span>
                    </div>
                    <p className="text-xs font-semibold text-stone-200">
                      {activeTab === 'carwash'
                        ? 'High-Foam Hand Wash & Shine'
                        : activeTab === 'shisanyama'
                        ? 'Authentic Flame-Grilled Shisanyama'
                        : 'Wash & Feast Combo Deal'}
                    </p>
                  </div>
                  <button
                    onClick={onOpenInquiry}
                    className="p-2.5 rounded-xl bg-[#C2410C] hover:bg-orange-600 text-white font-bold text-xs shrink-0 transition-transform active:scale-95"
                    title="Inquire or Order"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
