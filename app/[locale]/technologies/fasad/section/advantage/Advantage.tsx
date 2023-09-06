import Title from '@/app/[locale]/components/title/Title'
import styles from './advantage.module.scss'
import { useTranslations } from 'next-intl';

const Advantage = () => {
  const t = useTranslations('fasad.advantage');
  return (
    <section className={styles.container}>

      <div className="container">
        <Title className={styles.title} title={'h2'}>{t('title')}</Title>

        <div className={styles.items}>

          <div className={styles.item}>
            <h3>{t('subtitle1')}</h3>
            <p>{t('content1')}</p>
          </div>

          <div className={styles.item}>
            <h3>{t('subtitle2')}</h3>
            <p>{t('content2')}</p>
          </div>

          <div className={styles.item}>
            <h3>{t('subtitle3')}</h3>
            <p>{t('content3')}</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Advantage