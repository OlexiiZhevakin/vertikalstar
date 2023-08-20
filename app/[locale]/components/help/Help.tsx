import Link from "next-intl/link"
import styles from './help.module.scss'
import { useTranslations } from 'next-intl';

const Help = () => {
  const t = useTranslations('components');
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.inner}>
          <div>
            <h2 className={styles.title}>
              {t('help.title')}
            </h2>
            <p className={styles.text}>
              {t('help.content')}
            </p>
          </div>
          <Link className={styles.btn} href="tel:+380675713308">
            {t('help.link')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Help