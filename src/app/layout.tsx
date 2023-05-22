import Header from '@/components/headers/Header';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/footers/Footer';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'siklog | 김명식 블로그',
    template: 'siklog | 김명식 블로그 | %s',
  },
  description: 'siklog | 프론트엔드 개발자 김명식 개발 블로그입니다.',
  keywords: [
    'siklog',
    '김명식 블로그',
    '김명식',
    '프론트엔드 김명식',
    '프론트엔드',
    '프론트엔드 개발자 김명식',
    'velog',
    'blog',
    '블로그',
    '벨로그',
    '개발자',
    '프론트엔드 개발자 김명식 블로그',
    '프론트 김명식 블로그',
    '프론트',
  ],
  applicationName: 'siklog',
  openGraph: {
    title: 'siklog | 김명식 블로그',
    type: 'website',
    // 배포후 url 넣어야함
    url: 'https://siklog.shop',
    siteName: 'siklog | 김명식 블로그',
    description: 'siklog | 프론트엔드 개발자 김명식 개발 블로그입니다.',
    images: [
      {
        url: 'https://user-images.githubusercontent.com/77043973/236410475-876c5054-8ef3-47cb-8c26-e731e323855e.jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'siklog | 김명식 블로그',
    description: 'siklog | 프론트엔드 개발자 김명식 개발 블로그입니다.',
    images: [
      {
        url: 'https://user-images.githubusercontent.com/77043973/236410475-876c5054-8ef3-47cb-8c26-e731e323855e.jpeg',
      },
    ],
  },
  creator: 'MyeongSik Kim',
  authors: [{ name: 'devSik' }],
  publisher: 'devSik',
  generator: 'Next.js',
  viewport: { width: 'device-width', initialScale: 1 },
  robots: {
    index: true,
    follow: true,
  },
  // other: {
  //   'naver-site-verification': '49fce68022c80ddf1bd9ec930d3d46e45b3a3f07',
  //   'google-site-verification': 'pAkyluLe3coyszs7TVsAh8zwonYg2gm_Ku1r-jmdlt8',
  // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${openSans.className}`}>
      <body>
        <Header />
        <main className="w-full min-h-[calc(100vh-229px)] max-w-screen-md px-6 mx-auto py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
