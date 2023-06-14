import Link from 'next/link';
import styles from './Footer.module.scss'
import Image from 'next/image';

const Footer = () => {
  return(
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.items}>

          <div>
            <Link href='/'>
              <Image src="/img/logo-ua.svg" alt="Логотип сайту"  width={187} height={64} loading="lazy"/>
            </Link>
          </div>

          <div>
            <h3>Клієнтам</h3>
              <ul className={styles.list}>
                <li><a href="#">Відгуки</a></li>
                <li><a href="#">Технології</a></li>
                <li><a href="#">Бренди</a></li>
              </ul>
          </div>

          <div>
            <h3>Про нас</h3>
              <ul className={styles.list}>
                <li><a href="#">Про компанію</a></li>
                <li><a href="#">Портфоліо</a></li>
                <li><a href="#">Вакансії</a></li>
              </ul>
          </div>

          <div>
            <h3>Послуги</h3>
              <ul className={styles.list}>
                <li><a href="#">Обстеження об'єкту</a></li>
                <li><a href="#">Організація робіт</a></li>
                <li><a href="#">Продаж матеріалів</a></li>
                <li><a href="#">Навчання в Академії</a></li>
              </ul>
          </div>

          <div>
            <h3>Контакти</h3>
              <ul className={styles.connectList}>
                <li><a href="tel:+380675713308">+380675713308</a></li>
                <li><a href="mailto:manager@vertikal.kharkov.ua">manager@vertikal.kharkov.ua</a></li>
              </ul>
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
          </div>

        </div>
        <div className={styles.copy}>
          <p>Вертикаль будівельних технологій © 1999 - 2023</p>
            <ul>
              <li><a href="/">Політика конфіденційності</a></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;