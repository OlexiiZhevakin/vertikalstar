
import styles from './Aside.module.scss';
import Link from 'next-intl/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faTiktok, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Aside = () => {
  const t = useTranslations('blog.aside');
  return (
    <aside className={styles.aside}>
      <h2 className={styles.title}>{t('title')}</h2>
      <article className={styles.about}>
        <div className={styles.img}>
          <Image className={styles.img} src="/img/blog/page/pro-kompaniyu.jpg" width={330} height={250} alt={t('alt-company')} />
        </div>
        <p className={styles.text}>{t('content1')}</p>
        <div>
          <Link href='#' className='btn'>{t('btn')}</Link>
        </div>
      </article>
      <ul className={styles.socialList}>
        <li><a href="https://www.youtube.com/channel/UCnVtTKrimr-qNuSTvj_5w6Q"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Канал на YouTube">
          <FontAwesomeIcon icon={faYoutube} />
        </a></li>
        <li><a href="https://www.facebook.com/vertikalstar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Канал на Facebook" >
          <FontAwesomeIcon icon={faFacebook} />
        </a></li>
        <li><a href="https://www.instagram.com/vertikalstar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Канал на Instagram" >
          <FontAwesomeIcon icon={faInstagram} />
        </a></li>
        <li><a href="http://www.tiktok.com/@vertikal.ua"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Канал на TicTok" >
          <FontAwesomeIcon icon={faTiktok} />
        </a></li>
        <li><a href="https://www.pinterest.com/vertikalstar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Канал на Pinterest" >
          <FontAwesomeIcon icon={faPinterest} />
        </a></li>
      </ul>

      <div className={styles.shop}>
        <Link href='https://vertikalstar.in.ua/ua/' target="_blank" rel="noopener noreferrer">
          <Image src="/img/blog/page/byuro-budivelnoyi-khimiyi.jpg" width={330} height={390} alt={t('alt-shop')} />
          <div>
            <span>{t('subtitle1')}</span>
          </div>
        </Link>
      </div>

      <div className={styles.youtube}>
        <Link href='https://www.youtube.com/channel/UCnVtTKrimr-qNuSTvj_5w6Q' target="_blank" rel="noopener noreferrer">
          <div className={styles.imgYoutube}>
            <Image src='/img/blog/page/youtube.jpg' alt={t('alt-youtube')} width={330} height={342}/>
              <FontAwesomeIcon icon={faYoutube} />
          </div>
          <div className={styles.descr}>
            <span>{t('subtitle2')}</span>
          </div>
        </Link>
      </div>
    </aside>
  )
}

export default Aside;