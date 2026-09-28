import React, { useState } from 'react';
import { Car, Heart, Home, Building2, Sun, Tractor, ArrowRight, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl, SITE_CONFIG } from '@/src/config/site';

interface QuickOption {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  slug: string;
}

const QUICK_OPTIONS: QuickOption[] = [
  {
    id: 'automovel',
    name: 'Seguro Automóvel',
    subtitle: 'Carros, motos e frotas',
    icon: Car,
    slug: 'automovel',
  },
  {
    id: 'vida',
    name: 'Seguro de Vida',
    subtitle: 'Proteção familiar e saúde',
    icon: Heart,
    slug: 'vida',
  },
  {
    id: 'residencial',
    name: 'Seguro Residencial',
    subtitle: 'Casas e apartamentos',
    icon: Home,
    slug: 'residencial',
  },
  {
    id: 'empresarial',
    name: 'Seguro Empresarial',
    subtitle: 'PMEs, comércios e galpões',
    icon: Building2,
    slug: 'empresarial',
  },
  {
    id: 'fotovoltaico',
    name: 'Energia Solar',
    subtitle: 'Módulos e inversores',
    icon: Sun,
    slug: 'fotovoltaico',
  },
  {
    id: 'maquinas-agricolas',
    name: 'Máquinas Agrícolas',
    subtitle: 'Tratores e implementos',
    icon: Tractor,
    slug: 'maquinas-agricolas',
  },
];

export const QuickQuoteSelector: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('automovel');
  const activeOption = QUICK_OPTIONS.find((opt) => opt.id === selectedId) || QUICK_OPTIONS[0];

  const handleCotar = (option: QuickOption) => {
    const url = getWhatsAppUrl(option.name, SITE_CONFIG.brokers[0].phone);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="rounded-3xl bg-[#091D3E]/90 border border-sky-400/20 p-5 sm:p-7 shadow-[0_20px_50px_rgba(2,8,22,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] relative overflow-hidden backdrop-blur-xl">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-sky-400 mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Simulação Rápida</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              O que você deseja proteger hoje?
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300/80 max-w-xs">
            Selecione uma opção e receba um comparativo gratuito das melhores seguradoras no WhatsApp.
          </p>
        </div>

        {/* Grade de 6 Botões Rápidos com Camadas e Sombra */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-6 relative z-10">
          {QUICK_OPTIONS.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selectedId === opt.id;

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedId(opt.id)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[105px] border ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#13386E] to-[#0D254C] border-sky-400 shadow-[0_10px_25px_rgba(2,132,199,0.35),inset_0_1px_1px_rgba(255,255,255,0.25)] scale-[1.02]'
                    : 'bg-[#081730]/80 border-sky-400/10 hover:border-sky-400/30 hover:bg-[#0C2245] active:scale-[0.97]'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2.5 transition-colors ${
                    isSelected ? 'bg-sky-400 text-[#091D3E]' : 'bg-sky-950/60 text-sky-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span
                    className={`block text-xs font-bold leading-tight ${
                      isSelected ? 'text-white' : 'text-slate-200'
                    }`}
                  >
                    {opt.name.replace('Seguro ', '')}
                  </span>
                  <span className="block text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                    {opt.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Rodapé do Seletor com CTA de Ação Imediata */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-sky-400/15 relative z-10">
          <div className="flex items-center gap-2 text-xs text-slate-300 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>
              Consultores <strong>Paulo Martins</strong> e <strong>André</strong> online agora para cotação de <strong>{activeOption.name}</strong>.
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`/seguro/${activeOption.slug}`}
              className="text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors py-2 px-3 rounded-lg hover:bg-sky-500/10 text-center whitespace-nowrap"
            >
              Ver detalhes do plano
            </a>

            <button
              type="button"
              onClick={() => handleCotar(activeOption)}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-xs sm:text-sm shadow-[0_10px_25px_rgba(16,185,129,0.35)] transition-all active:scale-[0.97] cursor-pointer"
            >
              <span>Cotar {activeOption.name.replace('Seguro ', '')} no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
