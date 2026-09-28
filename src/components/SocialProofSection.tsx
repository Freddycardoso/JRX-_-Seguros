import React from 'react';
import { Star, ShieldCheck, CheckCircle, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/src/config/site';

interface Testimonial {
  name: string;
  role: string;
  city: string;
  seguro: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Carlos Eduardo Silveira',
    role: 'Empresário B2B',
    city: 'Passos - MG',
    seguro: 'Seguro Empresarial',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: 'Há 2 semanas',
    comment:
      'Fizemos o seguro da nossa distribuidora e galpão com o Paulo e o André. O atendimento foi impecável: mapearam riscos que nenhuma outra consultoria havia notado e ainda reduziram nosso custo anual em quase 25%. Recomendo de olhos fechados!',
  },
  {
    name: 'Mariana Vasconcelos',
    role: 'Médica & Mãe de 2 filhos',
    city: 'Passos - MG',
    seguro: 'Seguro de Vida',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: 'Há 1 mês',
    comment:
      'Buscava um seguro de vida com cobertura em vida para doenças graves e sem pegadinhas. O Paulo me explicou cada cláusula com extrema clareza no WhatsApp. Fechei com total tranquilidade para a segurança dos meus filhos.',
  },
  {
    name: 'Rodrigo Alvarenga',
    role: 'Engenheiro Agrônomo',
    city: 'Alpinópolis / Passos - MG',
    seguro: 'Automóvel & Máquinas',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: 'Há 3 semanas',
    comment:
      'Tive uma pane mecânica na rodovia à noite. Mandei mensagem no WhatsApp da JRX e o André me respondeu na hora liberando o guincho e o táxi. O diferencial deles é estar presente quando a gente realmente precisa.',
  },
  {
    name: 'Patrícia Guimarães',
    role: 'Arquiteta',
    city: 'Passos - MG',
    seguro: 'Residencial & Fotovoltaico',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: 'Há 1 mês',
    comment:
      'Instalei energia solar na minha casa e contratei a proteção com a JRX. Meses depois tivemos uma tempestade de granizo forte e a indenização para reposição dos módulos foi autorizada sem burocracia.',
  },
];

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-transparent" aria-label="Depoimentos e Avaliações">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Google Rating Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-400/20 px-3 py-1 rounded-full">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Depoimentos Reais &amp; Confiança</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Quem contrata com a JRX recomenda
            </h2>
            <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed">
              Mais de uma década construindo relacionamentos de confiança em Passos - MG e em todo o território nacional.
            </p>
          </div>

          {/* Google Meu Negócio Rating Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0B1E3D]/90 border border-sky-400/20 shadow-[0_12px_30px_rgba(2,6,23,0.6)] shrink-0 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-xl font-black text-[#0B1E3D] shadow-md">
              G
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-lg font-extrabold text-white">
                  {SITE_CONFIG.googleRating}
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <span>{SITE_CONFIG.googleReviewCount} avaliações no Google</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 font-semibold hover:underline inline-flex items-center gap-0.5"
                >
                  Ver no Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#091C38]/90 border border-sky-400/15 hover:border-sky-400/35 hover:bg-[#0D2447] shadow-[0_14px_35px_rgba(2,6,23,0.7)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{t.date}</span>
                </div>

                {/* Comment quote */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-5 italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-3 border-t border-sky-950 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover border border-sky-400/30"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <span>{t.name}</span>
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="text-[11px] text-sky-300/80">
                    {t.seguro} · {t.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
