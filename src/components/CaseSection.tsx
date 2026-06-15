import React, { useState, useEffect } from "react";
import type { KeywordConfig } from "../data/keywords";
import { showcaseItems } from "../data/cases";

interface CaseSectionProps {
  keywordConfig: KeywordConfig;
}

export const CaseSection: React.FC<CaseSectionProps> = ({ keywordConfig }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loadErrors, setLoadErrors] = useState<Record<string, boolean>>({});

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // URL 키워드 파라미터가 바뀌면 매칭되는 첫 슬라이드로 시작
  useEffect(() => {
    if (keywordConfig.isActive && keywordConfig.service) {
      const matchIndex = showcaseItems.findIndex((item) =>
        item.group.includes(keywordConfig.service)
      );
      if (matchIndex !== -1) {
        setCurrentIndex(matchIndex);
      }
    }
  }, [keywordConfig]);

  // 자동 슬라이드 (5초 주기)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
  };

  // 모바일 스와이프 기능
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const handleImgError = (imgKey: string) => {
    setLoadErrors((prev) => ({ ...prev, [imgKey]: true }));
  };

  const getCategoryName = (id: string) => {
    if (id === "exterior-waterproof") return "외벽방수";
    if (id === "rooftop-waterproof" || id === "rooftop-cleaning") return "옥상방수";
    return "외벽도색";
  };

  return (
    <section className="case-section" id="cases" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        
        {/* 섹션 헤더 */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="badge badge-blue" style={{ marginBottom: "1rem" }}>
            작업 전후 예시
          </span>
          <h2 style={{
            fontSize: "2.2rem",
            fontWeight: 900,
            color: "var(--text-dark)",
            marginBottom: "1.25rem",
            letterSpacing: "-0.03em"
          }} className="break-keep case-h2">
            전후 비교로 확인하는<br />방수·도색 작업 예시
          </h2>
          <p style={{
            color: "var(--text-muted)",
            fontSize: "1.02rem",
            fontWeight: 500,
            lineHeight: "1.6",
            maxWidth: "720px",
            margin: "0 auto",
            wordBreak: "keep-all"
          }} className="break-keep case-body-text">
            아래 이미지는 작업 유형을 이해하기 위한 전후 비교 예시입니다. 실제 현장 사진은 추후 교체 예정입니다.
          </p>
        </div>

        {/* 1개 카드 슬라이더 영역 */}
        <div 
          className="showcase-slider-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {showcaseItems.map((item, idx) => {
            const isActive = idx === currentIndex;
            const categoryName = getCategoryName(item.id);

            return (
              <div 
                key={item.id} 
                className={`showcase-slide ${isActive ? "active" : ""}`}
              >
                <div className="showcase-card">
                  {/* Before & After 이미지 영역 */}
                  <div className="showcase-images-wrapper">
                    
                    {/* Before 영역 */}
                    <div className="showcase-img-half before">
                      {loadErrors[`${item.id}-before`] ? (
                        <div className="showcase-image-fallback">
                          <span>시공 전 이미지 준비 중</span>
                        </div>
                      ) : (
                        <img 
                          src={item.beforeImage} 
                          alt={item.beforeAlt} 
                          onError={() => handleImgError(`${item.id}-before`)} 
                          className="showcase-img"
                        />
                      )}
                      <span className="showcase-label before-label">시공 전</span>
                    </div>

                    {/* After 영역 */}
                    <div className="showcase-img-half after">
                      {loadErrors[`${item.id}-after`] ? (
                        <div className="showcase-image-fallback">
                          <span>시공 후 이미지 준비 중</span>
                        </div>
                      ) : (
                        <img 
                          src={item.afterImage} 
                          alt={item.afterAlt} 
                          onError={() => handleImgError(`${item.id}-after`)} 
                          className="showcase-img"
                        />
                      )}
                      <span className="showcase-label after-label">시공 후</span>
                    </div>

                  </div>

                  {/* 하단 정보 오버레이 (카드 내부 오버레이 스타일) */}
                  <div className="showcase-info-overlay">
                    <span className="showcase-category">
                      📍 {categoryName}
                    </span>
                    <h3 className="showcase-title">
                      {item.title}
                    </h3>
                    <div className="showcase-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="showcase-tag">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

          {/* 화살표 컨트롤 */}
          <button 
            className="slider-arrow arrow-left" 
            onClick={prevSlide}
            aria-label="이전 슬라이드"
          >
            &#8249;
          </button>
          <button 
            className="slider-arrow arrow-right" 
            onClick={nextSlide}
            aria-label="다음 슬라이드"
          >
            &#8250;
          </button>

          {/* Dot 인디케이터 */}
          <div className="slider-dots">
            {showcaseItems.map((_, idx) => (
              <button 
                key={idx} 
                className={`slider-dot ${idx === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`${idx + 1}번 슬라이드 이동`}
              />
            ))}
          </div>

        </div>

      </div>

      <style>{`
        .showcase-slider-container {
          position: relative;
          max-width: 960px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 28px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          background-color: var(--bg-white, #ffffff);
        }

        .showcase-slide {
          display: none;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .showcase-slide.active {
          display: block;
          opacity: 1;
        }

        .showcase-card {
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .showcase-images-wrapper {
          display: flex;
          flex-direction: row;
          height: 380px;
          width: 100%;
          background-color: #f1f5f9;
        }

        .showcase-img-half {
          flex: 1;
          position: relative;
          height: 100%;
          overflow: hidden;
        }

        .showcase-img-half.after {
          border-left: 2px solid #ffffff;
        }

        .showcase-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .showcase-image-fallback {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .showcase-label {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.3rem 0.75rem;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 800;
          color: #ffffff;
          z-index: 5;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
        }

        .before-label {
          background-color: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .after-label {
          background-color: var(--primary-color, #1b61fc);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        /* 하단 오버레이 정보 영역 */
        .showcase-info-overlay {
          padding: 1.75rem 2rem;
          text-align: left;
          background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, #ffffff 100%);
          border-top: 1px solid var(--border-color, #f1f5f9);
        }

        .showcase-category {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary-color, #1b61fc);
          margin-bottom: 0.5rem;
        }

        .showcase-title {
          font-size: 1.35rem;
          font-weight: 900;
          color: var(--text-dark, #0f172a);
          margin: 0 0 0.75rem 0;
          letter-spacing: -0.02em;
        }

        .showcase-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .showcase-tag {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted, #64748b);
          background-color: var(--bg-light, #f8fafc);
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          border: 1px solid rgba(0, 0, 0, 0.03);
        }

        /* 슬라이더 컨트롤 스타일 */
        .slider-arrow {
          position: absolute;
          top: 190px;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.05);
          color: #0f172a;
          font-size: 1.75rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .slider-arrow:hover {
          background-color: #ffffff;
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }

        .arrow-left {
          left: 1rem;
          padding-right: 2px;
        }

        .arrow-right {
          right: 1rem;
          padding-left: 2px;
        }

        .slider-dots {
          position: absolute;
          bottom: 112px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 10;
        }

        .slider-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .slider-dot.active {
          background-color: #ffffff;
          width: 20px;
          border-radius: 100px;
        }

        @media (max-width: 768px) {
          .case-h2 {
            font-size: 1.5rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .case-body-text {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
          }

          .showcase-slider-container {
            border-radius: 20px;
          }

          .showcase-images-wrapper {
            flex-direction: column;
            height: auto;
          }

          .showcase-img-half {
            height: 200px;
          }

          .showcase-img-half.after {
            border-left: none;
            border-top: 2px solid #ffffff;
          }

          .showcase-info-overlay {
            padding: 1.25rem 1.5rem;
          }

          .showcase-title {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
          }

          .slider-arrow {
            top: 200px;
            width: 36px;
            height: 36px;
            font-size: 1.35rem;
          }

          .slider-dots {
            bottom: 105px;
          }
        }
      `}</style>
    </section>
  );
};

export default CaseSection;
