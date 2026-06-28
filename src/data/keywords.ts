import { allRegions, regionGroups } from "./regions";
import type { RegionGroup } from "./regions";
export { regionGroups } from "./regions";

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
  subCopy: string; // 유지(하위 호환)
  seoSubLabel?: string;
  badges: string[];
  imageDesc: string;
  title: string;
  description: string;
  
  // 동적 검색 의도 그룹 및 추가 SEO 요소 (치환된 결과값)
  serviceGroup?: "waterproofing-construction" | "surface-protection" | "leak-diagnosis" | "";
  searchIntent?: string;
  intro?: string;
  diagnosticSection?: string;
  diagnostic?: string;
  faqQuestion?: string;
  faqAnswer?: string;
  serviceJsonLdType?: string;
  breadcrumbLabel?: string;
  relatedServices?: string[];
  leakChecklist?: string[];
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
  badges: ["원인 진단 후 시공", "사진 상담 가능"],
  imageDesc: "외벽방수와 외벽도색 현장 작업 이미지",
  title: "부산·경남·울산 방수·도색 전문 | 레인가드",
  description: "부산·경남·울산 외벽방수, 옥상방수, 외벽도색, 건물방수 상담을 진행합니다. 외벽 크랙, 옥상 누수, 도막 박리 등 현장 상태를 확인하고 필요한 공정만 안내합니다.",
  
  serviceGroup: "",
  searchIntent: "",
  intro: "외벽·옥상·지붕 상태를 함께 확인해\n필요한 보수 범위만 안내합니다.",
  diagnosticSection: "누수는 보이는 현상보다 실제 원인이 더 중요합니다. 대표 결함 유형을 먼저 확인한 뒤 현장 상태에 맞는 시공 방향을 안내합니다.",
  diagnostic: "누수는 보이는 현상보다 실제 원인이 더 중요합니다. 대표 결함 유형을 먼저 확인한 뒤 현장 상태에 맞는 시공 방향을 안내합니다.",
  faqQuestion: "",
  faqAnswer: "",
  serviceJsonLdType: "방수 및 도색 전문",
  breadcrumbLabel: "",
  relatedServices: []
};

// 8가지 서비스 키워드별 동적 문구 세트 (검색 의도 분기형)
export interface ServiceIntent {
  serviceName: string;
  serviceGroup: "waterproofing-construction" | "surface-protection" | "leak-diagnosis";
  searchIntent: string;
  titleTemplate: string;
  descriptionTemplate: string;
  h1Template: string;
  heroLabelTemplate: string;
  heroBodyTemplate: string;
  introTemplate: string;
  diagnosticTemplate: string;
  diagnosticSectionTemplate: string;
  faqQuestionTemplate: string;
  faqAnswerTemplate: string;
  serviceJsonLdTypeTemplate: string;
  breadcrumbLabelTemplate: string;
  relatedServices: string[];
  leakChecklist?: string[];
  ctaTextTemplate: string;
  kakaoCtaTextTemplate: string;
  seoSubLabelTemplate: string;
  badgesTemplate: string[];
  imageDescTemplate: string;
}

