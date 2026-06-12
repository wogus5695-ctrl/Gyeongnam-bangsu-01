import fs from 'fs';
import path from 'path';

const origin = "https://gyeongnam-bangsu-01.vercel.app";

const serviceKeywords = [
  "외벽방수",
  "외벽발수",
  "옥상방수",
  "지붕방수",
  "외벽도색",
  "옥상누수",
  "외벽누수",
  "건물방수"
];

// Phase 1 대상 지역 (경남 8대 시단위의 제거/포함형 및 마산 검색 별칭)
const regions = [
  "창원", "창원시",
  "진주", "진주시",
  "통영", "통영시",
  "사천", "사천시",
  "김해", "김해시",
  "밀양", "밀양시",
  "거제", "거제시",
  "양산", "양산시",
  "마산", "마산시"
];

const urls = [
  { loc: `${origin}/`, priority: "1.0" },
  { loc: `${origin}/sitemap-gimhae`, priority: "0.8" }
];

regions.forEach(region => {
  serviceKeywords.forEach(service => {
    const kParam = `${region}-${service}`;
    // URL에 한글 파라미터가 들어가므로 encodeURIComponent로 확실히 인코딩 처리
    urls.push({
      loc: `${origin}/?k=${encodeURIComponent(kParam)}`,
      priority: "0.8"
    });
  });
});

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

urls.forEach(url => {
  xml += `  <url>
    <loc>${url.loc}</loc>
    <priority>${url.priority}</priority>
  </url>
`;
});

xml += `</urlset>
`;

// scripts 디렉토리가 없을 수 있으므로 상위 디렉토리 확인 및 생성
const destPath = path.resolve('public', 'sitemap.xml');
const dir = path.dirname(destPath);
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(destPath, xml, 'utf-8');
console.log(`Sitemap generated successfully at ${destPath} with ${urls.length} URLs.`);
