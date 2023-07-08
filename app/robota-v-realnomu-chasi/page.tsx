import Form from '@/components/form/Form'
import realTimeData from '@/data/realtimeData'
import Link from 'next/link'
import styles from './realrobota.module.scss'
import Image from 'next/image'

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
                    <Image src={item.image} alt='Реальний час' title='Реальний час' width={533} height={400}/>
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