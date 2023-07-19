
// import Header from '@/components/header/Header'
// import './globals.scss'
// import { Inter, Roboto } from 'next/font/google'
// import Footer from '@/components/footer/Footer'
// import { Metadata } from 'next'
// import SocialMediaBlock from '@/components/social/SocialMediaBlock'
// // import { CookiesProvider } from 'react-cookie';

// const inter = Inter({ subsets: ['latin'] })


// export const metadata: Metadata = {
//   metadataBase: new URL('https://www.vertikalstar.com/'),
//   title: 'Вертикаль Будівельних Технологій',
//   description: 'Вертикаль Будівельних Технологій - лідер на ринку будівельних послуг, який спеціалізується на наданні інноваційних рішень в галузі будівництва та ремонту будівель.',
//   openGraph: {
//     images: ['/img/head-bg.webp']
//   }
// };
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="uk-UA">
//       <body className={inter.className}>

//           <Header />
//           <SocialMediaBlock />
//           <main>
//             {children}
//           </main>
//           <Footer />

//       </body>
//     </html>
//   )
// }


import Script from 'next/script'
import Header from '@/components/header/Header'
import './globals.scss'
import { Inter, Roboto } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { Metadata } from 'next'
import SocialMediaBlock from '@/components/social/SocialMediaBlock'

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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-NSG4YJR32Z" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag () {dataLayer.push (arguments);}
            gtag ('js', new Date ());
            gtag ('config', 'G-NSG4YJR32Z');
          `}
        </Script>
        <Script>
          {`
            (function(d, w, s) {
              var widgetHash = 'aqbyivrqrfdf16euu58a', ctw = d.createElement(s); ctw.type = 'text/javascript'; ctw.async = true;
              ctw.src = '//widgets.binotel.com/calltracking/widgets/'+ widgetHash +'.js';
              var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(ctw, sn);
            })(document, window, 'script');
          `}
        </Script>
        <Script>
          {`
            (function(d, w, s) {
              var widgetHash = '4i91umjrde8gs703i7wh', gcw = d.createElement(s); gcw.type = 'text/javascript'; gcw.async = true;
              gcw.src = '//widgets.binotel.com/getcall/widgets/'+ widgetHash +'.js';
              var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(gcw, sn);
            })(document, window, 'script');
          `}
        </Script>
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
