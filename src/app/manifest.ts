import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'JRX Seguros | Consultoria Patrimonial e Gestão de Riscos',
    short_name: 'JRX Seguros',
    description:
      'Consultoria e assessoria especializada em seguros de Vida, Auto, Agro, Residencial e Empresarial em Passos - MG e todo o Brasil.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070B14',
    theme_color: '#070B14',
    orientation: 'portrait',
    scope: '/',
    lang: 'pt-BR',
    icons: [
      {
        src: '/favicon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/logo-jrx.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/logo-jrx.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
