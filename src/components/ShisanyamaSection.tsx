import React, { useState } from 'react';
import { usePlaceholder } from '../context/PlaceholderContext';
import { SHISANYAMA_MENU } from '../data/mockData';
import { ShisanyamaMenuItem } from '../types';
import { Flame, Utensils, Sparkles, ArrowRight, ShoppingBag, Plus } from 'lucide-react';

interface ShisanyamaSectionProps {
  onSelectMenuItem: (item: ShisanyamaMenuItem) => void;
}

export const ShisanyamaSection: React.FC<ShisanyamaSectionProps> = ({ onSelectMenuItem }) => {
  const { formatPlaceholder, highlightPlaceholders } = usePlaceholder();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredMenu = SHISANYAMA_MENU.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="shisanyama" className="py-16 lg:py-24 bg-zinc-950 relative border-t border-zinc-900">
      {/* Warm glow behind food */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 fill-orange-500/30" />
            <span>Authentic Flame-Grilled Shisanyama</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 tracking-tight">
            Sizzling Braai & Local Flavors
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Fresh butcher cuts grilled over open wood coals. Served hot with golden mieliepap, spicy chakalaka relish, and ice-cold refreshments.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-4">
            {[
              { id: 'all', label: 'Full Menu' },
              { id: 'platters', label: 'Braai Platters' },
              { id: 'chops', label: 'Lamb & Boerewors' },
              { id: 'chicken', label: 'Flame Chicken' },
              { id: 'sides', label: 'Pap & Sides' },
              { id: 'drinks', label: 'Refreshments' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-950 shadow-lg shadow-orange-500/20'
                    : 'bg-zinc-900 text-zinc-400 hover:text-zinc-100 border border-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-zinc-900/90 border border-zinc-800/90 hover:border-orange-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 shadow-lg"
            >
              {/* Image & Badges */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                  {/* Serving Size badge */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-[11px] font-semibold text-amber-300">
                    {item.servingSize}
                  </div>

                  {/* Spicy level badge */}
                  {item.spicyLevel && item.spicyLevel > 0 && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-orange-500/20 backdrop-blur-md border border-orange-500/40 text-[10px] font-bold text-orange-400 flex items-center gap-1">
                      <Flame className="w-3 h-3 fill-orange-500" />
                      <span>{item.spicyLevel === 1 ? 'Mild Spice' : 'Hot Spice'}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-zinc-100 group-hover:text-amber-400 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlight Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-zinc-800/80 text-[10px] text-zinc-300 border border-zinc-700/50"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-6 pt-0 border-t border-zinc-800/50 mt-4 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 block">
                    Price Placeholder
                  </span>
                  <div
                    className={`font-heading text-base font-black text-amber-400 ${
                      highlightPlaceholders ? 'placeholder-highlight px-1 text-amber-300' : ''
                    }`}
                  >
                    {formatPlaceholder('platterPrice', 'FOOD MENU')}
                  </div>
                </div>

                <button
                  onClick={() => onSelectMenuItem(item)}
                  className="px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-zinc-950 font-bold text-xs shadow-md shadow-orange-500/20 transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order / Inquire</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Menu Note banner */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm text-zinc-300 font-medium">
            🔥 <strong>Custom Platter Orders Available:</strong> Planning a party, group gathering, or weekend hangout? We can prepare custom braai platters tailored for your group!
          </p>
          <p className="text-[11px] text-zinc-500">
            Note for owner: Full item prices and dietary menus can be updated anytime in `[FOOD MENU]`.
          </p>
        </div>

      </div>
    </section>
  );
};
