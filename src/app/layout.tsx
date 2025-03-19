import '@/app/globals.css';
import type { Metadata } from 'next';
import { META } from '@/constants/metadata';
import localFont from 'next/font/local';
import { LanguageProvider } from '@/hooks/useLocale';

const wantedSans = localFont({
  src: '/fonts/WantedSansVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-wanted',
});

const walsheimGT = localFont({
  src: [
    {
      path: '/fonts/GT-Walsheim-Condensed-Ultra-Bold-Oblique.woff2',
      weight: '900',
      style: 'italic',
    },
    {
      path: '/fonts/GT-Walsheim-Medium-Oblique.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-walsheim',
});

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  keywords: META.keyword.join(', '),
  metadataBase: new URL(META.url),
  openGraph: {
    title: META.title,
    description: META.description,
    url: META.url,
    siteName: META.siteName,
    images: [
      {
        url: META.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko',
    type: 'website',
  },
  icons: {
    icon: META.favicon,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${wantedSans.variable} ${walsheimGT.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
