import localFont from 'next/font/local';
import '@/app/globals.css';
import { LanguageProvider } from '@/hooks/useLocale';
import CustomCursor from '@/components/ui/custom-cursor';

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

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body className={`${wantedSans.variable} ${walsheimGT.variable}`}>
        <LanguageProvider>
          {children}
          <CustomCursor />
        </LanguageProvider>
      </body>
    </html>
  );
}
