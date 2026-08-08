import React, { useState } from 'react';
import { usePlaceholder } from '../context/PlaceholderContext';
import { CAR_WASH_SERVICES, SHISANYAMA_MENU, carwashImg } from '../data/mockData';
import { CarWashService, ShisanyamaMenuItem } from '../types';
import { Car, Flame, MessageSquare, CheckCircle2, Clock, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (service: CarWashService) => void;
  onSelectMenuItem: (item: ShisanyamaMenuItem) => void;
  onOpenInquiry: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onSelectMenuItem,
  onOpenInquiry,
}) => {
  const { formatPlaceholder, highlightPlaceholders } = usePlaceholder();
  const [activeTab, setActiveTab] = useState<'all' | 'carwash' | 'shisanyama'>('all');

  return (
    <div className="py-12 lg:py-16 bg-[#FDFBF7] text-stone-900 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#C2410C] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C2410C]" />
            <span>Our Services & Menu</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-stone-900 tracking-tight">
            Car Wash & Shisanyama Offerings
          </h1>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Browse our complete auto wash service tiers and flame-grilled braai menu items.
          </p>

          {/* Filter Switcher */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:text-stone-900 border border-stone-200'
              }`}
            >
              All Offerings
            </button>
            <button
              onClick={() => setActiveTab('carwash')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'carwash'
                  ? 'bg-[#0369A1] text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:text-stone-900 border border-stone-200'
              }`}
            >
              Car Wash Services
            </button>
            <button
              onClick={() => setActiveTab('shisanyama')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'shisanyama'
                  ? 'bg-[#C2410C] text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:text-stone-900 border border-stone-200'
              }`}
            >
              Shisanyama Food Showcase
            </button>
          </div>
        </div>

        {/* SECTION 1: CAR WASH SERVICES PROMOTIONAL SECTION */}
        {(activeTab === 'all' || activeTab === 'carwash') && (
          <div className="space-y-8 mb-16">
            <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
              <div className="w-10 h-10 rounded-2xl bg-sky-100 text-[#0369A1] flex items-center justify-center font-bold">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-stone-900">
                  Professional Car Wash &amp; Auto Detailing
                </h2>
                <p className="text-xs sm:text-sm text-stone-600">
                  Scratch-free hand washing, high-pressure foam, interior vacuuming, and complete showroom polish.
                </p>
              </div>
            </div>

            {/* Promotional Hero Block for Car Wash */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0369A1] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Executive Wash &amp; Shine</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
                  Spotless Perfection For Every Vehicle
                </h3>

                <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                  At <strong>Penya's Carwash &amp; Shisanyama</strong>, we treat every vehicle with executive precision. Our dedicated auto detailing team uses gentle, scratch-free microfiber washing technique, high-pressure foam soap, thorough interior cabin vacuuming, dust-free dashboard dressing, crystal-clear window clarity, and deep tyre &amp; rim gloss restoration.
                </p>

                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  Whether you drive a daily hatchback, sedan, luxury SUV, bakkie, or taxi, our team delivers a radiant showroom shine every time. Best of all, while your vehicle gets meticulously cleaned, you can relax in our shaded outdoor pavilion, enjoy music, and savor sizzling flame-grilled braai meats with cold refreshments.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-bold text-stone-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0" />
                    <span>High-Pressure Foam</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-bold text-stone-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0" />
                    <span>Cabin Deep Vacuum</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-bold text-stone-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0" />
                    <span>Tyre &amp; Rim Gloss</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-bold text-stone-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0" />
                    <span>Dashboard Polish</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-bold text-stone-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0" />
                    <span>Gentle Microfiber</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-bold text-stone-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0" />
                    <span>Shaded Pavilion</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="https://wa.me/27687136563?text=Hi%20Penya's!%20I'd%20like%20to%20inquire%20about%20a%20car%20wash%20at%20your%2030%20Dudu%20Madisha%20Dr%20bay."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2 active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Inquire / Wash Queue via WhatsApp</span>
                  </a>

                  <a
                    href="tel:0687136563"
                    className="px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2 active:scale-95"
                  >
                    <Clock className="w-4 h-4 text-orange-400" />
                    <span>Call Wash Bay: 068 713 6563</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-stone-200 shadow-md aspect-[4/3]">
                <img
                  src={carwashImg}
                  alt="Penya's Car Wash Bay"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white space-y-1">
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-wide block">
                      30 Dudu Madisha Dr, Mahwelereng
                    </span>
                    <p className="text-sm font-extrabold">Executive Drive-in Auto Bay</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: SHISANYAMA FOOD SHOWCASE */}
        {(activeTab === 'all' || activeTab === 'shisanyama') && (
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
              <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#C2410C] flex items-center justify-center font-bold">
                <Flame className="w-5 h-5 fill-orange-500/20" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-stone-900">
                  Shisanyama & Braai Menu
                </h2>
                <p className="text-xs sm:text-sm text-stone-600">
                  Flame-grilled cuts, juicy boerewors, pap, chakalaka, and cold drinks.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SHISANYAMA_MENU.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-stone-200 shadow-xs overflow-hidden flex flex-col justify-between hover:border-[#C2410C] transition-all group"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-stone-900/90 text-[11px] font-semibold text-orange-300">
                        {item.servingSize}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold text-stone-900 group-hover:text-[#C2410C] transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {item.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-stone-100 text-[10px] text-stone-700 border border-stone-200"
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-500 block">
                        Menu Price
                      </span>
                      <div
                        className={`font-heading text-base font-black text-[#C2410C] ${
                          highlightPlaceholders ? 'placeholder-highlight px-1 text-orange-700' : ''
                        }`}
                      >
                        R{formatPlaceholder('platterPrice', 'FOOD PRICE')}
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/27687136563?text=${encodeURIComponent(`Hi Penya's! I'd like to order the ${item.title} from your Shisanyama menu.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-[#C2410C] text-white font-bold text-xs transition-all inline-flex items-center gap-1.5 active:scale-95 shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white text-[#25D366]" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROMOTIONAL CTA (PROMPT REQUIREMENT) */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-orange-50 border border-orange-200 text-stone-900 text-center space-y-4 shadow-xs max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#C2410C] flex items-center justify-center mx-auto">
            <MessageSquare className="w-6 h-6 fill-orange-500/20" />
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-black text-stone-900">
            Want to enquire or place an order?
          </h3>
          <p className="text-sm sm:text-base text-stone-700 max-w-xl mx-auto">
            Contact Penya's directly to check wash queue times, order group braai platters, or confirm business hours.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-extrabold text-sm sm:text-base shadow-md transition-all inline-flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>ORDER / ENQUIRE ON WHATSAPP</span>
            </button>
          </div>
          <p className="text-[11px] text-stone-500">
            This direct WhatsApp button will connect to Penya's official number when live.
          </p>
        </div>

      </div>
    </div>
  );
};
