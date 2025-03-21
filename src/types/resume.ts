export interface LocalizedContent {
  ko: string;
  en: string;
}

export interface LocalizedArray {
  ko: string[];
  en: string[];
}

export interface Experience {
  period: string;
  title: LocalizedContent;
  company: LocalizedContent;
  location: LocalizedContent;
  description: LocalizedArray;
}

export interface Project {
  year: string;
  title: LocalizedContent;
  description: LocalizedArray;
  role?: LocalizedContent;
  accomplishments?: LocalizedArray;
}

export interface Education {
  period: string;
  degree: LocalizedContent;
  school: LocalizedContent;
  details?: LocalizedContent;
}

export interface RelaventExperience {
  period: string;
  title: LocalizedContent;
  organization: LocalizedContent;
  details?: LocalizedContent;
}

export interface Contact {
  type: 'email' | 'linkedin' | 'github' | 'resume';
  label: string;
  value: string;
  link?: string;
}

export interface Certification {
  date: string;
  title: LocalizedContent;
  description: LocalizedContent;
}

export interface ResumeData {
  name: LocalizedContent;
  title: LocalizedContent;
  about: LocalizedArray;
  coreValues: LocalizedArray;
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  relaventExperience: RelaventExperience[];
  contact: Contact[];
  skills: LocalizedArray;
  certifications: Certification[];
}
