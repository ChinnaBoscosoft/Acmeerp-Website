const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const exts = new Set(['.html', '.jsx', '.js']);
const imgRe = /<img\s+[^>]*src\s*=\s*[^>]*>/ig;
const altRe = /alt\s*=\s*(?:"([^"]*)"|'([^']*)'|\{\s*([^\}]+)\s*\})/i;
const aRe = /<a\s+[^>]*href\s*=\s*(?:"([^"]*)"|'([^']*)')/ig;
const hRe = /<(h[123])\b[^>]*>([\s\S]*?)<\/\1>/ig;
const results = { images: [], links: new Set(), headings: [] };
function scanFile(file) {
  const text = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = imgRe.exec(text)) !== null) {
    const tag = m[0].replace(/\s+/g, ' ').trim();
    const altMatch = altRe.exec(tag);
    const alt = altMatch ? (altMatch[1] || altMatch[2] || altMatch[3] || '').trim() : '';
    results.images.push({ file, tag, alt });
  }
  while ((m = hRe.exec(text)) !== null) {
    const tag = m[1].toLowerCase();
    const content = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    results.headings.push({ file, tag, content });
  }
  while ((m = aRe.exec(text)) !== null) {
    const href = (m[1] || m[2] || '').trim();
    if (href && !href.match(/^(https?:|mailto:|tel:|#)/i)) {
      results.links.add(`${file}|${href}`);
    }
  }
}
function traverse(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (item.name === 'node_modules' || item.name === '.git') continue;
      traverse(p);
    } else if (exts.has(path.extname(p).toLowerCase())) {
      scanFile(p);
    }
  }
}
traverse(root);
const lines = [];
lines.push('Website Audit Notes');
lines.push('===================');
lines.push('');
lines.push('Images with alt attributes:');
lines.push('--------------------------');
for (const img of results.images) {
  lines.push(`${img.file} | alt="${img.alt}" | ${img.tag}`);
}
lines.push('');
lines.push('Internal links (relative/root, excluding external and mailto/tel/#):');
lines.push('--------------------------------------');
for (const entry of Array.from(results.links).sort()) {
  const [file, href] = entry.split('|');
  lines.push(`${file} | href="${href}"`);
}
lines.push('');
lines.push('Headings (h1, h2, h3):');
lines.push('----------------------');
for (const heading of results.headings) {
  lines.push(`${heading.file} | ${heading.tag} | "${heading.content}"`);
}
fs.writeFileSync(path.join(root, 'website-audit-notes.txt'), lines.join('\n'), 'utf8');
console.log('Audit finished: website-audit-notes.txt');