export const serviceIntentMap: Record<string, ServiceIntent> = {
  "외벽방수": {
    serviceName: "외벽방수",
    serviceGroup: "waterproofing-construction",
    searchIntent: "외벽 방수 시공 범위 및 맞춤 공정 안내",
    titleTemplate: "{region} 외벽방수 전문 시공 및 견적 | 레인가드",
    descriptionTemplate: "{region} 외벽방수 상담. 외벽 균열 보수, 창틀 코킹, 조인트 방수 등 시공 범위와 필요한 공정을 정확하게 진단하고 안내합니다.",
    h1Template: "{region} 외벽방수,\n원인부터 잡고 시공합니다",
    heroLabelTemplate: "{region} 외벽방수 전문시공",
    heroBodyTemplate: "외벽 균열 및 창호 코킹 틈새 등\n정확한 빗물 유입 경로를 확인한 뒤 시공합니다.",
    introTemplate: "{region} 외벽방수는 외벽 크랙, 조인트, 창틀 코킹의 노후화 상태를 확인하고 결함 부위에 알맞은 방수 공법을 적용해야 재발을 막을 수 있습니다.",
    diagnosticTemplate: "{region} 외벽방수는 단순 덧칠이 아닌 외벽 균열 상태와 노후도를 정밀 확인한 후 균열 보수와 창틀 코킹 등 필요한 공정을 처방합니다.",
    diagnosticSectionTemplate: "{region} 외벽방수는 단순 덧칠이 아닌 외벽 균열 상태와 노후도를 정밀 확인한 후 균열 보수와 창틀 코킹 등 필요한 공정을 처방합니다.",
    faqQuestionTemplate: "{region} 외벽방수는 어떤 경우에 꼭 해야 하나요?",
    faqAnswerTemplate: "{region} 외벽방수는 외벽 콘크리트 균열이나 창틀 실리콘 노후화로 인해 비가 올 때마다 실내로 물이 새거나 벽지가 젖어 들어올 때 즉시 시공해야 합니다.",
    serviceJsonLdTypeTemplate: "{region} 외벽방수 전문 시공",
    breadcrumbLabelTemplate: "{region} 외벽방수",
    relatedServices: ["외벽발수", "외벽누수", "건물방수"],
    ctaTextTemplate: "{region} 외벽방수 상담",
    kakaoCtaTextTemplate: "사진 보내고 견적받기",
    seoSubLabelTemplate: "{region} 외벽방수·외벽도색·옥상방수 상담 가능",
    badgesTemplate: ["원인 진단 후 시공", "사진 상담 가능"],
    imageDescTemplate: "{region} 외벽방수 현장 작업 이미지"
  },
  "외벽발수": {
    serviceName: "외벽발수",
    serviceGroup: "surface-protection",
    searchIntent: "외벽 표면 보호 및 흡수 차단 발수 공정 안내",
    titleTemplate: "{region} 외벽발수 적벽돌 및 콘크리트 코팅 | 레인가드",
    descriptionTemplate: "{region} 외벽발수 상담. 적벽돌, 콘크리트 외벽 표면의 빗물 흡수를 차단하여 습기 예방, 백화 방지 및 마감재 수명 연장을 약속드립니다.",
    h1Template: "{region} 외벽발수,\n표면 흡수부터 점검합니다",
    heroLabelTemplate: "{region} 외벽발수 표면보호",
    heroBodyTemplate: "빗물을 흡수하여 눅눅해지는 외벽은 발수제 도포 전\n외벽 표면 상태와 미세 크랙 여부를 꼼꼼히 점검해야 효과적입니다.",
    introTemplate: "{region} 외벽발수는 적벽돌이나 콘크리트 외벽에 발수막을 형성해 수분 침투를 막고 백화 현상 및 겨울철 미세 균열 확장을 억제하는 표면 보호 공정입니다.",
    diagnosticTemplate: "{region} 외벽발수 시공 전에는 표면의 오염도와 노후도, 미세한 실크랙 등을 확인하여 바탕 정리와 실리콘 메움 작업을 먼저 설계합니다.",
    diagnosticSectionTemplate: "{region} 외벽발수 시공 전에는 표면의 오염도와 노후도, 미세한 실크랙 등을 확인하여 바탕 정리와 실리콘 메움 작업을 먼저 설계합니다.",
    faqQuestionTemplate: "{region} 외벽발수 시공 효과는 얼마나 유지되나요?",
    faqAnswerTemplate: "{region} 외벽발수제는 기후 조건과 자재 상태에 따라 평균 2~4년 정도 지속됩니다. 주기적인 재발수 코팅을 통해 자외선 차단과 방수 성능을 유지할 수 있습니다.",
    serviceJsonLdTypeTemplate: "{region} 외벽발수 전문 시공",
    breadcrumbLabelTemplate: "{region} 외벽발수",
    relatedServices: ["외벽방수", "외벽도색", "외벽누수"],
    ctaTextTemplate: "{region} 외벽발수 상담",
    kakaoCtaTextTemplate: "사진 보내고 견적받기",
    seoSubLabelTemplate: "{region} 외벽발수·외벽방수·외벽누수 상담 가능",
    badgesTemplate: ["원인 진단 후 시공", "사진 상담 가능"],
    imageDescTemplate: "{region} 외벽발수 현장 작업 이미지"
  },
  "옥상방수": {
    serviceName: "옥상방수",
    serviceGroup: "waterproofing-construction",
    searchIntent: "옥상 방수 시공 범위 및 맞춤 공정 안내",
    titleTemplate: "{region} 옥상방수 우레탄 시공 및 보수 | 레인가드",
    descriptionTemplate: "{region} 옥상방수 상담. 노후 방수층 들뜸, 바닥 균열 상태를 파악하여 부분 보수 및 고내구성 우레탄 시공 공정을 안내합니다.",
    h1Template: "{region} 옥상방수,\n누수 원인부터 해결합니다",
    heroLabelTemplate: "{region} 옥상방수 전문시공",
    heroBodyTemplate: "노후 방수층 들뜸, 바닥 균열, 배수구 주변 손상 등\n원인 부위를 명확히 파악하여 공정을 안내합니다.",
    introTemplate: "{region} 옥상방수는 기존 우레탄 도막의 노후도와 슬래브 균열 상태를 정확히 진단하고 바탕 정리부터 체계적으로 시공해야 수명이 오래갑니다.",
    diagnosticTemplate: "{region} 옥상방수 진단 시에는 바닥 들뜸, 배수구 주변 누수 유발 부위, 콘크리트 크랙 상태를 확인하고 필요한 보수 공정을 제안합니다.",
    diagnosticSectionTemplate: "{region} 옥상방수 진단 시에는 바닥 들뜸, 배수구 주변 누수 유발 부위, 콘크리트 크랙 상태를 확인하고 필요한 보수 공정을 제안합니다.",
    faqQuestionTemplate: "{region} 옥상방수 재시공 주기는 어떻게 되나요?",
    faqAnswerTemplate: "{region} 옥상방수는 보통 3~5년 주기로 상도 코팅 관리가 필요하며, 우레탄 도막의 들뜸이나 균열이 심할 경우 전체 재시공 또는 부위별 보강 시공을 진행해야 합니다.",
    serviceJsonLdTypeTemplate: "{region} 옥상방수 전문 시공",
    breadcrumbLabelTemplate: "{region} 옥상방수",
    relatedServices: ["옥상누수", "지붕방수", "건물방수"],
    ctaTextTemplate: "{region} 옥상방수 상담",
    kakaoCtaTextTemplate: "옥상 사진 견적받기",
    seoSubLabelTemplate: "{region} 옥상방수·옥상누수·건물방수 상담 가능",
    badgesTemplate: ["원인 진단 후 시공", "사진 상담 가능"],
    imageDescTemplate: "{region} 옥상방수 현장 작업 이미지"
  },
  "지붕방수": {
    serviceName: "지붕방수",
    serviceGroup: "waterproofing-construction",
    searchIntent: "지붕 누수 방지 및 접합부 보강 공정 안내",
    titleTemplate: "{region} 지붕방수 판넬 및 기와 누수 보강 | 레인가드",
    descriptionTemplate: "{region} 지붕방수 상담. 조립식 판넬 지붕, 기와, 슬라브 지붕의 접합부 틈새와 피스 고정 부위 누수 예방 및 방수 보강 계획을 제공합니다.",
    h1Template: "{region} 지붕방수,\n접합부 틈새부터 보강합니다",
    heroLabelTemplate: "{region} 지붕방수 보강시공",
    heroBodyTemplate: "판넬, 슬라브, 기와 등 지붕 구조와 결함에 맞춰\n비바람에 취약한 부위를 보강하는 최적의 솔루션을 제공합니다.",
    introTemplate: "{region} 지붕방수는 판넬 이음새, 기와 파손, 지붕 용마루 접합부 등 바람과 온도 변화로 비가 새기 쉬운 취약부를 집중적으로 차단해야 합니다.",
    diagnosticTemplate: "{region} 지붕방수는 지붕 마감재의 변형 상태와 고정용 피스의 부식 여부, 접합 부위의 틈새를 면밀히 점검하여 보수 계획을 세웁니다.",
    diagnosticSectionTemplate: "{region} 지붕방수는 지붕 마감재의 변형 상태와 고정용 피스의 부식 여부, 접합 부위의 틈새를 면밀히 점검하여 보수 계획을 세웁니다.",
    faqQuestionTemplate: "{region} 지붕방수는 일반 옥상방수와 무엇이 다른가요?",
    faqAnswerTemplate: "{region} 지붕방수는 판넬이나 기와 등 자재 틈새와 경사면 구조에 맞춰 열팽창에 견디는 특수 방수 실런트 및 시트 보강재를 사용해 이중 차단합니다.",
    serviceJsonLdTypeTemplate: "{region} 지붕방수 전문 시공",
    breadcrumbLabelTemplate: "{region} 지붕방수",
    relatedServices: ["옥상방수", "건물방수", "외벽방수"],
    ctaTextTemplate: "{region} 지붕방수 상담",
    kakaoCtaTextTemplate: "지붕 누수 확인받기",
    seoSubLabelTemplate: "{region} 지붕방수·건물방수·옥상방수 상담 가능",
    badgesTemplate: ["원인 진단 후 시공", "사진 상담 가능"],
    imageDescTemplate: "{region} 지붕방수 현장 작업 이미지"
  },
  "외벽도색": {
    serviceName: "외벽도색",
    serviceGroup: "surface-protection",
    searchIntent: "외벽 바탕면 정리 및 마감 도장 공정 안내",
    titleTemplate: "{region} 외벽도색 크랙 보수 및 외장 페인트 | 레인가드",
    descriptionTemplate: "{region} 외벽도색 상담. 도막 박리, 페인트 노후, 콘크리트 중성화 예방을 위해 철저한 바탕면 정리와 균열 보수 후 도장 시공을 진행합니다.",
    h1Template: "{region} 외벽도색,\n바탕면 정리부터 시작합니다",
    heroLabelTemplate: "{region} 외벽도색 바탕정리",
    heroBodyTemplate: "도막 박리와 균열 등 외벽 표면을 다듬어\n오래가는 도막을 완성하며 건물 보호와 미관 개선 솔루션을 동시에 제공합니다.",
    introTemplate: "{region} 외벽도색은 페인트 칠을 하기 전에 들뜬 구도막을 제거하고 외벽 균열 부위를 실리콘 및 퍼티로 메우는 바탕 정리가 고품질 도장의 핵심입니다.",
    diagnosticTemplate: "{region} 외벽도색 시 콘크리트 박리, 철근 노출, 구도막 들뜸 상태를 정확히 진단해 벽면 보강과 도장 사양을 합리적으로 제안합니다.",
    diagnosticSectionTemplate: "{region} 외벽도색 시 콘크리트 박리, 철근 노출, 구도막 들뜸 상태를 정확히 진단해 벽면 보강과 도장 사양을 합리적으로 제안합니다.",
    faqQuestionTemplate: "{region} 외벽도색만으로 균열과 누수가 잡히나요?",
    faqAnswerTemplate: "{region} 단순 페인트 도장은 누수 예방 효과가 미미하므로, 시공 전 외벽 균열 보수 및 창틀 실리콘 코킹 등 방수 작업을 선행한 후 고급 외벽 전용 페인트로 도색해야 오래갑니다.",
    serviceJsonLdTypeTemplate: "{region} 외벽도색 전문 시공",
    breadcrumbLabelTemplate: "{region} 외벽도색",
    relatedServices: ["외벽방수", "외벽발수", "건물방수"],
    ctaTextTemplate: "{region} 외벽도색 상담",
    kakaoCtaTextTemplate: "외벽 사진 견적받기",
    seoSubLabelTemplate: "{region} 외벽도색·외벽방수·외벽발수 상담 가능",
    badgesTemplate: ["원인 진단 후 시공", "사진 상담 가능"],
    imageDescTemplate: "{region} 외벽도색 현장 작업 이미지"
  },
  "옥상누수": {
    serviceName: "옥상누수",
    serviceGroup: "leak-diagnosis",
    searchIntent: "옥상 누수 지점 정밀 진단 및 방수 진단",
    titleTemplate: "{region} 옥상누수 원인 진단 및 방수 보수 | 레인가드",
    descriptionTemplate: "{region} 옥상누수 상담. 천장 물자국, 옥상 방수층 노후, 바닥 균열, 배수구 주변 손상을 확인하고 보수 범위와 방수 공정을 안내합니다.",
    h1Template: "{region} 옥상누수,\n방수층과 배수구부터 확인합니다",
    heroLabelTemplate: "{region} 옥상누수 원인진단",
    heroBodyTemplate: "천장 물자국이나 비 온 뒤 누수가 반복된다면 옥상 방수층 노후, 바닥 균열, 배수구 주변 손상을 함께 점검해야 합니다.",
    introTemplate: "{region} 옥상누수는 방수층 손상뿐 아니라 배수 불량, 파라펫 접합부, 바닥 균열이 함께 원인이 될 수 있습니다. 누수 위치만 보고 시공 범위를 정하면 재누수 가능성이 높아질 수 있습니다.",
    diagnosticTemplate: "{region} 옥상누수 진단에서는 표면 노후 외에도 우수관 내부 균열, 난간 파라펫 접합 틈새 등 잘 보이지 않는 미세 취약 부위를 체계적으로 검사합니다.",
    diagnosticSectionTemplate: "{region} 옥상누수 진단에서는 표면 노후 외에도 우수관 내부 균열, 난간 파라펫 접합 틈새 등 잘 보이지 않는 미세 취약 부위를 체계적으로 검사합니다.",
    faqQuestionTemplate: "{region} 옥상누수는 어떤 원인으로 발생하나요?",
    faqAnswerTemplate: "옥상 방수층 노후, 바닥 균열, 배수구 주변 손상, 파라펫 접합부 문제가 주요 원인일 수 있습니다. 천장 물자국 위치와 옥상 상태를 함께 확인해야 합니다.",
    serviceJsonLdTypeTemplate: "{region} 옥상누수 원인 진단",
    breadcrumbLabelTemplate: "{region} 옥상누수",
    relatedServices: ["옥상방수", "지붕방수", "건물방수"],
    leakChecklist: ["천장 물자국", "옥상 방수층 들뜸", "바닥 균열", "배수구 주변 손상", "파라펫 접합부 틈"],
    ctaTextTemplate: "{region} 옥상누수 상담",
    kakaoCtaTextTemplate: "누수 원인 확인받기",
    seoSubLabelTemplate: "{region} 옥상누수·옥상방수·건물방수 상담 가능",
    badgesTemplate: ["원인 진단 후 시공", "사진 상담 가능"],
    imageDescTemplate: "{region} 옥상누수 현장 작업 이미지"
  },
  "외벽누수": {
    serviceName: "외벽누수",
    serviceGroup: "leak-diagnosis",
    searchIntent: "외벽 빗물 유입 경로 진단 및 보수 상담",
    titleTemplate: "{region} 외벽누수 원인 진단 및 보수 | 레인가드",
    descriptionTemplate: "{region} 외벽누수 상담. 실내 물자국, 외벽 크랙, 조인트, 창호 주변 틈을 함께 확인하고 필요한 보수·방수 공정을 안내합니다.",
    h1Template: "{region} 외벽누수,\n물자국보다 유입 경로부터 확인합니다",
    heroLabelTemplate: "{region} 외벽누수 현장진단",
    heroBodyTemplate: "비가 온 뒤 실내 벽면에 물자국이나 곰팡이가 생긴다면 외벽 크랙, 조인트, 창호 주변 틈을 함께 확인해야 합니다.",
    introTemplate: "{region} 외벽누수는 실내 물자국 위치와 실제 유입 지점이 다를 수 있습니다. 외벽 크랙, 조인트, 창호 주변 실리콘, 마감재 틈을 함께 확인해야 보수 범위를 줄일 수 있습니다.",
    diagnosticTemplate: "{region} 외벽누수 진단 시에는 열화상 카메라 검사 및 내외벽 상태 육안 검사를 병행하여 크랙과 결함의 깊이를 면밀히 파악합니다.",
    diagnosticSectionTemplate: "{region} 외벽누수 진단 시에는 열화상 카메라 검사 및 내외벽 상태 육안 검사를 병행하여 크랙과 결함의 깊이를 면밀히 파악합니다.",
    faqQuestionTemplate: "{region} 외벽누수는 어떻게 확인하나요?",
    faqAnswerTemplate: "실내 벽면 물자국, 창틀 주변 습기, 외벽 크랙, 조인트 상태를 함께 확인해야 합니다. 비가 온 뒤에만 물자국이 생긴다면 외벽 유입 가능성을 먼저 점검할 수 있습니다.",
    serviceJsonLdTypeTemplate: "{region} 외벽누수 원인 진단",
    breadcrumbLabelTemplate: "{region} 외벽누수",
    relatedServices: ["외벽방수", "외벽발수", "건물방수"],
    leakChecklist: ["실내 벽면 물자국", "창틀 주변 습기", "외벽 크랙", "조인트 틈", "비 올 때만 반복되는 누수"],
    ctaTextTemplate: "{region} 외벽누수 상담",
    kakaoCtaTextTemplate: "유입 경로 확인받기",
    seoSubLabelTemplate: "{region} 외벽누수·외벽방수·외벽발수 상담 가능",
    badgesTemplate: ["원인 진단 후 시공", "사진 상담 가능"],
    imageDescTemplate: "{region} 외벽누수 현장 작업 이미지"
  },
  "건물방수": {
    serviceName: "건물방수",
    serviceGroup: "waterproofing-construction",
    searchIntent: "건물 전체 종합 방수 설계 및 시공 안내",
    titleTemplate: "{region} 건물방수 외벽·옥상 종합 방수공사 | 레인가드",
    descriptionTemplate: "{region} 건물방수 종합 상담. 외벽 균열, 옥상 노후 방수층, 지붕 등 건물 전체의 유기적인 누수 요인을 정밀 진단하여 종합 방수 설계를 제안합니다.",
    h1Template: "{region} 건물방수,\n취약 부위별로 진단합니다",
    heroLabelTemplate: "{region} 건물방수 종합진단",
    heroBodyTemplate: "외벽, 옥상, 지붕 등 유기적으로 연결된\n건물 전체의 누수 요인을 종합 분석하여 최적의 방수 계획을 수립합니다.",
    introTemplate: "{region} 건물방수는 건물 노후화로 인해 외벽 크랙과 옥상 들뜸 등 다발성 누수가 생길 때 건물 전체의 취약점을 연계 분석하여 통합 시공합니다.",
    diagnosticTemplate: "{region} 건물방수 진단은 외벽 조인트, 옥상 우수관, 지붕 접합부 등 건물 전반의 방수 성능을 종합 점검하여 누수 재발을 방지합니다.",
    diagnosticSectionTemplate: "{region} 건물방수 진단은 외벽 조인트, 옥상 우수관, 지붕 접합부 등 건물 전반의 방수 성능을 종합 점검하여 누수 재발을 방지합니다.",
    faqQuestionTemplate: "{region} 건물방수 종합 공사는 견적이 많이 나오나요?",
    faqAnswerTemplate: "{region} 건물방수는 전체를 무조건 뜯어내기보다 정밀 진단을 통해 누수 유입이 가장 심한 외벽 크랙이나 옥상 취약부 위주로 선별 시공하여 비용 효율을 높입니다.",
    serviceJsonLdTypeTemplate: "{region} 건물방수 종합 시공",
    breadcrumbLabelTemplate: "{region} 건물방수",
    relatedServices: ["외벽방수", "옥상방수", "외벽도색"],
    ctaTextTemplate: "{region} 건물방수 상담",
    kakaoCtaTextTemplate: "건물 상태 진단받기",
    seoSubLabelTemplate: "{region} 건물방수·외벽방수·옥상방수 상담 가능",
    badgesTemplate: ["원인 진단 후 시공", "사진 상담 가능"],
    imageDescTemplate: "{region} 건물방수 현장 작업 이미지"
  }
};

