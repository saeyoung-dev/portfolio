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
        '사용자가 자신의 식단 선호도와 위치에 맞는 비건 친화적인 식당과 카페 등을 쉽게 찾을 수 있도록 도와주는 **비건 장소 지도 서비스**입니다.',
        '프론트엔드 개발자로서 **지도 API 연결, 위치 기반 검색, 필터 기능** 등을 구현하여 사용자 편의성을 높였습니다.',
      ],
      en: [
        'Veganro is a map service that helps users find vegan-friendly places while promoting a sustainable lifestyle.',
        'As a frontend developer, I implemented key features such as the **main map functionality, location-based search, and advanced filtering options** to enhance user experience.',
      ],
    },
    role: 'Frontend Developer & Designer',
    team: '4 FE, 2 BE / 1 Designer',
    type: 'Team Project',
    timeline: '24.04.01 ~ 24.04.19',
    link: 'https://veganro.vercel.app/',
    challenge: {
      question: {
        ko: '사용자가 비건 친화적인 장소를 쉽게 찾고 공유할 수 있도록 하려면?',
        en: 'How can we help users find and share vegan-friendly places efficiently?',
      },
      description: {
        ko: [
          '비건 식단을 실천하는 사람들은 외식할 때마다 적절한 식당을 찾는 데 어려움을 겪습니다. 기존 음식점 검색 서비스에서는 비건 친화적인 옵션이 명확하게 구분되지 않거나, 사용자 리뷰가 부족하여 신뢰할 만한 정보를 얻기 어려운 경우가 많습니다.',
          'Veganro는 이러한 문제를 해결하기 위해 개발되었습니다. 현 위치 기반 검색과 세부 필터 기능을 제공하여 사용자가 자신의 식단 선호도에 맞는 비건 친화적인 장소를 쉽고 빠르게 찾을 수 있도록 도왔습니다.',
        ],
        en: [
          'People who follow a vegan diet often struggle to find suitable restaurants when dining out. Existing restaurant search services do not clearly differentiate vegan-friendly options, and reliable user-generated reviews are often lacking.',
          'Veganro was developed to address this issue. By providing location-based search and detailed filtering options, users can quickly and easily find places that match their dietary preferences.',
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
            ko: '지도의 마커를 클릭하면 모달을 통해 장소의 상세 페이지로 이동합니다. 상단 검색창 클릭 시, 원하는 장소를 검색해 볼 수 있으며, 현 위치로부터 거리순 정렬이 되어 가장 가까운 비건 장소를 찾을 수 있습니다.',
            en: 'You can easily search for places you want by finding vegan places based on your current location and various filters.',
          },
          image: '/images/work/veganro/feature-02.gif',
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
            ko: '현 위치와의 거리, 위치, 연락처, 영업시간, SNS URL 등의 정보를 제공합니다. 해당 레스토랑에 대한 리뷰를 작성, 수정, 삭제할 수 있고 다른 사용자의 리뷰를 신고할 수 있습니다. 무한 스크롤을 통해 빠른 리뷰 로딩 속도를 제공합니다.',
            en: "Provides information such as distance from the current location, location, contact information, business hours, and SNS URL. Users can write, modify, and delete reviews about the restaurant, and report other users' reviews. Infinite scroll provides fast review loading speed.",
          },
          image: '/images/work/veganro/feature-03.gif',
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
            ko: '새로운 채식 장소를 제보할 수도 있으며, 주소 검색을 통해 해당 장소의 위치를 지번과 도로명 주소로 가져올 수 있습니다.',
            en: 'Users can report new vegan places and search for addresses to get the location of the place in both street and block numbers.',
          },
          image: '/images/work/veganro/feature-04.gif',
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
            ko: '회원이 제보한 장소, 작성한 리뷰, 북마크 목록을 무한 스크롤을 통해 조회할 수 있습니다. 프로필 정보 수정이 가능하며, 사용자가 선택한 비건 유형에 따라 프로필 이미지가 변경됩니다.',
            en: 'Users can view their reported places, written reviews, and bookmarked places through infinite scrolling. The profile can also be modified, and the profile image changes according to the vegan type selected by the user.',
          },
          image: '/images/work/veganro/feature-05.gif',
        },
      ],
    },
    mainImage: '/images/work/veganro/main-01.png',
    featureImage: '/images/work/veganro/main-02.png',
    sections: [
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
        'Bread & Butter는 **요리 서적 전문 전자상거래 플랫폼**으로, 다양한 나라의 요리 서적과 레시피 북을 제공합니다.',
        '백엔드 개발자이자 프로젝트 매니저로서, 상품 조회, 장바구니 기능, 효율적인 재고 관리를 위한 종합 관리자 대시보드 등의 주요 기능 개발을 주도했습니다.',
      ],
      en: [
        'Bread & Butter is a specialized e-commerce platform dedicated to culinary enthusiasts, offering a curated collection of cookbooks and culinary literature.',
        'As the backend developer and project manager, I led the development of core features including user authentication, shopping cart functionality, and a comprehensive admin dashboard for efficient inventory management.',
      ],
    },
    role: 'Backend Developer & Project Manager',
    team: '6 members (3 FE, 3 BE)',
    type: 'Team Project',
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
          '이러한 고민에서 Bread & Butter가 시작되었습니다. **세계 각국의 요리책**을 한곳에 모아, 사용자가 **쉽게 탐색하고 구매할 수 있도록 돕는 따뜻한 공간**을 만들고자 했습니다.',
        ],
        en: [
          '**Finding the right cookbook** can be challenging, as different bookstores offer varying selections, and online reviews are often unreliable.',
          'Bread & Butter was created to solve this problem. We wanted to build **a warm and inviting space where users can easily explore and purchase curated cookbooks from around the world.**',
        ],
      },
    },

    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'ESLint'],
      backend: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Mongoose'],
      tools: {
        label: 'Design Tools',
        items: ['Figma', 'Adobe Illustrator'],
      },
    },
    solution: {
      title: {
        ko: '**세계 각국의 요리책**을 한 곳에서 만날 수 있는 따뜻한 공간을 만들었습니다',
        en: 'Creating a Warm Space Where the **World’s Cookbooks Come Together**',
      },
      description: {
        ko: 'Bread & Butter는 **세계 각국의 요리 책을 한곳에 모아 쉽게 탐색하고 구매할 수 있는 온라인 서점**입니다. 다양한 요리 문화와 레시피를 소개하여, 사용자가 새로운 맛을 발견하고 더 깊이 있는 요리 경험을 할 수 있도록 하였습니다. 편리한 쇼핑을 위해 **사용자 인증, 장바구니, 주문 관리, 실시간 재고 확인 기능**을 도입하였으며, 판매자가 서적을 효율적으로 관리할 수 있도록 **관리자 대시보드**를 구축하였습니다. ✨',
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
            ko: '**베스트 상품**을 한눈에 확인할 수 있으며, 상품 상세 페이지에서 가격과 정보를 조회할 수 있습니다. **재고 수량에 따라 품절 여부**가 표시되며, 원하는 수량을 선택하여 장바구니에 담을 수 있습니다. 또한, 하단에는 추천 상품이 자동으로 로딩되며, 상품 정렬 및 페이지네이션 기능을 지원합니다.',
            en: 'Users can easily browse best-selling products and view detailed product information, including pricing. Out-of-stock indicators are displayed based on inventory, and users can adjust quantity before adding items to the cart. Recommended products are dynamically loaded, and sorting & pagination features enhance the shopping experience.',
          },
          image: '/images/work/bab/feature-01.png',
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
          image: '/images/work/bab/feature-02.png',
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
          image: '/images/work/bab/feature-03.png',
        },
        {
          title: {
            ko: '주문 관리 (관리자)',
            en: 'Order Management (Admin)',
          },
          description: {
            ko: '관리자는 주문을 취소할 수 있으며, 주문 내역이 삭제되지 않고 **주문 상태를 변경할 수 있습니다.** 주문이 처리됨에 따라 상태가 업데이트되며, 모든 주문 이력을 한눈에 관리할 수 있습니다.',
            en: 'Admins can cancel orders, and instead of deleting order history, they can **update the order status.** As orders are processed, statuses are updated, allowing for seamless order tracking.',
          },
          image: '/images/work/bab/feature-04.png',
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
          image: '/images/work/bab/feature-05.png',
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
          image: '/images/work/bab/feature-06.png',
        },
      ],
    },
    mainImage: '/images/work/bab/main-01.png',
    featureImage: '/images/work/bab/main-02.png',
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
    title: '오모오모',
    subtitle: {
      ko: '메타버스 기반 반려동물 커뮤니티 플랫폼',
      en: 'Metaverse-Based Pet Community Platform',
    },
    description: {
      ko: [
        '오모오모는 메타버스 환경에서 반려동물 캐릭터를 활용하여 사용자들이 교류하고 정보를 공유할 수 있는 커뮤니티 플랫폼입니다.',
        '사용자는 자신만의 펫 캐릭터를 커스터마이징하고, 가상 공간에서 다른 사용자들과 소통하며, 다양한 미니게임과 상호작용할 수 있습니다.',
      ],
      en: [
        'OmoOmo is a metaverse-based pet community platform where users can interact and share information using customizable pet avatars.',
        'Users can personalize their pets, engage in virtual spaces, and participate in various mini-games and interactive features.',
      ],
    },
    role: 'UX/UI Designer & Planner',
    contribution: {
      research: '100%',
      planning: '80%',
      management: '40%',
      testing: '50%',
    },
    type: 'Client Project',
    timeline: '2022.03 ~ 2023.05',
    link: '',
    challenge: {
      question: {
        ko: '메타버스 환경에서 반려동물 커뮤니티를 효과적으로 구축하려면?',
        en: 'How can we effectively build a pet community within a metaverse environment?',
      },
      description: {
        ko: [
          '반려동물을 키우는 사람들은 다양한 정보를 공유하고 소통할 공간을 원하지만, 기존 플랫폼들은 이러한 요구를 충분히 충족하지 못했습니다.',
          '오모오모는 반려동물 보호자들이 메타버스 환경에서 자신만의 펫 캐릭터를 만들고, 다른 사용자들과 교류하며 유용한 정보를 공유할 수 있도록 기획되었습니다.',
        ],
        en: [
          'Pet owners seek platforms where they can share knowledge and connect, but existing platforms often fall short.',
          'OmoOmo was designed to allow pet lovers to create their own avatars, interact with others, and exchange valuable information in a metaverse environment.',
        ],
      },
    },
    techStack: {
      frontend: ['Unity', 'C#', 'React', 'WebGL'],
      backend: ['Node.js', 'Firebase', 'MongoDB'],
      tools: {
        label: 'Design Tools',
        items: ['Figma', 'Jira', 'Adobe XD'],
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
          image: '/images/work/omo-omo-feature-01.png',
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
          image: '/images/work/omo-omo-feature-02.png',
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
          image: '/images/work/omo-omo-feature-03.png',
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
    mainImage: '/images/work/omo-omo-main.png',
    featureImage: '/images/work/omo-omo-feature.png',
    sections: [
      {
        type: 'wireframe',
        data: {
          image: '/images/work/omo-omo-wireframe.png',
        },
      },
      {
        type: 'taskFlow',
        data: {
          image: '/images/work/omo-omo-taskflow.png',
        },
      },
      {
        type: 'informationArchitecture',
        data: {
          image: '/images/work/omo-omo-ia.png',
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
        '서울 관광재단과 협력하여 개발된 가상 체험 및 온라인 컨퍼런스 플랫폼으로, 전 세계 사용자들이 온라인으로 서울의 명소를 탐험하며 화상 회의를 진행할 수 있도록 지원합니다.',
        'UI/UX 기획 및 개발을 담당하며, {/*TODO : Edit Here */} 환경을 설계하였습니다. 또한, 사용자가 **서울의 관광 명소를 배경으로 온라인 회의를 진행할 수 있는 기능**을 기획하여, 새로운 방식의 비대면 회의 경험을 제공하였습니다.',
      ],
      en: [
        'A virtual tourism and online conference platform developed in collaboration with the Seoul Tourism Organization, allowing users worldwide to explore Seoul’s landmarks and participate in virtual meetings.',
        'I was responsible for **UX/UI design and planning**, implementing **responsive design and WebGL-based 3D elements** for an immersive experience.',
        'Additionally, I planned and designed **a feature that enables users to conduct virtual meetings with Seoul’s tourist attractions as their background**, offering a new way to experience online conferences.',
      ],
    },
    role: 'UI Developer & Planner',
    team: '5 members (1 PM, 2 FE, 2 BE, 1 Designer)', //TODO : Edit Here 확인 필요
    type: 'Client Project',
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
          '이를 통해 사용자는 단순한 화상 회의가 아닌, 서울을 배경으로 한 몰입형 회의 경험을 제공받을 수 있도록 하였습니다.',
        ],
        en: [
          'With the challenges posed by COVID-19, there was a growing need for a platform that could integrate online conferences with virtual tourism.',
          'Virtual Seoul introduced **a feature that allows users to explore 3D-rendered landmarks of Seoul while participating in live video conferences.**',
          'This provided an immersive virtual meeting experience, enabling users to connect with others against the backdrop of iconic Seoul attractions.',
        ],
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
    keyFeatures: {
      interface: [
        {
          title: {
            ko: '가상 관광 체험',
            en: 'Virtual Tourism Experience',
          },
          description: {
            ko: '서울의 주요 명소를 WebGL 기반 3D 환경에서 탐색할 수 있으며, **관광 정보를 확인하면서 이동할 수 있는 기능**을 제공합니다.',
            en: 'Users can explore major landmarks in a **WebGL-based 3D environment** while viewing relevant tourist information.',
          },
          image: '/images/work/vspe/feature-01.png',
        },
        {
          title: {
            ko: '온라인 컨퍼런스',
            en: 'Online Conference',
          },
          description: {
            ko: '가상의 서울 명소를 배경으로 **화상 회의를 진행할 수 있으며**, 여러 명이 동시에 접속하여 **회의 및 발표를 진행할 수 있는 기능**을 제공합니다.',
            en: 'Users can conduct **virtual meetings with Seoul’s attractions as the background** and participate in **multi-user conferences and presentations.**',
          },
          image: '/images/work/vspe/feature-02.png',
        },
        {
          title: {
            ko: '멀티 디바이스 지원',
            en: 'Multi-Device Support',
          },
          description: {
            ko: '반응형 웹 디자인을 적용하여 **PC, 태블릿, 모바일에서도 원활한 사용이 가능**합니다.',
            en: 'Implemented responsive web design to ensure a **seamless experience across PC, tablet, and mobile devices.**',
          },
          image: '/images/work/vspe/feature-03.png',
        },
      ],
    },
    sections: [],
    video: {
      videoId: 'BvcZ15ySlUQ',
      title: {
        ko: 'Virtual Seoul 시연 영상',
        en: 'Virtual Seoul Demo Video',
      },
    },
  },
};

export function getWorkById(id: string): Work | undefined {
  return works[id];
}
