export interface KeywordConfig {
  isActive: boolean;
  region: string;
  service: string;
  fullKeyword: string;
  h1: string;
  heroBody: string;
  ctaText: string;
  kakaoCtaText: string;
  topLabel: string;
  subCopy: string;
  seoSubLabel?: string;
  badges: string[];
  imageDesc: string;
  title: string;
  description: string;
}

// 8대 허용 작업명 목록
export const ALLOWED_SERVICES = [
  "외벽방수",
  "외벽발수",
  "옥상방수",
  "지붕방수",
  "외벽도색",
  "옥상누수",
  "외벽누수",
  "건물방수"
];

// 기본 메인 페이지용 문구 설정 (Fallback)
export const DEFAULT_KEYWORD_CONFIG: KeywordConfig = {
  isActive: false,
  region: "",
  service: "",
  fullKeyword: "",
  h1: "비 새는 외벽·옥상,\n원인부터 잡고 보수합니다",
  heroBody: "외벽 크랙, 옥상·지붕 누수, 도장 박리까지\n현장 상태를 먼저 확인하고 필요한 공정만 안내합니다.",
  ctaText: "전화로 바로 상담",
  kakaoCtaText: "사진 보내고 견적받기",
  topLabel: "부산·경남·울산 방수·도색 현장진단",
  subCopy: "사진 2~3장만 보내주시면 대략적인 보수 방향을 먼저 안내드립니다.",
  seoSubLabel: "외벽방수·옥상방수·외벽도색·건물방수 상담 가능",
  badges: [
    "외벽·옥상 누수 진단",
    "크랙·조인트 원인 점검",
    "방수·발수·도색 통합 시공",
    "부산·경남·울산 방문 상담"
  ],
  imageDesc: "외벽방수와 외벽도색 현장 작업 이미지",
  title: "부산·경남·울산 방수·도색 전문 | 레인가드",
  description: "부산·경남·울산 외벽방수, 외벽발수, 옥상방수, 지붕방수, 외벽도색, 옥상누수, 외벽누수, 건물방수 상담을 진행합니다."
};

