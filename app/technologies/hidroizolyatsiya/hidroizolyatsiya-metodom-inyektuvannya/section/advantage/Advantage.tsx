import Title from '@/components/title/Title'
import styles from './advantage.module.scss'

const Advantage = () => {
  return (
    <section className={styles.container}>

      <div className="container">
        <Title className={styles.title} title={'h2'}>Переваги даної технології</Title>

        <div className={styles.items}>

          <div className={styles.item}>
            <h3>
              Ефективність
            </h3>
            <p>
              Ефективно вирішує проблему вологих стін
            </p>
          </div>

          <div className={styles.item}>
            <h3>
              Швидкість
            </h3>
            <p>
              Виконується швидко без масштабних ремонтних робіт
            </p>
          </div>

          <div className={styles.item}>
            <h3>
              Результативність
            </h3>
            <p>
              Результат роботи буде помітний вже найближчим часом
            </p>
          </div>

          <div className={styles.item}>
            <h3>
              Надійність
            </h3>
            <p>
              Відсікання капілярної вологи зберігається напротязі десятиліть
            </p>
          </div>

          <div className={styles.item}>
            <h3>
              Час
            </h3>
            <p>
              Виконання робіт можна проводити в будь-який час року не залежно від температури навколишнього середовища
            </p>
          </div>

          <div className={styles.item}>
            <h3>
              Економічність
            </h3>
            <p>
              Значна економія витратних матеріалів та робочої сили, оскільки цей метод не потребує земельних робіт
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Advantage