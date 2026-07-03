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

// regions.ts와 100% 동일하게 복제된 지역 그룹 데이터
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
dongNameCounts.forEach((parents, dongName) => {
  if (parents.length >= 2) {
    collisionDongs.add(dongName);
  }
});

function formatRegionDisplayName(region) {
  if (!region) return region;
  if ((region.startsWith("부산") && region !== "부산" && region !== "부산광역시") || 
      (region.startsWith("울산") && region !== "울산" && region !== "울산광역시")) {
    const prefix = region.substring(0, 2);
    const rest = region.substring(2);
    return `${prefix} ${rest}`;
  }
  return region;
}

// 키워드 데이터 생성
const allKeywords = [];
const seenUrls = new Set();

regionGroups.forEach(group => {
  // 1. 시단위 키워드 조합 생성
  group.cityNames.forEach(cityName => {
    serviceKeywords.forEach(service => {
      const kParam = `${cityName}-${service}`;
      const url = `/?k=${encodeURIComponent(kParam)}`;
      const displayRegion = formatRegionDisplayName(cityName);
      const label = `${displayRegion} ${service}`;
      const displayText = displayRegion.includes(" ") 
        ? `${displayRegion} ${service}` 
        : kParam;

      if (seenUrls.has(url)) return;
      seenUrls.add(url);

      allKeywords.push({
        label,
        displayText,
        k: kParam,
        href: url,
        parent: group.groupTitle,
        region: cityName,
        service,
        type: group.type,
        level: "city",
        phase: 1,
        exposeInHub: group.exposeInHub !== false
      });
    });
  });

  // 2-1. 구/군 단위 키워드 조합 생성 (부산/울산 구·군): phase 2
  if (group.districtNames) {
    group.districtNames.forEach((districtName) => {
      serviceKeywords.forEach(service => {
        const kParam = `${districtName}-${service}`;
        const url = `/?k=${encodeURIComponent(kParam)}`;
        const displayRegion = formatRegionDisplayName(districtName);
        const label = `${displayRegion} ${service}`;
        const displayText = displayRegion.includes(" ") 
          ? `${displayRegion} ${service}` 
          : kParam;

        if (seenUrls.has(url)) return;
        seenUrls.add(url);

        const isCollided = collisionDongs.has(districtName);

        allKeywords.push({
          label,
          displayText,
          k: kParam,
          href: url,
          parent: group.groupTitle,
          region: districtName,
          service,
          type: group.type,
          level: "dong",
          phase: 2,
          // phase 2: Hub 노출(true), sitemap 미등록(false)
          exposeInHub: isCollided ? false : true,
          includeInSitemap: false
        });
      });
    });
  }

  // 2-2. 읍·면 단위 키워드 조합 생성 (경남 군 하위 읍·면): phase 3
  if (group.subRegionNames) {
    group.subRegionNames.forEach((subName) => {
      serviceKeywords.forEach(service => {
        const kParam = `${subName}-${service}`;
        const url = `/?k=${encodeURIComponent(kParam)}`;
        const displayRegion = formatRegionDisplayName(subName);
        const label = `${displayRegion} ${service}`;
        const displayText = displayRegion.includes(" ") 
          ? `${displayRegion} ${service}` 
          : kParam;

        if (seenUrls.has(url)) return;
        seenUrls.add(url);

        allKeywords.push({
          label,
          displayText,
          k: kParam,
          href: url,
          parent: group.groupTitle,
          region: subName,
          service,
          type: group.type,
          level: "dong",
          phase: 3,
          // phase 3: Hub 미노출(false), sitemap 미등록(false)
          exposeInHub: false,
          includeInSitemap: false
        });
      });
    });
  }

  // 2-3. 법정동 단위 키워드 조합 생성 (기존 법정동)
  if (group.dongNames) {
    group.dongNames.forEach(dongName => {
      serviceKeywords.forEach(service => {
        const kParam = `${dongName}-${service}`;
        const url = `/?k=${encodeURIComponent(kParam)}`;
        const displayRegion = formatRegionDisplayName(dongName);
        const label = `${displayRegion} ${service}`;
        const displayText = displayRegion.includes(" ") 
          ? `${displayRegion} ${service}` 
          : kParam;

        if (seenUrls.has(url)) return;
        seenUrls.add(url);

        const isCollided = collisionDongs.has(dongName);

        allKeywords.push({
          label,
          displayText,
          k: kParam,
          href: url,
          parent: group.groupTitle,
          region: dongName,
          service,
          type: group.type,
          level: "dong",
          phase: group.phase,
          exposeInHub: isCollided ? false : group.dongExposeInHub
        });
      });
    });
  }
});

// exposeInHub === true인 키워드만 가져오기
const visibleKeywords = allKeywords.filter(k => k.exposeInHub);

