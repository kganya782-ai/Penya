import React, { useState, useEffect } from 'react';
import { usePlaceholder } from '../context/PlaceholderContext';
import { PenyaLogo } from './PenyaLogo';
import { Menu, X, Clock, MessageSquare, Phone } from 'lucide-react';
import { PageType } from '../types';

interface HeaderProps {
  activePage: PageType;
  onSelectPage: (page: PageType) => void;
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onSelectPage, onOpenInquiry }) => {
  const { formatPlaceholder, highlightPlaceholders } = usePlaceholder();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pages: { id: PageType; name: string }[] = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'services', name: 'Services' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleNavClick = (pageId: PageType) => {
    onSelectPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#FDFBF7]/98 backdrop-blur-md border-stone-200 shadow-sm py-2.5'
          : 'bg-[#FDFBF7]/90 backdrop-blur-sm border-stone-200/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Component */}
        <button
          onClick={() => handleNavClick('home')}
          className="group text-left active:scale-98 transition-transform"
        >
          <PenyaLogo size="sm" variant="dark" />
        </button>

        {/* Desktop Navigation - 4 Pages */}
        <nav className="hidden lg:flex items-center gap-1">
          {pages.map((p) => {
            const isActive = activePage === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handleNavClick(p.id)}
                className={`px-4 py-2 text-sm font-bold rounded-xl transition-all ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-700 hover:text-[#C2410C] hover:bg-stone-100'
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </nav>

        {/* Quick info & Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Phone Badge */}
          <a
            href={`tel:${formatPlaceholder('phone', 'PHONE NUMBER').replace(/\s+/g, '')}`}
            className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-bold hover:bg-emerald-100 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/20" />
            <span>{formatPlaceholder('phone', 'PHONE NUMBER')}</span>
          </a>

          {/* Primary CTA button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="px-4 py-2.5 rounded-xl bg-[#C2410C] hover:bg-[#9A3412] text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-950/10 transition-all flex items-center gap-2 active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-stone-100 text-stone-800 hover:text-stone-950 border border-stone-200 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-stone-200 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-1">
            {pages.map((p) => {
              const isActive = activePage === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => handleNavClick(p.id)}
                  className={`w-full text-left px-4 py-3 text-sm font-bold rounded-xl transition-colors ${
                    isActive
                      ? 'bg-stone-900 text-white'
                      : 'text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  {p.name}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-stone-200 space-y-3">
            <div className="flex items-center gap-2 text-xs text-stone-700 px-2 font-semibold">
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call / WhatsApp:</span>
              <span className="text-stone-900 font-bold">
                {formatPlaceholder('phone', 'PHONE NUMBER')}
              </span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('contact');
              }}
              className="w-full py-3 rounded-xl bg-[#C2410C] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Contact Penya's</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
