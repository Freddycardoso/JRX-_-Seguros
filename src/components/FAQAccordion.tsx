'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FaqItem } from '@/src/data/seguros';
import { WhatsAppCTA } from './WhatsAppCTA';

interface FAQAccordionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
  productName?: string;
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  title = 'Perguntas Frequentes',
  subtitle = 'Tire suas dúvidas antes de solicitar a cotação no WhatsApp',
  productName = 'Geral',
  className = '',
}) => {
  // O primeiro item fica aberto por padrão para guiar o usuário imediatamente
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-8 sm:py-12 bg-transparent ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-400/20 px-3 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-sky-400/50 bg-[#0E2854] shadow-[0_12px_30px_rgba(2,6,23,0.8),0_0_20px_rgba(56,189,248,0.12)]'
                    : 'border-sky-400/15 bg-[#091D3E]/85 hover:border-sky-400/35 hover:bg-[#0B2247] shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer select-none"
                >
                  <h3 className="text-sm sm:text-base font-bold text-white pr-4 leading-snug m-0 font-sans">
                    {item.question}
                  </h3>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-sky-500 text-white rotate-180'
                        : 'bg-sky-950/60 text-sky-300 hover:bg-sky-900/60'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                      <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed border-t border-sky-400/10 pt-3">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Objection killer helper box */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#091D3E]/90 border border-sky-400/20 shadow-[0_12px_30px_rgba(2,6,23,0.7)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white">
              Sua dúvida não está listada aqui?
            </h4>
            <p className="text-xs text-slate-400">
              Pergunte diretamente aos consultores Paulo Martins ou André no WhatsApp.
            </p>
          </div>
          <WhatsAppCTA
            productName={productName}
            label="Tirar Dúvida no WhatsApp"
            size="sm"
            variant="whatsapp"
            className="btn-press"
          />
        </div>
      </div>
    </section>
  );
};
