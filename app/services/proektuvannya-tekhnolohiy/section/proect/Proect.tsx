import styles from './proect.module.scss'

const Proect = () => {
  return(
    <section>
      <div className="container">
        <h2 className={styles.title}>Для проектувальників</h2>
        <div className={styles.inner}>
          <p>
            Якщо проект готовий, ми можемо допомогти доопрацювати розділ, пов'язаний з нашими Технологіями. Надаємо всю необхідну документацію, креслення вузлів, сертифікати.
          </p>
          <picture>
              <source type="image/webp" srcSet="/img/services/page/info.webp" title="Ми можемо взятися за обстеження Вашого об'єкту та розробку проекту"/>
              <img src="/img/services/page/info.jpg" alt="На фото зображені люди які креслять" width="470" height="430" loading="lazy" title="Ми можемо взятися за обстеження Вашого об'єкту та розробку проекту"/>
            </picture>
        </div>
      </div>
    </section>
  )
}

export default Proect