import React from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, trackWhatsAppConversion } from '@/src/config/site';
import { segurosData } from '@/src/data/seguros';
import { WhatsAppCTA, WhatsAppIcon } from './WhatsAppCTA';
import { JrxLogo } from './JrxLogo';

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-[#040C1A] text-slate-300 pt-14 pb-10 border-t border-sky-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-sky-950/80">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/" className="inline-block">
              <JrxLogo variant="dark" className="h-12 w-auto" />
            </a>

            <p className="text-xs sm:text-sm text-slate-300/80 max-w-sm leading-relaxed">
              Consultoria independente em seguros para proteger o seu patrimônio, a continuidade da sua empresa e o futuro da sua família com atendimento ágil, transparente e humanizado.
            </p>

            <div className="pt-1">
              <WhatsAppCTA
                productName="Geral"
                label="Falar com Paulo ou André"
                size="sm"
                variant="whatsapp"
                fullWidthMobile={false}
              />
            </div>
          </div>

          {/* Seguros Mais Procurados */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3.5">
              Nossos Seguros
            </h4>
            <ul className="space-y-2 text-xs text-slate-300/80">
              {segurosData.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <a
                    href={`/seguro/${item.id}`}
                    className="hover:text-sky-300 transition-colors inline-block"
                  >
                    {item.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluções Especializadas & B2B */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3.5">
              Especializados &amp; B2B
            </h4>
            <ul className="space-y-2 text-xs text-slate-300/80">
              {segurosData.slice(6).map((item) => (
                <li key={item.id}>
                  <a
                    href={`/seguro/${item.id}`}
                    className="hover:text-sky-300 transition-colors inline-block"
                  >
                    {item.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Canais Oficiais */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3.5">
              ENDEREÇO &amp; CONTATO
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-slate-300/90">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                {SITE_CONFIG.address}
                <br />
                <span className="text-slate-400 font-mono text-[11px]">CEP {SITE_CONFIG.cep}</span>
              </span>
            </div>

            <div className="space-y-2 pt-1">
              {SITE_CONFIG.brokers.map((broker) => {
                const url = getWhatsAppUrl('Geral', broker.phone);
                return (
                  <a
                    key={broker.phone}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors group"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>
                      <strong className="text-slate-200 group-hover:text-white">{broker.name}:</strong>{' '}
                      {broker.phoneFormatted}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300/80 pt-1">
              <Mail className="w-4 h-4 text-sky-400 shrink-0" aria-hidden="true" />
              <span>{SITE_CONFIG.email}</span>
            </div>

            <div className="flex items-start gap-2 text-xs text-slate-300/80">
              <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{SITE_CONFIG.operatingHours}</span>
            </div>
          </div>
        </div>

        {/* Legal Notices */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-center md:text-left">
            <span>© {new Date().getFullYear()} JRX Seguros - Unidade Passos</span>
            <span>·</span>
            <span>Passos - Minas Gerais</span>
            <span>·</span>
            <span>CNPJ: {SITE_CONFIG.cnpj}</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span className="hover:text-slate-200 cursor-pointer">Privacidade de Dados</span>
            <span>·</span>
            <span className="hover:text-slate-200 cursor-pointer">Termos de Uso</span>
            <span>·</span>
            <span className="hover:text-slate-200 cursor-pointer">Atendimento Especializado</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