// 8가지 서비스 키워드별 동적 문구 세트
const keywordTemplates: Record<string, Omit<KeywordConfig, "isActive" | "region" | "service" | "fullKeyword">> = {
  "외벽방수": {
    topLabel: "김해 외벽방수 현장진단",
    h1: "김해 외벽 크랙·빗물 유입,\n원인부터 확인하고 방수합니다",
    heroBody: "외벽 크랙, 조인트, 창호 주변 틈으로 빗물이 유입되는 현장은 표면만 덮는 방식보다 원인 지점 확인이 먼저입니다.",
    subCopy: "사진을 보내주시면 김해 외벽방수에 필요한 보수 범위와 시공 방향을 먼저 안내드립니다.",
    ctaText: "김해 외벽방수 상담",
    kakaoCtaText: "사진 보내고 견적받기",
    badges: [
      "외벽 크랙 점검",
      "조인트·창호 주변 확인",
      "빗물 유입 원인 진단",
      "김해 방문 상담"
    ],
    imageDesc: "김해 외벽방수 현장 작업 이미지",
    title: "김해 외벽방수 전문 시공 | 레인가드",
    description: "김해 외벽방수 상담. 외벽 크랙, 조인트, 창호 주변 틈으로 인한 빗물 유입을 확인하고 필요한 보수·방수 시공 방향을 안내합니다."
  },
  "외벽발수": {
    topLabel: "김해 외벽발수 현장진단",
    h1: "김해 외벽발수,\n빗물을 머금는 외벽부터 점검합니다",
    heroBody: "외벽 표면이 빗물을 쉽게 흡수하거나 오염, 백화, 수분 자국이 반복된다면 발수 시공을 검토할 수 있습니다.",
    subCopy: "누수 의심 현장은 외벽방수 또는 외벽누수 진단이 함께 필요할 수 있습니다.",
    ctaText: "김해 외벽발수 상담",
    kakaoCtaText: "사진 보내고 견적받기",
    badges: [
      "외벽 흡수 상태 확인",
      "발수제 시공 상담",
      "오염·수분 침투 점검",
      "김해 방문 상담"
    ],
    imageDesc: "김해 외벽발수 현장 작업 이미지",
    title: "김해 외벽발수 전문 시공 | 레인가드",
    description: "김해 외벽발수 전문 시공 안내. 외벽 표면이 빗물을 흡수하거나 오염, 백화, 수분 자국이 반복된다면 수분 흡수 저감을 위한 발수 시공을 검토해 보세요."
  },
  "옥상방수": {
    topLabel: "김해 옥상방수 현장진단",
    h1: "옥상 방수층이 들뜨거나 갈라졌다면,\n누수 전 점검이 먼저입니다",
    heroBody: "김해 옥상방수는 노후 방수층, 바닥 균열, 배수구 주변 손상으로 인한 누수를 예방하거나 보수하는 시공입니다.",
    subCopy: "옥상 바닥, 배수구, 파라펫 부위 사진을 보내주시면 필요한 방수 방향을 먼저 안내드립니다.",
    ctaText: "김해 옥상방수 상담",
    kakaoCtaText: "옥상 사진 견적받기",
    badges: [
      "방수층 노후 확인",
      "바닥 균열 점검",
      "배수구 주변 보강",
      "김해 방문 상담"
    ],
    imageDesc: "김해 옥상방수 현장 작업 이미지",
    title: "김해 옥상방수 전문 시공 | 레인가드",
    description: "김해 옥상방수 상담. 노후 방수층, 바닥 균열, 배수구 주변 손상 등 옥상 누수 원인을 확인하고 필요한 방수 시공을 안내합니다."
  },
  "지붕방수": {
    topLabel: "김해 지붕방수 현장진단",
    h1: "지붕 틈새로 새는 빗물,\n구조에 맞게 보강합니다",
    heroBody: "김해 지붕방수는 판넬지붕, 슬라브지붕, 기와지붕 등 지붕 구조와 접합부 상태에 따라 방수 보강 방식이 달라집니다.",
    subCopy: "지붕 형태와 누수 위치가 보이는 사진을 보내주시면 필요한 보강 방향을 안내드립니다.",
    ctaText: "김해 지붕방수 상담",
    kakaoCtaText: "지붕 누수 확인받기",
    badges: [
      "지붕 접합부 확인",
      "판넬·슬라브 점검",
      "누수 취약부 보강",
      "김해 방문 상담"
    ],
    imageDesc: "김해 지붕방수 현장 작업 이미지",
    title: "김해 지붕방수 전문 시공 | 레인가드",
    description: "김해 지붕방상 상담. 판넬지붕, 슬라브지붕, 기와지붕 등 지붕 구조와 접합부 상태를 확인하고 필요한 방수 보강 방향을 안내합니다."
  },
  "외벽도색": {
    topLabel: "김해 외벽도색 현장진단",
    h1: "벗겨진 외벽 도장,\n바탕면부터 정리해야 오래갑니다",
    heroBody: "김해 외벽도색은 외벽 오염, 색 바램, 도막 박리, 미세 균열을 확인한 뒤 바탕면 정리와 도장 공정을 진행해야 합니다.",
    subCopy: "도색 전 외벽 상태를 먼저 확인해야 들뜸과 박리 반복을 줄일 수 있습니다.",
    ctaText: "김해 외벽도색 상담",
    kakaoCtaText: "외벽 사진 견적받기",
    badges: [
      "도막 박리 점검",
      "바탕면 정리 상담",
      "외벽 색상·마감 상담",
      "김해 방문 상담"
    ],
    imageDesc: "김해 외벽도색 현장 작업 이미지",
    title: "김해 외벽도색 전문 시공 | 레인가드",
    description: "김해 외벽도색 상담. 외벽 오염, 색 바램, 도막 박리 상태를 확인하고 건물 외관 개선และ 표면 보호를 위한 도장 방향을 안내합니다."
  },
  "옥상누수": {
    topLabel: "김해 옥상누수 원인진단",
    h1: "비 올 때 새는 옥상,\n방수층부터 배수구까지 확인합니다",
    heroBody: "김해 옥상누수는 방수층 노후, 바닥 균열, 배수 불량, 파라펫 접합부 문제 등 원인을 먼저 확인해야 합니다.",
    subCopy: "누수 흔적과 옥상 상태 사진을 보내주시면 의심 지점과 보수 방향을 안내드립니다.",
    ctaText: "김해 옥상누수 상담",
    kakaoCtaText: "누수 원인 확인받기",
    badges: [
      "방수층 손상 확인",
      "배수구 주변 점검",
      "파라펫 접합부 진단",
      "김해 방문 상담"
    ],
    imageDesc: "김해 옥상누수 현장 작업 이미지",
    title: "김해 옥상누수 원인 진단 및 방수 시공 | 레인가드",
    description: "김해 옥상누수 상담. 방수층 노후, 바닥 균열, 배수 불량, 파라펫 접합부 등 누수 원인을 확인하고 필요한 보수 방향을 안내합니다."
  },
  "외벽누수": {
    topLabel: "김해 외벽누수 원인진단",
    h1: "벽면 물자국·곰팡이,\n외벽 유입 경로부터 확인합니다",
    heroBody: "김해 외벽누수는 외벽 크랙, 창틀 주변, 조인트 부위, 마감재 틈으로 빗물이 유입될 때 발생할 수 있습니다.",
    subCopy: "실내 물자국과 외벽 상태 사진을 함께 보내주시면 외벽누수 가능성을 먼저 확인할 수 있습니다.",
    ctaText: "김해 외벽누수 상담",
    kakaoCtaText: "유입 경로 확인받기",
    badges: [
      "외벽 크랙 확인",
      "창틀 주변 점검",
      "조인트 누수 진단",
      "김해 방문 상담"
    ],
    imageDesc: "김해 외벽누수 현장 작업 이미지",
    title: "김해 외벽누수 원인 진단 및 보수 시공 | 레인가드",
    description: "김해 외벽누수 상담. 외벽 크랙, 창틀 주변, 조인트 부위, 마감재 틈으로 인한 빗물 유입 가능성을 확인하고 필요한 보수 방향을 안내합니다."
  },
  "건물방수": {
    topLabel: "김해 건물방수 종합진단",
    h1: "외벽·옥상·지붕 누수,\n건물 상태를 종합적으로 확인합니다",
    heroBody: "김해 건물방수는 외벽, 옥상, 지붕 등 건물 전체의 누수 취약 부위를 점검하고 필요한 부위에 맞는 방수 공정을 적용하는 작업입니다.",
    subCopy: "누수 위치가 명확하지 않다면 건물 전체 취약 부위를 기준으로 점검 방향을 안내드립니다.",
    ctaText: "김해 건물방수 상담",
    kakaoCtaText: "건물 상태 진단받기",
    badges: [
      "외벽·옥상·지붕 점검",
      "누수 취약부 확인",
      "방수 공정 제안",
      "김해 방문 상담"
    ],
    imageDesc: "김해 건물방수 현장 작업 이미지",
    title: "김해 건물방수 전문 시공 | 레인가드",
    description: "김해 건물방수 상담. 외벽, 옥상, 지붕 등 건물 전체의 누수 취약 부위를 확인하고 현장 상태에 맞는 방수 시공 방향을 안내합니다."
  }
};

