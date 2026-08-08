import React from 'react';
import { usePlaceholder } from '../context/PlaceholderContext';
import { Eye, Edit3, Info, Sparkles, X, Check, RefreshCw } from 'lucide-react';

export const PresentationToolbar: React.FC = () => {
  const {
    highlightPlaceholders,
    setHighlightPlaceholders,
    presentationMode,
    setPresentationMode,
    isOwnerDrawerOpen,
    setIsOwnerDrawerOpen,
    resetConfig,
  } = usePlaceholder();

  if (!presentationMode) {
    return (
      <button
        onClick={() => setPresentationMode(true)}
        className="fixed bottom-4 right-4 z-40 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-4 py-2.5 rounded-full font-bold shadow-lg shadow-amber-500/20 flex items-center gap-2 text-sm transition-all"
        title="Open Owner Presentation Controls"
      >
        <Sparkles className="w-4 h-4" />
        <span>Owner Presentation Mode</span>
      </button>
    );
  }

  return (
    <div className="bg-gradient-to-r from-zinc-900 via-amber-950/80 to-zinc-900 border-b border-amber-500/30 text-zinc-200 py-2 px-4 sticky top-0 z-50 shadow-md text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-amber-500 text-zinc-950 text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 rounded tracking-wide flex items-center gap-1">
            <Sparkles className="w-3 h-3 fill-zinc-950" />
            PROTOTYPE PRESENTATION
          </span>
          <p className="text-zinc-300 hidden md:block">
            Designed for <strong className="text-amber-400 font-semibold">Penya's Carwash & Shisanyama</strong>. All details use clearly labelled placeholders.
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
          {/* Toggle Highlight */}
          <button
            onClick={() => setHighlightPlaceholders(!highlightPlaceholders)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 border ${
              highlightPlaceholders
                ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                : 'bg-zinc-800/80 border-zinc-700 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{highlightPlaceholders ? 'Placeholders Highlighted' : 'Highlight Placeholders'}</span>
          </button>

          {/* Fill Real Data Drawer */}
          <button
            onClick={() => setIsOwnerDrawerOpen(true)}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-all flex items-center gap-1.5 font-semibold"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Customize Info</span>
          </button>

          {/* Reset */}
          <button
            onClick={resetConfig}
            className="p-1 rounded-md text-zinc-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors"
            title="Reset Placeholders"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>

          {/* Close toolbar */}
          <button
            onClick={() => setPresentationMode(false)}
            className="p-1 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors ml-1"
            title="Hide Banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
