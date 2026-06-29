import React from "react";
import type { KeywordConfig } from "../data/keywords";

interface ProblemSectionProps {
  keywordConfig: KeywordConfig;
}

interface ProblemMapItem {
  label: string;
  title: string;
  body: string;
  checklist: string[];
  relatedTitle: string;
  relatedServices: string[];
}

const problemMap: Record<string, ProblemMapItem> = {
  "외벽누수": {
    label: "누수 원인 체크",
    title: "물자국보다\n유입 경로가 먼저입니다",
    body: "{region} 외벽누수는 보이는 위치와 실제 원인이 다를 수 있습니다.\n외벽 크랙·조인트·창호 틈부터 확인합니다.",
    checklist: ["실내 물자국", "창틀 주변 습기", "외벽 크랙", "조인트 틈", "비 올 때 반복 누수"],
    relatedTitle: "외벽누수와 함께 확인할 공정",
    relatedServices: ["외벽방수", "외벽발수", "건물방수"]
  },
  "옥상누수": {
    label: "누수 원인 체크",
    title: "물자국보다\n방수층 확인이 먼저입니다",
    body: "{region} 옥상누수는 천장 물자국과 실제 원인이 다를 수 있습니다.\n방수층·배수구·바닥 균열부터 확인합니다.",
    checklist: ["천장 물자국", "방수층 들뜸", "바닥 균열", "배수구 주변 손상", "비 올 때 반복 누수"],
    relatedTitle: "옥상누수와 함께 확인할 공정",
    relatedServices: ["옥상방수", "지붕방수", "건물방수"]
  },
  "외벽방수": {
    label: "방수 상태 체크",
    title: "외벽 크랙부터\n방수 범위를 확인합니다",
    body: "{region} 외벽방수는 외벽 균열과 조인트 상태를 먼저 확인해야 합니다.\n빗물 유입 지점을 보고 보수 범위를 정합니다.",
    checklist: ["외벽 크랙", "조인트 틈", "창호 주변 틈", "마감재 손상", "반복 누수 흔적"],
    relatedTitle: "외벽방수와 함께 확인할 공정",
    relatedServices: ["외벽누수", "외벽발수", "건물방수"]
  },
  "옥상방수": {
    label: "방수층 상태 체크",
    title: "옥상 바닥보다\n방수층 상태가 먼저입니다",
    body: "{region} 옥상방수는 방수층 들뜸과 배수 상태를 함께 확인해야 합니다.\n균열과 손상 범위에 따라 보수 방식이 달라집니다.",
    checklist: ["방수층 들뜸", "바닥 균열", "배수구 막힘", "파라펫 틈", "천장 물자국"],
    relatedTitle: "옥상방수와 함께 확인할 공정",
    relatedServices: ["옥상누수", "지붕방수", "건물방수"]
  },
  "지붕방수": {
    label: "지붕 누수 체크",
    title: "지붕 접합부부터\n빗물 유입을 확인합니다",
    body: "{region} 지붕방수는 판넬·기와·슬라브 접합부 상태를 먼저 확인합니다.\n구조별 손상 지점에 맞춰 보수 범위를 정합니다.",
    checklist: ["지붕 접합부 틈", "판넬 이음부", "기와 손상", "슬라브 균열", "비 올 때 반복 누수"],
    relatedTitle: "지붕방수와 함께 확인할 공정",
    relatedServices: ["옥상누수", "옥상방수", "건물방수"]
  },
  "외벽발수": {
    label: "외벽 발수 체크",
    title: "빗물을 머금는 외벽,\n표면 흡수부터 봅니다",
    body: "{region} 외벽발수는 외벽 표면이 빗물을 흡수하는 상태부터 확인합니다.\n오염·백화·수분 자국이 반복되면 발수 처리가 필요할 수 있습니다.",
    checklist: ["빗물 흡수", "외벽 오염", "백화 흔적", "수분 자국", "표면 보호 저하"],
    relatedTitle: "외벽발수와 함께 확인할 공정",
    relatedServices: ["외벽방수", "외벽누수", "건물방수"]
  },
  "외벽도색": {
    label: "도색 전 상태 체크",
    title: "새로 칠하기보다\n바탕면 정리가 먼저입니다",
    body: "{region} 외벽도색은 도막 박리와 표면 손상을 먼저 확인해야 합니다.\n바탕면 상태에 따라 도장 품질과 유지력이 달라집니다.",
    checklist: ["도막 박리", "외벽 오염", "미세 균열", "바탕면 손상", "표면 들뜸"],
    relatedTitle: "외벽도색과 함께 확인할 공정",
    relatedServices: ["외벽방수", "외벽발수", "건물방수"]
  },
  "건물방수": {
    label: "건물 방수 체크",
    title: "한 곳만 보기보다\n취약 부위를 함께 봅니다",
    body: "{region} 건물방수는 외벽·옥상·지붕의 취약 부위를 함께 확인해야 합니다.\n누수 원인에 따라 필요한 공정이 달라질 수 있습니다.",
    checklist: ["외벽 크랙", "옥상 방수층", "지붕 접합부", "배수구 주변", "반복 누수 흔적"],
    relatedTitle: "건물방수와 함께 확인할 공정",
    relatedServices: ["외벽방수", "옥상방수", "외벽누수"]
  }
};

const replaceRegion = (text: string, region: string) => {
  if (!text) return "";
  const r = region || "부산·경남·울산";
  let result = text.replace(/\{region\}/g, r);
  result = result.replace(/김해시시/g, r);
  result = result.replace(/김해시/g, r);
  result = result.replace(/김해(?!시)/g, r);
  return result;
};

