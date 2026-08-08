import React, { useState } from 'react';
import { usePlaceholder } from '../context/PlaceholderContext';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2, Navigation, Compass, Sparkles } from 'lucide-react';

export const LocationContactSection: React.FC = () => {
  const { formatPlaceholder, highlightPlaceholders } = usePlaceholder();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceInterest: 'both',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', serviceInterest: 'both', message: '' });
    }, 5000);
  };

  const handleWhatsAppClick = () => {
    const phone = formatPlaceholder('whatsapp', 'WHATSAPP NUMBER');
    const text = encodeURIComponent("Hi Penya's! I'm interested in visiting for a car wash and Shisanyama braai meal.");
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Visit Us & Get In Touch</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 tracking-tight">
            Location & Contact Details
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Come visit Penya's Carwash & Shisanyama today. All contact info below is structured with clearly labelled placeholders ready for final deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Details & Map Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address Box */}
              <div className="p-5 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>Physical Address</span>
                </div>
                <div
                  className={`font-heading text-base font-bold text-zinc-100 ${
                    highlightPlaceholders ? 'placeholder-highlight px-1 text-amber-300' : ''
                  }`}
                >
                  {formatPlaceholder('address', 'ADDRESS')}
                </div>
                <p className="text-xs text-zinc-400">
                  Easy access with ample wash bays and shaded outdoor seating.
                </p>
              </div>

              {/* Phone Box */}
              <div className="p-5 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>Phone Inquiries</span>
                </div>
                <div
                  className={`font-heading text-base font-bold text-zinc-100 ${
                    highlightPlaceholders ? 'placeholder-highlight px-1 text-amber-300' : ''
                  }`}
                >
                  {formatPlaceholder('phone', 'PHONE NUMBER')}
                </div>
                <p className="text-xs text-zinc-400">
                  Call ahead for group platter reservations or valet bookings.
                </p>
              </div>

              {/* WhatsApp Box */}
              <div className="p-5 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp Chat</span>
                </div>
                <div
                  className={`font-heading text-base font-bold text-zinc-100 ${
                    highlightPlaceholders ? 'placeholder-highlight px-1 text-amber-300' : ''
                  }`}
                >
                  {formatPlaceholder('whatsapp', 'WHATSAPP NUMBER')}
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              {/* Hours Box */}
              <div className="p-5 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Opening Hours</span>
                </div>
                <div
                  className={`font-heading text-base font-bold text-zinc-100 ${
                    highlightPlaceholders ? 'placeholder-highlight px-1 text-amber-300' : ''
                  }`}
                >
                  {formatPlaceholder('openingHours', 'OPENING HOURS')}
                </div>
                <p className="text-xs text-zinc-400">
                  Open 7 days a week including public holidays.
                </p>
              </div>

            </div>

            {/* Interactive Map Simulator Container */}
            <div className="rounded-3xl p-6 bg-zinc-900 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-amber-500" />
                  <span className="font-heading text-lg font-bold text-zinc-100">
                    Location Map Container
                  </span>
                </div>
                <span
                  className={`text-xs font-bold ${
                    highlightPlaceholders ? 'placeholder-highlight px-2 py-0.5 text-amber-300' : 'text-amber-400'
                  }`}
                >
                  {formatPlaceholder('mapArea', 'MAP LOCATION')}
                </span>
              </div>

              {/* Visual Simulated Map Display */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 flex items-center justify-center p-6 text-center group">
                <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

                <div className="relative z-10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-zinc-950 flex items-center justify-center mx-auto shadow-xl shadow-amber-500/30 animate-bounce">
                    <MapPin className="w-6 h-6 fill-zinc-950" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-zinc-100">
                      Penya's Carwash & Shisanyama
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {formatPlaceholder('address', 'ADDRESS')}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700 text-xs text-amber-400 font-semibold">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Interactive Map Embed Placeholder</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Message / Pre-order Form Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl space-y-6">
              <div>
                <span className="text-amber-500 font-bold text-xs uppercase tracking-wider block mb-1">
                  Send a Quick Message
                </span>
                <h3 className="font-heading text-2xl font-bold text-zinc-100">
                  Pre-Order or Inquiry
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Got questions about large group platters or valet services? Leave a message below.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-amber-400 mx-auto" />
                  <h4 className="font-heading text-lg font-bold text-zinc-100">
                    Message Sent!
                  </h4>
                  <p className="text-xs text-zinc-300">
                    Thank you for reaching out to Penya's. We look forward to welcoming you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-zinc-100 focus:outline-none focus:border-amber-500 text-xs"
                      placeholder="e.g. Sipho / Thabo"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Phone or WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-zinc-100 focus:outline-none focus:border-amber-500 text-xs"
                      placeholder="e.g. 082 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Interested In</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-zinc-100 focus:outline-none focus:border-amber-500 text-xs"
                    >
                      <option value="both">Car Wash + Shisanyama Combo</option>
                      <option value="carwash">Car Wash Only</option>
                      <option value="shisanyama">Shisanyama / Braai Food Only</option>
                      <option value="group">Group / Event Platter Reservation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Message or Special Request</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-zinc-100 focus:outline-none focus:border-amber-500 text-xs"
                      placeholder="e.g. Looking to visit Saturday afternoon with 4 friends."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-zinc-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-4 h-4 fill-zinc-950" />
                    <span>Send Message Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
