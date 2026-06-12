import { allRegions } from "./regions";

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
  h1: "비 올 때 새는 건물,\n겉면만 막으면 반복될 수 있습니다",
  heroBody: "외벽 크랙, 옥상 방수층 들뜸, 도막 박리까지\n원인을 확인한 뒤 필요한 공정만 안내합니다.",
  ctaText: "전화로 바로 상담",
  kakaoCtaText: "사진 보내고 견적받기",
  topLabel: "부산·경남·울산 방수·도색 현장진단",
  subCopy: "사진 2~3장만 보내주시면 대략적인 보수 방향을 먼저 안내드립니다.",
  seoSubLabel: "외벽방수·옥상방수·외벽도색·건물방수 상담 가능",
  badges: [
    "원인 진단 후 시공",
    "사진 상담 가능"
  ],
  imageDesc: "외벽방수와 외벽도색 현장 작업 이미지",
  title: "부산·경남·울산 방수·도색 전문 | 레인가드",
  description: "부산·경남·울산 외벽방수, 옥상방수, 외벽도색, 건물방수 상담을 진행합니다. 외벽 크랙, 옥상 누수, 도막 박리 등 현장 상태를 확인하고 필요한 공정만 안내합니다."
};

// 8가지 서비스 키워드별 동적 문구 세트 (치환 템플릿)
const keywordTemplates: Record<string, Omit<KeywordConfig, "isActive" | "region" | "service" | "fullKeyword">> = {
  "외벽방수": {
    topLabel: "김해 외벽방수 현장진단",
    h1: "김해 외벽방수,\n원인부터 잡고 시공합니다",
    heroBody: "외벽 균열 및 창호 코킹 틈새 등\n정확한 빗물 유입 경로를 확인한 뒤 시공합니다.",
    subCopy: "사진을 보내주시면 김해 외벽방수 보수 범위와 시공 방향을 안내드립니다.",
    ctaText: "김해 외벽방수 상담",
    kakaoCtaText: "사진 보내고 견적받기",
    seoSubLabel: "김해 외벽방수·외벽도색·옥상방수 상담 가능",
    badges: [
      "원인 진단 후 시공",
      "사진 상담 가능"
    ],
    imageDesc: "김해 외벽방수 현장 작업 이미지",
    title: "김해 외벽방수 전문 시공 | 레인가드",
    description: "김해 외벽방수 상담. 외벽 크랙, 조인트, 창호 주변 틈으로 인한 빗물 유입을 확인하고 필요한 보수·방수 시공 방향을 안내합니다."
  },
  "외벽발수": {
    topLabel: "김해 외벽발수 현장진단",
    h1: "김해 외벽발수,\n표면 흡수부터 점검합니다",
    heroBody: "빗물을 머금는 외벽은 발수 처리 전\n표면 상태와 오염 정도를 먼저 확인해야 합니다.",
    subCopy: "누수 의심 현장은 외벽방수 또는 외벽누수 진단이 함께 필요할 수 있습니다.",
    ctaText: "김해 외벽발수 상담",
    kakaoCtaText: "사진 보내고 견적받기",
    seoSubLabel: "외벽발수·외벽방수·외벽누수 상담 가능",
    badges: [
      "원인 진단 후 시공",
      "사진 상담 가능"
    ],
    imageDesc: "김해 외벽발수 현장 작업 이미지",
    title: "김해 외벽발수 전문 시공 | 레인가드",
    description: "김해 외벽발수 상담. 외벽 표면의 수분 흡수와 오염 상태를 확인하고 발수제 적용이 필요한지 안내합니다."
  },
  "옥상방수": {
    topLabel: "김해 옥상방수 현장진단",
    h1: "김해 옥상방수,\n누수 원인부터 해결합니다",
    heroBody: "노후 방수층 들뜸, 바닥 균열, 배수구 주변 손상 등\n원인 부위를 명확히 파악하여 공정을 안내합니다.",
    subCopy: "옥상 바닥, 배수구, 파라펫 부위 사진을 보내주시면 필요한 방수 방향을 안내드립니다.",
    ctaText: "김해 옥상방수 상담",
    kakaoCtaText: "옥상 사진 견적받기",
    seoSubLabel: "김해 옥상방수·옥상누수·건물방수 상담 가능",
    badges: [
      "원인 진단 후 시공",
      "사진 상담 가능"
    ],
    imageDesc: "김해 옥상방수 현장 작업 이미지",
    title: "김해 옥상방수 전문 시공 | 레인가드",
    description: "김해 옥상방수 상담. 노후 방수층, 바닥 균열, 배수구 주변 손상 등 옥상 누수 원인을 확인하고 필요한 방수 시공을 안내합니다."
  },
  "지붕방수": {
    topLabel: "김해 지붕방수 현장진단",
    h1: "김해 지붕방수,\n접합부 틈새부터 보강합니다",
    heroBody: "판넬, 슬라브, 기와 등 지붕 구조와 결함에 맞춰\n누수 예방 및 방수 보강 계획을 제안합니다.",
    subCopy: "지붕 형태와 누수 위치가 보이는 사진을 보내주시면 필요한 보강 방향을 안내드립니다.",
    ctaText: "김해 지붕방수 상담",
    kakaoCtaText: "지붕 누수 확인받기",
    seoSubLabel: "김해 지붕방수·건물방수·옥상방수 상담 가능",
    badges: [
      "원인 진단 후 시공",
      "사진 상담 가능"
    ],
    imageDesc: "김해 지붕방수 현장 작업 이미지",
    title: "김해 지붕방수 전문 시공 | 레인가드",
    description: "김해 지붕방상 상담. 판넬지붕, 슬라브지붕, 기와지붕 등 지붕 구조와 접합부 상태를 확인하고 필요한 방수 보강 방향을 안내합니다."
  },
  "외벽도색": {
    topLabel: "김해 외벽도색 현장진단",
    h1: "김해 외벽도색,\n바탕면 정리부터 시작합니다",
    heroBody: "도막 박리와 균열 등 외벽 바탕면 상태를 점검하여\n들뜸 없이 오래가는 도장 솔루션을 제공합니다.",
    subCopy: "도색 전 외벽 상태를 먼저 확인해야 들뜸과 박리 반복을 줄일 수 있습니다.",
    ctaText: "김해 외벽도색 상담",
    kakaoCtaText: "외벽 사진 견적받기",
    seoSubLabel: "김해 외벽도색·외벽방수·외벽발수 상담 가능",
    badges: [
      "원인 진단 후 시공",
      "사진 상담 가능"
    ],
    imageDesc: "김해 외벽도색 현장 작업 이미지",
    title: "김해 외벽도색 전문 시공 | 레인가드",
    description: "김해 외벽도색 상담. 외벽 오염, 색 바램, 도막 박리 상태를 확인하고 건물 외관 개선 및 표면 보호를 위한 도장 방향을 안내합니다."
  },
  "옥상누수": {
    topLabel: "김해 옥상누수 원인진단",
    h1: "김해 옥상누수,\n근본적인 원인부터 찾습니다",
    heroBody: "방수층 균열, 우수관 및 배수 불량, 파라펫 접합부까지\n누수가 유발되는 모든 지점을 정밀 진단합니다.",
    subCopy: "누수 흔적과 옥상 상태 사진을 보내주시면 의심 지점과 보수 방향을 안내드립니다.",
    ctaText: "김해 옥상누수 상담",
    kakaoCtaText: "누수 원인 확인받기",
    seoSubLabel: "김해 옥상누수·옥상방수·건물방수 상담 가능",
    badges: [
      "원인 진단 후 시공",
      "사진 상담 가능"
    ],
    imageDesc: "김해 옥상누수 현장 작업 이미지",
    title: "김해 옥상누수 원인 진단 및 방수 시공 | 레인가드",
    description: "김해 옥상누수 상담. 방수층 노후, 바닥 균열, 배수 불량, 파라펫 접합부 등 누수 원인을 확인하고 필요한 보수 방향을 안내합니다."
  },
  "외벽누수": {
    topLabel: "김해 외벽누수 원인진단",
    h1: "김해 외벽누수,\n유입 경로를 먼저 밝혀냅니다",
    heroBody: "실내 곰팡이와 물자국의 원인이 되는\n외벽 균열 및 창틀 코킹 누수 지점을 진단합니다.",
    subCopy: "실내 물자국 and 외벽 상태 사진을 함께 보내주시면 외벽누수 가능성을 먼저 확인할 수 있습니다.",
    ctaText: "김해 외벽누수 상담",
    kakaoCtaText: "유입 경로 확인받기",
    seoSubLabel: "김해 외벽누수·외벽방수·외벽발수 상담 가능",
    badges: [
      "원인 진단 후 시공",
      "사진 상담 가능"
    ],
    imageDesc: "김해 외벽누수 현장 작업 이미지",
    title: "김해 외벽누수 원인 진단 및 보수 시공 | 레인가드",
    description: "김해 외벽누수 상담. 외벽 크랙, 창틀 주변, 조인트 부위, 마감재 틈으로 인한 빗물 유입 가능성을 확인하고 필요한 보수 방향을 안내합니다."
  },
  "건물방수": {
    topLabel: "김해 건물방수 종합진단",
    h1: "김해 건물방수,\n취약 부위별로 진단합니다",
    heroBody: "외벽, 옥상, 지붕 등 유기적으로 연결된\n건물 전체의 누수 요인을 종합적으로 분석합니다.",
    subCopy: "누수 위치가 명확하지 않다면 건물 전체 취약 부위를 기준으로 점검 방향을 안내드립니다.",
    ctaText: "김해 건물방수 상담",
    kakaoCtaText: "건물 상태 진단받기",
    seoSubLabel: "김해 건물방수·외벽방수·옥상방수 상담 가능",
    badges: [
      "원인 진단 후 시공",
      "사진 상담 가능"
    ],
    imageDesc: "김해 건물방수 현장 작업 이미지",
    title: "김해 건물방수 전문 시공 | 레인가드",
    description: "김해 건물방수 상담. 외벽, 옥상, 지붕 등 건물 전체의 누수 취약 부위를 확인하고 현장 상태에 맞는 방수 시공 방향을 안내합니다."
  }
};

