import Image from 'next/image'
import styles from './study.module.scss'
import { useTranslations } from 'next-intl';

const Study = () => {
  const t = useTranslations('about');
  return (
    <section>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.info}>
            <h3>{t('study.subtitle')}</h3>
            <p>{t('study.content1')}</p>
            <p>{t('study.content2')}</p>
            <p>{t('study.content3')}</p>
            <p>{t('study.content4')}</p>
            <p>{t('study.content5')}</p>
          </div>
          <Image src='/img/about/fasad-9.jpg' alt='' title='' width={540} height={420} />
        </div>
      </div>
    </section>
  )
}

export default Study