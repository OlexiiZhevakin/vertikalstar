import Title from '@/app/[locale]/components/title/Title'
import styles from './head.module.scss'
import { useTranslations } from 'next-intl';

const Head = () => {
  const t = useTranslations('fasad.head');
  return(
    <section className={styles.head}>
      <div className="container">
        <div className={styles.inner}>
          <Title title={'title'}>{t('title')}</Title>
        </div>
      </div>
    </section>
  )
}

export default Head