// "김해" 문자열을 주어진 지역명(region)으로 동적 변환해 주는 헬퍼 함수
function replaceGimhae(text: string, region: string): string {
  if (!text) return text;
  return text.replace(/김해/g, region);
}

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

    // 전체 유효 지역 검증 (regions.ts에 정의된 전체 지역 풀 매칭)
    const foundRegion = allRegions.find(r => r.name === region);
    if (!foundRegion || !ALLOWED_SERVICES.includes(service)) {
      return DEFAULT_KEYWORD_CONFIG;
    }

    const template = keywordTemplates[service];
    if (!template) return DEFAULT_KEYWORD_CONFIG;

    // 템플릿의 모든 "김해" 문구를 동적으로 들어온 지역명으로 대체하여 반환
    return {
      isActive: true,
      region,
      service,
      fullKeyword: `${region} ${service}`,
      topLabel: replaceGimhae(template.topLabel, region),
      h1: replaceGimhae(template.h1, region),
      heroBody: replaceGimhae(template.heroBody, region),
      subCopy: replaceGimhae(template.subCopy, region),
      ctaText: replaceGimhae(template.ctaText, region),
      kakaoCtaText: replaceGimhae(template.kakaoCtaText, region),
      seoSubLabel: template.seoSubLabel ? replaceGimhae(template.seoSubLabel, region) : undefined,
      badges: template.badges.map(badge => replaceGimhae(badge, region)),
      imageDesc: replaceGimhae(template.imageDesc, region),
      title: replaceGimhae(template.title, region),
      description: replaceGimhae(template.description, region)
    } as KeywordConfig;
  } catch (e) {
    return DEFAULT_KEYWORD_CONFIG;
  }
}

