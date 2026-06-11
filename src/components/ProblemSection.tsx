import React from "react";
import type { KeywordConfig } from "../data/keywords";

interface ProblemSectionProps {
  keywordConfig: KeywordConfig;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ keywordConfig }) => {
  const problems = [
    {
      id: "exterior-crack",
      step: "01",
      title: "외벽 크랙·조인트 누수",
      desc: "작은 균열이나 틈으로 빗물이 스며들어 실내 물자국·곰팡이로 이어질 수 있습니다."
    },
    {
      id: "rooftop-old",
      step: "02",
      title: "옥상 방수층 노후",
      desc: "방수층 들뜸·갈라짐·배수 불량은 천장 누수의 주요 원인이 될 수 있습니다."
    },
    {
      id: "roof-joint",
      step: "03",
      title: "지붕 접합부 누수",
      desc: "판넬·기와·슬라브 접합부 틈은 비바람에 취약해 반복 누수가 생길 수 있습니다."
    },
    {
      id: "exterior-paint",
      step: "04",
      title: "외벽 도장 박리·오염",
      desc: "도막이 벗겨진 외벽은 수분을 머금고 오염과 표면 손상이 빨라질 수 있습니다."
    }
  ];

  // 동적 키워드별 하단 강조 문구 맵
  const dynamicDescriptions: Record<string, string> = {
    "외벽방수": "김해 외벽방수는 외벽 크랙, 조인트, 창호 주변 틈처럼 빗물이 유입되는 지점을 확인한 뒤 보수 범위와 방수 공정을 정하는 것이 중요합니다.",
    "외벽발수": "김해 외벽발수는 외벽 표면의 수분 흡수와 오염 상태를 확인한 뒤 발수제 적용이 필요한지 판단하는 작업입니다.",
    "옥상방수": "김해 옥상방수는 방수층 들뜸, 바닥 균열, 배수구 주변 손상을 먼저 확인해야 부분 보수와 전체 방수 여부를 판단할 수 있습니다.",
    "지붕방수": "김해 지붕방수는 판넬, 기와, 슬라브 등 지붕 구조와 접합부 상태를 확인한 뒤 누수 취약 부위를 보강해야 합니다.",
    "외벽도색": "김해 외벽도색은 기존 도막 박리, 오염, 바탕면 손상 상태를 먼저 확인해야 도색 후 들뜸과 재박리 가능성을 줄일 수 있습니다.",
    "옥상누수": "김해 옥상누수는 물이 떨어지는 위치만 보지 말고 방수층, 배수구, 파라펫 접합부 등 실제 유입 가능 지점을 함께 확인해야 합니다.",
    "외벽누수": "김해 외벽누수는 실내 물자국 위치와 외벽 크랙, 창호 주변, 조인트 부위를 함께 확인해 빗물 유입 경로를 판단해야 합니다.",
    "건물방수": "김해 건물방수는 외벽, 옥상, 지붕 등 건물 전체의 누수 취약 부위를 확인하고 현장 상태에 맞는 방수 범위를 정하는 작업입니다."
  };

  // 라벨 분기 처리
  let sectionLabel = "누수 원인 진단";
  if (keywordConfig.isActive) {
    const service = keywordConfig.service;
    if (service === "외벽방수") sectionLabel = "김해 외벽방수 진단";
    else if (service === "외벽발수") sectionLabel = "김해 외벽발수 점검";
    else if (service === "옥상방수") sectionLabel = "김해 옥상방수 진단";
    else if (service === "지붕방수") sectionLabel = "김해 지붕방수 점검";
    else if (service === "외벽도색") sectionLabel = "김해 외벽도색 점검";
    else if (service === "옥상누수") sectionLabel = "김해 옥상누수 진단";
    else if (service === "외벽누수") sectionLabel = "김해 외벽누수 진단";
    else if (service === "건물방수") sectionLabel = "김해 건물방수 종합점검";
  }

  const subParagraph = "물자국이 보이는 위치와 실제 빗물 유입 지점은 다를 수 있습니다.\n외벽 크랙, 조인트, 옥상 방수층, 지붕 접합부를 함께 확인해야 보수 범위를 정확히 잡을 수 있습니다.";

  const service = keywordConfig.service;
  const isCrackActive = keywordConfig.isActive && ["외벽방수", "외벽누수", "건물방수"].includes(service);
  const isRooftopActive = keywordConfig.isActive && ["옥상방수", "옥상누수", "건물방수"].includes(service);
  const isRoofActive = keywordConfig.isActive && ["지붕방수", "건물방수"].includes(service);
  const isPaintActive = keywordConfig.isActive && ["외벽발수", "외벽도색"].includes(service);

  const getCardActiveState = (id: string) => {
    if (id === "exterior-crack") return isCrackActive;
    if (id === "rooftop-old") return isRooftopActive;
    if (id === "roof-joint") return isRoofActive;
    if (id === "exterior-paint") return isPaintActive;
    return false;
  };

  return (
    <section className="problem-section" id="problems" style={{ backgroundColor: "var(--bg-light)" }}>
      <div className="container" style={{ textAlign: "center" }}>
        
        <div style={{ maxWidth: "800px", margin: "0 auto 4rem auto" }}>
          <span className="badge badge-orange" style={{ marginBottom: "1rem" }}>
            {sectionLabel}
          </span>
          <h2 style={{
            fontSize: "2.2rem",
            fontWeight: 900,
            color: "var(--text-dark)",
            marginBottom: "1rem",
            letterSpacing: "-0.03em",
            whiteSpace: "pre-line"
          }} className="break-keep problem-h2">
            {"누수와 외벽 손상,\n겉면보다 원인부터 봐야 합니다"}
          </h2>
          <p style={{
            color: "var(--text-muted)",
            fontSize: "1.05rem",
            fontWeight: 500,
            lineHeight: "1.6",
            whiteSpace: "pre-line"
          }} className="break-keep problem-body-text">
            {subParagraph}
          </p>
        </div>

        <div className="grid-4" style={{ gap: "1.25rem", marginBottom: "2.5rem" }}>
          {problems.map((prob) => {
            const isActiveCard = getCardActiveState(prob.id);
            return (
              <div key={prob.step} className="card" style={{
                textAlign: "left",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: isActiveCard ? "rgba(27, 97, 252, 0.03)" : "var(--bg-white)",
                borderColor: isActiveCard ? "rgba(27, 97, 252, 0.35)" : "var(--border-color)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "24px",
                boxShadow: isActiveCard ? "0 4px 12px rgba(27, 97, 252, 0.05)" : "var(--shadow-sm)",
                transition: "all 0.3s ease",
                position: "relative"
              }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                    <span style={{
                      fontSize: "1.8rem",
                      fontWeight: 900,
                      color: "var(--primary-color)",
                      opacity: isActiveCard ? 0.35 : 0.15,
                      display: "block",
                      lineHeight: "1"
                    }}>
                      {prob.step}
                    </span>
                    {isActiveCard && (
                      <span className="badge badge-blue" style={{
                        fontSize: "0.68rem",
                        padding: "0.2rem 0.5rem",
                        backgroundColor: "rgba(27, 97, 252, 0.1)",
                        color: "var(--primary-color)",
                        border: "1px solid rgba(27, 97, 252, 0.2)",
                        borderRadius: "6px",
                        lineHeight: "1"
                      }}>
                        관련 진단 항목
                      </span>
                    )}
                  </div>
                  <h3 style={{
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    color: "var(--text-dark)",
                    marginBottom: "0.75rem"
                  }} className="break-keep">
                    {prob.title}
                  </h3>
                </div>
                <p style={{
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                  lineHeight: "1.5",
                  margin: 0
                }} className="break-keep">
                  {prob.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 하단 정보형 안내 문구 추가 */}
        <div style={{
          maxWidth: "850px",
          margin: "0 auto",
          padding: "1.5rem",
          backgroundColor: "rgba(0, 0, 0, 0.01)",
          borderRadius: "16px",
          border: "1px dashed var(--border-color)",
          textAlign: "center"
        }} className="problem-footer-info">
          <p style={{
            color: "var(--text-muted)",
            fontSize: "0.92rem",
            lineHeight: "1.6",
            margin: 0
          }} className="break-keep">
            외벽방수, 옥상방수, 지붕방수, 외벽도색은 모두 바탕면과 유입 경로 확인이 먼저입니다. 현장 상태에 따라 부분 보수, 전체 방수, 발수 처리, 도색 공정이 달라질 수 있습니다.
          </p>

          {/* 동적 키워드별 강조 문구 노출 */}
          {keywordConfig.isActive && dynamicDescriptions[keywordConfig.service] && (
            <p style={{
              fontSize: "0.92rem",
              fontWeight: 700,
              color: "var(--primary-color)",
              marginTop: "0.75rem",
              lineHeight: "1.6"
            }} className="break-keep">
              💡 {dynamicDescriptions[keywordConfig.service]}
            </p>
          )}
        </div>
        
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .problem-h2 {
            font-size: 1.5rem !important;
            margin-bottom: 0.75rem !important;
            line-height: 1.35 !important;
          }
          .problem-body-text {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
          }
          .problem-footer-info {
            padding: 1.25rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;
