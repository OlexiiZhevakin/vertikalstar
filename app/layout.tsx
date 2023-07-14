// 'use client'
import Header from '@/components/header/Header'
import './globals.scss'
import { Inter, Roboto } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { Metadata } from 'next'
import SocialMediaBlock from '@/components/social/SocialMediaBlock'
// import { CookiesProvider } from 'react-cookie';

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  metadataBase: new URL('https://www.vertikalstar.com/'),
  title: 'Вертикаль Будівельних Технологій',
  description: 'Вертикаль Будівельних Технологій - лідер на ринку будівельних послуг, який спеціалізується на наданні інноваційних рішень в галузі будівництва та ремонту будівель.',
  openGraph: {
    images: ['/img/head-bg.webp']
  }
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk-UA">
      <body className={inter.className}>

          <Header />
          <SocialMediaBlock />
          <main>
            {children}
          </main>
          <Footer />

      </body>
    </html>
  )
}
