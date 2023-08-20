import Title from '@/app/[locale]/components/title/Title'
import styles from './advantage.module.scss'
import { useTranslations } from 'next-intl';

const Advantage = () => {
  const t = useTranslations('hidroizolyatsiya');
  return (
    <section className={styles.container}>

      <div className="container">
        <Title className={styles.title} title={'h2'}>{t('advantage.title')}</Title>

        <div className={styles.items}>

          <div className={styles.item}>
            <h3>
              {t('advantage.subtitle1')}
            </h3>
            <p>
              {t('advantage.content1')}
            </p>
          </div>

          <div className={styles.item}>
            <h3>
              {t('advantage.subtitle2')}
            </h3>
            <p>
              {t('advantage.content2')}
            </p>
          </div>

          <div className={styles.item}>
            <h3>
              {t('advantage.subtitle3')}
            </h3>
            <p>
              {t('advantage.content3')}
            </p>
          </div>

          <div className={styles.item}>
            <h3>
              {t('advantage.subtitle4')}
            </h3>
            <p>
              {t('advantage.content4')}
            </p>
          </div>

          <div className={styles.item}>
            <h3>
              {t('advantage.subtitle5')}
            </h3>
            <p>
              {t('advantage.content5')}
            </p>
          </div>

          <div className={styles.item}>
            <h3>
              {t('advantage.subtitle6')}
            </h3>
            <p>
              {t('advantage.content6')}
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Advantage