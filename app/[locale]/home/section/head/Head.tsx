
import Title from '@/app/[locale]/components/title/Title';
import styles from './Head.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Head = () => {
  const t = useTranslations('home');
  return(
    <section className={styles.head}>
      <div className={styles.background}>
        <Image
          src="/img/head-bg.webp"
          fill
          quality={75}
          alt={t('head.alt')}
          priority
        />
      </div>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.subtitle}>
            {t('head.subtitle1')}
          </p>
          <Title title={'title'}>{t('head.title')}</Title>
          <p className={styles.subtitle}>
            {t('head.subtitle2')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Head;