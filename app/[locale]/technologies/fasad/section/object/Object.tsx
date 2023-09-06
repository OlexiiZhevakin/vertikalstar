import Title from '@/app/[locale]/components/title/Title'
import styles from './object.module.scss'
import { useTranslations } from 'next-intl';

const Object = () => {
  const t = useTranslations('fasad.object');
  return (
    <div className={styles.container}>
      <div className="container">
        <Title title={'h2'}>{t('title')}</Title>
      </div>
    </div>
  )
}

export default Object