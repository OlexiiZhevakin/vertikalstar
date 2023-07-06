import Link from 'next/link'
import styles from './implement.module.scss'

const Implement = () => {
  return(
    <section>
      <div className="container">
        <div className={styles.inner}>
            <picture>
              <source type="image/webp" srcSet="/img/about/my-photo.webp" />
              <img className={styles.img} src="/img/about/my-photo.jpg" alt="Засновник та керівник компанії «ВЕРТИКАЛЬ БУДІВЕЛЬНІХ ТЕХНОЛОГІЙ»" title="Засновник та керівник компанії «ВЕРТИКАЛЬ БУДІВЕЛЬНІХ ТЕХНОЛОГІЙ»" />
            </picture>
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

            <Link className='btn' href="/technologies">Всі технології</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Implement