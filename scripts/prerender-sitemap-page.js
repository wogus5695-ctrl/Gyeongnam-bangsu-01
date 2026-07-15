import fs from 'fs';
import path from 'path';
import { regionGroups, generateKeywordItems } from '../src/data/keywords';
import { BRAND_NAME, COMPANY_NAME, REPRESENTATIVE_NAME, BUSINESS_NUMBER, CONTACT_PHONE } from '../src/data/brand';

const origin = "https://www.gnrainguard.co.kr";

const visibleKeywords = generateKeywordItems().filter(k => k.exposeInHub);

// 노출이 승인된 그룹들 필터링
const activeGroups = regionGroups.filter(group => 
  visibleKeywords.some(k => k.parent === group.groupTitle)
);

// 1. GNB 헤더 HTML 생성
const headerHtml = `
<header style="position: sticky; top: 0; z-index: 50; width: 100%; border-bottom: 1px solid rgba(0, 0, 0, 0.05); background-color: rgba(255, 255, 255, 0.9); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); box-shadow: 0 1px 3px rgba(0,0,0,0.02)">
  <div class="container header-container" style="display: flex; align-items: center; justify-content: space-between; box-sizing: border-box">
    <a href="/" style="text-decoration: none; display: flex; align-items: center; gap: 0.5rem">
      <div class="logo-icon" style="width: 32px; height: 32px; background-color: var(--primary-color, #1b61fc); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 900; font-size: 1.1rem; flex-shrink: 0">R</div>
      <span class="logo-text" style="font-weight: 900; font-size: 1.35rem; color: var(--text-dark, #0f172a); letter-spacing: -0.04em">${BRAND_NAME}</span>
    </a>
    <nav class="desktop-nav" style="display: flex; gap: 2rem">
      <a href="#problems" class="nav-link" style="font-weight: 700; font-size: 0.95rem; color: var(--text-muted, #64748b); text-decoration: none">누수진단</a>
      <a href="#services" class="nav-link" style="font-weight: 700; font-size: 0.95rem; color: var(--text-muted, #64748b); text-decoration: none">서비스안내</a>
      <a href="#process" class="nav-link" style="font-weight: 700; font-size: 0.95rem; color: var(--text-muted, #64748b); text-decoration: none">시공과정</a>
      <a href="#cases" class="nav-link" style="font-weight: 700; font-size: 0.95rem; color: var(--text-muted, #64748b); text-decoration: none">시공예시</a>
      <a href="#areas" class="nav-link" style="font-weight: 700; font-size: 0.95rem; color: var(--text-muted, #64748b); text-decoration: none">서비스지역</a>
    </nav>
    <a href="tel:${CONTACT_PHONE}" class="btn btn-primary header-cta-btn" style="padding: 0.6rem 1.2rem; font-size: 0.95rem; border-radius: 10px; box-shadow: none; text-decoration: none; color: #fff; background-color: var(--primary-color, #1b61fc); display: inline-flex; align-items: center; justify-content: center; white-space: nowrap">
      <span class="cta-text-pc">📞 작업 가능 여부 전화 확인</span>
      <span class="cta-text-mo">📞 전화 문의</span>
    </a>
  </div>
  <style>
    .header-container {
      height: 80px;
    }
    .cta-text-pc {
      display: inline;
    }
    .cta-text-mo {
      display: none;
    }
    .logo-text {
      white-space: nowrap;
    }
    @media (max-width: 768px) {
      .header-container {
        height: 60px !important;
      }
      .desktop-nav {
        display: none !important;
      }
      .cta-text-pc {
        display: none !important;
      }
      .cta-text-mo {
        display: inline !important;
      }
      .logo-text {
        font-size: 1.15rem !important;
      }
      .logo-icon {
        width: 28px !important;
        height: 28px !important;
        font-size: 0.95rem !important;
      }
      .header-cta-btn {
        padding: 0.5rem 0.8rem !important;
        font-size: 0.85rem !important;
        height: 44px !important;
        border-radius: 8px !important;
      }
    }
  </style>
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
          <span style="font-weight: 900; font-size: 1.2rem; color: #ffffff; letter-spacing: -0.03em">${BRAND_NAME}</span>
        </div>
        <p style="line-height: 1.6; color: #6b7280">${BRAND_NAME}은 부산, 경남, 울산 전 지역의 아파트, 상가, 주택 건물의 빗물누수를 원천 차단하는 방수·발수·도색 시공 전문 브랜드입니다. 정밀 원인 진단 및 책임감 있는 관리 서비스를 약속합니다.</p>
      </div>
      <div style="flex: 1 1 200px">
        <h4 style="color: #ffffff; font-size: 1rem; font-weight: 800; margin: 0 0 1rem 0">고객센터 및 상담</h4>
        <a href="tel:${CONTACT_PHONE}" style="font-size: 2rem; font-weight: 900; color: var(--primary-color, #1b61fc); text-decoration: none; display: block; margin-bottom: 0.5rem">${CONTACT_PHONE}</a>
        <p style="margin: 0; color: #6b7280; font-weight: 700">평일 / 주말 오전 7:00 ~ 오후 6:00 (연중무휴)</p>
      </div>
    </div>
    <div style="border-top: 1px solid #1f2937; padding-top: 2rem; display: flex; flex-direction: column; gap: 1rem">
      <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem; align-items: center" class="footer-bottom-info">
        <p style="color: #6b7280; margin: 0; font-weight: 500">
          <span style="margin-right: 1.5rem">상호: ${COMPANY_NAME}</span>
          <span style="margin-right: 1.5rem">대표자: ${REPRESENTATIVE_NAME}</span>
          <span>사업자등록번호: ${BUSINESS_NUMBER}</span>
        </p>
        <p style="color: #6b7280; margin: 0">© ${new Date().getFullYear()} ${BRAND_NAME}. All rights reserved.</p>
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
