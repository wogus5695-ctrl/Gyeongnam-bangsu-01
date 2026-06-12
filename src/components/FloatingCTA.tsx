import React from "react";
import { CONTACT_PHONE, HAS_PHONE } from "../data/brand";

export const FloatingCTA: React.FC = () => {
  const phoneHref = HAS_PHONE ? `tel:${CONTACT_PHONE}` : "#contact";

  return (
    <>
      {/* 데스크톱 전용 우하단 플로팅 버튼 */}
      <a
        href={phoneHref}
        className="desktop-floating-cta"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 99,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          backgroundColor: "var(--primary-color)",
          color: "#ffffff",
          textDecoration: "none",
          padding: "1rem 1.75rem",
          borderRadius: "50px",
          boxShadow: "0 10px 25px rgba(27, 97, 252, 0.4)",
          fontWeight: 900,
          fontSize: "1.05rem",
          transition: "transform 0.2s ease"
        }}
      >
        <span className="floating-phone-icon" style={{ fontSize: "1.2rem" }}>📞</span>
        <span>실시간 전화 상담</span>
      </a>

      {/* 모바일 전용 하단 고정 바 (768px 이하 활성화) */}
      <div className="mobile-bottom-bar" style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        backgroundColor: "#ffffff",
        boxShadow: "0 -4px 10px rgba(0,0,0,0.06)",
        display: "flex",
        padding: "0.6rem 1rem calc(0.6rem + env(safe-area-inset-bottom, 0px)) 1rem", // iOS 세이프 에리아 대응
        gap: "0.75rem"
      }}>


        {/* 전화상담 바로가기 */}
        <a
          href={phoneHref}
          style={{
            flex: 1,
            backgroundColor: "var(--primary-color)",
            color: "#ffffff",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            height: "50px",
            borderRadius: "12px",
            fontWeight: 900,
            fontSize: "1rem",
            boxSizing: "border-box"
          }}
        >
          <span>📞</span>
          <span>전화상담</span>
        </a>
      </div>

      <style>{`
        /* 데스크톱 & 모바일 숏컷 레이아웃 제어 */
        .mobile-bottom-bar {
          display: none !important;
        }
        .desktop-floating-cta:hover {
          transform: translateY(-3px) scale(1.02);
        }
        
        @media (max-width: 768px) {
          .desktop-floating-cta {
            display: none !important;
          }
          .mobile-bottom-bar {
            display: flex !important;
          }
          /* 모바일 하단 바 노출 시 푸터 하단 패딩 여유값 확보 */
          body {
            padding-bottom: calc(75px + env(safe-area-inset-bottom, 0px)) !important;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingCTA;
