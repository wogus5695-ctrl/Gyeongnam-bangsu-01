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
  {
    groupTitle: "부산",
    type: "metro",
    cityNames: ["부산", "부산광역시"],
    districtNames: [
      "부산중구", "부산서구", "부산동구", "부산영도구", "부산진구", "부산동래구",
      "부산남구", "부산북구", "부산해운대구", "부산사하구", "부산금정구", "부산강서구",
      "부산연제구", "부산수영구", "부산사상구", "부산기장군"
    ],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "울산",
    type: "metro",
    cityNames: ["울산", "울산광역시"],
    districtNames: [
      "울산중구", "울산남구", "울산동구", "울산북구", "울산울주군"
    ],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "함안",
    type: "county",
    cityNames: ["함안", "함안군"],
    subRegionNames: ["가야읍", "칠원읍", "함안면", "군북면", "법수면", "대산면", "칠서면", "칠북면", "산인면", "여항면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "창녕",
    type: "county",
    cityNames: ["창녕", "창녕군"],
    subRegionNames: ["창녕읍", "남지읍", "고암면", "성산면", "대합면", "이방면", "유어면", "대지면", "계성면", "영산면", "장마면", "도천면", "길곡면", "부곡면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "의령",
    type: "county",
    cityNames: ["의령", "의령군"],
    subRegionNames: ["의령읍", "가례면", "칠곡면", "대의면", "화정면", "용덕면", "정곡면", "지정면", "낙서면", "부림면", "봉수면", "궁류면", "유곡면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "합천",
    type: "county",
    cityNames: ["합천", "합천군"],
    subRegionNames: ["합천읍", "봉산면", "묘산면", "가야면", "야로면", "율곡면", "초계면", "쌍책면", "덕곡면", "청덕면", "적중면", "대양면", "쌍백면", "삼가면", "가회면", "대병면", "용주면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "산청",
    type: "county",
    cityNames: ["산청", "산청군"],
    subRegionNames: ["산청읍", "차황면", "오부면", "생초면", "금서면", "삼장면", "시천면", "단성면", "신안면", "생비량면", "신등면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "함양",
    type: "county",
    cityNames: ["함양", "함양군"],
    subRegionNames: ["함양읍", "마천면", "휴천면", "유림면", "수동면", "지곡면", "안의면", "서하면", "서상면", "백전면", "병곡면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "거창",
    type: "county",
    cityNames: ["거창", "거창군"],
    subRegionNames: ["거창읍", "주상면", "웅양면", "고제면", "북상면", "위천면", "마리면", "남상면", "남하면", "신원면", "가조면", "가북면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "하동",
    type: "county",
    cityNames: ["하동", "하동군"],
    subRegionNames: ["하동읍", "화개면", "악양면", "적량면", "횡천면", "고전면", "금남면", "금성면", "진교면", "양보면", "북천면", "청암면", "옥종면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "남해",
    type: "county",
    cityNames: ["남해", "남해군"],
    subRegionNames: ["남해읍", "이동면", "상주면", "삼동면", "미조면", "남면", "서면", "고현면", "설천면", "창선면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  }
];

// --- 중복 동명 충돌 감지 로직 ---
const dongNameCounts = new Map();
regionGroups.forEach(group => {
  const subNames = [
    ...(group.dongNames || []),
    ...(group.districtNames || []),
    ...(group.subRegionNames || [])
  ];
  subNames.forEach(dong => {
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
  // sitemap 제외 그룹 필터링
  if (group.includeInSitemap === false) return;

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

  // 2. 동단위/구군단위/읍면단위 URL 추가 (각 phase 조건에 맞춰 sitemap에 넣을지 판단)
  // - districtNames (부산/울산 구군): phase 2에 속하며 includeInSitemap = false 이므로 sitemap에 안 넣음
  // - subRegionNames (경남 읍면): phase 3에 속하며 includeInSitemap = false 이므로 sitemap에 안 넣음
  // - dongNames (기존 법정동): group.dongIncludeInSitemap 설정에 따름

  if (group.dongNames && group.dongNames.length > 0) {
    group.dongNames.forEach(dongName => {
      serviceKeywords.forEach(service => {
        const kParam = `${dongName}-${service}`;
        const loc = `${origin}/?k=${encodeURIComponent(kParam)}`;
        
        if (seenUrls.has(loc)) return;
        seenUrls.add(loc);

        const isCollided = collisionDongs.has(dongName);
        const exposeInHub = isCollided ? false : (group.exposeInHub !== false && group.dongExposeInHub);
        const includeInSitemap = isCollided ? false : (group.includeInSitemap !== false && group.dongIncludeInSitemap);

        // exposeInHub=false 또는 includeInSitemap=false인 URL은 sitemap.xml에 넣지 않음
        if (exposeInHub && includeInSitemap) {
          urls.push({ loc, priority: "0.8" });
        }
      });
    });
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
console.log(`\nSitemap generated successfully at ${destPath} with ${urls.length} URLs. (Collided dongs excluded: ${collisionDongs.size} dongs)`);
