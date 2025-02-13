export interface AboutContent {
  hero: {
    title: LocalizedContent;
    description: LocalizedContent;
    status: {
      current: LocalizedContent;
      previous: LocalizedContent;
    };
  };
  values: {
    title: LocalizedContent;
    items: Array<{
      title: LocalizedContent;
      description: LocalizedContent;
    }>;
  };
  life: {
    title: LocalizedContent;
    images: Array<{
      description: LocalizedContent;
    }>;
  };
  core: {
    title: LocalizedContent;
    sections: Array<{
      title: LocalizedContent;
      items: Array<{
        text: LocalizedContent;
      }>;
    }>;
  };
}

type LocalizedContent = {
  ko: string;
  en: string;
};
