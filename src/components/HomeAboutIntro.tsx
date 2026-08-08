import React from 'react';
import { usePlaceholder } from '../context/PlaceholderContext';
import { carwashImg, butcherImg, venueImg } from '../data/mockData';
import { Car, Flame, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HomeAboutIntroProps {
  onNavigateServices: () => void;
  onNavigateContact: () => void;
}

export const HomeAboutIntro: React.FC<HomeAboutIntroProps> = ({ onNavigateServices, onNavigateContact }) => {
  const { formatPlaceholder, highlightPlaceholders } = usePlaceholder();

  return (
    <div className="space-y-16 py-12 bg-[#FDFBF7]">
      {/* 1. About Penya's Short Intro Paragraph */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C2410C] block">
              Welcome to Penya's
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
              About Penya's Carwash & Shisanyama
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Penya's Carwash & Shisanyama at <strong>30 Dudu Madisha Dr, Mahwelereng, Mokopane</strong> brings together two South African favorites in one warm, welcoming venue. While our dedicated wash team gives your car a thorough executive shine, you can relax in our shaded outdoor pavilion and savor juicy, flame-grilled braai meats with fresh pap and chakalaka.
            </p>
          </div>

          <div className="md:col-span-5 relative rounded-2xl overflow-hidden border border-stone-200 shadow-md aspect-[4/3]">
            <img
              src={venueImg}
              alt="Penya's Outdoor Grounds in Mahwelereng"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-bold text-white bg-stone-900/80 backdrop-blur-xs px-3 py-1 rounded-lg border border-stone-700">
                📍 30 Dudu Madisha Dr, Mahwelereng
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What We Offer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0369A1]">
            Our Core Experiences
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            What We Offer
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Choose from top-tier vehicle detailing or authentic township braai dining—or enjoy both together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Category 1: Car Wash */}
          <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xs flex flex-col justify-between hover:border-[#0369A1] transition-all group">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src={carwashImg}
                alt="Executive Car Wash Bay"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-md">
                    <Car className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Car Wash Services
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  Professional hand-wash, high-pressure foam rinse, interior cabin vacuum, dashboard dressing, and tyre shine. Scratch-free finish guaranteed.
                </p>
                
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 text-xs text-stone-700 space-y-2">
                  <div className="flex items-center justify-between font-bold text-stone-900">
                    <span>Wash Packages:</span>
                    <span className="text-[#0369A1] font-extrabold">
                      {formatPlaceholder('expressPrice', 'CAR WASH SERVICE')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-[#0369A1]" />
                    <span>Exterior foam wash & streak-free drying</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-[#0369A1]" />
                    <span>Cabin vacuum & rim polishing options</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <button
                  onClick={onNavigateServices}
                  className="w-full py-3 rounded-xl bg-stone-900 hover:bg-[#0369A1] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>View Car Wash Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category 2: Shisanyama */}
          <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xs flex flex-col justify-between hover:border-[#C2410C] transition-all group">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src={butcherImg}
                alt="Penya's Fresh Meat Butcher Counter"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#C2410C] text-white flex items-center justify-center shadow-md">
                    <Flame className="w-5 h-5 fill-white/20" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Shisanyama Braai
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  Select fresh quality meats at our butcher counter. Flame-grilled boerewors, succulent lamb chops, marinated chicken, stiff white pap, and spicy chakalaka.
                </p>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 text-xs text-stone-700 space-y-2">
                  <div className="flex items-center justify-between font-bold text-stone-900">
                    <span>Braai Menu Items:</span>
                    <span className="text-[#C2410C] font-extrabold">
                      {formatPlaceholder('platterPrice', 'FOOD ITEM')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-[#C2410C]" />
                    <span>Butcher-selected prime cuts & braai spices</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-[#C2410C]" />
                    <span>Served hot with pap, chakalaka & cold drinks</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <button
                  onClick={onNavigateServices}
                  className="w-full py-3 rounded-xl bg-stone-900 hover:bg-[#C2410C] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>View Food & Braai Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
