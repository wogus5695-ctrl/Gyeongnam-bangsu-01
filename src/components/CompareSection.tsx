import React from "react";

export const CompareSection: React.FC = () => {
  const compareData = [
    {
      type: "외벽방수",
      purpose: "외벽 콘크리트 균열이나 조인트, 창호 주변 틈새로 유입되는 빗물을 원천 차단하기 위한 시공",
      when: "비가 온 뒤 실내 천장, 벽면 등에 물자국이나 습기, 곰팡이 흔적이 직접적으로 나타나는 경우"
    },
    {
      type: "외벽발수",
      purpose: "적벽돌이나 콘크리트 외벽 표면이 빗물을 흡수하지 못하게 특수 발수제를 코팅하여 건물의 표면 보호력을 강화하는 시공",
      when: "외벽 벽돌면이 비를 받아 검게 젖어 축축해지거나, 수분 침투로 인한 백화 현상 및 표면 오염이 쉽게 누적되는 경우"
    },
    {
      type: "외벽도색",
      purpose: "건물의 미관을 복원하고 외벽 콘크리트의 자외선 열화 및 산성비를 방어하기 위해 표면 보호 도막을 형성하는 작업",
      when: "기존 페인트 도막이 부풀어 오르고 벗겨지는 박리 현상, 햇빛에 바래 변색됨, 혹은 미장 오염이 심각할 때"
    }
  ];

  return (
    <section className="compare-section" id="compare" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        
        <div style={{ maxWidth: "800px", margin: "0 auto 4rem auto", textAlign: "center" }}>
          <span className="badge badge-blue" style={{ marginBottom: "1rem" }}>Technical Comparison</span>
          <h2 style={{
            fontSize: "2.2rem",
            fontWeight: 900,
            color: "var(--text-dark)",
            marginBottom: "1rem",
            letterSpacing: "-0.03em"
          }} className="break-keep compare-h2">
            외벽방수 · 외벽발수 · 외벽도색 차이점 가이드
          </h2>
          <p style={{
            color: "var(--text-muted)",
            fontSize: "1.05rem",
            fontWeight: 500,
            lineHeight: "1.6"
          }} className="break-keep compare-body-text">
            공사 종류에 따라 시공 목적과 적합한 현장 시점이 다릅니다. 올바른 공법 선택이 건물의 수명을 좌우합니다.
          </p>
        </div>

        {/* 비교표 데스크톱 버전 */}
        <div className="desktop-table-wrapper" style={{ marginBottom: "2rem" }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid var(--border-color)",
            backgroundColor: "var(--bg-white)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "var(--shadow-sm)"
          }}>
            <thead>
              <tr style={{ backgroundColor: "#f8fafc", borderBottom: "2px solid var(--border-color)" }}>
                <th style={{ padding: "1.25rem", fontWeight: 800, width: "20%", borderRight: "1px solid var(--border-color)" }}>구분</th>
                <th style={{ padding: "1.25rem", fontWeight: 800, width: "40%", borderRight: "1px solid var(--border-color)" }}>시공 목적</th>
                <th style={{ padding: "1.25rem", fontWeight: 800, width: "40%" }}>필요한 건물 상태</th>
              </tr>
            </thead>
            <tbody>
              {compareData.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td style={{
                    padding: "1.5rem",
                    fontWeight: 900,
                    color: "var(--primary-color)",
                    backgroundColor: "#fcfdff",
                    borderRight: "1px solid var(--border-color)",
                    textAlign: "center"
                  }}>
                    {row.type}
                  </td>
                  <td style={{ padding: "1.5rem", borderRight: "1px solid var(--border-color)", color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.6" }} className="break-keep">
                    {row.purpose}
                  </td>
                  <td style={{ padding: "1.5rem", color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.6" }} className="break-keep">
                    {row.when}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 모바일 전용 카드형 리스트 (768px 이하 활성화) */}
        <div className="mobile-cards-wrapper" style={{ display: "none", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
          {compareData.map((row, idx) => (
            <div key={idx} className="card" style={{ padding: "1.5rem", textAlign: "left" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: 900, color: "var(--primary-color)", display: "block", marginBottom: "0.75rem" }}>
                {row.type}
              </span>
              <div style={{ marginBottom: "0.75rem" }}>
                <strong style={{ fontSize: "0.85rem", color: "var(--text-dark)", display: "block", marginBottom: "0.25rem" }}>💡 시공 목적</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.5 }} className="break-keep">{row.purpose}</p>
              </div>
              <div>
                <strong style={{ fontSize: "0.85rem", color: "var(--text-dark)", display: "block", marginBottom: "0.25rem" }}>🧱 필요한 건물 상태</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.5 }} className="break-keep">{row.when}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ⚠️ 주의점 배너 */}
        <div style={{
          backgroundColor: "rgba(255, 94, 0, 0.05)",
          border: "1px solid rgba(255, 94, 0, 0.2)",
          borderRadius: "16px",
          padding: "1.5rem 2rem",
          textAlign: "left",
          margin: "0 auto 4rem auto",
          maxWidth: "900px"
        }} className="compare-warning">
          <strong style={{ color: "var(--secondary-color)", fontSize: "1.05rem", display: "block", marginBottom: "0.5rem" }}>
            ⚠️ 주의: 외벽도색만으로는 누수가 근본적으로 해결되지 않습니다!
          </strong>
          <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.6" }} className="break-keep">
            페인트 마감(외벽도색)은 미세 보수 효과가 일부 있으나 슬래브 내부 균열을 영구 충전하지 못합니다. 빗물 침투 및 천장 누수 하자가 발견되는 경우에는 반드시 고압 방수 크랙 충전(외벽방수) 작업을 선행한 후에 도장 코팅을 씌워야 하자가 재발하지 않습니다.
          </p>
        </div>

        {/* AEO / GEO 최적화용 Q&A 섹션 */}
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          borderTop: "1px solid var(--border-color)",
          paddingTop: "4rem"
        }} className="aeo-qa-container">
          <div style={{ marginBottom: "2.5rem", textAlign: "left" }}>
            <span className="badge badge-orange" style={{ marginBottom: "0.75rem" }}>AEO / GEO Information</span>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0, color: "var(--text-dark)" }}>
              기술팀이 알려주는 시공 안내서 (Q&A)
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", textAlign: "left" }}>
            {[
              {
                q: "외벽방수는 언제 필요할까요?",
                a: "태풍이나 긴 장마철을 겪은 후 실내 천장, 새시 주변 벽지가 젖어 얼룩덜룩해지거나 벽체 내부에 물 고임, 곰팡이 냄새가 퍼지는 경우 외벽 크랙을 통한 누수 유입이 진행되는 즉시 외벽방수를 진행하셔야 구조물 손상을 막습니다."
              },
              {
                q: "옥상누수는 어떤 원인으로 발생하나요?",
                a: "주요 원인은 옥상 바닥 슬래브 콘크리트 균열, 노후된 우레탄 방수 도막의 들뜸 및 찢어짐, 배수구 루프드레인 막힘으로 인한 빗물 고임, 그리고 난간 파라펫 접합부 마감 탈락 등이며 장기 노화에 의해 발생합니다."
              },
              {
                q: "외벽누수는 어떻게 확인하나요?",
                a: "비가 새는 날 건물 중간 층 벽체 내부가 젖어 들거나 창틀 주변의 벽지에 곰팡이가 필 때, 외벽 적벽돌 메지가 허옇게 탈락했거나 콘크리트면 틈새에 물길이 형성되는 모양을 확인하여 알 수 있으며 전문가의 정밀 진단이 좋습니다."
              },
              {
                q: "건물방수는 어떤 경우에 필요하나요?",
                a: "건물의 연식이 10년이 지나 외벽 균열, 옥상 바닥 균열, 지붕 이음새 훼손 등 여러 군데서 다발적 습기가 발견될 때 필요한 시공입니다. 부분 땜질만으로는 다른 약한 틈으로 물길이 우회하므로, 건물 전반의 방수 안전망을 조율해야 합니다."
              }
            ].map((qa, i) => (
              <div key={i} style={{
                borderBottom: "1px dashed var(--border-color)",
                paddingBottom: "1.5rem"
              }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-dark)", margin: "0 0 0.5rem 0" }}>
                  Q: {qa.q}
                </h4>
                <p style={{ margin: 0, fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: "1.6" }} className="break-keep">
                  A: {qa.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .compare-h2 {
            font-size: 1.5rem !important;
            margin-bottom: 0.75rem !important;
          }
          .compare-body-text {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
          }
          .desktop-table-wrapper {
            display: none !important;
          }
          .mobile-cards-wrapper {
            display: flex !important;
          }
          .compare-warning {
            padding: 1.25rem !important;
          }
          .compare-warning strong {
            font-size: 0.95rem !important;
          }
          .compare-warning p {
            font-size: 0.8rem !important;
          }
          .aeo-qa-container {
            padding-top: 2rem !important;
          }
          .aeo-qa-container h3 {
            font-size: 1.25rem !important;
          }
          .aeo-qa-container h4 {
            font-size: 0.95rem !important;
          }
          .aeo-qa-container p {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CompareSection;
