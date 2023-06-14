
import styles from './Head.module.scss';

const Head = () => {
  return(
    <section className={styles.head}>
      <div className="container">
        <div className={styles.inner}>
          <p>
            Група компаній
          </p>
          <h1>
            Вертикаль будівельних технологій
          </h1>
          <p>
            Впроваджуємо сучасні, ефективні технології для професійного будівництва
          </p>
        </div>
      </div>
    </section>
  )
}

export default Head;