import fs from 'fs';
import path from 'path';

const origin = "https://www.gnrainguard.co.kr";

const serviceKeywords = [
  "외벽방수",
  "외벽발수",
  "옥상방수",
  "지붕방수",
  "외벽도색",
  "옥상누수",
  "외벽누수",
  "건물방수"
];

// regions.ts와 100% 동일하게 복제된 데이터셋
const regionGroups = [
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
    parentRegion: "부산",
    cityNames: ["부산", "부산광역시"],
    districtNames: [
      "부산중구", "부산서구", "부산동구", "부산영도구", "부산진구", "부산동래구",
      "부산남구", "부산북구", "부산해운대구", "부산사하구", "부산금정구", "부산강서구",
      "부산연제구", "부산수영구", "부산사상구", "부산기장군"
    ],
    dongNames: [],
    subRegionNames: [
      { name: "부산중구영주동", displayName: "부산 중구 영주동", parent: "부산중구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산중구대청동", displayName: "부산 중구 대청동", parent: "부산중구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산중구보수동", displayName: "부산 중구 보수동", parent: "부산중구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산중구남포동", displayName: "부산 중구 남포동", parent: "부산중구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산중구광복동", displayName: "부산 중구 광복동", parent: "부산중구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산중구중앙동", displayName: "부산 중구 중앙동", parent: "부산중구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산중구부평동", displayName: "부산 중구 부평동", parent: "부산중구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산서구동대신동", displayName: "부산 서구 동대신동", parent: "부산서구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산서구서대신동", displayName: "부산 서구 서대신동", parent: "부산서구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산서구아미동", displayName: "부산 서구 아미동", parent: "부산서구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산서구초장동", displayName: "부산 서구 초장동", parent: "부산서구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산서구충무동", displayName: "부산 서구 충무동", parent: "부산서구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산서구남부민동", displayName: "부산 서구 남부민동", parent: "부산서구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산서구암남동", displayName: "부산 서구 암남동", parent: "부산서구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산동구초량동", displayName: "부산 동구 초량동", parent: "부산동구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산동구수정동", displayName: "부산 동구 수정동", parent: "부산동구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산동구좌천동", displayName: "부산 동구 좌천동", parent: "부산동구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산동구범일동", displayName: "부산 동구 범일동", parent: "부산동구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산영도구대교동", displayName: "부산 영도구 대교동", parent: "부산영도구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산영도구대평동", displayName: "부산 영도구 대평동", parent: "부산영도구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산영도구남항동", displayName: "부산 영도구 남항동", parent: "부산영도구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산영도구영선동", displayName: "부산 영도구 영선동", parent: "부산영도구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산영도구신선동", displayName: "부산 영도구 신선동", parent: "부산영도구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산영도구봉래동", displayName: "부산 영도구 봉래동", parent: "부산영도구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산영도구청학동", displayName: "부산 영도구 청학동", parent: "부산영도구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산영도구동삼동", displayName: "부산 영도구 동삼동", parent: "부산영도구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산진구양정동", displayName: "부산 진구 양정동", parent: "부산진구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산진구전포동", displayName: "부산 진구 전포동", parent: "부산진구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산진구부전동", displayName: "부산 진구 부전동", parent: "부산진구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산진구범천동", displayName: "부산 진구 범천동", parent: "부산진구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산진구개금동", displayName: "부산 진구 개금동", parent: "부산진구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산진구가야동", displayName: "부산 진구 가야동", parent: "부산진구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산진구당감동", displayName: "부산 진구 당감동", parent: "부산진구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산진구부암동", displayName: "부산 진구 부암동", parent: "부산진구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산진구초읍동", displayName: "부산 진구 초읍동", parent: "부산진구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산진구연지동", displayName: "부산 진구 연지동", parent: "부산진구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산동래구온천동", displayName: "부산 동래구 온천동", parent: "부산동래구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산동래구사직동", displayName: "부산 동래구 사직동", parent: "부산동래구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산동래구안락동", displayName: "부산 동래구 안락동", parent: "부산동래구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산동래구명장동", displayName: "부산 동래구 명장동", parent: "부산동래구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산동래구명륜동", displayName: "부산 동래구 명륜동", parent: "부산동래구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산남구대연동", displayName: "부산 남구 대연동", parent: "부산남구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산남구용호동", displayName: "부산 남구 용호동", parent: "부산남구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산남구감만동", displayName: "부산 남구 감만동", parent: "부산남구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산남구우암동", displayName: "부산 남구 우암동", parent: "부산남구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산남구문현동", displayName: "부산 남구 문현동", parent: "부산남구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산북구금곡동", displayName: "부산 북구 금곡동", parent: "부산북구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산북구화명동", displayName: "부산 북구 화명동", parent: "부산북구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산북구만덕동", displayName: "부산 북구 만덕동", parent: "부산북구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산북구덕천동", displayName: "부산 북구 덕천동", parent: "부산북구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산북구구포동", displayName: "부산 북구 구포동", parent: "부산북구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산해운대구우동", displayName: "부산 해운대구 우동", parent: "부산해운대구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: true },
      { name: "부산해운대구좌동", displayName: "부산 해운대구 좌동", parent: "부산해운대구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산해운대구중동", displayName: "부산 해운대구 중동", parent: "부산해운대구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산해운대구송정동", displayName: "부산 해운대구 송정동", parent: "부산해운대구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산해운대구반여동", displayName: "부산 해운대구 반여동", parent: "부산해운대구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산해운대구반송동", displayName: "부산 해운대구 반송동", parent: "부산해운대구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산해운대구재송동", displayName: "부산 해운대구 재송동", parent: "부산해운대구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산사하구괴정동", displayName: "부산 사하구 괴정동", parent: "부산사하구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산사하구당리동", displayName: "부산 사하구 당리동", parent: "부산사하구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산사하구하단동", displayName: "부산 사하구 하단동", parent: "부산사하구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산사하구신평동", displayName: "부산 사하구 신평동", parent: "부산사하구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산사하구장림동", displayName: "부산 사하구 장림동", parent: "부산사하구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산사하구다대동", displayName: "부산 사하구 다대동", parent: "부산사하구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산사하구감천동", displayName: "부산 사하구 감천동", parent: "부산사하구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산금정구서동", displayName: "부산 금정구 서동", parent: "부산금정구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산금정구부곡동", displayName: "부산 금정구 부곡동", parent: "부산금정구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산금정구장전동", displayName: "부산 금정구 장전동", parent: "부산금정구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산금정구남산동", displayName: "부산 금정구 남산동", parent: "부산금정구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산금정구구서동", displayName: "부산 금정구 구서동", parent: "부산금정구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산강서구대저동", displayName: "부산 강서구 대저동", parent: "부산강서구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산강서구명지동", displayName: "부산 강서구 명지동", parent: "부산강서구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산강서구녹산동", displayName: "부산 강서구 녹산동", parent: "부산강서구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산연제구거제동", displayName: "부산 연제구 거제동", parent: "부산연제구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산연제구연산동", displayName: "부산 연제구 연산동", parent: "부산연제구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산수영구광안동", displayName: "부산 수영구 광안동", parent: "부산수영구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: true },
      { name: "부산수영구망미동", displayName: "부산 수영구 망미동", parent: "부산수영구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산수영구수영동", displayName: "부산 수영구 수영동", parent: "부산수영구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산수영구민락동", displayName: "부산 수영구 민락동", parent: "부산수영구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산수영구남천동", displayName: "부산 수영구 남천동", parent: "부산수영구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산사상구모라동", displayName: "부산 사상구 모라동", parent: "부산사상구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산사상구덕포동", displayName: "부산 사상구 덕포동", parent: "부산사상구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산사상구괘법동", displayName: "부산 사상구 괘법동", parent: "부산사상구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산사상구주례동", displayName: "부산 사상구 주례동", parent: "부산사상구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산사상구학장동", displayName: "부산 사상구 학장동", parent: "부산사상구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산사상구엄궁동", displayName: "부산 사상구 엄궁동", parent: "부산사상구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산기장군기장읍", displayName: "부산 기장군 기장읍", parent: "부산기장군", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산기장군장안%EC%9D%8D", name: "부산기장군장안읍", displayName: "부산 기장군 장안읍", parent: "부산기장군", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산기장군정관읍", displayName: "부산 기장군 정관읍", parent: "부산기장군", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산기장군일광읍", displayName: "부산 기장군 일광읍", parent: "부산기장군", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "부산기장군철마면", displayName: "부산 기장군 철마면", parent: "부산기장군", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false }
    ],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "울산",
    type: "metro",
    parentRegion: "울산",
    cityNames: ["울산", "울산광역시"],
    districtNames: [
      "울산중구", "울산남구", "울산동구", "울산북구", "울산울주군"
    ],
    dongNames: [],
    subRegionNames: [
      { name: "울산중구학성동", displayName: "울산 중구 학성동", parent: "울산중구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산중구반구동", displayName: "울산 중구 반구동", parent: "울산중구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산중구복산동", displayName: "울산 중구 복산동", parent: "울산중구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산중구우정동", displayName: "울산 중구 우정동", parent: "울산중구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산중구태화동", displayName: "울산 중구 태화동", parent: "울산중구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산중구다운동", displayName: "울산 중구 다운동", parent: "울산중구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산중구병영동", displayName: "울산 중구 병영동", parent: "울산중구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산남구삼산동", displayName: "울산 남구 삼산동", parent: "울산남구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: true },
      { name: "울산남구신정동", displayName: "울산 남구 신정동", parent: "울산남구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산남구달동", displayName: "울산 남구 달동", parent: "울산남구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산남구야음동", displayName: "울산 남구 야음동", parent: "울산남구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산남구선암동", displayName: "울산 남구 선암동", parent: "울산남구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산남구옥동", displayName: "울산 남구 옥동", parent: "울산남구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산남구무거동", displayName: "울산 남구 무거동", parent: "울산남구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산동구방어동", displayName: "울산 동구 방어동", parent: "울산동구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산동구일산동", displayName: "울산 동구 일산동", parent: "울산동구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산동구화정동", displayName: "울산 동구 화정동", parent: "울산동구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산동구전하동", displayName: "울산 동구 전하동", parent: "울산동구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산동구서부동", displayName: "울산 동구 서부동", parent: "울산동구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산북구농소동", displayName: "울산 북구 농소동", parent: "울산북구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산북구효문동", displayName: "울산 북구 효문동", parent: "울산북구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산북구송정동", displayName: "울산 북구 송정동", parent: "울산북구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산북구양정동", displayName: "울산 북구 양정동", parent: "울산북구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산북구염포동", displayName: "울산 북구 염포동", parent: "울산북구", level: "dong", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산울주군언양읍", displayName: "울산 울주군 언양읍", parent: "울산울주군", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: true },
      { name: "울산울주군범서읍", displayName: "울산 울주군 범서읍", parent: "울산울주군", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산울주군온산읍", displayName: "울산 울주군 온산읍", parent: "울산울주군", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산울주군온양읍", displayName: "울산 울주군 온양읍", parent: "울산울주군", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산울주군청량읍", displayName: "울산 울주군 청량 읍", parent: "울산울주군", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산울주군서생면", displayName: "울산 울주군 서생면", parent: "울산울주군", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "울산울주군웅촌면", displayName: "울산 울주군 웅촌면", parent: "울산울주군", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false }
    ],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "함안",
    type: "county",
    parentRegion: "함안",
    cityNames: ["함안", "함안군"],
    dongNames: [],
    subRegionNames: [
      { name: "함안가야읍", displayName: "함안 가야읍", parent: "함안", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: true },
      { name: "함안칠원읍", displayName: "함안 칠원읍", parent: "함안", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함안함안면", displayName: "함안 함안면", parent: "함안", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함안군북면", displayName: "함안 군북면", parent: "함안", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함안법수면", displayName: "함안 법수면", parent: "함안", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함안대산면", displayName: "함안 대산면", parent: "함안", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함안칠서면", displayName: "함안 칠서면", parent: "함안", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함안칠북면", displayName: "함안 칠북면", parent: "함안", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함안산인면", displayName: "함안 산인면", parent: "함안", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함안여항면", displayName: "함안 여항면", parent: "함안", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false }
    ],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "창녕",
    type: "county",
    parentRegion: "창녕",
    cityNames: ["창녕", "창녕군"],
    dongNames: [],
    subRegionNames: [
      { name: "창녕창녕읍", displayName: "창녕 창녕읍", parent: "창녕", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "창녕남지읍", displayName: "창녕 남지 읍", parent: "창녕", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "창녕고암면", displayName: "창녕 고암면", parent: "창녕", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "창녕성산면", displayName: "창녕 성산면", parent: "창녕", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "창녕대합면", displayName: "창녕 대합면", parent: "창녕", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "창녕이방면", displayName: "창녕 이방면", parent: "창녕", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "창녕유어면", displayName: "창녕 유어면", parent: "창녕", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "창녕대지면", displayName: "창녕 대지면", parent: "창녕", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "창녕계성면", displayName: "창녕 계성면", parent: "창녕", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "창녕영산면", displayName: "창녕 영산면", parent: "창녕", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "창녕장마면", displayName: "창녕 장마면", parent: "창녕", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "창녕도천면", displayName: "창녕 도천면", parent: "창녕", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "창녕길곡면", displayName: "창녕 길곡면", parent: "창녕", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "창녕부곡면", displayName: "창녕 부곡면", parent: "창녕", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false }
    ],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "의령",
    type: "county",
    parentRegion: "의령",
    cityNames: ["의령", "의령군"],
    dongNames: [],
    subRegionNames: [
      { name: "의령의령읍", displayName: "의령 의령읍", parent: "의령", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "의령가례면", displayName: "의령 가례면", parent: "의령", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "의령칠곡면", displayName: "의령 칠곡면", parent: "의령", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "의령대의면", displayName: "의령 대의면", parent: "의령", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "의령화정면", displayName: "의령 화정면", parent: "의령", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "의령용덕면", displayName: "의령 용덕면", parent: "의령", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "의령정곡면", displayName: "의령 정곡면", parent: "의령", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "의령지정면", displayName: "의령 지정면", parent: "의령", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "의령낙서면", displayName: "의령 낙서면", parent: "의령", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "의령부림면", displayName: "의령 부림면", parent: "의령", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "의령봉수면", displayName: "의령 봉수면", parent: "의령", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "의령궁류면", displayName: "의령 궁류면", parent: "의령", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "의령유곡면", displayName: "의령 유곡면", parent: "의령", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false }
    ],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "합천",
    type: "county",
    parentRegion: "합천",
    cityNames: ["합천", "합천군"],
    dongNames: [],
    subRegionNames: [
      { name: "합천합천읍", displayName: "합천 합천읍", parent: "합천", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "합천봉산면", displayName: "합천 봉산면", parent: "합천", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "합천묘산면", displayName: "합천 묘산면", parent: "합천", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "합천가야면", displayName: "합천 가야면", parent: "합천", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "합천야로면", displayName: "합천 야로면", parent: "합천", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "합천율곡면", displayName: "합천 율곡면", parent: "합천", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "합천초계면", displayName: "합천 초계면", parent: "합천", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "합천쌍책면", displayName: "합천 쌍책면", parent: "합천", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "합천덕곡면", displayName: "합천 덕곡면", parent: "합천", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "합천청덕면", displayName: "합천 청덕면", parent: "합천", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "합천적중면", displayName: "합천 적중면", parent: "합천", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "합천대양면", displayName: "합천 대양면", parent: "합천", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "합천쌍백면", displayName: "합천 쌍백면", parent: "합천", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "합천삼가면", displayName: "합천 삼가면", parent: "합천", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "합천가회면", displayName: "합천 가회면", parent: "합천", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "합천대병면", displayName: "합천 대병면", parent: "합천", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "합천용주면", displayName: "합천 용주면", parent: "합천", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false }
    ],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "산청",
    type: "county",
    parentRegion: "산청",
    cityNames: ["산청", "산청군"],
    dongNames: [],
    subRegionNames: [
      { name: "산청산청읍", displayName: "산청 산청읍", parent: "산청", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "산청차황면", displayName: "산청 차황면", parent: "산청", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "산청오부면", displayName: "산청 오부면", parent: "산청", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "산청생초면", displayName: "산청 생초면", parent: "산청", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "산청금서면", displayName: "산청 금서면", parent: "산청", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "산청삼장면", displayName: "산청 삼장면", parent: "산청", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "산청시천면", displayName: "산청 시천면", parent: "산청", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "산청단성면", displayName: "산청 단성면", parent: "산청", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "산청신안면", displayName: "산청 신안면", parent: "산청", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "산청생비량면", displayName: "산청 생비량면", parent: "산청", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "산청신등면", displayName: "산청 신등면", parent: "산청", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false }
    ],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "함양",
    type: "county",
    parentRegion: "함양",
    cityNames: ["함양", "함양군"],
    dongNames: [],
    subRegionNames: [
      { name: "함양함양읍", displayName: "함양 함양읍", parent: "함양", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함양마천면", displayName: "함양 마천면", parent: "함양", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함양휴천면", displayName: "함양 휴천면", parent: "함양", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함양유림면", displayName: "함양 유림면", parent: "함양", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함양수동면", displayName: "함양 수동면", parent: "함양", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함양지곡면", displayName: "함양 지곡면", parent: "함양", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함양안의면", displayName: "함양 안의면", parent: "함양", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함양서하면", displayName: "함양 서하면", parent: "함양", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함양서상면", displayName: "함양 서상면", parent: "함양", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함양백전면", displayName: "함양 백전면", parent: "함양", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "함양병곡면", displayName: "함양 병곡면", parent: "함양", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false }
    ],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "거창",
    type: "county",
    parentRegion: "거창",
    cityNames: ["거창", "거창군"],
    dongNames: [],
    subRegionNames: [
      { name: "거창거창읍", displayName: "거창 거창읍", parent: "거창", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "거창주상면", displayName: "거창 주상면", parent: "거창", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "거창웅양면", displayName: "거창 웅양면", parent: "거창", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "거창고제면", displayName: "거창 고제면", parent: "거창", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "거창북상면", displayName: "거창 북상면", parent: "거창", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "거창위천면", displayName: "거창 위천면", parent: "거창", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "거창마리면", displayName: "거창 마리면", parent: "거창", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "거창남상면", displayName: "거창 남상면", parent: "거창", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "거창남하면", displayName: "거창 남하면", parent: "거창", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "거창신원면", displayName: "거창 신원면", parent: "거창", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "거창가조면", displayName: "거창 가조면", parent: "거창", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "거창가북면", displayName: "거창 가북면", parent: "거창", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false }
    ],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "하동",
    type: "county",
    parentRegion: "하동",
    cityNames: ["하동", "하동군"],
    dongNames: [],
    subRegionNames: [
      { name: "하동하동읍", displayName: "하동 하동읍", parent: "하동", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "하동화개면", displayName: "하동 화개면", parent: "하동", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "하동악양면", displayName: "하동 악양면", parent: "하동", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "하동적량면", displayName: "하동 적량면", parent: "하동", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "하동횡천면", displayName: "하동 횡천면", parent: "하동", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "하동고전면", displayName: "하동 고전면", parent: "하동", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "하동금남면", displayName: "하동 금남면", parent: "하동", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "하동금성면", displayName: "하동 금성면", parent: "하동", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "하동진교면", displayName: "하동 진교면", parent: "하동", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "하동양보면", displayName: "하동 양보면", parent: "하동", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "하동북천면", displayName: "하동 북천면", parent: "하동", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "하동청암면", displayName: "하동 청암면", parent: "하동", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "하동옥종면", displayName: "하동 옥종면", parent: "하동", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false }
    ],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  },
  {
    groupTitle: "남해",
    type: "county",
    parentRegion: "남해",
    cityNames: ["남해", "남해군"],
    dongNames: [],
    subRegionNames: [
      { name: "남해남해읍", displayName: "남해 남해읍", parent: "남해", level: "eup", phase: 3, exposeInHub: true, includeInSitemap: true },
      { name: "남해이동면", displayName: "남해 이동면", parent: "남해", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "남해상주면", displayName: "남해 상주면", parent: "남해", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "남해삼동면", displayName: "남해 삼동면", parent: "남해", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "남해미조면", displayName: "남해 미조면", parent: "남해", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "남해남면", displayName: "남해 남면", parent: "남해", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "남해서면", displayName: "남해 서면", parent: "남해", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "남해고현면", displayName: "남해 고현면", parent: "남해", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "남해설천면", displayName: "남해 설천면", parent: "남해", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false },
      { name: "남해창선면", displayName: "남해 창선면", parent: "남해", level: "myeon", phase: 3, exposeInHub: true, includeInSitemap: false }
    ],
    phase: 1,
    dongExposeInHub: false,
    dongIncludeInSitemap: false,
    exposeInHub: true,
    includeInSitemap: true
  }
];

// --- 중복 동명 충돌 감지 로직 ---
const dongNameCounts = new Map();
regionGroups.forEach(group => {
  const subNames = [
    ...(group.dongNames || []),
    ...(group.districtNames || []),
    ...(group.subRegionNames ? group.subRegionNames.map(s => s.name) : [])
  ];
  subNames.forEach(dong => {
    if (!dongNameCounts.has(dong)) {
      dongNameCounts.set(dong, []);
    }
    dongNameCounts.get(dong).push(group.groupTitle);
  });
});

const collisionDongs = new Set();
const collisionReport = {};
dongNameCounts.forEach((parents, dongName) => {
  if (parents.length >= 2) {
    collisionDongs.add(dongName);
    collisionReport[dongName] = parents;
  }
});

// 중복 충돌 레포트 빌드 타임 로깅
console.log("\n[중복 동명(충돌동) 감지 레포트]");
Object.entries(collisionReport).forEach(([dong, cities]) => {
  console.log(`- ${dong}: ${cities.join(' / ')}`);
});

const urls = [
  { loc: `${origin}/`, priority: "1.0" },
  { loc: `${origin}/sitemap-gimhae`, priority: "0.8" }
];

const seenUrls = new Set();

regionGroups.forEach(group => {
  // sitemap 제외 그룹 필터링
  if (group.includeInSitemap === false) return;

  // 1. 시단위 URL 추가 (무조건 sitemap 포함)
  group.cityNames.forEach(cityName => {
    serviceKeywords.forEach(service => {
      const kParam = `${cityName}-${service}`;
      const loc = `${origin}/?k=${encodeURIComponent(kParam)}`;
      
      if (seenUrls.has(loc)) return;
      seenUrls.add(loc);
      
      urls.push({ loc, priority: "0.8" });
    });
  });

  // 2-1. 구/군 단위 URL 추가 (부산/울산 구·군): phase 2 -> includeInSitemap = true 이므로 sitemap에 넣음
  if (group.districtNames && group.districtNames.length > 0) {
    group.districtNames.forEach(districtName => {
      serviceKeywords.forEach(service => {
        const kParam = `${districtName}-${service}`;
        const loc = `${origin}/?k=${encodeURIComponent(kParam)}`;
        
        if (seenUrls.has(loc)) return;
        seenUrls.add(loc);

        const isCollided = collisionDongs.has(districtName);
        if (!isCollided) {
          urls.push({ loc, priority: "0.8" });
        }
      });
    });
  }

  // 2-2. 기존 법정동 단위 URL 추가: group.dongIncludeInSitemap 설정에 따름
  if (group.dongNames && group.dongNames.length > 0) {
    group.dongNames.forEach(dongName => {
      serviceKeywords.forEach(service => {
        const kParam = `${dongName}-${service}`;
        const loc = `${origin}/?k=${encodeURIComponent(kParam)}`;
        
        if (seenUrls.has(loc)) return;
        seenUrls.add(loc);

        const isCollided = collisionDongs.has(dongName);
        const exposeInHub = isCollided ? false : (group.exposeInHub !== false && group.dongExposeInHub);
        const includeInSitemap = isCollided ? false : (group.includeInSitemap !== false && group.dongIncludeInSitemap);

        if (exposeInHub && includeInSitemap) {
          urls.push({ loc, priority: "0.8" });
        }
      });
    });
  }

  // 2-3. subRegionNames 중 includeInSitemap=true인 대상 추가 (phase 3 중 대표지역 선별 등록)
  if (group.subRegionNames && group.subRegionNames.length > 0) {
    group.subRegionNames.forEach(sub => {
      if (sub.includeInSitemap) {
        serviceKeywords.forEach(service => {
          const kParam = `${sub.name}-${service}`;
          const loc = `${origin}/?k=${encodeURIComponent(kParam)}`;
          
          if (seenUrls.has(loc)) return;
          seenUrls.add(loc);
          
          urls.push({ loc, priority: "0.8" });
        });
      }
    });
  }
});

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

urls.forEach(url => {
  // /#contact 같은 앵커 URL 필터링
  if (url.loc.includes('#')) return;
  // gyeongnam-bangsu-01.vercel.app 도메인 필터링
  if (url.loc.includes('gyeongnam-bangsu-01.vercel.app')) return;

  xml += `  <url>
    <loc>${url.loc}</loc>
    <priority>${url.priority}</priority>
  </url>
`;
});

xml += `</urlset>
`;

const destPath = path.resolve('public', 'sitemap.xml');
const dir = path.dirname(destPath);
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(destPath, xml, 'utf-8');
console.log(`\nSitemap generated successfully at ${destPath} with ${urls.length} URLs. (Collided dongs excluded: ${collisionDongs.size} dongs)`);
