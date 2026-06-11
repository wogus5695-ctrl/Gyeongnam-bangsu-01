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
    shortDescription: "외벽 크랙, 조인트, 창틀 주변 틈새로 유입되는 빗물을 빈틈없이 막기 위해 특수 실런트와 크랙 보수제를 도포하는 전문 보수·방수 시공입니다.",
    intent: "외벽 균열 및 빗물 침투 경로 원천 차단"
  },
  {
    key: "exterior-repellent",
    name: "외벽발수",
    shortDescription: "외벽 표면이 빗물을 흡수하지 않고 미끄러지도록 투명 발수 코팅막을 도포하여, 건물의 수분 침투를 막고 백화 현상 및 표면 오염을 방지하는 가드 작업입니다.",
    intent: "자재 표면 수분 흡수 방지 및 외장재 내구성 수명 연장"
  },
  {
    key: "rooftop-waterproof",
    name: "옥상방수",
    shortDescription: "노후된 우레탄 방수층을 긁어내고 바닥 균열 보수 및 배수구 주변 손상 부위를 보강하여, 옥상 전체에 반영구적인 방수 도막을 형성함으로써 누수를 사전에 예방하고 보수합니다.",
    intent: "옥상 방수 도막 복원 및 장기적인 누수 차단"
  },
  {
    key: "roof-waterproof",
    name: "지붕방수",
    shortDescription: "판넬지붕, 슬라브지붕, 기와지붕 등 다양한 지붕 자재 구조에 적합한 보강 기법을 도입하여, 접합부의 틈새와 부식 부위 등 취약한 지점을 집중 보강 및 방수 코팅합니다.",
    intent: "지붕 구조별 접합부 균열 차단 및 자외선 보호"
  },
  {
    key: "exterior-painting",
    name: "외벽도색",
    shortDescription: "외벽의 오염 물질을 제거하고 퍼티로 미세 균열을 정리한 뒤 친환경 고내후성 페인트를 도포하여, 건물의 미관을 개선하고 외부 환경으로부터 표면 보호 성능을 복원하는 도장 작업입니다.",
    intent: "노후 건물 외관 리모델링 및 콘크리트 중성화 가드"
  },
  {
    key: "rooftop-leak",
    name: "옥상누수",
    shortDescription: "옥상 바닥 슬래브의 방수층 노후, 심각한 콘크리트 균열, 배수관 막힘 및 주변 파라펫 접합부 문제 등 옥상 부위에서 물이 새는 근본적인 원인을 먼저 명확하게 진단하는 서비스입니다.",
    intent: "옥상 미세 크랙 위치 정밀 진단 및 원인 추적"
  },
  {
    key: "exterior-leak",
    name: "외벽누수",
    shortDescription: "건물 외벽 콘크리트 균열, 창호 프레임 주변의 틈, 층간 조인트 불량, 외벽 대리석 등 마감재 줄눈 탈락으로 인해 빗물이 유입되는 결함 경로를 파악하여 추적하는 진단 서비스입니다.",
    intent: "외벽 유입 경로 진단 및 미세 습기 흐름 점검"
  },
  {
    key: "building-waterproof",
    name: "건물방수",
    shortDescription: "외벽, 옥상, 지붕, 지하 옹벽 등 건물 구조체 전반의 누수 취약 부위를 정밀 계측하여, 유기적으로 결합된 하자를 파악하고 필요한 종합 방수 공정을 체계적으로 설계·적용하는 통합 케어입니다.",
    intent: "건물 전체 종합 방수 하드웨어 개선 및 보증"
  }
];
