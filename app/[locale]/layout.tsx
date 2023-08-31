
import Script from 'next/script'
import '../globals.scss'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Footer from './components/footer/Footer'
import Header2 from './components/header2/Header2'
import SocialMediaBlock from './components/social/SocialMediaBlock'
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';




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
  params
}: {
  children: React.ReactNode,
  params: any
}) {

  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  // Show a 404 error if the user requests an unknown locale

  return (

    <html lang={locale}>
      <body className={inter.className}>
        <Script
          id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="eb4a56fa-dcf5-4ac0-bf2b-22e8c0bb2b37" data-blockingmode="auto" type="text/javascript">
        </Script>
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-NSG4YJR32Z" /> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NSG4YJR32Z"
          data-cookieconsent="statistics"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag () {dataLayer.push (arguments);}
            gtag ('js', new Date ());
            gtag ('config', 'G-NSG4YJR32Z');
          `}
        </Script>
        <Script data-cookieconsent="marketing">
          {`
            (function(d, w, s) {
              var widgetHash = 'aqbyivrqrfdf16euu58a', ctw = d.createElement(s); ctw.type = 'text/javascript'; ctw.async = true;
              ctw.src = '//widgets.binotel.com/calltracking/widgets/'+ widgetHash +'.js';
              var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(ctw, sn);
            })(document, window, 'script');
          `}
        </Script>
        <Script data-cookieconsent="marketing">
          {`
            (function(d, w, s) {
              var widgetHash = '4i91umjrde8gs703i7wh', gcw = d.createElement(s); gcw.type = 'text/javascript'; gcw.async = true;
              gcw.src = '//widgets.binotel.com/getcall/widgets/'+ widgetHash +'.js';
              var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(gcw, sn);
            })(document, window, 'script');
          `}
        </Script>
        <Header2 />
        <SocialMediaBlock />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>

  )
}