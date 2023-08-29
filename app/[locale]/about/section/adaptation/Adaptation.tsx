import Image from 'next/image'
import styles from './adaptation.module.scss'
import { useTranslations } from 'next-intl';

const Adaptationt = () => {
  const t = useTranslations('about');
  return(
    <section>
      <div className="container">
        <div className={styles.inner}>
          <Image src='/img/about/fasad-6.jpg' alt='' title='' width={540} height={420} />
          <div className={styles.info}>
            <h3>{t('adaptation.subtitle')}</h3>
            <p>{t('adaptation.content')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Adaptationt