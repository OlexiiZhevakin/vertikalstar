import Image from 'next/image'
import styles from './look.module.scss'
import { useTranslations } from 'next-intl';

const Look = () => {
  const t = useTranslations('about');
  return(
    <section>
      <div className="container">
        <div className={styles.inner}>
          <Image src='/img/about/slider-5.jpg' alt='' title='' width={540} height={420} />
          <div className={styles.info}>
            <h3>{t('look.subtitle')}</h3>
            <p>{t('look.content')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Look