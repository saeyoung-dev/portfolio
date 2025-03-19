import type { Metadata } from 'next';
import { META } from '@/constants/metadata';
import Header from './_view/Header';
import Footer from './_view/Footer';

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  openGraph: {
    title: META.title,
    description: META.description,
    images: [META.ogImage],
    siteName: META.siteName,
    locale: 'ko',
    type: 'website',
    url: META.url,
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
