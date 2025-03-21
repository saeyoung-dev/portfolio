import { ResumeData } from '@/types/resume';

export const resumeData: ResumeData = {
  name: {
    ko: '최세영',
    en: 'Saeyoung Choi',
  },
  title: {
    ko: '프로덕트 디자이너',
    en: 'Product Designer',
  },
  about: {
    ko: `**기획, 디자인, 개발 협업**까지 **서비스 전 과정을 주도**하며 **비즈니스 목표와 사용자 요구를 조율**합니다.
웹 개발 경험을 바탕으로 **기술적 구현 가능성을 고려한 기획을 수행**하며, 디자인 시스템을 구축해 UI 및 서비스 품질을 향상시켰습니다.
**기획-디자인-개발 간 연결**을 강화해 **더 나은 사용자 경험과 비즈니스 성과를 창출**하는 데 집중하고 있습니다.`,
    en: `I am a product designer who designs user-centered experiences.

I **lead the entire service process,** from planning and design to development collaboration, aligning business goals with user needs.
With a background in web development, I consider technical feasibility in planning and **implement design systems** to improve UI consistency and service quality.
My focus is on bridging **planning, design, and development** to create seamless user experiences and drive business success.`,
  },
  coreValues: {
    ko: [
      'End-to-End 서비스 기획 (기획-디자인-개발-QA-운영)',
      'SW·웹 개발 경험 및 다양한 도구 활용 능력',
      '디자인 시스템 구축으로 UI·UX 일관성 및 유지보수 효율성 향상',
      'UX 리서치 & 데이터 분석 기반 서비스 개선',
      'JIRA, Confluence를 활용한 프로젝트 일정 조율 및 이슈 관리',
    ],
    en: [
      'End-to-End Service Planning (Planning-Design-Development-QA-Operations)',
      'Experience in Software & Web Development with Proficiency in Various Tools',
      'Established Design Systems for UI/UX Consistency and Maintenance Efficiency',
      'Service Improvement Based on UX Research & Data Analysis',
      'Project Scheduling and Issue Management Using JIRA & Confluence',
    ],
  },
  experiences: [
    {
      period: '2024.10 - 2024.12',
      title: {
        ko: 'I-LAB · 프론트엔드',
        en: 'I-LAB · Frontend Developer',
      },
      company: {
        ko: '(주)살린',
        en: 'Salin',
      },
      location: {
        ko: '서울',
        en: 'Seoul',
      },
      description: {
        ko: ['AI 기반 음성 인터페이스 서비스 마이그레이션 및 UI 개발 지원'],
        en: [
          'AI-based Voice Interface Service Migration and UI Development Support',
        ],
      },
    },
    {
      period: '2021.05 - 2023.12',
      title: {
        ko: '서비스 전략실 · 사원 3년차 · UI 설계 및 퍼블리싱',
        en: 'Service Strategy Team · Associate (3rd year) · UI Design & Mark-Up',
      },
      company: {
        ko: '(주)살린',
        en: 'Salin',
      },
      location: {
        ko: '서울',
        en: 'Seoul',
      },
      description: {
        ko: [
          '사용자 리서치 기반 UX 개선 및 디자인 시스템 구축 → UI 일관성 확보 & 유지보수 비용 절감',
          '서비스 기획 & UI 설계, 개발팀과 협업하여 구현 가능성 검토',
          '비즈니스 목표 반영한 전략 수립 → 운영 최적화 및 사용자 만족도 향상',
        ],
        en: [
          'UX improvement based on user research and design system implementation → Ensured UI consistency & reduced maintenance costs',
          'Service planning & UI design, feasibility review with the development team',
          'Established strategies aligning with business goals → Optimized operations and increased user satisfaction',
        ],
      },
    },
  ],
  projects: [
    {
      year: '2024',
      title: {
        ko: 'AI 기반 음성 인터페이스 서비스 (AI Talker)',
        en: 'AI-based Voice Interface Service (AI Talker)',
      },
      description: {
        ko: [
          'UI 개선 및 기능 추가 → 사용자 경험 향상',
          '기존 시스템 분석 후 신규 환경으로 데이터 이전 & 기능 테스트',
          '오류 수정 & 성능 최적화 → 서비스 안정성 개선',
          'API 응답 속도 30% 개선 → 처리 속도 향상 & 안정성 확보',
          'UI 최적화 워크샵 & 사용성 개선, 오류율 감소',
        ],
        en: [
          'AI Voice Interface Service Migration & UI Optimization',
          'Data Migration & Feature Testing after System Analysis',
          'Bug Fixes & Performance Optimization → Service Stability Improvement',
          'API Response Speed 30% Improvement → Processing Speed Enhancement',
          'UI Optimization Workshop & Usability Improvement, Error Rate Reduction',
        ],
      },
      role: {
        ko: '살린 | 프론트엔드 & UX/UI 디자인',
        en: 'Salin | Project End Development & UX/UI Design',
      },
    },
    {
      year: '2022',
      title: {
        ko: '오모오모 | 삼성화재',
        en: 'Omomomo | Samsung Fire & Marine Insurance',
      },
      description: {
        ko: [
          'End-to-End 기획 & 운영 → 기획 · 설계 · 개발 협업 · QA · 배포 · 운영 전 과정 리딩',
          '디자인 시스템 구축 & UI 퍼블리싱 일관성 확보 & 유지보수 비용 30% 절감',
          '개발팀 협업 & 일정 조율 → UI 구현 가능성 검토 및 부서 간 커뮤니케이션 주도',
          '런칭 직후 Google Play 다운로드 1위 달성, 10만+ 사용자 확보',
          '고장 신고 플로우 개선 → CS 문의 20% 감소 & 사용자 만족도 증가',
        ],
        en: [
          'End-to-End Planning & Operation → Leading Entire Process',
          'Design System Implementation & UI Publishing & 30% Maintenance Cost Reduction',
          'Development Team Collaboration & Schedule Coordination',
          'Achieved #1 on Google Play Downloads after Launch, 100K+ Users',
          '20% CS Inquiry Reduction & User Satisfaction Increase',
        ],
      },
      role: {
        ko: '살린 | 프론트엔드 & UX/UI 디자인',
        en: 'Salin | Frontend & UX/UI Design',
      },
    },
    {
      year: '2021',
      title: {
        ko: 'Virtual Seoul 2.0 | 서울관광공사',
        en: 'Virtual Seoul 2.0 | Seoul Tourism Organization',
      },
      description: {
        ko: [
          'UX/UI 디자인 개선 및 반응형 웹 퍼블리싱',
          '요구 사항 정의 및 WBS 관리, 디자인 시스템 구축',
          '사용자 피드백 반영 → 네비게이션 개선 및 지속적 이터레이션 진행',
          '서울 MICE 국제 컨퍼런스, 글로벌 관광포럼 등 국내외 행사 10건+ 지원',
          '반응형 웹 UX 최적화로 이용자 편의성 및 접근성 향상',
          '국제회의 개최 성과로 2022년 UN "세계관광기구 우수사례"로 선정',
        ],
        en: [
          'Enhanced UX/UI design and responsive web publishing',
          'Defined requirements, managed WBS, and built a design system',
          'Incorporated user feedback → Improved navigation and iterated continuously',
          'Supported 10+ domestic and international events, including Seoul MICE Conference and Global Tourism Forum',
          'Optimized responsive web UX → Improved user convenience and accessibility',
          'Recognized as a "2022 UNWTO Best Practice" for successful international conference execution',
        ],
      },
      role: {
        ko: '살린 | 프론트엔드 & UX/UI 디자인',
        en: 'Salin | Frontend & UX/UI Design',
      },
    },
  ],
  relaventExperience: [
    {
      period: '2024.08 - 2025.10',
      title: {
        ko: 'Next.js 교육 과정 | 웅진씽크빅 x 유데미',
        en: 'Next.js Training Course | Woongjin Think Big x Udemy',
      },
      organization: {
        ko: '교육이수내역',
        en: 'Education',
      },
      details: {
        ko: '・ Next.js 교육 과정 이수 및 기업 연계 프로젝트 진행\n・ 오피스너 웹 통합 프로젝트 수행, 개발 및 출시',
        en: '・ Completed Next.js training course and conducted company-linked project\n・ Performed and launched Officener web integration project',
      },
    },
    {
      period: '2023.12 - 2024.04',
      title: {
        ko: 'SW 엔지니어 트랙 | 엘리스',
        en: 'SW Engineer Track | Elice',
      },
      organization: {
        ko: '교육이수내역',
        en: 'SW Bootcamp',
      },
      details: {
        ko: '프론트엔드 & 백엔드 웹 개발자 과정 수료, 두 개의 프로젝트 진행 및 모두 "대상" 수상\n・ 1차 프로젝트: 요리책 전문 서적 온라인 쇼핑몰 개발 (Node.js, Express.js 활용)\n・ 2차 프로젝트: 지도 기반 채식 지향 레스토랑 케어링 서비스 개발 및 배포 (React.js, Vercel)',
        en: 'Completed Frontend & Backend Web Developer Course, Conducted two projects and won "Grand Prize" for both\n・ 1st Project: Developed cookbook online shopping mall (using Node.js, Express.js)\n・ 2nd Project: Developed and deployed map-based vegetarian restaurant caring service (using React.js, Vercel)',
      },
    },
    {
      period: '2020.06 - 2020.11',
      title: {
        ko: '웹퍼블리셔 양성 과정 | 강남 그린컴퓨터학원',
        en: 'UI/UX Training Course | Green Computer Academy',
      },
      organization: {
        ko: '교육이수내역',
        en: 'SW Bootcamp',
      },
      details: {
        ko: 'UI/UX 반응형 웹디자인 & 웹퍼블리셔 (디자인&코딩) 양성 과정\n・ 인터랙티브 웹 사이트 및 웹 접근성 준수 프로젝트 등 진행 ・ [View Portfolio (legacy)](https://saeyoung-dev.github.io/portfolio-dev/)',
        en: 'UI/UX Responsive Web Design & Web Publisher (Design & Coding) Training Course\n・ Interactive Web Site & Web Accessibility Compliance Project Progress ・ [View Portfolio (legacy)](https://saeyoung-dev.github.io/portfolio-dev/)',
      },
    },
  ],
  education: [
    {
      period: '2014 - 2019',
      degree: {
        ko: '가천대학교 글로벌캠퍼스',
        en: 'Gachon University Global Campus',
      },
      school: {
        ko: '시각디자인학과 학사 졸업',
        en: 'Bachelor of Visual Design',
      },
    },
  ],
  skills: {
    ko: [
      'Figma',
      'Confluence',
      'JIRA',
      'Miro',
      'Adobe Creative Cloud',
      'UX 리서치',
      '와이어프레임 & 프로토타이핑',
      '디자인 시스템 구축',
      '반응형 웹 디자인',
      '웹 접근성 (WCAG)',
      'A/B 테스트',
      '스타일 가이드',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'CI/CD',
    ],
    en: [
      'Figma',
      'Confluence',
      'JIRA',
      'Miro',
      'Adobe Creative Cloud',
      'UX Research',
      'Wireframing & Prototyping',
      'Design System Management',
      'Responsive Web Design',
      'Accessibility (WCAG)',
      'A/B Testing',
      'UI Style Guide',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'CI/CD',
    ],
  },
  contact: [
    {
      type: 'email',
      label: 'Email',
      value: 'saeyoung.dev@gmail.com',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/saeyoungchoi',
      link: 'https://www.linkedin.com/in/saeyoungchoi/',
    },
    {
      type: 'github',
      label: 'GitHub',
      value: 'github.com/saeyoungchoi',
      link: 'https://github.com/saeyoungchoi',
    },
  ],
  certifications: [
    {
      date: '2023.10',
      title: {
        ko: 'TOEIC Speaking Test',
        en: 'TOEIC Speaking Test',
      },
      description: {
        ko: '140점 / Intermediate High / PASS',
        en: '140 points / Intermediate High level / PASS',
      },
    },
  ],
};
