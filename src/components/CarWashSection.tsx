import React, { useState } from 'react';
import { usePlaceholder } from '../context/PlaceholderContext';
import { CAR_WASH_SERVICES } from '../data/mockData';
import { CarWashService } from '../types';
import { Car, CheckCircle2, Clock, Sparkles, ArrowRight, Shield, Zap, Flame } from 'lucide-react';

interface CarWashSectionProps {
  onSelectService: (service: CarWashService) => void;
}

export const CarWashSection: React.FC<CarWashSectionProps> = ({ onSelectService }) => {
  const { formatPlaceholder, highlightPlaceholders } = usePlaceholder();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = CAR_WASH_SERVICES.filter((service) => {
    if (selectedCategory === 'all') return true;
    return service.category === selectedCategory;
  });

  return (
    <section id="carwash" className="py-16 lg:py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Car className="w-3.5 h-3.5" />
            <span>Executive Car Wash & Detailing</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 tracking-tight">
            Premium Care for Your Ride
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            From quick foam rinses to full interior valets. All services use scratch-free microfibre tech and high-grade vehicle shampoos.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-4">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'express', label: 'Express Wash' },
              { id: 'executive', label: 'Executive Wash' },
              { id: 'detailing', label: 'Full Valet' },
              { id: 'special', label: 'Combos & Specials' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20'
                    : 'bg-zinc-900 text-zinc-400 hover:text-zinc-100 border border-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-3xl p-6 sm:p-7 bg-zinc-900/90 border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                service.popular
                  ? 'border-amber-500/60 shadow-xl shadow-amber-500/10 bg-gradient-to-b from-zinc-900 via-zinc-900 to-amber-950/20'
                  : 'border-zinc-800/90 hover:border-zinc-700'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-950 text-[11px] font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 fill-zinc-950" />
                  {service.badge || 'Popular'}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-heading text-xl font-bold text-zinc-100">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 font-medium shrink-0">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                    What's Included:
                  </span>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 block">
                    Estimated Price
                  </span>
                  <div
                    className={`font-heading text-lg font-black text-amber-400 ${
                      highlightPlaceholders ? 'placeholder-highlight px-1 text-amber-300' : ''
                    }`}
                  >
                    {formatPlaceholder('expressPrice', 'CAR WASH PRICE')}
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <span>Inquire / Book</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-amber-950/30 to-zinc-900 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6 text-amber-400 fill-amber-500/20" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-zinc-100">
                Hungry while you wait?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                You can combine any car wash package with a hot Shisanyama braai meal platter!
              </p>
            </div>
          </div>
          <a
            href="#shisanyama"
            className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-400 font-bold text-xs sm:text-sm border border-amber-500/30 transition-all whitespace-nowrap"
          >
            Explore Shisanyama Menu →
          </a>
        </div>

      </div>
    </section>
  );
};