// 동적 문자열 치환 헬퍼 (기존 "김해" 문자열 및 신규 "{region}" 플레이스홀더 모두 지원)
function replaceRegion(text: string, region: string): string {
  if (!text) return text;
  return text.replace(/\{region\}/g, region).replace(/김해/g, region);
}

// --- 중복 동명 충돌 감지 로직 ---
const dongNameCounts = new Map<string, string[]>(); // dongName -> parentCity[]

regionGroups.forEach((group: RegionGroup) => {
  group.dongNames.forEach((dong: string) => {
    if (!dongNameCounts.has(dong)) {
      dongNameCounts.set(dong, []);
    }
    dongNameCounts.get(dong)!.push(group.groupTitle);
  });
});

export const collisionDongs = new Set<string>();
export const collisionReport: Record<string, string[]> = {};

dongNameCounts.forEach((parents, dongName) => {
  if (parents.length >= 2) {
    collisionDongs.add(dongName);
    collisionReport[dongName] = parents;
  }
});

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

    // 중복 동명(충돌동)이 쿼리 파라미터로 들어오면 fallback 처리 (검색 봇 및 주소 혼선 차단)
    if (collisionDongs.has(region)) {
      return DEFAULT_KEYWORD_CONFIG;
    }

    const template = serviceIntentMap[service];
    if (!template) return DEFAULT_KEYWORD_CONFIG;

    // 모든 템플릿의 문구를 동적으로 들어온 지역명으로 대체하여 반환
    return {
      isActive: true,
      region,
      service,
      fullKeyword: `${region} ${service}`,
      
      // 검색 의도 그룹 및 SEO 신규 필드
      serviceGroup: template.serviceGroup,
      searchIntent: template.searchIntent,
      intro: replaceRegion(template.introTemplate, region),
      diagnosticSection: replaceRegion(template.diagnosticSectionTemplate, region),
      diagnostic: replaceRegion(template.diagnosticTemplate, region),
      faqQuestion: replaceRegion(template.faqQuestionTemplate, region),
      faqAnswer: replaceRegion(template.faqAnswerTemplate, region),
      serviceJsonLdType: replaceRegion(template.serviceJsonLdTypeTemplate, region),
      breadcrumbLabel: replaceRegion(template.breadcrumbLabelTemplate, region),
      relatedServices: template.relatedServices,
      leakChecklist: template.leakChecklist,

      // 기존 하위호환/렌더링용 필드
      topLabel: replaceRegion(template.heroLabelTemplate, region),
      h1: replaceRegion(template.h1Template, region),
      heroBody: replaceRegion(template.heroBodyTemplate, region),
      subCopy: replaceRegion(DEFAULT_KEYWORD_CONFIG.subCopy, region), // 하위호환
      ctaText: replaceRegion(template.ctaTextTemplate, region),
      kakaoCtaText: replaceRegion(template.kakaoCtaTextTemplate, region),
      seoSubLabel: template.seoSubLabelTemplate ? replaceRegion(template.seoSubLabelTemplate, region) : undefined,
      badges: template.badgesTemplate.map(badge => replaceRegion(badge, region)),
      imageDesc: replaceRegion(template.imageDescTemplate, region),
      title: replaceRegion(template.titleTemplate, region),
      description: replaceRegion(template.descriptionTemplate, region)
    } as KeywordConfig;
  } catch (e) {
    return DEFAULT_KEYWORD_CONFIG;
  }
}

