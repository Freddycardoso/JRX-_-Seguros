import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const baseUrl = 'https://jrxseguros.com.br';

  const content = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
