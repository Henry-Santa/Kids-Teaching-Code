const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Install cheerio if not present
try {
  require.resolve('cheerio');
} catch (e) {
  console.log('Installing required dependencies...');
  require('child_process').execSync('npm install cheerio', { stdio: 'inherit' });
}

const buildDir = path.join(__dirname, '../build');
const indexPath = path.join(buildDir, 'index.html');

function checkSEO() {
  console.log('\n🔍 Running SEO checks...\n');
  
  const html = fs.readFileSync(indexPath, 'utf8');
  const $ = cheerio.load(html);
  
  const checks = {
    title: $('title').length > 0 && $('title').text().length <= 60,
    description: $('meta[name="description"]').length > 0 && 
                 $('meta[name="description"]').attr('content').length <= 160,
    canonical: $('link[rel="canonical"]').length > 0,
    viewport: $('meta[name="viewport"]').length > 0,
    charset: $('meta[charset]').length > 0,
    openGraph: $('meta[property^="og:"]').length > 0,
    twitter: $('meta[name^="twitter:"]').length > 0,
    robotsTxt: fs.existsSync(path.join(buildDir, 'robots.txt')),
    sitemap: fs.existsSync(path.join(buildDir, 'sitemap.xml')),
    images: $('img').toArray().every(img => $(img).attr('alt')),
    headings: $('h1').length === 1
  };

  // Print results
  Object.entries(checks).forEach(([check, passed]) => {
    console.log(`${passed ? '✅' : '❌'} ${check.charAt(0).toUpperCase() + check.slice(1)}`);
    
    // Additional details for failed checks
    if (!passed) {
      switch(check) {
        case 'title':
          console.log('   Title should exist and be <= 60 characters');
          break;
        case 'description':
          console.log('   Meta description should exist and be <= 160 characters');
          break;
        case 'images':
          console.log('   All images should have alt text');
          $('img').each((i, elem) => {
            if (!$(elem).attr('alt')) {
              console.log(`   Missing alt text: ${$(elem).attr('src')}`);
            }
          });
          break;
        case 'headings':
          console.log('   Page should have exactly one H1 heading');
          break;
      }
    }
  });

  // Overall status
  const passedChecks = Object.values(checks).filter(Boolean).length;
  const totalChecks = Object.keys(checks).length;
  
  console.log(`\n📊 SEO Score: ${Math.round((passedChecks / totalChecks) * 100)}%`);
  console.log(`   ${passedChecks}/${totalChecks} checks passed\n`);

  // Return true if all checks passed
  return Object.values(checks).every(Boolean);
}

// Run checks
const passed = checkSEO();

// Exit with appropriate code
process.exit(passed ? 0 : 1);