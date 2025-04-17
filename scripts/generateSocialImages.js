const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOCIAL_IMAGE_CONFIG = {
  width: 1200,
  height: 630,
  background: { r: 52, g: 152, b: 219, alpha: 1 }, // #3498db
};

async function generateSocialImages() {
  const outputDir = path.join(__dirname, '../public/images/social');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Generate home page social image
  await sharp(path.join(__dirname, '../public/images/optimized/1.png'))
    .resize(SOCIAL_IMAGE_CONFIG.width, SOCIAL_IMAGE_CONFIG.height, {
      fit: 'cover',
      position: 'center'
    })
    .composite([{
      input: Buffer.from(`
        <svg width="${SOCIAL_IMAGE_CONFIG.width}" height="${SOCIAL_IMAGE_CONFIG.height}">
          <rect x="0" y="430" width="1200" height="200" fill="rgba(0,0,0,0.7)"/>
          <text x="50%" y="500" font-family="Arial" font-size="48" fill="white" text-anchor="middle">
            Kids Teaching Code
          </text>
          <text x="50%" y="560" font-family="Arial" font-size="32" fill="white" text-anchor="middle">
            Student-led Coding Education
          </text>
        </svg>`),
      top: 0,
      left: 0,
    }])
    .toFile(path.join(outputDir, 'home.png'));

  // Generate about page social image
  await sharp(path.join(__dirname, '../public/images/optimized/2.png'))
    .resize(SOCIAL_IMAGE_CONFIG.width, SOCIAL_IMAGE_CONFIG.height, {
      fit: 'cover',
      position: 'center'
    })
    .composite([{
      input: Buffer.from(`
        <svg width="${SOCIAL_IMAGE_CONFIG.width}" height="${SOCIAL_IMAGE_CONFIG.height}">
          <rect x="0" y="430" width="1200" height="200" fill="rgba(0,0,0,0.7)"/>
          <text x="50%" y="500" font-family="Arial" font-size="48" fill="white" text-anchor="middle">
            About Our Team
          </text>
          <text x="50%" y="560" font-family="Arial" font-size="32" fill="white" text-anchor="middle">
            Meet the Student Mentors at Kids Teaching Code
          </text>
        </svg>`),
      top: 0,
      left: 0,
    }])
    .toFile(path.join(outputDir, 'about.png'));
}

generateSocialImages()
  .then(() => console.log('Social media preview images generated successfully!'))
  .catch(console.error);