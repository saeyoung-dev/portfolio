import type { Metadata } from 'next';
import Footer from './_view/Footer';
import Header from './_view/Header';

export const metadata: Metadata = {
  title: 'Saeyoung Choi',
  description: 'UI Developer | Saeyoung Choi',
  openGraph: {
    title: 'Saeyoung Choi',
    description: 'UI Developer | Saeyoung Choi',
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
