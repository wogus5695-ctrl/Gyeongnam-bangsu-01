export const BRAND_NAME = "레인가드";
export const COMPANY_NAME = "더원건축디자인";
export const REPRESENTATIVE_NAME = "김건자";
export const BUSINESS_NUMBER = "615-19-60928";

// 연락처 정보 변수 (공란 시 방어 코드 동작)
export const CONTACT_PHONE = "010-9661-2196";
export const KAKAO_URL = "";

// 대표 정보 및 사업자 등록번호 노출 여부 판별 플래그
export const HAS_COMPANY = COMPANY_NAME.trim() !== "";
export const HAS_REPRESENTATIVE = REPRESENTATIVE_NAME.trim() !== "";
export const HAS_BUSINESS_NUMBER = BUSINESS_NUMBER.trim() !== "";
export const HAS_FOOTER_INFO = HAS_COMPANY || HAS_REPRESENTATIVE || HAS_BUSINESS_NUMBER;

// 연락처 유효성 판단 플래그
export const HAS_PHONE = CONTACT_PHONE.trim() !== "";
export const HAS_KAKAO = KAKAO_URL.trim() !== "";
