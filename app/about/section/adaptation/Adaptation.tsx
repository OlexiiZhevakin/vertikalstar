import styles from './adaptation.module.scss'

const Adaptationt = () => {
  return(
    <section>
      <div className="container">
        <div className={styles.inner}>
          <picture>
              <source type="image/webp" srcSet="/img/about/my-photo.webp" />
              <img className={styles.img} src="/img/about/my-photo.jpg" alt="Засновник та керівник компанії «ВЕРТИКАЛЬ БУДІВЕЛЬНІХ ТЕХНОЛОГІЙ»" title="Засновник та керівник компанії «ВЕРТИКАЛЬ БУДІВЕЛЬНІХ ТЕХНОЛОГІЙ»" />
            </picture>
          <div className={styles.info}>
            <h3>Адаптуємо</h3>
            <p>
              Першим споживачем нових ідей завжди стає наш відділ «БЮРО РЕКОНСТРУКЦІЇ РЕСТАВРАЦІЇ» який адаптує їх вже на будівельних майданчиках та дає перший зворотний зв’язок. Тому ми у нашому магазині «БЮРО БУДІВЕЛЬНОЇ ХІМІЇ» часто кажемо , що ми не теоретики. Ми практики, які  не бояться вимазати руки у матеріали, які ми продаємо.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Adaptationt