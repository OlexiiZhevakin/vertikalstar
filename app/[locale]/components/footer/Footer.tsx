import Link from 'next-intl/link';
import styles from './Footer.module.scss'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faTiktok, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {  useTranslations } from 'next-intl';



const Footer = () => {
  const t = useTranslations('components');
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.items}>

          <div>
            <Link href='/'>
              <Image src="/img/logo-ua.svg" alt="Логотип сайту" width={187} height={64} />
            </Link>
          </div>

          <div className={styles.item}>
            <h3>{t('footer.subtitle1')}</h3>
            <ul className={styles.list}>
              <Link href="#">{t('footer.content1')}</Link>
              <li><a href="#">{t('footer.content1')}</a></li>
              <li><a href="#">{t('footer.content2')}</a></li>
              <li><a href="#">{t('footer.content3')}</a></li>
            </ul>
          </div>

          <div className={styles.item}>
            <h3>{t('footer.subtitle2')}</h3>
            <ul className={styles.list}>
              <li><a href="#">{t('footer.content4')}</a></li>
              <li><a href="#">{t('footer.content5')}</a></li>
              <li><a href="#">{t('footer.content6')}</a></li>
            </ul>
          </div>

          <div className={styles.item}>
            <h3>{t('footer.subtitle3')}</h3>
            <ul className={styles.list}>
              <li><a href="#">{t('footer.content7')}</a></li>
              <li><a href="#">{t('footer.content8')}</a></li>
            </ul>
          </div>

          <div className={styles.item}>
            <h3>{t('footer.subtitle4')}</h3>
            <ul className={styles.connectList}>
              <li><a href="tel:+380675713308">+380675713308</a></li>
              <li><a href="mailto:manager@vertikal.kharkov.ua">manager@vertikal.kharkov.ua</a></li>
            </ul>
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
          </div>

        </div>
        <div className={styles.copy}>
          <p>Вертикаль будівельних технологій © 1999 - 2023</p>
          <ul>
            <li><a href="/">Політика конфіденційності</a></li>
            <li><Link href='/cookie'>Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;