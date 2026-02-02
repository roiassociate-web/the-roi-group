
import { SiteContent, CurriculumItem } from './types';

export const INITIAL_CONTENT: SiteContent = {
  hero: {
    copy: "열심히 썼는데 탈락하는 제안서, 그 이유를 아시나요?",
    title: "제안서 특강: 수주 여부는 10초 안에 결정됩니다.",
    subTitle: "제안서 PPT 원본 템플릿 제공 및 파트너 강사 등록 기회"
  },
  instructor: {
    name: "김윤정",
    role: "(주)THE ROI GROUP 대표",
    bio: [
      "고려대학교 노동대학원 인력관리학 석사",
      "고려대학교 정경대학 정치외교학 · 법행정학 학사",
      "",
      "2023 ~ 현재   (주)더로이그룹 법인 설립 (단독 대표)",
      "2018 ~ 2023   (주)더로이컨설팅 법인 설립 (공동 대표)",
      "2015   HRD컨설팅 T사 전임 컨설턴트",
      "2015   코엑스 전시 기획팀 마케팅 담당"
    ],
    specialty: [
      "인재개발 전략수립",
      "사업부문별 교육설계",
      "교육운영 표준 개발"
    ]
  },
  stats: {
    companies: 60,
    projects: 500
  },
  pricing: {
    online: {
      date: "2월 10, 13일 (화, 금)",
      time: "20:00 - 23:00",
      price: "159,000원 (얼리버드)"
    },
    offline: {
      date: "2월 8일 (일)",
      time: "10:00 - 13:00",
      location: "강남역 인근",
      price: "259,000원 (얼리버드)"
    },
    bankInfo: "국민은행 760701-04-330512\n(주식회사 더로이그룹)"
  },
  benefits: {
    offline: [
      "[진단 & 교정] 1:1 밀착 컨설팅",
      "수료증 증정"
    ],
    online: [
      "제안서를 사전 제출 후 라이브 첨삭"
    ],
    aftercare: [
      "온라인 라이브 컨설팅 1시간 (질의응답)",
      "실제 수주에 성공한 제안서 PPT 템플릿을 드립니다.",
      "우수 수료생은 (주)더로이그룹의 [파트너 강사]로 등록되어, 향후 프로젝트 자격을 드립니다."
    ]
  },
  refundPolicy: {
    online: {
      title: "온라인 과정 (ZOOM)",
      lines: [
        "1일 전까지: 100% 환불",
        "강의 당일 및 시작 후: 환불 불가"
      ]
    },
    offline: {
      title: "오프라인 과정 (집합)",
      notice: "소수 정예(6명)로 진행되는 '밀착 컨설팅' 특성상, 임박한 취소는 다른 대기자의 기회를 뺏게 됩니다.",
      lines: [
        "강의 3일 전까지: 100% 환불",
        "1일 전까지: 50% 환불 (교육 운영 실비)",
        "강의 당일: 환불 불가 (타인 양도 가능)"
      ]
    }
  },
  notices: [
    "오프라인 수업 시 노트북 없으면 참여가 어렵습니다.",
    "온라인 강의 시 최대 10명 / 오프라인 강의 시 최대 6명으로 인원 제한"
  ]
};

export const INITIAL_CURRICULUM: CurriculumItem[] = [
  {
    id: '1',
    duration: '30분',
    title: '수주하는 제안서 구조와 전략',
    description: '[실 사례] 제안서의 이해: \n· 컨설팅사가 수주한 제안서 예시 (사기업 3억/1억, 공공기관 1억 수주 사례)\n· 잘 된 예시와 안 된 예시의 결정적 차이 분석'
  },
  {
    id: '2',
    duration: '40분',
    title: '도대체 왜? 열심히 썼는데 탈락할까?',
    description: '· 기업 제안서 vs 강사 제안서 차이\n· HR담당자가 상사에게 올리기 어려운 제안서 특징\n· 기업 담당자가 실제로 제안서를 여는 순서 (첫 10초의 법칙)\n· [진단] 내 제안서 탈락 원인 (현장 미니 컨설팅)'
  },
  {
    id: '3',
    duration: '80분',
    title: '현장에서 지금 바꿔보자! 제안서 리디자인',
    description: '· [실습] 제안서 구성 변경하기\n· [실습] 강사의 언어를 기업의 언어로 번역하기\n· [실습] 제안서 디자인 수정할 영역과 아닌 영역 구분하기'
  },
  {
    id: '4',
    duration: '30분',
    title: '그래서 이걸로 뭘 하죠? 완성본의 사용법',
    description: '· 고객사와 할 수 있는 커뮤니케이션의 틀 (시점/내용의 디테일)\n· 답장이 오는 제안서의 공통 패턴\n· [실습] 제안서 발송 메일 제목 및 본문 구조 템플릿 만들기\n· 제안서 이후 후속 연락 타이밍 전략'
  }
];

export const REFERENCES = [
  "SAMSUNG 삼성전자판매", "HYUNDAI", "HYUNDAI GLOVIS", "HYUNDAI Rotem", "현대일렉트릭", "현대중공업MOS", "HYUNDAI STEEL",
  "HYUNDAI CORPORATION", "신한은행", "KB증권", "true Friend 한국투자증권", "유안타증권", "AXA", "한국증권금융",
  "KOREAN RE", "롯데하이마트", "LOTTE super", "롯데쇼핑 e커머스", "태평양물산", "농협유통", "인천관광공사",
  "EASTAR JET", "LS 오토모티브", "KUMHO TIRE", "SHINWON", "금호석유화학", "금호폴리켐", "OCI",
  "NHN ENTERTAINMENT", "Suresoft", "Roche", "KSD 한국예탁결제원", "GC 녹십자", "Baxter", "대우건설",
  "대우에스티", "대우파워", "Pruwell.", "PRUGIO", "KOINFRA", "신세계건설", "동국산업",
  "아워홈 OURHOME", "GS E&R", "GS 포천그린에너지", "IKIET", "K Petro 한국석유관리원", "한국에너지공단", "TOYOTA",
  "MITSUBISHI ELECTRIC", "TACONIC", "KAMCO 한국자산관리공사", "기획재정부", "농촌진흥청"
];
