import React, { createContext, useContext, useState, useEffect } from 'react';
import { PlaceholderConfig } from '../types';

const defaultPlaceholders: PlaceholderConfig = {
  phone: '0687136563',
  whatsapp: '0687136563',
  address: '30 Dudu Madisha Dr, Mahwelereng, Mokopane, 0601',
  openingHours: 'Mon - Sat: 8:00 AM – 6:00 PM | Sun: Closed',
  mapArea: '30 Dudu Madisha Dr, Mahwelereng, Mokopane, 0601',
  expressPrice: 'R80 - R100',
  executivePrice: 'R150 - R180',
  valetPrice: 'R350 - R450',
  platterPrice: 'R220 - R280',
  chopsPrice: 'R110 - R140',
  chickenPrice: 'R85 - R110',
  comboPackagePrice: 'R250 - R320',
};

interface PlaceholderContextType {
  highlightPlaceholders: boolean;
  setHighlightPlaceholders: (value: boolean) => void;
  presentationMode: boolean;
  setPresentationMode: (value: boolean) => void;
  isOwnerDrawerOpen: boolean;
  setIsOwnerDrawerOpen: (value: boolean) => void;
  config: PlaceholderConfig;
  updateConfig: (key: keyof PlaceholderConfig, value: string) => void;
  resetConfig: () => void;
  formatPlaceholder: (key: keyof PlaceholderConfig, labelHint?: string) => string;
}

const PlaceholderContext = createContext<PlaceholderContextType | undefined>(undefined);

export const PlaceholderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [highlightPlaceholders, setHighlightPlaceholders] = useState<boolean>(false);
  const [presentationMode, setPresentationMode] = useState<boolean>(true);
  const [isOwnerDrawerOpen, setIsOwnerDrawerOpen] = useState<boolean>(false);
  const [config, setConfig] = useState<PlaceholderConfig>(() => {
    const saved = localStorage.getItem('penya_placeholder_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...defaultPlaceholders,
          ...parsed,
          phone: (!parsed.phone || parsed.phone.includes('[')) ? defaultPlaceholders.phone : parsed.phone,
          whatsapp: (!parsed.whatsapp || parsed.whatsapp.includes('[')) ? defaultPlaceholders.whatsapp : parsed.whatsapp,
          address: (!parsed.address || parsed.address.includes('[')) ? defaultPlaceholders.address : parsed.address,
        };
      } catch (e) {
        return defaultPlaceholders;
      }
    }
    return defaultPlaceholders;
  });

  useEffect(() => {
    localStorage.setItem('penya_placeholder_config', JSON.stringify(config));
  }, [config]);

  const updateConfig = (key: keyof PlaceholderConfig, value: string) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const resetConfig = () => {
    setConfig(defaultPlaceholders);
  };

  const formatPlaceholder = (key: keyof PlaceholderConfig, labelHint?: string): string => {
    const val = config[key];
    if (val && !val.startsWith('[')) {
      return val;
    }
    return labelHint ? `[${labelHint.toUpperCase()}]` : (val || defaultPlaceholders[key] || '');
  };

  return (
    <PlaceholderContext.Provider
      value={{
        highlightPlaceholders,
        setHighlightPlaceholders,
        presentationMode,
        setPresentationMode,
        isOwnerDrawerOpen,
        setIsOwnerDrawerOpen,
        config,
        updateConfig,
        resetConfig,
        formatPlaceholder,
      }}
    >
      {children}
    </PlaceholderContext.Provider>
  );
};

export const usePlaceholder = () => {
  const context = useContext(PlaceholderContext);
  if (!context) {
    throw new Error('usePlaceholder must be used within a PlaceholderProvider');
  }
  return context;
};
