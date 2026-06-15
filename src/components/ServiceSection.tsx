import React from "react";

import { placeholderImages } from "../data/images";
import type { KeywordConfig } from "../data/keywords";

interface ServiceSectionProps {
  keywordConfig: KeywordConfig;
}

interface ServiceCard {
  id: string;
  name: string;
  keyText: string;
  tags: string[];
  imageUrl: string;
  altDefault: string;
  objectPosition?: string;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ keywordConfig }) => {
  const serviceCards: ServiceCard[] = [
    {
      id: "rooftop",
      name: "옥상방수",
      keyText: "손상된 누수층을 복구하고, 옥상/지붕 빗물누수 해결",
      tags: ["옥상방수", "옥상누수", "지붕방수", "건물방수"],
      imageUrl: placeholderImages.rooftopWaterproof,
      altDefault: "옥상방수 및 옥상누수 보수 작업 이미지",
      objectPosition: "center 22%"
    },
    {
      id: "exterior",
      name: "외벽방수·발수",
      keyText: "확인하기 어려운 벽면 누수 잡는 20년 베테랑",
      tags: ["외벽방수", "외벽발수", "외벽누수", "건물방수"],
      imageUrl: placeholderImages.exteriorWaterproof,
      altDefault: "외벽방수와 외벽발수 작업 이미지",
      objectPosition: "center 18%"
    },
    {
      id: "painting",
      name: "외벽도색",
      keyText: "건물의 수명을 늘리는 공정을 안내",
      tags: ["외벽도색", "도막박리", "바탕면정리", "외벽오염"],
      imageUrl: placeholderImages.exteriorPainting,
      altDefault: "외벽도색과 바탕면 정리 작업 이미지"
    }
  ];

  // 동적 키워드별 섹션 보조 문구 맵 (고객 혼선 방지를 위해 '김해' 고정 키워드 제거)
  const dynamicSubTexts: Record<string, string> = {
    "외벽방수": "외벽방수는 외벽 크랙, 조인트, 창호 주변 틈으로 유입되는 빗물 경로를 확인한 뒤 보수 범위와 방수 공정을 정하는 작업입니다.",
    "외벽발수": "외벽발수는 외벽 표면의 수분 흡수와 오염 상태를 확인한 뒤 발수제 적용이 필요한지 판단하는 작업입니다.",
    "옥상방수": "옥상방수는 노후 방수층, 바닥 균열, 배수구 주변 손상을 확인하고 부분 보수와 전체 방수 여부를 판단하는 작업입니다.",
    "지붕방수": "지붕방수는 판넬, 기와, 슬라브 등 지붕 구조와 접합부 상태에 따라 누수 취약 부위를 보강하는 작업입니다.",
    "외벽도색": "외벽도색은 도막 박리, 오염, 바탕면 손상 상태를 확인한 뒤 외벽 보호와 미관 개선을 위한 도장 공정을 정하는 작업입니다.",
    "옥상누수": "옥상누수는 방수층, 배수구, 파라펫 접합부 등 실제 유입 가능 지점을 함께 확인해야 보수 범위를 정할 수 있습니다.",
    "외벽누수": "외벽누수는 실내 물자국과 외벽 크랙, 창호 주변, 조인트 부위를 함께 확인해 빗물 유입 경로를 판단하는 작업입니다.",
    "건물방수": "건물방수는 외벽, 옥상, 지붕 등 건물 전체의 누수 취약 부위를 확인하고 현장 상태에 맞는 방수 범위를 정하는 작업입니다."
  };

  const service = keywordConfig.service;

  // 카드별 active 강조 판별 로직
  const getCardActiveState = (id: string) => {
    if (!keywordConfig.isActive) return false;
    if (id === "rooftop") return ["옥상방수", "옥상누수", "지붕방수", "건물방수"].includes(service);
    if (id === "exterior") return ["외벽방수", "외벽발수", "외벽누수", "건물방수"].includes(service);
    if (id === "painting") return ["외벽도색"].includes(service);
    return false;
  };

  // 이미지 로드 에러 시 엑박 방지 핸들러
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
    <section className="service-section" id="services" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        
        {/* 섹션 헤더 */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span className="badge badge-blue" style={{ marginBottom: "1rem" }}>Services</span>
          <h2 style={{
            fontSize: "2.2rem",
            fontWeight: 900,
            color: "var(--text-dark)",
            marginBottom: "1rem",
            letterSpacing: "-0.03em",
            whiteSpace: "pre-line"
          }} className="break-keep services-h2">
            {"건물 상태에 맞춘\n핵심 방수·도색 서비스"}
          </h2>
          <p style={{
            color: "var(--text-muted)",
            fontSize: "1.05rem",
            fontWeight: 500,
            lineHeight: "1.6"
          }} className="break-keep services-body-text">
            옥상, 외벽, 도장 상태를 먼저 확인한 뒤 누수 원인과 노후도에 맞는 방수·발수·도색 공정을 안내합니다.
          </p>

          {/* 동적 키워드별 보조 문구 노출 */}
          {keywordConfig.isActive && dynamicSubTexts[service] && (
            <p style={{
              color: "var(--primary-color)",
              fontSize: "0.95rem",
              fontWeight: 700,
              marginTop: "0.75rem",
              lineHeight: "1.6"
            }} className="break-keep">
              💡 {dynamicSubTexts[service]}
            </p>
          )}
        </div>

        {/* 3개 서비스 배너형 카드 1열 배열 */}
        <div className="services-list" style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100%"
        }}>
          {serviceCards.map((card) => {
            const isHighlighted = getCardActiveState(card.id);
            const imageAlt = isHighlighted 
              ? `${keywordConfig.region} ${keywordConfig.service} 작업 이미지` 
              : card.altDefault;

            return (
              <div
                key={card.id}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "280px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: isHighlighted ? "2px solid var(--primary-color)" : "1px solid var(--border-color)",
                  boxShadow: isHighlighted ? "0 8px 25px rgba(27, 97, 252, 0.08)" : "var(--shadow-sm)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end"
                }}
                className="service-배너-card"
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
                    objectPosition: card.objectPosition || "center",
                    zIndex: 1
                  }}
                />

                {/* 이미지 로드 에러 대비 폴백 백그라운드 */}
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

                {/* 텍스트 가독성을 위한 점층 어두운 그라데이션 오버레이 */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(5, 15, 35, 0.10) 0%, rgba(5, 15, 35, 0.32) 45%, rgba(5, 15, 35, 0.78) 100%)",
                  zIndex: 2,
                  pointerEvents: "none"
                }} />

                {/* 콘텐츠 텍스트 레이어 (좌측 하단) */}
                <div style={{
                  position: "relative",
                  zIndex: 3,
                  padding: "1.75rem 2rem",
                  textAlign: "left",
                  color: "#ffffff",
                  width: "100%"
                }} className="card-overlay-text">
                  
                  {/* 서비스명 (파란색 브랜드 컬러 배경 장착) 및 동적 배지 */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                    <h3 style={{
                      fontSize: "1.15rem",
                      fontWeight: 900,
                      color: "#ffffff",
                      backgroundColor: "var(--primary-color)",
                      padding: "0.3rem 0.75rem",
                      borderRadius: "8px",
                      margin: 0,
                      display: "inline-block",
                      lineHeight: "1.2",
                      boxShadow: "0 2px 8px rgba(27, 97, 252, 0.3)"
                    }} className="card-title-text">
                      <strong>{card.name}</strong>
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
                        관련 서비스
                      </span>
                    )}
                  </div>

                  {/* 소제목 (행바꿈 제거한 1줄 구성) */}
                  <p style={{
                    fontSize: "1.08rem",
                    fontWeight: 800,
                    color: "rgba(255, 255, 255, 0.98)",
                    lineHeight: "1.45",
                    marginBottom: "0.6rem",
                    textShadow: "0 1px 4px rgba(0,0,0,0.5)"
                  }} className="break-keep card-sub-text">
                    {card.keyText}
                  </p>

                  {/* 해시태그 (연한 반투명 회색 배경 pill 장착) */}
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginTop: "0.2rem"
                  }} className="service-card-tags">
                    {card.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "rgba(255, 255, 255, 0.85)",
                        backgroundColor: "rgba(255, 255, 255, 0.12)",
                        padding: "0.2rem 0.55rem",
                        borderRadius: "6px",
                        lineHeight: "1"
                      }}>
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>



      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-h2 {
            font-size: 1.5rem !important;
            margin-bottom: 0.75rem !important;
            line-height: 1.35 !important;
          }
          .services-body-text {
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
          }
          .service-배너-card {
            height: 220px !important;
          }
          .card-overlay-text {
            padding: 1.25rem 1.5rem !important;
          }
          .card-title-text {
            font-size: 1.05rem !important;
            padding: 0.25rem 0.6rem !important;
          }
          .card-sub-text {
            font-size: 0.98rem !important;
            line-height: 1.4 !important;
          }
          .services-list {
            gap: 16px !important;
          }
          .services-footer-cta {
            padding: 1.25rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceSection;
