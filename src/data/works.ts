import type { Work } from '@/types/work';

export const works: Record<string, Work> = {
  veganro: {
    id: 'veganro',
    logo: '/images/logo/veganro.png',
    title: 'Veganro',
    subtitle: {
      ko: '비건 장소 지도 서비스',
      en: 'Vegan Place Map Service',
    },
    description: {
      ko: [
        '비건 친화적인 식당과 카페를 **사용자의 식단 선호도와 위치 기반**으로 쉽게 찾을 수 있도록 돕는 **비건 지도 서비스**입니다.',
        '한국 사회에서의 비건 문화 문제점을 분석하고, 초기 아이디어 제안, 유저 타겟팅, **컨셉 기획 및 User Flow 설계**를 진행했습니다.',
        '**UI/UX 디자인 (전체 화면 구성 및 로고 디자인)** 과 함께, **React.js 기반 프론트엔드 개발(지도 API, 위치 검색, 필터 기능)을 구현**하여 사용자 경험을 개선했습니다.',
      ],
      en: [
        'Veganro is a map service that helps users find vegan-friendly places while promoting a sustainable lifestyle.',
        'As a frontend developer, I implemented key features such as the **main map functionality, location-based search, and advanced filtering options** to enhance user experience.',
      ],
    },
    role: 'Frontend Developer & UI Designer',
    team: '4 Frontend, 2 Backend',
    contribution: {
      planning: '100%',
      design: '100%',
      development: '50%',
      management: '50%',
    },
    timeline: '24.04.01 ~ 24.04.19',
    link: 'https://veganro-frontend.vercel.app/',
    challenge: {
      question: {
        ko: '사용자가 비건 친화적인 장소를 쉽게 찾고 공유할 수 있도록 하려면?',
        en: 'How can we help users find and share vegan-friendly places efficiently?',
      },
      description: {
        ko: [
          '비건 식단을 실천하는 사람들은 외식할 때마다 적절한 식당을 찾는 데 어려움을 겪습니다. 기존 음식점 검색 서비스에서는 비건 친화적인 옵션이 명확하게 구분되지 않거나, 사용자 리뷰가 부족하여 신뢰할 만한 정보를 얻기 어려운 경우가 많습니다.',
          'Veganro는 이러한 문제를 해결하기 위해 개발되었습니다. **현 위치 기반 검색과 세부 필터 기능을 제공**하여 사용자가 자신의 **식단 선호도에 맞는 비건 친화적인 장소**를 쉽고 빠르게 찾을 수 있도록 도왔습니다.',
        ],
        en: [
          'People who follow a vegan diet often struggle to find suitable restaurants when dining out. Existing restaurant search services do not clearly differentiate vegan-friendly options, and reliable user-generated reviews are often lacking.',
          'Veganro was developed to address this issue. By providing location-based search and detailed filtering options, users can quickly and easily find places that **match their dietary preferences.**',
        ],
      },
    },

    techStack: {
      frontend: [
        'React',
        'Tanstack Query',
        'Recoil',
        'Vite',
        'Styled Components',
      ],
      backend: ['Node.js', 'Express', 'MongoDB', 'NestJS'],
      tools: {
        label: 'Design Tools',
        items: ['Figma', 'Adobe Illustrator'],
      },
    },
    solution: {
      title: {
        ko: '현 위치 기반, 주변 비건 장소 검색 및 다양한 필터 기능을 통해 사용자의 선호도에 맞는 장소를 쉽게 찾을 수 있도록 최적화했습니다.',
        en: 'Solution',
      },
      description: {
        ko: ' Veganro의 지도 기능은 사용자의 **현재 위치와 필터 옵션**을 반영하여 **맞춤형 검색 결과**를 제공합니다. 또한, 사용자는 **비건 장소를 제보하고 리뷰를 공유**하며 정보를 교류할 수 있습니다. 이를 통해 단순한 검색을 넘어 **비건 문화를 확산하고 지속 가능한 라이프스타일을 실천할 수 있는 환경을 조성**하였습니다.',
        en: '',
      },
    },
    keyFeatures: {
      interface: [
        {
          title: {
            ko: '로그인 & 회원가입',
            en: 'Sign In & Sign Up',
          },
          subtitle: {
            ko: '비회원 로그인 및 이메일 로그인 지원',
            en: 'Non-member Login and Email Login Support',
          },
          description: {
            ko: '**카카오 및 이메일 로그인**과 **비회원 이용**이 가능하며, 회원가입 시 **비건 유형**을 선택할 수 있습니다. 비건 유형에 따라 **맞춤형 프로필 이미지**가 제공됩니다. (비회원은 마이페이지 접속, 장소 제보, 북마크, 리뷰 작성 등의 기능은 제한됩니다.)',
            en: 'KakaoTalk, Email login and non-member access are possible, and you can select a vegan type when signing up. A personalized profile image is provided according to the vegan type. (*Non-members are limited to accessing the My Page, reporting places, bookmarking, and writing reviews.)',
          },
          image: '/images/work/veganro/feature-01.gif',
          imageType: 'portrait',
        },
        {
          title: {
            ko: '지도 & 검색',
            en: 'Map & Search',
          },
          subtitle: {
            ko: '현위치 기반 지도 서비스',
            en: 'Map Service Based on Current Location',
          },
          description: {
            ko: '지도의 **마커를 클릭하면 모달**을 통해 **장소의 상세 페이지**로 이동합니다. 상단 **검색 창 클릭 시, 원하는 장소를 검색**해 볼 수 있으며, 현 위치로부터 **거리순 정렬**이 되어 가장 **가까운 비건 장소**를 찾을 수 있습니다.',
            en: 'You can easily search for places you want by finding vegan places based on your current location and various filters.',
          },
          image: '/images/work/veganro/feature-02.gif',
          imageType: 'portrait',
        },
        {
          title: {
            ko: '장소 상세 & 리뷰',
            en: 'Place Detail & Review',
          },
          subtitle: {
            ko: '리뷰 작성, 수정, 삭제 기능',
            en: 'Review Creation, Modification, Deletion Function',
          },
          description: {
            ko: '**현 위치와의 거리, 위치, 연락처, 영업시간, SNS URL 등의 정보**를 제공합니다. 해당 레스토랑에 대한 **리뷰를 조회, 작성 및 수정, 삭제**할 수 있고 다른 사용자의 리뷰를 **신고**할 수 있습니다. 무한 스크롤을 통해 빠른 리뷰 로딩 속도를 제공합니다.',
            en: "Provides information such as distance from the current location, location, contact information, business hours, and SNS URL. Users can write, modify, and delete reviews about the restaurant, and report other users' reviews. Infinite scroll provides fast review loading speed.",
          },
          image: '/images/work/veganro/feature-03.gif',
          imageType: 'portrait',
        },
        {
          title: {
            ko: '장소 제보',
            en: 'Place Report',
          },
          subtitle: {
            ko: '카카오 API 활용 주소 검색',
            en: 'Address Search Using Kakao API',
          },
          description: {
            ko: '**새로운 채식 장소를 제보**할 수도 있으며, 주소 검색을 통해 해당 장소의 위치를 지번과 도로명 주소로 가져와 정확한 위치로 등록 가능합니다. 관리자의 승인 후 장소가 등록됩니다.',
            en: 'Users can report new vegan places and search for addresses to get the location of the place in both street and block numbers. After approval by the administrator, the place is registered.',
          },
          image: '/images/work/veganro/feature-04.gif',
          imageType: 'portrait',
        },
        {
          title: {
            ko: '마이페이지',
            en: 'My Page',
          },
          subtitle: {
            ko: '제보한 가게, 리뷰, 북마크 관리',
            en: 'Reporting the store, writing a review, managing bookmarks, and modifying vegan type and username',
          },
          description: {
            ko: '회원이 **제보한 장소, 작성한 리뷰, 북마크 목록**을 무한 스크롤을 통해 조회할 수 있습니다. **프로필 정보 수정**이 가능하며, 사용자가 **선택한 비건 유형**에 따라 **프로필 이미지가 변경**됩니다.',
            en: 'Users can view their reported places, written reviews, and bookmarked places through infinite scrolling. The profile can also be modified, and the profile image changes according to the vegan type selected by the user.',
          },
          image: '/images/work/veganro/feature-05.gif',
          imageType: 'portrait',
        },
      ],
    },
    mainImage: '/images/work/veganro/main.png',
    featureImage: '/images/work/veganro/feature.png',
    sections: [
      {
        type: 'informationArchitecture',
        data: {
          image: '/images/work/veganro/information-architecture.png',
        },
      },
      {
        type: 'taskFlow',
        data: {
          image: '/images/work/veganro/taskflow.png',
        },
      },
    ],
    video: {
      videoId: 'TvuE8-7Qd_M',
      title: {
        ko: 'Veganro 시연 영상',
        en: 'Veganro Demo Video',
      },
    },

    retrospective: [
      {
        question: {
          ko: '프로젝트 초기 설계 과정에서 어떤 어려움이 있었나요?',
          en: 'What challenges did you face during the initial design phase of the project?',
        },
        answer: {
          ko: ['프로젝트 초기 설계 과정에서 어떤 어려움이 있었나요?'],
          en: [
            'What challenges did you face during the initial design phase of the project?',
          ],
        },
      },
      {
        question: {
          ko: '프로젝트 초기 설계 과정에서 어떤 어려움이 있었나요?',
          en: 'What challenges did you face during the initial design phase of the project?',
        },
        answer: {
          ko: ['프로젝트 초기 설계 과정에서 어떤 어려움이 있었나요?'],
          en: [
            'What challenges did you face during the initial design phase of the project?',
          ],
        },
      },
    ],
  },
  'bread-and-butter': {
    id: 'bread-and-butter',
    logo: '/images/logo/bab.png',
    title: 'Bread & Butter',
    subtitle: {
      ko: '요리 서적 온라인 상점',
      en: 'Culinary Book Online Shop',
    },
    description: {
      ko: [
        'Bread & Butter는 다양한 국가의 요리 서적과 레시피 북을 제공하는 **요리 서적 전문 전자상거래 플랫폼**입니다.',
        '**프로젝트 매니저**이자 **풀스택 개발자**로 참여하여, **상품 조회, 장바구니, 재고 관리 대시보드** 등 주요 기능을 설계하고 구현했습니다.',
        '**UI/UX 디자인을 총괄**하며, **전체 화면 구성 및 브랜드 아이덴티티**//(로고, 컬러 시스템)// **설계**를 통해 일관된 사용자 경험을 구축했습니다.',
      ],
      en: [
        'Bread & Butter is a **specialized e-commerce platform for culinary books**, offering a diverse selection of cookbooks and recipe collections from around the world.',
        'As a **Project Manager and Full-Stack Developer**, I led the development of key features such as **product browsing, shopping cart functionality, and an inventory management dashboard**.',
        'Additionally, I **spearheaded the UI/UX design**, overseeing **layout design, branding (logo, color system), and user experience optimization** to create a cohesive and engaging platform.',
      ],
    },
    role: 'Full-Stack Developer & Project Manager',
    team: '3 Frontend, 3 Backend',
    contribution: {
      design: '100%',
      planning: '100%',
      management: '100%',
      development: '80%',
    },
    timeline: '24.02.19 ~ 24.03.02',
    link: 'https://bread-and-butter-silk.vercel.app/',
    challenge: {
      question: {
        ko: '각 나라의 요리를 배우고 싶은데, 어떤 책을 선택해야 할지 고민해 본 적이 있으신가요?',
        en: 'What if we could bring together cookbooks from around the world in one place?',
      },
      description: {
        ko: [
          '**각국의 다양한 요리**를 배우고 싶은 사람들에게 적절한 책을 찾는 일은 쉽지 않습니다. 서점마다 취급하는 책이 다르고, 온라인에서는 신뢰할 수 있는 리뷰를 찾기가 어렵습니다.',
          '이러한 고민에서 Bread & Butter가 시작되었습니다. **세계 각국의 요리책**을 한곳에 모아, 사용자가 **쉽게 탐색하고 구매할 수 있는 공간**을 만들고자 했습니다.',
        ],
        en: [
          '**Finding the right cookbook** can be challenging, as different bookstores offer varying selections, and online reviews are often unreliable.',
          'Bread & Butter was created to solve this problem. We wanted to build **a warm and inviting space where users can easily explore and purchase curated cookbooks from around the world.**',
        ],
      },
    },

    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'ESLint'],
      backend: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Mongoose', 'PM2'],
      tools: {
        label: 'Design Tools',
        items: ['Figma', 'Adobe Illustrator'],
      },
    },
    solution: {
      title: {
        ko: '**세계 각국의 요리책**을 한 곳에서 만날 수 있는 따뜻한 공간을 만들었습니다',
        en: "Creating a Warm Space Where the **World's Cookbooks Come Together**",
      },
      description: {
        ko: 'Bread & Butter는 **세계 요리 책을 한 곳에 모아 쉽게 탐색하고 구매할 수 있는 온라인 서점**입니다. 다양한 요리 문화와 레시피를 소개하여, 사용자가 새로운 맛을 발견하고 더 깊이 있는 요리 경험을 할 수 있도록 하였습니다. 편리한 쇼핑을 위해 **비회원 주문 조회, 회원 인증, 장바구니, 주문 관리, 실시간 재고 확인 기능**을 도입하였으며, 판매자가 서적을 효율적으로 관리할 수 있도록 **관리자 대시보드**를 구축하였습니다. ✨',
        en: 'Bread & Butter is an online bookstore that brings together cookbooks from around the world, allowing users to easily explore and purchase curated culinary books. By showcasing diverse culinary cultures and recipes, we help users discover new flavors and enrich their cooking experience. To ensure a seamless shopping experience, we have integrated **user authentication, a shopping cart, order management, and real-time inventory tracking.** Additionally, we have developed an **admin dashboard** that allows sellers to efficiently manage their book collections. Bread & Butter is more than just an online store—it is a **special place where food lovers can find inspiration, explore new recipes, and embark on a flavorful journey.** ✨',
      },
    },
    keyFeatures: {
      interface: [
        {
          title: {
            ko: '홈 & 상품 조회',
            en: 'Home & Product Browsing',
          },
          description: {
            ko: '**베스트 상품**을 한눈에 확인할 수 있으며, 상품 상세 페이지에서 가격과 정보를 조회할 수 있습니다. **재고 수량에 따라 품절 여부**가 표시되며, **원하는 수량을 선택**하여 장바구니에 담을 수 있습니다. 또한, 하단에는 추천 상품이 자동으로 로딩되며, 상품 정렬 및 페이지네이션 기능을 지원합니다.',
            en: 'Users can easily browse best-selling products and view detailed product information, including pricing. Out-of-stock indicators are displayed based on inventory, and users can adjust quantity before adding items to the cart. Recommended products are dynamically loaded, and sorting & pagination features enhance the shopping experience.',
          },
          image: '/images/work/bab/feature-01.gif',
          imageType: 'landscape',
        },
        {
          title: {
            ko: '장바구니 & 주문',
            en: 'Cart & Order',
          },
          description: {
            ko: '장바구니에서 상품 옵션을 변경할 수 있으며, 총 주문 금액에 따라 배송비가 자동으로 계산됩니다. 주문이 완료되면 **주문 번호가 제공되며, 비회원도 주문 번호를 통해 주문 내역을 조회할 수 있습니다.**',
            en: 'Users can modify product options in the cart, and shipping costs are automatically calculated based on the total order price. Upon checkout, users receive an **order number, allowing even guest users to track their orders with ease.**',
          },
          image: '/images/work/bab/feature-02.gif',
          imageType: 'landscape',
        },
        {
          title: {
            ko: '로그인 & 마이페이지',
            en: 'Login & My Page',
          },
          description: {
            ko: 'JWT Refresh Token을 이용한 **안전한 회원 인증 시스템**을 적용하였습니다. 로그인한 사용자만 마이페이지에 접근할 수 있으며, 관리자 역할을 가진 경우 **관리자 페이지에 접근할 수 있습니다.** ✨',
            en: 'A secure authentication system is implemented using JWT Refresh Token. Only logged-in users can access the My Page, while users with **admin roles** have exclusive access to the Admin page. ✨',
          },
          image: '/images/work/bab/feature-03.gif',
          imageType: 'landscape',
        },
        {
          title: {
            ko: '주문 관리 (관리자)',
            en: 'Order Management (Admin)',
          },
          description: {
            ko: '관리자는 **주문을 취소**할 수 있으며, **주문 상태를 변경할 수 있습니다.** 주문이 처리됨에 따라 상태가 업데이트되며, 모든 주문 이력을 한눈에 관리할 수 있습니다.',
            en: 'Admins can cancel orders, and instead of deleting order history, they can **update the order status.** As orders are processed, statuses are updated, allowing for seamless order tracking.',
          },
          image: '/images/work/bab/feature-04.gif',
          imageType: 'landscape',
        },
        {
          title: {
            ko: '상품 관리 (관리자)',
            en: 'Product Management (Admin)',
          },
          description: {
            ko: '새로운 상품을 추가하고, 기존 상품을 수정 및 삭제할 수 있습니다. 또한, 상품 이미지 업로드 기능을 통해 더욱 직관적인 상품 관리를 지원합니다. 📦',
            en: 'Admins can add, modify, and delete products, as well as upload product images, ensuring a seamless product management experience. 📦',
          },
          image: '/images/work/bab/feature-05.gif',
          imageType: 'landscape',
        },
        {
          title: {
            ko: '카테고리 관리 (관리자)',
            en: 'Category Management (Admin)',
          },
          description: {
            ko: '관리자는 새로운 카테고리를 추가하거나 기존 카테고리를 수정 및 삭제할 수 있습니다. 이를 통해 **상품을 보다 체계적으로 정리하고 탐색할 수 있도록 관리할 수 있습니다.**',
            en: 'Admins can add, edit, and delete categories, helping to **organize and streamline product navigation.**',
          },
          image: '/images/work/bab/feature-06.gif',
          imageType: 'landscape',
        },
      ],
    },
    mainImage: '/images/work/bab/main.png',
    featureImage: '/images/work/bab/feature.png',
    sections: [
      {
        type: 'wireframe',
        data: {
          image: '/images/work/bab/wireframe.png',
        },
      },
    ],
  },
  'omo-omo': {
    id: 'omo-omo',
    title: 'OmoOmo',
    subtitle: {
      ko: '메타버스 기반 반려동물 커뮤니티 플랫폼',
      en: 'Metaverse-Based Pet Community Platform',
    },
    description: {
      ko: [
        '오모오모는 삼성화재에서 운영하는 **메타버스 기반 반려동물 커뮤니티 플랫폼**으로, 출시 6개월 만에 가입자 10만 명을 돌파하며 큰 호응을 얻었습니다.',
        '사용자는 **펫 캐릭터를 커스터마이징**하고, 가상 공간에서 다른 사용자들과 소통하며 **미니게임**을 즐길 수 있습니다.',
        '**2차 오픈** 이후, 3D 기반의 캐릭터 활동 공간을 **웹(2D)으로 전환**하고, 게시판 카테고리를 세분화하여 정보 접근성을 높이는 리뉴얼을 진행하였습니다.',
        '또한, 활동량에 따른 **보상 시스템**을 도입하여 사용자들이 다양한 아이템을 획득하고, 펫 캐릭터 및 마이홈을 꾸미는 등의 재미 요소를 강화하였습니다.',
      ],
      en: [
        'OmoOmo is a metaverse-based pet community platform operated by Samsung Fire & Marine Insurance, surpassing 100,000 users within six months of its launch.',
        'Users can customize pet avatars, interact with others in virtual spaces, and enjoy various mini-games.',
        'Recently, the platform transitioned its 3D character interaction spaces into a 2D web-based environment, refining accessibility through categorized community boards.',
        'A reward system based on user activity was also introduced, allowing users to earn items, decorate pet avatars, and personalize their home spaces for a more engaging experience.',
      ],
    },
    role: 'UI Developer & Planner',
    team: '3 Frontend, 3 Backend',
    contribution: {
      research: '100%',
      planning: '80%',
      management: '40%',
      testing: '50%',
    },
    client: {
      ko: '삼성화재',
      en: 'Samsung Fire & Marine Insurance',
    },
    timeline: '2022.03 ~ 2023.05',
    link: '',
    challenge: {
      question: {
        ko: '메타버스 환경에서 반려동물 커뮤니티를 효과적으로 구축하려면?',
        en: 'How can we effectively build a pet community within a metaverse environment?',
      },
      description: {
        ko: [
          '반려동물을 키우는 사람들은 **다양한 정보를 공유하고 소통할 공간**을 원하지만, 기존 플랫폼들은 이러한 요구를 충분히 충족하지 못했습니다.',
          '오모오모는 반려동물 보호자들이 **메타버스 환경에서 자신만의 펫 캐릭터를 만들고, 다른 사용자들과 교류하며 유용한 정보를 공유할 수 있도록 기획**되었습니다.',
        ],
        en: [
          'Pet owners seek platforms where they can share knowledge and connect, but existing platforms often fall short.',
          'OmoOmo was designed to allow pet lovers to create their own avatars, interact with others, and exchange valuable information in a metaverse environment.',
        ],
      },
    },
    techStack: {
      frontend: ['React', 'SCSS', 'WebGL', 'Unity', 'Babylon.js', 'TypeScript'],
      backend: ['Node.js', 'Firebase', 'MongoDB'],
      tools: {
        label: 'Collaboration',
        items: ['Figma', 'Confluence', 'Jira', 'Photoshop'],
      },
    },
    keyFeatures: {
      interface: [
        {
          title: {
            ko: '펫 캐릭터 커스터마이징',
            en: 'Pet Character Customization',
          },
          description: {
            ko: '사용자는 다양한 액세서리와 스타일을 적용하여 자신만의 펫을 만들 수 있습니다.',
            en: 'Users can personalize their pets with various accessories and styles.',
          },
          image: '/images/work/omoomo/feature-01.webp',
          imageType: 'portrait',
        },
        {
          title: {
            ko: '메타버스 커뮤니티 공간',
            en: 'Metaverse Community Spaces',
          },
          description: {
            ko: '다양한 테마의 가상 공간에서 사용자 간 상호작용과 커뮤니티 활동을 지원합니다.',
            en: 'Users can interact and engage in themed virtual spaces.',
          },
          image: '/images/work/omoomo/feature-02.webp',
          imageType: 'portrait',
        },
        {
          title: {
            ko: '미니게임 & 소셜 활동',
            en: 'Mini-Games & Social Features',
          },
          description: {
            ko: '게임을 통해 반려동물과 상호작용하고, 다른 유저들과 협력하며 보상을 받을 수 있습니다.',
            en: 'Users can interact with their pets through games, collaborate with others, and earn rewards.',
          },
          image: '/images/work/omoomo/feature-03.webp',
          imageType: 'portrait',
        },
      ],
    },
    solution: {
      title: {
        ko: '반려동물 보호자들이 소통하고 정보를 공유할 수 있는 메타버스 커뮤니티 구축',
        en: 'Creating a Metaverse Community for Pet Owners to Connect and Share Information',
      },
      description: {
        ko: '반려동물과 함께하는 가상 공간을 조성하여 사용자들이 더욱 친근하고 자연스럽게 소통할 수 있도록 했습니다. 또한, 게임 요소를 접목하여 사용자 참여를 유도하고 지속적인 방문을 유도하는 환경을 구축했습니다.',
        en: 'We designed an engaging virtual space where pet owners can interact more naturally. By integrating game mechanics, we enhanced user engagement and encouraged repeat visits.',
      },
    },
    mainImage: '/images/work/omoomo/main.png',
    featureImage: '/images/work/omoomo/feature.png',
    sections: [
      {
        type: 'wireframe',
        data: {
          image: '/images/work/omoomo/wireframe.png',
        },
      },
      {
        type: 'taskFlow',
        data: {
          image: '/images/work/omoomo/taskflow.png',
        },
      },
      {
        type: 'informationArchitecture',
        data: {
          image: '/images/work/omoomo/ia.png',
        },
      },
    ],
    achievements: {
      highlights: [
        {
          ko: '출시 6개월 만에 가입자 10만 명 돌파 및 소셜 인기 앱 1위 등극',
          en: 'Reached 100,000 users within 6 months and ranked #1 in social app category.',
        },
        {
          ko: '누적 다운로드 수 56만 이상 기록',
          en: 'Surpassed 565,000 total downloads.',
        },
      ],
    },
    retrospective: [
      {
        question: {
          ko: '커뮤니티와 사용자 경험 중심의 기획',
          en: 'Community & User Experience-Focused Planning',
        },
        answer: {
          ko: [
            '단순한 정보 공유를 넘어 사용자가 지속적으로 활동할 수 있도록 커뮤니티와 보상 시스템을 설계하였습니다.',
          ],
          en: [
            'Beyond simple information sharing, we designed a community and reward system to encourage ongoing user engagement.',
          ],
        },
      },
      {
        question: {
          ko: '서비스 고도화 및 리뉴얼',
          en: 'Service Enhancement & Renewal',
        },
        answer: {
          ko: [
            '사용자 피드백을 반영하여 3D 캐릭터 공간을 웹(2D)으로 전환하고, 정보 접근성을 개선하는 리뉴얼을 진행하였습니다.',
          ],
          en: [
            'Based on user feedback, we transitioned the 3D character space to a 2D web environment and improved information accessibility.',
          ],
        },
      },
    ],
  },
  officener: {
    id: 'officener',
    title: 'Officener',
    subtitle: {
      ko: '오피스 관리 웹 통합 플랫폼',
      en: 'Office Management Web Integration Platform',
    },
    description: {
      ko: [
        '기존 모바일 앱으로만 제공되던 **오피스너 서비스를 웹으로 확장**하여 사용자들이 **멀티플랫폼**에서 편리하게 이용할 수 있도록 개발된 프로젝트입니다.',
        '**불편 접수 수정/삭제 및 이미지 업로드 컴포넌트 개발**을 담당했으며, MSW를 활용한 API Mocking으로 백엔드 개발과 병행하여 빠른 개발을 진행했습니다.',
        '**React Hook Form & Zod**를 활용한 폼 상태 관리 및 유효성 검증을 구현하여 사용자 경험을 개선했습니다.',
      ],
      en: [
        'A project that expands the existing Officener mobile app service to the web, allowing users to conveniently use it on multiple platforms.',
        'Developed complaint modification/deletion and image upload components, and implemented fast development in parallel with backend development using MSW for API Mocking.',
        'Improved user experience by implementing form state management and validation using React Hook Form & Zod.',
      ],
    },
    role: 'Frontend Developer',
    team: '5 Frontend',
    contribution: {
      development: '100%',
    },
    timeline: '24.09.02 ~ 24.09.26',
    challenge: {
      question: {
        ko: '모바일 앱의 기능을 웹에서 어떻게 최적화된 경험으로 제공할 수 있을까?',
        en: 'How can we provide optimized web experiences for mobile app features?',
      },
      description: {
        ko: [
          '기존 앱에서만 가능했던 기능을 웹 버전으로 확장하면서, **PC 환경에 맞는 UX 최적화**가 필요했습니다.',
          '**MSW를 활용한 API Mocking**으로 백엔드 개발 완료 전에 프론트엔드 개발을 진행하여 개발 속도를 향상시켰습니다.',
        ],
        en: [
          'While expanding features that were only available in the app to the web version, UX optimization for PC environment was needed.',
          'Improved development speed by proceeding with frontend development before backend completion using MSW for API Mocking.',
        ],
      },
    },
    techStack: {
      frontend: [
        'Next.js',
        'TypeScript',
        'TanStack Query',
        'Zustand',
        'React Hook Form',
        'Zod',
        'TailwindCSS',
        'Shadcn/UI',
      ],
      tools: {
        label: 'Collaboration',
        items: ['Git', 'Notion', 'Discord', 'MSW'],
      },
    },
    keyFeatures: {
      interface: [
        {
          title: {
            ko: '불편 접수 관리',
            en: 'Complaint Management',
          },
          subtitle: {
            ko: '불편사항 등록 및 처리 현황 관리',
            en: 'Registration and Status Management of Complaints',
          },
          description: {
            ko: '사용자는 **불편사항을 등록**하고 처리 상태를 확인할 수 있으며, **이미지 업로드**와 함께 상세 내용을 작성할 수 있습니다. 관리자와의 **답글을 통한 소통**이 가능하며, 기존 민원을 **수정하거나 삭제**할 수 있습니다.',
            en: 'Users can register complaints and check processing status, write details with image uploads, communicate through replies with administrators, and modify or delete existing complaints.',
          },
          image: '/images/work/officener/feature-01.png',
          imageType: 'landscape',
        },
        {
          title: {
            ko: '주차 등록 관리',
            en: 'Parking Registration Management',
          },
          subtitle: {
            ko: '주차 등록 및 처리 현황 관리',
            en: 'Registration and Status Management of Parking',
          },
          description: {
            ko: '사용자는 **불편사항을 등록**하고 처리 상태를 확인할 수 있으며, **이미지 업로드**와 함께 상세 내용을 작성할 수 있습니다. 관리자와의 **답글을 통한 소통**이 가능하며, 기존 민원을 **수정하거나 삭제**할 수 있습니다.',
            en: 'Users can register complaints and check processing status, write details with image uploads, communicate through replies with administrators, and modify or delete existing complaints.',
          },
          image: '/images/work/officener/feature-02.png',
          imageType: 'landscape',
        },
        {
          title: {
            ko: '자주 묻는 질문',
            en: 'FAQ',
          },
          subtitle: {
            ko: '자주 묻는 질문',
            en: 'Frequently Asked Questions',
          },
          description: {
            ko: '사용자는 **불편사항을 등록**하고 처리 상태를 확인할 수 있으며, **이미지 업로드**와 함께 상세 내용을 작성할 수 있습니다. 관리자와의 **답글을 통한 소통**이 가능하며, 기존 민원을 **수정하거나 삭제**할 수 있습니다.',
            en: 'Users can register complaints and check processing status, write details with image uploads, communicate through replies with administrators, and modify or delete existing complaints.',
          },
          image: '/images/work/officener/feature-03.png',
          imageType: 'landscape',
        },
      ],
    },
    solution: {
      title: {
        ko: '웹 환경에 최적화된 사용자 경험 제공',
        en: 'Providing User Experience Optimized for Web Environment',
      },
      description: {
        ko: '**React Hook Form과 Zod**를 활용한 폼 상태 관리로 사용자 입력 오류를 최소화하고, **MSW를 통한 API Mocking**으로 개발 효율성을 높였습니다. **TanStack Query**를 활용한 서버 상태 관리로 데이터 동기화 문제를 해결했습니다.',
        en: 'Minimized user input errors with form state management using React Hook Form and Zod, improved development efficiency through API Mocking with MSW, and resolved data synchronization issues with server state management using TanStack Query.',
      },
    },
    mainImage: '/images/work/officener/main.png',
    featureImage: '/images/work/officener/feature.png',
    sections: [],
    achievements: {
      highlights: [
        {
          ko: '멀티플랫폼 접근성 향상으로 사용자 편의성 증대',
          en: 'Increased user convenience through improved multi-platform accessibility',
        },
        {
          ko: 'MSW를 활용한 API Mocking으로 개발 생산성 향상',
          en: 'Improved development productivity using MSW for API Mocking',
        },
      ],
    },
  },
  'virtual-seoul-platform': {
    id: 'virtual-seoul-platform',
    title: 'Virtual Seoul Platform',
    subtitle: {
      ko: '서울 관광 가상 체험 및 온라인 컨퍼런스 플랫폼',
      en: 'Seoul Virtual Tourism & Online Conference Platform',
    },
    description: {
      ko: [
        '**서울 관광재단**과 협력하여 개발된 가상 체험 및 온라인 컨퍼런스 플랫폼으로, **전 세계 사용자들이 온라인으로 서울의 명소를 탐험하며 화상 회의를 진행**할 수 있도록 지원합니다.',
        '온라인 관광과 화상 회의 트렌드 분석 및 사용자 니즈 조사,반응형 테스트 및 다양한 기기에서의 사용자 경험 개선, **UI/UX 기획 및 마크업 개발을 담당**하며, **디자인 가이드라인 정립 및 개발 협업을 진행**했습니다.',
      ],
      en: [
        "A virtual tourism and online conference platform developed in collaboration with the **Seoul Tourism Organization**, allowing users worldwide to explore Seoul's landmarks and participate in virtual meetings.",
        'I was responsible for **UX/UI design and planning**, implementing **responsive design and WebGL-based 3D elements** for an immersive experience.',
        "Additionally, I planned and designed **a feature that enables users to conduct virtual meetings with Seoul's tourist attractions as their background**, offering a new way to experience online conferences.",
      ],
    },
    role: 'UI Developer & Planner',
    client: {
      ko: '서울 관광재단',
      en: 'Seoul Tourism Organization',
    },
    contribution: {
      research: '100%',
      planning: '100%',
      management: '50%',
      testing: '50%',
    },
    timeline: '2021.05 ~ 2021.11',
    challenge: {
      question: {
        ko: '비대면 시대에 온라인 관광과 컨퍼런스를 효과적으로 결합하는 방법은?',
        en: 'How can we effectively combine virtual tourism and online conferences in the era of remote communication?',
      },
      description: {
        ko: [
          '코로나19로 인해 대면 행사가 어려워지면서, 온라인 컨퍼런스와 가상 관광을 결합한 새로운 형태의 플랫폼이 필요했습니다.',
          'Virtual Seoul은 **서울의 주요 명소를 3D 환경에서 탐색하면서 실시간 온라인 화상 회의를 진행할 수 있는 기능**을 도입하였습니다.',
          '이를 통해 사용자는 단순한 화상 회의가 아닌, **서울을 배경으로 한 몰입형 회의 경험**을 제공받을 수 있도록 하였습니다.',
        ],
        en: [
          'With the challenges posed by COVID-19, there was a growing need for a platform that could integrate online conferences with virtual tourism.',
          'Virtual Seoul introduced **a feature that allows users to explore 3D-rendered landmarks of Seoul while participating in live video conferences.**',
          'This provided an immersive virtual meeting experience, enabling users to connect with others against the backdrop of iconic Seoul attractions.',
        ],
      },
    },
    techStack: {
      frontend: ['React', 'TypeScript', 'SCSS', 'WebGL', 'Babylon.js'],
      backend: ['Node.js', 'Express'],
      tools: {
        label: 'Collaboration',
        items: ['Figma', 'Confluence', 'Jira', 'Photoshop'],
      },
    },
    keyFeatures: {
      interface: [
        {
          title: {
            ko: 'E-컨퍼런스',
            en: 'E-Conference',
          },
          subtitle: {
            ko: '실시간 화상 회의 및 발표',
            en: 'Real-time Video Conference & Presentation',
          },
          description: {
            ko: '**서울의 랜드마크를 배경**으로 실시간 화상 회의를 진행할 수 있습니다. **발표자 화면 공유, 실시간 채팅, 참석자 관리** 등 컨퍼런스에 필요한 핵심 기능을 제공합니다.',
            en: 'Conduct real-time video conferences with **Seoul landmarks as backgrounds**. Features include **presenter screen sharing, live chat, and participant management**.',
          },
          image: '/images/work/vspe/feature-01.gif',
          imageType: 'landscape',
        },
        {
          title: {
            ko: '가상 전시',
            en: 'Virtual Exhibition',
          },
          subtitle: {
            ko: '3D 전시관 체험',
            en: '3D Exhibition Hall Experience',
          },
          description: {
            ko: '**WebGL 기반 3D 전시관**에서 기업 및 제품 정보를 탐색할 수 있습니다. **360도 뷰어**를 통해 전시품을 자세히 살펴볼 수 있으며, 담당자와 **실시간 문의**도 가능합니다.',
            en: 'Explore company and product information in a **WebGL-based 3D exhibition hall**. View exhibits in detail through **360-degree viewers** and make **real-time inquiries**.',
          },
          image: '/images/work/vspe/feature-02.gif',
          imageType: 'landscape',
        },
        {
          title: {
            ko: '1:1 비즈니스 상담',
            en: '1:1 Business Meeting',
          },
          subtitle: {
            ko: '화상 미팅 및 통역 서비스',
            en: 'Video Meeting & Interpretation Service',
          },
          description: {
            ko: '**실시간 통역 서비스**를 통해 언어 장벽 없이 비즈니스 미팅을 진행할 수 있습니다. **문서 공유 및 화면 공유** 기능으로 원활한 커뮤니케이션이 가능합니다.',
            en: 'Conduct business meetings without language barriers through **real-time interpretation services**. Enable smooth communication with **document and screen sharing** features.',
          },
          image: '/images/work/vspe/feature-03.gif',
          imageType: 'landscape',
        },
        {
          title: {
            ko: '네트워킹',
            en: 'Networking',
          },
          subtitle: {
            ko: '참가자 간 소통 및 교류',
            en: 'Communication & Exchange between Participants',
          },
          description: {
            ko: '**비즈니스 매칭 시스템**을 통해 관심 있는 기업과 연결될 수 있습니다. **명함 교환, 채팅, 화상 통화** 등 다양한 네트워킹 도구를 제공합니다.',
            en: 'Connect with interested companies through a **business matching system**. Provides various networking tools including **business card exchange, chat, and video calls**.',
          },
          image: '/images/work/vspe/feature-04.gif',
          imageType: 'landscape',
        },
        {
          title: {
            ko: '관리자 페이지',
            en: 'Admin Dashboard',
          },
          subtitle: {
            ko: '행사 및 참가자 관리',
            en: 'Event & Participant Management',
          },
          description: {
            ko: '**실시간 참석자 현황과 행사 진행 상황**을 모니터링할 수 있습니다. **통계 분석, 참가자 관리, 콘텐츠 업데이트** 등 행사 운영에 필요한 기능을 제공합니다.',
            en: 'Monitor **real-time attendance and event progress**. Provides features necessary for event operation including **statistical analysis, participant management, and content updates**.',
          },
          image: '/images/work/vspe/feature-05.gif',
          imageType: 'landscape',
        },
      ],
    },
    solution: {
      title: {
        ko: '가상 관광과 온라인 컨퍼런스를 결합한 새로운 비대면 경험',
        en: 'A New Remote Experience Combining Virtual Tourism and Online Conferences',
      },
      description: {
        ko: '서울의 주요 명소를 **3D 환경에서 탐색할 수 있도록 구현하여** 사용자 몰입도를 높였습니다. 또한, 사용자가 **관광지를 배경으로 실시간 화상 회의를 진행할 수 있는 기능**을 추가하여 새로운 방식의 비대면 컨퍼런스를 경험할 수 있도록 하였습니다. 반응형 디자인을 적용하여 **PC, 태블릿, 모바일에서도 원활한 환경**을 제공하였습니다.',
        en: 'We implemented **3D exploration for major Seoul landmarks**, enhancing user immersion. Additionally, we introduced a feature that allows users to conduct live video meetings with famous tourist sites as their background, creating a novel remote conference experience. A responsive design was applied to ensure a seamless experience across PC, tablet, and mobile devices.',
      },
    },
    mainImage: '/images/work/vspe/main.png',
    featureImage: '/images/work/vspe/feature.png',
    sections: [],
    video: {
      title: {
        ko: 'Virtual Seoul 시연 영상',
        en: 'Virtual Seoul Demo Video',
      },
      videoId: 'BvcZ15ySlUQ',
    },
    achievements: {
      highlights: [
        {
          ko: '서울 관광재단과 협업하여 진행된 프로젝트로, 글로벌 사용자를 위한 새로운 관광 및 컨퍼런스 경험을 제공하였습니다.',
          en: 'A collaborative project with the Seoul Tourism Organization, offering a novel tourism and conference experience for global users.',
        },
        {
          ko: 'WebGL을 활용한 3D 환경과 반응형 UI를 설계하여 다양한 디바이스에서 원활한 사용자 경험을 제공하였습니다.',
          en: 'Designed a WebGL-powered 3D environment and responsive UI to ensure a smooth user experience across multiple devices.',
        },
      ],
    },
    retrospective: [
      {
        question: {
          ko: '디자인과 개발의 균형',
          en: 'Balancing Design and Development',
        },
        answer: {
          ko: [
            'UI/UX 기획과 개발을 병행하면서 디자인 의도를 유지하면서도 기술적인 구현 가능성을 고려하는 것이 중요했습니다.',
          ],
          en: [
            'While managing both UX/UI planning and development, it was crucial to maintain design intent while ensuring technical feasibility.',
          ],
        },
      },
    ],
  },
};

export function getWorkById(id: string): Work | undefined {
  return works[id];
}
