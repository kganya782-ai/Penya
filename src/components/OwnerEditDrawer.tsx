import React from 'react';
import { usePlaceholder } from '../context/PlaceholderContext';
import { X, Check, RefreshCw, Flame, Car, MapPin, Phone, Clock, DollarSign } from 'lucide-react';

export const OwnerEditDrawer: React.FC = () => {
  const { isOwnerDrawerOpen, setIsOwnerDrawerOpen, config, updateConfig, resetConfig } = usePlaceholder();

  if (!isOwnerDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-zinc-900 border-l border-zinc-800 h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
            <div>
              <span className="text-amber-500 font-bold text-xs tracking-wider uppercase flex items-center gap-1.5">
                <Flame className="w-4 h-4 fill-amber-500" /> Owner Demo Panel
              </span>
              <h3 className="text-lg font-bold text-zinc-100">Live Information Editor</h3>
            </div>
            <button
              onClick={() => setIsOwnerDrawerOpen(false)}
              className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-zinc-400 my-4 leading-relaxed bg-zinc-950/60 p-3 rounded-lg border border-zinc-800/80">
            💡 <strong>Tomorrow's Presentation Tip:</strong> You can type Penya's actual phone number, address, or prices below to show the owner how their real business info seamlessly populates the site in real-time.
          </p>

          <div className="space-y-4 text-sm">
            {/* Phone */}
            <div>
              <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5 mb-1">
                <Phone className="w-3.5 h-3.5 text-amber-500" /> Phone Number Placeholder
              </label>
              <input
                type="text"
                value={config.phone}
                onChange={(e) => updateConfig('phone', e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-100 text-xs focus:outline-none focus:border-amber-500"
                placeholder="[PHONE NUMBER]"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5 mb-1">
                <Phone className="w-3.5 h-3.5 text-emerald-500" /> WhatsApp Number Placeholder
              </label>
              <input
                type="text"
                value={config.whatsapp}
                onChange={(e) => updateConfig('whatsapp', e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-100 text-xs focus:outline-none focus:border-amber-500"
                placeholder="[WHATSAPP NUMBER]"
              />
            </div>

            {/* Address */}
            <div>
              <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500" /> Business Address Placeholder
              </label>
              <input
                type="text"
                value={config.address}
                onChange={(e) => updateConfig('address', e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-100 text-xs focus:outline-none focus:border-amber-500"
                placeholder="[ADDRESS]"
              />
            </div>

            {/* Opening Hours */}
            <div>
              <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5 text-amber-500" /> Opening Hours Placeholder
              </label>
              <input
                type="text"
                value={config.openingHours}
                onChange={(e) => updateConfig('openingHours', e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-100 text-xs focus:outline-none focus:border-amber-500"
                placeholder="[OPENING HOURS]"
              />
            </div>

            {/* Prices */}
            <div className="pt-2 border-t border-zinc-800">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                Price Tag Placeholders
              </span>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] text-zinc-400 block mb-1">Car Wash Express</label>
                  <input
                    type="text"
                    value={config.expressPrice}
                    onChange={(e) => updateConfig('expressPrice', e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded px-2.5 py-1.5 text-zinc-100 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-zinc-400 block mb-1">Car Wash Executive</label>
                  <input
                    type="text"
                    value={config.executivePrice}
                    onChange={(e) => updateConfig('executivePrice', e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded px-2.5 py-1.5 text-zinc-100 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-zinc-400 block mb-1">Braai Platter</label>
                  <input
                    type="text"
                    value={config.platterPrice}
                    onChange={(e) => updateConfig('platterPrice', e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded px-2.5 py-1.5 text-zinc-100 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-zinc-400 block mb-1">Combo Deal</label>
                  <input
                    type="text"
                    value={config.comboPackagePrice}
                    onChange={(e) => updateConfig('comboPackagePrice', e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded px-2.5 py-1.5 text-zinc-100 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-zinc-800 flex items-center gap-3">
          <button
            onClick={resetConfig}
            className="w-1/3 py-2 px-3 rounded-lg border border-zinc-700 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset
          </button>
          <button
            onClick={() => setIsOwnerDrawerOpen(false)}
            className="w-2/3 py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20"
          >
            <Check className="w-4 h-4" />
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};
