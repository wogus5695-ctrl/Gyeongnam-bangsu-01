import React from "react";
import { heroImages } from "../data/images";
import type { KeywordConfig } from "../data/keywords";

interface HeroProps {
  keywordConfig: KeywordConfig;
}

export const Hero: React.FC<HeroProps> = ({ keywordConfig }) => {
  // 기본/동적 페이지 데이터 추출
  const topLabel = keywordConfig.topLabel;

  // 강조 배지 보강 목록
  const pcBadges = ["사진 상담 가능", "누수 원인 확인", "필요 공정만 안내"];
  const moBadges = ["사진 상담 가능", "원인 확인 후 안내"];

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
        {/* 우측 작업 현장 이미지가 보이도록 좌측 텍스트 영역의 가로폭 최대 600px로 세팅 */}
        <div className="hero-content" style={{ textAlign: "left", maxWidth: "600px", width: "100%" }}>
          {/* 1. 라벨 */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <span className="badge badge-blue" style={{
              backgroundColor: "rgba(27, 97, 252, 0.15)",
              color: "#60a5fa",
              border: "1px solid rgba(27, 97, 252, 0.3)"
            }}>
              {topLabel}
            </span>
          </div>
          
          {/* 2. H1 */}
          <h1 style={{
            fontSize: "2.6rem",
            fontWeight: 900,
            lineHeight: "1.35",
            color: "#ffffff",
            margin: "0 0 1rem 0",
            letterSpacing: "-0.03em",
            whiteSpace: "pre-line"
          }} className="break-keep hero-h1">
            {(() => {
              const text = keywordConfig.h1;
              if (!text.includes("\n")) {
                return text;
              }
              const [line1, line2] = text.split("\n");
              const targetPhrases = [
                "취약 부위별로",
                "유입 경로를",
                "근본적인 원인부터",
                "바탕면 정리부터",
                "접합부 틈새부터",
                "원인부터",
                "표면 흡수부터",
                "누수 원인부터"
              ];
              const matchedPhrase = targetPhrases.find(phrase => line2.startsWith(phrase));
              if (matchedPhrase) {
                const remainingText = line2.slice(matchedPhrase.length);
                return (
                  <>
                    {line1}
                    <br />
                    <span style={{
                      textDecoration: "underline",
                      textDecorationColor: "var(--primary-color, #1b61fc)",
                      textUnderlineOffset: "8px",
                      textDecorationThickness: "4px"
                    }}>
                      {matchedPhrase}
                    </span>
                    {remainingText}
                  </>
                );
              }
              return (
                <>
                  {line1}
                  <br />
                  {line2}
                </>
              );
            })()}
          </h1>
          
          {/* 3. 본문 */}
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

          {/* 4. 보조 키워드 문구 (본문 아래 차분한 톤으로 배치) */}
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

          {/* 5. 강조 배지 (PC용 - 3개 노출) */}
          <div style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.5rem",
            marginBottom: "0px",
            maxWidth: "540px"
          }} className="hero-badges-pc">
            {pcBadges.map((badgeText, idx) => (
              <div key={idx} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#f8fafc",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                padding: "0.6rem 0.8rem",
                borderRadius: "8px",
                whiteSpace: "nowrap"
              }} className="hero-badge-item">
                {badgeText}
              </div>
            ))}
          </div>

          {/* 5. 강조 배지 (모바일용 - 2개 노출) */}
          <div style={{
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem",
            marginBottom: "0px",
            maxWidth: "360px"
          }} className="hero-badges-mo">
            {moBadges.map((badgeText, idx) => (
              <div key={idx} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.76rem",
                fontWeight: 700,
                color: "#f8fafc",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                padding: "0.55rem 0.7rem",
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
            rgba(5, 15, 35, 0.88) 0%,
            rgba(5, 15, 35, 0.72) 38%,
            rgba(5, 15, 35, 0.32) 68%,
            rgba(5, 15, 35, 0.12) 100%
          ), url('${heroImages.default}');
          background-size: cover;
          background-position: center right;
        }
        .hero-badges-pc {
          display: grid;
        }
        .hero-badges-mo {
          display: none;
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
              180deg,
              rgba(5, 15, 35, 0.82) 0%,
              rgba(5, 15, 35, 0.68) 45%,
              rgba(5, 15, 35, 0.50) 100%
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
            margin-bottom: 1rem !important;
          }
          .hero-badges-pc {
            display: none !important;
          }
          .hero-badges-mo {
            display: grid !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
