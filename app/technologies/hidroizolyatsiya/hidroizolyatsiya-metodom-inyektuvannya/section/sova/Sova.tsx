import styles from './sova.module.scss'

const Sova = () => {
  return(
    <section className={styles.sova}>
      <div className="container">
        <h2>
          Компанія <span>Вертикаль будівельних технологій</span> має:
        </h2>
        <div className={styles.inner}>
          <picture>
            <source type="image/webp" srcSet="/img/technologies/page/hidro/hssmi/sova.webp" title="Зображення логотипу компанії"/>
            <img src="/img/technologies/page/hidro/hssmi/sova.jpg" alt="Зображення логотипу компанії" width="150" height="190" loading="lazy" title="Зображення логотипу компанії"/>
          </picture>

          <ul className={styles.list}>
            <li>
              20-річний досвід виконання таких робіт;
            </li>
              
            <li>
              сертифіковані матеріали;
            </li>
            
            <li>
              необхідне обладнання;
            </li>
            
            <li>
              колектив спеціалістів.
            </li>

          </ul>
        </div>
      </div>
    </section>
  )
}

export default Sova;