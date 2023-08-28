import Link from 'next-intl/link';
import styles from './youtube.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useTranslations } from 'next-intl';

const Youtube = () => {
  const t = useTranslations('home');
  return (
    <div className={styles.block}>
      <div className="container">
        <div className={styles.inner}>
          <Link href='https://www.youtube.com/channel/UCnVtTKrimr-qNuSTvj_5w6Q' target='_blank' rel="noopener noreferrer" aria-label={t('youtube.alt')}>
            <div className={styles.img}>
              <picture>
                <source type="image/webp" srcSet="/img/youtube-bg.webp" title={t('youtube.alt')} />
                <img src="/img/youtube-bg.img" width="300" height="200" alt={t('youtube.alt')} />
                <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
              </picture>
            </div>
          </Link>
          <div className={styles.content}>
            <span>{t('youtube.subtitle')}</span>
            <h3>{t('youtube.title')}</h3>
            <p>{t('youtube.content')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Youtube;