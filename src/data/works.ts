export interface Work {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  team: string;
  type: string;
  challenge: {
    question: string;
    description: string;
  };
  techStack: {
    backend: string[];
    frontend: string[];
    deployment: string[];
  };
  keyFeatures: Array<{
    title: string;
    description: string;
  }>;
  mainImage: string;
  featureImage: string;
}

export const works: Work[] = [
  {
    id: 'bread-and-butter',
    title: 'Bread & Butter',
    subtitle: '요리 서적 전문 쇼핑몰 | Culinary Book Online Shop',
    description:
      'Bread & Butter is a specialized e-commerce platform dedicated to culinary enthusiasts, offering a curated collection of cookbooks and culinary literature. As the backend developer and project manager, I led the development of core features including user authentication, shopping cart functionality, and a comprehensive admin dashboard for efficient inventory management.',
    role: 'Backend Developer & Project Manager',
    team: '6 members (3 FE, 3 BE)',
    type: 'Team Project',
    challenge: {
      question:
        'How can we create a specialized e-commerce platform focused on culinary books while ensuring a seamless shopping experience?',
      description:
        'Our goal was to develop an intuitive and efficient online bookstore that caters specifically to cooking enthusiasts. We focused on creating a robust backend system that could handle complex e-commerce operations while maintaining a user-friendly interface for both customers and administrators.',
    },
    techStack: {
      backend: ['Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
      frontend: ['HTML', 'CSS', 'JavaScript'],
      deployment: ['Vercel'],
    },
    keyFeatures: [
      {
        title: 'User Management',
        description:
          'Secure authentication system with JWT, user profile management, and order history tracking',
      },
      {
        title: 'Shopping Experience',
        description:
          'Intuitive shopping cart, streamlined checkout process, and real-time inventory updates',
      },
      {
        title: 'Admin Dashboard',
        description:
          'Comprehensive admin panel for product management, order processing, and user analytics',
      },
      {
        title: 'Search & Filter',
        description:
          'Advanced search functionality with multiple filtering options for efficient book discovery',
      },
    ],
    mainImage: '/images/work-1.png',
    featureImage: '/images/work-1.png',
  },
  {
    id: 'veganro',
    title: 'Veganro',
    subtitle: '비건 장소 지도 | Vegan Place Map Service',
    description:
      '건강한 삶과 지속 가능한 라이프스타일을 추구하는 현대인들을 위한 비건 장소 지도 서비스입니다. 프론트엔드 개발자로서 회원정보 등록, 식당 상세페이지, 리뷰 시스템, 마이페이지 등 핵심 기능을 구현했습니다.',
    role: 'Frontend Developer',
    team: '6 members (3 FE, 3 BE)',
    type: 'Team Project',
    challenge: {
      question:
        'How can we help people find and share vegan-friendly places while promoting a sustainable lifestyle?',
      description:
        '건강과 헬스 관련 키워드가 트렌드로 떠오르는 시점에서, 개개인이 자신에게 맞는 건강한 식습관을 찾고 지속 가능한 삶을 영위할 수 있도록 돕는 서비스를 구현하고자 했습니다.',
    },
    techStack: {
      backend: ['Node.js', 'Express', 'MongoDB'],
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      deployment: ['AWS'],
    },
    keyFeatures: [
      {
        title: 'User Authentication',
        description: '로그인 없이도 지도 탐색이 가능한 유연한 사용자 경험 제공',
      },
      {
        title: 'Place Management',
        description: '북마크 기능을 통한 장소 저장 및 상세 정보 제공',
      },
      {
        title: 'Review System',
        description:
          '리뷰 작성/수정/삭제 기능 및 무한 스크롤을 통한 빠른 로딩 속도 구현',
      },
      {
        title: 'My Page',
        description:
          '제보한 가게, 작성 리뷰, 북마크 관리 및 채식 유형/닉네임 수정 기능',
      },
    ],
    mainImage: '/images/veganro-main.png',
    featureImage: '/images/veganro-features.png',
  },
  // 다른 프로젝트들 추가...
];

export function getWorkById(id: string): Work | undefined {
  return works.find((work) => work.id === id);
}
