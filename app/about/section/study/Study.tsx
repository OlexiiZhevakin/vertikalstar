import Image from 'next/image'
import styles from './study.module.scss'

const Study = () => {
  return(
    <section>
      <div className="container">
        <div className={styles.inner}>
            <div className={styles.info}>
              <h3>Вивчаємо </h3>
              <p>
                Ми ретельно аналізуємо та систематизуємо  нову інформацію.  
              </p>
              <p>
                Задаємо безліч питань виробникам (ми на прямому зв’язку з їх технологами та лабораторіями).
              </p>
              <p>
                Переводимо  з мови заводу (як в прямому, так і в переносному сенсі) на мову зрозумілу будівельнику багато найменувань, термінів та ідей.
              </p>
              <p>
                Відвідуємо аналогічні об’єкти  та виконуємо пробні зразки самостійно. Пробні зразки залишаємо на нашому полігоні для витримки часом.
              </p>
              <p>
                Аналізуємо результати і, якщо вони нас влаштовують, починаємо знайомити будівельників з цим продуктом.
              </p>
            </div>
          <Image src='/img/about/fasad-9.jpg' alt='' title='' width={540} height={420} />
        </div>
      </div>
    </section>
  )
}

export default Study