import Link from 'next/link'
import styles from './social.module.scss'

const SocialMediaBlock = () => {
  return(
    <div className={styles.social}>
      <ul className={styles.list}>
        <li>
          <Link href="https://www.youtube.com/channel/UCnVtTKrimr-qNuSTvj_5w6Q" target="_blank" rel="noopener noreferrer" aria-label="Канал на YouTube">
            <img src="/img/social/youtube.svg" alt="YouTube" />
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/vertikalstar" target="_blank" rel="noopener noreferrer" aria-label="Канал на Facebook">
            <img src="/img/social/facebook.svg" alt="Facebook" />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/vertikalstar/" target="_blank" rel="noopener noreferrer" aria-label="Канал на Instagram">
            <img src="/img/social/instagram.svg" alt="Instagram" />
          </Link>
        </li>
        <li>
          <Link href="http://www.tiktok.com/@vertikal.ua" target="_blank" rel="noopener noreferrer" aria-label="Канал на TikTok">
            <img src="/img/social/tiktok.svg" alt="TikTok" />
          </Link>
        </li>
        <li>
          <Link href="https://www.pinterest.com/vertikalstar/" target="_blank" rel="noopener noreferrer" aria-label="Канал на Pinterest">
            <img src="/img/social/pinterest.svg" alt="Pinterest" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SocialMediaBlock