import { useState, useEffect, useRef } from 'react';

interface UseLazyBackgroundOptions {
  /**
   * Se true, indica que o componente está no topo (Hero/above the fold).
   * Neste caso, adiamos o carregamento para a primeira folga do navegador
   * (requestIdleCallback ou pós-mount) para que FCP, LCP e hidratação do texto
   * e botões principais ocorram instantaneamente, sem bloqueio de thread.
   * Se false (padrão), utiliza IntersectionObserver para carregar apenas
   * quando o usuário rolar próximo à seção.
   */
  isAboveTheFold?: boolean;

  /**
   * Distância em pixels antes do elemento entrar na viewport para iniciar o pré-carregamento.
   * Padrão: '250px'
   */
  rootMargin?: string;
}

/**
 * Hook universal de Lazy Loading para backgrounds de alta fidelidade.
 * Garante que:
 * 1. O carregamento da página principal NÃO seja impactado.
 * 2. O Largest Contentful Paint (LCP) do conteúdo textual e botões ocorra em tempo recorde.
 * 3. Elementos abaixo da dobra (como CTAs no rodapé) sequer façam requisições de rede
 *    até que o usuário role a página até perto deles.
 */
export function useLazyBackground<T extends HTMLElement = HTMLDivElement>({
  isAboveTheFold = false,
  rootMargin = '250px',
}: UseLazyBackgroundOptions = {}) {
  const containerRef = useRef<T | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Caso 1: Componente acima da dobra (Hero)
    // Não concorre com o carregamento inicial crítico de fontes, estilos e scripts.
    if (isAboveTheFold) {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        const handle = (window as unknown as {
          requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number;
          cancelIdleCallback: (id: number) => void;
        }).requestIdleCallback(
          () => {
            setShouldLoad(true);
          },
          { timeout: 600 }
        );

        return () => {
          (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(handle);
        };
      } else {
        // Fallback seguro usando requestAnimationFrame + setTimeout
        const timer = setTimeout(() => {
          setShouldLoad(true);
        }, 120);
        return () => clearTimeout(timer);
      }
    }

    // Caso 2: Componente abaixo da dobra (CTA, Rodapé, etc.)
    // Utiliza IntersectionObserver com margem antecipada (250px)
    const element = containerRef.current;
    if (!element) {
      setShouldLoad(true);
      return;
    }

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry && entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        },
        {
          rootMargin,
          threshold: 0.01,
        }
      );

      observer.observe(element);

      return () => {
        observer.disconnect();
      };
    } else {
      // Fallback para navegadores sem suporte a IntersectionObserver
      setShouldLoad(true);
    }
  }, [isAboveTheFold, rootMargin]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return {
    containerRef,
    shouldLoad,
    isLoaded,
    handleImageLoad,
  };
}
