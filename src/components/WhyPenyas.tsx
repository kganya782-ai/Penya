import React from 'react';
import { BENEFITS } from '../data/mockData';
import { Sparkles, ShieldCheck, Music, Clock, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const WhyPenyas: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-orange-400" />;
      case 'Music':
        return <Music className="w-6 h-6 text-amber-400" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-orange-400" />;
      default:
        return <HeartHandshake className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="why-penyas" className="py-16 lg:py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4 text-amber-400" />
            <span>The Penya Experience</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 tracking-tight">
            Why Choose Penya's?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            We offer a welcoming local destination where car care meets genuine South African hospitality, delicious braai food, and a relaxed community vibe.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="p-7 rounded-3xl bg-zinc-900/90 border border-zinc-800/90 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                {/* Icon box */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(benefit.icon)}
                </div>

                {/* Badge */}
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md">
                  {benefit.badge}
                </span>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-zinc-100 group-hover:text-amber-300 transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-amber-400/90 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                <span>Customer Favorite</span>
              </div>
            </div>
          ))}
        </div>

        {/* Community Atmosphere Bar */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-amber-950/20 via-zinc-900 to-orange-950/20 border border-zinc-800 text-center max-w-4xl mx-auto space-y-4">
          <h3 className="font-heading text-2xl font-bold text-zinc-100">
            A Great Weekend Hangout Spot
          </h3>
          <p className="text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Whether you are stopping by during lunch on a weekday or gathering with friends on Saturday, Penya's is built for memorable moments, clean vehicles, and good food.
          </p>
        </div>

      </div>
    </section>
  );
};
