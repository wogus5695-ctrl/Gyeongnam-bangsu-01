import React from "react";
import { BRAND_NAME, CONTACT_PHONE, HAS_PHONE } from "../data/brand";

export const Header: React.FC = () => {
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      width: "100%",
      borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      boxShadow: "0 1px 3px rgba(0,0,0,0.02)"
    }}>
      <div className="container" style={{
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        {/* 브랜드 로고 */}
        <a href="/" style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }}>
          <div style={{
            width: "32px",
            height: "32px",
            backgroundColor: "var(--primary-color)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 900,
            fontSize: "1.1rem"
          }}>
            R
          </div>
          <span style={{
            fontWeight: 900,
            fontSize: "1.35rem",
            color: "var(--text-dark)",
            letterSpacing: "-0.04em"
          }}>
            {BRAND_NAME}
          </span>
        </a>

        {/* 네비게이션 데스크톱 링크 */}
        <nav className="desktop-nav" style={{
          display: "flex",
          gap: "2rem"
        }}>
          <a href="#problems" className="nav-link">누수진단</a>
          <a href="#services" className="nav-link">서비스안내</a>
          <a href="#process" className="nav-link">시공과정</a>
          <a href="#cases" className="nav-link">시공예시</a>
          <a href="#areas" className="nav-link">서비스지역</a>
        </nav>

        {/* 우측 전화문의 실시간 버튼 */}
        <a
          href={HAS_PHONE ? `tel:${CONTACT_PHONE}` : "#contact"}
          className="btn btn-primary"
          style={{
            padding: "0.6rem 1.2rem",
            fontSize: "0.95rem",
            borderRadius: "10px",
            boxShadow: "none"
          }}
        >
          📞 작업 가능 여부 전화 확인
        </a>
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
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
