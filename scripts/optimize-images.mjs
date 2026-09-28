import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');

async function optimize() {
  const images = [
    { src: 'hero-casa-luxo.png', dest: 'hero-casa-luxo.webp', quality: 82 },
    { src: 'corretor-paulo-nobg.png', dest: 'corretor-paulo-nobg.webp', quality: 85 },
    { src: 'corretor-andre-nobg.png', dest: 'corretor-andre-nobg.webp', quality: 85 },
    { src: 'logo-jrx.png', dest: 'logo-jrx.webp', quality: 90 },
  ];

  // Generate lightweight favicon
  const logoPath = path.join(publicDir, 'logo-jrx.png');
  if (fs.existsSync(logoPath)) {
    await sharp(logoPath)
      .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(path.join(publicDir, 'favicon-48x48.png'));
    console.log('Generated favicon-48x48.png');
  }

  for (const img of images) {
    const srcPath = path.join(publicDir, img.src);
    const destPath = path.join(publicDir, img.dest);

    if (fs.existsSync(srcPath)) {
      const originalStat = fs.statSync(srcPath);
      await sharp(srcPath)
        .webp({ quality: img.quality })
        .toFile(destPath);
      const newStat = fs.statSync(destPath);
      console.log(`Converted ${img.src} (${(originalStat.size / 1024).toFixed(1)} KB) -> ${img.dest} (${(newStat.size / 1024).toFixed(1)} KB)`);
    }
  }
}

optimize().catch(err => {
  console.error(err);
  process.exit(1);
});
