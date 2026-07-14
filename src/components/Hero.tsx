import React from "react";
import { heroImages } from "../data/images";
import type { KeywordConfig } from "../data/keywords";

interface HeroProps {
  keywordConfig: KeywordConfig;
}

export const Hero: React.FC<HeroProps> = ({ keywordConfig }) => {
  // 화면 크기에 따른 모바일 여부 판단 (SSR 대응을 위해 useEffect에서 윈도우 크기 감지)
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const region = keywordConfig.region || "부산·경남·울산";
  const service = keywordConfig.service;

  // 기본값 설정
  let topLabel = keywordConfig.topLabel;
  let h1 = keywordConfig.h1;
  let heroBody = keywordConfig.heroBody;
  let badges = keywordConfig.badges || ["사진 상담 가능", "누수 원인 확인", "필요 공정만 안내"];

  // 모바일 전용 텍스트 압축 및 분기
  if (isMobile && keywordConfig.isActive) {
    topLabel = `${region} ${service} 현장진단`;
    badges = ["원인 확인 후 보수", "사진 상담 가능"];
  } else if (isMobile && !keywordConfig.isActive) {
    // 기본 메인 페이지 모바일 최적화
    h1 = "비가 올 때 새는 건물,\n막기 전에 유입 경로부터 확인합니다";
    heroBody = "외벽 균열·창호 접합부·옥상과 지붕 상태를 구분해\n필요한 보수 범위를 안내합니다.";
    badges = ["외벽·옥상·지붕 원인 구분", "고층 로프 작업 가능 여부 검토", "사진 사전 확인"];
  }

  // 모바일 및 PC 배지 개수 2개 고정
  const displayBadges = badges.slice(0, 2);

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
              const text = h1;
              if (!text.includes("\n")) {
                return text;
              }
              const [line1, line2] = text.split("\n");
              const targetPhrases = [
                "취약 부위별로",
                "물자국보다 유입 경로부터",
                "유입 경로를",
                "근본적인 원인부터",
                "방수층과 배수구부터",
                "바탕면 정리부터",
                "접합부 틈새부터",
                "원인부터",
                "표면 흡수부터",
                "누수 원인부터",
                "유입 경로부터",
                "방수층부터"
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
            {heroBody}
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

          {/* 5. 강조 배지 (PC용) */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "0px",
            maxWidth: "540px"
          }} className="hero-badges-pc">
            {displayBadges.map((badgeText, idx) => (
              <div key={idx} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "38px",
                fontSize: "13px",
                fontWeight: 700,
                color: "rgba(255, 255, 255, 0.95)",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "0 0.9rem",
                borderRadius: "11px",
                whiteSpace: "nowrap",
                boxSizing: "border-box"
              }} className="hero-badge-item">
                {badgeText}
              </div>
            ))}
          </div>

          {/* 5. 강조 배지 (모바일용) */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "0px",
            maxWidth: "360px"
          }} className="hero-badges-mo">
            {displayBadges.map((badgeText, idx) => (
              <div key={idx} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "38px",
                fontSize: "13px",
                fontWeight: 700,
                color: "rgba(255, 255, 255, 0.9)",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "0 0.8rem",
                borderRadius: "11px",
                whiteSpace: "nowrap",
                boxSizing: "border-box"
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
          display: flex;
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
              rgba(5, 15, 35, 0.75) 0%,
              rgba(5, 15, 35, 0.55) 50%,
              rgba(5, 15, 35, 0.40) 100%
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
            display: none !important;
          }
          .hero-badges-pc {
            display: none !important;
          }
          .hero-badges-mo {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
};
export default Hero;