export const SITEMAP_GIMHAE_SEO = {
  title: "경남 방수·도색 키워드 안내 | 레인가드",
  description: "경남 시단위, 마산 별칭 등 주요 방수·도색 서비스 키워드와 안내 링크를 확인할 수 있습니다."
};

// Sitemap용 전체 키워드 항목 정보 구조
export interface KeywordItem {
  label: string;
  k: string;
  href: string;
  region: string;
  service: string;
  type: "city" | "alias" | "legal-dong";
  parent: string;
  phase: number;
}

/**
 * 중복 없는 전체 조합 키워드 생성기
 */
export function generateKeywordItems(): KeywordItem[] {
  const items: KeywordItem[] = [];
  const seenLabels = new Set<string>();

  allRegions.forEach(region => {
    ALLOWED_SERVICES.forEach(service => {
      const label = `${region.name} ${service}`;
      
      // 중복 방지 안전장치
      if (seenLabels.has(label)) {
        return;
      }
      seenLabels.add(label);

      items.push({
        label,
        k: `${region.name}-${service}`,
        href: `/?k=${encodeURIComponent(`${region.name}-${service}`)}`,
        region: region.name,
        service,
        type: region.type,
        parent: region.parent,
        phase: region.phase
      });
    });
  });

  return items;
}
