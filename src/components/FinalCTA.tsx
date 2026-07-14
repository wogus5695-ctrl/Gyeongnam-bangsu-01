import React from "react";
import { CONTACT_PHONE, KAKAO_URL, HAS_PHONE, HAS_KAKAO } from "../data/brand";
import type { KeywordConfig } from "../data/keywords";

// 카카오톡 CTA 숨김 제어 상수
const ENABLE_KAKAO_CTA = false;

interface FinalCTAProps {
  keywordConfig: KeywordConfig;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ keywordConfig }) => {
  const label = "사진 상담 / 현장 견적";

  // 동적 키워드 유무에 따른 타이틀 및 본문 문구 분기 (카톡 숨김 처리에 대응해 전화 상담 중심 어조)
  const defaultTitle = "누수 위치만 보고 시공을 결정하지 마세요";
  let ctaTitle = defaultTitle;
  if (keywordConfig.isActive) {
    if (keywordConfig.service === "외벽도색") {
      ctaTitle = `${keywordConfig.region} 외벽도색·균열,\n지금 상태부터 확인하세요`;
    } else {
      ctaTitle = `${keywordConfig.fullKeyword} 누수,\n지금 상태부터 확인하세요`;
    }
  }

  const defaultBody = "물자국이 보이는 위치와 빗물이 들어오는 지점은 다를 수 있습니다.\n현재 증상과 건물 상태를 확인한 뒤 필요한 작업 범위를 안내합니다.";
  let ctaBody = defaultBody;
  if (keywordConfig.isActive) {
    const service = keywordConfig.service;
    if (service === "외벽방수" || service === "외벽발수" || service === "외벽누수") {
      ctaBody = "외벽 크랙, 조인트 틈새, 창틀 주변 누수는 원인이 다양합니다.\n전화 상담으로 현재 상태와 필요한 보수 방향을 먼저 확인해 드립니다.";
    } else if (service === "옥상방수" || service === "옥상누수" || service === "지붕방수") {
      ctaBody = "옥상 균열, 방수층 들뜸, 배수구 손상은 원인이 다릅니다.\n전화 상담으로 현재 상태와 필요한 보수 방향을 먼저 확인해 드립니다.";
    } else if (service === "외벽도색") {
      ctaBody = "도막 박리, 미세 균열, 외벽 오염은 원인이 다양합니다.\n전화 상담으로 현재 상태와 필요한 보수 방향을 먼저 확인해 드립니다.";
    } else if (service === "건물방수") {
      ctaBody = "외벽 크랙, 옥상 방수층 들뜸, 지붕 틈새는 원인이 다릅니다.\n전화 상담으로 현재 상태와 필요한 보수 방향을 먼저 확인해 드립니다.";
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

  // 카카오톡 노출 판별 조건
  const showKakao = ENABLE_KAKAO_CTA && !!KAKAO_URL;

  return (
    <section className="final-cta-section" id="contact" style={{ backgroundColor: "#ffffff", padding: "1.5rem 0" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        
        {/* 홍보 배지 겸용 배너 형태 */}
        <div className="cta-banner-box">
          
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
              marginBottom: "1.25rem",
              letterSpacing: "0.05em"
            }}>
              {label}
            </span>

            <h2 style={{
              fontSize: "2.2rem",
              fontWeight: 900,
              lineHeight: "1.35",
              margin: "0 0 1rem 0"
            }} className="break-keep cta-h2">
              {renderWithLineBreaks(ctaTitle)}
            </h2>

            <p style={{
              fontSize: "1.02rem",
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: 500,
              lineHeight: "1.6",
              marginBottom: "2rem"
            }} className="break-keep cta-body-text">
              {renderWithLineBreaks(ctaBody)}
            </p>

            {/* 전환 버튼 세트 - 카톡 숨김 및 전화 단독 노출 */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap"
            }} className="cta-button-group">
              
              {/* 전화 바로걸기 */}
              <a
                href={HAS_PHONE ? `tel:${CONTACT_PHONE}` : "#contact"}
                className="cta-btn-phone"
              >
                📞 현재 누수 상태 문의하기
              </a>

              {/* 카톡 상담 바로가기 (활성화 시에만 렌더링) */}
              {showKakao && (
                <a
                  href={HAS_KAKAO ? KAKAO_URL : "#contact"}
                  target={HAS_KAKAO ? "_blank" : "_self"}
                  rel={HAS_KAKAO ? "noopener noreferrer" : undefined}
                  className="btn btn-kakao"
                  style={{
                    height: "60px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.15rem",
                    fontWeight: 900,
                    borderRadius: "16px",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
                    flex: "1 1 240px",
                    maxWidth: "320px"
                  }}
                >
                  💬 사진 보내고 견적받기
                </a>
              )}
              
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .cta-banner-box {
          background: linear-gradient(135deg, var(--primary-color) 0%, #0d4cd3 100%) !important;
          color: #ffffff !important;
          padding: 48px 24px !important;
          border-radius: 40px !important;
          box-shadow: var(--shadow-xl) !important;
          text-align: center !important;
          position: relative !important;
          overflow: hidden !important;
        }
        .cta-btn-phone {
          background-color: #ffffff !important;
          color: var(--primary-color) !important;
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 320px;
          height: 60px;
          font-size: 1.15rem !important;
          font-weight: 900 !important;
          border-radius: 16px !important;
          box-shadow: 0 8px 16px rgba(0,0,0,0.12) !important;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .cta-btn-phone:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15) !important;
        }
        @media (max-width: 768px) {
          .cta-banner-box {
            padding: 36px 20px !important;
            border-radius: 24px !important;
          }
          .cta-h2 {
            font-size: 1.6rem !important;
            line-height: 1.35 !important;
            margin-bottom: 0.75rem !important;
          }
          .cta-body-text {
            font-size: 0.95rem !important;
            margin-bottom: 1.75rem !important;
          }
          .cta-button-group {
            flex-direction: column !important;
            gap: 10px !important;
            align-items: center !important;
          }
          .cta-btn-phone {
            height: 56px !important;
            font-size: 1.05rem !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;
