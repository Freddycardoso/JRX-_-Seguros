import React from 'react';

interface JrxLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showSubtext?: boolean;
}

/**
 * Logotipo Oficial da JRX Seguros
 */
export const JrxLogo: React.FC<JrxLogoProps> = ({
  className = 'h-11 sm:h-12 w-auto',
}) => {
  return (
    <picture>
      <source srcSet="/logo-jrx.webp" type="image/webp" />
      <img
        src="/logo-jrx.png"
        alt="JRX Seguros - Consultoria Especializada em Seguros Unidade Passos MG"
        width={200}
        height={56}
        className={`${className} object-contain`}
        loading="eager"
        decoding="async"
      />
    </picture>
  );
};

