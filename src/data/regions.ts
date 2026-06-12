export interface RegionItem {
  name: string;
  aliases?: string[];
  type: "city" | "alias" | "legal-dong";
  parent: string;
  phase: number;
}

export const primaryServiceAreas = ["부산", "경남", "울산"];

// 1. 공식 경남 시단위 (Phase 1)
export const cityRegions: RegionItem[] = [
  { name: "창원", aliases: ["창원시"], type: "city", parent: "창원", phase: 1 },
  { name: "진주", aliases: ["진주시"], type: "city", parent: "진주", phase: 1 },
  { name: "통영", aliases: ["통영시"], type: "city", parent: "통영", phase: 1 },
  { name: "사천", aliases: ["사천시"], type: "city", parent: "사천", phase: 1 },
  { name: "김해", aliases: ["김해시"], type: "city", parent: "김해", phase: 1 },
  { name: "밀양", aliases: ["밀양시"], type: "city", parent: "밀양", phase: 1 },
  { name: "거제", aliases: ["거제시"], type: "city", parent: "거제", phase: 1 },
  { name: "양산", aliases: ["양산시"], type: "city", parent: "양산", phase: 1 }
];

// 2. 검색 별칭 지역명 (Phase 1)
export const aliasRegions: RegionItem[] = [
  { name: "마산", aliases: ["마산시"], type: "alias", parent: "창원", phase: 1 }
];

// 3. 법정동 목록 구성 (읍/면/리 및 폐지동 제외)
const rawGimhaeDongs = [
  "동상동", "서상동", "봉황동", "부원동", "내동", "외동", "대성동", "구산동", 
  "삼계동", "풍유동", "명법동", "이동", "화목동", "흥동", "전하동", "강동", 
  "어방동", "삼정동", "삼방동", "안동", "지내동", "불암동", "유하동", "내덕동", 
  "부곡동", "무계동", "신문동", "삼문동", "대청동", "장유동", "응달동", "수가동", 
  "관동동", "율하동"
];

const rawChangwonDongs = [
  "용호동", "상남동", "신월동", "대방동", "중앙동", "팔용동", "소답동", "도계동", 
  "서상동", "봉곡동", "반지동", "가음동", "남양동", "사파동", "토월동", "외동", 
  "대원동", "명서동", "소계동", "사림동", "창동", "남성동", "신포동", "동성동", 
  "서성동", "수성동", "우산동", "현동", "월영동", "해운동", "가포동", "완월동", 
  "장군동", "회원동", "석전동", "양덕동", "합성동", "구암동", "봉암동", "동상동", 
  "도천동", "송학동", "대천동", "평화동", "화천동", "수송동", "태백동", "경화동", 
  "석동", "이동", "자은동", "덕산동", "풍호동", "용원동"
];

const rawJinjuDongs = [
  "망경동", "주약동", "강남동", "칠암동", "본성동", "동성동", "남성동", "인사동", 
  "대안동", "평안동", "중안동", "계동", "봉곡동", "상봉동", "봉래동", "수정동", 
  "장대동", "옥봉동", "상대동", "하대동", "초전동", "장재동", "하촌동", "신안동", 
  "평거동", "이현동", "유곡동", "판문동", "귀곡동", "가좌동", "호탄동", "동전동"
];

const rawTongyeongDongs = [
  "도천동", "서호동", "동호동", "명정동", "항남동", "중앙동", "문화동", "태평동", 
  "동락동", "정량동", "북신동", "무전동", "미수동", "봉평동", "도남동", "인평동", 
  "평림동"
];

const rawSacheonDongs = [
  "선구동", "동동", "서동", "금양동", "송포동", "신수동", "대방동", "실안동", 
  "마도동", "궁지동", "노룡동", "죽림동", "좌룡동", "신벽동", "동림동", "벌리동", 
  "동금동", "향촌동", "이홀동", "와룡동", "백천동", "신전동"
];

const rawMiryangDongs = [
  "내이동", "삼문동", "가곡동", "활성동", "남포동", "용평동", "교동", "내일동"
];

const rawGeojeDongs = [
  "고현동", "장평동", "수월동", "양정동", "상동동", "문동동", "삼거동", "아주동", 
  "능포동", "마전동", "장승포동", "두모동", "아양동", "옥포동"
];

const rawYangsanDongs = [
  "다방동", "남부동", "중부동", "북부동", "명곡동", "신기동", "북정동", "산막동", 
  "호계동", "유산동", "어곡동", "삼호동", "명동", "주남동", "소주동", "주진동", 
  "평산동", "덕계동"
];

// 법정동 지역명 매핑 (김해는 Phase 2, 나머지는 Phase 3)
export const legalDongRegions: RegionItem[] = [
  ...rawGimhaeDongs.map(name => ({ name, type: "legal-dong" as const, parent: "김해", phase: 2 })),
  ...rawChangwonDongs.map(name => ({ name, type: "legal-dong" as const, parent: "창원", phase: 3 })),
  ...rawJinjuDongs.map(name => ({ name, type: "legal-dong" as const, parent: "진주", phase: 3 })),
  ...rawTongyeongDongs.map(name => ({ name, type: "legal-dong" as const, parent: "통영", phase: 3 })),
  ...rawSacheonDongs.map(name => ({ name, type: "legal-dong" as const, parent: "사천", phase: 3 })),
  ...rawMiryangDongs.map(name => ({ name, type: "legal-dong" as const, parent: "밀양", phase: 3 })),
  ...rawGeojeDongs.map(name => ({ name, type: "legal-dong" as const, parent: "거제", phase: 3 })),
  ...rawYangsanDongs.map(name => ({ name, type: "legal-dong" as const, parent: "양산", phase: 3 }))
];

// 모든 유효 지역 결합 (중복 제거용 Map 사용)
const allRegionsMap = new Map<string, RegionItem>();

// 순서대로 주입하여 aliases도 개별 키워드로 확장 가능하게 함
const processRegion = (item: RegionItem) => {
  allRegionsMap.set(item.name, item);
  if (item.aliases) {
    item.aliases.forEach(alias => {
      allRegionsMap.set(alias, {
        ...item,
        name: alias,
        aliases: undefined // 별칭 자체는 별칭 배열을 또 가질 필요가 없음
      });
    });
  }
};

cityRegions.forEach(processRegion);
aliasRegions.forEach(processRegion);
legalDongRegions.forEach(processRegion);

export const allRegions = Array.from(allRegionsMap.values());
export const activeKeywordRegions = ["김해"]; // 호환성 유지용
