import type { Work, WorkCategory } from '@/types/work';

export const works: Record<string, Work> = {
  veganro: {
    id: 'veganro',
    category: 'Development',
    logo: '/images/logo/veganro.png',
    title: 'Veganro',
    subtitle: {
      ko: '비건 장소 지도 서비스',
      en: 'Vegan Place Map Service',
    },
    description: {
      ko: [
        '비건 친화적인 식당과 카페를 **사용자의 채식 선호도와 위치 기반**으로 쉽게 찾을 수 있도록 돕는 **비건 지도 서비스**입니다.',
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
          '비건 식단을 실천하는 사람들은 외식할 때마다 적절한 식당을 찾는 데 어려움을 겪습니다. **일반 지도 서비스에서는 비건 친화적인 옵션이 명확하게 구분되지 않거나, 사용자 리뷰가 부족**하여 신뢰할 만한 정보를 얻기 어려운 경우가 많습니다.',
          'Veganro는 이러한 문제를 해결하기 위해 개발되었습니다. 비건 친화적인 장소들을 큐레이팅하여 사용자가 **위치 기반 검색 및 세부 채식 유형을 선택**하여 ** 자신의 채식 선호도에 맞는 장소**를 쉽고 빠르게 찾을 수 있도록 도왔습니다.',
        ],
        en: [
          'People who follow a vegan diet often struggle to find suitable restaurants when dining out. Existing restaurant search services **do not clearly differentiate vegan-friendly options, and reliable user-generated reviews are often lacking.**',
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
        en: 'Optimized for easy vegan place search based on current location and various filtering options.',
      },
      description: {
        ko: 'Veganro의 지도 기능은 사용자의 **현재 위치와 필터 옵션**을 반영하여 **맞춤형 검색 결과**를 제공합니다. 또한, 사용자는 **비건 장소를 제보하고 리뷰를 공유**하며 정보를 교류할 수 있습니다. 이를 통해 단순한 검색을 넘어 **비건 문화를 확산하고 지속 가능한 라이프스타일을 실천할 수 있는 환경을 조성**하였습니다.',
        en: "Veganro's map feature provides **customized search results** based on the user's **current location and filter options**. Users can also **report and share vegan places** and exchange information. Through this, we have created an environment that not only simplifies searching but also promotes **vegan culture and sustainable lifestyle practices.**",
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
            ko: 'SNS 로그인 및 이메일 로그인 지원',
            en: 'SNS Login and Email Login Support',
          },
          description: {
            ko: '**카카오톡 및 이메일 로그인**, **비회원 이용**이 가능하며, 회원가입 시 **비건 유형**을 선택할 수 있습니다. 비건 유형에 따라 **맞춤형 프로필 이미지**가 제공됩니다. //(*비회원은 마이페이지 접속, 장소 제보, 북마크, 리뷰 작성 등의 기능은 제한됩니다.)//',
            en: '**KakaoTalk, Email login and non-member access** are possible, and you can **select a vegan type when signing up. A personalized profile image is provided according to the vegan type. //(*Non-members are limited to accessing the My Page, reporting places, bookmarking, and writing reviews.)//',
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
            ko: '지도의 마커를 클릭 시, 상세 모달을 통해 **장소의 상세 페이지**로 이동합니다. 상단 **검색 창 클릭 시, 원하는 장소를 검색**해 볼 수 있으며, 현 위치로부터 **거리순 정렬**이 되어 가장 **가까운 비건 장소**를 찾을 수 있습니다.',
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
          description: {
            ko: '페르소나의 이용 목표를 정의하고, 청사진에 맞게 메뉴 구조도를 구성했습니다.',
            en: 'Defined the user goal and configured the menu structure diagram according to the blueprint.',
          },
        },
      },
      {
        type: 'taskFlow',
        data: {
          description: {
            ko: '사용자가 비건 친화적인 장소를 쉽게 찾고 공유할 수 있도록 하려면?',
            en: 'How can we help users find and share vegan-friendly places efficiently?',
          },
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
          ko: '지도 기반 검색 시스템 설계 및 최적화',
          en: 'How did you design and optimize the map-based search system?',
        },
        answer: {
          ko: [
            '비건로 프로젝트에서는 다양한 비건 식당 정보를 효율적으로 제공하는 것이 가장 핵심이었습니다. 이를 위해 사용자의 탐색 동선을 단계적으로 분석하며, 직관적인 카테고리 및 필터링 시스템을 구축하기 위해 팀원들과 시뮬레이션을 진행했습니다.',
            '특히, 메인 지도 화면에서 검색 페이지로 이어질 때 필터 항목을 전역적으로 유지하기 위한 방법을 고민하며, 전체 화면 흐름에서 사용자가 필요로 하는 요소들을 분석하는 과정을 팀원 전체가 검토하였습니다. 이를 해결하기 위해 기술적으로 어떤 방법이 적절한지를 고민했고, 상태 관리 라이브러리인 Recoil을 도입하였습니다. 이를 통해 전역 상태를 활용하여 필터 상태를 유지할 수 있도록 구현하였습니다.',
          ],
          en: [
            'The challenge was to efficiently provide information about various vegan restaurants. Through the process of designing the information hierarchy and navigation UX, we analyzed user navigation paths and built an intuitive category and filtering system.',
            'While transitioning from the main map screen to the search page, we sought a way to persist filter selections globally. To address this, we analyzed the overall screen flow, considered the most suitable technical approach, and introduced Recoil for state management. This ensured that filters remained consistent across different screens.',
          ],
        },
      },
      {
        question: {
          ko: '효율적인 디자인-개발 협업 전략',
          en: 'What strategies did you use to enhance collaboration between design and development?',
        },
        answer: {
          ko: [
            '프로젝트 진행 과정에서 디자인 시안과 실제 개발 결과물 간의 차이를 최소화하기 위해 디자인 시스템과 컴포넌트 기반 UI 개발 방식을 도입했습니다.',
            '디자인 시스템을 통해 디자인 요소를 재사용 가능하게 하고, 컴포넌트 기반 UI 개발 방식을 통해 디자인 일관성을 유지하며 개발 효율성을 향상시켰습니다.',
            '또한, 새로운 기술을 단기간에 적용해야 하는 상황에서 팀원들의 러닝 커브를 최소화할 수 있도록 적절한 개발 언어와 라이브러리를 선택하는 과정도 중요했습니다. 이를 위해 익숙한 기술 스택을 우선 고려하면서도, 프로젝트 요구사항에 맞춰 적절한 도구를 도입하는 방향으로 진행했습니다.',
          ],
          en: [
            'To minimize the gap between design mockups and actual development results, we introduced a design system and component-based UI development approach.',
            'Through the design system, we made design elements reusable, maintained design consistency, and improved development efficiency.',
            'Additionally, when integrating new technologies within a short time frame, we prioritized reducing the learning curve for team members. This involved selecting development languages and libraries that balanced familiarity with adaptability to project requirements.',
          ],
        },
      },
    ],
  },
  'bread-and-butter': {
    id: 'bread-and-butter',
    category: 'Development',
    logo: '/images/logo/bab.png',
    title: 'Bread & Butter',
    subtitle: {
      ko: '요리 서적 온라인 상점',
      en: 'Culinary Book Online Shop',
    },
    description: {
      ko: [
        'Bread & Butter는 다양한 국가의 요리 서적과 레시피 북을 제공하는 **요리 서적 전문 전자상거래 플랫폼**입니다.',
        '**프로젝트 매니저**이자 **백엔드 개발자**로 참여하여, **상품 조회, 장바구니, 재고 관리 대시보드** 등 주요 기능을 설계하고 구현했습니다.',
        '**UI/UX 디자인을 총괄**하며, **전체 화면 구성 및 브랜드 아이덴티티**//(로고, 컬러 시스템)// **설계**를 통해 일관된 사용자 경험을 구축했습니다.',
      ],
      en: [
        'Bread & Butter is a **specialized e-commerce platform for culinary books**, offering a diverse selection of cookbooks and recipe collections from around the world.',
        'As a **Project Manager and Backend Developer**, I led the development of key features such as **product browsing, shopping cart functionality, and an inventory management dashboard**.',
        'Additionally, I **spearheaded the UI/UX design**, overseeing **layout design, branding (logo, color system), and user experience optimization** to create a cohesive and engaging platform.',
      ],
    },
    role: 'Backend Developer & Project Manager',
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
            ko: '**베스트 상품**을 한눈에 확인할 수 있으며, 상품 상세 페이지에서 가격과 정보를 조회할 수 있습니다. **재고 수량에 따라 품절 여부**가 표시되며, **원하는 수량을 선택하여 장바구니**에 담을 수 있습니다. 또한, 하단에는 추천 상품이 자동으로 로딩되며, 상품 정렬 및 페이지네이션 기능을 지원합니다.',
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
        type: 'productRequirement',
        data: {
          image: '/images/work/bab/product-requirement.png',
          description: {
            ko: 'CRUD 별로 기능을 나눈 뒤, 각 기능에 필요한 요구 사항들과 중요도를 정했습니다. 또한 각 페이지의 권한//(전체, 회원, 관리자)// 을 부여하고 기능의 중요도를 파악해 우선 순위를 정했습니다.',
            en: 'I divided the pages based on CRUD, then listed the necessary requirements and prioritized them. I also set the page permissions (all, member, admin) and prioritized the importance of each function to determine the priority. This allowed the backend team to write an API specification document and divide the work.',
          },
        },
      },
      {
        type: 'database',
        data: {
          image: '/images/work/bab/database.png',
          description: {
            ko: '데이터 모델을 정의할 때, **그룹핑할 수 있는 항목을 세분화하여 구조화된 데이터 모델을 설계**했습니다. 이를 통해 데이터 간의 관계를 명확하게 정리하고, 확장성과 유지보수성을 고려한 체계를 마련하였습니다. 또한, 사용자의 행동 패턴을 분석하여 필요한 데이터 항목을 도출하고, **API의 입력 및 출력 형식을 사전에 정의하여** 백엔드 팀이 원활하게 개발할 수 있도록 지원했습니다. 이를 바탕으로 백엔드 팀원들이 [API 명세서](https://caring-sidecar-47f.notion.site/API-0a4c856d1aea45e1ba70f1718a279906)를 작성하고, 데이터베이스를 구축할 수 있도록 협업하였습니다.',
            en: 'When defining the data model, I structured and categorized the data attributes to create a well-organized and scalable data architecture. This helped establish clear relationships between data entities, ensuring maintainability and future expansion. Additionally, I analyzed user behavior patterns to determine essential data fields and **predefined input and output formats for APIs**, allowing the backend team to develop with clear specifications. Based on this, the backend team was able to build the database and draft the API specification document efficiently.',
          },
        },
      },
      {
        type: 'taskFlow',
        data: {
          image: '/images/work/bab/taskflow.png',
          description: {
            ko: '회원 여부에 따라 분기되는 흐름을 정의하고, 유저의 목적에 따른 페이지 이동과 행동 단계를 구조적으로 설계하여 직관적인 사용자 경험을 제공했습니다.',
            en: 'Defined the flow based on user purpose and membership status, structuring page transitions and action steps to provide an intuitive user experience.',
          },
        },
      },
    ],
    retrospective: [
      {
        question: {
          ko: 'API 문서화 없이 협업하는 과정에서 어떤 문제를 겪었으며, 어떻게 개선했는가?',
          en: 'What issues were encountered while collaborating without API documentation, and how were they improved?',
        },
        answer: {
          ko: [
            '프로젝트 초기에는 API 명세를 별도로 문서화하지 않고, MongoDB 모델을 기반으로 직접 프론트엔드와 협업을 진행했습니다. 이 방식은 빠르게 개발을 진행하는 데는 유리했지만, API 응답 형식이 불명확하여 프론트엔드에서 데이터 처리 시 혼선이 발생하는 문제가 있었습니다. 이를 해결하기 위해, MongoDB 모델을 기준으로 API 응답 예시(JSON 형태)를 정리하여 공유하였고, API 엔드포인트별로 필요한 필드와 데이터 타입을 정리한 간단한 Notion 문서를 만들어 프론트엔드와의 소통을 원활하게 했습니다.',
            '또한, 예상치 못한 데이터 누락을 방지하기 위해 기본값을 설정하고, 필수 필드를 체크하는 데이터 검증 로직을 추가하였습니다. 이 과정을 통해, API 문서화가 없을 경우 협업 속도가 느려질 수 있으며, 최소한의 명세라도 정리해 공유하는 것이 개발 효율성을 높이는 데 필수적이라는 점을 깨달았습니다. 향후에는 API 문서화 툴을 도입하거나, 초기 기획 단계에서 응답 형식을 더 명확하게 정리하는 방식을 적용하고 싶습니다.',
          ],
          en: [
            'In the early stages of the project, we collaborated with the frontend team directly based on the MongoDB model without separately documenting the API specifications. This approach allowed for rapid development but led to issues where the API response format was unclear, causing confusion in frontend data processing.',
            'To address this, we structured and shared API response examples in JSON format based on the MongoDB model. We also created a simple Notion document outlining the required fields and data types for each API endpoint to facilitate better communication with the frontend team. Additionally, to prevent unexpected data loss, we implemented default values and added validation logic to check required fields.',
            'Through this process, we realized that the lack of API documentation could slow down collaboration, and even a minimal set of specifications can significantly improve development efficiency. Moving forward, I aim to adopt an API documentation tool or establish a clearer response format during the initial planning phase.',
          ],
        },
      },
    ],
  },
  'omo-omo': {
    id: 'omo-omo',
    category: 'Design',
    title: 'OmoOmo',
    subtitle: {
      ko: '메타버스 기반 반려동물 커뮤니티 플랫폼',
      en: 'Metaverse-Based Pet Community Platform',
    },
    description: {
      ko: [
        '오모오모는 삼성화재에서 운영하는 **메타버스 기반 반려동물 커뮤니티 플랫폼**으로, 출시 6개월 만에 가입자 10만 명을 돌파하며 큰 호응을 얻었습니다.',
        '사용자는 **펫 캐릭터를 커스터마이징**하고, 가상 공간에서 다른 사용자들과 소통하며 **미니게임**을 즐길 수 있습니다.',
        '2차 오픈 이후, 3D 기반의 캐릭터 활동 공간을 **웹(2D)으로 전환**하고, 게시판 카테고리를 세분화하여 정보 접근성을 높이는 리뉴얼을 진행하였습니다.',
      ],
      en: [
        'OmoOmo is a metaverse-based pet community platform operated by Samsung Fire & Marine Insurance, surpassing 100,000 users within six months of its launch.',
        'Users can customize pet avatars, interact with others in virtual spaces, and enjoy various mini-games.',
        'Recently, the platform transitioned its 3D character interaction spaces into a 2D web-based environment, refining accessibility through categorized community boards.',
      ],
    },
    role: 'UI Developer & Planner',
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
          '반려동물 보호자들은 **다양한 정보를 공유하고 소통할 공간**을 원하지만, 기존 플랫폼들은 이러한 요구를 충분히 충족하지 못했습니다.',
          '메타버스 환경에서 사용자가 실질적인 소속감을 느낄 수 있도록 **펫 아바타와 마이홈 시스템을 도입**하여 자신만의 공간을 만들고 꾸밀 수 있도록 기획하였습니다.',
          '또한, **MZ세대 사용자의 참여를 유도하기 위해 게임 요소를 결합**하여 일일 퀘스트, 랭킹 시스템, 보상형 미션을 추가하였고, 이를 통해 지속적인 재방문율을 높였습니다.',
          '커뮤니티 활성화를 위해 **게시판을 세분화**하고, 반려동물 정보 공유와 **사용자 간 소셜 네트워크 기능을 강화**하여 실질적인 정보 교류와 관계 형성을 돕는 플랫폼으로 발전시켰습니다.',
        ],
        en: [
          'Pet owners seek platforms where they can share knowledge and connect, but existing platforms often fall short.',
          'To foster a sense of belonging in a metaverse environment, we introduced **pet avatars and home customization features**, allowing users to create and personalize their virtual spaces.',
          'To encourage engagement among MZ users, **we integrated gamification elements** such as daily quests, ranking systems, and reward-based missions, increasing retention and repeat visits.',
          'Community engagement was further strengthened by **categorizing discussion boards** and enhancing social networking features to facilitate meaningful interactions and knowledge-sharing among users.',
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
    keyFeatureSlider: {
      images: [
        '/images/work/omoomo/feature-01.webp',
        '/images/work/omoomo/feature-02.webp',
        '/images/work/omoomo/feature-03.webp',
        '/images/work/omoomo/feature-03.webp',
        '/images/work/omoomo/feature-05.webp',
        '/images/work/omoomo/feature-06.webp',
        '/images/work/omoomo/feature-07.webp',
        '/images/work/omoomo/feature-08.webp',
      ],
    },
    solution: {
      title: {
        ko: '반려동물과 함께하는 몰입형 메타버스 커뮤니티',
        en: 'An Immersive Metaverse Community for Pet Owners',
      },
      description: {
        ko: '오모오모는 반려동물과 보호자가 함께 소통하고 정보를 나눌 수 있는 **메타버스 기반 커뮤니티**로 기획되었습니다. 펫 헬스케어, 커뮤니티, 그리고 **게임화 요소(Gamification)**를 결합하여 사용자가 적극적으로 참여하고 지속적으로 방문할 수 있도록 유도했습니다. 또한, **반려동물 보호자들의 실제 니즈를 반영**하여, 200명 이상의 사용자 리서치를 기반으로 펫 아바타 커스터마이징, 마이홈 공간 꾸미기, 랭킹 시스템 등 다양한 기능을 개발했습니다. 이러한 요소들은 사용자 경험을 극대화하고, 반려동물과 보호자가 함께하는 **종합 라이프스타일 플랫폼**으로 자리 잡을 수 있도록 발전시켰습니다.',
        en: 'OmoOmo was designed as a **metaverse-based community** where pet owners can interact, share information, and engage with their virtual pets. By integrating pet healthcare, community features, and **gamification elements**, we encouraged active participation and increased user retention. Additionally, we conducted extensive **user research with over 200 participants** to develop features that genuinely address the needs of pet owners. This included pet avatar customization, MyHome space decoration, and a ranking system. These features were carefully crafted to enhance user experience and establish OmoOmo as a **comprehensive lifestyle platform** for both pets and their owners.',
      },
    },
    mainImage: '/images/work/omoomo/main.png',
    featureImage: '/images/work/omoomo/feature.png',
    sections: [
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
      {
        type: 'productRequirement',
        data: {
          image: '/images/work/omoomo/product-requirement.png',
          description: {
            ko: '프로젝트 관리는 Jira와 엑셀을 활용하여 진행하였으며, 간트 차트를 제작하여 일정과 진행 상황을 시각적으로 정리했습니다. 또한, 프로젝트 매니저(PM)를 보조하며 각 주요 화면별 테스트 시나리오를 작성하였고, 이를 기반으로 체계적인 테스트를 수행하여 품질을 검증하였습니다.',
            en: 'Project management was conducted using Jira and Excel, with Gantt charts created to visually organize schedules and progress. Additionally, I assisted the project manager (PM) by drafting test scenarios for key screens and carried out structured testing based on these scenarios to ensure quality assurance.',
          },
        },
      },
      {
        type: 'uiSpecification',
        data: {
          description: {
            ko: '상세 화면 설계서는 요구 사항 분석을 바탕으로 작성되었으며, 사용자 경험(UX)과 기능적 요구사항을 고려하여 각 화면의 구성 요소와 동작을 구체적으로 정의하였습니다.',
            en: 'The detailed screen design document was created based on requirements analysis, defining the layout and functionality of each screen while considering user experience (UX) and functional requirements.',
          },
          image: '/images/work/omoomo/ui-specification.png',
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
          ko: '프로젝트 기획부터 출시 및 고도화까지의 경험',
          en: 'Experience in All Stages from Planning to Growth and Operation',
        },
        answer: {
          ko: [
            '오모오모 프로젝트는 **단순한 기능 개발이 아닌, 서비스의 방향성과 정체성을 설정하는 과정부터 참여한 경험**이었습니다. 네이밍부터 캐릭터 기획, 가상 공간의 테마 디자인, 서비스 정책 수립 등 다양한 역할을 수행하며 **프로젝트의 전반적인 흐름을 이해**할 수 있었습니다.',
            '특히, 프로젝트의 출시뿐만 아니라 운영 및 고도화 과정까지 경험하며, 실사용자의 피드백을 반영하여 지속적으로 서비스를 개선하는 과정이 중요하다는 것을 깨달았습니다.',
            '이 과정에서 **유관 부서와의 협업**을 통해 마케팅, 사용자 지원, 기술 개선 등의 다양한 업무를 경험할 수 있었으며, 서비스 운영에서 발생하는 예기치 않은 문제를 해결하는 역량을 키울 수 있었습니다.',
          ],
          en: [
            'OmoOmo was not just about feature development but about defining the direction and identity of the service from the start. I was involved in every aspect, from naming and character planning to designing virtual spaces and setting service policies, **gaining a comprehensive understanding of the project lifecycle**. Beyond the initial launch, I also gained experience in maintaining and enhancing the service by continuously incorporating real user feedback to improve functionality and user experience.',
            '**Through collaboration with various departments**, I was exposed to marketing strategies, user support processes, and technical optimizations, allowing me to develop problem-solving skills in live service operations.',
          ],
        },
      },
      {
        question: {
          ko: '메타버스 환경에서의 사용자 경험 디자인',
          en: 'User Experience Design in the Metaverse',
        },
        answer: {
          ko: [
            '**메타버스 환경**에서의 UX는 기존 웹이나 앱과 다르게, **사용자의 몰입감**과 **상호작용 방식**이 중요한 요소로 작용했습니다. **펫 캐릭터의 움직임**과 **감정 표현**, **가상 공간에서의 탐색 경험**을 설계하며, 유저들이 자연스럽게 **커뮤니티에 참여**하고 머물 수 있는 환경을 만드는 것이 핵심 과제였습니다.',
            '이를 위해 200명 이상의 사용자 리서치를 바탕으로 **캐릭터 디자인**과 **공간 테마**를 개선하며, **현실감**과 **재미**를 동시에 제공하는 UX를 설계하는 경험을 쌓았습니다.',
            '또한, **가상 환경에서의 사용자 동선**과 **인터랙션 방식**을 최적화하여, 초보자도 쉽게 적응할 수 있도록 **내비게이션 시스템**과 **직관적인 UI 요소**를 배치하는 데 중점을 두었습니다.',
          ],
          en: [
            'UX design in the **metaverse** differs from traditional web or app design, as **immersion** and **interaction methods** play a crucial role.',
            'While designing **pet character movements**, **emotional expressions**, and **navigation within virtual spaces**, we focused on creating an environment where users naturally engage and stay in the community.',
            'By conducting research with over 200 users, we refined **character design** and **spatial themes**, ensuring a balance between **realism** and **entertainment** in the user experience.',
            'Additionally, we optimized **user flows** and **interaction patterns** within the **virtual space** to ensure that even first-time users could easily navigate the environment through **intuitive UI elements** and a well-structured **navigation system**.',
          ],
        },
      },
    ],
  },
  officener: {
    id: 'officener',
    category: 'Development',
    title: 'Officener',
    subtitle: {
      ko: '오피스너 웹 통합 플랫폼',
      en: 'Officener Web Platform',
    },
    description: {
      ko: [
        '기존 모바일 앱으로만 제공되던 **오피스너 서비스를 웹으로 확장**하여 사용자들이 **멀티플랫폼**에서 편리하게 이용할 수 있도록 개발된 프로젝트입니다.',
        '**불편 접수 수정/삭제 및 이미지 업로드 컴포넌트 개발**을 담당했으며, API 부재인 상황에서 MSW를 활용한 API Mocking으로 빠른 개발을 진행했습니다.',
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
        'Zod',
        'React Hook Form',
        'TailwindCSS',
        'Shadcn/UI',
        'MSW',
      ],
      tools: {
        label: 'Collaboration',
        items: ['Git', 'Notion', 'Discord', 'Linear', 'Figma'],
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
          ko: 'API 부재 시, MSW를 활용한 API Mocking으로 개발 생산성 향상',
          en: 'Improved development productivity using MSW for API Mocking',
        },
      ],
    },
  },
  'virtual-seoul-platform': {
    id: 'virtual-seoul-platform',
    category: 'Design',
    title: 'Virtual Seoul Platform',
    subtitle: {
      ko: '3D 가상 관광 플랫폼',
      en: '3D Virtual Tourism Platform',
    },
    description: {
      ko: [
        '**서울 관광재단**과 협력하여 개발된 가상 체험 및 온라인 컨퍼런스 플랫폼으로, **전 세계 사용자들이 온라인으로 서울의 명소를 탐험하며 화상 회의를 진행**할 수 있도록 지원합니다.',
        '온라인 관광과 화상 회의 트렌드 분석 및 사용자 니즈 조사, 반응형 테스트 및 다양한 기기에서의 사용자 경험 개선, **UI/UX 기획 및 마크업 개발을 담당**하며, **디자인 가이드라인 정립 및 개발 협업을 진행**했습니다.',
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
          ko: '‘2021 버추얼 마이스 쇼’에서 8개국 81개 기업 및 26개 국내 기업이 참여하여 1:1 화상 비즈니스 상담 진행',
          en: "Participated in the '2021 Virtual Myeongdong Show' with 81 companies from 8 countries and 26 domestic companies, conducting 1:1 video business consultations.",
        },
        {
          ko: "'제66회 국제약학대학생연합 온라인 세계총회' 92개국 2,000여 명의 약학대학생 참여",
          en: "Participated in the '66th International Pharmaceutical Student Conference' with 2,000 participants from 92 countries",
        },
        {
          ko: '행사 주최자의 커스터마이징 가능한 글로벌 가상 이벤트 플랫폼 구현',
          en: 'Implemented a customizable global virtual event platform for event organizers',
        },
      ],
    },
    sections: [],
    retrospective: [
      {
        question: {
          ko: '비대면 환경에서의 UX 최적화 경험',
          en: 'Optimizing UX in a Remote Environment',
        },
        answer: {
          ko: [
            'Virtual Seoul 2.0 프로젝트에 참여하면서, UI/UX 기획과 개발을 병행하며 **디자인 의도를 유지하면서도 기술적인 구현 가능성을 고려하는 것**이 중요하다는 것을 경험했습니다. 특히, **가상공간과 어우러지는 UI 구성**을 발전시키는 데 집중하였으며, 단순한 웹사이트 기획이 아닌 몰입형 인터페이스 설계를 위한 다양한 시도를 진행하였습니다.',
            '콘텐츠 관리자 시스템(CMS)을 도입하여 행사 주최자가 개발자 도움 없이도 플랫폼을 맞춤화할 수 있도록 설계하였으며, 이를 통해 사용자의 편의성을 크게 향상시켰습니다. 또한, 가상 전시 및 PSA(1:1 비즈니스 상담) 기능을 추가하여 플랫폼 활용 범위를 확장하고, 다양한 형태의 온라인 행사를 지원할 수 있도록 개선하였습니다.',
            '이러한 경험을 통해 가상 공간에서의 사용자 경험을 극대화하는 방법을 탐색할 수 있었으며, 앞으로도 보다 자연스럽고 직관적인 인터랙션을 설계하는 데 집중할 것입니다.',
          ],
          en: [
            'Through the Virtual Seoul 2.0 project, I gained experience **in balancing UX/UI design with technical feasibility to maintain design intent while ensuring smooth development**. In particular, I **focused on evolving UI design that seamlessly integrates with virtual spaces, moving beyond traditional website planning to create immersive interface experiences**. We introduced a Content Management System (CMS) that enabled event organizers to customize the platform without developer assistance, significantly improving user convenience. Additionally, we expanded the platform’s capabilities by integrating virtual exhibitions and 1:1 business consultations (PSA), allowing a wider range of online events to be supported.',
            'This experience allowed me to explore ways to enhance user experiences in virtual environments, and I will continue to focus on designing more natural and intuitive interactions in future projects.',
          ],
        },
      },
    ],
  },
};

export const WORK_CATEGORIES: WorkCategory[] = ['Design', 'Development'];

export function getWorkById(id: string): Work | undefined {
  return works[id];
}
