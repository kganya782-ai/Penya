import React from 'react';

interface PenyaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
}

export const PenyaLogo: React.FC<PenyaLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
}) => {
  // Scale factor based on size
  const sizeClasses = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24 sm:h-28',
  };

  const bgClasses = variant === 'dark' 
    ? 'bg-stone-950 text-white' 
    : 'bg-white text-stone-900 border border-stone-200';

  return (
    <div className={`inline-flex items-center gap-2.5 font-sans ${className}`}>
      {/* Visual Logo Badge */}
      <div className={`relative rounded-2xl p-2.5 flex items-center justify-center shrink-0 shadow-md ${bgClasses} ${sizeClasses[size]}`}>
        <svg
          viewBox="0 0 240 180"
          className="h-full w-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flame Graphic */}
          <path
            d="M120 15 C125 35 110 45 125 65 C135 40 155 45 150 20 C165 40 170 70 155 85 C145 95 130 95 120 95 C100 95 85 80 90 60 C92 50 100 40 102 30 C108 40 115 30 120 15 Z"
            fill="#EA580C"
          />
          <path
            d="M122 35 C126 48 116 54 126 68 C132 50 146 54 142 38 C152 52 154 72 144 82 C138 88 128 88 122 88 C108 88 98 78 102 64 C104 56 109 48 111 42 C114 48 119 42 122 35 Z"
            fill="#F97316"
          />
          <path
            d="M124 50 C127 58 120 62 127 72 C131 60 140 62 137 52 C143 62 144 75 138 82 C134 86 128 86 124 86 C114 86 108 78 111 68 C112 62 115 56 117 52 C119 56 122 52 124 50 Z"
            fill="#FACC15"
          />

          {/* Skewer with grilled meat */}
          <path
            d="M70 65 L95 30"
            stroke="#EA580C"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <rect
            x="74"
            y="36"
            width="22"
            height="14"
            rx="5"
            transform="rotate(-52 74 36)"
            fill="#C2410C"
            stroke="#9A3412"
            strokeWidth="2"
          />
          <line x1="72" y1="46" x2="80" y2="36" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
          <line x1="78" y1="51" x2="86" y2="41" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />

          {/* "penya" Title */}
          <text
            x="120"
            y="96"
            textAnchor="middle"
            fill="#DC2626"
            fontSize="52"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="-1"
          >
            penya
          </text>

          {/* "CarWash" Script */}
          <text
            x="115"
            y="132"
            textAnchor="middle"
            fill={variant === 'dark' ? '#FDE68A' : '#1E293B'}
            fontSize="32"
            fontWeight="700"
            fontStyle="italic"
            fontFamily="Georgia, serif"
          >
            CarWash
          </text>

          {/* Water drops */}
          <circle cx="195" cy="102" r="5" fill="#38BDF8" />
          <circle cx="206" cy="110" r="7" fill="#0284C7" />
          <circle cx="196" cy="118" r="4" fill="#38BDF8" />

          {/* Fork / Grill tool left */}
          <path
            d="M25 105 L55 140 M30 102 L38 111 M36 97 L44 106"
            stroke="#EA580C"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Car Graphic right bottom */}
          <path
            d="M145 158 C145 148 152 142 165 142 L185 142 C198 142 205 148 205 158 L208 165 C208 170 200 172 175 172 C150 172 142 170 142 165 Z"
            fill="#DC2626"
          />
          {/* Foam Bubbles on Car */}
          <circle cx="162" cy="140" r="6" fill="#38BDF8" />
          <circle cx="172" cy="136" r="8" fill="#E0F2FE" />
          <circle cx="184" cy="139" r="6" fill="#38BDF8" />

          {/* Divider line & SHISANYAMA */}
          <line x1="68" y1="148" x2="90" y2="148" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
          <text x="100" y="151" textAnchor="middle" fill="#EA580C" fontSize="14" fontWeight="900">&amp;</text>
          <line x1="110" y1="148" x2="132" y2="148" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />

          <text
            x="100"
            y="172"
            textAnchor="middle"
            fill="#EA580C"
            fontSize="18"
            fontWeight="900"
            letterSpacing="2"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            SHISANYAMA
          </text>
        </svg>
      </div>

      {/* Brand Text alongside logo if needed */}
      <div className="flex flex-col">
        <span className={`font-heading text-lg sm:text-xl font-black tracking-tight leading-tight ${
          variant === 'dark' ? 'text-white' : 'text-stone-900'
        }`}>
          PENYA'S
        </span>
        <span className={`text-[11px] sm:text-xs font-bold tracking-wide ${
          variant === 'dark' ? 'text-orange-400' : 'text-[#C2410C]'
        }`}>
          Carwash &amp; Shisanyama
        </span>
      </div>
    </div>
  );
};
