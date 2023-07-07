import Link from 'next/link'
import styles from './social.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faTiktok, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const SocialMediaBlock = () => {
  return (
    <div className={styles.social}>
      <ul className={styles.list}>
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
  )
}

export default SocialMediaBlock