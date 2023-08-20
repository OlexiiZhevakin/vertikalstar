import Image from 'next/image'
import styles from './grafic.module.scss'
import { useTranslations } from 'next-intl';

const Grafic = () => {
  const t = useTranslations('hidroizolyatsiya');
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.inner}>
          <h3 className={styles.title}>
            {t('grafic.title')}
          </h3>
          <Image src='/img/technologies/page/hidro/hssmi/grafic.jpg' alt={t('grafic.alt')} title={t('grafic.alt')} width={220} height={230}/>
        </div>
      </div>
    </div>
  )
}

export default Grafic