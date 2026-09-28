import type { APIRoute } from 'astro';
import { segurosData } from '@/src/data/seguros';

export const GET: APIRoute = () => {
  const baseUrl = 'https://jrxseguros.com.br';
  const lastMod = new Date().toISOString().split('T')[0];

  const urls = [
    `  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`,
    ...segurosData.map(
      (s) => `  <url>
    <loc>${baseUrl}/seguro/${s.id}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
