'use client';

import React, { useState } from 'react';
import { useLazyBackground } from '@/src/hooks/useLazyBackground';

interface PatrimonyCtaBackgroundProps {
  className?: string;
}

/**
 * Fundo de Patrimônio, Residencial e Empresarial para o CTA Inferior
 * Implementado com Lazy Loading estrito por IntersectionObserver:
 * - Como fica localizado ao final da página (abaixo da dobra), NENHUM recurso
 *   gráfico é requisitado ou decodificado durante o carregamento inicial da página.
 * - Quando o visitante rola em direção ao CTA (antecedência de 300px), a imagem
 *   é carregada de forma assíncrona (decoding="async" e loading="lazy") com transição suave.
 * - Garante impacto ZERO no carregamento inicial da página e economia de dados no mobile.
 */
export const PatrimonyCtaBackground: React.FC<PatrimonyCtaBackgroundProps> = ({
  className = '',
}) => {
  const { containerRef, shouldLoad, isLoaded, handleImageLoad } = useLazyBackground({
    isAboveTheFold: false,
    rootMargin: '300px',
  });

  const [hasError, setHasError] = useState(false);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Fundo Base Slate 950 sólido para evitar qualquer layout shift */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* 2. Imagem Gráfica de Patrimônio carregada sob demanda via IntersectionObserver */}
      {shouldLoad && !hasError && (
        <img
          src="/assets/patrimony-cta.svg"
          alt=""
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          onLoad={handleImageLoad}
          onError={() => setHasError(true)}
          className={`absolute right-0 bottom-0 w-full sm:w-[85%] md:w-[70%] lg:w-[55%] h-full object-cover object-bottom mix-blend-screen transition-opacity duration-700 ease-out ${
            isLoaded ? 'opacity-35' : 'opacity-0'
          }`}
        />
      )}

      {/* 3. Fallback inline caso haja erro de rede ou restrição de asset */}
      {shouldLoad && hasError && (
        <svg
          className="absolute right-0 bottom-0 w-full sm:w-[85%] md:w-[70%] lg:w-[55%] h-full object-cover object-bottom opacity-35 mix-blend-screen transition-opacity"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMaxYMax slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fallbackCtaRoofRim" x1="200" y1="120" x2="850" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
              <stop offset="30%" stopColor="#93C5FD" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="fallbackFacade" x1="300" y1="200" x2="800" y2="550" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#334155" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0A0F1D" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <polygon
            points="260,540 260,320 480,240 480,160 840,160 840,540"
            fill="url(#fallbackFacade)"
            stroke="#475569"
            strokeWidth="1.5"
          />
          <path
            d="M 440 160 L 890 160 L 870 178 L 470 178 Z"
            fill="#0B132B"
            stroke="url(#fallbackCtaRoofRim)"
            strokeWidth="3"
          />
        </svg>
      )}

      {/* 4. Gradientes de Fusão e Leitura (Garantem contraste perfeito para o texto e CTAs) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent sm:w-[65%]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-slate-950/80 to-transparent" />
    </div>
  );
};
