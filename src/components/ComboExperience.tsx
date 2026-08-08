import React, { useState } from 'react';
import { usePlaceholder } from '../context/PlaceholderContext';
import { CAR_WASH_SERVICES, SHISANYAMA_MENU } from '../data/mockData';
import { Car, Flame, Clock, Sparkles, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface ComboExperienceProps {
  onOpenComboInquiry: (washId: string, foodId: string) => void;
}

export const ComboExperience: React.FC<ComboExperienceProps> = ({ onOpenComboInquiry }) => {
  const { formatPlaceholder, highlightPlaceholders } = usePlaceholder();
  const [selectedWashId, setSelectedWashId] = useState<string>(CAR_WASH_SERVICES[1].id);
  const [selectedFoodId, setSelectedFoodId] = useState<string>(SHISANYAMA_MENU[0].id);

  const selectedWash = CAR_WASH_SERVICES.find((s) => s.id === selectedWashId) || CAR_WASH_SERVICES[0];
  const selectedFood = SHISANYAMA_MENU.find((m) => m.id === selectedFoodId) || SHISANYAMA_MENU[0];

  return (
    <section id="combo" className="py-16 lg:py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>The 2-in-1 Penya Advantage</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 tracking-tight">
            How the Combo Works
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Turn waiting time into prime relaxation time. Drop off your keys at the wash bay, order your favorite braai meal, and enjoy a cold beverage while our crew works on your vehicle.
          </p>
        </div>

        {/* 3 Step Visual Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 text-left space-y-3 relative overflow-hidden group hover:border-amber-500/50 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 font-black text-lg flex items-center justify-center">
              1
            </div>
            <h3 className="font-heading text-xl font-bold text-zinc-100 flex items-center gap-2">
              <Car className="w-5 h-5 text-amber-500" /> Drop Off Vehicle
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Pull up to Penya's wash bay. Choose your wash package with our friendly staff and hand over your keys safely.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 text-left space-y-3 relative overflow-hidden group hover:border-orange-500/50 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/20 border border-orange-500/30 text-orange-400 font-black text-lg flex items-center justify-center">
              2
            </div>
            <h3 className="font-heading text-xl font-bold text-zinc-100 flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500 fill-orange-500/30" /> Order Hot Braai
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Head over to the outdoor lounge area. Pick your favorite braai platter, chops, or wings grilled fresh over open wood coals.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 text-left space-y-3 relative overflow-hidden group hover:border-amber-500/50 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 font-black text-lg flex items-center justify-center">
              3
            </div>
            <h3 className="font-heading text-xl font-bold text-zinc-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" /> Drive Off Spotless
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              By the time you finish your meal, your vehicle is polished, vacuumed, and shining ready for the road!
            </p>
          </div>
        </div>

        {/* Interactive Combo Package Simulator */}
        <div className="rounded-3xl p-6 sm:p-8 bg-zinc-900 border border-amber-500/30 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <span className="text-amber-500 font-extrabold text-xs tracking-wider uppercase block">
                Interactive Prototype Feature
              </span>
              <h3 className="font-heading text-2xl font-bold text-zinc-100">
                Custom Combo Estimator
              </h3>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Est. Total Time: ~45 - 60 Mins</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Step A: Pick Car Wash Package */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Car className="w-4 h-4" /> Step A: Select Wash Service
              </label>
              <div className="space-y-2">
                {CAR_WASH_SERVICES.slice(0, 4).map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedWashId(service.id)}
                    className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 ${
                      selectedWashId === service.id
                        ? 'bg-amber-500/15 border-amber-500 text-zinc-100 shadow-md'
                        : 'bg-zinc-950/80 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-zinc-100">{service.title}</div>
                      <div className="text-xs text-zinc-400">{service.duration}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-amber-400 block">
                        {formatPlaceholder('expressPrice', 'CAR WASH PRICE')}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step B: Pick Shisanyama Platter */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-2">
                <Flame className="w-4 h-4 fill-orange-500/40" /> Step B: Select Meal Platter
              </label>
              <div className="space-y-2">
                {SHISANYAMA_MENU.slice(0, 4).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedFoodId(item.id)}
                    className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 ${
                      selectedFoodId === item.id
                        ? 'bg-orange-500/15 border-orange-500 text-zinc-100 shadow-md'
                        : 'bg-zinc-950/80 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-zinc-100">{item.title}</div>
                      <div className="text-xs text-zinc-400">{item.servingSize}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-orange-400 block">
                        {formatPlaceholder('platterPrice', 'FOOD MENU')}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Combo Summary Box */}
          <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[11px] uppercase font-bold text-zinc-500">Selected Combo Package</span>
              <h4 className="font-heading text-lg font-extrabold text-zinc-100">
                {selectedWash.title} + {selectedFood.title}
              </h4>
              <p className="text-xs text-zinc-400">
                Estimated Price: <strong className={`text-amber-400 ${highlightPlaceholders ? 'placeholder-highlight px-1' : ''}`}>{formatPlaceholder('comboPackagePrice', 'COMBO PRICE')}</strong>
              </p>
            </div>

            <button
              onClick={() => onOpenComboInquiry(selectedWash.id, selectedFood.id)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-zinc-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 active:scale-95 shrink-0"
            >
              <span>Inquire About This Combo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
