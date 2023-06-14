
import styles from './Aside.module.scss';
import Link from 'next/link';

const Aside = () => {
  return(
    <aside className={styles.aside}>
      <article>
        <picture>
          <source type="image/webp" srcSet="/img/blog/page/pro-kompaniyu.webp" title="Вертикаль будівельних технологій"/>
          <img src="/img/blog/page/pro-kompaniyu.jpg" width="330" height="250" loading="lazy" alt="Вертикаль будівельних технологій" title="Вертикаль будівельних технологій" />
        </picture>
        <div>
          <h2>Вертикаль будівельних технологій</h2>
          <a className='btn'>Про нас</a>
        </div>
      </article>
      <ul className={styles.socialList}>
        <li><a href="https://www.youtube.com/channel/UCnVtTKrimr-qNuSTvj_5w6Q"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Канал на YouTube">
          <i className="fa-brands fa-youtube"></i>
          </a></li>
        <li><a href="https://www.facebook.com/vertikalstar"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Канал на Facebook" >
            <i className="fa-brands fa-facebook"></i>
          </a></li>
        <li><a href="https://www.instagram.com/vertikalstar/"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Канал на Instagram" >
            <i className="fa-brands fa-instagram"></i>
          </a></li>
        <li><a href="http://www.tiktok.com/@vertikal.ua"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Канал на TicTok" >
            <i className="fa-brands fa-tiktok"></i>
          </a></li>
        <li><a href="https://www.pinterest.com/vertikalstar/"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Канал на Pinterest" >
            <i className="fa-brands fa-pinterest"></i>
          </a></li>
      </ul>

      <div className={styles.shop}>
        <Link href='https://vertikalstar.in.ua/ua/' target="_blank" rel="noopener noreferrer">
          <picture>
            <source type="image/webp" srcSet="/img/blog/page/byuro-budivelnoyi-khimiyi.webp" title="Бюро Будівельної Хімії"/>
            <img src="/img/blog/page/byuro-budivelnoyi-khimiyi.jpg" width="330" height="250" loading="lazy" alt="Бюро Будівельної Хімії" title="Бюро Будівельної Хімії" />
          </picture>
          <div>
            <span>Наш інтернет-магазин</span>
          </div>
        </Link>
      </div>

      <div className={styles.youtube}>
        <Link href='https://www.youtube.com/channel/UCnVtTKrimr-qNuSTvj_5w6Q' target="_blank" rel="noopener noreferrer">
          <picture>
            <source type="image/webp" srcSet="/img/blog/page/youtube.webp" title="Канал на YouTube компанії ВЕРТИКАЛЬ БУДІВЕЛЬНИХ ТЕХНОЛОГІЙ"/>
            <img src="/img/blog/page/youtube.jpg" width="330" height="330" loading="lazy" alt="Канал на YouTube компанії ВЕРТИКАЛЬ БУДІВЕЛЬНИХ ТЕХНОЛОГІЙ" title="Канал на YouTube компанії ВЕРТИКАЛЬ БУДІВЕЛЬНИХ ТЕХНОЛОГІЙ" />
          </picture>
          <div>
            <span>Наш канал на YouTube</span>
          </div>
        </Link>
      </div>
    </aside>
  )
}

export default Aside;