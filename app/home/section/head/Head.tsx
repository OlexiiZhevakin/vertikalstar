
import styles from './Head.module.scss';

const Head = () => {
  return(
    <section className={styles.head}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.subtitle}>
            Група компаній
          </p>
          <h1 className={styles.title}>
            Вертикаль будівельних технологій
          </h1>
          <p className={styles.subtitle}>
            Впроваджуємо сучасні, ефективні технології для професійного будівництва
          </p>
        </div>
      </div>
    </section>
  )
}

export default Head;