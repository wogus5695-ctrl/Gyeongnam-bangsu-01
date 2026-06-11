import React from "react";

interface PlaceholderImageProps {
  type: string;
  className?: string;
  style?: React.CSSProperties;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ type, className, style }) => {
  // 각 이미지 타입에 따른 그라데이션과 텍스트 매핑
  const getTheme = () => {
    switch (type) {
      case "hero":
        return {
          gradient: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)",
          icon: (
            <svg className="w-16 h-16 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12.75a1.5 1.5 0 011.5 1.5V21" />
            </svg>
          ),
          label: "메인 히어로 대표 이미지 (방수·도색 전경)"
        };
      case "service-exterior-waterproof":
      case "service-exterior-repellent":
      case "service-exterior-leak":
        return {
          gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          icon: (
            <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          ),
          label: "외벽 방수·발수 시공"
        };
      case "service-rooftop-waterproof":
      case "service-rooftop-leak":
      case "service-roof-waterproof":
      case "service-building-waterproof":
        return {
          gradient: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)",
          icon: (
            <svg className="w-12 h-12 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
            </svg>
          ),
          label: "옥상 및 지붕 방수 공정"
        };
      case "service-exterior-painting":
        return {
          gradient: "linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)",
          icon: (
            <svg className="w-12 h-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.37-9.37a2.25 2.25 0 113.182 3.182l-9.37 9.39a4.5 4.5 0 01-1.24.89l-2.062.83a.489.489 0 01-.596-.597l.83-2.062a4.5 4.5 0 01.89-1.24z" />
            </svg>
          ),
          label: "고내후성 외벽 도색 시공"
        };
      case "case-before":
        return {
          gradient: "linear-gradient(135deg, #451a03 0%, #78350f 100%)",
          icon: (
            <svg className="w-10 h-10 text-amber-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          ),
          label: "시공 전 (균열 및 누수 심각)"
        };
      case "case-after":
        return {
          gradient: "linear-gradient(135deg, #1e3a8a 0%, #10b981 100%)",
          icon: (
            <svg className="w-10 h-10 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          label: "시공 후 (방수·도색 완료)"
        };
      default:
        return {
          gradient: "linear-gradient(135deg, #374151 0%, #4b5563 100%)",
          icon: (
            <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          ),
          label: "대체 이미지 준비 중"
        };
    }
  };

  const theme = getTheme();

  return (
    <div
      className={`placeholder-image ${className || ""}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: theme.gradient,
        color: "#ffffff",
        minHeight: "200px",
        padding: "2rem",
        borderRadius: "16px",
        textAlign: "center",
        boxShadow: "inset 0 0 60px rgba(0, 0, 0, 0.2)",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        ...style
      }}
    >
      {/* 바둑판형 무늬 배경효과 */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 0)",
        backgroundSize: "24px 24px",
        opacity: 0.5,
        pointerEvents: "none"
      }} />
      
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        {theme.icon}
        <div>
          <div style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.25rem", letterSpacing: "-0.02em" }}>
            {theme.label}
          </div>
          <span style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.6)", fontWeight: 500 }}>
            className: {className || "None"} | type: {type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderImage;
