import Image from 'next/image'
import styles from './look.module.scss'

const Look = () => {
  return(
    <section>
      <div className="container">
        <div className={styles.inner}>
          <Image src='/img/about/slider-5.jpg' alt='' title='' width={540} height={420} />
          <div className={styles.info}>
            <h3>Шукаємо</h3>
            <p>
              Слідкуємо за сучасними трендами, постійно навчаємося , подорожуємо по світу-по виставках та конференціях та знаходимо корисні, ефективні ТЕХНОЛОГІЇ, які можуть покращити якість, організацію будівництва та життя Будівельників та їх Клієнтів.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Look