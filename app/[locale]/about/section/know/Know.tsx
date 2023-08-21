import Link from 'next-intl/link'
import styles from './know.module.scss'
import Image from 'next/image'
import Title from '@/app/[locale]/components/title/Title'

const Know = () => {
  return(
    <section className={styles.know}>
      <div className="container">
        <Title title={'h2'}>Як ми це робимо?</Title>
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
          <Image src='/img/about/fasad-2.jpg' alt='' title='' width={540} height={420}/>
        </div>
      </div>
    </section>
  )
}

export default Know