/**
 * URL query parameter 'k'를 파싱하여 키워드 매핑 데이터를 리턴하는 헬퍼 유틸리티
 */
export function parseQueryKeyword(searchString: string): KeywordConfig {
  if (!searchString) return DEFAULT_KEYWORD_CONFIG;

  try {
    const params = new URLSearchParams(searchString);
    const kVal = params.get("k");

    // k 값이 없거나 공란이면 fallback
    if (!kVal || kVal.trim() === "") return DEFAULT_KEYWORD_CONFIG;

    // '-' 기호 분할
    const parts = kVal.split("-");
    if (parts.length !== 2) return DEFAULT_KEYWORD_CONFIG;

    const [region, service] = parts;

    // 지역명이 '김해'가 아니거나, 허용된 8대 시공에 미포함 시 fallback
    if (region !== "김해" || !ALLOWED_SERVICES.includes(service)) {
      return DEFAULT_KEYWORD_CONFIG;
    }

    const template = keywordTemplates[service];
    if (!template) return DEFAULT_KEYWORD_CONFIG;

    return {
      isActive: true,
      region,
      service,
      fullKeyword: `${region} ${service}`,
      ...template
    } as KeywordConfig;
  } catch (e) {
    return DEFAULT_KEYWORD_CONFIG;
  }
}

export const SITEMAP_GIMHAE_SEO = {
  title: "김해 방수·도색 키워드 안내 | 레인가드",
  description: "김해 외벽방수, 외벽발수, 옥상방수, 지붕방수, 외벽도색, 옥상누수, 외벽누수, 건물방수 서비스 안내 링크를 확인할 수 있습니다."
};

