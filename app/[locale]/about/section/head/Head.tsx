import Title from '@/app/[locale]/components/title/Title'
import styles from './head.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

const Head = () => {
  const t = useTranslations('about');
  return (
    <section className={styles.head}>
      <div className="container">
        <Title title={'h1'}>{t('head.title')}</Title>
        <p>{t('head.content1')}</p>
        <p>{t('head.content2')}</p>
        <div className={styles.inner}>
          <Image className={styles.img} src="/img/about/my-photo.jpg" alt={t('head.alt')} width={400} height={500} />
          <div className={styles.info}>
            <p>{t('head.content3')}</p>
            <p>{t('head.content4')}</p>
            <p>{t('head.content5')}</p>
            <p>{t('head.content6')}</p>
            <p>{t('head.content7')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Head