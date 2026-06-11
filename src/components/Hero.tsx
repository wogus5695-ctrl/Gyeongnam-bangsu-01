import React from "react";
import { CONTACT_PHONE, KAKAO_URL, HAS_PHONE, HAS_KAKAO } from "../data/brand";
import { heroImages } from "../data/images";
import type { KeywordConfig } from "../data/keywords";

interface HeroProps {
  keywordConfig: KeywordConfig;
}

export const Hero: React.FC<HeroProps> = ({ keywordConfig }) => {
  // 기본/동적 페이지 데이터 추출
  const topLabel = keywordConfig.topLabel;
  const badges = keywordConfig.badges;
  const phoneButtonText = `📞 ${keywordConfig.ctaText}`;
  const kakaoButtonText = `💬 ${keywordConfig.kakaoCtaText}`;

  return (
    <section className="hero-section hero-section-bg" 
      title={keywordConfig.imageDesc}
      aria-label={keywordConfig.imageDesc}
      style={{
        position: "relative",
        minHeight: "680px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden"
      }}
    >
      <div className="container">
        {/* 우측 미디어 카드는 제거하고 좌측 텍스트 영역만 너비 제한으로 렌더링 */}
        <div className="hero-content" style={{ textAlign: "left", maxWidth: "620px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
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
            margin: "0 0 1.25rem 0",
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
            margin: "0 0 1.25rem 0",
            whiteSpace: "pre-line"
          }} className="break-keep hero-body-text">
            {keywordConfig.heroBody}
          </p>

          {/* SEO 보조 문구 노출 */}
          {keywordConfig.seoSubLabel && (
            <p style={{
              fontSize: "0.95rem",
              fontWeight: 700,
              color: "#60a5fa",
              marginTop: "-0.75rem",
              marginBottom: "1.75rem"
            }} className="break-keep">
              {keywordConfig.seoSubLabel}
            </p>
          )}

          {/* 신뢰 배지 4개 - 모바일 최적화 (2열 고정) */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem",
            marginBottom: "1.75rem"
          }} className="hero-badges">
            {badges.map((badgeText, idx) => (
              <div key={idx} style={{
                display: "flex",
                alignItems: "center",
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "#cbd5e1",
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.03)",
                padding: "0.6rem 0.8rem",
                borderRadius: "8px",
                whiteSpace: "nowrap"
              }} className="hero-badge-item">
                {badgeText}
              </div>
            ))}
          </div>

          {/* 사진 안내 문구 노출 (CTA 바로 위로 이동) */}
          <p style={{
            fontSize: "0.92rem",
            fontWeight: 700,
            color: "#cbd5e1",
            marginTop: "0px",
            marginBottom: "0.75rem",
            lineHeight: "1.5"
          }} className="break-keep">
            💡 {keywordConfig.subCopy}
          </p>

          {/* CTA 버튼 - 변수 존재 유무에 따른 동적 예외 처리 */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem"
          }} className="hero-cta-buttons">
            <a
              href={HAS_PHONE ? `tel:${CONTACT_PHONE}` : "#contact"}
              className="btn btn-primary"
              style={{
                flex: "1 1 200px",
                fontSize: "1.05rem",
                padding: "1rem 1.5rem",
                boxShadow: "0 8px 20px rgba(27, 97, 252, 0.3)"
              }}
            >
              {phoneButtonText}
            </a>
            <a
              href={HAS_KAKAO ? KAKAO_URL : "#contact"}
              target={HAS_KAKAO ? "_blank" : "_self"}
              rel={HAS_KAKAO ? "noopener noreferrer" : undefined}
              className="btn btn-kakao"
              style={{
                flex: "1 1 200px",
                fontSize: "1.05rem",
                padding: "1rem 1.5rem",
                fontWeight: 900,
                backgroundColor: "#F5C400",
                color: "#3C1E1E",
                boxShadow: "0 8px 20px rgba(245, 196, 0, 0.15)"
              }}
            >
              {kakaoButtonText}
            </a>
          </div>
        </div>
      </div>
      
      <style>{`
        .hero-section-bg {
          background-image: linear-gradient(
            90deg,
            rgba(5, 15, 35, 0.9) 0%,
            rgba(5, 15, 35, 0.74) 42%,
            rgba(5, 15, 35, 0.32) 100%
          ), url('${heroImages.default}');
          background-size: cover;
          background-position: center right;
        }
        @media (max-width: 768px) {
          .hero-section {
            min-height: auto !important;
            padding: 4rem 0 !important;
          }
          .hero-section-bg {
            background-image: linear-gradient(
              rgba(5, 15, 35, 0.82),
              rgba(5, 15, 35, 0.82)
            ), url('${heroImages.default}');
            background-position: 65% center;
          }
          .hero-h1 {
            font-size: 1.8rem !important;
            margin-bottom: 0.75rem !important;
            line-height: 1.35 !important;
          }
          .hero-body-text {
            font-size: 0.95rem !important;
            margin-bottom: 1.25rem !important;
            line-height: 1.55 !important;
          }
          .hero-badges {
            margin-bottom: 1.25rem !important;
            gap: 0.35rem !important;
          }
          .hero-badge-item {
            font-size: 0.74rem !important;
            padding: 0.4rem 0.5rem !important;
          }
          .hero-cta-buttons .btn {
            padding: 0.9rem 1.2rem !important;
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
