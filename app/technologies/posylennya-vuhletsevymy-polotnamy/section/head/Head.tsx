import styles from './head.module.scss'

const Head = () => {
  return(
    <section className={styles.head}>
      <div className="container">
        <div className={styles.inner}>
          <h1 className={styles.title}>
            Посилення вуглецевими полотнами чи композитне армування
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Head