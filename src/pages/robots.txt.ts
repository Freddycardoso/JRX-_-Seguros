import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const baseUrl = 'https://jrxseguros.com.br';

  const content = `# Robots.txt oficial JRX Seguros
# Indexação Orgânica Googlebot/Bingbot & Generative Engine Optimization (GEO)

User-agent: *
Allow: /
Disallow: /api/

# Motores de Busca Tradicionais
User-agent: Googlebot
User-agent: Bingbot
User-agent: Applebot
User-agent: YandexBot
Allow: /
Disallow: /api/

# Agentes de Busca Generativa e LLMs (GEO)
User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: PerplexityBot
User-agent: ClaudeBot
User-agent: anthropic-ai
User-agent: Google-Extended
User-agent: Amazonbot
User-agent: Bytespider
User-agent: CCBot
User-agent: cohere-ai
User-agent: Diffbot
User-agent: FacebookBot
Allow: /
Disallow: /api/

# Sitemap Canônico
Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
