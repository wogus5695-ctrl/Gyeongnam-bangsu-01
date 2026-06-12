import React from "react";
import { services } from "../data/services";
import { generateKeywordItems } from "../data/keywords";
import Header from "./Header";
import Footer from "./Footer";

// 각 서비스별 1줄 카드 설명 매핑
const cardDescriptions: Record<string, string> = {
  "exterior-waterproof": "외벽 크랙과 조인트 부위의 빗물 유입을 확인하고 필요한 방수 시공을 안내합니다.",
  "exterior-repellent": "외벽 표면의 수분 흡수와 오염을 줄이기 위한 발수 시공을 안내합니다.",
  "rooftop-waterproof": "옥상 방수층 노후, 바닥 균열, 배수구 주변 손상에 따른 방수 시공을 안내합니다.",
  "roof-waterproof": "판넬지붕, 슬라브지붕, 기와지붕 등 지붕 구조에 맞는 방수 보강을 안내합니다.",
  "exterior-painting": "외벽 오염, 색 바램, 도막 박리 상태에 맞는 외벽도색 방향을 안내합니다.",
  "rooftop-leak": "옥상 방수층, 배수구, 파라펫 접합부 등 누수 원인을 확인합니다.",
  "exterior-leak": "외벽 크랙, 창틀 주변, 조인트 부위의 빗물 유입 가능성을 확인합니다.",
  "building-waterproof": "외벽, 옥상, 지붕 등 건물 전체의 누수 취약 부위를 종합적으로 확인합니다."
};

export const SitemapGimhae: React.FC = () => {
  // 한글 서비스 명칭과 영문 서비스 키 매핑
  const serviceKeyMap = services.reduce((acc, curr) => {
    acc[curr.name] = curr.key;
    return acc;
  }, {} as Record<string, string>);

  // 전체 키워드 중 phase 1만 노출 (시단위 + 마산 별칭)
  const allKeywords = generateKeywordItems();
  const visibleKeywords = allKeywords.filter(k => k.phase === 1);

  // 지역 유형에 따라 그룹화
  const cityKeywords = visibleKeywords.filter(k => k.type === "city");
  const aliasKeywords = visibleKeywords.filter(k => k.type === "alias");

  // 개별 키워드 아이템 렌더러 함수
  const renderKeywordLink = (link: typeof visibleKeywords[0]) => {
    const serviceKey = serviceKeyMap[link.service] || "";
    const desc = cardDescriptions[serviceKey] || `${link.service} 안내 페이지입니다.`;

    return (
      <a
        key={link.label}
        href={link.href}
        className="card sitemap-link-card"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "1.5rem 2rem",
          textDecoration: "none",
          textAlign: "left",
          borderRadius: "16px",
          border: "1px solid var(--border-color)",
          backgroundColor: "var(--bg-white)",
          transition: "all 0.2s ease"
        }}
      >
        <span style={{
          fontSize: "1.15rem",
          fontWeight: 900,
          color: "var(--primary-color)",
          marginBottom: "0.3rem",
          letterSpacing: "-0.02em"
        }}>
          {link.label} →
        </span>
        
        <span style={{
          fontSize: "0.9rem",
          color: "var(--text-muted)",
          fontWeight: 500,
          lineHeight: "1.5"
        }}>
          {desc}
        </span>
      </a>
    );
  };

  return (
    <div className="app-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* GNB 헤더 */}
      <Header />

      {/* 메인 허브 콘텐츠 */}
      <main style={{ flexGrow: 1, padding: "5rem 0", backgroundColor: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          
          {/* 상단 텍스트 정보 */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="badge badge-blue" style={{ marginBottom: "1rem" }}>SEO Keyword Directory</span>
            
            <h1 style={{
              fontSize: "2.3rem",
              fontWeight: 900,
              color: "var(--text-dark)",
              marginBottom: "1.5rem",
              letterSpacing: "-0.04em"
            }}>
              경남 방수·도색 키워드 안내
            </h1>
            
            <p style={{
              color: "var(--text-muted)",
              fontSize: "1.05rem",
              fontWeight: 500,
              lineHeight: "1.6"
            }} className="break-keep">
              경남 시단위와 주요 검색 별칭 등 레인가드가 제공하는 각 키워드별 상세 안내 페이지입니다. 키워드를 클릭하면 해당 서비스 설명 페이지로 연결됩니다.
            </p>
          </div>

          {/* 1. 경남 시단위 키워드 그룹 */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "var(--text-dark)",
              marginBottom: "1.5rem",
              letterSpacing: "-0.03em",
              borderLeft: "4px solid var(--primary-color)",
              paddingLeft: "0.75rem"
            }}>
              📍 경남 시단위 키워드 ({cityKeywords.length}개)
            </h2>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1rem"
            }}>
              {cityKeywords.map(renderKeywordLink)}
            </div>
          </div>

          {/* 2. 마산 검색 별칭 키워드 그룹 */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "var(--text-dark)",
              marginBottom: "1.5rem",
              letterSpacing: "-0.03em",
              borderLeft: "4px solid var(--accent-color, #f43f5e)",
              paddingLeft: "0.75rem"
            }}>
              🔍 마산 검색 별칭 키워드 ({aliasKeywords.length}개)
            </h2>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1rem"
            }}>
              {aliasKeywords.map(renderKeywordLink)}
            </div>
          </div>

          {/* 홈으로 돌아가기 버튼 */}
          <div style={{ textAlign: "center", marginTop: "5rem" }}>
            <a
              href="/"
              className="btn btn-outline"
              style={{
                padding: "1rem 2.5rem",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "1.05rem"
              }}
            >
              🏠 메인 홈페이지로 이동
            </a>
          </div>

        </div>
      </main>

      {/* 푸터 */}
      <Footer />

      <style>{`
        .sitemap-link-card:hover {
          transform: translateX(6px) !important;
          border-color: rgba(27, 97, 252, 0.3) !important;
          box-shadow: var(--shadow-md) !important;
        }
        @media (max-width: 768px) {
          .sitemap-link-card {
            padding: 1.25rem 1.5rem !important;
          }
          .sitemap-link-card span:first-child {
            font-size: 1.05rem !important;
          }
          .sitemap-link-card span:last-child {
            font-size: 0.82rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SitemapGimhae;
