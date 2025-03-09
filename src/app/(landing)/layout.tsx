import type { Metadata } from 'next';
import Header from './_view/Header';
import Footer from './_view/Footer';

export const metadata: Metadata = {
  title: 'Saeyoung Choi | Product Designer',
  description: 'Saeyoung Choi | Product Designer',
  openGraph: {
    title: 'Saeyoung Choi | Product Designer',
    description: 'Saeyoung Choi | Product Designer',
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
