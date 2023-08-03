import Title from '@/components/title/Title'
import styles from './page.module.scss'
import Script from "next/script";

const Cookie = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'h1'}>Cookie Policy</Title>
        <p className={styles.text}>
          На цій сторінці ви можете дізнатися більше про кукі, що використовуються на нашому сайті.
        </p>
        <Script
          id="CookieDeclaration"
          src="https://consent.cookiebot.com/eb4a56fa-dcf5-4ac0-bf2b-22e8c0bb2b37/cd.js"
          type="text/javascript"
          async
        ></Script>
      </div>
    </section>
  )
}

export default Cookie