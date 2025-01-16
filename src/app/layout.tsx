import localFont from 'next/font/local';
import '@/app/globals.css';

const myFont = localFont({
  src: '/fonts/WantedSansVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
