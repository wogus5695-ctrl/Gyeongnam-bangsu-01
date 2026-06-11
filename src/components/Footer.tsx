import React from "react";
import {
  BRAND_NAME,
  REPRESENTATIVE_NAME,
  BUSINESS_NUMBER,
  CONTACT_PHONE,
  HAS_REPRESENTATIVE,
  HAS_BUSINESS_NUMBER,
  HAS_FOOTER_INFO,
  HAS_PHONE
} from "../data/brand";

export const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: "#111827",
      color: "#9ca3af",
      padding: "5rem 0",
      fontSize: "0.88rem",
      borderTop: "1px solid #1f2937",
      textAlign: "left"
    }}>
      <div className="container">
        
        {/* 상단 2열 정보 레이아웃 */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "3rem",
          marginBottom: "3rem"
        }} className="footer-top">
          
          <div style={{ flex: "1 1 300px" }}>
            {/* 로고 */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <div style={{
                width: "24px",
                height: "24px",
                backgroundColor: "var(--primary-color)",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 900,
                fontSize: "0.85rem"
              }}>
                R
              </div>
              <span style={{ fontWeight: 900, fontSize: "1.2rem", color: "#ffffff", letterSpacing: "-0.03em" }}>
                {BRAND_NAME}
              </span>
            </div>
            <p style={{ lineHeight: "1.6", color: "#6b7280" }} className="break-keep">
              {BRAND_NAME}은 부산, 경남, 울산 전 지역의 아파트, 상가, 주택 건물의 빗물누수를 원천 차단하는 방수·발수·도색 시공 전문 브랜드입니다. 정밀 원인 진단과 책임감 있는 관리 서비스를 약속합니다.
            </p>
          </div>

          {/* 고객 센터 */}
          <div style={{ flex: "1 1 200px" }}>
            <h4 style={{ color: "#ffffff", fontSize: "1rem", fontWeight: 800, margin: "0 0 1rem 0" }}>
              고객센터 및 상담
            </h4>
            <a
              href={HAS_PHONE ? `tel:${CONTACT_PHONE}` : "#contact"}
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                color: "var(--primary-color)",
                textDecoration: "none",
                display: "block",
                marginBottom: "0.5rem"
              }}
            >
              {HAS_PHONE ? CONTACT_PHONE : "상담 문의"}
            </a>
            <p style={{ margin: 0, color: "#6b7280", fontWeight: 700 }}>
              평일 / 주말 오전 7:00 ~ 오후 6:00 (연중무휴)
            </p>
          </div>

        </div>

        {/* 하단 세부 법인 정보 */}
        <div style={{
          borderTop: "1px solid #1f2937",
          paddingTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center"
          }} className="footer-bottom-info">
            
            {/* 사업자/대표 정보 (있을 때만 조건부 렌더링) */}
            {HAS_FOOTER_INFO ? (
              <p style={{ color: "#6b7280", margin: 0, fontWeight: 500 }} className="break-keep">
                {HAS_REPRESENTATIVE && (
                  <span style={{ marginRight: "1.5rem" }}>
                    대표자: {REPRESENTATIVE_NAME}
                  </span>
                )}
                {HAS_BUSINESS_NUMBER && (
                  <span>
                    사업자등록번호: {BUSINESS_NUMBER}
                  </span>
                )}
              </p>
            ) : (
              <p style={{ color: "#4b5563", margin: 0, fontSize: "0.8rem", fontStyle: "italic" }}>
                ※ 회사 기본 정보(대표자명, 사업자번호) 등록 대기 중
              </p>
            )}

            <p style={{ color: "#6b7280", margin: 0 }}>
              © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
            </p>
          </div>

          {/* 하단 출장 안내 문구 */}
          <p style={{
            color: "#4b5563",
            fontSize: "0.8rem",
            borderTop: "1px dashed #1f2937",
            paddingTop: "1rem",
            margin: 0
          }} className="break-keep">
            * 경상남도(김해, 양산, 창원, 밀양 등), 부산광역시, 울산광역시 전 지역 방수·발수·도색 시공 및 방문 실측 누수 탐지 접수 상담 가능
          </p>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .footer-bottom-info {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
