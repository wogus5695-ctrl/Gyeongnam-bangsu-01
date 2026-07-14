import React from "react";
import { regionGroups, generateKeywordItems } from "../data/keywords";
import type { RegionGroup } from "../data/regions";
import Header from "./Header";
import Footer from "./Footer";

export const SitemapGimhae: React.FC = () => {
  const allKeywords = generateKeywordItems();
  // exposeInHub === true인 키워드만 가져오기
  const visibleKeywords = allKeywords.filter(k => k.exposeInHub);

  // 노출이 승인된 그룹들 필터링 (해당 그룹 하위에 노출될 키워드가 존재하는 경우만)
  const activeGroups = regionGroups.filter((group: RegionGroup) => 
    visibleKeywords.some(k => k.parent === group.groupTitle)
  );

  return (
    <div className="app-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* GNB 헤더 */}
      <Header />

      {/* 메인 허브 콘텐츠 */}
      <main style={{ flexGrow: 1, padding: "5rem 1.5rem", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          {/* 상단 안내 문구 */}
          <div style={{ marginBottom: "3rem" }}>
            <h1 style={{
              fontSize: "2rem",
              fontWeight: 800,
              color: "#0f172a",
              marginBottom: "1rem",
              letterSpacing: "-0.03em"
            }}>
              경남 방수·도색 시공 서비스 안내
            </h1>
            
            <p style={{
              color: "#475569",
              fontSize: "1.05rem",
              lineHeight: "1.6",
              margin: 0
            }}>
              부산·울산·경남 지역의 방수·누수·도색·균열보수 서비스를 지역별로 확인하실 수 있습니다.
            </p>
          </div>

          {/* 지역별 키워드 그룹 나열 */}
          {activeGroups.map((group: RegionGroup) => {
            // 해당 지역 그룹에 속한 키워드 필터링
            const groupKeywords = visibleKeywords.filter(k => k.parent === group.groupTitle);
            
            return (
              <section key={group.groupTitle} style={{ marginBottom: "3rem" }}>
                <h2 style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "#1e293b",
                  marginBottom: "1rem",
                  paddingBottom: "0.5rem",
                  borderBottom: "1.5px solid #cbd5e1"
                }}>
                  {group.groupTitle}
                </h2>
                
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.6rem 1rem"
                }}>
                  {groupKeywords.map(link => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="hub-link"
                      style={{
                        fontSize: "0.95rem",
                        color: "#2563eb",
                        textDecoration: "none",
                        fontWeight: 500,
                        lineHeight: "1.5",
                        transition: "color 0.15s ease"
                      }}
                    >
                      {link.displayText}
                    </a>
                  ))}
                </div>
              </section>
            );
          })}

          {/* 홈으로 이동 버튼 */}
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <a
              href="/"
              style={{
                display: "inline-block",
                padding: "0.8rem 2rem",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                backgroundColor: "#ffffff",
                color: "#475569",
                fontSize: "0.95rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.15s ease"
              }}
              className="back-btn"
            >
              🏠 메인 홈페이지로 이동
            </a>
          </div>

        </div>
      </main>

      {/* 푸터 */}
      <Footer />

      {/* 호버 스타일 주입 */}
      <style>{`
        .hub-link:hover {
          color: #1d4ed8 !important;
          text-decoration: underline !important;
        }
        .back-btn:hover {
          background-color: #f1f5f9 !important;
          border-color: #94a3b8 !important;
          color: #1e293b !important;
        }
      `}</style>
    </div>
  );
};

export default SitemapGimhae;
