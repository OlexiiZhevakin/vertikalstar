import styles from './About-us.module.scss';
import { useTranslations } from 'next-intl';

const AboutUs = () => {
  const t = useTranslations('home');
  return(
    <div className={styles.container}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.item}>
            <span>{t('about-us.span1')}</span>
            <div>
              <h3 className={styles.title}>
                {t('about-us.subtitle1')}
              </h3>
              <p>
                {t('about-us.content1')}
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <span>{t('about-us.span2')}</span>
            <div>
              <h3 className={styles.title}>
                {t('about-us.subtitle2')}
              </h3>
              <p>
                {t('about-us.content2')}
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <span>{t('about-us.span3')}</span>
            <div>
              <h3 className={styles.title}>
                {t('about-us.subtitle3')}
              </h3>
              <p>
                {t('about-us.content3')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;