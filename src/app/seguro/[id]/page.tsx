import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Shield,
  ArrowLeft,
  ArrowDown,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { segurosData, type SeguroItem } from '@/src/data/seguros';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { FloatingWhatsApp } from '@/src/components/FloatingWhatsApp';
import { WhatsAppCTA } from '@/src/components/WhatsAppCTA';
import { FAQAccordion } from '@/src/components/FAQAccordion';
import { DynamicIcon } from '@/src/components/DynamicIcon';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return segurosData.map((seguro) => ({
    id: seguro.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const seguro = segurosData.find((item) => item.id === id || item.slug === id);

  if (!seguro) {
    return {
      title: 'Seguro Não Encontrado | JRX Seguros',
      description: 'O ramo de seguro solicitado não foi localizado.',
    };
  }

  const title = `${seguro.nome} em Passos - MG | Cotação Rápida WhatsApp | JRX Seguros`;
  const description = `${seguro.titulo} ${seguro.descricao} Consultoria independente e cotação multisseguradoras em Passos - MG com suporte direto no WhatsApp.`;
  const canonicalUrl = `https://jrxseguros.com.br/seguro/${seguro.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/seguro/${seguro.id}`,
    },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: canonicalUrl,
      title,
      description: seguro.shortDescription || seguro.descricao,
      siteName: 'JRX Seguros',
      images: [
        {
          url: seguro.imagemUrl,
          width: 1200,
          height: 630,
          alt: `${seguro.nome} - JRX Seguros Passos MG`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: seguro.shortDescription || seguro.descricao,
      images: [seguro.imagemUrl],
    },
  };
}

export default async function SeguroDetailPage({ params }: PageProps) {
  const { id } = await params;
  const seguro = segurosData.find((item) => item.id === id || item.slug === id);

  if (!seguro) {
    notFound();
  }

  // Schema.org: FinancialProduct / Product
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    '@id': `https://jrxseguros.com.br/seguro/${seguro.id}#product`,
    name: seguro.nome,
    description: seguro.descricao,
    image: seguro.imagemUrl,
    category: seguro.category,
    provider: {
      '@type': 'InsuranceAgency',
      name: 'JRX Seguros',
      url: 'https://jrxseguros.com.br',
      telephone: '+55-35-99154-5108',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua dos Brandões, 231, Sala 30',
        addressLocality: 'Passos',
        addressRegion: 'MG',
        postalCode: '37900-118',
        addressCountry: 'BR',
      },
    },
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'BRL',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      url: `https://jrxseguros.com.br/seguro/${seguro.id}`,
      seller: {
        '@type': 'InsuranceAgency',
        name: 'JRX Seguros',
      },
    },
  };

  // Schema.org: BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://jrxseguros.com.br/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Seguros',
        item: 'https://jrxseguros.com.br/#nossos-seguros',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: seguro.nome,
        item: `https://jrxseguros.com.br/seguro/${seguro.id}`,
      },
    ],
  };

  // Schema.org: FAQPage (se houver perguntas e respostas)
  const faqSchema =
    seguro.faqs && seguro.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: seguro.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {/* Dados Estruturados de SEO Semântico para Produto, Breadcrumb e FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Navbar currentPath={`/seguro/${seguro.id}`} />

      <main className="flex-1 w-full flex flex-col bg-[#050E1D] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
        {/* Breadcrumb Visual Editorial */}
        <nav
          className="bg-[#050E1D] border-b border-white/[0.06] py-2.5 sm:py-3.5 relative z-10 transition-colors"
          aria-label="Navegação breadcrumb"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-400 overflow-x-auto whitespace-nowrap py-0.5">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors flex items-center gap-1.5 font-medium shrink-0"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                  <span>Início</span>
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-600 shrink-0">
                /
              </li>
              <li className="shrink-0">
                <Link
                  href="/#nossos-seguros"
                  className="hover:text-white transition-colors font-medium"
                >
                  Seguros
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-600 shrink-0">
                /
              </li>
              <li aria-current="page" className="shrink-0">
                <span className="font-medium text-white">{seguro.nome}</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero do Seguro com Backdrop Otimizado */}
        <section className="relative overflow-hidden bg-[#050E1D] text-white pt-10 sm:pt-20 lg:pt-28 pb-14 sm:pb-20 border-b border-white/[0.08]">
          <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
            <img
              src={seguro.imagemUrl}
              alt={`Cenário visual para ${seguro.nome}`}
              className="w-full h-full object-cover object-center opacity-25 filter saturate-[1.1] scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050E1D] via-[#050E1D]/90 to-[#050E1D]/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050E1D] via-[#050E1D]/60 to-transparent"></div>
            <div className="absolute -top-32 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
                <div className="mb-5 sm:mb-6">
                  <div className="inline-flex items-center flex-wrap justify-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-sky-300 max-w-full shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                    <span>{seguro.category}</span>
                    <span className="text-sky-300/40">·</span>
                    <span>{seguro.badge}</span>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold sm:font-extrabold tracking-tight text-white leading-[1.28] sm:leading-[1.18] lg:leading-[1.12]">
                  {seguro.heroHeadline || seguro.titulo}
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                  {seguro.heroSubheadline || seguro.descricao}
                </p>

                {/* Highlights de Cobertura */}
                <div className="pt-2 pb-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl mx-auto lg:mx-0 text-left">
                    {seguro.coverageHighlights?.slice(0, 4).map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm"
                      >
                        <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                        <span className="text-xs sm:text-[13px] font-medium text-slate-200">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão de Cotação WhatsApp Imediata */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <WhatsAppCTA
                    productName={seguro.nome}
                    label={`Fazer Cotação de ${seguro.name || seguro.nome}`}
                    size="lg"
                    variant="whatsapp"
                    className="w-full sm:w-auto"
                  />
                  <a
                    href="#detalhes-coberturas"
                    className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors py-3 px-4"
                  >
                    <span>Ver coberturas completas</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Coluna Direita: Card de Confiança e Consultores */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                  <div className="flex items-center gap-3 pb-5 border-b border-white/[0.08]">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">Consultoria JRX</h3>
                      <p className="text-xs text-slate-400">Passos - MG e Atendimento Nacional</p>
                    </div>
                  </div>

                  <div className="py-5 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {seguro.idealFor ||
                        'Solução desenhada para proteger quem não abre mão de segurança e previsibilidade.'}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                        Por que fazer com a JRX:
                      </h4>
                      {seguro.whyChooseJrx?.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-xs text-white block">{item.title}</strong>
                            <span className="text-[11px] text-slate-400">{item.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-sky-400 font-medium">
                      <Sparkles className="w-3.5 h-3.5" /> Cotação 100% gratuita
                    </span>
                    <span>Sem fidelidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Coberturas e Benefícios Detalhados */}
        <section id="detalhes-coberturas" className="py-16 sm:py-24 bg-[#061224] border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-xs uppercase font-semibold text-sky-400 tracking-wider">
                Proteção Sob Medida
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2">
                O que você protege com o {seguro.nome}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3">
                Entenda as principais garantias desenhadas para que você não tenha surpresas no
                momento do sinistro.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seguro.benefitsDetails?.map((benefit, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <DynamicIcon name={benefit.iconName} className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Específico com Microdados */}
        {seguro.faqs && seguro.faqs.length > 0 && (
          <section className="py-16 sm:py-24 bg-[#050E1D]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="text-xs uppercase font-semibold text-sky-400 tracking-wider">
                  Dúvidas Frequentes
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                  Perguntas sobre {seguro.nome}
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-2">
                  Respostas claras preparadas pelos consultores Paulo Martins e André.
                </p>
              </div>

              <FAQAccordion items={seguro.faqs} />

              <div className="mt-10 text-center">
                <p className="text-xs text-slate-400 mb-4">
                  Ainda tem alguma pergunta específica para o seu caso?
                </p>
                <WhatsAppCTA
                  productName={seguro.nome}
                  label="Tirar Dúvida no WhatsApp"
                  size="md"
                  variant="whatsapp"
                  className="mx-auto"
                />
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <FloatingWhatsApp currentProduct={seguro.nome} />
    </>
  );
}
