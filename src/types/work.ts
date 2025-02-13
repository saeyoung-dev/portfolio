// Base Props Type
export interface SectionProps<T> {
  data: T;
}

// Section Data Types
interface BaseSection {
  description?: string;
  image?: string;
}

export interface WireframeData extends BaseSection {
  image: string;
}

export interface TaskFlowData extends BaseSection {
  image: string;
}

export interface InformationArchitectureData extends BaseSection {
  image: string;
}

export interface AchievementData extends BaseSection {
  image: string;
  highlights: {
    ko: string;
    en: string;
  }[];
}

export interface SolutionData {
  title: LocalizedContent;
  description: LocalizedContent;
  image?: string;
}

// Work Types
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

export interface KeyFeature {
  title: LocalizedContent;
  subtitle?: LocalizedContent;
  description: LocalizedContent;
  image: string;
}

export interface KeyFeaturesData {
  interface: KeyFeature[];
  functionality?: KeyFeature[];
}

export type SectionType = 'wireframe' | 'taskFlow' | 'informationArchitecture';

export interface WorkSection {
  type: keyof SectionTypeToData;
  data: SectionTypeToData[keyof SectionTypeToData];
}

interface LocalizedContent {
  ko: string;
  en: string;
  [key: string]: string;
}

interface LocalizedArray {
  ko: string[];
  en: string[];
}

export interface Work {
  id: string;
  logo?: string;
  title: string;
  subtitle: LocalizedContent;
  description: LocalizedArray;
  role?: string;
  team?: string;
  type?: string;
  contribution?: {
    research?: string;
    planning?: string;
    management?: string;
    testing?: string;
  };
  timeline?: string;
  link?: string;
  challenge?: {
    question: LocalizedContent;
    description: LocalizedArray;
  };
  techStack?: TechStackData;
  keyFeatures?: {
    interface: {
      title: LocalizedContent;
      subtitle?: LocalizedContent;
      description: LocalizedContent;
      image: string;
    }[];
  };
  solution?: {
    title: LocalizedContent;
    description: LocalizedContent;
    image?: string;
  };
  mainImage: string;
  featureImage: string;
  sections: WorkSection[];
  video?: {
    title: LocalizedContent;
    videoId: string;
  };
  achievements?: {
    highlights: {
      ko: string;
      en: string;
    }[];
  };
}

type SectionTypeToData = {
  [K in SectionType]: K extends 'wireframe'
    ? WireframeData
    : K extends 'taskFlow'
    ? TaskFlowData
    : K extends 'informationArchitecture'
    ? InformationArchitectureData
    : never;
};
