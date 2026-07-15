import React from "react";
import { BRAND_NAME } from "../data/brand";
import type { KeywordConfig } from "../data/keywords";

interface ProcessSectionProps {
  keywordConfig: KeywordConfig;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ keywordConfig }) => {
  // serviceGroup에 따른 동적 프로세스 5단계 데이터셋 정의
  const getDynamicSteps = () => {
    const group = keywordConfig.isActive ? keywordConfig.serviceGroup : "";

    if (group === "leak-diagnosis") {
      return [
        {
          num: "01",
          title: "실내 누수 흔적 확인",
          desc: "물자국·곰팡이·습기 위치를 먼저 봅니다."
        },
        {
          num: "02",
          title: "외부 균열 점검",
          desc: "외벽 크랙과 창호 주변 틈을 확인합니다."
        },
        {
          num: "03",
          title: "유입 경로 추적",
          desc: "빗물이 들어오는 방향과 경로를 봅니다."
        },
        {
          num: "04",
          title: "보수 범위 설계",
          desc: "부분 보수와 전체 시공 여부를 구분합니다."
        },
        {
          num: "05",
          title: "시공 후 관리",
          desc: "재누수 방지를 위한 관리 기준을 안내합니다."
        }
      ];
    }

    if (group === "surface-protection") {
      return [
        {
          num: "01",
          title: "표면 오염 및 도막 검사",
          desc: "외벽 표면의 페인트 도막 들뜸(박리), 백화 현상, 벽돌 수분 흡수 오염도 상태를 상세히 점검합니다."
        },
        {
          num: "02",
          title: "고압 세척 및 균열 보수",
          desc: "고압 물세척으로 이끼와 먼지를 정리하고, 구도막 면갈이 후 미세 균열 부위를 씰링재로 꼼꼼히 충전합니다."
        },
        {
          num: "03",
          title: "바탕 정리 및 하도 살포",
          desc: "도막 형성력과 발수막 침투력을 극대화하기 위해 표면에 적합한 하도 프라이머를 균일하게 도포합니다."
        },
        {
          num: "04",
          title: "도장 및 발수 본시공",
          desc: "내후성이 우수한 정품 페인트 도장 및 고침투성 발수제를 정량 살포하여 강력한 외부 보호층을 형성합니다."
        },
        {
          num: "05",
          title: "마감 검수 및 관리 안내",
          desc: "표면 코팅 상태와 페인트 균일도를 엄밀히 검수한 뒤, 건물 미관과 방어력을 유지할 관리 팁을 설명해 드립니다."
        }
      ];
    }

    // 기본값 및 waterproofing-construction 그룹
    return [
      {
        num: "01",
        title: "증상과 발생 조건 확인",
        desc: "비가 오는 방향과 시간, 물자국 위치와 반복 여부를 먼저 확인합니다."
      },
      {
        num: "02",
        title: "외부 유입 가능 구간 점검",
        desc: "외벽 균열·창호 접합부·옥상·지붕 상태를 구분해 확인합니다."
      },
      {
        num: "03",
        title: "부분 보수 가능 여부 판단",
        desc: "문제가 특정 구간에 한정됐는지, 기존 방수층 전체가 노후됐는지 확인합니다."
      },
      {
        num: "04",
        title: "작업 범위와 제외 범위 안내",
        desc: "시공 부위와 자재, 접근 방식과 추가 확인이 필요한 부분을 구분해 안내합니다."
      },
      {
        num: "05",
        title: "시공 및 마감 상태 확인",
        desc: "균열 보수와 방수 마감 후 누락 구간과 접합부 상태를 다시 확인합니다."
      }
    ];
  };

  const steps = getDynamicSteps();

  // serviceGroup에 따른 대제목 및 소제목 분기
  const processTitle = (() => {
    const group = keywordConfig.isActive ? keywordConfig.serviceGroup : "";
    if (group === "leak-diagnosis") return "누수 해결을 위한 5대 원인 진단 프로세스";
    if (group === "surface-protection") return "건물 보호를 위한 5대 마감·보호 프로세스";
    return "기본을 지키는 5대 시공 프로세스";
  })();

  const subParagraph = keywordConfig.isActive
    ? `기본을 지키는 5대 공정을 빈틈없이 준수하여, ${keywordConfig.region} 지역 내 건물 상태에 딱 맞는 무하자 시공을 완료합니다.`
    : `중간 공정을 단 하나라도 생략하면 반드시 하자가 재발합니다. ${BRAND_NAME}은 정직하게 순서를 지키며, 현장 확인만으로 원인이 명확하지 않은 경우에는 특정 시공을 먼저 단정하지 않습니다.`;

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
            {processTitle}
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
        <div className="process-list-container" style={{
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
        .nav-link {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-muted);
          text-decoration: none;
        }
        .nav-link:hover {
          color: var(--primary-color);
        }
        @media (max-width: 768px) {
          .process-section {
            padding: 3rem 0 !important;
          }
          .process-list-container {
            gap: 0.75rem !important;
          }
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
            gap: 0.75rem !important;
            padding: 1.25rem !important;
          }
          .process-card div:first-child {
            width: 46px !important;
            height: 46px !important;
            font-size: 1.35rem !important;
            border-radius: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
