import Link from 'next/link'
import styles from './implement.module.scss'
import Image from 'next/image'
import Btn from '@/components/Btn/Btn'

const Implement = () => {
  return(
    <section>
      <div className="container">
        <div className={styles.inner}>
          <Image src='/img/about/slider-8.jpg' alt='' title='' width={540} height={420} />
          <div className={styles.info}>
            <h3>Впроваджуємо</h3>
            <p>
              В активі нашої компанії на сьогодні такі ТЕХНОЛОГІЇ:
            </p>
            <ul className={styles.list}>
              <li>
                <Link href="#">Гідроізоляція</Link>
              </li>
              <li>
                <Link href="#">Домішки в бетони та розчини</Link>
              </li>
              <li>
                <Link href="#">Утеплення та термомодернізація</Link>
              </li>
              <li>
                <Link href="#">Реконструкція</Link>
              </li>
              <li>
                <Link href="#">Промислові та наливні підлоги</Link>
              </li>
              <li>
                <Link href="#">Очистка, реставрація та захист фасадів</Link>
              </li>
              <li>
                <Link href="#">Декоративне оздоблення</Link>
              </li>
            </ul>
            <Btn href='/technologies'>Всі технології</Btn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Implement