const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, filename) {
  const image = sharp(inputPath);
  const outputBase = path.join(outputDir, path.parse(filename).name);

  // Generate WebP version
  await image
    .webp({ quality: 80 })
    .toFile(`${outputBase}.webp`);

  // Generate optimized PNG
  await image
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(`${outputBase}.png`);
}

async function processImages() {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      console.log(`Optimizing ${file}...`);
      await optimizeImage(path.join(inputDir, file), file);
    }
  }
}

processImages().catch(console.error);