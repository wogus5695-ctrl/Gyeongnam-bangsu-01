import fs from 'fs';
import path from 'path';
import { regionGroups, generateKeywordItems } from '../src/data/keywords';

const origin = "https://www.gnrainguard.co.kr";

const visibleKeywords = generateKeywordItems().filter(k => k.exposeInHub);

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
    const rawHref = `/?k=${encodeURIComponent(link.k)}`;
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
