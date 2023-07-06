import styles from './grafic.module.scss'

const Grafic = () => {
  return(
    <div className={styles.grafic}>
      <div className="container">
        <div className={styles.inner}>
          <h3>
             Це дозволить встановити надійний бар'єр на шляху вологи, що підіймається та позбутися проблем, які
             вона з собою приносить.
           </h3>
           <picture>
             <source type="image/webp" srcSet="/img/technologies/page/hidro/hssmi/grafic.webp" title="Як пряцює технологія"/>
             <img src="/img/technologies/page/hidro/hssmi/grafic.jpg" alt="На малюкну показано як пряцює технологія" width="220" height="230"
               loading="lazy" title="Як пряцює технологія"/>
           </picture>
        </div>
      </div>
    </div>
  )
}

export default Grafic