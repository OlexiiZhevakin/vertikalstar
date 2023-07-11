import styles from './look.module.scss'

const Look = () => {
  return(
    <section>
      <div className="container">
        <div className={styles.inner}>
          <picture>
            <source type="image/webp" srcSet="/img/about/my-photo.webp" />
            <img className={styles.img} src="/img/about/my-photo.jpg" alt="Засновник та керівник компанії «ВЕРТИКАЛЬ БУДІВЕЛЬНІХ ТЕХНОЛОГІЙ»" title="Засновник та керівник компанії «ВЕРТИКАЛЬ БУДІВЕЛЬНІХ ТЕХНОЛОГІЙ»" />
          </picture>
          <div className={styles.info}>
            <h3>Шукаємо</h3>
            <p>
              Слідкуємо за сучасними трендами, постійно навчаємося , подорожуємо по світу-по виставках та конференціях та знаходимо корисні, ефективні ТЕХНОЛОГІЇ, які можуть покращити якість, організацію будівництва та життя Будівельників та їх Клієнтів.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Look