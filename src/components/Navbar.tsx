import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { WhatsAppCTA } from './WhatsAppCTA';
import { JrxLogo } from './JrxLogo';
import { segurosData } from '@/src/data/seguros';

interface NavbarProps {
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath = '/' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pathname, setPathname] = useState(currentPath);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isHome = pathname === '/' || pathname === '';

  return (
    <header className="sticky top-4 sm:top-5 z-50 w-full max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-[#091D3E]/90 backdrop-blur-2xl border border-sky-400/20 rounded-full shadow-[0_14px_35px_rgba(2,8,22,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-center justify-between h-16 px-6 relative">
        {/* Subtle noise inside the nav */}
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none rounded-full overflow-hidden" />
          {/* Brand Wordmark oficial com logo vetorizado e fundo transparente */}
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg py-1"
            aria-label="JRX Seguros - Ir para página inicial"
          >
            <JrxLogo variant="dark" className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-[1.02]" />
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-200" aria-label="Navegação principal">
            <a
              href="/"
              className={`hover:text-sky-300 transition-colors ${
                isHome ? 'text-sky-400 font-bold' : ''
              }`}
            >
              Início
            </a>

            {/* Seguros Dropdown */}
            <div
              ref={dropdownRef}
              className="relative py-2"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-sky-300 transition-colors py-1 cursor-pointer select-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-label="Abrir menu de seguros"
              >
                <span>Nossos Seguros</span>
                <span className={`text-xs text-sky-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>▾</span>
              </button>

              {dropdownOpen && (
                <div className="absolute top-[calc(100%+0.75rem)] left-1/2 -translate-x-1/2 w-[540px] p-4 bg-[#07172E] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-sky-400/35 grid grid-cols-2 gap-1.5 animate-in fade-in zoom-in-95 duration-150 z-50">
                  {segurosData.map((item) => (
                    <a
                      key={item.id}
                      href={`/seguro/${item.id}`}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-sky-500/15 transition-colors text-left group"
                    >
                      <div className="w-2 h-2 rounded-full bg-sky-400 mt-1.5 group-hover:scale-125 transition-transform shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                          {item.nome}
                        </div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">
                          {item.titulo}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href={isHome ? '#nossos-seguros' : '/#nossos-seguros'}
              className="hover:text-sky-300 transition-colors"
            >
              Ramos de Atuação
            </a>

            <a
              href={isHome ? '#sinistro' : '/#sinistro'}
              className="hover:text-sky-300 transition-colors text-sky-300 font-medium"
            >
              Sinistro &amp; Suporte
            </a>

            <a
              href={isHome ? '#diferenciais' : '/#diferenciais'}
              className="hover:text-sky-300 transition-colors"
            >
              Por que a JRX
            </a>

            <a
              href={isHome ? '#contato' : '/#contato'}
              className="hover:text-sky-300 transition-colors"
            >
              Passos - MG
            </a>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <WhatsAppCTA
              productName="Geral"
              label="Cotar no WhatsApp"
              size="sm"
              variant="whatsapp"
              fullWidthMobile={false}
              className="!px-4 !py-2.5 text-xs shadow-none min-h-[42px] btn-press"
            />
          </div>

          {/* Mobile hamburger trigger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-sky-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 min-h-[48px] min-w-[48px] flex items-center justify-center cursor-pointer"
              aria-label="Alternar menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 border border-sky-400/20 bg-[#091D3E]/95 backdrop-blur-2xl rounded-2xl px-4 pt-3 pb-6 space-y-3 shadow-[0_20px_50px_rgba(2,6,23,0.9)] animate-in slide-in-from-top-4 duration-200">
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-100 hover:bg-sky-500/10 min-h-[44px] flex items-center"
          >
            Início
          </a>

          <div className="pt-2 pb-1 border-t border-sky-400/10">
            <span className="px-3 text-xs font-bold uppercase tracking-wider text-sky-400/70">
              Todos os 11 Ramos
            </span>
            <div className="grid grid-cols-2 gap-1.5 mt-2">
              {segurosData.map((item) => (
                <a
                  key={item.id}
                  href={`/seguro/${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-semibold text-slate-200 hover:text-sky-300 hover:bg-sky-500/10 rounded-lg flex items-center justify-between min-h-[40px]"
                >
                  <span className="truncate">{item.nome}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 shrink-0 text-sky-400" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-sky-400/10">
            <WhatsAppCTA
              productName="Geral"
              label="Falar no WhatsApp Agora"
              size="md"
              variant="whatsapp"
              fullWidthMobile={true}
              showSubtitle={true}
            />
          </div>
        </div>
      )}
    </header>
  );
};
