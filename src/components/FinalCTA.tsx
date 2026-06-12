import React from "react";
import { CONTACT_PHONE, KAKAO_URL, HAS_PHONE, HAS_KAKAO } from "../data/brand";
import type { KeywordConfig } from "../data/keywords";

interface FinalCTAProps {
  keywordConfig: KeywordConfig;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ keywordConfig }) => {
  const label = "사진 상담 / 현장 견적";

  // 동적 키워드 유무에 따른 타이틀 및 본문 문구 분기 (과장 및 솔루션 등 추상적인 어휘 배제)
  const defaultTitle = "외벽·옥상 누수,\n지금 상태부터 확인하세요";
  let ctaTitle = defaultTitle;
  if (keywordConfig.isActive) {
    if (keywordConfig.service === "외벽도색") {
      ctaTitle = `${keywordConfig.region} 외벽도색·균열,\n지금 상태부터 확인하세요`;
    } else {
      ctaTitle = `${keywordConfig.fullKeyword} 누수,\n지금 상태부터 확인하세요`;
    }
  }

  const defaultBody = "외벽 크랙, 방수층 들뜸, 도막 박리는 원인이 다릅니다.\n사진을 보내주시면 필요한 시공 방향을 안내해 드립니다.";
  let ctaBody = defaultBody;
  if (keywordConfig.isActive) {
    const service = keywordConfig.service;
    if (service === "외벽방수" || service === "외벽발수" || service === "외벽누수") {
      ctaBody = "외벽 크랙, 조인트 틈새, 창틀 코킹은 원인이 다양합니다.\n사진을 보내주시면 대략적인 보수 방향을 먼저 안내해 드립니다.";
    } else if (service === "옥상방수" || service === "옥상누수" || service === "지붕방수") {
      ctaBody = "옥상 균열, 방수층 들뜸, 배수구 손상은 원인이 다릅니다.\n사진을 보내주시면 대략적인 방수 방향을 먼저 안내해 드립니다.";
    } else if (service === "외벽도색") {
      ctaBody = "도막 박리, 미세 균열, 외벽 오염은 원인이 다양합니다.\n사진을 보내주시면 도색 시공 방향을 먼저 안내해 드립니다.";
    } else if (service === "건물방수") {
      ctaBody = "외벽 크랙, 옥상 방수층 들뜸, 지붕 틈새는 원인이 다릅니다.\n사진을 보내주시면 건물 방수 방향을 먼저 안내해 드립니다.";
    }
  }

  const renderWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section className="final-cta-section" id="contact" style={{ backgroundColor: "#ffffff" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        
        {/* 홍보 배지 겸용 배너 형태 */}
        <div style={{
          background: "linear-gradient(135deg, var(--primary-color) 0%, #0d4cd3 100%)",
          color: "#ffffff",
          padding: "4rem 3rem",
          borderRadius: "40px",
          boxShadow: "var(--shadow-xl)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }} className="cta-banner-box">
          
          {/* 장식원 백그라운드 효과 */}
          <div style={{
            position: "absolute",
            top: "-50px",
            left: "-50px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
            pointerEvents: "none"
          }} />
          <div style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.04)",
            pointerEvents: "none"
          }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "750px", margin: "0 auto" }}>
            
            <span style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 800,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              color: "#ffffff",
              padding: "0.4rem 1rem",
              borderRadius: "50px",
              marginBottom: "1.5rem",
              letterSpacing: "0.05em"
            }}>
              {label}
            </span>

            <h2 style={{
              fontSize: "2.3rem",
              fontWeight: 900,
              lineHeight: "1.35",
              margin: "0 0 1rem 0"
            }} className="break-keep cta-h2">
              {renderWithLineBreaks(ctaTitle)}
            </h2>

            <p style={{
              fontSize: "1.08rem",
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: 500,
              lineHeight: "1.65",
              marginBottom: "2.5rem"
            }} className="break-keep cta-body-text">
              {renderWithLineBreaks(ctaBody)}
            </p>

            {/* 전환 버튼 세트 - 연락처 부재 시 방어 코드 적용 */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              flexWrap: "wrap"
            }} className="cta-button-group">
              
              {/* 전화 바로걸기 */}
              <a
                href={HAS_PHONE ? `tel:${CONTACT_PHONE}` : "#contact"}
                className="btn"
                style={{
                  backgroundColor: "#ffffff",
                  color: "var(--primary-color)",
                  padding: "1.2rem 2.5rem",
                  fontSize: "1.2rem",
                  fontWeight: 900,
                  borderRadius: "16px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  flex: "1 1 240px"
                }}
              >
                📞 전화로 바로 상담
              </a>

              {/* 카톡 상담 바로가기 */}
              <a
                href={HAS_KAKAO ? KAKAO_URL : "#contact"}
                target={HAS_KAKAO ? "_blank" : "_self"}
                rel={HAS_KAKAO ? "noopener noreferrer" : undefined}
                className="btn btn-kakao"
                style={{
                  padding: "1.2rem 2.5rem",
                  fontSize: "1.2rem",
                  fontWeight: 900,
                  borderRadius: "16px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  flex: "1 1 240px"
                }}
              >
                💬 사진 보내고 견적받기
              </a>
              
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-banner-box {
            padding: 3rem 1.5rem !important;
            border-radius: 24px !important;
          }
          .cta-h2 {
            font-size: 1.6rem !important;
            line-height: 1.35 !important;
          }
          .cta-body-text {
            font-size: 0.95rem !important;
            margin-bottom: 2rem !important;
          }
          .cta-button-group {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          .cta-button-group .btn {
            width: 100% !important;
            padding: 1rem !important;
            font-size: 1.05rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;
