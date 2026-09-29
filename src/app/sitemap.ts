import type { MetadataRoute } from 'next';
import { segurosData } from '@/src/data/seguros';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jrxseguros.com.br';
  const currentDate = new Date().toISOString();

  const productRoutes: MetadataRoute.Sitemap = segurosData.map((seguro) => ({
    url: `${baseUrl}/seguro/${seguro.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...productRoutes,
  ];
}
