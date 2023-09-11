'use client'

import { usePathname, useRouter } from 'next-intl/client';
import Link from 'next-intl/link';
import styles from './swich.module.scss';


const SwichLang = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div className={styles.links}>
      <Link className={styles.link} href={pathname} locale="uk" onClick={() => handleLocaleChange('uk')}>
        ua
      </Link>
      <Link className={styles.link} href={pathname} locale="en" onClick={() => handleLocaleChange('en')}>
        en
      </Link>
      <Link className={styles.link} href={pathname} locale="de" onClick={() => handleLocaleChange('de')}>
        de
      </Link>
      <Link className={styles.link} href={pathname} locale="ru" onClick={() => handleLocaleChange('ru')}>
        ru
      </Link>
    </div>
  );
};

export default SwichLang;