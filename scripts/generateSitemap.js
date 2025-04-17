const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

// Define your website URLs
const urls = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
];

async function generateSitemap() {
  try {
    // Create a stream to write to
    const stream = new SitemapStream({ hostname: 'https://kidsteachingcode.org' });
    
    // Return a promise that resolves with your XML string
    const data = await streamToPromise(Readable.from(urls).pipe(stream));
    
    // Write the XML to file
    fs.writeFileSync(
      path.join(__dirname, '../public/sitemap.xml'),
      data.toString()
    );
    
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();