// 노출이 승인된 그룹들 필터링
const activeGroups = regionGroups.filter(group => 
  visibleKeywords.some(k => k.parent === group.groupTitle)
);

// 1. GNB 헤더 HTML 생성
const headerHtml = `
<header style="position: sticky; top: 0; z-index: 50; width: 100%; border-bottom: 1px solid rgba(0, 0, 0, 0.05); backgroundColor: rgba(255, 255, 255, 0.9); backdropFilter: blur(12px); -webkit-backdrop-filter: blur(12px); boxShadow: 0 1px 3px rgba(0,0,0,0.02)">
  <div class="container" style="height: 80px; display: flex; align-items: center; justify-content: space-between">
    <a href="/" style="text-decoration: none; display: flex; align-items: center; gap: 0.5rem">
      <div style="width: 32px; height: 32px; background-color: var(--primary-color, #1b61fc); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 900; font-size: 1.1rem">R</div>
      <span style="font-weight: 900; font-size: 1.35rem; color: var(--text-dark, #0f172a); letter-spacing: -0.04em">레인가드</span>
    </a>
    <nav class="desktop-nav" style="display: flex; gap: 2rem">
      <a href="#problems" class="nav-link" style="font-weight: 700; font-size: 0.95rem; color: var(--text-muted, #64748b); text-decoration: none">누수진단</a>
      <a href="#services" class="nav-link" style="font-weight: 700; font-size: 0.95rem; color: var(--text-muted, #64748b); text-decoration: none">서비스안내</a>
      <a href="#process" class="nav-link" style="font-weight: 700; font-size: 0.95rem; color: var(--text-muted, #64748b); text-decoration: none">시공과정</a>
      <a href="#cases" class="nav-link" style="font-weight: 700; font-size: 0.95rem; color: var(--text-muted, #64748b); text-decoration: none">시공예시</a>
      <a href="#areas" class="nav-link" style="font-weight: 700; font-size: 0.95rem; color: var(--text-muted, #64748b); text-decoration: none">서비스지역</a>
    </nav>
    <a href="tel:010-9661-2196" class="btn btn-primary" style="padding: 0.6rem 1.2rem; font-size: 0.95rem; border-radius: 10px; box-shadow: none; text-decoration: none; color: #fff; background-color: var(--primary-color, #1b61fc)">📞 전화 문의</a>
  </div>
</header>
`;

// 2. 메인 콘텐츠 HTML 생성
let contentHtml = `
<main style="flex-grow: 1; padding: 5rem 1.5rem; background-color: #f8fafc">
  <div style="max-width: 800px; margin: 0 auto">
    
    <div style="margin-bottom: 3rem">
      <h1 style="font-size: 2rem; font-weight: 800; color: #0f172a; margin-bottom: 1rem; letter-spacing: -0.03em">
        경남 방수·도색 시공 서비스 안내
      </h1>
      <p style="color: #475569; font-size: 1.05rem; line-height: 1.6; margin: 0">
        경남 지역 외벽방수, 외벽발수, 옥상방수, 지붕방수, 외벽도색, 옥상누수, 외벽누수, 건물방수 관련 페이지를 확인하실 수 있습니다. 원하시는 시공 지역과 서비스를 선택하여 확인해 주세요.
      </p>
    </div>
`;

activeGroups.forEach(group => {
  const groupKeywords = visibleKeywords.filter(k => k.parent === group.groupTitle);
  
  contentHtml += `
    <section style="margin-bottom: 3rem">
      <h2 style="font-size: 1.35rem; font-weight: 800; color: #1e293b; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1.5px solid #cbd5e1">
        ${group.groupTitle}
      </h2>
      <div class="keyword-links" style="display: flex; flex-wrap: wrap; gap: 0.6rem 1rem">
  `;

  groupKeywords.forEach(link => {
    const rawHref = `/?k=${link.k}`;
    contentHtml += `
        <a href="${rawHref}" class="hub-link" style="font-size: 0.95rem; color: #2563eb; text-decoration: none; font-weight: 500; line-height: 1.5">${link.displayText}</a>
    `;
  });

  contentHtml += `
      </div>
    </section>
  `;
});

contentHtml += `
    <div style="text-align: center; margin-top: 4rem">
      <a href="/" class="back-btn" style="display: inline-block; padding: 0.8rem 2rem; border-radius: 8px; border: 1px solid #cbd5e1; background-color: #ffffff; color: #475569; font-size: 0.95rem; font-weight: 600; text-decoration: none">🏠 메인 홈페이지로 이동</a>
    </div>

  </div>
</main>
`;

