'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, trackWhatsAppConversion } from '@/src/config/site';
import { WhatsAppIcon } from './WhatsAppCTA';

interface FloatingWhatsAppProps {
  currentProduct?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentProduct }) => {
  const [isOpen, setIsOpen] = useState(false);

  const productName = currentProduct || 'Geral';

  const handleBrokerClick = (brokerName: string) => {
    trackWhatsAppConversion(productName, brokerName);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Popover Card com os dois Corretores (Paulo Martins e André) */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-4 text-slate-900 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800">
                  Consultores no WhatsApp
                </span>
              </div>
              <span className="text-[10px] text-emerald-600 font-semibold pl-4">
                ● Resposta média em &lt; 3 minutos
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 my-2.5 leading-relaxed">
            Atendimento 100% humano, sem robôs. Escolha com quem deseja falar sobre <strong>{productName}</strong>:
          </p>

          <div className="space-y-2">
            {SITE_CONFIG.brokers.map((broker) => {
              const url = getWhatsAppUrl(productName, broker.phone);
              return (
                <a
                  key={broker.phone}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleBrokerClick(broker.name)}
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-emerald-50/60 hover:border-emerald-400 transition-all group min-h-[48px]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-blue-900 text-white font-bold flex items-center justify-center text-xs group-hover:bg-emerald-600 transition-colors">
                      {broker.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-950">
                        {broker.name}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {broker.phoneFormatted}
                      </div>
                    </div>
                  </div>
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>

          <div className="mt-3 pt-2 border-t border-slate-100 text-center">
            <span className="text-[10px] text-slate-400">
              Rua dos Brandões, 231, sala 30 · Passos, MG
            </span>
          </div>
        </div>
      )}

      {/* Floating Trigger Button (FAB) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir opções de WhatsApp da JRX Seguros"
        aria-expanded={isOpen}
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 cursor-pointer min-h-[56px] min-w-[56px]"
      >
        {/* Subtle breathing radar ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10"
          style={{ animationDuration: '3s' }}
        />

        {isOpen ? (
          <X className="w-7 h-7 sm:w-8 sm:h-8" />
        ) : (
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
        )}

        {/* Status indicator dot */}
        <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white" />
        </span>
      </button>
    </div>
  );
};
