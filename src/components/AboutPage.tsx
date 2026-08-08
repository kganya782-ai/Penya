import React from 'react';
import { usePlaceholder } from '../context/PlaceholderContext';
import { heroImg, carwashImg, platterImg, butcherImg, venueImg } from '../data/mockData';
import { Car, Flame, Sparkles, Clock, Heart, Users, ShieldCheck, MapPin, Coffee } from 'lucide-react';

interface AboutPageProps {
  onNavigateContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateContact }) => {
  const { formatPlaceholder, highlightPlaceholders } = usePlaceholder();

  return (
    <div className="py-12 lg:py-16 bg-[#FDFBF7] text-stone-900 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#C2410C] text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5" />
            <span>About Penya's</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-stone-900">
            Welcome to Penya's Carwash & Shisanyama
          </h1>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            A welcoming Mahwelereng local hub combining professional auto wash services with authentic flame-grilled South African cuisine.
          </p>
        </div>

        {/* Introduction & Business Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-xs space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C2410C]">
                <Sparkles className="w-4 h-4 text-[#C2410C]" />
                <span>Our Roots & Story</span>
              </div>
              
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-stone-900">
                Quality Detailing & Fresh Braai Meats
              </h2>

              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                Located at <strong>30 Dudu Madisha Dr, Mahwelereng, Mokopane</strong>, Penya's Carwash & Shisanyama turned a routine chore—waiting for your vehicle to be washed—into an enjoyable social outing. Instead of sitting idle, our guests relax under shaded umbrellas, enjoy background music, and order freshly prepared braai meats at our butcher shop.
              </p>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase">
                  <MapPin className="w-4 h-4 text-[#C2410C]" />
                  <span>Mokopane Local Hub</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Our team takes pride in providing top-tier microfiber car washes while serving butcher-selected cuts of boerewors, beef steaks, lamb chops, and peri-peri chicken over open braai coals.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <span className="font-bold text-stone-900 block mb-1">Mahwelereng Community</span>
                  <span className="text-stone-600">Conveniently situated on Dudu Madisha Drive.</span>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <span className="font-bold text-stone-900 block mb-1">Butcher Counter</span>
                  <span className="text-stone-600">In-house wooden kiosk butcher shop for fresh selection.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Real Photography Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-sm bg-white aspect-[4/3] relative group">
                <img
                  src={venueImg}
                  alt="Penya's Outdoor Grounds"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-bold text-white">Outdoor Shaded Pavilion</span>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-sm bg-white aspect-[4/3] relative group">
                <img
                  src={butcherImg}
                  alt="Penya's Butcher Counter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-bold text-white">Fresh Butcher Counter</span>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-sm bg-white aspect-[4/3] relative group">
                <img
                  src={carwashImg}
                  alt="Carwash Bay Detailing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-bold text-white">Executive Wash Bay</span>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-sm bg-white aspect-[4/3] relative group">
                <img
                  src={platterImg}
                  alt="Shisanyama Braai Platter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-bold text-white">Hot Braai Platters</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Penya's Section */}
        <div className="mt-16 pt-12 border-t border-stone-200">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C2410C]">
              Simple Benefits
            </span>
            <h2 className="font-heading text-3xl font-black text-stone-900">
              Why Choose Penya's?
            </h2>
            <p className="text-sm text-stone-600">
              Here is what makes visiting Penya's a convenient, relaxing experience for you and your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-sky-100 text-[#0369A1] flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-stone-900">
                Highly Convenient
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Save time by getting your vehicle cleaned while you enjoy lunch, catch up with friends, or relax.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#C2410C] flex items-center justify-center font-bold">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-stone-900">
                Car Wash & Food in One
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Two essential services under one roof. No need to drive to separate places for food and car detailing.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-stone-900">
                Relaxed Atmosphere
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Shaded outdoor seating, comfortable music, and friendly staff to make your wait comfortable.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-stone-200 text-stone-900 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-stone-900">
                Great Place to Visit
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                A warm community spot where local car enthusiasts and food lovers gather every week.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-stone-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold">
              Want to visit or inquire about Penya's?
            </h3>
            <p className="text-stone-300 text-sm">
              Get in touch with our team directly for opening times, directions, or group visits.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3.5 rounded-xl bg-[#C2410C] hover:bg-orange-600 text-white font-bold text-sm shrink-0 transition-all active:scale-95 shadow-md"
          >
            Get Directions & Contact
          </button>
        </div>

      </div>
    </div>
  );
};
