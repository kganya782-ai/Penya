import React from 'react';
import { usePlaceholder } from '../context/PlaceholderContext';
import { Phone, MessageSquare, MapPin, Clock, Navigation, ExternalLink, HelpCircle } from 'lucide-react';

interface ContactPageProps {
  onOpenInquiry: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenInquiry }) => {
  const { formatPlaceholder, highlightPlaceholders } = usePlaceholder();

  const phoneValue = formatPlaceholder('phone', 'PHONE NUMBER');
  const whatsappValue = formatPlaceholder('whatsapp', 'WHATSAPP NUMBER');
  const addressValue = formatPlaceholder('address', 'ADDRESS');
  const hoursValue = formatPlaceholder('openingHours', 'OPENING HOURS');

  const handlePhoneCall = () => {
    if (phoneValue && !phoneValue.startsWith('[')) {
      window.location.href = `tel:${phoneValue.replace(/\s+/g, '')}`;
    } else {
      onOpenInquiry();
    }
  };

  const handleWhatsApp = () => {
    if (whatsappValue && !whatsappValue.startsWith('[')) {
      const cleanNum = whatsappValue.replace(/[^0-9]/g, '');
      window.open(`https://wa.me/${cleanNum}?text=Hi%20Penya's,%20I'd%20like%20to%20inquire%20about%20your%20carwash%20and%20shisanyama!`, '_blank');
    } else {
      onOpenInquiry();
    }
  };

  return (
    <div className="py-12 lg:py-16 bg-[#FDFBF7] text-stone-900 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#C2410C] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Contact & Location</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-stone-900 tracking-tight">
            Find & Contact Penya's
          </h1>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            We look forward to hosting you! Get in touch directly, check our opening hours, or locate us.
          </p>
        </div>

        {/* Top Grid: Details + Map Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 1. Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-xs space-y-6">
              <h2 className="font-heading text-2xl font-extrabold text-stone-900 border-b border-stone-200 pb-4">
                Contact Details
              </h2>

              <div className="space-y-5 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-0.5">
                      Phone Number
                    </span>
                    <span
                      className={`font-semibold text-stone-900 text-base ${
                        highlightPlaceholders ? 'placeholder-highlight px-1 text-emerald-800' : ''
                      }`}
                    >
                      {phoneValue}
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 fill-emerald-600/20" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-0.5">
                      WhatsApp Number
                    </span>
                    <span
                      className={`font-semibold text-stone-900 text-base ${
                        highlightPlaceholders ? 'placeholder-highlight px-1 text-emerald-800' : ''
                      }`}
                    >
                      {whatsappValue}
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#C2410C] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-0.5">
                      Physical Address
                    </span>
                    <span
                      className={`font-semibold text-stone-900 text-base ${
                        highlightPlaceholders ? 'placeholder-highlight px-1 text-orange-800' : ''
                      }`}
                    >
                      {addressValue}
                    </span>
                  </div>
                </div>

                {/* Opening Hours & Weekly Schedule */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-sky-100 text-[#0369A1] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-1">
                      Business Operating Hours
                    </span>
                    <div className="bg-stone-50 rounded-2xl p-3 border border-stone-200 text-xs space-y-1">
                      <div className="flex items-center justify-between font-semibold text-stone-900">
                        <span>Monday – Friday:</span>
                        <span className="text-[#0369A1]">8:00 AM – 6:00 PM</span>
                      </div>
                      <div className="flex items-center justify-between font-semibold text-stone-900">
                        <span>Saturday:</span>
                        <span className="text-[#0369A1]">8:00 AM – 6:00 PM</span>
                      </div>
                      <div className="flex items-center justify-between font-semibold text-stone-500 pt-1 border-t border-stone-200/80">
                        <span>Sunday:</span>
                        <span className="text-stone-500 font-bold">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Location Map Placeholder Column (NO GOOGLE MAPS API) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <h2 className="font-heading text-2xl font-extrabold text-stone-900">
                  Find Penya's
                </h2>
                <span className="text-xs font-bold uppercase px-2.5 py-1 rounded-lg bg-stone-100 text-stone-600 border border-stone-200">
                  Location Card
                </span>
              </div>

              {/* Polished Map Placeholder Card (Strict prompt rule) */}
              <div className="rounded-2xl bg-stone-100 border-2 border-dashed border-stone-300 p-8 sm:p-12 text-center space-y-4 relative overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-stone-900 text-white flex items-center justify-center mx-auto shadow-md">
                  <Navigation className="w-7 h-7 text-orange-400" />
                </div>

                <div className="space-y-2 max-w-lg mx-auto">
                  <p className="font-heading text-xl font-extrabold text-stone-900">
                    Penya's Carwash & Shisanyama Location
                  </p>
                  
                  <p className="text-sm font-bold text-[#C2410C]">
                    30 Dudu Madisha Dr, Mahwelereng, Mokopane, 0601
                  </p>

                  <p className="text-xs text-stone-600 font-medium pt-1">
                    Located on Dudu Madisha Drive in Mahwelereng, Mokopane. Easy drive-in access with shaded seating and wash bays.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=30+Dudu+Madisha+Dr,+Mahwelereng,+Mokopane,+0601"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2 active:scale-95"
                  >
                    <Navigation className="w-4 h-4 text-orange-400" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                  </a>
                </div>
              </div>

              <p className="text-xs text-stone-500 text-center">
                Interactive map integration will be linked to the business address upon site purchase.
              </p>
            </div>
          </div>

        </div>

        {/* 3. Have a Question? Contact / Enquiry Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xs max-w-4xl mx-auto text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#C2410C] flex items-center justify-center mx-auto">
            <HelpCircle className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h2 className="font-heading text-3xl font-black text-stone-900">
              Have a question?
            </h2>
            <p className="text-base text-stone-600 max-w-md mx-auto">
              Get in touch with Penya's directly via phone call or WhatsApp message.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={handlePhoneCall}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Us</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
