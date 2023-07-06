import Form from '@/components/form/Form'
import realTimeData from '@/data/realtimeData'
import Link from 'next/link'
import styles from './realrobota.module.scss'

const RealTime = () => {
  return(
    <>
    <section>
      <div className="container">
        <ul className={styles.list}>
          {realTimeData.map((item, index) => {
            return(
              <li key={index}>
                <Link href={item.link}>
                <div className={styles.card}>
                  <picture>
                    <source type="image/webp" srcSet="/img/real/card-1.webp" title='Реальний час'/>
                    <img src="/img/real/card-1.jpg" width="533" height="400" loading="lazy" alt='Реальний час' title='Реальний час' />
                  </picture>
                  <div>
                    <p>
                      {item.title}
                    </p>
                    <p>
                      {item.place}
                    </p>
                  </div>
                </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
    <Form/>
    </>
  )
}

export default RealTime