import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { segurosData, type SeguroItem } from '@/src/data/seguros';

interface SegurosCarouselProps {
  className?: string;
}

export const SegurosCarousel: React.FC<SegurosCarouselProps> = ({ className = '' }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Checa limites de scroll para habilitar/desabilitar setas
  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calcular índice aproximado do item visível
    const itemWidth = 320; // largura média estimada por card + gap
    const idx = Math.round(scrollLeft / itemWidth);
    setActiveIndex(Math.min(Math.max(0, idx), segurosData.length - 1));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const cardWidth = el.querySelector<HTMLElement>('[data-carousel-item]')?.offsetWidth || 300;
    const gap = 20;
    const scrollAmount = (cardWidth + gap) * (direction === 'left' ? -1 : 1);

    el.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>('[data-carousel-item]');
    if (items[index]) {
      items[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Barra superior de navegação com setas e contador */}
      <div className="flex items-center justify-between mb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-300">
            {segurosData.length} Ramos Disponíveis
          </span>
        </div>

        {/* Setas de navegação redondas e destacadas */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Seguro anterior"
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-200 shadow-lg ${
              canScrollLeft
                ? 'bg-[#091D3E] border-sky-400/30 text-white hover:bg-sky-500 hover:border-sky-500 active:scale-95 cursor-pointer shadow-[0_8px_20px_rgba(2,6,23,0.7)]'
                : 'bg-[#061224] border-sky-950 text-slate-600 cursor-not-allowed opacity-40'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Próximo seguro"
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-200 shadow-lg ${
              canScrollRight
                ? 'bg-[#091D3E] border-sky-400/30 text-white hover:bg-sky-500 hover:border-sky-500 active:scale-95 cursor-pointer shadow-[0_8px_20px_rgba(2,6,23,0.7)]'
                : 'bg-[#061224] border-sky-950 text-slate-600 cursor-not-allowed opacity-40'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Container de Scroll Horizontal (Carrossel) */}
      <div className="relative group">
        {/* Seta lateral flutuante Esquerda para desktop */}
        <button
          type="button"
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          aria-label="Rolar para a esquerda"
          className={`hidden xl:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center bg-[#091D3E]/95 text-white border border-sky-400/30 shadow-[0_12px_30px_rgba(0,0,0,0.8)] hover:bg-sky-500 transition-all active:scale-95 ${
            !canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Seta lateral flutuante Direita para desktop */}
        <button
          type="button"
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          aria-label="Rolar para a direita"
          className={`hidden xl:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center bg-[#091D3E]/95 text-white border border-sky-400/30 shadow-[0_12px_30px_rgba(0,0,0,0.8)] hover:bg-sky-500 transition-all active:scale-95 ${
            !canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Trilho de Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-4 pt-1 scrollbar-none no-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {segurosData.map((seguro: SeguroItem) => {
            const kicker = seguro.carouselKicker || 'Seguro';
            const title = seguro.carouselTitle || seguro.name || seguro.nome.replace(/^Seguro (de |da )?/i, '');
            const description = seguro.carouselDesc || seguro.shortDescription || seguro.descricao;

            return (
              <motion.div
                key={seguro.id}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                data-carousel-item
                className="group/card snap-start shrink-0 w-[260px] sm:w-[280px] md:w-[300px] h-[450px] sm:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between relative shadow-[0_16px_36px_rgba(2,6,23,0.85)] hover:shadow-[0_24px_50px_rgba(2,132,199,0.25)] transition-all duration-300 border border-sky-400/20 hover:border-sky-400/50 bg-[#061224] select-none"
              >
                {/* Imagem de Fundo em Alta Resolução Otimizada */}
                <img
                  src={seguro.imagemUrl.replace('w=1200', 'w=600')}
                  alt={seguro.nome}
                  width={300}
                  height={480}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />

                {/* Camada de Gradiente Escuro com toque de azul profundo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061224] via-[#061224]/70 to-black/35 pointer-events-none" />

                {/* Badge da Categoria no Topo */}
                <div className="relative z-10 p-4 sm:p-5 flex justify-between items-center">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#061224]/80 text-sky-300 backdrop-blur-md border border-sky-400/20">
                    {seguro.category}
                  </span>
                </div>

                {/* Conteúdo Central e Inferior do Card */}
                <div className="relative z-10 px-4 sm:px-5 pb-6 flex flex-col items-center text-center mt-auto">
                  {/* Kicker Amarelo/Dourado */}
                  <span className="text-amber-400 font-bold text-xs tracking-wide mb-1 uppercase drop-shadow">
                    {kicker}
                  </span>

                  {/* Título Principal em Branco e Negrito */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight mb-2 drop-shadow-md">
                    {title}
                  </h3>

                  {/* Texto Descritivo em Branco/Sky */}
                  <p className="text-slate-200/90 text-xs leading-relaxed max-w-[250px] line-clamp-2 mb-5 drop-shadow font-normal">
                    {description}
                  </p>

                  {/* Única Chamada para Ação (Essência do Card) */}
                  <a
                    href={`/seguro/${seguro.id}`}
                    className="text-xs font-bold uppercase tracking-wider text-white hover:text-sky-300 transition-colors py-2 px-4 rounded-full border border-sky-400/30 bg-[#091D3E]/80 backdrop-blur-sm inline-flex items-center gap-1.5 drop-shadow-sm group-hover/card:bg-sky-500 group-hover/card:text-white group-hover/card:border-sky-400 active:scale-95"
                    aria-label={`Conhecer mais sobre o seguro de ${title}`}
                  >
                    <span>CONHEÇA O PLANO</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-80 group-hover/card:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Indicadores / Paginação em Dots */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4">
        {segurosData.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollToIndex(idx)}
            aria-label={`Ir para o seguro ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx
                ? 'w-7 bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]'
                : 'w-2 bg-[#0E2852] border border-sky-400/20 hover:bg-sky-800'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
