import styles from './head.module.scss'

const Head = () => {
  return(
    <section className={styles.head}>
      <div className="container">
        <div className={styles.inner}>
          <h1>
            Ремонт бетону та залізобетону
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Head