import React from "react";
import { CONTACT_PHONE, HAS_PHONE } from "../data/brand";
import type { KeywordConfig } from "../data/keywords";
import { sectionImages } from "../data/images";

interface CostSectionProps {
  keywordConfig: KeywordConfig;
}

export const CostSection: React.FC<CostSectionProps> = ({ keywordConfig }) => {
  const [imgError, setImgError] = React.useState(false);

  // 기본 문구 설정
  let label = "견적 안내";
  let title = "방수·도색 비용은\n현장 상태에 따라 달라집니다";
  let body = "시공 면적, 건물 높이, 균열 범위, 기존 방수층과 도막 상태에 따라 필요한 공정이 달라집니다.\n사진 상담 또는 현장 확인 후 필요한 범위만 안내드립니다.";
  let subLabel = "무조건 저렴한 견적보다, 하자 가능성을 줄이는 공정 기준으로 확인하는 것이 중요합니다.";

  if (keywordConfig.isActive) {
    const service = keywordConfig.service;
    if (service === "외벽방수") {
      title = "김해 외벽방수 비용은\n외벽 상태에 따라 달라집니다";
      body = "외벽 크랙 범위, 조인트 상태, 창호 주변 틈, 작업 높이에 따라 필요한 보수·방수 공정이 달라집니다.\n사진 상담 후 대략적인 범위를 먼저 안내드립니다.";
    } else if (service === "외벽발수") {
      title = "김해 외벽발수 비용은\n표면 상태에 따라 달라집니다";
      body = "외벽 재질, 수분 흡수 상태, 오염 정도, 발수제 적용 범위에 따라 시공 방식이 달라집니다.\n현장 상태를 확인한 뒤 필요한 범위를 안내드립니다.";
    } else if (service === "옥상방수") {
      title = "김해 옥상방수 비용은\n방수층 상태에 따라 달라집니다";
      body = "옥상 면적, 바닥 균열, 방수층 들뜸, 배수구 주변 손상 여부에 따라 부분 보수와 전체 방수 범위가 달라집니다.\n사진 또는 현장 확인 후 안내드립니다.";
    } else if (service === "지붕방수") {
      title = "김해 지붕방수 비용은\n지붕 구조에 따라 달라집니다";
      body = "판넬, 기와, 슬라브 등 지붕 구조와 접합부 상태, 작업 높이에 따라 필요한 보강 공정이 달라집니다.\n누수 위치 확인 후 견적 범위를 안내드립니다.";
    } else if (service === "외벽도색") {
      title = "김해 외벽도색 비용은\n바탕면 상태에 따라 달라집니다";
      body = "도막 박리, 오염, 미세 균열, 면 정리 범위와 도장 면적에 따라 필요한 공정이 달라집니다.\n도색 전 바탕면 상태를 먼저 확인합니다.";
    } else if (service === "옥상누수") {
      title = "김해 옥상누수 보수 비용은\n누수 원인에 따라 달라집니다";
      body = "방수층 노후, 배수구 주변 손상, 파라펫 접합부 문제 등 실제 유입 지점에 따라 보수 범위가 달라집니다.\n누수 흔적과 옥상 상태를 함께 확인합니다.";
    } else if (service === "외벽누수") {
      title = "김해 외벽누수 보수 비용은\n유입 경로에 따라 달라집니다";
      body = "외벽 크랙, 창호 주변, 조인트 부위, 마감재 틈 등 빗물 유입 경로에 따라 보수 방식이 달라집니다.\n실내 물자국과 외벽 상태를 함께 확인합니다.";
    } else if (service === "건물방수") {
      title = "김해 건물방수 비용은\n점검 범위에 따라 달라집니다";
      body = "외벽, 옥상, 지붕 등 건물 전체의 누수 취약 부위와 시공 범위에 따라 비용이 달라집니다.\n현장 상태를 확인한 뒤 필요한 공정만 안내드립니다.";
    }
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
          <p className="cost-sub">{subLabel}</p>
          <div className="cost-buttons">
            <a href={HAS_PHONE ? `tel:${CONTACT_PHONE}` : "#contact"} className="btn btn-primary">
              📞 무료 방문 견적 예약
            </a>
            <a href="#contact" className="btn btn-outline">
              📝 온라인 문의 신청
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
        }
      `}</style>
    </section>
  );
};

export default CostSection;
