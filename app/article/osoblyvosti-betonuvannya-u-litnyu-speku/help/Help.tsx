import Link from "next/link"
import styles from './help.module.scss'

const Help = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.inner}>
          <div>
            <h2 className={styles.title}>
              Ми допоможемо вам професійно
            </h2>
            <p className={styles.text}>
              вирішити цю задачу.
            </p>
          </div>
          <Link className={styles.btn} href="tel:+380675713308">
            Зателефонуйте нам
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Help