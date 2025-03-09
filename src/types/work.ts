// Localization Types
export interface LocalizedContent {
  ko: string;
  en: string;
  [key: string]: string;
}

export interface LocalizedArray {
  ko: string[];
  en: string[];
}

// Section Base Types
export interface BaseSection {
  description?: LocalizedContent;
  image?: string;
}

// Section Data Types
export interface UISpecificationData extends BaseSection {
  image: string;
}

export interface TaskFlowData extends BaseSection {
  image: string;
}

export interface InformationArchitectureData extends BaseSection {
  image: string;
}

export interface DatabaseData extends BaseSection {
  image: string;
}

export interface ProductRequirementData extends BaseSection {
  image: string;
}

export interface ImageSliderData {
  title?: string;
  images: string[];
}

export interface AchievementData {
  highlights: LocalizedContent[];
  image?: string;
}

export interface RetrospectiveData {
  icon?: string;
  question: LocalizedContent;
  answer: LocalizedArray;
}

// Feature Types
export interface KeyFeatureData {
  title: LocalizedContent;
  subtitle?: LocalizedContent;
  description: LocalizedContent;
  image: string;
  imageType?: 'landscape' | 'portrait';
}

export interface SolutionData {
  title: LocalizedContent;
  description: LocalizedContent;
  image?: string;
}

// Component Data Types
export interface TechStackData {
  backend?: string[];
  frontend?: string[];
  tools?: {
    label: string;
    items: string[];
  };
}

export interface ChallengeData {
  question: LocalizedContent;
  description: LocalizedArray;
}

// Section Types
export type SectionType =
  | 'informationArchitecture'
  | 'uiSpecification'
  | 'taskFlow'
  | 'database'
  | 'productRequirement';

export type SectionTypeToData = {
  informationArchitecture: InformationArchitectureData;
  taskFlow: TaskFlowData;
  uiSpecification: UISpecificationData;
  database: DatabaseData;
  productRequirement: ProductRequirementData;
};

export interface WorkSection {
  type: SectionType;
  data: SectionTypeToData[SectionType];
  description?: LocalizedContent;
}

// Props Type
export interface SectionProps<T> {
  data: T;
  className?: string;
}

export type WorkCategory =
  // | 'Web App'
  // | 'Platform'
  // | 'E-Commerce'
  // | 'Mobile App'
  'Development' | 'Design';

export interface Work {
  id: string;
  category: WorkCategory;
  logo?: string;
  title: string;
  subtitle: LocalizedContent;
  description: LocalizedArray;
  role?: string;
  team?: string;
  type?: string;
  client?: LocalizedContent;
  contribution?: {
    design?: string;
    research?: string;
    planning?: string;
    development?: string;
    management?: string;
    testing?: string;
  };
  timeline?: string;
  link?: string;
  challenge?: ChallengeData;
  techStack?: TechStackData;
  keyFeatures?: {
    interface: KeyFeatureData[];
  };
  keyFeatureSlider?: ImageSliderData;
  solution?: SolutionData;
  mainImage: string;
  featureImage: string;
  sections: WorkSection[];
  video?: {
    title: LocalizedContent;
    videoId: string;
  };
  achievements?: AchievementData;
  retrospective?: RetrospectiveData[];
}
