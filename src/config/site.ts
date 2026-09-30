export interface BrokerContact {
  name: string;
  role: string;
  phone: string;
  phoneFormatted: string;
}

export const SITE_CONFIG = {
  name: 'JRX Seguros Unidade Passos',
  slogan: 'Proteção e tranquilidade para o que mais importa na sua vida e empresa',
  address: 'Rua dos Brandões, 231, Sala 30 - Passos - MG',
  cep: '37900-118',
  city: 'Passos',
  state: 'MG',
  email: 'contato@jrxseguros.com.br',
  cnpj: '48.291.834/0001-90',
  susep: 'Corretora Habilitada e Autorizada SUSEP',
  responseTime: 'Menos de 3 minutos',
  operatingHours: 'Segunda a Sexta, das 08h às 17h presencialmente',
  googleMapsUrl: 'https://maps.google.com/?q=Rua+dos+Brandões,+231,+Passos+-+MG',
  googleRating: 4.9,
  googleReviewCount: 184,
  brokers: [
    {
      name: 'Paulo Martins',
      role: 'Consultor Especialista',
      phone: '5535991545108',
      phoneFormatted: '(35) 9 9154-5108',
    },
    {
      name: 'André',
      role: 'Consultor Especialista',
      phone: '5535988357944',
      phoneFormatted: '(35) 9 8835-7944',
    },
  ] as BrokerContact[],
};

/**
 * Regra do WhatsApp estrita exigida pelo PRD:
 * https://wa.me/55NUMERODOCELULAR?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20seguro%20de%20[productName]
 */
export function getWhatsAppUrl(
  productName: string = 'Proteção Geral',
  phone: string = SITE_CONFIG.brokers[0].phone
): string {
  // Limpa prefixos caso já venham como "Seguro de "
  const cleanedProduct = productName.replace(/^Seguro (de |da )?/i, '').trim() || productName;
  const message = `Olá, gostaria de saber mais sobre o seguro de ${cleanedProduct}`;
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedText}`;
}

/**
 * Evento de rastreamento de conversão (CRO - Premissa 10)
 * Dispara evento personalizado para Google Analytics / Google Tag Manager
 */
export function trackWhatsAppConversion(productName: string, brokerName?: string): void {
  try {
    if (typeof window !== 'undefined') {
      // Dispara para o dataLayer do GTM
      const dataLayer = (window as unknown as { dataLayer?: Array<Record<string, unknown>> }).dataLayer;
      if (Array.isArray(dataLayer)) {
        dataLayer.push({
          event: 'whatsapp_lead_click',
          product_name: productName,
          broker: brokerName || 'Direto',
          timestamp: new Date().toISOString(),
        });
      }

      // Dispara para o gtag do Google Analytics 4 se presente
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: `WhatsApp - ${productName}`,
          value: 1,
        });
      }
    }
  } catch {
    // Silently continue
  }
}