export const SITEMAP_GIMHAE_SEO = {
  title: "경남 방수·도색 시공 서비스 안내 | 레인가드",
  description: "경남 지역 외벽방수, 외벽발수, 옥상방수, 지붕방수, 외벽도색, 옥상누수, 외벽누수, 건물방수 관련 시공 지역 및 서비스를 확인하실 수 있습니다."
};

// Sitemap용 전체 키워드 항목 정보 구조
export interface KeywordItem {
  label: string;
  displayText: string;
  k: string;
  href: string;
  parent: string;
  region: string;
  service: string;
  type: "city" | "alias";
  level: "city" | "dong";
  phase: number;
  exposeInHub: boolean;
  includeInSitemap: boolean;
}

/**
 * 중복 없는 전체 조합 키워드 생성기 (시/동단위 전체 생성 및 충돌동 오버라이딩 적용)
 */
export function generateKeywordItems(): KeywordItem[] {
  const items: KeywordItem[] = [];
  const seenUrls = new Set<string>();

  regionGroups.forEach((group: RegionGroup) => {
    // 1. 시단위 키워드 조합 생성 (창원, 창원시 등)
    group.cityNames.forEach((cityName: string) => {
      ALLOWED_SERVICES.forEach(service => {
        const kParam = `${cityName}-${service}`;
        const url = `/?k=${encodeURIComponent(kParam)}`;
        const label = `${cityName} ${service}`;

        if (seenUrls.has(url)) {
          return;
        }
        seenUrls.add(url);

        items.push({
          label,
          displayText: kParam,
          k: kParam,
          href: url,
          parent: group.groupTitle,
          region: cityName,
          service,
          type: group.type,
          level: "city",
          phase: 1, // 시단위는 무조건 phase 1 고정 노출 및 사이트맵 등록
          exposeInHub: true,
          includeInSitemap: true
        });
      });
    });

    // 2. 동단위 키워드 조합 생성 (삼계동 등)
    group.dongNames.forEach((dongName: string) => {
      ALLOWED_SERVICES.forEach(service => {
        const kParam = `${dongName}-${service}`;
        const url = `/?k=${encodeURIComponent(kParam)}`;
        const label = `${dongName} ${service}`;

        if (seenUrls.has(url)) {
          return;
        }
        seenUrls.add(url);

        // 중복 동명 충돌 여부 판단
        const isCollided = collisionDongs.has(dongName);

        items.push({
          label,
          displayText: kParam,
          k: kParam,
          href: url,
          parent: group.groupTitle,
          region: dongName,
          service,
          type: group.type,
          level: "dong",
          phase: group.phase,
          // 충돌 시 노출 및 사이트맵 제외 오버라이딩
          exposeInHub: isCollided ? false : group.dongExposeInHub,
          includeInSitemap: isCollided ? false : group.dongIncludeInSitemap
        });
      });
    });
  });

  return items;
}
