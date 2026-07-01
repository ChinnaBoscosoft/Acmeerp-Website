const fs = require('fs');
const path = require('path');
const tokens = new Set();
function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walk(full);
    } else if (/\.(jsx|js|tsx|ts)$/.test(ent.name)) {
      const text = fs.readFileSync(full, 'utf8');
      const re = /className\s*=\s*["']([^"']+)["']/g;
      let match;
      while ((match = re.exec(text))) {
        for (const token of match[1].split(/\s+/)) {
          tokens.add(token);
        }
      }
    }
  }
}
walk('src');
console.log([...tokens].sort().join('\n'));