// 3. Footer HTML 생성
const footerHtml = `
<footer style="background-color: #111827; color: #9ca3af; padding: 5rem 0; font-size: 0.88rem; border-top: 1px solid #1f2937; text-align: left">
  <div class="container">
    <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 3rem; margin-bottom: 3rem" class="footer-top">
      <div style="flex: 1 1 300px">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem">
          <div style="width: 24px; height: 24px; background-color: var(--primary-color, #1b61fc); border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 900; font-size: 0.85rem">R</div>
          <span style="font-weight: 900; font-size: 1.2rem; color: #ffffff; letter-spacing: -0.03em">레인가드</span>
        </div>
        <p style="line-height: 1.6; color: #6b7280">레인가드은 부산, 경남, 울산 전 지역의 아파트, 상가, 주택 건물의 빗물누수를 원천 차단하는 방수·발수·도색 시공 전문 브랜드입니다. 정밀 원인 진단 및 책임감 있는 관리 서비스를 약속합니다.</p>
      </div>
      <div style="flex: 1 1 200px">
        <h4 style="color: #ffffff; font-size: 1rem; font-weight: 800; margin: 0 0 1rem 0">고객센터 및 상담</h4>
        <a href="tel:010-9661-2196" style="font-size: 2rem; font-weight: 900; color: var(--primary-color, #1b61fc); text-decoration: none; display: block; margin-bottom: 0.5rem">010-9661-2196</a>
        <p style="margin: 0; color: #6b7280; font-weight: 700">평일 / 주말 오전 7:00 ~ 오후 6:00 (연중무휴)</p>
      </div>
    </div>
    <div style="border-top: 1px solid #1f2937; padding-top: 2rem; display: flex; flex-direction: column; gap: 1rem">
      <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem; align-items: center" class="footer-bottom-info">
        <p style="color: #6b7280; margin: 0; font-weight: 500">
          <span style="margin-right: 1.5rem">상호: 경남레인가드</span>
          <span style="margin-right: 1.5rem">대표자: 김태진</span>
          <span>사업자등록번호: 727-25-01582</span>
        </p>
        <p style="color: #6b7280; margin: 0">© ${new Date().getFullYear()} 레인가드. All rights reserved.</p>
      </div>
      <p style="color: #4b5563; font-size: 0.8rem; border-top: 1px dashed #1f2937; padding-top: 1rem; margin: 0">* 경상남도(김해, 양산, 창원, 밀양 등), 부산광역시, 울산광역시 전 지역 방수·발수·도색 시공 및 방문 실측 누수 탐지 접수 상담 가능</p>
    </div>
  </div>
</footer>
`;

const rootReplacement = `
<div id="root">
  <div class="app-container" style="min-height: 100vh; display: flex; flex-direction: column">
    ${headerHtml}
    ${contentHtml}
    ${footerHtml}
  </div>
</div>
`;

// 빌드 과정 파싱 및 대체 작업 실행
try {
  const indexHtmlPath = path.resolve('dist', 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    throw new Error(`dist/index.html not found! Make sure you run 'vite build' before this script.`);
  }

  let indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

  // 1. robots 메타 태그 주입 및 title 교체
  const robotsMeta = `<meta name="robots" content="index,follow">\n    <meta name="description" content="경남 지역 외벽방수, 외벽발수, 옥상방수, 지붕방수, 외벽도색, 옥상누수, 외벽누수, 건물방수 관련 시공 지역 및 서비스를 확인하실 수 있습니다.">`;
  
  if (indexHtml.includes('<meta name="viewport"')) {
    indexHtml = indexHtml.replace(
      /<meta name="viewport"[^>]+>/,
      (match) => `${match}\n    ${robotsMeta}`
    );
  } else {
    indexHtml = indexHtml.replace('<head>', `<head>\n    ${robotsMeta}`);
  }

  // title 태그 치환
  indexHtml = indexHtml.replace('<title>-</title>', `<title>경남 방수·도색 시공 서비스 안내 | 레인가드</title>`);

  // 2. <div id="root"></div> 영역을 사전 렌더링된 마크업으로 치환
  indexHtml = indexHtml.replace('<div id="root"></div>', rootReplacement);

  // 3. dist/sitemap-gimhae 디렉토리가 없으면 자동 생성
  const sitemapDir = path.resolve('dist', 'sitemap-gimhae');
  if (!fs.existsSync(sitemapDir)) {
    fs.mkdirSync(sitemapDir, { recursive: true });
  }

  // 4. dist/sitemap-gimhae/index.html 로 저장
  const destPath = path.join(sitemapDir, 'index.html');
  fs.writeFileSync(destPath, indexHtml, 'utf-8');

  console.log(`\nPrerendered sitemap-gimhae page successfully created at ${destPath}!`);
  console.log(`- Robots Meta: index,follow (Injected)`);
  console.log(`- Prerendered Static links: ${visibleKeywords.length} anchor tags (Injected)`);
} catch (e) {
  console.error("Prerendering failed:", e);
  process.exit(1);
}
