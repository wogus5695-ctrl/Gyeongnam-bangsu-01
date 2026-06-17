import fs from 'fs';
import path from 'path';

const origin = "https://www.gnrainguard.co.kr";

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

// regions.ts와 100% 동일하게 복제된 데이터셋
const regionGroups = [
  {
    groupTitle: "김해",
    type: "city",
    cityNames: ["김해", "김해시"],
    dongNames: [
      "동상동", "서상동", "봉황동", "부원동", "내외동", "외동", "대성동", "구산동", 
      "삼계동", "풍유동", "명법동", "이동", "화목동", "흥동", "전하동", "강동", 
      "어방동", "삼정동", "삼방동", "안동", "지내동", "불암동", "유하동", "내덕동", 
      "부곡동", "무계동", "신문동", "삼문동", "대청동", "장유동", "응달동", "수가동", 
      "관동동", "율하동"
    ],
    phase: 2,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "창원",
    type: "city",
    cityNames: ["창원", "창원시"],
    dongNames: [
      "용호동", "상남동", "신월동", "대방동", "중앙동", "팔용동", "소답동", "도계동", 
      "서상동", "봉곡동", "반지동", "가음동", "남양동", "사파동", "토월동", "외동", 
      "대원동", "명서동", "소계동", "사림동", "동상동", "도천동", "송학동", "대천동", 
      "평화동", "화천동", "수송동", "태백동", "경화동", "석동", "이동", "자은동", 
      "덕산동", "풍호동", "용원동"
    ],
    phase: 3,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "마산",
    type: "alias",
    cityNames: ["마산", "마산시"],
    parent: "창원",
    dongNames: [
      "창동", "남성동", "신포동", "동성동", "서성동", "수성동", "우산동", "현동", 
      "월영동", "해운동", "가포동", "완월동", "장군동", "회원동", "석전동", "양덕동", 
      "합성동", "구암동", "봉암동"
    ],
    phase: 3,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "진주",
    type: "city",
    cityNames: ["진주", "진주시"],
    dongNames: [
      "망경동", "주약동", "강남동", "칠암동", "본성동", "동성동", "남성동", "인사동", 
      "대안동", "평안동", "중안동", "계동", "봉곡동", "상봉동", "봉래동", "수정동", 
      "장대동", "옥봉동", "상대동", "하대동", "초전동", "장재동", "하촌동", "신안동", 
      "평거동", "이현동", "유곡동", "판문동", "귀곡동", "가좌동", "호탄동", "동전동"
    ],
    phase: 4,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "거제",
    type: "city",
    cityNames: ["거제", "거제시"],
    dongNames: [
      "고현동", "장평동", "수월동", "양정동", "상동동", "문동동", "삼거동", "아주동", 
      "능포동", "마전동", "장승포동", "두모동", "아양동", "옥포동"
    ],
    phase: 4,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "양산",
    type: "city",
    cityNames: ["양산", "양산시"],
    dongNames: [
      "다방동", "남부동", "중부동", "북부동", "명곡동", "신기동", "북정동", "산막동", 
      "호계동", "유산동", "어곡동", "삼호동", "명동", "주남동", "소주동", "주진동", 
      "평산동", "덕계동"
    ],
    phase: 4,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "통영",
    type: "city",
    cityNames: ["통영", "통영시"],
    dongNames: [
      "도천동", "서호동", "동호동", "명정동", "항남동", "중앙동", "문화동", "태평동", 
      "동락동", "정량동", "북신동", "무전동", "미수동", "봉평동", "도남동", "인평동", 
      "평림동"
    ],
    phase: 5,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "사천",
    type: "city",
    cityNames: ["사천", "사천시"],
    dongNames: [
      "선구동", "동동", "서동", "금양동", "송포동", "신수동", "대방동", "실안동", 
      "마도동", "궁지동", "노룡동", "죽림동", "좌룡동", "신벽동", "동림동", "벌리동", 
      "동금동", "향촌동", "이홀동", "와룡동", "백천동", "신전동"
    ],
    phase: 5,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "밀양",
    type: "city",
    cityNames: ["밀양", "밀양시"],
    dongNames: [
      "내이동", "삼문동", "가곡동", "활성동", "남포동", "용평동", "교동", "내일동"
    ],
    phase: 5,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
];

// --- 중복 동명 충돌 감지 로직 ---
const dongNameCounts = new Map();
regionGroups.forEach(group => {
  group.dongNames.forEach(dong => {
    if (!dongNameCounts.has(dong)) {
      dongNameCounts.set(dong, []);
    }
    dongNameCounts.get(dong).push(group.groupTitle);
  });
});

const collisionDongs = new Set();
const collisionReport = {};
dongNameCounts.forEach((parents, dongName) => {
  if (parents.length >= 2) {
    collisionDongs.add(dongName);
    collisionReport[dongName] = parents;
  }
});

// 중복 충돌 레포트 빌드 타임 로깅
console.log("\n[중복 동명(충돌동) 감지 레포트]");
Object.entries(collisionReport).forEach(([dong, cities]) => {
  console.log(`- ${dong}: ${cities.join(' / ')}`);
});

const urls = [
  { loc: `${origin}/`, priority: "1.0" },
  { loc: `${origin}/sitemap-gimhae`, priority: "0.8" }
];

const seenUrls = new Set();

regionGroups.forEach(group => {
  // 1. 시단위 URL 추가 (무조건 sitemap 포함)
  group.cityNames.forEach(cityName => {
    serviceKeywords.forEach(service => {
      const kParam = `${cityName}-${service}`;
      const loc = `${origin}/?k=${encodeURIComponent(kParam)}`;
      
      if (seenUrls.has(loc)) return;
      seenUrls.add(loc);
      
      urls.push({ loc, priority: "0.8" });
    });
  });

  // 2. 동단위 URL 추가 (includeInSitemap 및 exposeInHub 조건과 충돌 여부에 따라 필터링)
  group.dongNames.forEach(dongName => {
    serviceKeywords.forEach(service => {
      const kParam = `${dongName}-${service}`;
      const loc = `${origin}/?k=${encodeURIComponent(kParam)}`;
      
      if (seenUrls.has(loc)) return;
      seenUrls.add(loc);

      const isCollided = collisionDongs.has(dongName);
      const exposeInHub = isCollided ? false : group.dongExposeInHub;
      const includeInSitemap = isCollided ? false : group.dongIncludeInSitemap;

      // exposeInHub=false 또는 includeInSitemap=false인 URL은 sitemap.xml에 넣지 않음
      if (exposeInHub && includeInSitemap) {
        urls.push({ loc, priority: "0.8" });
      }
    });
  });
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
console.log(`\nSitemap generated successfully at ${destPath} with ${urls.length} URLs. (Collided dongs excluded: ${collisionDongs.size} dongs)`);
