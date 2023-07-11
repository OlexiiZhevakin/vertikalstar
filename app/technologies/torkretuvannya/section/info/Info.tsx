import styles from './info.module.scss'

const Info = () => {
  return(
    <section className={styles.picture}>
      <div className="container">
        <div className={styles.text}>
          <p>
            Торкретування - ідеальна технологія для зміцнення старих стін та перекриттів і збільшення їх несучої здатності. 
          </p>
          <p>
            До конструкції на анкерах  кріпиться  металева  сітка чи каркас, та наноситься бетон під тиском. 
          </p>
          <p>
            І не забувайте, що це саме бетон - якісний, міцний та довговічний матеріал для будівництва. 
          </p>
          <p>
            Завдяки тому, що бетон наноситься під тиском, ми маємо набагато кращу адгезію поверхні та ущільнення шарів бетону. 
          </p>
          <p>
            Тому торкрет-бетон завжди має більшу міцність у порівненні з традиційним бетоном.
          </p>
        </div>

        <div className={styles.inner}>
          <video src="/img/technologies/page/torkretuvannya/torkretuvannya.mp4" muted autoPlay width={1200}></video>
        </div>
      </div>
    </section>
  )
}

export default Info