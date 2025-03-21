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
    ko: [
      '**사용자 중심의 서비스 기획과 UI/UX 디자인을 리딩하는 프로덕트 디자이너.**',
      'UX 리서치부터 기획, 디자인, 개발 협업까지 전 과정을 리딩하며, 비즈니스 목표와 사용자 요구를 조율합니다. 웹 개발 경험을 바탕으로 기술적 구현 가능성을 고려한 기획을 수행하며, 디자인 시스템 구축을 통해 UI 일관성과 서비스 완성도를 높여왔습니다.',
    ],
    en: [
      '**A product designer leading user-centered service planning and UI/UX design.**',
      'I oversee the entire process from UX research and planning to design and development collaboration, aligning business goals with user needs. With a background in web development, I create designs that consider technical feasibility and enhance consistency through design systems.',
    ],
  },
  coreValues: {
    ko: [
      'End-to-End 서비스 기획 (기획-디자인-개발-QA-운영)',
      'SW · 웹 개발 경험 및 다양한 도구 활용 능력',
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
        ko: ['AI 기반 음성 인터페이스 서비스 UI 및 기능 마이그레이션'],
        en: [
          'AI-based Voice Interface Service Migration and UI Development Support',
        ],
      },
    },
    {
      period: '2021.05 - 2023.12',
      title: {
        ko: '서비스 전략실 · 서비스 기획 및 UI 설계',
        en: 'Service Strategy Team · Service Planning & UIUX Design',
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
          '사용자 리서치 기반으로 UX 개선 및 디자인 시스템 구축',
          '서비스 기획 및 UI 퍼블리싱, 개발팀과 협업하여 구현 가능성 검토',
          '비즈니스 목표에 맞춘 전략 수립 및 서비스 운영 관리',
        ],
        en: [
          'UX improvement based on user research and design system development',
          'Service planning & UI publishing, reviewing feasibility in collaboration with the development team',
          'Strategic planning aligned with business goals and service operations management',
        ],
      },
    },
  ],
  projects: [
    {
      year: '2024',
      title: {
        ko: 'AI 기반 음성 인터페이스 서비스 //(AI Talker)//',
        en: 'AI-based Voice Interface Service //(AI Talker)//',
      },
      description: {
        ko: [
          'AI 기반 음성 인터페이스 서비스 UI 및 기능 마이그레이션 수행',
          '기존 시스템 분석 후, 새로운 환경에서 API 및 데이터 구조 최적화',
          '오류 수정 & 성능 최적화, 서비스 안정성 개선',
        ],
        en: [
          'AI Voice Interface Service Migration & UI Optimization',
          'Data Migration & Feature Testing after System Analysis',
          'Bug Fixes & Performance Optimization → Service Stability Improvement',
        ],
      },
      accomplishments: {
        ko: [
          'API 응답 속도 30% 개선 → 처리 속도 향상 & 안정성 확보',
          'UI 최적화 접근성 및 사용성 개선 → 오류율 감소',
        ],
        en: [
          'API Response Speed 30% Improvement → Processing Speed Enhancement',
          'UI Optimization Workshop & Usability Improvement, Error Rate Reduction',
        ],
      },
      role: {
        ko: '살린 | 프론트엔드 & UX/UI 디자인',
        en: 'Salin | Frontend & UX/UI Design',
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
          'End-to-End 서비스 기획 및 운영 | 기획, 디자인, 개발, QA, 배포, 운영 전 과정 리딩',
          'UX 리서치 및 데이터 분석 기반 화면 설계 → 요구사항 정의, 사용자 피드백 반영 정책 수립, UI/UX 개선',
          '프로젝트 일정 및 이슈 관리 → JIRA, Confluence를 활용한 일정 조율 및 협업 프로세스 최적화',
          'UI 퍼블리싱 및 유지보수 최적화 → 개발팀·디자인팀과 협업하여 UI 구현 가능성 검토 및 디자인 시스템 구축',
        ],
        en: [
          'End-to-End Planning & Operation → Leading Entire Process',
          'UX research & data-driven UI design → Defined requirements, established policies based on user feedback, and improved UI/UX',
          'Project scheduling & issue management → Optimized collaboration using JIRA and Confluence.',
          'UI publishing & maintenance → Worked with developers and designers to ensure feasibility and build a design system.',
        ],
      },
      accomplishments: {
        ko: [
          'Google Play 다운로드 1위 달성, 10만+ 사용자 확보',
          'CS 분석을 통한 UX 최적화, 고장 신고 플로우 개선 후 CS 문의 20% 감소',
          '디자인 시스템 구축 및 UI 가이드라인 정립 | UI 유지보수 비용 30% 절감 ',
        ],
        en: [
          'Achieved #1 on Google Play Downloads after Launch, 100K+ Users',
          '20% CS Inquiry Reduction & User Satisfaction Increase',
          'Design System Implementation & UI Publishing & 30% Maintenance Cost Reduction',
        ],
      },
      role: {
        ko: '살린 | 서비스 기획 & UX/UI 디자인',
        en: 'Salin | Service Planning & UX/UI Design',
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
          '사용자 피드백 반영 네비게이션 개선 및 지속적 이터레이션 진행',
        ],
        en: [
          'Enhanced UX/UI design and responsive web publishing',
          'Defined requirements, managed WBS, and built a design system',
          'Incorporated user feedback → Improved navigation and iterated continuously',
        ],
      },
      accomplishments: {
        ko: [
          '서울 MICE 국제 컨퍼런스, 글로벌 관광포럼 등 국내외 행사 10건+ 지원',
          '반응형 웹 UX 최적화로 이용자 편의성 및 접근성 향상',
          '국제회의 개최 성과로 2022년 UN "세계관광기구 우수사례"로 선정',
        ],
        en: [
          'Supported 10+ domestic and international events, including Seoul MICE Conference and Global Tourism Forum',
          'Optimized responsive web UX → Improved user convenience and accessibility',
          'Recognized as a "2022 UNWTO Best Practice" for successful international conference execution',
        ],
      },
      role: {
        ko: '살린 | 서비스 기획 & UX/UI 디자인',
        en: 'Salin | Service Planning & UX/UI Design',
      },
    },
    {
      year: '2021',
      title: {
        ko: 'SIEMENS, 인천관광공사 등 온라인 컨퍼런스 웹 플랫폼 구축 지원',
        en: 'Support for Online Conference Web Platform Development for SIEMENS, Incheon Tourism Organization, etc.',
      },
      description: {
        ko: [
          'Google Sheets, Git을 활용한 협업 및 프로젝트 관리',
          'UI/UX 디자인 및 퍼블리싱, 운영 단계에서 UX 개선 사항 반영 → 사용성 및 접근성 향상',
        ],
        en: [
          'Collaboration & project management using Google Sheets and Git',
          'UI/UX design and publishing, incorporating UX improvements in the operational phase → Enhanced usability and accessibility',
        ],
      },
      role: {
        ko: '살린 | 서비스 기획 & UX/UI 디자인',
        en: 'Salin | Service Planning & UX/UI Design',
      },
    },
  ],
  relaventExperience: [
    {
      period: '2024.08 - 2025.10',
      title: {
        ko: 'Next.js 프로젝트 캠프 | 웅진씽크빅 x 유데미',
        en: 'Next.js Project Camp | Woongjin Think Big x Udemy',
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
        ko: 'UI/UX 반응형 웹디자인 & 웹퍼블리셔 (디자인&코딩) 양성 과정\n・ 인터랙티브 웹 사이트 및 웹 접근성 준수 프로젝트 등 진행 | [View Projects](https://saeyoung-dev.github.io/portfolio-dev/)',
        en: 'UI/UX Responsive Web Design & Web Publisher (Design & Coding) Training Course\n・ Interactive Web Site & Web Accessibility Compliance Project Progress | [View Projects](https://saeyoung-dev.github.io/portfolio-dev/)',
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
      'Next.js',
      'TypeScript',
      'React',
      'Node.js',
      'HTML/CSS',
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
      'HTML/CSS',
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
