import React from "react";
import type { KeywordConfig } from "../data/keywords";

interface ProblemSectionProps {
  keywordConfig: KeywordConfig;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ keywordConfig }) => {
  const problems = [
    {
      id: "exterior-crack",
      title: "외벽 크랙·조인트",
      desc: "틈새 빗물 유입 확인"
    },
    {
      id: "rooftop-old",
      title: "옥상 방수층",
      desc: "들뜸·갈라짐 확인"
    },
    {
      id: "roof-joint",
      title: "지붕 접합부",
      desc: "비바람 취약부 점검"
    },
    {
      id: "exterior-paint",
      title: "도막 박리·오염",
      desc: "표면 손상 확인"
    }
  ];

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
    <section className="problem-section" id="problems" style={{ 
      backgroundColor: "var(--bg-light)",
      padding: "5.5rem 0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.03)"
    }}>
      <div className="container">
        <div className="problem-container" style={{
          display: "flex",
          flexDirection: "row",
          gap: "3rem",
          alignItems: "flex-start",
          textAlign: "left"
        }}>
          {/* 좌측: 타이틀 및 설명 영역 */}
          <div style={{ flex: "1 1 40%", maxWidth: "440px" }} className="problem-info">
            <span className="badge badge-blue" style={{ 
              marginBottom: "0.75rem",
              backgroundColor: "rgba(27, 97, 252, 0.08)",
              color: "var(--primary-color)",
              border: "1px solid rgba(27, 97, 252, 0.15)",
              fontSize: "0.8rem",
              fontWeight: 700,
              padding: "0.3rem 0.6rem"
            }}>
              누수 원인 체크
            </span>
            <h2 style={{
              fontSize: "2rem",
              fontWeight: 900,
              color: "var(--text-dark)",
              marginBottom: "0.75rem",
              letterSpacing: "-0.03em",
              lineHeight: "1.35",
              whiteSpace: "pre-line"
            }} className="break-keep problem-h2">
              {"보이는 누수와\n실제 원인은 다를 수 있습니다"}
            </h2>
            <p style={{
              color: "var(--text-muted)",
              fontSize: "0.98rem",
              fontWeight: 500,
              lineHeight: "1.55",
              margin: 0,
              whiteSpace: "pre-line"
            }} className="break-keep problem-body-text">
              {"외벽·옥상·지붕 상태를 함께 확인해\n필요한 보수 범위만 안내합니다."}
            </p>
          </div>

          {/* 우측: 2x2 미니 체크 카드 배열 */}
          <div style={{ flex: "1 1 60%", width: "100%" }} className="problem-grid">
            {problems.map((prob) => {
              const isActiveCard = getCardActiveState(prob.id);
              return (
                <div key={prob.id} className="problem-card" style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.65rem",
                  padding: "1rem 1.15rem",
                  backgroundColor: "var(--bg-white)",
                  border: isActiveCard ? "1px solid rgba(27, 97, 252, 0.3)" : "1px solid var(--border-color)",
                  borderRadius: "16px",
                  boxShadow: isActiveCard ? "0 4px 12px rgba(27, 97, 252, 0.03)" : "var(--shadow-sm)",
                  transition: "all 0.25s ease"
                }}>
                  {/* 파란색 체크 아이콘 포인트 */}
                  <span style={{ 
                    color: "var(--primary-color)", 
                    fontSize: "1.05rem", 
                    fontWeight: 900, 
                    lineHeight: "1.2",
                    userSelect: "none"
                  }}>
                    ✓
                  </span>
                  <div>
                    <h4 style={{ 
                      fontSize: "0.95rem", 
                      fontWeight: 800, 
                      margin: "0 0 0.15rem 0", 
                      color: "var(--text-dark)" 
                    }} className="break-keep">
                      {prob.title}
                    </h4>
                    <p style={{ 
                      fontSize: "0.82rem", 
                      color: "var(--text-muted)", 
                      margin: 0 
                    }} className="break-keep">
                      {prob.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <style>{`
        .problem-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }
        @media (max-width: 768px) {
          .problem-section {
            padding: 2.5rem 0 !important;
          }
          .problem-container {
            flex-direction: column !important;
            gap: 1.5rem !important;
            text-align: center !important;
          }
          .problem-info {
            max-width: 100% !important;
          }
          .problem-h2 {
            font-size: 1.5rem !important;
            line-height: 1.3 !important;
            margin-bottom: 0.5rem !important;
          }
          .problem-body-text {
            font-size: 0.9rem !important;
            line-height: 1.45 !important;
          }
          .problem-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.5rem !important;
          }
          .problem-card {
            padding: 0.8rem 0.9rem !important;
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;
