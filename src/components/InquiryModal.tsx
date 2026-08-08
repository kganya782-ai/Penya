import React, { useState } from 'react';
import { usePlaceholder } from '../context/PlaceholderContext';
import { CAR_WASH_SERVICES, SHISANYAMA_MENU } from '../data/mockData';
import { CarWashService, ShisanyamaMenuItem } from '../types';
import { X, Check, Send, Car, Flame, MessageCircle } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: CarWashService | null;
  preselectedMenuItem?: ShisanyamaMenuItem | null;
  isComboMode?: boolean;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedMenuItem,
  isComboMode = false,
}) => {
  const { formatPlaceholder } = usePlaceholder();
  const [submitted, setSubmitted] = useState(false);
  const [selectedWashId, setSelectedWashId] = useState<string>(
    preselectedService?.id || CAR_WASH_SERVICES[1].id
  );
  const [selectedFoodId, setSelectedFoodId] = useState<string>(
    preselectedMenuItem?.id || SHISANYAMA_MENU[0].id
  );
  const [includeFood, setIncludeFood] = useState<boolean>(isComboMode || !!preselectedMenuItem);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleType, setVehicleType] = useState('Sedan / Hatchback');
  const [visitDate, setVisitDate] = useState('Today / This Weekend');

  if (!isOpen) return null;

  const currentWash = CAR_WASH_SERVICES.find((s) => s.id === selectedWashId) || CAR_WASH_SERVICES[0];
  const currentFood = SHISANYAMA_MENU.find((m) => m.id === selectedFoodId) || SHISANYAMA_MENU[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Penya's! My name is ${name || 'Customer'}.\n\nI would like to inquire / order:\n` +
      `- Wash Request: ${currentWash.title}\n` +
      `${includeFood ? `- Food Item: ${currentFood.title}\n` : ''}` +
      `- Vehicle Type: ${vehicleType}\n` +
      `- Planned Visit: ${visitDate}\n` +
      `- Contact Phone: ${phone || 'Not provided'}`
    );
    window.open(`https://wa.me/27687136563?text=${text}`, '_blank');
    onClose();
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Penya's! My name is ${name || 'Customer'}. I'd like to inquire about:\n- Car Wash: ${currentWash.title}\n${
        includeFood ? `- Food Platter: ${currentFood.title}\n` : ''
      }- Vehicle: ${vehicleType}\n- Planned Visit: ${visitDate}\nPhone: ${phone || '[Phone]'}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200 text-stone-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-stone-100 border border-stone-200 text-stone-600 hover:text-stone-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-stone-900">
              Inquiry Received!
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xs mx-auto leading-relaxed">
              Thank you {name || 'valued customer'}. Penya's team is ready to welcome you!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
            {/* Header */}
            <div>
              <span className="text-[#C2410C] font-extrabold text-xs uppercase tracking-wider block mb-1">
                Plan Your Visit
              </span>
              <h3 className="font-heading text-2xl font-bold text-stone-900">
                Pre-Order & Wash Inquiry
              </h3>
            </div>

            {/* Wash Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                <Car className="w-4 h-4 text-[#0369A1]" /> Select Car Wash Service
              </label>
              <select
                value={selectedWashId}
                onChange={(e) => setSelectedWashId(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-stone-900 focus:outline-none focus:border-[#C2410C] text-xs font-medium"
              >
                {CAR_WASH_SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title} (From R{formatPlaceholder('expressPrice', 'CAR WASH PRICE')})
                  </option>
                ))}
              </select>
            </div>

            {/* Toggle Food Combo */}
            <div className="p-3.5 rounded-2xl bg-orange-50/60 border border-orange-200/70 space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeFood}
                  onChange={(e) => setIncludeFood(e.target.checked)}
                  className="rounded border-stone-300 text-[#C2410C] focus:ring-[#C2410C] w-4 h-4"
                />
                <span className="font-bold text-stone-900 text-xs flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-orange-600 fill-orange-500/20" /> Add Shisanyama Braai Meal Platter?
                </span>
              </label>

              {includeFood && (
                <div className="pt-2 border-t border-orange-200/80 space-y-1">
                  <select
                    value={selectedFoodId}
                    onChange={(e) => setSelectedFoodId(e.target.value)}
                    className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-stone-900 focus:outline-none focus:border-[#C2410C] text-xs"
                  >
                    {SHISANYAMA_MENU.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.title} (R{formatPlaceholder('platterPrice', 'FOOD PRICE')})
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-stone-900 text-xs focus:outline-none focus:border-[#C2410C]"
                  placeholder="e.g. Lerato"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Your Phone</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-stone-900 text-xs focus:outline-none focus:border-[#C2410C]"
                  placeholder="e.g. 082 000 0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Vehicle Type</label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-stone-900 text-xs focus:outline-none focus:border-[#C2410C]"
                >
                  <option value="Sedan / Hatchback">Sedan / Hatchback</option>
                  <option value="SUV / Crossover">SUV / Crossover</option>
                  <option value="Bakkie / Single-Double Cab">Bakkie / Single-Double Cab</option>
                  <option value="Taxi / Minibus">Taxi / Minibus</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Planned Visit</label>
                <select
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-stone-900 text-xs focus:outline-none focus:border-[#C2410C]"
                >
                  <option value="Today">Today</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="This Weekend">This Weekend</option>
                  <option value="Next Week">Next Week</option>
                </select>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 space-y-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send Order / Inquiry via WhatsApp</span>
              </button>

              <p className="text-[11px] text-stone-500 text-center">
                Clicking send will format your details and open WhatsApp directly to Penya's (068 713 6563).
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
