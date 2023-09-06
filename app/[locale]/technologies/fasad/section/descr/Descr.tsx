import styles from './descr.module.scss'
import { useTranslations } from 'next-intl';



const Descr = () => {
  const t = useTranslations('fasad.descr');
  return (
    <div className={styles.container}>
      <div className="container">
        <p className={styles.descr}>{t('content')}</p>
      </div>
    </div>
  )
}

export default Descr