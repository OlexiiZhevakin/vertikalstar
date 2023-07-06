import styles from './About-us.module.scss';

const AboutUs = () => {
  return(
    <div className={styles.about}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.item}>
            <span>24 роки</span>
            <div>
              <h3 className={styles.title}>
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
              <h3 className={styles.title}>
                Реалізовані проекти
              </h3>
              <p>
                з них 46 пам'яток архітектури
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <span>35+</span>
            <div>
              <h3 className={styles.title}>
                технології
              </h3>
              <p>
                в активі нашої компанії
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;