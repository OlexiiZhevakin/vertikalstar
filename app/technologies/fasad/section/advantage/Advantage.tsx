import styles from './advantage.module.scss'

const Advantage = () => {
  return (
    <section className={styles.container}>

      <div className="container">

        <h2 className={styles.title}>
          Переваги даної технології
        </h2>

        <div className={styles.items}>

          <div className={styles.item}>
            <h3>
              Автентичність
            </h3>
            <p>
              Фасад залишається таким, яким його задумав архітектор у минулому для наших нащадків.
            </p>
          </div>

          <div className={styles.item}>
            <h3>
              Надійність
            </h3>
            <p>
              Ми не наносимо ніяких додаткових шарів, які з часом можуть відшаровуватися. 
            </p>
          </div>

          <div className={styles.item}>
            <h3>
              Час
            </h3>
            <p>
              "Ми знаходимо і лікуємо всі причини хвороб фасаду" які накопичилися за час експлуатації з тим, щоб вони не повторювалися в майбутньому
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Advantage