import Image from 'next/image'
import styles from './proect.module.scss'

const Proect = () => {
  return(
    <section>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <h2 className={styles.title}>Для проектувальників</h2>
            <p>
              Якщо проект готовий, ми можемо допомогти доопрацювати розділ, пов'язаний з нашими Технологіями. Надаємо всю необхідну документацію, креслення вузлів, сертифікати.
            </p>
          </div>
          <Image src='/img/services/page/info.jpg' alt="Ми можемо взятися за обстеження Вашого об'єкту та розробку проекту" title="Ми можемо взятися за обстеження Вашого об'єкту та розробку проекту" width={470} height={430}/>
        </div>
      </div>
    </section>
  )
}

export default Proect