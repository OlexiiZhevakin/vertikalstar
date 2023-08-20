
import Title from '@/app/[locale]/components/title/Title';
import styles from './head.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';


const Head = () => {
  const t = useTranslations('hidroizolyatsiya');
  return (
    <section className={styles.head}>
        <div className={styles.background}>
          <Image
            src="/img/technologies/page/hidro/hssmi/head-bg.webp"
            fill
            style={{
              objectFit: 'cover',
            }}
            quality={75}
            alt='Фонова картинка'
            priority
          />
        </div>
      <div className="container">
        <div className={styles.inner}>
            <Title title={'title'}>{t('head.title')}</Title>
            <p className={styles.subtitle}>{t('head.description')}</p>
        </div>
      </div>
    </section>
  );
};

export default Head;
