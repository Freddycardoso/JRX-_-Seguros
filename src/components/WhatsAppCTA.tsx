'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, trackWhatsAppConversion } from '@/src/config/site';

interface WhatsAppCTAProps {
  productName: string;
  label?: string;
  variant?: 'whatsapp' | 'gold' | 'navy' | 'white' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidthMobile?: boolean;
  className?: string;
  iconPosition?: 'left' | 'right';
  showSubtitle?: boolean;
  /**
   * Se definido, abre direto no WhatsApp daquele corretor específico.
   * Se não definido, abre o modal de escolha rápida entre Paulo Martins e André.
   */
  preferredBroker?: 'Paulo Martins' | 'André';
}

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.51 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43l-.48-.01c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.13.17 1.74 2.66 4.21 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
  </svg>
);

export const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({
  productName,
  label = 'Cotar no WhatsApp',
  variant = 'whatsapp',
  size = 'md',
  fullWidthMobile = true,
  className = '',
  iconPosition = 'left',
  showSubtitle = false,
  preferredBroker,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fechar com tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalOpen(false);
      }
    };
    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  // Se houver corretor preferido, gera link direto
  const targetBroker = preferredBroker
    ? SITE_CONFIG.brokers.find((b) => b.name.toLowerCase().includes(preferredBroker.toLowerCase()))
    : undefined;

  const directUrl = targetBroker ? getWhatsAppUrl(productName, targetBroker.phone) : undefined;

  // Premissa 4: Mobile First com altura mínima de toque de 48px
  const baseStyles =
    'group relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none shadow-sm hover:shadow-md active:scale-[0.99] cursor-pointer min-h-[48px] max-w-full';

  const sizeStyles = {
    sm: 'text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 min-h-[44px] sm:min-h-[48px]',
    md: 'text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-3.5 min-h-[48px]',
    lg: 'text-sm sm:text-base lg:text-lg px-4 py-3 sm:px-7 sm:py-4 min-h-[48px] sm:min-h-[52px]',
  }[size];

  const variantStyles = {
    whatsapp:
      'bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-emerald-900/10 focus-visible:ring-[#25D366]',
    gold: 'bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold focus-visible:ring-amber-500 shadow-amber-900/15',
    navy: 'bg-slate-900 hover:bg-slate-800 text-white focus-visible:ring-slate-900',
    white:
      'bg-white hover:bg-slate-50 text-slate-900 border border-slate-200/80 shadow-slate-900/5 focus-visible:ring-white',
    outline:
      'bg-transparent hover:bg-white/10 text-white border-2 border-white/60 hover:border-white focus-visible:ring-white',
  }[variant];

  const mobileWidthStyle = fullWidthMobile ? 'w-full sm:w-auto' : '';

  const handleClick = (e: React.MouseEvent) => {
    if (directUrl) {
      trackWhatsAppConversion(productName, targetBroker?.name);
    } else {
      e.preventDefault();
      setModalOpen(true);
    }
  };

  const handleBrokerSelect = (brokerName: string) => {
    trackWhatsAppConversion(productName, brokerName);
    setModalOpen(false);
  };

  const modalElement = modalOpen ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150"
      onClick={() => setModalOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-consultor-title"
    >
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 my-auto overflow-hidden animate-in zoom-in-95 duration-150 transform translate-y-3 sm:translate-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header do Modal com botão X generoso e bem visível */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <WhatsAppIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-consultor-title" className="text-base font-bold text-slate-900 leading-tight">
                Falar com um Consultor
              </h3>
              <p className="text-xs text-slate-500">
                Seguro {productName}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-600 my-4 leading-relaxed">
          Escolha com qual de nossos consultores especialistas você prefere falar no WhatsApp agora mesmo:
        </p>

        {/* Opções de Corretores */}
        <div className="space-y-3">
          {SITE_CONFIG.brokers.map((broker) => {
            const brokerUrl = getWhatsAppUrl(productName, broker.phone);
            return (
              <a
                key={broker.phone}
                href={brokerUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleBrokerSelect(broker.name)}
                className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all duration-150 group min-h-[54px]"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-blue-900 text-white font-bold flex items-center justify-center text-sm shadow-sm group-hover:bg-emerald-600 transition-colors">
                      {broker.name.charAt(0)}
                    </div>
                    {/* Delight: Indicador de Online Pulsante */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full z-10">
                      <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75 duration-1000"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                        {broker.name}
                      </div>
                      {/* Delight: Tag Online que surge no hover */}
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0">
                        Online
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 font-mono group-hover:text-emerald-700/80 transition-colors">
                      {broker.phoneFormatted}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366] text-white text-xs font-semibold shadow-sm group-hover:bg-[#20bd5a] transition-colors min-h-[36px]">
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chamar</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Rodapé com botão Fechar explícito e informações */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Atendimento em Passos - MG e todo o Brasil
          </span>
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="text-xs text-slate-500 hover:text-slate-800 font-semibold px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer min-h-[36px] flex items-center"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <a
        href={directUrl || '#'}
        onClick={handleClick}
        target={directUrl ? '_blank' : undefined}
        rel={directUrl ? 'noopener noreferrer' : undefined}
        aria-label={`${label} para ${productName}`}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${mobileWidthStyle} ${className}`}
      >
        <div className="flex items-center justify-center gap-2.5 max-w-full min-w-0">
          {iconPosition === 'left' && (
            <WhatsAppIcon className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110" />
          )}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left min-w-0">
            <span className="leading-snug break-words sm:whitespace-nowrap text-center sm:text-left">{label}</span>
            {showSubtitle && (
              <span className="text-[10px] sm:text-[11px] font-normal opacity-90 leading-tight mt-0.5">
                Atendimento por Paulo Martins ou André
              </span>
            )}
          </div>
          {iconPosition === 'right' && (
            <WhatsAppIcon className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110" />
          )}
        </div>
      </a>

      {/* Renderiza o modal via Portal no document.body para evitar qualquer corte de topo por containers ancestrais */}
      {mounted && typeof document !== 'undefined'
        ? createPortal(modalElement, document.body)
        : modalElement}
    </>
  );
};

