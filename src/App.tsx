import React, { useState } from 'react';
import { PlaceholderProvider } from './context/PlaceholderContext';
import { PresentationToolbar } from './components/PresentationToolbar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HomeAboutIntro } from './components/HomeAboutIntro';
import { GallerySection } from './components/GallerySection';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { OwnerEditDrawer } from './components/OwnerEditDrawer';
import { CarWashService, ShisanyamaMenuItem, PageType } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<PageType>('home');
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<CarWashService | null>(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState<ShisanyamaMenuItem | null>(null);
  const [isComboMode, setIsComboMode] = useState(false);

  const handleSelectPage = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = () => {
    setSelectedService(null);
    setSelectedMenuItem(null);
    setIsComboMode(false);
    setIsInquiryModalOpen(true);
  };

  const handleSelectService = (service: CarWashService) => {
    setSelectedService(service);
    setSelectedMenuItem(null);
    setIsComboMode(false);
    setIsInquiryModalOpen(true);
  };

  const handleSelectMenuItem = (item: ShisanyamaMenuItem) => {
    setSelectedService(null);
    setSelectedMenuItem(item);
    setIsComboMode(false);
    setIsInquiryModalOpen(true);
  };

  return (
    <PlaceholderProvider>
      <div className="min-h-screen bg-[#FDFBF7] text-stone-900 flex flex-col font-sans selection:bg-orange-200 selection:text-stone-900">
        {/* Presentation toolbar for business owner presentation */}
        <PresentationToolbar />

        {/* Navigation Bar */}
        <Header
          activePage={activePage}
          onSelectPage={handleSelectPage}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Main Content Pages */}
        <main className="flex-1">
          {activePage === 'home' && (
            <>
              {/* 1. Hero Section */}
              <Hero
                onOpenInquiry={handleOpenInquiry}
                onNavigateContact={() => handleSelectPage('contact')}
              />

              {/* 2. About Penya's Short Intro & What We Offer */}
              <HomeAboutIntro
                onNavigateServices={() => handleSelectPage('services')}
                onNavigateContact={() => handleSelectPage('contact')}
              />

              {/* 3. Promotional Gallery */}
              <GallerySection />

              {/* 4. Final CTA */}
              <FinalCTA
                onOpenInquiry={handleOpenInquiry}
                onNavigateContact={() => handleSelectPage('contact')}
              />
            </>
          )}

          {activePage === 'about' && (
            <AboutPage
              onNavigateContact={() => handleSelectPage('contact')}
            />
          )}

          {activePage === 'services' && (
            <ServicesPage
              onSelectService={handleSelectService}
              onSelectMenuItem={handleSelectMenuItem}
              onOpenInquiry={handleOpenInquiry}
            />
          )}

          {activePage === 'contact' && (
            <ContactPage
              onOpenInquiry={handleOpenInquiry}
            />
          )}
        </main>

        {/* Footer */}
        <Footer onSelectPage={handleSelectPage} />

        {/* Inquiry / WhatsApp Pre-Order Modal */}
        <InquiryModal
          isOpen={isInquiryModalOpen}
          onClose={() => setIsInquiryModalOpen(false)}
          preselectedService={selectedService}
          preselectedMenuItem={selectedMenuItem}
          isComboMode={isComboMode}
        />

        {/* Owner Live Editor Drawer */}
        <OwnerEditDrawer />
      </div>
    </PlaceholderProvider>
  );
}