export const ProblemSection: React.FC<ProblemSectionProps> = ({ keywordConfig }) => {
  const service = keywordConfig.service;
  const region = keywordConfig.region || "부산·경남·울산";
  const isActive = keywordConfig.isActive;

  // 디폴트값 정의 (기본/메인 페이지 대응용)
  const defaultLabel = "누수 원인 체크";
  const defaultTitle = "보이는 누수와\n실제 원인은 다를 수 있습니다";
  const defaultBody = "외벽·옥상·지붕 상태를 함께 확인해\n필요한 보수 범위만 안내합니다.";
  const defaultChecklist = ["외벽 크랙·조인트 틈새", "옥상 방수층 들뜸·갈라짐", "지붕 접합부 틈새", "도막 박리·표면 손상"];
  const defaultRelatedTitle = "연관 진단 및 보수 공정 알아보기";
  const defaultRelatedServices = ["외벽방수", "옥상방수", "외벽누수", "옥상누수"];

  let label = defaultLabel;
  let title = defaultTitle;
  let body = defaultBody;
  let checklist = defaultChecklist;
  let relatedTitle = defaultRelatedTitle;
  let relatedServices = defaultRelatedServices;

  if (isActive && problemMap[service]) {
    const config = problemMap[service];
    label = config.label;
    title = config.title;
    body = replaceRegion(config.body, region);
    checklist = config.checklist;
    relatedTitle = config.relatedTitle;
    relatedServices = config.relatedServices;
  }

  return (
    <section className="problem-section" id="problems" style={{ 
      backgroundColor: "var(--bg-light)",
      padding: "5.5rem 0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.03)"
    }}>
      <div className="container">
        
        {/* 누수 원인 체크 배지 - 상단 단독 배치 */}
        <div style={{ textAlign: "left", marginBottom: "1.25rem" }} className="problem-badge-wrapper">
          <span className="badge badge-blue" style={{ 
            backgroundColor: "rgba(27, 97, 252, 0.08)",
            color: "var(--primary-color)",
            border: "1px solid rgba(27, 97, 252, 0.15)",
            fontSize: "0.8rem",
            fontWeight: 700,
            padding: "0.3rem 0.6rem"
          }}>
            {label}
          </span>
        </div>

        <div className="problem-container" style={{
          display: "flex",
          flexDirection: "row",
          gap: "3rem",
          alignItems: "center",
          textAlign: "left"
        }}>
          {/* 좌측: 타이틀 및 설명 영역 */}
          <div style={{ flex: "1 1 40%", maxWidth: "440px" }} className="problem-info">
            <h2 style={{
              fontSize: "2rem",
              fontWeight: 900,
              color: "var(--text-dark)",
              marginBottom: "0.75rem",
              letterSpacing: "-0.03em",
              lineHeight: "1.35",
              whiteSpace: "pre-line"
            }} className="break-keep problem-h2">
              {title}
            </h2>
            <p style={{
              color: "var(--text-muted)",
              fontSize: "0.98rem",
              fontWeight: 500,
              lineHeight: "1.55",
              margin: 0,
              whiteSpace: "pre-line"
            }} className="break-keep problem-body-text">
              {body}
            </p>
          </div>

          {/* 우측: 체크 항목 영역 */}
          <div style={{ flex: "1 1 60%", width: "100%" }} className="problem-grid-wrapper">
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.65rem",
              width: "100%"
            }} className="problem-checklist-grid">
              {checklist.map((item, idx) => (
                <div key={idx} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.75rem 1rem",
                  backgroundColor: "rgba(27, 97, 252, 0.02)",
                  border: "1px solid rgba(27, 97, 252, 0.12)",
                  borderRadius: "12px",
                  boxSizing: "border-box"
                }} className="problem-check-item">
                  <span style={{ 
                    color: "var(--primary-color)", 
                    fontSize: "1.1rem", 
                    fontWeight: 900, 
                    userSelect: "none"
                  }}>
                    ✓
                  </span>
                  <span style={{ 
                    fontSize: "0.9rem", 
                    fontWeight: 700, 
                    color: "var(--text-dark)" 
                  }} className="break-keep">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 연관 서비스 내부 링크 영역 */}
        {relatedServices.length > 0 && (
          <div style={{
            marginTop: "3rem",
            padding: "1.5rem",
            backgroundColor: "var(--bg-white)",
            border: "1px solid var(--border-color)",
            borderRadius: "16px",
            textAlign: "center"
          }} className="related-services-card">
            <p style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text-dark)", margin: "0 0 1rem 0" }} className="related-title-text">
              {relatedTitle}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem" }}>
              {relatedServices.map((relService, idx) => (
                <a 
                  key={idx} 
                  href={`/?k=${region}-${relService}`}
                  style={{
                    display: "inline-block",
                    padding: "0.5rem 1rem",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    backgroundColor: "var(--bg-light)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    textDecoration: "none",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--primary-color)";
                    e.currentTarget.style.borderColor = "var(--primary-color)";
                    e.currentTarget.style.backgroundColor = "rgba(27, 97, 252, 0.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.borderColor = "var(--border-color)";
                    e.currentTarget.style.backgroundColor = "var(--bg-light)";
                  }}
                >
                  {region} {relService}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .problem-section {
            padding: 2.5rem 0 !important;
          }
          .problem-badge-wrapper {
            text-align: center !important;
            margin-bottom: 0.75rem !important;
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
          .problem-checklist-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.5rem !important;
          }
          .problem-check-item {
            padding: 0.7rem 0.8rem !important;
            text-align: left !important;
          }
          .related-services-card {
            margin-top: 2rem !important;
            padding: 1.25rem !important;
          }
          .related-title-text {
            font-size: 0.9rem !important;
            margin-bottom: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
};
export default ProblemSection;
