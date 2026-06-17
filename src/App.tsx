import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import ServiceSection from "./components/ServiceSection";
import DiagnosisSection from "./components/DiagnosisSection";
import ProcessSection from "./components/ProcessSection";
import CostSection from "./components/CostSection";
import CaseSection from "./components/CaseSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import SitemapGimhae from "./components/SitemapGimhae";
import FaqSection from "./components/FaqSection";
import { parseQueryKeyword, SITEMAP_GIMHAE_SEO } from "./data/keywords";
import { getDynamicFaqs } from "./data/faq";
import { BRAND_NAME, REPRESENTATIVE_NAME, BUSINESS_NUMBER, CONTACT_PHONE } from "./data/brand";
import type { KeywordConfig } from "./data/keywords";
import "./App.css";

export const App: React.FC = () => {
  // 현재 URL 경로 관리 상태
  const [currentPath, setCurrentPath] = useState(() => {
    return typeof window !== "undefined" ? window.location.pathname : "/";
  });

  // 컴포넌트 마운트 시 최초 URL 파라미터를 읽어 키워드 상태 초기화
  const [keywordConfig, setKeywordConfig] = useState<KeywordConfig>(() => {
    const searchStr = typeof window !== "undefined" ? window.location.search : "";
    return parseQueryKeyword(searchStr);
  });

  // URL 변경 감지 (예: SPA 라우트 변경 대응용 안전장치)
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      setKeywordConfig(parseQueryKeyword(window.location.search));
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  // SEO 타이틀, 메타 태그, Canonical, JSON-LD 동적 렌더링 주입 로직
  useEffect(() => {
    const isSitemapPage = currentPath === "/sitemap-gimhae";

    // 1. 문서 타이틀 및 메타 설명문 결정
    const pageTitle = isSitemapPage ? SITEMAP_GIMHAE_SEO.title : keywordConfig.title;
    const pageDesc = isSitemapPage ? SITEMAP_GIMHAE_SEO.description : keywordConfig.description;

    document.title = pageTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", pageDesc);

    // Open Graph 타이틀 반영
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", pageTitle);

    // Open Graph 설명문 반영
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", pageDesc);

    // 2. Canonical Link 동적 업데이트
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    const origin = "https://www.gnrainguard.co.kr";
    let canonicalHref = origin;
    if (isSitemapPage) {
      canonicalHref = `${origin}/sitemap-gimhae`;
    } else if (keywordConfig.isActive) {
      canonicalHref = `${origin}/?k=${keywordConfig.region}-${keywordConfig.service}`;
    } else {
      canonicalHref = `${origin}/`;
    }
    canonicalEl.setAttribute("href", canonicalHref);

    // Open Graph URL 반영
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", canonicalHref);

    // Open Graph 이미지 반영 (서비스별 특화 썸네일 노출로 후킹성 극대화 및 스팸 방지)
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    
    let ogImageFilename = "og-image.jpg"; // 기본값
    if (keywordConfig.isActive && keywordConfig.service) {
      const serviceImageMap: Record<string, string> = {
        "외벽방수": "images/service-exterior-waterproof-actual.jpg",
        "외벽발수": "images/service-exterior-waterproof-actual.jpg",
        "옥상방수": "images/service-rooftop-waterproof-actual.jpg",
        "지붕방수": "images/service-roof-waterproof-actual.jpg",
        "외벽도색": "images/service-exterior-painting-actual.jpg",
        "옥상누수": "images/defect-waterproof-layer-actual.jpg",
        "외벽누수": "images/defect-crack-actual.jpg",
        "건물방수": "images/hero-waterproof-actual.jpg"
      };
      
      const mappedImg = serviceImageMap[keywordConfig.service];
      if (mappedImg) {
        ogImageFilename = mappedImg;
      }
    }
    ogImage.setAttribute("content", `${origin}/${ogImageFilename}`);

    // Open Graph 이미지 크기 명시 (네이버 검색 최적화)
    let ogImageWidth = document.querySelector('meta[property="og:image:width"]');
    if (!ogImageWidth) {
      ogImageWidth = document.createElement("meta");
      ogImageWidth.setAttribute("property", "og:image:width");
      document.head.appendChild(ogImageWidth);
    }
    ogImageWidth.setAttribute("content", "1200");

    let ogImageHeight = document.querySelector('meta[property="og:image:height"]');
    if (!ogImageHeight) {
      ogImageHeight = document.createElement("meta");
      ogImageHeight.setAttribute("property", "og:image:height");
      document.head.appendChild(ogImageHeight);
    }
    ogImageHeight.setAttribute("content", "630");

    // 3. JSON-LD 동적 삽입/업데이트
    let jsonLdEl = document.getElementById("json-ld-seo");
    if (!jsonLdEl) {
      jsonLdEl = document.createElement("script");
      jsonLdEl.setAttribute("id", "json-ld-seo");
      jsonLdEl.setAttribute("type", "application/ld+json");
      document.head.appendChild(jsonLdEl);
    }

    // 3.1 LocalBusiness Schema
    const localBusiness: any = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": BRAND_NAME,
      "url": origin,
      "image": `${origin}/og-image.jpg`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "김해시",
        "addressRegion": "경상남도",
        "addressCountry": "KR"
      }
    };
    if (CONTACT_PHONE) {
      localBusiness.telephone = CONTACT_PHONE;
    }
    if (REPRESENTATIVE_NAME) {
      localBusiness.founder = {
        "@type": "Person",
        "name": REPRESENTATIVE_NAME
      };
    }
    if (BUSINESS_NUMBER) {
      localBusiness.taxID = BUSINESS_NUMBER;
    }

    // 3.2 Service Schema
    const serviceSchema: any = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": keywordConfig.isActive ? `${keywordConfig.fullKeyword} 전문 시공` : "부산·경남·울산 방수·도색 서비스",
      "serviceType": keywordConfig.isActive ? `${keywordConfig.region} ${keywordConfig.service}` : "방수 및 도색 전문",
      "provider": {
        "@type": "LocalBusiness",
        "name": BRAND_NAME,
        "url": origin
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "김해시"
        },
        {
          "@type": "AdministrativeArea",
          "name": "부산광역시"
        },
        {
          "@type": "AdministrativeArea",
          "name": "울산광역시"
        },
        {
          "@type": "AdministrativeArea",
          "name": "경상남도"
        }
      ],
      "description": pageDesc
    };

    // 3.3 FAQPage Schema
    const displayFaqsForLd = getDynamicFaqs(keywordConfig);
    const faqPageSchema: any = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": displayFaqsForLd.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // 3.4 BreadcrumbList Schema
    const itemListElement: any[] = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "홈",
        "item": `${origin}/`
      }
    ];

    if (isSitemapPage) {
      itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "김해 방수·도색 키워드 안내",
        "item": `${origin}/sitemap-gimhae`
      });
    } else if (keywordConfig.isActive) {
      itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": keywordConfig.fullKeyword,
        "item": `${origin}/?k=${keywordConfig.region}-${keywordConfig.service}`
      });
    }

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement
    };

    const schemas = [localBusiness, serviceSchema, faqPageSchema, breadcrumbSchema];
    jsonLdEl.textContent = JSON.stringify(schemas, null, 2);
  }, [keywordConfig, currentPath]);

  // 분기 라우팅 처리
  if (currentPath === "/sitemap-gimhae") {
    return <SitemapGimhae />;
  }

  return (
    <div className="app-container">
      {/* 1. 상단 GNB 헤더 */}
      <Header />

      {/* 2. 메인 히어로 섹션 (동적 타이틀/본문/CTA 매핑) */}
      <Hero keywordConfig={keywordConfig} />

      {/* 3. 고민 인식 섹션 */}
      <ProblemSection keywordConfig={keywordConfig} />

      {/* 4. 8대 전문 서비스 소개 (동적 하이라이트/매핑 탑재) */}
      <ServiceSection keywordConfig={keywordConfig} />

      {/* 5. 전문 진단이 필요한 이유 */}
      <DiagnosisSection keywordConfig={keywordConfig} />

      {/* 6. 시공 공정 5단계 */}
      <ProcessSection keywordConfig={keywordConfig} />

      {/* 7. 비용 결정 10대 요소 */}
      <CostSection keywordConfig={keywordConfig} />

      {/* 8. 대표 작업 예시 */}
      <CaseSection keywordConfig={keywordConfig} />

      {/* FAQ 자주 묻는 질문 */}
      <FaqSection keywordConfig={keywordConfig} />

      {/* 9. 최종 CTA 배너 */}
      <FinalCTA keywordConfig={keywordConfig} />

      {/* 12. 푸터 */}
      <Footer />

      {/* 13. 모바일 하단 고정 CTA */}
      <FloatingCTA />
    </div>
  );
};

export default App;
