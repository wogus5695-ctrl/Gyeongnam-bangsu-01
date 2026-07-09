import fs from 'fs';
import path from 'path';
import { generateKeywordItems } from '../src/data/keywords';

const origin = "https://www.gnrainguard.co.kr";

const keywords = generateKeywordItems();
const urls = [
  { loc: `${origin}/`, priority: "1.0" },
  { loc: `${origin}/sitemap-gimhae`, priority: "0.8" }
];

const seenUrls = new Set();

keywords.forEach(item => {
  if (item.includeInSitemap) {
    const loc = `${origin}/?k=${encodeURIComponent(item.k)}`;
    if (!seenUrls.has(loc)) {
      seenUrls.add(loc);
      urls.push({
        loc,
        priority: "0.8"
      });
    }
  }
});

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

urls.forEach(url => {
  // /#contact 같은 앵커 URL 필터링
  if (url.loc.includes('#')) return;
  // gyeongnam-bangsu-01.vercel.app 도메인 필터링
  if (url.loc.includes('gyeongnam-bangsu-01.vercel.app')) return;

  xml += `  <url>
    <loc>${url.loc}</loc>
    <priority>${url.priority}</priority>
  </url>
`;
});

xml += `</urlset>
`;

const destPath = path.resolve('public', 'sitemap.xml');
const dir = path.dirname(destPath);
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(destPath, xml, 'utf-8');
console.log(`\nSitemap generated successfully at ${destPath} with ${urls.length} URLs.`);
