import styles from './history.module.scss'

const History = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>Історія проекту</h2>
        <p className={styles.descr}>
          У 2000 році наша компанія виграла тендер на гідроізоляцію Балашівського міста у місті Харків, Україна.
        </p>
        <h3 className={styles.subtitle}>
          Перший етап
        </h3>
        <p className={styles.descr}>
          Ремонт железобетонних бордюрів
        </p>
        <p className={styles.descr}>
          Піскоструминне очищення руйнівного бетону та викородженої арматури
        </p>
        <h3 className={styles.subtitle}>Другий етап</h3>
        <p className={styles.descr}>
          Обробка арматури антикорозійним складом
        </p>
        <h3 className={styles.subtitle}>Третій етап</h3>
        <p className={styles.descr}>
          Ремонт бетонних бордюрів методом торкретування
        </p>
      </div>
    </section>
  )
}

export default History