import React from "react";
import { primaryServiceAreas, activeKeywordRegions } from "../data/regions";
import { BRAND_NAME } from "../data/brand";

export const AreaSection: React.FC = () => {
  return (
    <section className="area-section" id="areas" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">

        <div style={{ maxWidth: "800px", margin: "0 auto 4rem auto", textAlign: "center" }}>
          <span className="badge badge-blue" style={{ marginBottom: "1rem" }}>Service Area</span>
          <h2 style={{
            fontSize: "2.2rem",
            fontWeight: 900,
            color: "var(--text-dark)",
            marginBottom: "1rem",
            letterSpacing: "-0.03em"
          }} className="break-keep">
            부산·경남·울산 <span style={{ color: "var(--primary-color)" }}>신속 출장 시공 권역</span>
          </h2>
          <p style={{
            color: "var(--text-muted)",
            fontSize: "1.05rem",
            fontWeight: 500,
            lineHeight: "1.6"
          }} className="break-keep">
            {BRAND_NAME}은 중간 하도급을 주지 않으며, 본사 직영 기술팀이 현장으로 긴급 방문 출동합니다.
          </p>
        </div>

        {/* 광역 지역 3구역 표시 */}
        <div className="grid-3" style={{ maxWidth: "900px", margin: "0 auto 3rem auto" }}>
          {primaryServiceAreas.map((area) => (
            <div key={area} className="card" style={{
              textAlign: "center",
              padding: "2rem",
              borderRadius: "24px",
              border: "1px solid var(--border-color)",
              boxShadow: "none",
              backgroundColor: "var(--bg-light)"
            }}>
              <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.5rem" }}>📍</span>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, margin: 0, color: "var(--text-dark)" }}>
                {area}광역시/도
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.5rem", fontWeight: 500 }}>
                지사 직영 출장 및 진단 가능
              </p>
            </div>
          ))}
        </div>

        {/* 1차 집중 지역 김해 강조 카드 */}
        <div className="card gimhae-highlight-card" style={{
          maxWidth: "900px",
          margin: "0 auto",
          border: "2px solid rgba(27, 97, 252, 0.15)",
          padding: "2.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* 장식용 패턴 */}
          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100px",
            height: "100px",
            backgroundColor: "rgba(27, 97, 252, 0.05)",
            borderRadius: "0 0 0 100px"
          }} />
          
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span className="badge badge-orange" style={{ fontSize: "0.8rem" }}>1차 핵심 활성 거점</span>
            <span style={{ fontSize: "0.9rem", color: "var(--primary-color)", fontWeight: 800 }}>김해 전지역 즉시 방문</span>
          </div>

          <h3 style={{
            fontSize: "1.6rem",
            fontWeight: 900,
            color: "var(--text-dark)",
            margin: 0
          }}>
            {activeKeywordRegions.join(", ")}시 집중 누수케어 운영 지사
          </h3>

          <p style={{
            color: "var(--text-muted)",
            fontSize: "0.95rem",
            lineHeight: "1.6",
            margin: 0
          }} className="break-keep">
            현재 <strong>경남 김해시 전역</strong>(삼계동, 내동, 외동, 부원동, 어방동, 활천동, 장유동, 진영읍 등)에 <br className="hidden-mobile" />
            우선 배치 엔지니어가 상주하고 있어, <strong>당일 긴급 방문 진단 예약</strong> 및 균열 원인 스캔이 신속하게 이루어집니다.
          </p>

          <div style={{
            borderTop: "1px solid var(--border-color)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem"
          }}>
            {["삼계동", "내외동", "부원동", "활천동", "어방동", "장유", "진영", "주촌"].map((town) => (
              <span key={town} style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--text-muted)",
                backgroundColor: "#f1f5f9",
                padding: "0.3rem 0.6rem",
                borderRadius: "6px"
              }}>
                #{town} 방수
              </span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .gimhae-highlight-card {
            padding: 1.5rem !important;
          }
          .gimhae-highlight-card h3 {
            font-size: 1.25rem !important;
          }
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AreaSection;
