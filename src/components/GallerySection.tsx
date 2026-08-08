import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { Image, X, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  return (
    <section id="gallery" className="py-12 lg:py-20 bg-[#FDFBF7] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#C2410C] text-xs font-bold uppercase tracking-wider">
            <Image className="w-3.5 h-3.5" />
            <span>Promotional Gallery</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Life at Penya's
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Spotless car wash detailing, flame-grilled Shisanyama braai platters, and a vibrant local social atmosphere.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-4">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'carwash', label: 'Car Washing' },
              { id: 'shisanyama', label: 'Grilled Food' },
              { id: 'atmosphere', label: 'Social Vibe' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === tab.id
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-700 hover:text-stone-900 border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-stone-200 hover:border-[#C2410C] cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-xs aspect-[4/3]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover overlay icon */}
              <div className="absolute top-4 right-4 p-2 rounded-xl bg-stone-900/80 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption Box */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-stone-900/90 backdrop-blur-md border border-stone-700 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 block mb-1">
                  {item.category === 'carwash' ? 'Car Washing' : item.category === 'shisanyama' ? 'Grilled Food' : 'Social Atmosphere'}
                </span>
                <h4 className="font-heading text-base font-bold text-white leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-300 line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-2xl space-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-900/80 border border-stone-700 text-white hover:bg-stone-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-stone-950 flex items-center justify-center">
              <img
                src={activeLightbox.imageUrl}
                alt={activeLightbox.title}
                className="max-h-[70vh] w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-white border-t border-stone-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C] block mb-1">
                Penya's Gallery Showcase
              </span>
              <h3 className="font-heading text-2xl font-bold text-stone-900 mb-2">
                {activeLightbox.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {activeLightbox.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
