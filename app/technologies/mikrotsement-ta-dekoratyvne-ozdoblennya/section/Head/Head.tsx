import styles from './head.module.scss'



const Head = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h1 className={styles.title}>Мікроцемент та декоративне оздоблення</h1>
        <p className={styles.descr}>
          Мікроцемент це комплекс матеріалів з дрібномолотового, за допомогою якого можна створювати унікальні інтер'єри у тому числі в стилі Loft.
        </p>
      </div>
    </section>
  )
}

export default Head