import Title from '@/app/[locale]/components/title/Title'
import styles from './head.module.scss'
import { useTranslations } from 'next-intl';

const Head = () => {
  const t = useTranslations('proektuvannya-tekhnolohiy');
  return (
    <section className={styles.head}>
      <div className="container">
        <Title title={'h1'}>{t('head.title')}</Title>
        <p>{t('head.content1')}</p>
        <div className={styles.descr}>
          <p>{t('head.content2')}</p>
          <p>{t('head.content3')}</p>
          <p>{t('head.content4')}</p>
        </div>
      </div>
    </section>
  )
}

export default Head