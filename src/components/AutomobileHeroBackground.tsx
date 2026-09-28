'use client';

import React, { useState } from 'react';
import { useLazyBackground } from '@/src/hooks/useLazyBackground';

interface AutomobileHeroBackgroundProps {
  className?: string;
}

/**
 * Fundo Automotivo Premium e Discreto para o Hero da JRX Seguros
 * Implementado com Lazy Loading e Carregamento Assíncrono Otimizado:
 * - Base Slate 950 com gradientes protetores montada imediatamente (CLS = 0).
 * - Gráfico da silhueta automotiva carregado de forma assíncrona e diferida (requestIdleCallback),
 *   garantindo que o carregamento da página principal, FCP e LCP dos textos e botões de conversão
 *   sejam prioritários e sem qualquer impacto de desempenho.
 * - Suporte nativo a decoding="async" e loading="lazy" com transição suave de opacidade.
 */
export const AutomobileHeroBackground: React.FC<AutomobileHeroBackgroundProps> = ({
  className = '',
}) => {
  const { containerRef, shouldLoad, isLoaded, handleImageLoad } = useLazyBackground({
    isAboveTheFold: true,
  });

  const [hasError, setHasError] = useState(false);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Base Canvas Imediata: Slate 950 sólido para evitar qualquer layout shift */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* 2. Imagem de fundo em Lazy Loading e decodificação assíncrona */}
      {shouldLoad && !hasError && (
        <img
          src="/assets/automobile-hero.svg"
          alt=""
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          onLoad={handleImageLoad}
          onError={() => setHasError(true)}
          className={`absolute right-0 bottom-0 w-full sm:w-[85%] md:w-[70%] lg:w-[58%] h-full object-cover object-bottom mix-blend-screen transition-opacity duration-700 ease-out ${
            isLoaded ? 'opacity-40' : 'opacity-0'
          }`}
        />
      )}

      {/* 3. Fallback de alta fidelidade caso o arquivo estático falhe em algum ambiente */}
      {shouldLoad && hasError && (
        <svg
          className="absolute right-0 bottom-0 w-full sm:w-[85%] md:w-[70%] lg:w-[58%] h-full object-cover object-bottom opacity-40 mix-blend-screen transition-opacity"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMaxYMax slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fallbackRoofRim" x1="100" y1="180" x2="800" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
              <stop offset="35%" stopColor="#93C5FD" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#E2E8F0" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="fallbackBody" x1="400" y1="300" x2="900" y2="520" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#334155" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path
            d="M 120 420 C 140 400, 180 380, 240 375 C 300 370, 360 365, 410 320 C 470 260, 560 215, 680 220 C 770 225, 830 255, 890 320 C 930 360, 960 385, 990 405 L 990 480 L 860 480 C 860 410, 750 410, 750 480 L 420 480 C 420 410, 310 410, 310 480 L 160 480 C 130 465, 115 445, 120 420 Z"
            fill="url(#fallbackBody)"
            stroke="#475569"
            strokeWidth="1.5"
          />
          <path
            d="M 410 320 C 470 260, 560 215, 680 220 C 770 225, 830 255, 890 320 C 800 315, 660 310, 530 315 Z"
            fill="#0B132B"
            stroke="url(#fallbackRoofRim)"
            strokeWidth="3"
          />
        </svg>
      )}

      {/* 4. Gradientes de Fusão e Leitura (Garantem contraste perfeito e elegância) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent sm:w-[65%]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-slate-950/90 to-transparent" />
    </div>
  );
};
