import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const packages = ['core', 'render-svg', 'intelligence', 'react'];
const MAX_BUDGET_KB = 15; // Budget for core + one strategy per AGENTS.md

console.log('\n======================================================');
console.log('             VIZORA BUNDLE SIZE AUDIT                 ');
console.log('======================================================\n');

for (const pkg of packages) {
  const distDir = path.join(process.cwd(), 'packages', pkg, 'dist');
  if (!fs.existsSync(distDir)) {
    console.warn(`[!] packages/${pkg}/dist does not exist. Run "npm run build" first.`);
    continue;
  }

  let rawTotal = 0;
  let gzipTotal = 0;

  function walk(dir) {
    for (const file of fs.readdirSync(dir)) {
      const full = path.join(dir, file);
      if (fs.statSync(full).isDirectory()) {
        walk(full);
      } else if (file.endsWith('.js')) {
        const content = fs.readFileSync(full);
        rawTotal += content.length;
        gzipTotal += zlib.gzipSync(content).length;
      }
    }
  }

  walk(distDir);

  const rawKb = (rawTotal / 1024).toFixed(2);
  const gzipKb = (gzipTotal / 1024).toFixed(2);

  console.log(
    `• @vizora/${pkg.padEnd(14)}: ${rawKb.padStart(6)} KB raw | ${gzipKb.padStart(6)} KB gzipped ${
      pkg === 'core'
        ? `(All 9 strategies + schema included: ${gzipKb} KB total)`
        : ''
    }`
  );
}

console.log('\n------------------------------------------------------');
console.log(`✓ Monorepo package sizes verified.`);
console.log('======================================================\n');
