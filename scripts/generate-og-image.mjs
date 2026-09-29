import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');

async function generateOgImage() {
  const svgOverlay = Buffer.from(`
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="42%" r="65%">
      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.30"/>
      <stop offset="60%" stop-color="#091b36" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#061224" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.1"/>
      <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#061224"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="40" y="40" width="1120" height="550" rx="20" fill="none" stroke="rgba(56, 189, 248, 0.18)" stroke-width="2"/>
  <line x1="200" y1="450" x2="1000" y2="450" stroke="url(#lineGrad)" stroke-width="1.5"/>
  <text x="600" y="490" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="700" fill="#f8fafc" text-anchor="middle" letter-spacing="4">CONSULTORIA PATRIMONIAL &amp; GESTÃO DE RISCOS</text>
  <text x="600" y="530" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="500" fill="#38bdf8" text-anchor="middle" letter-spacing="2">PASSOS - MG • SUDOESTE MINEIRO • ATENDIMENTO NACIONAL</text>
</svg>
  `);

  const logoPath = path.join(publicDir, 'logo-jrx.png');
  const logo = await sharp(logoPath)
    .resize(680, 320, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const ogPath = path.join(publicDir, 'og-image.jpg');
  await sharp(svgOverlay)
    .composite([
      { input: logo, top: 100, left: 260 }
    ])
    .jpeg({ quality: 95 })
    .toFile(ogPath);

  console.log('og-image.jpg generated successfully at:', ogPath);
}

generateOgImage().catch(console.error);
