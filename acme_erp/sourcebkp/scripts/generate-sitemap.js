// scripts/generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module dirname setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 👇 Change this to your live site URL
const hostname = 'https://yourdomain.com';

// Folder containing your React pages
const pagesDir = path.resolve(__dirname, '../src/page');

// Helper to convert filenames into route paths
function filenameToRoute(filename) {
  let name = filename.replace(/\.(jsx|js)$/i, '');
  if (name.toLowerCase() === 'home' || name.toLowerCase() === 'index') return '/';
  return `/${name.toLowerCase()}`;
}

// Read files from /src/page and convert to routes
const files = readdirSync(pagesDir);
const routes = files.map(filenameToRoute);

console.log('🧭 Routes found:', routes);

// Create sitemap
const sitemap = new SitemapStream({ hostname });
routes.forEach(url => sitemap.write({ url }));
sitemap.end();

// Output path
const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
const writeStream = createWriteStream(outputPath);

// Generate the file
streamToPromise(sitemap).then(data => {
  writeStream.write(data);
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
});
