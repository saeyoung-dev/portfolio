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
] as const;

export type NavigationItem = (typeof navigation)[number];
