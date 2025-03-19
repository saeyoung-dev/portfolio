export const navigation = [
  {
    name: {
      en: 'Home',
    },
    href: '/',
  },
  {
    name: {
      en: 'About',
    },
    href: '/about',
  },
  {
    name: {
      en: 'Work',
    },
    href: '/work',
  },
  {
    name: {
      en: 'Resume',
    },
    href: '/resume',
  },
] as const;

export type NavigationItem = (typeof navigation)[number];
