import React from "react";
import { CONTACT_PHONE, KAKAO_URL, HAS_PHONE, HAS_KAKAO } from "../data/brand";
import type { KeywordConfig } from "../data/keywords";
import { sectionImages } from "../data/images";

interface CostSectionProps {
  keywordConfig: KeywordConfig;
}

export const CostSection: React.FC<CostSectionProps> = ({ keywordConfig }) => {
  const [imgError, setImgError] = React.useState(false);

  // 기본 문구 설정
  let label = "견적 안내";
  let title = "현장에 꼭 필요한\n공정만을 안내드립니다.";
  let body = "방수 공사 비용은 면적만으로 결정되지 않습니다.\n균열과 기존 도막 상태, 건물 높이, 로프 접근 조건과 바탕면 보수 범위를 함께 확인합니다.";

  if (keywordConfig.isActive) {
    title = `${keywordConfig.fullKeyword} 현장에 꼭 필요한\n공정만을 안내드립니다.`;
  }

  const renderWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const bgImage = imgError
    ? "linear-gradient(135deg, #050f23 0%, #0f172a 100%)"
    : `linear-gradient(90deg, rgba(5, 15, 35, 0.94) 0%, rgba(5, 15, 35, 0.82) 55%, rgba(5, 15, 35, 0.45) 100%), url("${sectionImages.pricingGuide}")`;

  const bgImageMobile = imgError
    ? "linear-gradient(135deg, #050f23 0%, #0f172a 100%)"
    : `linear-gradient(180deg, rgba(5, 15, 35, 0.96) 0%, rgba(5, 15, 35, 0.85) 100%), url("${sectionImages.pricingGuide}")`;

  return (
    <section className="cost-section" id="costs">
      <img
        src={sectionImages.pricingGuide}
        alt=""
        onError={() => setImgError(true)}
        style={{ display: "none" }}
      />
      <div className="container">
        <div className="cost-content-wrapper">
          <span className="cost-label">{label}</span>
          <h2 className="cost-title">{renderWithLineBreaks(title)}</h2>
          <p className="cost-desc">{renderWithLineBreaks(body)}</p>
          <div className="cost-sub">
            💡 사진으로 균열과 대략적인 작업 범위는 확인할 수 있지만, 벽체 내부의 물길이나 상부에서 이동한 누수는 현장 확인이 필요할 수 있습니다.
          </div>
          <div className="cost-buttons">
            <a href={HAS_PHONE ? `tel:${CONTACT_PHONE}` : "#contact"} className="btn btn-primary">
              📞 비슷한 증상 문의하기
            </a>
            <a 
              href={HAS_KAKAO ? KAKAO_URL : "#contact"} 
              target={HAS_KAKAO ? "_blank" : "_self"} 
              rel={HAS_KAKAO ? "noopener noreferrer" : undefined} 
              className="btn btn-outline"
            >
              💬 사진 보내고 견적받기
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .cost-section {
          background-image: ${bgImage};
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: all 0.3s ease;
          position: relative;
          min-height: 520px;
          display: flex;
          align-items: center;
        }
        
        .cost-content-wrapper {
          max-width: 680px;
          text-align: left;
          padding: 4.5rem 0;
          color: #ffffff;
        }

        .cost-label {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #60a5fa;
          background-color: rgba(59, 130, 246, 0.15);
          padding: 0.35rem 0.85rem;
          border-radius: 100px;
          margin-bottom: 1.25rem;
          border: 1px solid rgba(59, 130, 246, 0.25);
        }

        .cost-title {
          font-size: 2.25rem;
          font-weight: 900;
          line-height: 1.35;
          margin-bottom: 1.25rem;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .cost-desc {
          font-size: 1.08rem;
          font-weight: 500;
          line-height: 1.65;
          margin-bottom: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          word-break: keep-all;
        }

        .cost-sub {
          font-size: 0.9rem;
          font-weight: 500;
          line-height: 1.5;
          margin-bottom: 2.25rem;
          color: rgba(255, 255, 255, 0.65);
          border-left: 3px solid var(--primary-color);
          padding-left: 0.75rem;
          word-break: keep-all;
        }

        .cost-buttons {
          display: flex;
          gap: 1rem;
        }

        .cost-buttons .btn {
          padding: 0.85rem 1.75rem;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .cost-buttons .btn-primary {
          background-color: var(--primary-color);
          color: #ffffff;
        }

        .cost-buttons .btn-primary:hover {
          background-color: var(--primary-dark);
          transform: translateY(-2px);
        }

        .cost-buttons .btn-outline {
          background-color: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
        }

        .cost-buttons .btn-outline:hover {
          background-color: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .cost-section {
            background-image: ${bgImageMobile};
            min-height: auto !important;
            display: block;
          }
          
          .cost-content-wrapper {
            padding: 3.5rem 1rem;
            text-align: center;
          }

          .cost-title {
            font-size: 1.65rem;
            line-height: 1.35;
          }

          .cost-desc {
            font-size: 0.95rem;
            line-height: 1.55;
          }

          .cost-sub {
            font-size: 0.82rem;
            line-height: 1.45;
            border-left: none;
            padding-left: 0;
            margin-bottom: 1.75rem;
          }

          .cost-buttons {
            flex-direction: column;
            gap: 0.75rem;
          }

          .cost-buttons .btn {
            width: 100%;
            padding: 0.95rem 1.5rem;
          }
          .cost-buttons .btn-outline {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CostSection;
