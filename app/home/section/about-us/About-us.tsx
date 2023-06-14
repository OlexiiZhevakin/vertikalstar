import styles from './About-us.module.scss';

const AboutUs = () => {
  return(
    <div className={styles.about}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.item}>
            <span>24 роки</span>
            <div>
              <h3>
                Професійного будівництва
              </h3>
              <p>
                1999 рік заснування компанії
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <span>500+</span>
            <div>
              <h3>
                Реалізовані проекти
              </h3>
              <p>
                З з них 46 пам'яток архітектури
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <span>35+</span>
            <div>
              <h3>
                ТЕХНОЛОГІЇ
              </h3>
              <p>
                В активі нашій копманії
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <span>Терміни</span>
            <div>
              <h3>
                Якісно і швидко
              </h3>
              <p>
                Потрібно найкраще– замов це у найкращих!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;