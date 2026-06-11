import { showcaseImages } from "./images";

export interface ShowcaseItem {
  id: string;
  group: string[];
  location: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  tags: string[];
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "exterior-waterproof",
    group: ["외벽방수", "외벽발수", "외벽누수"],
    location: "김해",
    title: "외벽 크랙 보수 및 빗물 유입 차단",
    beforeImage: showcaseImages.exteriorBefore,
    afterImage: showcaseImages.exteriorAfter,
    beforeAlt: "김해 외벽방수 시공 전 외벽 크랙 이미지",
    afterAlt: "김해 외벽방수 시공 후 보수 마감 이미지",
    tags: ["외벽방수", "외벽누수", "크랙보수"]
  },
  {
    id: "rooftop-waterproof",
    group: ["옥상방수", "옥상누수", "지붕방수", "건물방수"],
    location: "김해",
    title: "방수층 들뜸 보수 및 옥상 누수 예방",
    beforeImage: showcaseImages.rooftopBefore,
    afterImage: showcaseImages.rooftopAfter,
    beforeAlt: "김해 옥상방수 시공 전 방수층 손상 이미지",
    afterAlt: "김해 옥상방수 시공 후 방수 마감 이미지",
    tags: ["옥상방수", "옥상누수", "방수층보수"]
  },
  {
    id: "exterior-painting",
    group: ["외벽도색"],
    location: "김해",
    title: "도막 박리 정리 후 외벽도색 마감",
    beforeImage: showcaseImages.paintingBefore,
    afterImage: showcaseImages.paintingAfter,
    beforeAlt: "김해 외벽도색 시공 전 도막 박리 이미지",
    afterAlt: "김해 외벽도색 시공 후 도색 마감 이미지",
    tags: ["외벽도색", "도막박리", "바탕면정리"]
  },
  {
    id: "rooftop-cleaning",
    group: ["옥상방수", "옥상누수", "건물방수"],
    location: "김해",
    title: "옥상 바닥 고압 물청소 및 친환경 방수 마감",
    beforeImage: showcaseImages.cleaningBefore,
    afterImage: showcaseImages.cleaningAfter,
    beforeAlt: "김해 옥상방수 시공 전 바닥 청소 이미지",
    afterAlt: "김해 옥상방수 시공 후 초록색 방수 마감 이미지",
    tags: ["옥상물청소", "바닥면정리", "방수마감"]
  }
];
