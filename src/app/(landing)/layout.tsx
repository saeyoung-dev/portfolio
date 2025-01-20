import type { Metadata } from 'next';
import Footer from './_view/Footer';
import Header from './_view/Header';

export const metadata: Metadata = {
  title: 'Saeyoung Choi | UI Developer',
  description: 'Saeyoung Choi | UI Developer',
  openGraph: {
    title: 'Saeyoung Choi | UI Developer',
    description: 'Saeyoung Choi | UI Developer',
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
