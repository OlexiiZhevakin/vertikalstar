import Link from 'next/link'
import styles from './know.module.scss'

const Know = () => {
  return(
    <section className={styles.know}>
      <div className="container">
        <h2>Як ми це робимо?</h2>
        <div className={styles.inner}>
          <div className={styles.info}>
            <h3>Знаємо</h3>
            <p>
              Ми активно працюємо і розвиваємося в сучасній будівельній галузі протягом останніх 25 років. Постійно спілкуємося з нашими Клієнтами, колегами, партнерами, долучаємося до самих знакових проєктів. 
            </p>
            <Link className='btn' href="/portfolio">Портфоліо</Link>
            <p>
              Це дозволяє нам постійно тримати руку на пульсі та розуміти, які є недоліки в сучасному будівництві.
            </p>
          </div>
          <picture>
              <source type="image/webp" srcSet="/img/about/my-photo.webp" />
              <img className={styles.img} src="/img/about/my-photo.jpg" alt="Засновник та керівник компанії «ВЕРТИКАЛЬ БУДІВЕЛЬНІХ ТЕХНОЛОГІЙ»" title="Засновник та керівник компанії «ВЕРТИКАЛЬ БУДІВЕЛЬНІХ ТЕХНОЛОГІЙ»" />
            </picture>
        </div>
      </div>
    </section>
  )
}

export default Know