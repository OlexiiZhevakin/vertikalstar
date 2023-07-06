import Link from 'next/link';
import styles from './youtube.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Youtube = () => {
  return(
    <div className={styles.block}>
      <div className="container">
        <div className={styles.inner}>
          <Link href='https://www.youtube.com/channel/UCnVtTKrimr-qNuSTvj_5w6Q' target='_blank' rel="noopener noreferrer" aria-label="Канал на Facebook">
          <div className={styles.img}>
            <picture>
              <source type="image/webp" srcSet="/img/youtube-bg.webp" title="YouTube канал"/>
              <img src="/img/youtube-bg.img" width="300" height="200" loading="lazy" alt="YouTube канал" title="YouTube канал" />
              <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
            </picture>
          </div>
        </Link>
        <div className={styles.content}>
          <span>Наш YouTube канал</span>
            <h3>Вертикаль Будівельних Технологій</h3>
            <p>
              База корисних відеороликів та Лабораторія випробування матеріалів
            </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Youtube;