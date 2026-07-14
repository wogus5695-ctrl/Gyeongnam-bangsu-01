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
          title: "실내 누수 흔적 조사",
          desc: "지사 전문팀이 신속 방문하여 실내 벽면 물자국, 곰팡이 분포 및 습기 발생 위치를 정밀 확인합니다."
        },
        {
          num: "02",
          title: "외부 균열 상태 점검",
          desc: "물자국 발생 위치와 인접한 건물 외부 벽면의 콘크리트 균열, 창틀 실리콘 노후 상태를 육안 점검합니다."
        },
        {
          num: "03",
          title: "유입 경로 장비 추적",
          desc: "필요 시 열화상 장비 및 정밀 탐지법을 활용해 빗물이 콘크리트 내부를 타고 흐르는 유입 경로를 추적합니다."
        },
        {
          num: "04",
          title: "원인별 최적 보수 처방",
          desc: "진단된 누수 원인에 맞춰 불필요한 전체 시공을 지양하고, 하자 없는 정밀 부분 방수 및 보수 범위를 설계합니다."
        },
        {
          num: "05",
          title: "보수 시공 및 사후 관리",
          desc: "누수 유입 지점의 정밀 코킹 및 균열 충전 시공을 완료한 뒤 공식 보증서 발급과 함께 자가 관리법을 안내합니다."
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
