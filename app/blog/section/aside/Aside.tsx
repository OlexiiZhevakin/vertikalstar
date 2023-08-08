
import styles from './Aside.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faTiktok, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <h2 className={styles.title}>Про компанію</h2>
      <article className={styles.about}>
        <div className={styles.img}>
          <Image className={styles.img} src="/img/blog/page/pro-kompaniyu.jpg" width={330} height={250} alt="Вертикаль будівельних технологій" title="Вертикаль будівельних технологій" />
        </div>
        <p className={styles.text}>
          <span><strong>Вертикаль будівельних технологій</strong></span> - це проект, в якому ми допомагаємо людям будувати якісно та ефективно із застосуванням нових будівельних технологій.
        </p>
        <div>
          <Link href='#' className='btn'>Докладніше</Link>
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
          <Image src="/img/blog/page/byuro-budivelnoyi-khimiyi.jpg" width={330} height={390} alt="Бюро Будівельної Хімії" title="Бюро Будівельної Хімії" />
          <div>
            <span>Наш інтернет-магазин</span>
          </div>
        </Link>
      </div>

      <div className={styles.youtube}>
        <Link href='https://www.youtube.com/channel/UCnVtTKrimr-qNuSTvj_5w6Q' target="_blank" rel="noopener noreferrer">
          <div className={styles.imgYoutube}>
              <Image src='/img/blog/page/youtube.jpg' alt='Канал на YouTube компанії ВЕРТИКАЛЬ БУДІВЕЛЬНИХ ТЕХНОЛОГІЙ' title='Канал на YouTube компанії ВЕРТИКАЛЬ БУДІВЕЛЬНИХ ТЕХНОЛОГІЙ' width={330} height={342}/>
              <FontAwesomeIcon icon={faYoutube} />
          </div>
          <div className={styles.descr}>
            <span>Наш канал на YouTube</span>
          </div>
        </Link>
      </div>
    </aside>
  )
}

export default Aside;