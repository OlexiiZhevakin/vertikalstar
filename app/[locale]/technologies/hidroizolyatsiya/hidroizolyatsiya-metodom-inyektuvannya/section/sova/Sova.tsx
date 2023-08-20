import Image from 'next/image';
import styles from './sova.module.scss'
import Title from '@/app/[locale]/components/title/Title';
import { useTranslations } from 'next-intl';

const Sova = () => {
  const t = useTranslations('hidroizolyatsiya');
  return(
    <section className={styles.container}>
      <div className="container">
        <Title title={'left'}>{t('sova.title')}</Title>
        <div className={styles.inner}>
          <Image src='/img/technologies/page/hidro/hssmi/sova.jpg' alt={t('sova.alt')} title={t('sova.alt')} width={150} height={190}/>
          <ul className={styles.list}>
            <li>
              {t('sova.content1')}
            </li>
              
            <li>
              {t('sova.content2')}
            </li>
            
            <li>
              {t('sova.content3')}
            </li>
            
            <li>
              {t('sova.content4')}
            </li>

          </ul>
        </div>
      </div>
    </section>
  )
}

export default Sova;