import React from "react";
import { BRAND_NAME } from "../data/brand";
import type { KeywordConfig } from "../data/keywords";

interface ProcessSectionProps {
  keywordConfig: KeywordConfig;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ keywordConfig }) => {
  const steps = [
    {
      num: "01",
      title: "현장 상태 확인",
      desc: "지사 전문팀이 현장을 신속 방문하여 건물 외관, 평수, 균열 분포 등 전체 전경 레이아웃을 확인합니다."
    },
    {
      num: "02",
      title: "누수·균열 원인 진단",
      desc: "열화상 장비와 밀폐 진단 장비 등을 사용해 균열의 깊이와 물길이 유입된 누수 진원지를 정확히 찾아냅니다."
    },
    {
      num: "03",
      title: "바탕면 정리 및 취약부 보수",
      desc: "고압 세척으로 이끼와 먼지를 제거하고 노후 페인트막을 갈아낸 뒤(면갈이), 취약한 크랙 부위를 에폭시/퍼티로 충전합니다."
    },
    {
      num: "04",
      title: "방수·발수·도장 본시공",
      desc: "바탕재에 적합한 프라이머를 바르고, 특수 방수 도막 형성이나 발수제 살포, 내후성 도장 본 공정을 정량 준수하여 밀도 높게 시공합니다."
    },
    {
      num: "05",
      title: "마감 검수 및 관리 안내",
      desc: "살수/건조 점검을 진행하여 하자가 없음을 검증하고, 공식 보증서 발급과 함께 건물의 수명을 지켜줄 자가 관리 가이드를 설명해 드립니다."
    }
  ];

  // 동적 키워드에 따라 문구 자연스럽게 분기
  const subParagraph = keywordConfig.isActive
    ? `기본을 지키는 5대 공정을 빈틈없이 준수하여, ${keywordConfig.region} 지역 내 건물 상태에 딱 맞는 무하자 시공을 완료합니다.`
    : `중간 공정을 단 하나라도 생략하면 반드시 하자가 재발합니다. ${BRAND_NAME}은 정직하게 순서를 지킵니다.`;

  return (
    <section className="process-section" id="process" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">

        <div style={{ maxWidth: "800px", margin: "0 auto 4rem auto", textAlign: "center" }}>
          <span className="badge badge-blue" style={{ marginBottom: "1rem" }}>Work Flow</span>
          <h2 style={{
            fontSize: "2.2rem",
            fontWeight: 900,
            color: "var(--text-dark)",
            marginBottom: "1rem",
            letterSpacing: "-0.03em"
          }} className="break-keep process-h2">
            기본을 지키는 5대 시공 프로세스
          </h2>
          <p style={{
            color: "var(--text-muted)",
            fontSize: "1.05rem",
            fontWeight: 500,
            lineHeight: "1.6"
          }} className="break-keep process-body-text">
            {subParagraph}
          </p>
        </div>

        {/* 프로세스 리스트 */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          {steps.map((step) => (
            <div key={step.num} className="card process-card" style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
              padding: "2rem",
              position: "relative"
            }}>
              
              {/* 번호 표시 */}
              <div style={{
                fontSize: "2.5rem",
                fontWeight: 950,
                color: "var(--primary-color)",
                width: "80px",
                height: "80px",
                borderRadius: "20px",
                backgroundColor: "rgba(27, 97, 252, 0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                {step.num}
              </div>

              {/* 내용 */}
              <div style={{ textAlign: "left" }}>
                <h3 style={{
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  color: "var(--text-dark)",
                  margin: "0 0 0.5rem 0"
                }}>
                  {step.title}
                </h3>
                <p style={{
                  color: "var(--text-muted)",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  margin: 0
                }} className="break-keep">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-h2 {
            font-size: 1.5rem !important;
            margin-bottom: 0.75rem !important;
          }
          .process-body-text {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
          }
          .process-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1rem !important;
            padding: 1.5rem !important;
          }
          .process-card div:first-child {
            width: 50px !important;
            height: 50px !important;
            font-size: 1.5rem !important;
            border-radius: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
