import styles from './head.module.scss'



const HeaderPage = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h1 className={styles.title}>Мікроцемент та декоративне оздоблення</h1>
        <p className={styles.descr}>
          Мікроцемент це комплекс оздоблювальних матеріалів, за допомогою яких можна створювати унікальні інтер'єри у тому числі в стилі Loft.
        </p>
        <div className={styles.leeloo}>
          
        </div>
      </div>
    </section>
  )
}

export default HeaderPage