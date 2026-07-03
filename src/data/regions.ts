export interface RegionGroup {
  groupTitle: string;
  type: "city" | "alias" | "metro" | "county";
  cityNames: string[];
  dongNames: string[];
  districtNames?: string[];
  subRegionNames?: string[];
  parent?: string;
  phase: number;
  dongExposeInHub: boolean;
  dongIncludeInSitemap: boolean;
  exposeInHub?: boolean;
  includeInSitemap?: boolean;
}

export interface RegionItem {
  name: string;
  aliases?: string[];
  type: "city" | "alias" | "legal-dong" | "metro" | "county";
  parent: string;
  phase: number;
}

export const primaryServiceAreas = ["부산", "경남", "울산"];

// 지역별 그룹 및 법정동(읍/면/리 배제) 상세 정의
export const regionGroups: RegionGroup[] = [
  {
    groupTitle: "김해",
    type: "city",
    cityNames: ["김해", "김해시"],
    dongNames: [
      "동상동", "서상동", "봉황동", "부원동", "내외동", "외동", "대성동", "구산동", 
      "삼계동", "풍유동", "명법동", "이동", "화목동", "흥동", "전하동", "강동", 
      "어방동", "삼정동", "삼방동", "안동", "지내동", "불암동", "유하동", "내덕동", 
      "부곡동", "무계동", "신문동", "삼문동", "대청동", "장유동", "응달동", "수가동", 
      "관동동", "율하동"
    ],
    phase: 2,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "창원",
    type: "city",
    cityNames: ["창원", "창원시"],
    dongNames: [
      // 성산구 & 의창구 & 진해구 법정동
      "용호동", "상남동", "신월동", "대방동", "중앙동", "팔용동", "소답동", "도계동", 
      "서상동", "봉곡동", "반지동", "가음동", "남양동", "사파동", "토월동", "외동", 
      "대원동", "명서동", "소계동", "사림동", "동상동", "도천동", "송학동", "대천동", 
      "평화동", "화천동", "수송동", "태백동", "경화동", "석동", "이동", "자은동", 
      "덕산동", "풍호동", "용원동"
    ],
    phase: 3,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "마산",
    type: "alias",
    cityNames: ["마산", "마산시"],
    parent: "창원",
    dongNames: [
      // 마산합포구 & 마산회원구 법정동
      "창동", "남성동", "신포동", "동성동", "서성동", "수성동", "우산동", "현동", 
      "월영동", "해운동", "가포동", "완월동", "장군동", "회원동", "석전동", "양덕동", 
      "합성동", "구암동", "봉암동"
    ],
    phase: 3,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "진주",
    type: "city",
    cityNames: ["진주", "진주시"],
    dongNames: [
      "망경동", "주약동", "강남동", "칠암동", "본성동", "동성동", "남성동", "인사동", 
      "대안동", "평안동", "중안동", "계동", "봉곡동", "상봉동", "봉래동", "수정동", 
      "장대동", "옥봉동", "상대동", "하대동", "초전동", "장재동", "하촌동", "신안동", 
      "평거동", "이현동", "유곡동", "판문동", "귀곡동", "가좌동", "호탄동", "동전동"
    ],
    phase: 4,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "거제",
    type: "city",
    cityNames: ["거제", "거제시"],
    dongNames: [
      "고현동", "장평동", "수월동", "양정동", "상동동", "문동동", "삼거동", "아주동", 
      "능포동", "마전동", "장승포동", "두모동", "아양동", "옥포동"
    ],
    phase: 4,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "양산",
    type: "city",
    cityNames: ["양산", "양산시"],
    dongNames: [
      "다방동", "남부동", "중부동", "북부동", "명곡동", "신기동", "북정동", "산막동", 
      "호계동", "유산동", "어곡동", "삼호동", "명동", "주남동", "소주동", "주진동", 
      "평산동", "덕계동"
    ],
    phase: 4,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "통영",
    type: "city",
    cityNames: ["통영", "통영시"],
    dongNames: [
      "도천동", "서호동", "동호동", "명정동", "항남동", "중앙동", "문화동", "태평동", 
      "동락동", "정량동", "북신동", "무전동", "미수동", "봉평동", "도남동", "인평동", 
      "평림동"
    ],
    phase: 5,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "사천",
    type: "city",
    cityNames: ["사천", "사천시"],
    dongNames: [
      "선구동", "동동", "서동", "금양동", "송포동", "신수동", "대방동", "실안동", 
      "마도동", "궁지동", "노룡동", "죽림동", "좌룡동", "신벽동", "동림동", "벌리동", 
      "동금동", "향촌동", "이홀동", "와룡동", "백천동", "신전동"
    ],
    phase: 5,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "밀양",
    type: "city",
    cityNames: ["밀양", "밀양시"],
    dongNames: [
      "내이동", "삼문동", "가곡동", "활성동", "남포동", "용평동", "교동", "내일동"
    ],
    phase: 5,
    dongExposeInHub: true,
    dongIncludeInSitemap: true
  },
  {
    groupTitle: "부산",
    type: "metro",
    cityNames: ["부산", "부산광역시"],
    districtNames: [
      "부산중구", "부산서구", "부산동구", "부산영도구", "부산진구", "부산동래구",
      "부산남구", "부산북구", "부산해운대구", "부산사하구", "부산금정구", "부산강서구",
      "부산연제구", "부산수영구", "부산사상구", "부산기장군"
    ],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "울산",
    type: "metro",
    cityNames: ["울산", "울산광역시"],
    districtNames: [
      "울산중구", "울산남구", "울산동구", "울산북구", "울산울주군"
    ],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "함안",
    type: "county",
    cityNames: ["함안", "함안군"],
    subRegionNames: ["가야읍", "칠원읍", "함안면", "군북면", "법수면", "대산면", "칠서면", "칠북면", "산인면", "여항면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "창녕",
    type: "county",
    cityNames: ["창녕", "창녕군"],
    subRegionNames: ["창녕읍", "남지읍", "고암면", "성산면", "대합면", "이방면", "유어면", "대지면", "계성면", "영산면", "장마면", "도천면", "길곡면", "부곡면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "의령",
    type: "county",
    cityNames: ["의령", "의령군"],
    subRegionNames: ["의령읍", "가례면", "칠곡면", "대의면", "화정면", "용덕면", "정곡면", "지정면", "낙서면", "부림면", "봉수면", "궁류면", "유곡면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "합천",
    type: "county",
    cityNames: ["합천", "합천군"],
    subRegionNames: ["합천읍", "봉산면", "묘산면", "가야면", "야로면", "율곡면", "초계면", "쌍책면", "덕곡면", "청덕면", "적중면", "대양면", "쌍백면", "삼가면", "가회면", "대병면", "용주면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "산청",
    type: "county",
    cityNames: ["산청", "산청군"],
    subRegionNames: ["산청읍", "차황면", "오부면", "생초면", "금서면", "삼장면", "시천면", "단성면", "신안면", "생비량면", "신등면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "함양",
    type: "county",
    cityNames: ["함양", "함양군"],
    subRegionNames: ["함양읍", "마천면", "휴천면", "유림면", "수동면", "지곡면", "안의면", "서하면", "서상면", "백전면", "병곡면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "거창",
    type: "county",
    cityNames: ["거창", "거창군"],
    subRegionNames: ["거창읍", "주상면", "웅양면", "고제면", "북상면", "위천면", "마리면", "남상면", "남하면", "신원면", "가조면", "가북면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "하동",
    type: "county",
    cityNames: ["하동", "하동군"],
    subRegionNames: ["하동읍", "화개면", "악양면", "적량면", "횡천면", "고전면", "금남면", "금성면", "진교면", "양보면", "북천면", "청암면", "옥종면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "남해",
    type: "county",
    cityNames: ["남해", "남해군"],
    subRegionNames: ["남해읍", "이동면", "상주면", "삼동면", "미조면", "남면", "서면", "고현면", "설천면", "창선면"],
    dongNames: [],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  }
];

// 기존 동적 URL 파라미터 유효성 매칭 및 하위 호환성을 위한 평탄화된 allRegions 배열 생성
const tempAllRegions: RegionItem[] = [];
const seenNames = new Set<string>();

regionGroups.forEach(group => {
  // 1. 시/별칭단위 추가
  group.cityNames.forEach(cityName => {
    if (!seenNames.has(cityName)) {
      seenNames.add(cityName);
      tempAllRegions.push({
        name: cityName,
        type: group.type,
        parent: group.groupTitle,
        phase: 1 // 모든 시/별칭명은 기본 phase 1
      });
    }
  });

  // 2. 법정동단위 추가
  if (group.dongNames) {
    group.dongNames.forEach(dongName => {
      if (!seenNames.has(dongName)) {
        seenNames.add(dongName);
        tempAllRegions.push({
          name: dongName,
          type: "legal-dong",
          parent: group.groupTitle,
          phase: group.phase
        });
      }
    });
  }

  // 3. 구/군 단위 추가 (metro)
  if (group.districtNames) {
    group.districtNames.forEach(districtName => {
      if (!seenNames.has(districtName)) {
        seenNames.add(districtName);
        tempAllRegions.push({
          name: districtName,
          type: "legal-dong",
          parent: group.groupTitle,
          phase: group.phase
        });
      }
    });
  }

  // 4. 읍/면 단위 추가 (county)
  if (group.subRegionNames) {
    group.subRegionNames.forEach(subName => {
      if (!seenNames.has(subName)) {
        seenNames.add(subName);
        tempAllRegions.push({
          name: subName,
          type: "legal-dong",
          parent: group.groupTitle,
          phase: group.phase
        });
      }
    });
  }
});

export const allRegions = tempAllRegions;
export const activeKeywordRegions = ["김해"]; // 호환성용
