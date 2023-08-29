import Image from 'next/image'
import styles from './teach.module.scss'
import { useTranslations } from 'next-intl';

const Teach = () => {
  const t = useTranslations('about');
  return(
    <section>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.info}>
            <h3>{t('teach.subtitle')}</h3>
            <p>{t('teach.content1')}</p>
            <p>{t('teach.content2')}</p>
            <p>{t('teach.content3')}</p>
          </div>
          <Image src='/img/about/fasad-12.jpg' alt='' title='' width={540} height={420} />
        </div>
      </div>
    </section>
  )
}

export default Teach