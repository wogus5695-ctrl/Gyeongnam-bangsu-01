import React, { useState } from "react";
import { faqs } from "../data/faq";

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id="faq" style={{ backgroundColor: "var(--bg-light)" }}>
      <div className="container" style={{ maxWidth: "800px" }}>

        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="badge badge-blue" style={{ marginBottom: "1rem" }}>FAQ</span>
          <h2 style={{
            fontSize: "2.2rem",
            fontWeight: 900,
            color: "var(--text-dark)",
            marginBottom: "1rem",
            letterSpacing: "-0.03em"
          }} className="break-keep">
            자주 묻는 <span style={{ color: "var(--primary-color)" }}>질문과 답변</span>
          </h2>
          <p style={{
            color: "var(--text-muted)",
            fontSize: "1.05rem",
            fontWeight: 500,
            lineHeight: "1.6"
          }} className="break-keep">
            시공 의뢰 전 고객님들이 많이 물어보시는 방수·발수·도색의 핵심 사항을 정리했습니다.
          </p>
        </div>

        {/* 아코디언 그룹 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                style={{
                  backgroundColor: "var(--bg-white)",
                  borderRadius: "16px",
                  border: isOpen ? "1px solid rgba(27, 97, 252, 0.3)" : "1px solid var(--border-color)",
                  boxShadow: isOpen ? "var(--shadow-md)" : "var(--shadow-sm)",
                  overflow: "hidden",
                  transition: "all 0.25s ease-in-out"
                }}
              >
                {/* 질문 토글 버튼 (최소 터치 영역 확보를 위한 넉넉한 패딩) */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.25rem 1.75rem",
                    border: "none",
                    backgroundColor: isOpen ? "rgba(27, 97, 252, 0.02)" : "transparent",
                    color: "var(--text-dark)",
                    cursor: "pointer",
                    textAlign: "left",
                    outline: "none",
                    minHeight: "56px" // 48px 이상 터치 영역 준수
                  }}
                >
                  <span style={{
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    lineHeight: "1.4"
                  }} className="break-keep">
                    <span style={{
                      color: "var(--primary-color)",
                      fontSize: "1.2rem",
                      fontWeight: 900
                    }}>
                      Q.
                    </span>
                    {faq.question}
                  </span>
                  
                  {/* 화살표 아이콘 */}
                  <svg
                    style={{
                      width: "20px",
                      height: "20px",
                      color: isOpen ? "var(--primary-color)" : "var(--text-light)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.2s ease",
                      flexShrink: 0,
                      marginLeft: "1rem"
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* 답변 바디 */}
                <div
                  style={{
                    maxHeight: isOpen ? "500px" : "0",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "all 0.25s ease-in-out"
                  }}
                >
                  <div
                    style={{
                      padding: "1.5rem 1.75rem",
                      borderTop: "1px solid var(--border-color)",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      color: "var(--text-muted)",
                      backgroundColor: "#ffffff",
                      textAlign: "left"
                    }}
                    className="break-keep"
                  >
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                      <span style={{
                        color: "var(--secondary-color)",
                        fontWeight: 900,
                        fontSize: "1.1rem",
                        flexShrink: 0
                      }}>
                        A.
                      </span>
                      <p style={{ margin: 0 }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
