import Image from 'next/image'
import styles from './grafic.module.scss'

const Grafic = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.inner}>
          <h3 className={styles.title}>
            Це дозволить встановити надійний бар'єр на шляху вологи, що підіймається та позбутися проблем, які
            вона з собою приносить.
          </h3>
          <Image src='/img/technologies/page/hidro/hssmi/grafic.jpg' alt='Як пряцює технологія' title='Як пряцює технологія' width={220} height={230}/>
        </div>
      </div>
    </div>
  )
}

export default Grafic