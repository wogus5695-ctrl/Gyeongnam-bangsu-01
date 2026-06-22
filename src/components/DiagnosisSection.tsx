import React from "react";
import type { KeywordConfig } from "../data/keywords";

interface DiagnosisSectionProps {
  keywordConfig: KeywordConfig;
}

interface DefectCard {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  altText: string;
}

export const DiagnosisSection: React.FC<DiagnosisSectionProps> = ({ keywordConfig }) => {
  const defectImages = {
    crack: "/images/defect-crack-actual.jpg",
    paintAging: "/images/defect-paint-aging-actual.jpg",
    waterproofLayerDamage: "/images/defect-waterproof-layer-actual.jpg"
  };

  const defectCards: DefectCard[] = [
    {
      id: "crack",
      name: "외벽 크랙",
      description: "갈라진 외벽 틈으로 빗물이 스며들면 실내 누수와 벽면 손상으로 이어질 수 있습니다.",
      imageUrl: defectImages.crack,
      altText: "건물 외벽 크랙 이미지"
    },
    {
      id: "paint-aging",
      name: "페인트 노후",
      description: "도막 박리와 오염이 심해지면 외벽 보호 성능이 떨어지고 표면 손상이 빨라질 수 있습니다.",
      imageUrl: defectImages.paintAging,
      altText: "외벽 페인트 노후 이미지"
    },
    {
      id: "waterproof-damage",
      name: "방수층 손상·들뜸",
      description: "옥상 방수층이 들뜨거나 갈라지면 배수 불량과 함께 누수 위험이 커질 수 있습니다.",
      imageUrl: defectImages.waterproofLayerDamage,
      altText: "옥상 방수층 손상 이미지"
    }
  ];

  const service = keywordConfig.service;

  // 관련 카드 active 상태 판별
  const getCardActiveState = (id: string) => {
    if (!keywordConfig.isActive) return { active: false, weak: false };
    
    if (id === "crack") {
      if (["외벽방수", "외벽누수"].includes(service)) return { active: true, weak: false };
      if (service === "건물방수") return { active: true, weak: true };
    }
    if (id === "paint-aging") {
      if (service === "외벽도색") return { active: true, weak: false };
      if (service === "외벽발수") return { active: true, weak: true };
    }
    if (id === "waterproof-damage") {
      if (["옥상방수", "옥상누수", "지붕방수"].includes(service)) return { active: true, weak: false };
      if (service === "건물방수") return { active: true, weak: true };
    }
    return { active: false, weak: false };
  };

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = "none";
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const fallbackBg = parent.querySelector(".image-fallback-bg");
      if (fallbackBg) {
        (fallbackBg as HTMLElement).style.display = "block";
      }
    }
  };

  return (
    <section className="diagnosis-section" id="diagnosis" style={{ backgroundColor: "var(--bg-light)" }}>
      <div className="container">
        
        {/* 섹션 헤더 */}
        <div style={{ maxWidth: "800px", margin: "0 auto 4rem auto", textAlign: "center" }}>
          <span className="badge badge-orange" style={{ marginBottom: "1rem" }}>Professional Inspection</span>
          <h2 style={{
            fontSize: "2.2rem",
            fontWeight: 900,
            color: "var(--text-dark)",
            marginBottom: "1rem",
            letterSpacing: "-0.03em"
          }} className="break-keep diagnosis-h2">
            같은 누수라도 원인이 다르면 시공 방법도 달라집니다
          </h2>
          <p style={{
            color: "var(--text-muted)",
            fontSize: "1.05rem",
            fontWeight: 500,
            lineHeight: "1.6"
          }} className="break-keep diagnosis-body-text">
            {keywordConfig.diagnosticSection || "누수는 보이는 현상보다 실제 원인이 더 중요합니다. 대표 결함 유형을 먼저 확인한 뒤 현장 상태에 맞는 시공 방향을 안내합니다."}
          </p>
        </div>

        {/* 1행 3열 결함 카드 그리드 */}
        <div className="defect-card-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px"
        }}>
          {defectCards.map((card) => {
            const { active, weak } = getCardActiveState(card.id);
            const isHighlighted = active;
            
            // active 및 weak에 따른 스타일 차등 부여
            const borderStyle = isHighlighted
              ? (weak ? "1.5px solid rgba(27, 97, 252, 0.35)" : "2px solid var(--primary-color)")
              : "1px solid var(--border-color)";
              
            const bgStyle = isHighlighted
              ? (weak ? "rgba(27, 97, 252, 0.01)" : "rgba(27, 97, 252, 0.03)")
              : "var(--bg-white)";

            const shadowStyle = isHighlighted
              ? "0 8px 20px rgba(27, 97, 252, 0.06)"
              : "var(--shadow-sm)";

            const imageAlt = isHighlighted 
              ? `${keywordConfig.region} ${keywordConfig.service} 결함 이미지` 
              : card.altText;

            return (
              <div
                key={card.id}
                style={{
                  position: "relative",
                  height: "300px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: borderStyle,
                  boxShadow: shadowStyle,
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  backgroundColor: bgStyle
                }}
                className="defect-card-item"
              >
                {/* 배경 이미지 */}
                <img
                  src={card.imageUrl}
                  alt={imageAlt}
                  onError={handleImgError}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 1
                  }}
                />

                {/* 에러 대비 백그라운드 폴백 */}
                <div
                  className="image-fallback-bg"
                  style={{
                    display: "none",
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                    zIndex: 0
                  }}
                />

                {/* 가독성 보조 오버레이 */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(5, 15, 35, 0.10) 0%, rgba(5, 15, 35, 0.35) 45%, rgba(5, 15, 35, 0.78) 100%)",
                  zIndex: 2,
                  pointerEvents: "none"
                }} />

                {/* 콘텐츠 영역 */}
                <div style={{
                  position: "relative",
                  zIndex: 3,
                  padding: "1.5rem",
                  textAlign: "left",
                  color: "#ffffff"
                }} className="defect-card-content">
                  
                  {/* 제목 및 미니 배지 */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
                    <h3 style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "#ffffff",
                      margin: 0,
                      textShadow: "0 2px 4px rgba(0,0,0,0.4)"
                    }}>
                      {card.name}
                    </h3>

                    {isHighlighted && (
                      <span className="badge badge-blue" style={{
                        fontSize: "0.68rem",
                        padding: "0.15rem 0.45rem",
                        backgroundColor: "var(--primary-color)",
                        color: "#ffffff",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "6px",
                        lineHeight: "1"
                      }}>
                        관련 결함 유형
                      </span>
                    )}
                  </div>

                  {/* 짧은 정의형 설명 (2줄 내외) */}
                  <p style={{
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "rgba(255, 255, 255, 0.9)",
                    lineHeight: "1.45",
                    margin: 0,
                    textShadow: "0 1px 3px rgba(0,0,0,0.3)"
                  }} className="break-keep">
                    {card.description}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .diagnosis-h2 {
            font-size: 1.5rem !important;
            margin-bottom: 0.75rem !important;
          }
          .diagnosis-body-text {
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
          }
          .defect-card-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .defect-card-item {
            height: 220px !important;
          }
          .defect-card-content {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DiagnosisSection;
