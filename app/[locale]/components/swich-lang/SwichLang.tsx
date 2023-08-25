
import Link from 'next-intl/link';
import styles from './swich.module.scss'



const SwichLang = () => {
  return (
    <div className={styles.links}>
      <Link className={styles.link} href='/' locale='uk'>
        ua
      </Link>
      <Link className={styles.link} href='/' locale='en'>
        en
      </Link>
      <Link className={styles.link} href='/' locale='de'>
        de
      </Link>
    </div>
  )
}

export default SwichLang