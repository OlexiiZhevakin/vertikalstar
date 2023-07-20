import Image from 'next/image'
import styles from './materialy.module.scss'


const Materialy = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>
          При технології мікроцементу застосовуються наступні матеріали:
        </h2>
        <div className={styles.items}>
          <div className={styles.item}>
            <h3>Ґрунтовки</h3>
          </div>
          <div className={styles.item}>
            <h3>Мікроцемент Start</h3>
          </div>
          <div className={styles.item}>
            <h3>Мікроцемент Finish</h3>
          </div>
          <div className={styles.item}>
            <h3>Захисні лаки</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Materialy