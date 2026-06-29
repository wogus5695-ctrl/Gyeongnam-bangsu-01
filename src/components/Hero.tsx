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
    if (service === "외벽누수") {
      topLabel = `${region} 외벽누수 현장진단`;
      h1 = `${region} 외벽누수,\n유입 경로부터 봅니다`;
      heroBody = "비 온 뒤 생기는 물자국은\n외벽 크랙·조인트·창호 틈을 함께 확인해야 합니다.";
      badges = ["원인 확인 후 보수", "사진 상담 가능"];
    } else if (service === "옥상누수") {
      topLabel = `${region} 옥상누수 현장진단`;
      h1 = `${region} 옥상누수,\n방수층부터 확인합니다`;
      heroBody = "천장 물자국이 반복된다면\n방수층·배수구·바닥 균열을 함께 점검해야 합니다.";
      badges = ["원인 확인 후 보수", "사진 상담 가능"];
    } else {
      // 기타 작업명 페이지 모바일용 H1, 본문 2줄 내외 정리
      const serviceMobileTexts: Record<string, { h1: string; body: string }> = {
        "외벽방수": {
          h1: `${region} 외벽방수,\n외벽 크랙부터 점검합니다`,
          body: "외벽 크랙, 조인트, 창틀 틈새를 점검해\n빗물 유입을 차단하는 외벽방수를 진행합니다."
        },
        "외벽발수": {
          h1: `${region} 외벽발수,\n빗물 흡수 상태부터 점검합니다`,
          body: "외벽 표면의 빗물 흡수와 백화를 막는\n발수 시공 필요 여부를 정밀 확인합니다."
        },
        "옥상방수": {
          h1: `${region} 옥상방수,\n방수층 상태부터 확인합니다`,
          body: "바닥 균열, 방수층 들뜸을 진단해\n부분 보수 또는 전체 우레탄 공정을 안내합니다."
        },
        "지붕방수": {
          h1: `${region} 지붕방수,\n지붕 접합부부터 점검합니다`,
          body: "판넬 이음새, 기와 파손, 용마루 접합부 등\n지붕의 미세한 누수 취약점을 보강합니다."
        },
        "외벽도색": {
          h1: `${region} 외벽도색,\n바탕면 상태부터 확인합니다`,
          body: "들뜬 구도막 제거와 균열 보수 후\n건물 보호와 미관에 맞는 도장을 시공합니다."
        },
        "건물방수": {
          h1: `${region} 건물방수,\n건물 전체 취약 부위를 점검합니다`,
          body: "외벽, 옥상, 지붕 등 건물 전체를 진단해\n현장 상태에 맞는 종합 방수를 설계합니다."
        }
      };

      const mText = serviceMobileTexts[service];
      if (mText) {
        h1 = mText.h1;
        heroBody = mText.body;
      }
      badges = ["원인 확인 후 보수", "사진 상담 가능"];
    }
  } else if (isMobile && !keywordConfig.isActive) {
    // 기본 메인 페이지 모바일 최적화
    h1 = "비 올 때 새는 건물,\n원인부터 확인합니다";
    heroBody = "외벽 크랙, 옥상 방수층 들뜸을 점검해\n필요한 공정만 안내해 드립니다.";
    badges = ["원인 확인 후 보수", "사진 상담 가능"];
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
