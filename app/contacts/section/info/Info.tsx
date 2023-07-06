import styles from './Info.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faTiktok, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Info = () => {
  return(
    <div className={styles.info}>
      <div className="container">
        <div className={styles.wrapper}>
          <div>
            <span>Email</span>
            <ul className={styles.list}>
              <li>
                <a href="mailo:manager@vertikal.kharkov.ua">
                  manager@vertikal.kharkov.ua
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span>Телефони:</span>
            <ul className={styles.list}>
              <li><a href="tel:+380675713308">067 571 33 08</a></li>
              <li><a href="tel:+380937617980">093 761 79 80</a></li>
              <li><a href="tel:+380673657048">067 365 70 48</a></li>
            </ul>
          </div>

          <div>
            <span>Ми в соціальних мережах</span>
            <ul className={styles.listSocial}>
              <li>
                <a href="http://www.youtube.com/channel/UCnVtTKrimr-qNuSTvj_5w6Q"
                   target="_blank"
                   rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              </li>
              <li><a href="https://www.facebook.com/vertikalstar"
                      target="_blank"
                      rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              </li>
              <li><a href="https://www.instagram.com/vertikalstar/" 
                     target="_blank" 
                     rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              </li>
              <li><a href="http://www.tiktok.com/@vertikal.ua"
                     target="_blank"
                     rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              </li>
              <li><a href="http://www.pinterest.com/vertikalstar/"
                     target="_blank"
                     rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faPinterest} />
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info;