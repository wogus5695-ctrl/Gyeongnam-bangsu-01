export interface ServiceItem {
  key: string;
  name: string;
  shortDescription: string;
  intent: string;
}

export const services: ServiceItem[] = [
  {
    key: "exterior-waterproof",
    name: "외벽방수",
    shortDescription: "외벽 균열과 접합부 등 빗물이 들어올 가능성이 있는 구간을 확인하고 필요한 범위를 보수합니다.",
    intent: "외벽 균열 및 빗물 침투 경로 원천 차단"
  },
  {
    key: "exterior-repellent",
    name: "외벽발수",
    shortDescription: "외벽 표면의 빗물 흡수를 줄이는 마감 공법으로, 균열과 바탕 상태를 먼저 확인합니다.",
    intent: "자재 표면 수분 흡수 방지 및 외장재 내구성 수명 연장"
  },
  {
    key: "rooftop-waterproof",
    name: "옥상방수",
    shortDescription: "기존 방수층의 들뜸과 갈라짐, 바탕면과 배수 상태를 확인해 보수 범위를 결정합니다.",
    intent: "옥상 방수 도막 복원 및 장기적인 누수 차단"
  },
  {
    key: "roof-waterproof",
    name: "지붕방수",
    shortDescription: "판넬 이음부와 피스, 용마루 등 지붕 접합부의 누수 가능 구간을 점검합니다.",
    intent: "지붕 구조별 접합부 균열 차단 및 자외선 보호"
  },
  {
    key: "exterior-painting",
    name: "외벽도색",
    shortDescription: "들뜬 도막과 균열을 정리한 뒤 건물 외관을 마감하며, 도색 전 바탕 상태를 확인합니다.",
    intent: "노후 건물 외관 리모델링 및 콘크리트 중성화 가드"
  },
  {
    key: "rooftop-leak",
    name: "옥상누수",
    shortDescription: "배수구와 파라펫, 방수층 등 옥상에서 물이 들어올 수 있는 지점을 구분해 확인합니다.",
    intent: "옥상 미세 크랙 위치 정밀 진단 및 원인 추적"
  },
  {
    key: "exterior-leak",
    name: "외벽누수",
    shortDescription: "실내 물자국과 외벽의 실제 유입 가능 지점을 비교해 누수 원인을 확인합니다.",
    intent: "외벽 유입 경로 진단 및 미세 습기 흐름 점검"
  },
  {
    key: "building-waterproof",
    name: "건물방수",
    shortDescription: "외벽·옥상·지붕처럼 여러 구간이 관련된 건물의 방수 범위와 작업 순서를 검토합니다.",
    intent: "건물 전체 종합 방수 하드웨어 개선 및 보증"
  }
];
