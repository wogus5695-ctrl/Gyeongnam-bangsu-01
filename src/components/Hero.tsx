import React from "react";
import { heroImages } from "../data/images";
import type { KeywordConfig } from "../data/keywords";

interface HeroProps {
  keywordConfig: KeywordConfig;
}

export const Hero: React.FC<HeroProps> = ({ keywordConfig }) => {
  // 기본/동적 페이지 데이터 추출
  const topLabel = keywordConfig.topLabel;
  // 신뢰 배지 2개로 제한
  const badges = keywordConfig.badges.slice(0, 2);

  return (
    <section className="hero-section hero-section-bg" 
      title={keywordConfig.imageDesc}
      aria-label={keywordConfig.imageDesc}
      style={{
        position: "relative",
        minHeight: "580px",
        height: "580px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden"
      }}
    >
      <div className="container">
        {/* 우측 미디어 카드는 제거하고 좌측 텍스트 영역만 너비 제한으로 렌더링 */}
        <div className="hero-content" style={{ textAlign: "left", maxWidth: "620px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <span className="badge badge-blue" style={{
              backgroundColor: "rgba(27, 97, 252, 0.15)",
              color: "#60a5fa",
              border: "1px solid rgba(27, 97, 252, 0.3)"
            }}>
              {topLabel}
            </span>
          </div>
          
          <h1 style={{
            fontSize: "2.8rem",
            fontWeight: 900,
            lineHeight: "1.3",
            color: "#ffffff",
            margin: "0 0 1rem 0",
            letterSpacing: "-0.03em",
            whiteSpace: "pre-line"
          }} className="break-keep hero-h1">
            {keywordConfig.h1}
          </h1>
          
          <p style={{
            fontSize: "1.05rem",
            fontWeight: 500,
            color: "#cbd5e1",
            lineHeight: "1.65",
            margin: "0 0 1rem 0",
            whiteSpace: "pre-line"
          }} className="break-keep hero-body-text">
            {keywordConfig.heroBody}
          </p>

          {/* SEO 보조 문구 노출 (본문 텍스트 아래로 이동하여 튀지 않게 조정) */}
          {keywordConfig.seoSubLabel && (
            <p style={{
              fontSize: "0.92rem",
              fontWeight: 600,
              color: "#94a3b8",
              marginTop: "0px",
              marginBottom: "1.5rem"
            }} className="break-keep hero-seo-sub">
              {keywordConfig.seoSubLabel}
            </p>
          )}

          {/* 신뢰 배지 2개 - 모바일에서는 미디어 쿼리로 display: none 처리 */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem",
            marginBottom: "0px",
            maxWidth: "360px"
          }} className="hero-badges">
            {badges.map((badgeText, idx) => (
              <div key={idx} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#cbd5e1",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "0.6rem 0.8rem",
                borderRadius: "8px",
                whiteSpace: "nowrap"
              }} className="hero-badge-item">
                {badgeText}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .hero-section-bg {
          background-image: linear-gradient(
            90deg,
            rgba(5, 15, 35, 0.95) 0%,
            rgba(5, 15, 35, 0.82) 45%,
            rgba(5, 15, 35, 0.35) 100%
          ), url('${heroImages.default}');
          background-size: cover;
          background-position: center right;
        }
        @media (max-width: 768px) {
          .hero-section {
            min-height: 460px !important;
            height: 460px !important;
            padding: 0 !important;
            display: flex !important;
            align-items: center !important;
          }
          .hero-section-bg {
            background-image: linear-gradient(
              rgba(5, 15, 35, 0.93),
              rgba(5, 15, 35, 0.93)
            ), url('${heroImages.default}');
            background-position: 65% center;
          }
          .hero-h1 {
            font-size: 1.8rem !important;
            margin-bottom: 0.75rem !important;
            line-height: 1.35 !important;
          }
          .hero-body-text {
            font-size: 0.92rem !important;
            margin-bottom: 0.75rem !important;
            line-height: 1.5 !important;
          }
          .hero-seo-sub {
            font-size: 0.82rem !important;
            margin-bottom: 0rem !important;
          }
          .hero-badges {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
