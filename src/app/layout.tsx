import type { Metadata, Viewport } from 'next';
import { Public_Sans, Lora } from 'next/font/google';
import '@/src/index.css';

const publicSans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-public-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#070B14',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://jrxseguros.com.br'),
  title: {
    default: 'JRX Seguros | Consultoria Patrimonial e Gestão de Riscos',
    template: '%s | JRX Seguros',
  },
  description:
    'Consultoria em seguros em Passos - MG. Cotação ágil via WhatsApp para Seguro de Vida, Auto, Agro, Residencial e Empresarial com atendimento humano e imparcial.',
  keywords: [
    'seguros passos mg',
    'jrx seguros',
    'corretora de seguros passos',
    'seguro de vida',
    'seguro automovel',
    'seguro auto',
    'seguro agro',
    'maquinas agricolas',
    'seguro fotovoltaico',
    'seguro empresarial',
    'seguro residencial',
    'consultoria de seguros',
    'cotacao de seguro whatsapp',
    'Paulo Martins seguros',
    'Andre corretor',
  ],
  authors: [
    { name: 'JRX Seguros' },
    { name: 'Paulo Martins' },
    { name: 'André' },
  ],
  creator: 'JRX Seguros',
  publisher: 'JRX Seguros',
  applicationName: 'JRX Seguros',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://jrxseguros.com.br',
    siteName: 'JRX Seguros',
    title: 'JRX Seguros | Consultoria Patrimonial e Gestão de Riscos',
    description:
      'Consultoria e assessoria especializada em seguros em Passos - MG e região. Estudo multisseguradoras e cotação direta no WhatsApp com Paulo Martins e André.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JRX Seguros - Consultoria Patrimonial e Gestão de Riscos',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JRX Seguros | Consultoria Patrimonial e Gestão de Riscos',
    description:
      'Consultoria especializada em proteção patrimonial em Passos - MG. Cotação ágil no WhatsApp.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'INSERIR_TOKEN_SEARCH_CONSOLE',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/logo-jrx.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/logo-jrx.png',
    apple: [
      { url: '/logo-jrx.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

/**
 * Schema.org Structured Data (JSON-LD)
 * Tipo: InsuranceAgency / FinancialService
 */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  '@id': 'https://jrxseguros.com.br/#organization',
  name: 'JRX Seguros',
  alternateName: ['JRX Seguros Unidade Passos', 'JRX Consultoria de Riscos e Seguros'],
  description:
    'Consultoria e assessoria independente em gestão de riscos patrimoniais e seguros em Passos - MG e região. Cotação rápida e humanizada no WhatsApp com análise comparativa multisseguradoras.',
  url: 'https://jrxseguros.com.br',
  logo: 'https://jrxseguros.com.br/logo-jrx.png',
  image: 'https://jrxseguros.com.br/og-image.jpg',
  telephone: '+55-35-99154-5108',
  email: 'contato@jrxseguros.com.br',
  priceRange: '$$',
  currenciesAccepted: 'BRL',
  paymentAccepted: 'Boleto Bancário, Cartão de Crédito, Débito em Conta, Pix',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua dos Brandões, 231, Sala 30',
    addressLocality: 'Passos',
    addressRegion: 'MG',
    postalCode: '37900-118',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -20.7188,
    longitude: -46.6097,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Passos',
      sameAs: 'https://pt.wikipedia.org/wiki/Passos_(Minas_Gerais)',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Sudoeste Mineiro',
    },
    {
      '@type': 'Country',
      name: 'Brasil',
    },
  ],
  founder: [
    {
      '@type': 'Person',
      name: 'Paulo Martins',
      jobTitle: 'Sócio-Consultor Especialista em Riscos e Seguros',
      telephone: '+55-35-99154-5108',
    },
    {
      '@type': 'Person',
      name: 'André',
      jobTitle: 'Sócio-Consultor Especialista em Riscos e Seguros',
      telephone: '+55-35-98835-7944',
    },
  ],
  employee: [
    {
      '@type': 'Person',
      name: 'Paulo Martins',
      jobTitle: 'Consultor Especialista em Riscos e Seguros',
    },
    {
      '@type': 'Person',
      name: 'André',
      jobTitle: 'Consultor Especialista em Riscos e Seguros',
    },
  ],
  knowsAbout: [
    'Seguro de Vida',
    'Seguro Empresarial',
    'Seguro Residencial',
    'Seguro Automóvel',
    'Seguro Viagem',
    'Plano de Saúde',
    'Seguro Fotovoltaico',
    'Máquinas Agrícolas',
    'Seguro de Moto',
    'Fiança Locatícia',
    'Consórcios',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Soluções em Seguros e Proteção Patrimonial JRX',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: 'Seguro de Vida',
          url: 'https://jrxseguros.com.br/seguro/vida',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: 'Seguro Empresarial',
          url: 'https://jrxseguros.com.br/seguro/empresarial',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: 'Seguro Residencial',
          url: 'https://jrxseguros.com.br/seguro/residencial',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: 'Seguro Automóvel',
          url: 'https://jrxseguros.com.br/seguro/automovel',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: 'Seguro Fotovoltaico',
          url: 'https://jrxseguros.com.br/seguro/fotovoltaico',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: 'Máquinas Agrícolas',
          url: 'https://jrxseguros.com.br/seguro/maquinas-agricolas',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${publicSans.variable} ${lora.variable} scroll-smooth antialiased`}
    >
      <head>
        {/* Injeção de Dados Estruturados Schema.org para Descoberta Semântica e GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="bg-[#061224] text-slate-100 font-sans selection:bg-sky-500 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
