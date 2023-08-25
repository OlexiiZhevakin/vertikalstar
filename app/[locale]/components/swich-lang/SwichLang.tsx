import Link from 'next-intl/link';
import styles from './swich.module.scss'
import { usePathname } from 'next/navigation'

const SwichLang = () => {
  const pathname = usePathname()
  return (
    <div className={styles.links}>
      <Link className={styles.link} href={pathname} locale='uk'>
        ua
      </Link>
      <Link className={styles.link} href={pathname} locale='en'>
        en
      </Link>
      <Link className={styles.link} href={pathname} locale='de'>
        de
      </Link>
      <Link className={styles.link} href={pathname} locale='ru'>
        ru
      </Link>
    </div>
  )
}

export default SwichLang
