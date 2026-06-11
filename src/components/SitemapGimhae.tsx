import React from "react";
import { activeKeywordRegions } from "../data/regions";
import { services } from "../data/services";
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
  // activeKeywordRegions("김해")와 services(8종)를 다중 루프로 매핑해 김해 8대 키워드 링크 생성
  const keywordLinks = activeKeywordRegions.flatMap((region) =>
    services.map((service) => {
      const keyword = `${region} ${service.name}`;
      const url = `/?k=${region}-${service.name}`;
      const desc = cardDescriptions[service.key] || `${service.name} 안내 페이지입니다.`;
      
      return {
        keyword,
        url,
        desc,
        serviceKey: service.key
      };
    })
  );

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
              김해 방수·도색 키워드 안내
            </h1>
            
            <p style={{
              color: "var(--text-muted)",
              fontSize: "1.05rem",
              fontWeight: 500,
              lineHeight: "1.6"
            }} className="break-keep">
              김해 지역에서 제공하는 외벽방수, 외벽발수, 옥상방수, 지붕방수, 외벽도색, 옥상누수, 외벽누수, 건물방수 서비스 안내 페이지입니다. 각 키워드를 클릭하면 해당 서비스 안내 페이지로 이동합니다.
            </p>
          </div>

          {/* 8대 김해 키워드 카드 리스트 */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.25rem",
            marginBottom: "4rem"
          }}>
            {keywordLinks.map((link) => (
              <a
                key={link.keyword}
                href={link.url}
                className="card sitemap-link-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "1.75rem 2.25rem",
                  textDecoration: "none",
                  textAlign: "left",
                  borderRadius: "16px",
                  border: "1px solid var(--border-color)",
                  backgroundColor: "var(--bg-white)",
                  transition: "all 0.2s ease"
                }}
              >
                <span style={{
                  fontSize: "1.2rem",
                  fontWeight: 900,
                  color: "var(--primary-color)",
                  marginBottom: "0.4rem",
                  letterSpacing: "-0.02em"
                }}>
                  {link.keyword} →
                </span>
                
                <span style={{
                  fontSize: "0.92rem",
                  color: "var(--text-muted)",
                  fontWeight: 500,
                  lineHeight: "1.5"
                }}>
                  {link.desc}
                </span>
              </a>
            ))}
          </div>

          {/* 홈으로 돌아가기 버튼 */}
          <div style={{ textAlign: "center" }}>
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
          transform: translateX(5px) !important;
          border-color: rgba(27, 97, 252, 0.25) !important;
          box-shadow: var(--shadow-md) !important;
        }
        @media (max-width: 768px) {
          .sitemap-link-card {
            padding: 1.5rem !important;
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
